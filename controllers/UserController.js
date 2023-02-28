const User = require('../models/userModel');

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } 
    catch (error) {
        res.status(500).json(error);
    }
    }


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } 
    catch (error) {
        res.status(500).json({message: error.message});
    }
}


const createUser = async (req, res) => {
    const newUser = new User(
        {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            avatar: req.body.avatar,
            role: req.body.role,
            address: req.body.address
        }
    );
    try {
        const user = await newUser.save();
        res.status(200).json(user);
    } 
    catch (error) {
        res.status(500).json(error);
    }
    }

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(user);
    } 
    catch (error) {
        res.status(500).json(error);
    }
    }

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(user);
    } 
    catch (error) {
        res.status(500).json(error);
    }
    }

module.exports = {
    getUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}




