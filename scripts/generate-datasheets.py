import io
import json
import os
import pymupdf as fitz
from PIL import Image

ROOT_DIR = "D:/GitHub/longguard"
PUBLIC_DIR = os.path.join(ROOT_DIR, "public")
DATASHEETS_DIR = os.path.join(PUBLIC_DIR, "datasheets")
PRODUCTS_JSON_PATH = os.path.join(ROOT_DIR, "scripts", "_products_dump.json")

# Color Palette (RGB 0.0 - 1.0)
def hex_to_rgb(hex_str):
    h = hex_str.lstrip("#")
    return tuple(int(h[i:i+2], 16) / 255.0 for i in (0, 2, 4))

C_BG = hex_to_rgb("#0B0A0A")          # Deep Graphite Warm Charcoal
C_SUBTLE = hex_to_rgb("#121110")      # Warm Dark Slate
C_CARD = hex_to_rgb("#181716")        # Surface Card
C_CARD_ALT = hex_to_rgb("#1E1C1A")    # Slightly lighter card row
C_BORDER = hex_to_rgb("#2C2926")      # Subtle 1px border
C_AMBER = hex_to_rgb("#F59E0B")       # Kinetic Warm Amber
C_AMBER_DIM = hex_to_rgb("#D97706")   # Deep Amber
C_BLUE = hex_to_rgb("#0066CC")        # Cyber Blue (Logo upper arc)
C_WHITE = hex_to_rgb("#FFFFFF")       # Crisp Primary Text
C_STONE_200 = hex_to_rgb("#E7E5E4")   # Light Body Text
C_STONE_300 = hex_to_rgb("#D6D3D1")   # Editorial Copy
C_STONE_400 = hex_to_rgb("#A8A29E")   # Muted Secondary Text
C_STONE_500 = hex_to_rgb("#78716C")   # Engineering Label

PAGE_W = 595.28  # A4 width in pt
PAGE_H = 841.89  # A4 height in pt
MARGIN = 28.0


def sanitize_pdf_text(text):
    if not text:
        return ""
    return (
        str(text)
        .replace("\u2014", " - ")
        .replace("\u2013", "-")
        .replace("\u2019", "'")
        .replace("\u2018", "'")
        .replace("\u201c", '"')
        .replace("\u201d", '"')
        .replace("\u2022", "|")
        .replace("\u2264", "<=")
        .replace("\u2265", ">=")
        .replace("\u00d7", "x")
        .replace("\u223c", "~")
        .replace("\u207b\u00b9", "/min")
        .replace("\u00b7", " ")
    )


def fit_textbox(page, rect, text, fontname="helv", fontsize=8.0, min_fontsize=4.8, color=C_WHITE, align=0):
    """Automatically scales font size down until text fits 100% inside rect."""
    clean_text = sanitize_pdf_text(text)
    fs = fontsize
    while fs >= min_fontsize:
        rc = page.insert_textbox(rect, clean_text, fontname=fontname, fontsize=fs, color=color, align=align)
        if rc >= 0:
            return
        # Undo and retry smaller
        fs -= 0.35
    page.insert_textbox(rect, clean_text, fontname=fontname, fontsize=min_fontsize, color=color, align=align)


def load_image_bytes_and_size(rel_web_path):
    full_path = os.path.join(PUBLIC_DIR, rel_web_path.lstrip("/"))
    if not os.path.exists(full_path):
        raise FileNotFoundError(f"Missing image asset: {full_path}")
    with Image.open(full_path) as im:
        im_rgb = im.convert("RGB")
        w, h = im_rgb.size
        buf = io.BytesIO()
        im_rgb.save(buf, format="JPEG", quality=94)
        return buf.getvalue(), w, h


def insert_image_contained(page, rect, rel_web_path, bg_color=C_BG, border_color=C_BORDER):
    page.draw_rect(rect, color=border_color, fill=bg_color, width=0.7)
    img_bytes, iw, ih = load_image_bytes_and_size(rel_web_path)
    pad = 4.0
    inner = fitz.Rect(rect.x0 + pad, rect.y0 + pad, rect.x1 - pad, rect.y1 - pad)
    scale = min(inner.width / iw, inner.height / ih)
    draw_w = iw * scale
    draw_h = ih * scale
    cx = (inner.x0 + inner.x1) / 2.0
    cy = (inner.y0 + inner.y1) / 2.0
    target = fitz.Rect(cx - draw_w / 2.0, cy - draw_h / 2.0, cx + draw_w / 2.0, cy + draw_h / 2.0)
    page.insert_image(target, stream=img_bytes)


def insert_image_covered(page, rect, rel_web_path, border_color=C_BORDER):
    img_bytes, iw, ih = load_image_bytes_and_size(rel_web_path)
    target_ratio = rect.width / rect.height
    src_ratio = iw / ih
    with Image.open(os.path.join(PUBLIC_DIR, rel_web_path.lstrip("/"))) as im:
        im_rgb = im.convert("RGB")
        if src_ratio > target_ratio:
            new_w = int(ih * target_ratio)
            left = (iw - new_w) // 2
            im_crop = im_rgb.crop((left, 0, left + new_w, ih))
        else:
            new_h = int(iw / target_ratio)
            top = (ih - new_h) // 2
            im_crop = im_rgb.crop((0, top, iw, top + new_h))
        buf = io.BytesIO()
        im_crop.save(buf, format="JPEG", quality=93)
        page.insert_image(rect, stream=buf.getvalue())
    page.draw_rect(rect, color=border_color, fill=None, width=0.6)


def draw_brand_header(page, doc_id, page_label, model_code):
    header_rect = fitz.Rect(0, 0, PAGE_W, 56)
    page.draw_rect(header_rect, color=None, fill=C_SUBTLE)
    page.draw_line(fitz.Point(0, 1.2), fitz.Point(PAGE_W, 1.2), color=C_AMBER, width=2.4)
    page.draw_line(fitz.Point(0, 56), fitz.Point(PAGE_W, 56), color=C_BORDER, width=0.7)

    cx, cy = MARGIN + 14, 29
    page.draw_circle(fitz.Point(cx, cy), 13.5, color=C_BORDER, fill=C_BG, width=0.8)
    page.draw_oval(fitz.Rect(cx - 10.5, cy - 10.5, cx + 10.5, cy + 2), color=C_BLUE, width=2.0)
    page.draw_oval(fitz.Rect(cx - 10.5, cy - 2, cx + 10.5, cy + 10.5), color=C_AMBER, width=2.0)
    pts = [
        fitz.Point(cx - 7.5, cy - 1.5),
        fitz.Point(cx - 4.0, cy + 4.5),
        fitz.Point(cx, cy - 4.5),
        fitz.Point(cx + 4.0, cy + 4.5),
        fitz.Point(cx + 7.5, cy - 1.5),
    ]
    for i in range(len(pts) - 1):
        page.draw_line(pts[i], pts[i + 1], color=C_WHITE, width=1.6)
    page.draw_circle(fitz.Point(cx, cy - 4.5), 1.4, color=C_BLUE, fill=C_BLUE)
    page.draw_circle(fitz.Point(cx - 4.0, cy + 4.5), 1.3, color=C_AMBER, fill=C_AMBER)
    page.draw_circle(fitz.Point(cx + 4.0, cy + 4.5), 1.3, color=C_AMBER, fill=C_AMBER)

    page.insert_text(fitz.Point(MARGIN + 34, 26), "LONGGUARD", fontname="hebo", fontsize=12.5, color=C_WHITE)
    page.insert_text(fitz.Point(MARGIN + 34, 37), "T E C H N O L O G Y", fontname="helv", fontsize=6.5, color=C_STONE_400)

    page.draw_line(fitz.Point(MARGIN + 124, 16), fitz.Point(MARGIN + 124, 42), color=C_BORDER, width=0.8)

    page.insert_text(
        fitz.Point(MARGIN + 132, 25),
        "GDUT Institute of CNC Equipment Collaborative Innovation",
        fontname="hebo",
        fontsize=7.2,
        color=C_STONE_200,
    )
    page.insert_text(
        fitz.Point(MARGIN + 132, 36),
        "Intelligent Protection Technology R&D Center • Official Engineering Datasheet",
        fontname="helv",
        fontsize=6.5,
        color=C_AMBER,
    )

    badge_rect = fitz.Rect(PAGE_W - MARGIN - 138, 14, PAGE_W - MARGIN, 43)
    page.draw_rect(badge_rect, color=C_BORDER, fill=C_CARD, width=0.7)
    page.insert_text(fitz.Point(badge_rect.x0 + 8, 25), f"DOC ID: {doc_id}", fontname="hebo", fontsize=7.0, color=C_AMBER)
    page.insert_text(fitz.Point(badge_rect.x0 + 8, 36), f"{model_code}  |  {page_label}", fontname="helv", fontsize=6.7, color=C_STONE_300)


def draw_brand_footer(page, brand, page_str):
    footer_y = PAGE_H - 34
    page.draw_rect(fitz.Rect(0, footer_y, PAGE_W, PAGE_H), color=None, fill=C_SUBTLE)
    page.draw_line(fitz.Point(0, footer_y), fitz.Point(PAGE_W, footer_y), color=C_BORDER, width=0.7)
    page.insert_text(
        fitz.Point(MARGIN, footer_y + 13),
        f"{brand['legalEntity']} ({brand['globalBrand']})  •  {brand['warrantyBadge']}",
        fontname="hebo",
        fontsize=6.5,
        color=C_STONE_300,
    )
    page.insert_text(
        fitz.Point(MARGIN, footer_y + 23),
        f"HQ: Room 81-516 / B1-516, GDUT CNC Innovation Institute, Shishan, Nanhai, Foshan, Guangdong  |  Tel: {brand['hotlineDisplay']}  |  {brand['email']}",
        fontname="helv",
        fontsize=5.8,
        color=C_STONE_400,
    )
    page.insert_text(
        fitz.Point(PAGE_W - MARGIN - 48, footer_y + 18),
        page_str,
        fontname="hebo",
        fontsize=7.0,
        color=C_AMBER,
    )


def build_product_pages(doc, prod, brand):
    # =========================================================================
    # PAGE 1: HERO, IMPACT METRICS, 4 ENGINEERING FEATURES, 3 BENTO MACROS
    # =========================================================================
    p1 = doc.new_page(width=PAGE_W, height=PAGE_H)
    p1.draw_rect(fitz.Rect(0, 0, PAGE_W, PAGE_H), color=None, fill=C_BG)
    draw_brand_header(p1, prod["datasheetDocId"], "PAGE 01 / 02", prod["modelCode"])

    y_top = 68.0
    content_w = PAGE_W - 2 * MARGIN

    left_w = 314.0
    right_x = MARGIN + left_w + 10.0
    right_w = content_w - left_w - 10.0
    hero_h = 256.0

    # Category & Model Badge
    cat_pill = fitz.Rect(MARGIN, y_top, MARGIN + 230, y_top + 16)
    p1.draw_rect(cat_pill, color=C_AMBER_DIM, fill=C_CARD, width=0.7)
    p1.insert_text(
        fitz.Point(MARGIN + 7, y_top + 11),
        f"FLAGSHIP {prod['indexNumber']}  •  {prod['category'].upper()}",
        fontname="hebo",
        fontsize=6.5,
        color=C_AMBER,
    )

    # Model Code & Spec Code
    model_str = prod["modelCode"]
    if prod.get("catalogSpecCode"):
        model_str += f" (Spec: {prod['catalogSpecCode']})"
    p1.insert_text(fitz.Point(MARGIN, y_top + 33), model_str, fontname="hebo", fontsize=15.0, color=C_WHITE)

    # Product Full Name
    p1.insert_text(fitz.Point(MARGIN, y_top + 46), f"{prod['name']} — {prod['shortTitle']}", fontname="hebo", fontsize=8.8, color=C_AMBER)

    # Headline
    headline_rect = fitz.Rect(MARGIN, y_top + 50, MARGIN + left_w, y_top + 74)
    fit_textbox(p1, headline_rect, prod["headline"], fontname="hebo", fontsize=9.8, min_fontsize=7.5, color=C_STONE_200)

    # Overview Box
    ov_rect = fitz.Rect(MARGIN, y_top + 75, MARGIN + left_w, y_top + 145)
    p1.draw_rect(ov_rect, color=C_BORDER, fill=C_SUBTLE, width=0.6)
    fit_textbox(
        p1,
        fitz.Rect(ov_rect.x0 + 7, ov_rect.y0 + 5, ov_rect.x1 - 7, ov_rect.y1 - 4),
        prod["overview"],
        fontname="helv",
        fontsize=7.3,
        min_fontsize=5.8,
        color=C_STONE_300,
    )

    # 2x2 Grid of 4 Feature Narratives under Overview
    feat_y = y_top + 150
    feat_h = 50.0
    feat_col_w = (left_w - 6.0) / 2.0
    for idx, feat in enumerate(prod["features"][:4]):
        row = idx // 2
        col = idx % 2
        fx = MARGIN + col * (feat_col_w + 6.0)
        fy = feat_y + row * (feat_h + 6.0)
        frect = fitz.Rect(fx, fy, fx + feat_col_w, fy + feat_h)
        p1.draw_rect(frect, color=C_BORDER, fill=C_CARD, width=0.6)
        fit_textbox(
            p1,
            fitz.Rect(fx + 6, fy + 3, fx + feat_col_w - 5, fy + 16),
            f"0{idx+1}  {feat['title']}",
            fontname="hebo",
            fontsize=6.7,
            min_fontsize=5.6,
            color=C_AMBER,
        )
        fit_textbox(
            p1,
            fitz.Rect(fx + 6, fy + 16, fx + feat_col_w - 5, fy + feat_h - 3),
            feat["description"],
            fontname="helv",
            fontsize=6.2,
            min_fontsize=5.0,
            color=C_STONE_300,
        )

    # Right Studio Hero Visual Card
    studio_rect = fitz.Rect(right_x, y_top, right_x + right_w, y_top + hero_h)
    insert_image_contained(p1, studio_rect, prod["studioImage"], bg_color=C_BG, border_color=C_AMBER_DIM)
    s_badge = fitz.Rect(right_x + 6, y_top + 6, right_x + right_w - 6, y_top + 19)
    p1.draw_rect(s_badge, color=C_BORDER, fill=C_SUBTLE, width=0.5)
    p1.insert_text(
        fitz.Point(s_badge.x0 + 6, s_badge.y0 + 9.2),
        f"{prod['modelCode']} • 3200K STUDIO MASTER",
        fontname="hebo",
        fontsize=6.1,
        color=C_AMBER,
    )

    # =========================================================================
    # STAGE 2 ON PAGE 1: 4 CORE IMPACT METRICS BAR
    # =========================================================================
    m_y = y_top + hero_h + 11.0
    m_h = 56.0
    m_w = (content_w - 3 * 8.0) / 4.0
    for idx, m in enumerate(prod["metrics"][:4]):
        mx = MARGIN + idx * (m_w + 8.0)
        mrect = fitz.Rect(mx, m_y, mx + m_w, m_y + m_h)
        p1.draw_rect(mrect, color=C_BORDER, fill=C_CARD, width=0.7)
        p1.draw_line(fitz.Point(mx, m_y), fitz.Point(mx + m_w, m_y), color=C_AMBER, width=1.8)
        p1.insert_text(fitz.Point(mx + 8, m_y + 11), f"KEY METRIC 0{idx+1}", fontname="hebo", fontsize=5.8, color=C_AMBER)
        p1.insert_text(fitz.Point(mx + 8, m_y + 27), sanitize_pdf_text(m["value"]), fontname="hebo", fontsize=13.0, color=C_WHITE)
        fit_textbox(
            p1,
            fitz.Rect(mx + 8, m_y + 30, mx + m_w - 6, m_y + m_h - 3),
            m["label"],
            fontname="helv",
            fontsize=6.3,
            min_fontsize=5.0,
            color=C_STONE_300,
        )

    # =========================================================================
    # STAGE 4 ON PAGE 1: ASYMMETRIC CRAFTSMANSHIP BENTO (3 MACRO CARDS)
    # =========================================================================
    b_header_y = m_y + m_h + 14.0
    p1.insert_text(
        fitz.Point(MARGIN, b_header_y + 8),
        "MATERIAL SCIENCE & MICRO-ARCHITECTURE  •  3200K STUDIO MACRO INSPECTION",
        fontname="hebo",
        fontsize=7.8,
        color=C_AMBER,
    )
    p1.draw_line(fitz.Point(MARGIN, b_header_y + 12), fitz.Point(PAGE_W - MARGIN, b_header_y + 12), color=C_BORDER, width=0.6)

    b_y = b_header_y + 18.0
    b_h = PAGE_H - 42.0 - b_y
    b_w = (content_w - 2 * 8.0) / 3.0

    for idx, bcard in enumerate(prod["bentoCards"][:3]):
        bx = MARGIN + idx * (b_w + 8.0)
        brect = fitz.Rect(bx, b_y, bx + b_w, b_y + b_h)
        p1.draw_rect(brect, color=C_BORDER, fill=C_CARD, width=0.7)

        img_h = b_h * 0.54
        img_rect = fitz.Rect(bx + 5, b_y + 5, bx + b_w - 5, b_y + 5 + img_h)
        insert_image_covered(p1, img_rect, bcard["imagePath"], border_color=C_BORDER)

        ty = b_y + 5 + img_h + 10
        p1.insert_text(fitz.Point(bx + 7, ty), bcard["materialTag"].upper(), fontname="hebo", fontsize=5.8, color=C_AMBER)

        title_rect = fitz.Rect(bx + 7, ty + 2, bx + b_w - 7, ty + 26)
        fit_textbox(p1, title_rect, bcard["title"], fontname="hebo", fontsize=7.4, min_fontsize=6.0, color=C_WHITE)

        desc_rect = fitz.Rect(bx + 7, ty + 26, bx + b_w - 7, b_y + b_h - 4)
        fit_textbox(p1, desc_rect, bcard["description"], fontname="helv", fontsize=6.3, min_fontsize=5.0, color=C_STONE_300)

    draw_brand_footer(p1, brand, "PAGE 01 / 02")

    # =========================================================================
    # PAGE 2: ANATOMICAL SUBSYSTEMS, FIELD DEPLOYMENT, & 100% FULL SPEC TABLE
    # =========================================================================
    p2 = doc.new_page(width=PAGE_W, height=PAGE_H)
    p2.draw_rect(fitz.Rect(0, 0, PAGE_W, PAGE_H), color=None, fill=C_BG)
    draw_brand_header(p2, prod["datasheetDocId"], "PAGE 02 / 02", prod["modelCode"])

    y2 = 68.0
    top_sec_h = 214.0
    col1_w = 262.0
    col2_x = MARGIN + col1_w + 10.0
    col2_w = content_w - col1_w - 10.0

    # Left Box: Anatomical & Mechanical Subsystems (Hotspots)
    hs_box = fitz.Rect(MARGIN, y2, MARGIN + col1_w, y2 + top_sec_h)
    p2.draw_rect(hs_box, color=C_BORDER, fill=C_SUBTLE, width=0.7)
    p2.insert_text(
        fitz.Point(MARGIN + 10, y2 + 15),
        f"ANATOMICAL & MECHANICAL SUBSYSTEMS ({len(prod['hotspots'])} NODES)",
        fontname="hebo",
        fontsize=7.4,
        color=C_AMBER,
    )
    p2.draw_line(fitz.Point(MARGIN + 10, y2 + 20), fitz.Point(MARGIN + col1_w - 10, y2 + 20), color=C_BORDER, width=0.5)

    hy = y2 + 24.0
    row_step = (top_sec_h - 28.0) / max(len(prod["hotspots"]), 4)
    for spot in prod["hotspots"]:
        p2.draw_circle(fitz.Point(MARGIN + 16, hy + 8.5), 6.2, color=C_AMBER, fill=C_AMBER)
        p2.insert_text(fitz.Point(MARGIN + 14.0, hy + 11.0), str(spot["id"]), fontname="hebo", fontsize=6.8, color=C_BG)
        fit_textbox(
            p2,
            fitz.Rect(MARGIN + 26, hy + 0.5, MARGIN + col1_w - 7, hy + 15.5),
            f"{spot['title']} [{spot['zone']}]",
            fontname="hebo",
            fontsize=6.5,
            min_fontsize=4.6,
            color=C_WHITE,
        )
        fit_textbox(
            p2,
            fitz.Rect(MARGIN + 26, hy + 14.5, MARGIN + col1_w - 7, hy + row_step - 1),
            spot["description"],
            fontname="helv",
            fontsize=6.0,
            min_fontsize=4.8,
            color=C_STONE_300,
        )
        hy += row_step

    # Right Box: Real-World Industrial Deployment
    dep_box = fitz.Rect(col2_x, y2, col2_x + col2_w, y2 + top_sec_h)
    p2.draw_rect(dep_box, color=C_BORDER, fill=C_SUBTLE, width=0.7)
    fit_textbox(
        p2,
        fitz.Rect(col2_x + 8, y2 + 5, col2_x + col2_w - 8, y2 + 19),
        f"FIELD DEPLOYMENT • {prod['deployment']['locationBadge'].upper()}",
        fontname="hebo",
        fontsize=6.3,
        min_fontsize=5.2,
        color=C_AMBER,
    )
    act_rect = fitz.Rect(col2_x + 8, y2 + 21, col2_x + col2_w - 8, y2 + 121)
    insert_image_covered(p2, act_rect, prod["deployment"]["imagePath"], border_color=C_BORDER)

    fit_textbox(
        p2,
        fitz.Rect(col2_x + 8, y2 + 123, col2_x + col2_w - 8, y2 + 137),
        prod["deployment"]["title"],
        fontname="hebo",
        fontsize=7.3,
        min_fontsize=6.0,
        color=C_WHITE,
    )
    fit_textbox(
        p2,
        fitz.Rect(col2_x + 8, y2 + 136, col2_x + col2_w - 8, y2 + 180),
        prod["deployment"]["narrative"],
        fontname="helv",
        fontsize=6.1,
        min_fontsize=5.0,
        color=C_STONE_300,
    )

    em_w = (col2_w - 16.0 - 8.0) / 3.0
    em_y = y2 + 182.0
    for idx, em in enumerate(prod["deployment"]["environmentalMetrics"][:3]):
        ex = col2_x + 8 + idx * (em_w + 4.0)
        erect = fitz.Rect(ex, em_y, ex + em_w, y2 + top_sec_h - 5)
        p2.draw_rect(erect, color=C_BORDER, fill=C_CARD, width=0.5)
        fit_textbox(p2, fitz.Rect(ex + 4, em_y + 2, ex + em_w - 3, em_y + 14), em["value"], fontname="hebo", fontsize=6.4, min_fontsize=5.2, color=C_AMBER)
        fit_textbox(p2, fitz.Rect(ex + 4, em_y + 13, ex + em_w - 3, y2 + top_sec_h - 6), em["label"], fontname="helv", fontsize=5.4, min_fontsize=4.6, color=C_STONE_400)

    # =========================================================================
    # STAGE 6 ON PAGE 2: 100% UNABBREVIATED TECHNICAL SPECIFICATION TABLE
    # =========================================================================
    spec_y = y2 + top_sec_h + 13.0
    p2.insert_text(
        fitz.Point(MARGIN, spec_y + 9),
        f"COMPLETE FACTORY TECHNICAL SPECIFICATIONS  •  {prod['modelCode']} (100% UNABBREVIATED)",
        fontname="hebo",
        fontsize=8.2,
        color=C_AMBER,
    )
    p2.draw_line(fitz.Point(MARGIN, spec_y + 14), fitz.Point(PAGE_W - MARGIN, spec_y + 14), color=C_AMBER_DIM, width=0.8)

    table_top = spec_y + 19.0
    specs = prod["specifications"]
    num_rows = len(specs)
    avail_h = (PAGE_H - 106.0) - table_top
    row_h = min(21.5, avail_h / max(num_rows + 1, 1))

    th_rect = fitz.Rect(MARGIN, table_top, PAGE_W - MARGIN, table_top + row_h)
    p2.draw_rect(th_rect, color=C_BORDER, fill=C_SUBTLE, width=0.7)
    p2.insert_text(fitz.Point(MARGIN + 8, table_top + row_h * 0.68), "ENGINEERING GROUP", fontname="hebo", fontsize=6.4, color=C_AMBER)
    p2.insert_text(fitz.Point(MARGIN + 130, table_top + row_h * 0.68), "PARAMETER", fontname="hebo", fontsize=6.4, color=C_AMBER)
    p2.insert_text(fitz.Point(MARGIN + 265, table_top + row_h * 0.68), "VERIFIED FACTORY SPECIFICATION", fontname="hebo", fontsize=6.4, color=C_AMBER)

    ry = table_top + row_h
    for idx, s in enumerate(specs):
        r_rect = fitz.Rect(MARGIN, ry, PAGE_W - MARGIN, ry + row_h)
        bg = C_CARD if idx % 2 == 0 else C_CARD_ALT
        p2.draw_rect(r_rect, color=C_BORDER, fill=bg, width=0.4)
        text_y = ry + row_h * 0.68
        p2.insert_text(fitz.Point(MARGIN + 8, text_y), sanitize_pdf_text(s["group"].upper()), fontname="helv", fontsize=5.8, color=C_STONE_400)
        p2.insert_text(fitz.Point(MARGIN + 130, text_y), sanitize_pdf_text(s["parameter"]), fontname="hebo", fontsize=6.7, color=C_STONE_200)
        val_str = sanitize_pdf_text(s["value"])
        if len(val_str) > 58:
            fit_textbox(
                p2,
                fitz.Rect(MARGIN + 265, ry + 1.5, PAGE_W - MARGIN - 6, ry + row_h - 1),
                val_str,
                fontname="helv",
                fontsize=6.4,
                min_fontsize=5.2,
                color=C_WHITE,
            )
        else:
            p2.insert_text(fitz.Point(MARGIN + 265, text_y), val_str, fontname="helv", fontsize=6.7, color=C_WHITE)
        ry += row_h

    # Direct Enterprise Procurement Callout Box above Footer
    proc_y = PAGE_H - 92.0
    proc_rect = fitz.Rect(MARGIN, proc_y, PAGE_W - MARGIN, PAGE_H - 42.0)
    p2.draw_rect(proc_rect, color=C_AMBER_DIM, fill=C_CARD, width=0.9)
    p2.draw_line(fitz.Point(MARGIN, proc_y), fitz.Point(PAGE_W - MARGIN, proc_y), color=C_AMBER, width=2.0)
    p2.insert_text(
        fitz.Point(MARGIN + 10, proc_y + 14),
        f"DIRECT FACTORY PROCUREMENT & PILOT DEPLOYMENT - {prod['modelCode']}",
        fontname="hebo",
        fontsize=7.8,
        color=C_AMBER,
    )
    fit_textbox(
        p2,
        fitz.Rect(MARGIN + 10, proc_y + 17, PAGE_W - MARGIN - 10, proc_y + 31),
        f"Manufacturer: {brand['legalEntity']}  |  R&D Base: {brand['rdCenter']} ({brand['institute']})",
        fontname="hebo",
        fontsize=6.3,
        min_fontsize=5.4,
        color=C_WHITE,
    )
    fit_textbox(
        p2,
        fitz.Rect(MARGIN + 10, proc_y + 30, PAGE_W - MARGIN - 10, proc_y + 46),
        f"Hotline / WhatsApp: {brand['hotlineDisplay']}   |   Engineering Email: {brand['email']}   |   Warranty: {brand['warrantyFull']}",
        fontname="helv",
        fontsize=6.3,
        min_fontsize=5.4,
        color=C_STONE_300,
    )

    draw_brand_footer(p2, brand, "PAGE 02 / 02")


def build_master_cover_page(doc, products, brand, hero_asset):
    p = doc.new_page(width=PAGE_W, height=PAGE_H)
    p.draw_rect(fitz.Rect(0, 0, PAGE_W, PAGE_H), color=None, fill=C_BG)
    draw_brand_header(p, "LG-CAT-2026-MASTER", "COVER & MATRIX", "ALL 8 FLAGSHIPS")

    y = 70.0
    p.insert_text(fitz.Point(MARGIN, y + 14), "2026 OFFICIAL GLOBAL HARDWARE PORTFOLIO & ENGINEERING CATALOG", fontname="hebo", fontsize=8.0, color=C_AMBER)
    p.insert_text(fitz.Point(MARGIN, y + 34), "Human-Centric Bionics. Precision Thermal Armor.", fontname="hebo", fontsize=19.0, color=C_WHITE)
    p.insert_text(
        fitz.Point(MARGIN, y + 49),
        f"{brand['legalEntity']}  •  {brand['fullAffiliation']}",
        fontname="helv",
        fontsize=7.8,
        color=C_STONE_300,
    )

    hero_rect = fitz.Rect(MARGIN, y + 60, PAGE_W - MARGIN, y + 265)
    insert_image_covered(p, hero_rect, hero_asset["path"], border_color=C_AMBER_DIM)

    my = y + 282.0
    p.insert_text(fitz.Point(MARGIN, my), "MASTER 8-MODEL ENGINEERING SPECIFICATION MATRIX", fontname="hebo", fontsize=8.8, color=C_AMBER)
    p.draw_line(fitz.Point(MARGIN, my + 5), fitz.Point(PAGE_W - MARGIN, my + 5), color=C_BORDER, width=0.7)

    ty = my + 12.0
    rh = 36.0
    th_rect = fitz.Rect(MARGIN, ty, PAGE_W - MARGIN, ty + 22)
    p.draw_rect(th_rect, color=C_BORDER, fill=C_SUBTLE, width=0.7)
    p.insert_text(fitz.Point(MARGIN + 6, ty + 14), "MODEL CODE", fontname="hebo", fontsize=6.5, color=C_AMBER)
    p.insert_text(fitz.Point(MARGIN + 84, ty + 14), "PRODUCT NAME", fontname="hebo", fontsize=6.5, color=C_AMBER)
    p.insert_text(fitz.Point(MARGIN + 206, ty + 14), "CORE MECHANISM", fontname="hebo", fontsize=6.5, color=C_AMBER)
    p.insert_text(fitz.Point(MARGIN + 348, ty + 14), "CAPACITY / PRECISION", fontname="hebo", fontsize=6.5, color=C_AMBER)
    p.insert_text(fitz.Point(MARGIN + 472, ty + 14), "NET WEIGHT", fontname="hebo", fontsize=6.5, color=C_AMBER)

    ry = ty + 22.0
    for idx, prod in enumerate(products):
        rrect = fitz.Rect(MARGIN, ry, PAGE_W - MARGIN, ry + rh)
        bg = C_CARD if idx % 2 == 0 else C_CARD_ALT
        p.draw_rect(rrect, color=C_BORDER, fill=bg, width=0.4)
        qc = prod["quickCompare"]
        p.insert_text(fitz.Point(MARGIN + 6, ry + 14), prod["modelCode"], fontname="hebo", fontsize=7.2, color=C_AMBER)
        p.insert_text(fitz.Point(MARGIN + 6, ry + 25), f"Doc: {prod['datasheetDocId']}", fontname="helv", fontsize=5.8, color=C_STONE_400)
        fit_textbox(p, fitz.Rect(MARGIN + 84, ry + 4, MARGIN + 202, ry + rh - 3), prod["name"], fontname="hebo", fontsize=6.8, min_fontsize=5.5, color=C_WHITE)
        fit_textbox(p, fitz.Rect(MARGIN + 206, ry + 4, MARGIN + 344, ry + rh - 3), qc["mechanism"], fontname="helv", fontsize=6.4, min_fontsize=5.2, color=C_STONE_300)
        fit_textbox(p, fitz.Rect(MARGIN + 348, ry + 4, MARGIN + 468, ry + rh - 3), f"{qc['capacityOrTemp']} ({qc['powerOrCycle']})", fontname="hebo", fontsize=6.4, min_fontsize=5.2, color=C_STONE_200)
        p.insert_text(fitz.Point(MARGIN + 472, ry + 18), sanitize_pdf_text(qc["netWeight"]), fontname="hebo", fontsize=7.2, color=C_AMBER)
        ry += rh

    draw_brand_footer(p, brand, "MASTER CATALOG")


def main():
    os.makedirs(DATASHEETS_DIR, exist_ok=True)
    with open(PRODUCTS_JSON_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)

    products = data["PRODUCTS"]
    brand = data["BRAND_CREDENTIALS"]
    hero_asset = data["HERO_COMPOSITE_ASSET"]

    master_doc = fitz.open()
    build_master_cover_page(master_doc, products, brand, hero_asset)

    for prod in products:
        single_doc = fitz.open()
        build_product_pages(single_doc, prod, brand)
        out_rel = prod["datasheetPath"].lstrip("/")
        out_full = os.path.join(PUBLIC_DIR, out_rel)
        os.makedirs(os.path.dirname(out_full), exist_ok=True)
        single_doc.save(out_full, garbage=4, deflate=True)
        single_doc.close()
        size_kb = os.path.getsize(out_full) / 1024.0
        print(f"  [OK] Generated {out_rel} (2 pages, {size_kb:.1f} KB)")

        build_product_pages(master_doc, prod, brand)

    master_out = os.path.join(PUBLIC_DIR, brand["masterCatalogPdfPath"].lstrip("/"))
    master_doc.save(master_out, garbage=4, deflate=True)
    master_doc.close()
    print(f"  [OK] Generated Master Catalog {brand['masterCatalogPdfPath']} (17 pages, {os.path.getsize(master_out)/1024.0:.1f} KB)")


if __name__ == "__main__":
    main()
