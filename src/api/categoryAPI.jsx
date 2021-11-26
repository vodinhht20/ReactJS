import instance from "./instance";

export const createCate = (category) => {
  const url = "/categories";
  return instance.post(url, category);
};
export const listCate = (params="") => {
  const url = "/categories?"+params;
  return instance.get(url);
};
export const readCate = (id) => {
  const url = "/categories/" + id;
  return instance.get(url);
};
export const removeCate = (id) => {
  const url = "/categories/" + id;
  return instance.delete(url);
};
export const updateCate = (category) => {
  const url = "/categories/" + category.id;
  return instance.patch(url, category);
};

