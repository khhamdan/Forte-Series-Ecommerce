import React from 'react';
import Navbar from '../../components/Navbar';

const Login = () => {
  return (
    <>
      <Navbar />

      <div className="login_page">
        <div className="login_heading">
          <h1>Login</h1>
        </div>
        <div className="login_and_register_box">
          <div className="login_box">
            <label className="label_text">Email</label>
            <br />
            <input
              type="text"
              placeholder="Email"
              className="login_textField"
            />
            <br />
            <label className="label_text">Password</label>
            <br />
            <input
              type="text"
              placeholder="Password"
              className="login_textField"
            />
            <br />
            <button className="login_button">Login</button>
          </div>
          <div className="register_box">
            <div>
              <h4 className="register_heading">Manage Subscriptions</h4>
            </div>
            <div>
              <p className="register_para">
                NEW CUSTOMER?
                <br />
                <br />
                Sign up for an account to take advantage of order history as
                well as pre-filled forms during checkout on subsequent orders.
              </p>
            </div>
            <button className="login_button">Register</button>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
