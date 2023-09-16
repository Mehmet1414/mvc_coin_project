import { useFormik } from "formik";
import Header from "../../components/Header";
import { schema } from "./schema";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
  });
  console.log(formik.errors);

  return (
    <>
      <Header />
      <form className=" flex flex-col  px-36 mt-[25%]">
        <label className=" py-5 pb-2 " htmlFor="email">
          Email
        </label>
        <input
          className={`${
            formik.errors.email && "text-amber-600"
          } p-2 rounded-md outline-none text-[#242424] focus:outline-none `}
          type="email"
          name="email"
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
            formik.errors.age && "text-amber-600"
          } p-2 rounded-md outline-none text-[#242424] focus:outline-none `}
          type="number"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // focus cikisini yakalar
        />
        <label className=" py-5 pb-2 " htmlFor="password">
          Password
        </label>
        <input
          className={`${
            formik.errors.password && "text-amber-600"
          } p-2 rounded-md outline-none text-[#242424] focus:outline-none `}
          type="password"
          name="password"
          value={formik.values.password}
          onBlur={formik.handleBlur} // focus cikisini yakalar
          onChange={formik.handleChange}
        />
        <label className=" py-5 pb-2 " htmlFor="password">
          Confirm Password
        </label>
        <input
          className={`${
            formik.errors.confirmPassword && "text-amber-600"
          } p-2 rounded-md outline-none text-[#242424] focus:outline-none `}
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onBlur={formik.handleBlur} // focus cikisini yakalar
          onChange={formik.handleChange}
        />
        <button className=" p-2 mt-8 mb-4 rounded-md bg-zinc-900 font-bold hover:text-amber-600 hover:bg-zinc-900/50 transition uppercase ">
          Send
        </button>
      </form>
    </>
  );
};

export default LoginPage;
