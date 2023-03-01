const router = require('express').Router();
const {getUser , createUser , updateUser , deleteUser, getAllUsers, login} = require('../controllers/userController');

router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/', getAllUsers);
router.post('/login', login);


module.exports = router;
