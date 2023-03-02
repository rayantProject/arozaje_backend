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

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: 'Adresse e-mail ou mot de passe incorrect.' });
        }
        if (user.password !== req.body.password) {
            return res.status(400).json({ message: 'Adresse e-mail ou mot de passe incorrect.' });
        }
        res.status(200).json(
            {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                avatar: user.avatar,
                address: user.address,
                avatar: user.avatar ? user.avatar : null,
                rate: user.rate ? user.rate : null,
            }
                
        );
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur.' });
      }
}


module.exports = {
    getUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    login
}




