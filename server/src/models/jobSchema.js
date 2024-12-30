const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
	title: { type: String, required: true },
	job_category: { type: String, required: true },
	job_role: { type: String, required: true },
	job_role_definition: { type: String, required: false },
	generic_within_the_sector: { type: Boolean, default: false },
	generic_within_the_sub_sector: { type: Boolean, default: false },
	duration: { type: String, required: false },
	joining_time: { type: String, required: false },
	employment_share: { type: String, required: false },
	skill_category: { type: String, required: true },
	academic_qualification: { type: [String], default: [] },
	sub_major: { type: String, required: true },
	availability: { type: Boolean, required: false },
	hard_skills: { type: [String], default: [] },
	interpersonal_skills: { type: [String], default: [] },
	industry_specific: { type: [String], default: [] },
	generic_skills: { type: [String], default: [] },
	soft_skills: { type: [String], default: [], required: false },
	technical_skills: { type: [String], default: [], required: false },
	reference: { type: String, required: false },
	media: { type: String, required: false },
	sub_sector: { type: String },
	sector: { type: String },
});

JobSchema.index({ title: "text" });

module.exports = mongoose.model("JobSchema", JobSchema);
