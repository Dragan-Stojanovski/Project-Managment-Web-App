const mongoose = require('mongoose');

const SectorSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
},
{ timestamps: true });

SectorSchema.index({ title: 'text' });

module.exports = mongoose.model('SectorSchema', SectorSchema);