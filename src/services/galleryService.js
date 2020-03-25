const images = [
  {
    category: "underwater",
    name: "Sunset Silkies",
    code: "sunset-silkies",
    location: "Jardines de la Reina, Cuba",
    camera: "Canon 5D Mk III",
    imageUrl: "Sunset-Silkies"
  },
  {
    category: "underwater",
    name: "American Crocodile",
    code: "american-crocodile",
    location: "Jardines de la Reina, Cuba",
    camera: "Canon 5D Mk III",
    imageUrl: "American-Crocodile"
  },
  {
    category: "underwater",
    name: "Golden Rays",
    code: "golden-rays",
    location: "Galápagos, Ecuador",
    camera: "Canon 5D Mk III",
    imageUrl: "Golden-Rays"
  },
  {
    category: "aerial",
    name: "Test",
    code: "test",
    location: "Galápagos, Ecuador",
    camera: "Canon 5D Mk III",
    imageUrl: "American-Crocodile"
  }
];

export function getImages(category) {
  return images.filter(image => image.category === category);
}

export function getImage(code) {
  return images.find(function(image) {
    return image.code === code;
  });
}

export default {
  getImages,
  getImage
};
