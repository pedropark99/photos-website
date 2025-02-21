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
    'portraits/img2.webp',
    'street/img9.webp',
    'portraits/img8.webp',
    'street/img18.webp',
    'street/img23.webp',
    'portraits/img4.webp',
    'portraits/img5.webp',
    'street/img16.webp',
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

