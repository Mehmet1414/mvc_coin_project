import * as yup from "yup";

const passwwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}$/;

export const schema = yup.object().shape({
  // methotlarda '' icinde uyari yazilabilir
  email: yup.string().email().required(),
  age: yup
    .number()
    .positive()
    .min(18, "The age range should be 18 to 100")
    // number ve string girmeyince hata veriyor
    .max(100, "The age range should be 18 to 100")
    .required(),
  passwword: yup.string().min(5, "Password must be longer than 5 characters"),
});
