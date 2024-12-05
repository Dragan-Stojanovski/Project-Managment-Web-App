const mongoose = require('mongoose');

const InterpersonalSkillSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true, // Optional: trims any whitespace from the title
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt timestamps
  }
);

InterpersonalSkillSchema.index({ title: 1 }, { unique: true, name: 'title_index' });

module.exports = mongoose.model('InterpersonalSkillSchema', InterpersonalSkillSchema);