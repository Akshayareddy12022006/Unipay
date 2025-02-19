// backend/controllers/userController.js
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { rollNumber, password } = req.body;

  const userExists = await User.findOne({ rollNumber });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    rollNumber,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      rollNumber: user.rollNumber,
      balance: user.balance,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Authenticate user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { rollNumber, password } = req.body;

  const user = await User.findOne({ rollNumber });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      rollNumber: user.rollNumber,
      balance: user.balance,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid roll number or password');
  }
});

export { registerUser, authUser };