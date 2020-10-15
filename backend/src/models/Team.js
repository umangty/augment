const mongoose = require('mongoose');
const collectionName = 'teams';

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hiringManager: {
      userId: mongoose.Schema.ObjectId,
      name: String,
      email: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Team', schema, collectionName);
