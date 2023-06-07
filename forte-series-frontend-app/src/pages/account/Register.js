import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navi = useNavigate();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveRecord = async () => {
    let result = await fetch('http://localhost:8080/api/v1/auth/registerData', {
      method: 'POST',
      body: JSON.stringify({ firstname, lastname, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    console.log('result:', result.message);

    if (result.message === 'User already registered') {
      toast.success(result.message);
      console.log('user :', result.success);
      navi('/login');
    } else {
      toast.error(result.message);
    }
  };
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="register_page">
        <div className="register_heading">
          <h1 className="heading">Create Account</h1>
        </div>
        <div className="register_page_box">
          <div>
            <label className="label_text" htmlFor="registerFirstName">
              First Name
            </label>
            <br />
            <input
              type="text"
              name="firstname"
              id="registerFirstName"
              placeholder="First Name"
              className="login_textField"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label className="label_text" htmlFor="registerLastName">
              Last Name
            </label>
            <br />
            <input
              type="text"
              name="lastname"
              id="registerLastName"
              placeholder="Last Name"
              className="login_textField"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label className="label_text" htmlFor="registerEmail">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="registerEmail"
              placeholder="Email"
              className="login_textField"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="label_text" htmlFor="registerPassword">
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Type your password"
              id="registerPassword"
              className="login_textField"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button className="login_button" onClick={saveRecord} type="submit">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
