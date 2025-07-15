const productsRaw = [
  {
    HN1001: {
      name: "Fabricare Liquid Detergent 500ml",
      category: "HOME CARE",
      src: "/product/Home/1.png",
      code: "HN1001",
      mrp: 215.0,
      weight: 500,
      discountPrice: 110.0,
      businessValue: 47,
      rating: 4.5,
      reviews: 128,
      inStock: true,
      description:
        "An advanced liquid detergent that effectively removes stains while being gentle on fabrics, leaving clothes fresh and clean.",
      benefit:
        "Deep cleanses clothes, retains fabric softness, and imparts a long-lasting fragrance. Suitable for both machine and hand washing, ensuring convenience and efficiency.",
      usageTips:
        "Use as directed on the label for best results. For tough stains, pre-soak clothes in a diluted solution before washing.",
    },
    HN1002: {
      name: "GR Sanitone Toilet Cleaner 500ml",
      src: "/product/Home/2.png",
      category: "HOME CARE",
      code: "HN1002",
      mrp: 155.0,
      weight: 500,
      discountPrice: 75.0,
      businessValue: 352,
      rating: 4.5,
      reviews: 128,
      inStock: true,
      description:
        "A powerful toilet cleaner formulated to remove tough stains, kill germs, and leave toilets sparkling clean.",
      benefit:
        "Effectively removes limescale and tough stains, eliminates odor-causing bacteria, and ensures hygienic freshness after every use.",
      usageTips:
        "Apply around the bowl and under the rim, leave for 10 minutes, then scrub and flush for a spotless finish.",
    },
    HN1003: {
      name: "GR Fabricool After Wash 250ml",
      src: "/product/Home/3.png",
      category: "HOME CARE",
      code: "HN1003",
      mrp: 146.0,
      weight: 250,
      discountPrice: 50.0,
      businessValue: 30,
      rating: 3.5,
      reviews: 8,
      inStock: true,
      description:
        "A premium after-wash fabric conditioner that adds softness and freshness to your clothes.",
      benefit:
        "Reduces static cling, enhances fabric texture, and imparts a delightful fragrance. Helps maintain the vibrancy and longevity of fabrics.",
      usageTips:
        "Add directly to the rinse cycle of your washing machine or dilute for hand-washing. Avoid pouring directly onto clothes.",
    },
    HN1004: {
      name: "Kitchen Scrub 3pcs (with SS Thread)",
      src: "/product/Home/4.png",
      category: "HOME CARE",
      code: "HN1004",
      mrp: 68.0,
      weight: 500,
      discountPrice: 40.0,
      businessValue: 15,
      rating: 4.3,
      reviews: 562,
      inStock: true,
      description:
        "A durable and efficient kitchen scrub designed for heavy-duty cleaning, perfect for scrubbing away tough food residues and stains from utensils and surfaces.",
      benefit:
        "Tough on grime but gentle on surfaces. Ergonomic design provides a comfortable grip. Versatile for cookware, countertops, and utensils.",
      usageTips:
        "Rinse thoroughly before and after use. Use with dish soap for optimal results on greasy stains.",
    },
    HN1005: {
      name: "Multipurpose Cleaning Scrubber 1pc",
      src: "/product/Home/5.png",
      category: "HOME CARE",
      code: "HN1005",
      mrp: 135.0,
      weight: 500,
      discountPrice: 60.0,
      businessValue: 22,
      rating: 4.2,
      reviews: 108,
      inStock: true,
      description:
        "A versatile scrubber suitable for various cleaning tasks, ensuring spotless results on multiple surfaces.",
      benefit:
        "Highly effective on tough stains and grime. Long-lasting and durable. Safe for use on a variety of surfaces, including tiles, countertops, and more.",
      usageTips:
        "Use with an appropriate cleaning agent for stubborn stains. Replace periodically for maximum efficiency.",
    },

    HN1006: {
      name: "Multi-Purpose Stain Remover 200ml",
      src: "/product/Home/6.png",
      category: "HOME CARE",
      code: "HN1006",
      weight: 200,
      mrp: 180.0,
      discountPrice: 90.0,
      businessValue: 37,
      rating: 4.0,
      reviews: 58,
      inStock: true,
      description:
        "A concentrated stain remover specially designed to tackle stubborn stains on clothes, upholstery, and more.",
      benefit:
        "Quickly dissolves tough stains without damaging fabric or surface integrity. Easy-to-use formula suitable for various materials.",
      usageTips:
        "Apply directly on the stain, wait for a few minutes, and then wash or wipe. Test on an inconspicuous area before use.",
    },
    HN1007: {
      name: "Bathroom Tile Cleaner 500ml",
      src: "/product/Home/7.png",
      category: "HOME CARE",
      code: "HN1007",
      mrp: 390.0,
      weight: 500,
      discountPrice: 275.0,
      businessValue: 86,
      rating: 4.3,
      reviews: 82,
      inStock: true,
      description:
        "A specialized cleaner for bathroom tiles that removes dirt, grime, and watermarks, leaving surfaces sparkling clean.",
      benefit:
        "Effectively removes stubborn stains, soap scum, and hard water deposits. Leaves a fresh and hygienic finish.",
      usageTips:
        "Spray directly onto tiles, scrub gently, and rinse with water. Wear gloves for prolonged use.",
    },
    HN1008: {
      name: "Dish Wash Plus (Green) 500ml",
      src: "/product/Home/8.png",
      category: "HOME CARE",
      code: "HN1008",
      mrp: 220.0,
      weight: 500,
      discountPrice: 100.0,
      businessValue: 48,
      rating: 4.8,
      reviews: 528,
      inStock: true,
      description:
        "A high-performance liquid dishwashing solution designed to cut through grease and tough food residues effectively.",
      benefit:
        "Gentle on hands, tough on grease. Provides a rich lather, ensuring spotless dishes with minimal effort.",
      usageTips:
        "Dilute a small amount in water for regular cleaning or use directly for tough grease.",
    },
    HN1009: {
      name: "Florex Plus Cleaner 500ml",
      src: "/product/Home/9.png",
      category: "HOME CARE",
      code: "HN1009",
      mrp: 165.0,
      weight: 500,
      discountPrice: 85.0,
      businessValue: 37,
      rating: 4.0,
      reviews: 328,
      inStock: true,
      description:
        "A versatile floor cleaner that disinfects and leaves a pleasant fragrance, ensuring a clean and germ-free environment.",
      benefit:
        "Kills 99.9% of germs while effectively removing dirt and stains. Leaves a long-lasting fresh fragrance.",
      usageTips:
        "Dilute in water as per instructions for mopping. Use undiluted on tough stains for better results.",
    },
    HN1010: {
      name: "Glass Cleaner 500ml",
      src: "/product/Home/10.png",
      category: "HOME CARE",
      code: "HN1010",
      mrp: 250.0,
      weight: 500,
      discountPrice: 125.0,
      businessValue: 55,
      rating: 4.5,
      reviews: 58,
      inStock: true,
      description:
        "A streak-free glass cleaner that ensures crystal-clear surfaces with minimal effort.",
      benefit:
        "Removes smudges, fingerprints, and dust effectively. Leaves a streak-free shine and enhances visibility.",
      usageTips:
        "Spray directly on glass surfaces and wipe with a clean, dry cloth for a sparkling finish.",
    },
    HC001: {
      name: "மோரிங்கோ கேப்ஸூல் | MORINGO CAPSULES 60tablets",
      src: "/product/Health/1.png",
      category: "HEALTH CARE",
      code: "HC001",
      mrp: 975.0,
      weight: 500,
      discountPrice: 450.0,
      businessValue: 187,
      rating: 4.5,
      reviews: 18,
      inStock: true,
      description:
        "A powerful supplement enriched with the goodness of Moringa, packed with essential vitamins, minerals, and antioxidants.",
      benefit:
        "Boosts immunity, supports overall health, promotes energy levels, and helps improve digestive functions. Rich in antioxidants, it aids in detoxification and reduces inflammation.",
      usageTips:
        "Take one capsule daily with water, preferably after meals, for best results.",
    },
    HC002: {
      name: "சந்தி வலி நிவாரண கேப்ஸூல் | JOINT PAIN RELIEVER CAPSULE 30tablets",
      src: "/product/Health/2.png",
      category: "HEALTH CARE",
      code: "HC002",
      mrp: 1140.0,
      weight: 500,
      discountPrice: 550.0,
      businessValue: 227,
      rating: 5.0,
      reviews: 11,
      inStock: true,
      description:
        "A specially formulated capsule to provide relief from joint pain and improve mobility.",
      benefit:
        "Helps reduce joint inflammation, strengthens cartilage, and improves flexibility for a more active lifestyle.",
      usageTips:
        "Consume one capsule twice a day with warm water after meals for effective relief from joint discomfort.",
    },
    HC003: {
      name: "ஸ்டாமினா பூஸ்டர் | GR NATURE CARE STAMINA BOOSTER 10tablets",
      src: "/product/Health/3.png",
      category: "HEALTH CARE",
      code: "HC003",
      mrp: 1190.0,
      weight: 500,
      discountPrice: 600.0,
      businessValue: 223,
      rating: 4.5,
      reviews: 28,
      inStock: true,
      description:
        "An energy-enhancing supplement designed to boost stamina and endurance naturally.",
      benefit:
        "Improves energy levels, enhances physical performance, and reduces fatigue. Supports overall vitality and well-being.",
      usageTips:
        "Take one tablet daily with milk or water before workouts or during times of high physical activity.",
    },
    HC004: {
      name: "ஆர்கானிக் மொரிங்கா டீ | GR NATURE FRESH ORGANIC MORINGA TEA 100gm",
      src: "/product/Health/4.png",
      category: "HEALTH CARE",
      code: "HC004",
      mrp: 399.0,
      weight: 500,
      discountPrice: 200.0,
      businessValue: 89,
      rating: 4.3,
      reviews: 118,
      inStock: true,
      description:
        "A refreshing and nutrient-rich organic Moringa tea to rejuvenate your body and mind.",
      benefit:
        "Boosts metabolism, supports weight management, and provides essential antioxidants. Promotes relaxation and enhances digestion.",
      usageTips:
        "Steep one teaspoon of tea in hot water for 3-5 minutes. Consume twice daily for maximum benefits.",
    },
    HC005: {
      name: "வலி நிவாரண எண்ணெய் | GR Pain Relief Oil",
      src: "/product/Health/5.png",
      category: "HEALTH CARE",
      code: "HC005",
      mrp: 180.0,
      weight: 500,
      discountPrice: 100.0,
      businessValue: 37,
      rating: 4.9,
      reviews: 58,
      inStock: true,
      description:
        "An effective herbal pain relief oil to alleviate aches and soreness in muscles and joints.",
      benefit:
        "Provides quick relief from pain, reduces inflammation, and enhances blood circulation in the affected areas.",
      usageTips:
        "Massage gently onto the affected area 2-3 times a day for immediate and long-lasting relief.",
    },
    PC001: {
      name: "Natural Aloe Vera Gel 60gm",
      src: "/product/Personal/1.png",
      category: "Personal CARE",
      code: "PC001",
      mrp: 99.0,
      weight: 500,
      discountPrice: 50.0,
      businessValue: 24,
      rating: 4.2,
      reviews: 58,
      inStock: true,
      description:
        "A soothing and hydrating aloe vera gel enriched with natural extracts to nourish and rejuvenate your skin.",
      benefit:
        "Deeply moisturizes skin, soothes irritation, and promotes a healthy glow. Ideal for reducing sunburn, dryness, and minor cuts.",
      usageTips:
        "Apply a small amount directly to the skin or hair as needed. Use twice daily for optimal hydration and repair.",
    },
    PC002: {
      name: "ALOENOVA (Aloevera MILK SOAP) 80gm",
      src: "/product/Personal/2.png",
      category: "Personal CARE",
      code: "PC002",
      mrp: 60.0,
      weight: 100,
      discountPrice: 30.0,
      businessValue: 13,
      rating: 4.5,
      reviews: 368,
      inStock: true,
      description:
        "A luxurious soap infused with aloe vera and milk to cleanse and nourish your skin naturally.",
      benefit:
        "Gently cleanses while retaining skin moisture. Promotes softer, smoother, and radiant skin with daily use.",
      usageTips:
        "Use during your daily bath or shower. Lather and rinse thoroughly for a refreshing feel.",
    },
    PC003: {
      name: "ALOENOVA (Lemon Grass Soap) 100gm",
      src: "/product/Personal/3.png",
      category: "Personal CARE",
      code: "PC003",
      mrp: 60.0,
      weight: 100,
      discountPrice: 30.0,
      businessValue: 13,
      rating: 3.8,
      reviews: 418,
      inStock: true,
      description:
        "An invigorating soap made with lemongrass extracts to refresh and purify your skin.",
      benefit:
        "Cleanses deeply, revitalizes the senses, and leaves skin soft and hydrated. Ideal for oily or acne-prone skin.",
      usageTips:
        "Lather onto wet skin and rinse thoroughly. Use daily for a refreshing and rejuvenating experience.",
    },
    PC004: {
      name: "GEEAAR RED ONION HAIR OIL 200ml",
      src: "/product/Personal/4.png",
      category: "Personal CARE",
      code: "PC004",
      mrp: 210.0,
      weight: 200,
      discountPrice: 100.0,
      businessValue: 41,
      rating: 4.7,
      reviews: 158,
      inStock: true,
      description:
        "A nutrient-rich hair oil with red onion extracts to strengthen hair and promote healthy growth.",
      benefit:
        "Reduces hair fall, strengthens roots, and promotes shiny, thicker hair. Helps combat dandruff and scalp dryness.",
      usageTips:
        "Massage gently onto the scalp and hair. Leave for 1-2 hours or overnight before washing off.",
    },
    PC005: {
      name: "GEEAAR BODY LOTION 200ML",
      src: "/product/Personal/5.png",
      category: "Personal CARE",
      code: "PC005",
      mrp: 152.0,
      weight: 200,
      discountPrice: 75.0,
      businessValue: 34,
      rating: 4.1,
      reviews: 28,
      inStock: true,
      description:
        "A nourishing body lotion formulated to provide long-lasting hydration and softness to your skin.",
      benefit:
        "Moisturizes deeply, improves skin texture, and provides a protective barrier against dryness and irritation.",
      usageTips:
        "Apply generously all over the body after a shower or whenever your skin feels dry.",
    },
    PC006: {
      name: "GEEAAR ANTI-DANDRUFF SHAMPOO 200ml",
      src: "/product/Personal/6.png",
      category: "Personal CARE",
      code: "PC006",
      mrp: 195.0,
      weight: 200,
      discountPrice: 100.0,
      businessValue: 41,
      rating: 4.5,
      reviews: 210,
      inStock: true,
      description:
        "An effective anti-dandruff shampoo designed to cleanse and nourish your scalp while eliminating dandruff.",
      benefit:
        "Reduces dandruff, soothes scalp irritation, and leaves hair soft and manageable. Promotes a healthy scalp environment.",
      usageTips:
        "Apply to wet hair, lather well, and rinse thoroughly. Use 2-3 times a week for best results.",
    },
    PC007: {
      name: "GEEAAR HERBAL SHAMPOO 200ml",
      src: "/product/Personal/7.png",
      category: "Personal CARE",
      code: "PC007",
      mrp: 185.0,
      weight: 500,
      discountPrice: 90.0,
      businessValue: 40,
      rating: 4.3,
      reviews: 188,
      inStock: true,
      description:
        "A herbal shampoo enriched with natural ingredients to cleanse and nourish hair, leaving it soft and shiny.",
      benefit:
        "Strengthens hair follicles, adds shine, and reduces breakage. Suitable for all hair types.",
      usageTips:
        "Apply to damp hair, massage into a rich lather, and rinse thoroughly. Use regularly for best results.",
    },
    PC008: {
      name: "GEEAAR BODY WASH 200ml",
      src: "/product/Personal/8.png",
      category: "Personal CARE",
      code: "PC008",
      mrp: 175.0,
      weight: 200,
      discountPrice: 85.0,
      businessValue: 38,
      rating: 4.8,
      reviews: 78,
      inStock: true,
      description:
        "A refreshing body wash infused with gentle cleansers and natural extracts to leave your skin soft and fragrant.",
      benefit:
        "Cleanses without stripping natural oils, leaving skin smooth and hydrated. Provides a refreshing and soothing experience.",
      usageTips:
        "Apply to a loofah or directly onto wet skin. Lather and rinse thoroughly for a clean, refreshing feel.",
    },
    PC009: {
      name: "FACE WASH CAKE 30gm",
      src: "/product/Personal/9.png",
      category: "Personal CARE",
      code: "PC009",
      mrp: 110.0,
      weight: 30,
      discountPrice: 60.0,
      businessValue: 24,
      rating: 4.8,
      reviews: 428,
      inStock: true,
      description:
        "A compact face wash cake formulated to cleanse and refresh your skin, removing dirt and impurities.",
      benefit:
        "Gently cleanses pores, removes excess oil, and leaves skin feeling fresh and radiant. Ideal for travel use.",
      usageTips:
        "Rub onto wet hands to create a lather. Massage onto face and rinse thoroughly. Use twice daily.",
    },
    AC001: {
      name: "PLASTIC RESTORER 200ml",
      src: "/product/Auto/1.png",
      category: "AUTO CARE",
      code: "AC001",
      mrp: 450.0,
      weight: 200,
      discountPrice: 220.0,
      businessValue: 97,
      rating: 4.5,
      reviews: 23,
      inStock: true,
      description:
        "A premium plastic restorer that revives and protects dull and faded plastic surfaces on your vehicle, providing a showroom-like shine.",
      benefit:
        "Restores color and shine to faded plastics, protects against harmful UV rays, and prevents future damage. Keeps your car's interior and exterior plastic parts looking fresh and new.",
      useTips:
        "Clean the surface thoroughly before use. Apply the restorer evenly with a microfiber cloth. Let it dry to see a noticeable difference in the surface finish.",
    },
    AC002: {
      name: "CAR INTERIOR POLISH 200ml",
      src: "/product/Auto/2.png",
      category: "AUTO CARE",
      code: "AC002",
      mrp: 250.0,
      weight: 200,
      discountPrice: 125.0,
      businessValue: 50,
      rating: 3.5,
      reviews: 18,
      inStock: true,
      description:
        "A specially formulated polish for maintaining the shine and cleanliness of your car's interior surfaces, keeping them looking brand new.",
      benefit:
        "Cleans and enhances the gloss of dashboards, leather, and vinyl surfaces. Provides anti-static properties to repel dust and maintain cleanliness for longer.",
      useTips:
        "Spray a small amount onto a soft cloth. Wipe it gently over the desired interior surface. Buff lightly for a natural shine.",
    },
    AC003: {
      name: "CAR SCREEN WASH Liquid 200ml",
      src: "/product/Auto/3.png",
      category: "AUTO CARE",
      code: "AC003",
      mrp: 250.0,
      weight: 200,
      discountPrice: 125.0,
      businessValue: 50,
      rating: 4.7,
      reviews: 110,
      inStock: true,
      description:
        "An advanced cleaning liquid for car windshields and windows, removing dirt, grime, and water spots effectively.",
      benefit:
        "Improves visibility by eliminating streaks, smudges, and grime. Enhances windshield clarity for safe driving.",
      useTips:
        "Dilute the liquid as per instructions. Apply using a spray bottle or directly into the windshield washer tank for on-the-go cleaning.",
    },
    AC004: {
      name: "CAR DASHBOARD Shine 100gm",
      src: "/product/Auto/4.png",
      category: "AUTO CARE",
      code: "AC004",
      mrp: 285.0,
      weight: 200,
      discountPrice: 145.0,
      businessValue: 58,
      rating: 4.6,
      reviews: 88,
      inStock: true,
      description:
        "A specialized shine formula designed for car dashboards, offering a glossy, non-greasy finish that lasts long.",
      benefit:
        "Protects against UV damage and fading while restoring the natural look of dashboards and trims.",
      useTips:
        "Apply a small amount onto a clean, dry cloth. Gently spread across the dashboard and buff to a smooth finish.",
    },
    AC005: {
      name: "CAR Ultra Foam SHAMPOO 200ml",
      src: "/product/Auto/5.png",
      category: "AUTO CARE",
      code: "AC005",
      mrp: 145.0,
      weight: 200,
      discountPrice: 75.0,
      businessValue: 29,
      rating: 4.2,
      reviews: 135,
      inStock: true,
      description:
        "A high-foam car shampoo that lifts dirt and grime effectively while being gentle on your car's paint.",
      benefit:
        "Produces a rich foam that cleans thoroughly without stripping wax or protective coatings. Leaves your car shining and streak-free.",
      useTips:
        "Mix with water as directed. Apply using a sponge or foam cannon, and rinse thoroughly for a spotless finish.",
    },
    AC006: {
      name: "G.COAT WINDSHIELD PROTECTOR 50ml",
      src: "/product/Auto/6.png",
      category: "AUTO CARE",
      code: "AC006",
      mrp: 540.0,
      weight: 200,
      discountPrice: 270.0,
      businessValue: 105,
      rating: 5.0,
      reviews: 11,
      inStock: true,
      description:
        "A cutting-edge windshield protector that provides a hydrophobic coating, repelling water and improving driving visibility.",
      benefit:
        "Enhances safety by repelling rain and reducing glare. Long-lasting and easy to apply.",
      useTips:
        "Clean the windshield thoroughly. Apply the protector evenly in circular motions. Let it cure before exposing to water.",
    },
    AC007: {
      name: "WATER SPOT REMOVER 200ml",
      src: "/product/Auto/7.png",
      category: "AUTO CARE",
      code: "AC007",
      mrp: 520.0,
      weight: 200,
      discountPrice: 260.0,
      businessValue: 115,
      rating: 5.0,
      reviews: 20,
      inStock: true,
      description:
        "An effective solution for removing water spots and mineral deposits from your vehicle's surfaces, restoring clarity and shine.",
      benefit:
        "Eliminates stubborn water stains from glass, paint, and chrome without damaging the surface. Leaves a streak-free, polished finish.",
      useTips:
        "Spray directly onto the affected area. Use a microfiber cloth to scrub gently and wipe away the residue for a clean look.",
    },
  },
];

export const products = Object.values(productsRaw[0]).map((product) => ({
  ...product,
  src: product.src || "/Meta/meta.jpg", // Fallback image if src is not provided
}));