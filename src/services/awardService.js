import http from "./httpService";

export async function getAwards() {
  const { data } = await http.get("/GetAwards");
  const { Items } = data;
  return Items;
}

export default {
  getAwards,
};
