import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from './signup.module.scss'

export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  });
  const [ErrorMsg, setErrorMsg] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  let navigate = useNavigate();
  let goToLogin = () => {
    navigate("/");
  };
  let submitFormData = async (e) => {
    e.preventDefault();
    let validationResponse = validateFormData();
  
    if (validationResponse.error) {
      console.log(validationResponse.error.details);
      // Update error messages list only when there are validation errors
      setErrorsList(validationResponse.error.details);
      console.log(ErrorMsg);
    } else {
      setErrorsList([]); // Clear errors when there are no validation errors
      try {
        let { data } = await axios.post(
          "https://ecommerce.routemisr.com/api/v1/auth/signup",
          user
        );
        
        if (data.message === "success") {
          goToLogin();
        } else {
          setErrorMsg(data.message);
        }
      } catch (error) {
        console.error("API Error:", error);
        setErrorMsg(error.response.data.errors.msg);
      }
    }
  };
  let validateFormData = () => {
    const schema = Joi.object({
      name: Joi.string().alphanum().required().min(2).max(10),
      phone: Joi.string().pattern(/^(01)[0-9]{9}$/).required(),
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string()
      .required()
      .pattern(new RegExp("^[A-Z][a-zA-Z0-9]*$")),
        rePassword:Joi.string()
        .required()
        .pattern(new RegExp("^[A-Z][a-zA-Z0-9]*$")),
    });
    return schema.validate(user, { abortEarly: false });
  };
  let getInputValue = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SignUp-Games</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="m-auto py-5">
        <div className="row">
          <div className="col-md-6">
            <img
              className="w-100"
              src="Images/gaming.ebaf2ffc84f4451d.jpg"
              alt="game-over"
            />
          </div>
          <div className="col-md-6 py-5">
            <div className="text-center">
              <h4>Create Account!</h4>
              {/* {errorsList.map((error, index) => (
                <div key={index} className="alert alert-danger p-2">
                  {error.message}
                </div>
              ))} */}
              {ErrorMsg ? (
                <div className="alert alert-danger p-2">{ErrorMsg}</div>
              ) : (
                ""
              )}
              <form onSubmit={submitFormData}>
                 
                  <input
                    onChange={getInputValue}
                    type="text"
                    className={`form-control  ${styles.inputWidth}`}
                    placeholder="First Name"
                    name="name"
                  />
                  {errorsList.map((error, index) => {
                    if (error.path.includes('name')) {
                      return (
                        <div key={index} className="alert alert-danger p-2">
                          {error.message}
                        </div>
                      );
                    }
                    return null;
                  })}
                <input
                  onChange={getInputValue}
                  type="email"
                  className="form-control my-2"
                  placeholder="Email Address"
                  name="email"
                />
                {errorsList.map((error, index) => {
                    if (error.path.includes('email')) {
                      return (
                        <div key={index} className="alert alert-danger p-2">
                          {error.message}
                        </div>
                      );
                    }
                    return null;
                  })}
                <input
                  onChange={getInputValue}
                  type="number"
                  className="form-control my-2 "
                  placeholder="Phone Number"
                  name="phone"
                />
               {errorsList.map((error, index) => {
                  if (error.path.includes('phone')) {
                    return (
                      <div key={index} className="alert alert-danger p-2">
                        {error.message}
                      </div>
                    );
                  }
                  return null;
                })}
                <input
                  onChange={getInputValue}
                  type="password"
                  className="form-control my-2"
                  placeholder="Password"
                  name="password"
                />
                {errorsList.map((error, index) => {
                    if (error.path.includes('password')) {
                      if(error.message.includes('fails to match the required pattern') || error.message.includes('')){
                        return (
                          <div key={index} className="alert alert-danger p-2">
                            Password should start with an uppercase letter and can contain letters and numbers
                          </div>
                        );
                      }
                    }
                    return null;
                  })}
                <input
                  onChange={getInputValue}
                  type="password"
                  className="form-control my-2"
                  placeholder="Re-Password"
                  name="rePassword"
                />
                {errorsList.map((error, index) => {
                    if (error.path.includes('rePassword')) {
                      if(error.message.includes('fails to match the required pattern') || error.message.includes('')){
                        return (
                          <div key={index} className="alert alert-danger p-2">
                            Re-Password should Match exactly the Password and start with an uppercase letter and can contain letters and numbers
                          </div>
                        );
                      }
                    }
                    return null;
                  })}
                <button className="btn btn-danger mt-3">Create Account</button>
                <p className="px-1 mt-2">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </p>
                <hr />
                <p>
                  Already a member?
                  <Link to="/" className="navbar-brand text-info mx-1">
                    Login In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
