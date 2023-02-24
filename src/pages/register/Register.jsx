import React, { useState, useEffect } from "react";
import leftImage from "./../../assets/image/bg1.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [hide, setHide] = useState(1);
  const [account, setAccount] = useState("");
  const [message, setMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState(false);
  const [userOTP, setUserOTP] = useState("");
  const [userData, setUserData] = useState({});
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  // check account page and function
  const CheckAccount = async (e) => {
    e.preventDefault();
    // check user entered account number
    if (account === "") {
      setMessage("Account Number is Required");
    } else if (account.length < 10) {
      setMessage("Account Number is of length 10");
    } else {
      const options = {
        method: "GET",
        url: "http://localhost:5000/api/v1/account/" + account,
      };
      try {
        const res = await axios.request(options);
        // store user data in local storage for later use
        if (res.data.length !== 0) {
          console.log(res.data);
          setHide(2);
          setMessage("");
          res.data.map((g) => {
            setUserData(g);
          });
        } else {
          setMessage("Account Number doesn't exist!");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  // confirm user otp with generated value
  const ConfirmOTP = (e) => {
    e.preventDefault();
    // generate random OTP
    // const randomOTP = Math.floor(Math.random() * 90000) + 10000;
    const randomOTP = 12345;
    console.log(randomOTP);
    if (userOTP === "") {
      setMessage("OTP is Required");
    } else if (userOTP != randomOTP) {
      setMessage("You have Entered invalid OTP!!");
    } else if (userOTP == randomOTP) {
      setHide(4);
      setMessage("");
    }
  };

  const SetPassword = async (e) => {
    e.preventDefault();
    if (pass.length < 8) {
      setMessage("Password length must be of minimum 8");
    } else if (pass !== passConfirm) {
      setMessage("The two password must match!");
    } else {
      // add data to db
      setMessage("Operation Successful ! Your Account has been Created");
      setLoginMessage(true);
    }
  };

  return (
    <div className="register">
      <div className="login row">
        {hide === 1 ? (
          <>
            <div className="a-right col-md-6">
              <h1 className="text-center login-title">Registration</h1>
              <span className="sub-text">
                Please Enter your Cooperative Bank account number for
                verification
              </span>

              {message !== "" && (
                <span
                  className="alert alert-danger m-2 text-center alert-dismissible"
                  style={{ width: "70%", minHeight: 52 }}
                >
                  {message}
                </span>
              )}

              <form className="login-form ">
                <input
                  type="text"
                  className="login-input "
                  placeholder="Enter Your Account Number"
                  onChange={(e) => setAccount(e.target.value)}
                />

                <button
                  className="login-btn"
                  type="submit"
                  onClick={(e) => CheckAccount(e)}
                >
                  SUBMIT
                </button>
              </form>
              <Link className="Link" to="/login">
                <span className="no-account">
                  Already have an account ? LOGIN
                </span>
              </Link>
            </div>
          </>
        ) : hide === 2 ? (
          <>
            <div className="a-right col-md-6">
              <div className="confirm-section">
                <h1 className="text-center login-title">
                  Account Confirmation
                </h1>
                <h6 className="sub-text text-center">
                  Please Confirm Your Account Detail To Continue
                </h6>

                <div className="detail-list">
                  <div>Name</div>
                  <div className="value">
                    <input
                      type="text"
                      value={userData.name}
                      className="login-input"
                      disabled
                    />
                  </div>
                </div>
                <div className="detail-list">
                  <div>Mobile</div>
                  <div className="value">
                    <input
                      type="text"
                      value={userData.mobile}
                      className="login-input"
                      disabled
                    />
                  </div>
                </div>
                <div className="detail-list">
                  <div>Branch</div>
                  <div className="value">
                    <input
                      type="text"
                      value={userData.branch}
                      className="login-input"
                      disabled
                    />
                  </div>
                </div>

                <div className="detail-list">
                  <div>Address</div>
                  <div className="value">
                    <input
                      type="text"
                      value={userData.address}
                      className="login-input"
                      disabled
                    />
                  </div>
                </div>
                <div className="buttons">
                  <button
                    className="cancel"
                    onClick={(e) => {
                      e.preventDefault();
                      setHide(1);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="confirm"
                    onClick={(e) => {
                      e.preventDefault();
                      setHide(3);
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : hide === 3 ? (
          <>
            <div className="a-right col-md-6">
              <h1 className="text-center login-title">Verify OTP</h1>
              <span className="sub-text">
                Please Enter One time password sent to your mobile number
              </span>

              {message !== "" && (
                <span
                  className="alert alert-danger m-2 text-center alert-dismissible"
                  style={{ width: "70%", minHeight: 52 }}
                >
                  {message}
                </span>
              )}
              <form className="login-form">
                <input
                  type="password"
                  className="login-input"
                  placeholder="Enter Your OTP Here"
                  onChange={(e) => setUserOTP(e.target.value)}
                />
                <button
                  className="login-btn"
                  type="submit"
                  onClick={(e) => ConfirmOTP(e)}
                >
                  Confirm
                </button>
              </form>
            </div>
          </>
        ) : hide === 4 ? (
          <div className="a-right col-md-6">
            <h1 className="text-center login-title">Set Password</h1>
            <span className="sub-text">
              Your Account is verified, please set your password here
            </span>

            {message !== "" && (
              <span
                className="alert alert-danger m-2 text-center alert-dismissible"
                style={{ width: "70%", minHeight: 52 }}
              >
                {message}{" "}
                {loginMessage && (
                  <Link to="/login" className="Link">
                    <button className="btn btn-md btn-info"> Login Here</button>
                  </Link>
                )}
              </span>
            )}
            <form className="login-form">
              <input
                type="password"
                className="login-input"
                placeholder="Enter Your password"
                onChange={(e) => setPass(e.target.value)}
              />
              <input
                type="password"
                className="login-input"
                placeholder="Confirm Your password"
                onChange={(e) => setPassConfirm(e.target.value)}
              />
              <button
                className="login-btn"
                type="submit"
                onClick={(e) => SetPassword(e)}
              >
                SUBMIT
              </button>
            </form>
          </div>
        ) : (
          <div className="alert alert-info">
            404 ! The page you are looking for is not found
          </div>
        )}
        <div className="a-left col-md-6">
          <img src={leftImage} className="a-left-image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Register;
