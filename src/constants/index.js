import { records, screening, user, apps } from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: apps,
    link: "/onboarding",
  },
  {
    name: "records",
    imgUrl: screening,
    link: "/resume-records",
  },
  // {
  //   name: "screening",
  //   imgUrl: screening,
  //   link: "/screening-schedules",
  // },

  {
    name: "profile",
    imgUrl: user,
    link: "/profile",
  },
];
