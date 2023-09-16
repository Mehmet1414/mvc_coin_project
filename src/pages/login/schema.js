import * as yup from "yup";

export const schema = yup.object().shape({
  // methotlarda '' icinde uyari yazilabilir
  email: yup.string().email().required(),
  age: yup.number().required(),
});
