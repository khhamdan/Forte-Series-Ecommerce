import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, SetInvalid] = useState(false);

  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [pass, setPass] = useState(false);
  const [data, setData] = useState([]);
  const [alldata, setAlldata] = useState([]);

  // we are getting all users data
  const getallData = async () => {
    let result = await fetch('http://localhost:8080/api/v1/auth/getuser');
    result = await result.json();
    if (result) {
      console.log(' result in get data login : ', result);
    }
    setData(result);
  };

  const saveRecord = async () => {
    if (email) {
      setEmptyEmail(false);
      SetInvalid(false);
      setPass(false);
    } else {
      setEmptyEmail(true);
      SetInvalid(false);
      setPass(false);
    }

    if (password) {
      setEmptyPassword(false);
      SetInvalid(false);
      setPass(false);
    } else {
      setEmptyPassword(true);
      SetInvalid(false);
      setPass(false);
    }

    let result = await fetch('http://localhost:8080/api/v1/auth/Login', {
      method: 'Post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    console.log('result : ', result);
    console.log('result.message :   ', result.message);

    if (result.message == 'Password does not match') {
      setPass(true);
      SetInvalid(false);
    } else if (result.message == 'Invalid email address') {
      setPass(false);
      SetInvalid(true);
    } else if (result.message === 'Loggedin Successfully') {
      setPass(false);
      SetInvalid(false);

      let fdata = data.find((x) => x.email == email);

      // localStorage.setItem('user', result.token);

      // let token = result.token;
      // let res = await fetch('http://localhost:8080/api/v1/auth/dummy', {
      //   method: 'Get',
      //   headers: {
      //     Authorization: `${token}`,
      //   },
      // });
      // res = await res.json();

      // if (res.message == 'You have protected access rights') {
      //   localStorage.setItem('user', JSON.stringify({ email, password }));

      if (fdata) {
        navigate('/');
      }
    } else {
      setPass(false);
      SetInvalid(false);
    }
  };

  useEffect(() => {
    localStorage.clear();
    getallData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="login_page">
        <div className="login_heading">
          <h1>Login</h1>
        </div>
        <div className="login_and_register_box">
          <div className="login_box">
            <div>
              <label className="label_text" htmlFor="loginName">
                Email
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="loginName"
                placeholder="Email"
                className="login_textField"
                onChange={(e) => setEmail(e.target.value)}
              />
              {emptyEmail && (
                <h6 className="text-danger">Please enter Email !</h6>
              )}
              {invalid && (
                <h5 className="text-danger ">Invalid email address !</h5>
              )}
            </div>

            <br />
            <div>
              <label className="label_text" htmlFor="loginPassword">
                Password
              </label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Type your password"
                id="loginPassword"
                className="login_textField"
                onChange={(e) => setPassword(e.target.value)}
              />
              {emptyPassword && (
                <h6 className="text-danger">Please enter Password !</h6>
              )}
              {pass && (
                <h6 className="text-danger">Password does not match !</h6>
              )}
            </div>
            <br />
            <button className="login_button" onClick={saveRecord} type="submit">
              Login
            </button>
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
      <ToastContainer />
    </>
  );
};

export default Login;
