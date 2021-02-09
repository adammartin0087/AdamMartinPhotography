import http from "./httpService";

export async function getAllImages() {
  const { data } = await http.get("/GetImages");
  data.Items.sort((a, b) => (a.Longitude > b.Longitude ? 1 : -1));
  return data.Items;
}

export function getImageUrl(code, w, h) {
  const width = w > 0 ? ",w_" + w : "";
  const height = h > 0 ? ",h_" + h : "";
  return `https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill${width}${height}/${code}`;
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
  getAllImages,
  getCategory,
  getImageUrl
};
