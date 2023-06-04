import express from 'express';
import userModel from '../models/userModel.js';
import { comparePassword, hashPassword } from '../helper/authHelper.js';
import JWT from 'jsonwebtoken';

export const registerController = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    // validating object/user property on input
    if (!firstname) {
      return res.send({ message: 'First name is required' });
    }
    if (!lastname) {
      return res.send({ message: 'Last name is required' });
    }
    if (!email) {
      return res.send({ message: 'Email is required' });
    }
    if (!password) {
      return res.send({ message: 'Password is required' });
    }
    // Checking if user is already registered
    let existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: 'User already registered',
      });
    }

    const hashedPassword = await hashPassword(password);
    // Saving / Posting Data to MONGODB including hashed Password
    let user = await new userModel({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: 'User Registered successfully',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in registration',
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    // only email and password required to login / destructive from req.body
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send({ message: 'invalid email or password' });
    }
    // checking DB if a specific email address is available in DB or not
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.send({ message: 'Invalid email address' });
    }
    // upon availibility of data, comparing plain password with hashed password already available in DB
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.send({ message: 'Password does not match' });
    }
    // JWT Token assigning if password match with the plain and hashed password
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_KEY, {
      expiresIn: '1d',
    });
    res.status(200).send({
      success: true,
      message: 'Loggedin Successfully',
      user: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in login',
      error,
    });
  }
};

export const senduser = async (req, res) => {
  let result = await userModel.find();
  res.send(result);
};
