const router = require('express').Router();
const {getUser , createUser , updateUser , deleteUser, getAllUsers} = require('../controllers/userController');

router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/', getAllUsers);


module.exports = router;
