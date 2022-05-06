import { randomBytes } from "crypto";

const customerprofiles = new Map();

export const save = ({
  firstname,
  lastname,
  username,
  email,
  phonenumber,
  password,
}) => {
  const customerprofile = {
    id: randomBytes(16).toString("hex"),
    firstname,
    lastname,
    username,
    email,
    phonenumber,
    password,
    postedDate: new Date(),
  };
  customerprofiles.set(customerprofile.id, customerprofile);
  return customerprofile;
};

export const get = (id) => {
  const customerprofile = customerprofiles.get(id);
  if (!customerprofile) {
    throw new Error(`Not found for the ID ${id}`);
  }
  return customerprofile;
};

export const getAll = () => {
  return [...customerprofiles.values()];
};

export const update = (
  id,
  { firstname, lastname, username, email, phonenumber, password }
) => {
  if (!customerprofiles.has(id)) {
    throw new Error(`Not found for the ID ${id}`);
  }
  const customerprofile = {
    id,
    firstname,
    lastname,
    username,
    email,
    phonenumber,
    password,
    postedDate: new Date(),
  };
  customerprofiles.set(customerprofile.id, customerprofile);
  return customerprofile;
};

export const deletePost = (id) => {
  if (!customerprofiles.has(id)) {
    throw new Error(`Not found for the ID ${id}`);
  }
  customerprofiles.delete(id);
};
