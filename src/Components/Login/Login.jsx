import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Login({ saveUserData }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [ErrorMsg, setErrorMsg] = useState(""); //api
  const [errorsList, setErrorsList] = useState([]); //joi
  let navigate = useNavigate();
  let goToHome = () => {
    navigate("/Home");
  };
  let submitFormData = async (e) => {
    e.preventDefault();
    let validationResponse = validateFormData();
    if (validationResponse.error) {
      console.log(validationResponse,validationResponse.error);
      setErrorsList(validationResponse.error.details);
    } else {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        user
      );
      if (data.message === "success") {
        localStorage.setItem("token", data.token);
        saveUserData();
        goToHome();
      } else {
        setErrorMsg(data.message);
      }
    }
  };
  let validateFormData = () => {
    const schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password:Joi.string()
      .required()
      .pattern(new RegExp("^[A-Z][a-zA-Z0-9]*$"))
    });
    return schema.validate(user, { abortEarly: false });
  };
  let getInputValue = (e) => {
    let myUser = { ...user }; //deep copy of user
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  };
  // let checkError=()=>{
  //   errorsList.map((error, index) => (
  //     <div key={index} className="alert alert-warning p-2">
  //       {error.message}
  //     </div>
  //   ))
  // }
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login-Games</title>
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
              <img src="Images/logo.png" className="w-25" alt="game-over" />
              <h4>Log in to GameOver</h4>
              {ErrorMsg ? (
                <div className="alert alert-danger p-2">{ErrorMsg}</div>
              ) : (
                ""
              )}
              <form onSubmit={submitFormData}>
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
                <button className="btn btn-danger">Login</button>
              </form>
              <hr />
              <p className="d-block">Forgot Password?</p>
              <p>
                Not a member yet?
                <Link to="/signup" className="navbar-brand text-info">
                  {" "}
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
