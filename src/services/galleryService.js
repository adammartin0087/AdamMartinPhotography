import images from "./data/images.json";

export function getImageUrl(code, w, h) {
  const width = w > 0 ? ",w_" + w : "";
  const height = h > 0 ? ",h_" + h : "";
  return `https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill${width}${height}/${code}`;
}

export function getAll() {
  return images.sort((a, b) => (a.longitude > b.longitude ? 1 : -1));
}

export function getImages(category) {
  return images.filter((image) => image.category.toLowerCase() === category.toLowerCase());
}

export function getImage(code) {
  return images.find(function (image) {
    return image.code.toLowerCase() === code.toLowerCase();
  });
}

export function getCategory(category) {
  switch (category) {
    case "underwater":
      return "Underwater";
    case "landscape":
      return "Landscape";
    case "pumas":
      return "Pumas";
    case "aerial":
      return "Aerial";
    case "astrophotography":
      return "Astrophotography";
    default:
      return null;
  }
}

export default {
  getAll,
  getImages,
  getImage,
  getCategory,
  getImageUrl,
};
