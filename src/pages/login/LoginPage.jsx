import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import UserContex from "../../context/userContex";
import { schema } from "./schema";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, signUser } = useContext(UserContex);

  useEffect(() => {
    if (user) {
      navigate("/coins");
    }
  }, [user]); // user'a bagli olmazsa hata verir(user bilgisi gelmedden navigate  calisir)

  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      checkbox: false,
    },
    validationSchema: schema,

    onSubmit: (values, actions) => {
      console.log(values, actions);
      signUser(values);
      actions.resetForm();

      navigate("/coins");
    },
  });
  //console.log(formik.errors);

  return (
    <>
      <Header />
      <form
        className="w-3/5 max-md:w-1/2 flex flex-col m-auto"
        onSubmit={formik.handleSubmit}
      >
        <label className=" py-5 pb-2" htmlFor="email">
          Email
        </label>
        <input
          className={`${
            formik.errors.email &&
            formik.touched.email &&
            "text-amber-600 border-2 border-amber-600"
          } p-2 rounded-md outline-none text-[#242424] focus:outline-none  `}
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // focus cikisini yakalar
        />
        {/* {formik.errors.email && <small>{formik.errors.email}</small>} inputlarin altina uyari notu yazilabilir*/}
        <label className=" py-5 pb-2 " htmlFor="age">
          Age
        </label>
        <input
          className={`${
            formik.errors.age &&
            formik.touched.age &&
            "text-amber-600 border-2 border-amber-600"
          } p-2 rounded-md outline-none text-[#242424] focus:outline-none `}
          type="number"
          name="age"
          id="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // focus cikisini yakalar
        />
        <label className=" py-5 pb-2 " htmlFor="password">
          Password
        </label>
        <input
          className={`${
            formik.errors.password &&
            formik.touched.password &&
            "text-amber-600 border-2 border-amber-600"
          } p-2 rounded-md outline-none text-[#242424]  focus:outline-none `}
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onBlur={formik.handleBlur} // focus cikisini yakalar
          onChange={formik.handleChange}
        />
        <label className=" py-5 pb-2 " htmlFor="password">
          Confirm Password
        </label>
        <input
          className={`${
            formik.errors.confirmPassword &&
            formik.touched.confirmPassword &&
            "text-amber-600 border-2 border-amber-600"
          } p-2 rounded-md outline-none text-[#242424]  focus:outline-none `}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formik.values.confirmPassword}
          onBlur={formik.handleBlur} // focus cikisini yakalar
          onChange={formik.handleChange}
        />
        <div
          className={`${
            formik.errors.checkbox && " text-amber-600"
          } flex items-center mt-3 gap-3`}
        >
          <input
            className="cursor-pointer"
            type="checkbox"
            name="checkbox"
            id="checkbox"
            value={formik.values.checkbox}
            onChange={formik.handleChange}
          />
          <label className="cursor-pointer text-xs" htmlFor="checkbox">
            Understand and accept
          </label>
        </div>
        <button
          type="submit"
          className=" p-2 mt-8 mb-4 rounded-md bg-zinc-900 font-bold hover:text-amber-600 hover:bg-zinc-900/50 transition uppercase "
          disabled={formik.isSubmitting} // gönderi esnasinda button disabled olur
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LoginPage;
