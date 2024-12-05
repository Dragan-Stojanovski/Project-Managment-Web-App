const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    job_category: { type: String, required: true },
    job_role: { type: String, required: true },
    job_role_definition: { type: String, required: false },
    generic_within_the_sector: { type: Boolean, default: true },
    generic_within_the_sub_sector: { type: Boolean, default: true },
    duration: { type: String, required: true },
    joining_time: { type: String, required: true },
    employment_share: { type: String, required: true },
    skill_category: { type: String, required: true },
    academic_qualification: { type: [String], default: [] },
    sub_major: { type: String, required: true },
    availability: { type: Boolean, required: true },
    hard_skills: { type: [String], default: [] },
    interpersonal_skills: { type: [String], default: [] },
    industry_specific: { type: [String], default: [] },
    generic_skills: { type: [String], default: [] },
    soft_skills: { type: [String], default: [] },
    technical_skills: { type: [String], default: [] },
    reference: { type: String, required: false },
    media: { type: String, required: false },
    sub_sector: { type: mongoose.Schema.Types.ObjectId, ref: 'SubSector' }
  });

JobSchema.index({ title: 'text' });
  
module.exports = mongoose.model("JobSchema", JobSchema);