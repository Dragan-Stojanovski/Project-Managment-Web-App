const mongoose = require('mongoose');

const genericSkillSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true, // Optional: trims whitespace from the title
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create an index for the title field with a unique constraint
genericSkillSchema.index({ title: 1 }, { unique: true, name: 'title_index' });

module.exports = mongoose.model('GenericSkill', genericSkillSchema);