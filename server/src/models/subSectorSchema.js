const mongoose = require('mongoose');

const SubSectorSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String }
}, { timestamps: true });

SubSectorSchema.virtual('jobs', {
  ref: 'Job',
  localField: '_id',
  foreignField: 'subSector',
  justOne: false
});

SubSectorSchema.virtual('sector', {
  ref: 'Sector',
  localField: 'sectorId',
  foreignField: '_id',
  justOne: true
});

module.exports = mongoose.model('SubSectorSchema', SubSectorSchema);