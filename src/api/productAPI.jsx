import instance from "./instance";

export const create = (product) => {
  const url = "/products";
  return instance.post(url, product);
};
export const list = (params="") => {
  const url = "/products?"+params;
  return instance.get(url);
};
export const read = (id) => {
  const url = "/products/" + id;
  return instance.get(url);
};
export const remove = (id) => {
  const url = "/products/" + id;
  return instance.delete(url);
};
export const update = (product) => {
  const url = "/products/" + product.id;
  return instance.patch(url, product);
};

