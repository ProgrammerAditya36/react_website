import { atom } from "recoil";

import {testimonials} from "./testimonials";
const testimonialsAtom = atom({
  key: "testimonialsAtom",
  default: testimonials,
});

export default testimonialsAtom;
