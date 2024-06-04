const { Schema, model, Types } = require('mongoose');
const date = require('date-and-time');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280 
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => date.format(timestamp, 'MM/DD/YYYY at HH:mm:ss')
        }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    }
  }
);

module.exports = reactionSchema;

