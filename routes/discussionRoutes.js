const router = require('express').Router();
const { getDiscussion, createDiscussion, updateDiscussion, deleteDiscussion, getDiscussions, getDiscussionByPlant } = require('../controllers/discussionController');

router.put('/:id', updateDiscussion);
router.delete('/:id', deleteDiscussion);
router.get('/:id', getDiscussion);
router.get('/:id', getDiscussion);
router.get('/', getDiscussions); 
router.post('/', createDiscussion);
router.get('/plant/:id', getDiscussionByPlant);


module.exports = router;