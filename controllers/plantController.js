const Plant = require('../models/plantModel');

const getPlant = async (req, res) => {
  try {
    const plant = await Plant.find();
    res.status(200).json(plant);
  } catch(err) {
    res.status(500).json(err);
  }
}

const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.status(200).json(plants);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
}

const createPlant = async (req, res) => {
  const plant = new Plant({
    specie: req.body.specie,
    description: req.body.description,
    mainImage: req.body.mainImage,
    images: req.body.images,
    owner: req.body.owner,
    renter: req.body.renter,
    discussions: req.body.discussions
  });

  
  try {
    
    const newPlant = await plant.save();
    res.status(201).json(newPlant);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
}

const updatePlant = async (req, res) => {
  try {
    const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPlant);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
}

const deletePlant = async (req, res) => {
  try {
    await Plant.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted Plant' });
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
}



const getPlantsByOwner = async (req, res) => {
  try {
    const plants = await Plant.find({ owner: req.params.id });
    res.json(plants);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
}

const getPlantsByRenter = async (req, res) => {
  try {
    const plants = await Plant.find({ renter: req.params.id });
    res.json(plants);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getPlant,
  getAllPlants,
  createPlant,
  updatePlant,
  deletePlant,
  getPlantsByOwner,
  getPlantsByRenter
}

