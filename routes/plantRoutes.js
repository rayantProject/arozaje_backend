const router = require('express').Router();

const { getAllPlants, getPlant, createPlant, updatePlant, deletePlant , getPlantsByOwner , getPlantsByRenter } = require('../controllers/plantController');


router.get('/', getAllPlants);
router.post('/', createPlant);
router.get('/:id', getPlant);
router.put('/:id', updatePlant);
router.delete('/:id', deletePlant);
router.get('/owner/:id', getPlantsByOwner);
router.get('/renter/:id', getPlantsByRenter);

module.exports = router;