import { randomBytes } from "crypto";

const items = new Map();

export const save = ({ itemname, description, qty, price, offerprice }) => {
  const item = {
    id: randomBytes(16).toString("hex"),
    itemname,
    description,
    qty,
    price,
    offerprice,

    postedDate: new Date(),
  };
  items.set(item.id, item);
  return item;
};

export const get = (id) => {
  const item = items.get(id);
  if (!item) {
    throw new Error(`Not found for the ID ${id}`);
  }
  return item;
};

export const getAll = () => {
  return [...items.values()];
};

export const update = (
  id,
  { itemname, description, qty, price, offerprice }
) => {
  if (!items.has(id)) {
    throw new Error(`Not found for the ID ${id}`);
  }
  const item = {
    id,
    itemname,
    description,
    qty,
    price,
    offerprice,

    postedDate: new Date(),
  };
  items.set(item.id, item);
  return item;
};

export const deletePost = (id) => {
  if (!items.has(id)) {
    throw new Error(`Not found for the ID ${id}`);
  }
  items.delete(id);
};
