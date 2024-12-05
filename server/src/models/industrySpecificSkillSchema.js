const mongoose = require('mongoose');

const IndustrySpecificSkillSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true, // Optional: trims any whitespace from the title
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create an index for the title field with a unique constraint
IndustrySpecificSkillSchema.index({ title: 1 }, { unique: true, name: 'title_index' });

module.exports = mongoose.model('IndustrySpecificSkillSchema', IndustrySpecificSkillSchema);