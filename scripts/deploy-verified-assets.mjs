import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ARTIFACT_DIR = 'C:/Users/pcdog/.gemini/antigravity/brain/1f156262-dca9-4428-84f8-2a3ed0874106';
const PUBLIC_ASSETS_DIR = 'D:/GitHub/longguard/public/assets';

const ASSET_MAP = [
  // Global Hero
  {
    src: 'hero_composite_main_1792623578263.jpg',
    dest: 'hero/hero-composite-main.webp',
  },

  // Product 01 — LC Power-U/A
  {
    src: 'power_ua_studio_main_v2_1792623182886.jpg',
    dest: 'products/power-ua/studio-main.webp',
  },
  {
    src: 'power_ua_action_automotive_1792623274843.jpg',
    dest: 'products/power-ua/action-automotive.webp',
  },
  {
    src: 'power_ua_bento_gear_joint_1792623362656.jpg',
    dest: 'products/power-ua/bento-gear-joint.webp',
  },
  {
    src: 'power_ua_bento_carbon_spine_1792623453093.jpg',
    dest: 'products/power-ua/bento-carbon-spine.webp',
  },
  {
    src: 'power_ua_bento_armrest_harness_1792623539113.jpg',
    dest: 'products/power-ua/bento-armrest-harness.webp',
  },

  // Product 02 — LC Flex-W
  {
    src: 'flex_w_studio_main_1792620315274.jpg',
    dest: 'products/flex-w/studio-main.webp',
    patchStudioFlexW: true,
  },
  {
    src: 'flex_w_action_logistics_1792623128463.jpg',
    dest: 'products/flex-w/action-logistics.webp',
  },
  {
    src: 'flex_w_bento_lumbar_cushion_1792623175142.jpg',
    dest: 'products/flex-w/bento-lumbar-cushion.webp',
    patchTopLabel: true,
  },
  {
    src: 'flex_w_bento_latex_straps_1792623229092.jpg',
    dest: 'products/flex-w/bento-latex-straps.webp',
  },
  {
    src: 'flex_w_bento_thigh_cuffs_1792623282335.jpg',
    dest: 'products/flex-w/bento-thigh-cuffs.webp',
  },

  // Product 03 — LC Gloves-01
  {
    src: 'gloves_01_studio_main_1792623145775.jpg',
    dest: 'products/gloves-01/studio-main.webp',
  },
  {
    src: 'gloves_01_action_electronics_1792623192750.jpg',
    dest: 'products/gloves-01/action-electronics.webp',
  },
  {
    src: 'gloves_01_tablet_telemetry_ui_1792623237808.jpg',
    dest: 'products/gloves-01/tablet-telemetry-ui.webp',
  },
  {
    src: 'gloves_01_bento_imu_pod_1792623280886.jpg',
    dest: 'products/gloves-01/bento-imu-pod.webp',
  },
  {
    src: 'gloves_01_bento_half_finger_knit_1792623334500.jpg',
    dest: 'products/gloves-01/bento-half-finger-knit.webp',
  },

  // Product 04 — LC Frost-PCM/A
  {
    src: 'frost_pcm_a_studio_main_1792623134495.jpg',
    dest: 'products/frost-pcm-a/studio-main.webp',
  },
  {
    src: 'frost_pcm_a_action_cleanroom_1792623195551.jpg',
    dest: 'products/frost-pcm-a/action-cleanroom.webp',
  },
  {
    src: 'frost_pcm_a_bento_pcm_crystals_1792623243504.jpg',
    dest: 'products/frost-pcm-a/bento-pcm-crystals.webp',
  },
  {
    src: 'frost_pcm_a_bento_tpu_weld_1792623298628.jpg',
    dest: 'products/frost-pcm-a/bento-tpu-weld.webp',
  },
  {
    src: 'frost_pcm_a_bento_side_buckle_1792623354266.jpg',
    dest: 'products/frost-pcm-a/bento-side-buckle.webp',
  },

  // Product 05 — LC Frost-PCM/G
  {
    src: 'frost_pcm_g_studio_main_1792623254148.jpg',
    dest: 'products/frost-pcm-g/studio-main.webp',
  },
  {
    src: 'frost_pcm_g_action_refinery_1792623312049.jpg',
    dest: 'products/frost-pcm-g/action-refinery.webp',
  },
  {
    src: 'frost_pcm_g_bento_fr_fabric_1792623359364.jpg',
    dest: 'products/frost-pcm-g/bento-fr-fabric.webp',
  },
  {
    src: 'frost_pcm_g_bento_reflective_bands_1792623413656.jpg',
    dest: 'products/frost-pcm-g/bento-reflective-bands.webp',
  },
  {
    src: 'frost_pcm_g_bento_velcro_waist_1792623467419.jpg',
    dest: 'products/frost-pcm-g/bento-velcro-waist.webp',
  },

  // Product 06 — LC Frost-TEC/W
  {
    src: 'frost_tec_w_studio_dual_view_1792623220181.jpg',
    dest: 'products/frost-tec-w/studio-dual-view.webp',
  },
  {
    src: 'frost_tec_w_action_power_grid_1792623262944.jpg',
    dest: 'products/frost-tec-w/action-power-grid.webp',
  },
  {
    src: 'frost_tec_w_bento_tec_chiller_1792623297819.jpg',
    dest: 'products/frost-tec-w/bento-tec-chiller.webp',
  },
  {
    src: 'frost_tec_w_bento_front_air_vents_1792623335982.jpg',
    dest: 'products/frost-tec-w/bento-front-air-vents.webp',
  },
  {
    src: 'frost_tec_w_bento_tpu_water_loop_1792623408094.jpg',
    dest: 'products/frost-tec-w/bento-tpu-water-loop.webp',
  },

  // Product 07 — LC Frost-TEC/D
  {
    src: 'frost_tec_d_studio_dual_view_1792620397065.jpg',
    dest: 'products/frost-tec-d/studio-dual-view.webp',
    patchStudioTecD: true,
  },
  {
    src: 'frost_tec_d_action_track_inspection_1792623297710.jpg',
    dest: 'products/frost-tec-d/action-track-inspection.webp',
  },
  {
    src: 'frost_tec_d_bento_peltier_plates_1792623364075.jpg',
    dest: 'products/frost-tec-d/bento-peltier-plates.webp',
  },
  {
    src: 'frost_tec_d_bento_yellow_buckles_1792623432664.jpg',
    dest: 'products/frost-tec-d/bento-yellow-buckles.webp',
  },
  {
    src: 'frost_tec_d_bento_mesh_controller_1792623506771.jpg',
    dest: 'products/frost-tec-d/bento-mesh-controller.webp',
  },

  // Product 08 — LC Frost-ACC/W
  {
    src: 'frost_acc_w_studio_main_1792623302123.jpg',
    dest: 'products/frost-acc-w/studio-main.webp',
  },
  {
    src: 'frost_acc_w_action_foundry_1792623359651.jpg',
    dest: 'products/frost-acc-w/action-foundry.webp',
  },
  {
    src: 'frost_acc_w_bento_micro_compressor_1792623409155.jpg',
    dest: 'products/frost-acc-w/bento-micro-compressor.webp',
  },
  {
    src: 'frost_acc_w_bento_sealed_bladder_1792623459320.jpg',
    dest: 'products/frost-acc-w/bento-sealed-bladder.webp',
  },
  {
    src: 'frost_acc_w_bento_zipper_flame_shell_1792623512398.jpg',
    dest: 'products/frost-acc-w/bento-zipper-flame-shell.webp',
  },
];

async function main() {
  console.log(`Deploying ${ASSET_MAP.length} verified studio/action/bento assets...`);

  for (const item of ASSET_MAP) {
    const srcPath = path.join(ARTIFACT_DIR, item.src);
    const destPath = path.join(PUBLIC_ASSETS_DIR, item.dest);
    await fs.mkdir(path.dirname(destPath), { recursive: true });

    let pipeline = sharp(srcPath);

    if (item.patchTopLabel) {
      // Replace the small top-center tag on flex_w_bento_lumbar_cushion with clean LANGCHENG badge SVG
      const metadata = await pipeline.metadata();
      const w = metadata.width || 1024;
      const h = metadata.height || 1024;
      const badgeSvg = Buffer.from(`
        <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
          <rect x="${Math.round(w * 0.436)}" y="${Math.round(h * 0.241)}" width="${Math.round(w * 0.128)}" height="${Math.round(h * 0.041)}" rx="3" fill="#171717" stroke="#262626" stroke-width="1.5"/>
          <text x="${Math.round(w * 0.500)}" y="${Math.round(h * 0.267)}" text-anchor="middle" fill="#D4CFC7" font-family="Arial, sans-serif" font-weight="700" font-size="${Math.round(w * 0.0155)}" letter-spacing="1.5">LC TECH</text>
        </svg>
      `);
      pipeline = pipeline.composite([{ input: badgeSvg, top: 0, left: 0 }]);
    }

    if (item.patchStudioFlexW) {
      const metadata = await pipeline.metadata();
      const w = metadata.width || 896;
      const h = metadata.height || 1200;
      const badgeSvg = Buffer.from(`
        <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
          <rect x="${Math.round(w * 0.448)}" y="${Math.round(h * 0.197)}" width="${Math.round(w * 0.052)}" height="${Math.round(h * 0.014)}" rx="2" fill="#161822"/>
        </svg>
      `);
      pipeline = pipeline.composite([{ input: badgeSvg, top: 0, left: 0 }]);
    }

    if (item.patchStudioTecD) {
      const metadata = await pipeline.metadata();
      const w = metadata.width || 1408;
      const h = metadata.height || 768;
      const badgeSvg = Buffer.from(`
        <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
          <rect x="${Math.round(w * 0.349)}" y="${Math.round(h * 0.335)}" width="${Math.round(w * 0.036)}" height="${Math.round(h * 0.016)}" rx="2" fill="#1F2022"/>
          <text x="${Math.round(w * 0.367)}" y="${Math.round(h * 0.347)}" text-anchor="middle" fill="#E5E5E5" font-family="Arial, sans-serif" font-weight="700" font-size="${Math.round(w * 0.0056)}" letter-spacing="0.4">LANGCHENG</text>
        </svg>
      `);
      pipeline = pipeline.composite([{ input: badgeSvg, top: 0, left: 0 }]);
    }

    await pipeline.webp({ quality: 92, effort: 5 }).toFile(destPath);
    const stat = await fs.stat(destPath);
    console.log(`  [OK] ${item.dest} (${(stat.size / 1024).toFixed(1)} KB)`);
  }

  console.log('All 41 mapped product/hero assets deployed! Checking legacy compatibility paths...');
  // Also copy studio-dual-view to studio-main.webp if any script checks studio-main.webp
  await fs.copyFile(
    path.join(PUBLIC_ASSETS_DIR, 'products/frost-tec-w/studio-dual-view.webp'),
    path.join(PUBLIC_ASSETS_DIR, 'products/frost-tec-w/studio-main.webp')
  );
  await fs.copyFile(
    path.join(PUBLIC_ASSETS_DIR, 'products/frost-tec-d/studio-dual-view.webp'),
    path.join(PUBLIC_ASSETS_DIR, 'products/frost-tec-d/studio-main.webp')
  );
  console.log('Done!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
