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
      checkbox: false,
    },
    validationSchema: schema,

    onSubmit: (values) => console.log(values),
  });
  console.log(formik.errors);

  return (
    <>
      <Header />
      <form
        className=" flex flex-col  px-36 mt-[25%]"
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
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LoginPage;
