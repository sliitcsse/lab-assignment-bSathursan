import { randomBytes } from "crypto";

const traderprofiles = new Map();

export const save = ({
  firstname,
  lastname,
  username,
  email,
  phonenumber,
  password,
}) => {
  const traderprofile = {
    id: randomBytes(16).toString("hex"),
    firstname,
    lastname,
    username,
    email,
    phonenumber,
    password,
    postedDate: new Date(),
  };
  traderprofiles.set(traderprofile.id, traderprofile);
  return traderprofile;
};

export const get = (id) => {
  const traderprofile = traderprofiles.get(id);
  if (!traderprofile) {
    throw new Error(`Not found for the ID ${id}`);
  }
  return traderprofile;
};

export const getAll = () => {
  return [...traderprofiles.values()];
};

export const update = (
  id,
  { firstname, lastname, username, email, phonenumber, password }
) => {
  if (!traderprofiles.has(id)) {
    throw new Error(`Not found for the ID ${id}`);
  }
  const traderprofile = {
    id,
    firstname,
    lastname,
    username,
    email,
    phonenumber,
    password,
    postedDate: new Date(),
  };
  traderprofiles.set(traderprofile.id, traderprofile);
  return traderprofile;
};

export const deletePost = (id) => {
  if (!traderprofiles.has(id)) {
    throw new Error(`Not found for the ID ${id}`);
  }
  traderprofiles.delete(id);
};
