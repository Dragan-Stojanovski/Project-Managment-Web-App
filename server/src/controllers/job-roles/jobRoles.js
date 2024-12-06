const XLSX = require("xlsx");
const mongoose = require("mongoose");

const Job = require("../../models/jobSchema");

exports.getJobRoles = async (req, res) => {
	try {
		const jobRoles = await JobSchema.find({});
		res.status(200).json(jobRoles);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error retrieving job roles");
	}
};
