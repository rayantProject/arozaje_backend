const Discussion = require("../models/discussionModel");


const getDiscussions = (req, res) => {
    Discussion.find()
    .then(discussions => {
        res.status(200).json(discussions);
    })
    .catch(error => {
        res.status(500).json(error);
    })
}


const getDiscussionByPlant = (req, res) => {
    Discussion.find({plant: req.params.id})
    .then(discussions => {
        res.status(200).json(discussions);
    })
    .catch(error => {
        res.status(500).json(error);
    })
}


const getDiscussion = (req, res) => {
    Discussion.findById(req.params.id)
    .then(discussion => {
        res.status(200).json(discussion);
    })
    .catch(error => {
        res.status(500).json(error);
    })
}

const createDiscussion = (req, res) => {
    const newDiscussion = new Discussion(req.body);
    newDiscussion.save()
    .then(discussion => {
        res.status(200).json(discussion);
    })
    .catch(error => {
        res.status(500).json(error);
    })
}

const updateDiscussion = (req, res) => {
    Discussion.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {new: true})
    .then(discussion => {
        res.status(200).json(discussion);
    })
    .catch(error => {
        res.status(500).json(error);
    })
}


const deleteDiscussion = (req, res) => {
    Discussion.findByIdAndDelete(req.params.id)
    .then(discussion => {
        res.status(200).json(discussion);
    })
    .catch(error => {
        res.status(500).json(error);
    })
}

module.exports = {
    getDiscussions,
    getDiscussion,
    createDiscussion,
    updateDiscussion,
    deleteDiscussion,
    getDiscussionByPlant
}
