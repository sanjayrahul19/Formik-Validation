import React, { useState } from "react";
import "./Form.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import Validate from "./Validate";

const Form = () => {
  const [isPass, setIsPass] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Validate,
    onSubmit: (val, action) => {
      action.resetForm();
    },
  });

  return (
    <div className="form">
      <h1>SignUp Form</h1>
      <form
        className="container"
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        {/* htmlFor attribute is used to focus the input field */}
        <div className="card">
          <label htmlFor="name">Name:</label>
          <input
            className={
              formik.errors.name && formik.touched.name ? "error" : "input"
            }
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your Name"
          />
        </div>
        {formik.errors.name && formik.touched.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <div className="card">
          <label htmlFor="age">Age:</label>
          <input
            className={
              formik.errors.age && formik.touched.age ? "error" : "input"
            }
            id="age"
            name="age"
            placeholder="Enter your age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.age && formik.touched.age ? (
          <p>{formik.errors.age}</p>
        ) : null}
        <div className="card">
          <label htmlFor="number">Phone Number:</label>
          <input
            className={
              formik.errors.phoneNumber && formik.touched.phoneNumber
                ? "error"
                : "input"
            }
            id="number"
            name="phoneNumber"
            type="number"
            placeholder="Enter your Phone Number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
          <p>{formik.errors.phoneNumber}</p>
        ) : null}
        <div className="card">
          <label htmlFor="email">Email Id:</label>
          <input
            className={
              formik.errors.email && formik.touched.email ? "error" : "input"
            }
            id="email"
            name="email"
            type="text"
            placeholder="Enter your Email Id"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.email && formik.touched.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        <div className="card">
          <label htmlFor="password">Password:</label>
          <div className="pass">
            <input
              className={
                formik.errors.password && formik.touched.password
                  ? "error"
                  : "input"
              }
              id="password"
              name="password"
              type={isPass ? "password" : "text"}
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {isPass ? (
              <VisibilityIcon
                className="icon"
                onClick={() => setIsPass((preState) => !preState)}
              />
            ) : (
              <VisibilityOffIcon
                className="icon"
                onClick={() => setIsPass((preState) => !preState)}
              />
            )}
          </div>
        </div>
        {formik.errors.password && formik.touched.password ? (
          <p>{formik.errors.password}</p>
        ) : null}
        <div className="card">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className={formik.errors.name && formik.touched ? "error" : "input"}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
          <p>{formik.errors.confirmPassword}</p>
        ) : null}
        <div className="button">
          <button type="submit">SignUp</button>
        </div>
        <div className="desc">
          <span>
            Already have an account?Login <a href="login">Here</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;
