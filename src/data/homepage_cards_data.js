export const images_desktop = [
    'street/img1.webp',
    'street/img2.webp',
    'street/img3.webp',
    'street/img5.webp',
    'street/img7.webp',
    'street/img8.webp',
    'portraits/img2.webp',
    'portraits/img5.webp',
    'portraits/img4.webp',
];

export const images_mobile = [
    'portraits/img01_mobile_915.webp',
    'portraits/img43_mobile_915.webp',
    'portraits/img2_mobile_915.webp',
    'street/img9_mobile_915.webp',
    'portraits/img8_mobile_915.webp',
    'street/img18_mobile_915.webp',
    'street/img23_mobile_915.webp',
    'portraits/img4_mobile_915.webp',
    'portraits/img5_mobile_915.webp',
    'street/img16_mobile_915.webp',
];

export const page_text = {
    "English": {
        "top.message": "Documenting life through memories 📸"
    },
    "Português": {
        "top.message": "Documentando a vida através de memórias 📸"
    }
}

export const images_to_preload = [
    ...new Set(images_desktop.concat(images_mobile))
];

