import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/; // regex hazir form

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
  password: yup
    .string()
    .required()
    .matches(passwordRules, "Please choose a stronger password")
    .min(5, "Password must be longer than 5 characters"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "password does not match"),
  checkbox: yup.boolean().oneOf([true]),
});
