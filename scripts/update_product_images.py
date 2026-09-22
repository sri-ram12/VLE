import re

def update_products():
    path = 'src/data/products.ts'
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Image mapping for each product ID
    mapping = {
        'elec-01': '/images/products/wires_cables_coils.jpg',
        'elec-02': '/images/products/havells_products.jpg',
        'elec-03': '/images/products/mcb_rccb_units.jpg',
        'elec-04': '/images/products/goldmedal_switches.jpg',
        'elec-05': '/images/products/goldmedal_lighting_panel.jpg',
        'elec-06': '/images/products/ceiling_fan_cartons.jpg',
        'elec-07': '/images/products/legrand_db_mcb.jpg',
        'elec-08': '/images/products/goldmedal_lighting_panel.jpg',
        'plumb-09': '/images/products/astral_cpvc_pipes.jpg',
        'plumb-10': '/images/products/sudhakar_rigid_pvc.jpg',
        'plumb-11': '/images/products/plumbing_fittings_elbows.jpg',
        'plumb-12': '/images/products/plumbing_fittings_elbows.jpg',
        'plumb-13': '/images/products/brass_valves_taps.jpg',
        'plumb-14': '/images/products/dualtone_white_chrome_taps.jpg',
        'plumb-15': '/images/products/plumbing_fittings_elbows.jpg',
        'plumb-16': '/images/products/brass_valves_taps.jpg',
        'sanit-17': '/images/products/ceramic_oval_wash_basin.jpg',
        'sanit-18': '/images/products/chrome_wall_mixer_faucet.jpg',
        'sanit-19': '/images/products/tiered_ceramic_pedestal_basin.jpg',
        'sanit-20': '/images/products/chrome_bib_taps_panel.jpg',
        'sanit-21': '/images/products/luxury_rain_shower_column.jpg',
        'sanit-22': '/images/products/bathroom_accessories_set.jpg',
        'sanit-23': '/images/products/stainless_towel_rail_accessories.jpg',
        'hard-24': '/images/products/hardware_tools_kit.jpg',
        'hard-25': '/images/products/brass_valves_taps.jpg',
        'hard-26': '/images/products/hardware_tools_kit.jpg',
        'hard-27': '/images/products/hardware_tools_kit.jpg',
        'hard-28': '/images/products/electrician_hand_tools.jpg',
        'hard-29': '/images/products/hardware_tools_kit.jpg',
        'hard-30': '/images/products/astral_cpvc_pipes.jpg',
        'sanit-31': '/images/products/designer_gold_mandala_basin.jpg',
        'sanit-32': '/images/products/tree_art_pedestal_basin.jpg',
        'sanit-33': '/images/products/luxury_rain_shower_column.jpg',
        'sanit-34': '/images/products/dualtone_white_chrome_taps.jpg',
        'plumb-35': '/images/products/vectus_water_tanks.jpg',
        'plumb-36': '/images/products/domestic_water_pumps.jpg',
        'plumb-37': '/images/products/prince_piping_systems.jpg',
        'elec-38': '/images/products/cona_switchgear_mcb.jpg',
        'elec-39': '/images/products/ceiling_fan_cartons.jpg',
        'elec-40': '/images/products/storage_water_heater_geyser.jpg'
    }

    # For each product id, find its block and replace the image line
    for pid, img_path in mapping.items():
        # Match from id: 'pid' up to the next closing bracket or image: '...'
        pattern = rf"(id:\s*'{pid}',[\s\S]*?image:\s*)'[^']+'"
        replacement = rf"\1'{img_path}'"
        content, count = re.subn(pattern, replacement, content)
        if count > 0:
            print(f"Updated image for {pid} -> {img_path}")
        else:
            print(f"WARNING: Could not update {pid}")

    # Also update CATEGORIES_CONFIG images
    cat_mapping = {
        'electricals': '/images/products/goldmedal_switches.jpg',
        'plumbing': '/images/products/astral_cpvc_pipes.jpg',
        'sanitary': '/images/products/designer_gold_mandala_basin.jpg',
        'hardware': '/images/products/hardware_tools_kit.jpg'
    }

    for cid, cimg in cat_mapping.items():
        pattern = rf"(id:\s*'{cid}'[\s\S]*?image:\s*)'[^']+'"
        content, count = re.subn(pattern, rf"\1'{cimg}'", content)
        if count > 0:
            print(f"Updated category {cid} -> {cimg}")

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Products update complete!")

    # Now update Hero.tsx showcase products
    hero_path = 'src/components/hero/Hero.tsx'
    with open(hero_path, 'r', encoding='utf-8') as f:
        hero_content = f.read()

    hero_content = hero_content.replace(
        "image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'",
        "image: '/images/products/wires_cables_coils.jpg'"
    )
    hero_content = hero_content.replace(
        "image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=600&q=80'",
        "image: '/images/products/astral_cpvc_pipes.jpg'"
    )
    hero_content = hero_content.replace(
        "image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80'",
        "image: '/images/products/chrome_wall_mixer_faucet.jpg'"
    )
    hero_content = hero_content.replace(
        "image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80'",
        "image: '/images/products/hardware_tools_kit.jpg'"
    )

    with open(hero_path, 'w', encoding='utf-8') as f:
        f.write(hero_content)
    print("Hero update complete!")

if __name__ == '__main__':
    update_products()
