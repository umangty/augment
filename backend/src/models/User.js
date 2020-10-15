const mongoose = require('mongoose');
const collectionName = 'users';

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    google: {
      id: String,
      name: String,
    },
    avatarUrl: String,
    designation: String,
    teams: [
      {
        id: mongoose.Schema.ObjectId,
        name: String,
        role: { type: String, enum: ['hiringManager', 'member'] },
      },
    ],
    admin: {
      type: Boolean,
      default: false,
    },
    addedBy: {
      userId: mongoose.Schema.ObjectId,
      name: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Team', schema, collectionName);
