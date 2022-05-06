import { randomBytes } from "crypto";

const promotions = new Map();

export const save = ({
  promotionsname,
  promotionscode,
  description,
  item,
  itmoff,
}) => {
  const promotion = {
    id: randomBytes(16).toString("hex"),
    promotionsname,
    promotionscode,
    description,
    item,
    itmoff,
    postedDate: new Date(),
  };
  promotions.set(promotion.id, promotion);
  return promotion;
};

export const get = (id) => {
  const promotion = promotions.get(id);
  if (!promotion) {
    throw new Error(`Not found for the ID ${id}`);
  }
  return promotion;
};

export const getAll = () => {
  return [...promotions.values()];
};

export const update = (
  id,
  { promotionsname, promotionscode, description, item, itmoff }
) => {
  if (!promotions.has(id)) {
    throw new Error(`Not found for the ID ${id}`);
  }
  const promotion = {
    id,
    promotionsname,
    promotionscode,
    description,
    item,
    itmoff,
    postedDate: new Date(),
  };
  promotions.set(promotion.id, promotion);
  return promotion;
};

export const deletePost = (id) => {
  if (!promotions.has(id)) {
    throw new Error(`Not found for the ID ${id}`);
  }
  promotions.delete(id);
};
