const mongoose = require('mongoose');
const collectionName = 'organization';

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
    shortDescription: {
      type: String,
    },
    logoUrl: {
      type: String,
    },
    emailDomain: {
      type: String,
      required: true,
    },
    profileCompletion: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Organization', schema, collectionName);
