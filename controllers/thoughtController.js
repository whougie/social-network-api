const { User, Thought } = require('../models');

module.exports = {

  // get thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get one thought with id
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      } else 
        res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);


      // Add thought to assoicated username
      try {
        const user = await User.findOneAndUpdate(
          { username: thought.username },
          { $push:  {thoughts: thought._id} },
          { runValidators: true, new: true }
        );
        
        if (!user) {
          res.status(404).json({ message: 'During creating a new thought - No user with this id was found!' });
        } 
      } catch (err) {
        res.status(500).json(err);
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      // await Student.deleteMany({ _id: { $in: thought } });
      res.json({ message: 'Thought deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },


  async createReactionForThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      } else 
        res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteReactionForThought(req, res) {
    try {
      console.log("id")
      console.log(req.params.thoughtId)
      console.log("reactionId")
      console.log(req.params.reactionId)
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: {reactions: {reactionId: req.params.reactionId} } },
        { runValidators: true, new: true }
      );

      console.log("This is the updated thought")
      console.log(thought)

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      } else
        res.json({ message: 'Thought deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  }

};
