import os
from PIL import Image

def crop_and_save():
    os.makedirs('public/images/products', exist_ok=True)
    
    # 1. Open all base showroom images
    banner = Image.open('public/images/showroom/banner_brands_board.jpg')
    board = banner.crop((140, 90, 845, 505)) # (705, 415)
    
    basin_wall = Image.open('public/images/showroom/showroom_basin_wall_goldmedal.png').convert('RGB')
    shower_tap = Image.open('public/images/showroom/showroom_shower_tap_display.png').convert('RGB')
    pedestal_floor = Image.open('public/images/showroom/showroom_pedestal_basins_floor.jpg').convert('RGB')
    pedestal_row = Image.open('public/images/showroom/showroom_pedestal_marble_row.png').convert('RGB')

    # Dictionary of crops: { filename: (source_image, box) }
    crops = {
        # --- ELECTRICAL CROPS ---
        'goldmedal_switches.jpg': (board, (15, 10, 150, 165)),
        'havells_products.jpg': (board, (145, 10, 295, 165)),
        'crompton_fans_pumps.jpg': (board, (290, 10, 430, 165)),
        'cona_switchgear_mcb.jpg': (board, (15, 165, 145, 315)),
        'legrand_db_mcb.jpg': (board, (290, 165, 428, 315)),
        'wires_cables_coils.jpg': (board, (15, 320, 100, 405)),
        'mcb_rccb_units.jpg': (board, (98, 320, 185, 405)),
        'goldmedal_lighting_panel.jpg': (basin_wall, (740, 40, 880, 360)),
        'storage_water_heater_geyser.jpg': (basin_wall, (880, 50, 980, 300)),
        'ceiling_fan_cartons.jpg': (pedestal_floor, (0, 100, 195, 455)),

        # --- PLUMBING CROPS ---
        'astral_cpvc_pipes.jpg': (board, (425, 10, 565, 165)),
        'sudhakar_rigid_pvc.jpg': (board, (560, 10, 695, 165)),
        'finolex_plumbing_pipes.jpg': (board, (145, 165, 290, 315)),
        'vectus_water_tanks.jpg': (board, (425, 165, 565, 315)),
        'prince_piping_systems.jpg': (board, (560, 165, 695, 315)),
        'plumbing_fittings_elbows.jpg': (board, (275, 320, 360, 405)),
        'brass_valves_taps.jpg': (board, (440, 320, 530, 405)),
        'domestic_water_pumps.jpg': (pedestal_row, (720, 20, 950, 175)),

        # --- SANITARY CROPS ---
        'designer_gold_mandala_basin.jpg': (basin_wall, (380, 210, 510, 330)),
        'designer_marble_art_basin.jpg': (basin_wall, (250, 5, 380, 125)),
        'golden_woodgrain_basin.jpg': (basin_wall, (620, 240, 735, 360)),
        'ceramic_oval_wash_basin.jpg': (basin_wall, (105, 105, 245, 235)),
        'luxury_rain_shower_column.jpg': (shower_tap, (90, 90, 220, 410)),
        'chrome_wall_mixer_faucet.jpg': (shower_tap, (220, 100, 335, 350)),
        'dualtone_white_chrome_taps.jpg': (shower_tap, (340, 100, 455, 360)),
        'chrome_bib_taps_panel.jpg': (shower_tap, (460, 100, 575, 360)),
        'bathroom_accessories_set.jpg': (board, (360, 320, 440, 405)),
        'tree_art_pedestal_basin.jpg': (pedestal_floor, (200, 85, 430, 460)),
        'fluted_pillar_pedestal_basin.jpg': (pedestal_floor, (140, 95, 260, 450)),
        'spiral_marble_pedestal_basin.jpg': (pedestal_row, (20, 120, 270, 460)),
        'tiered_ceramic_pedestal_basin.jpg': (pedestal_row, (230, 30, 420, 430)),
        'dark_marble_counter_basin.jpg': (pedestal_row, (460, 265, 610, 395)),
        'stainless_towel_rail_accessories.jpg': (shower_tap, (170, 370, 370, 440)),

        # --- HARDWARE CROPS ---
        'electrician_hand_tools.jpg': (board, (185, 320, 275, 405)),
        'hardware_tools_kit.jpg': (board, (530, 320, 695, 405))
    }

    print(f'Extracting {len(crops)} real product images...')
    for filename, (img, box) in crops.items():
        cropped = img.crop(box)
        # Ensure aspect ratio is clean & resize to standard high quality
        target_path = os.path.join('public/images/products', filename)
        cropped.save(target_path, quality=95)
        print(f'Saved {filename} ({cropped.size})')

if __name__ == '__main__':
    crop_and_save()
