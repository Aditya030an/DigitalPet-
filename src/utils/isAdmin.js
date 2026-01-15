import { ADMIN_EMAIL } from "../constants/admin";

export const isAdmin = (user) => {
  return user?.email === ADMIN_EMAIL;
};
