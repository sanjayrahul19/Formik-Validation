import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5characters,1 uppercase letterSpacing,1lowercase letter,1 number//

const Validate = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string()
    .email("Please provide a valid email")
    .required("Required"),
  phoneNumber: Yup.number().positive().integer().required("Required"),
  age: Yup.number().positive().integer().required("Required"),
  password: Yup.string()
    .min(6)
    .matches(passwordRules, "Please create a strong password")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
export default Validate;
