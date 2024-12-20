const XLSX = require("xlsx");
const mongoose = require("mongoose");

const Job = require("../../models/jobSchema");

exports.getJobRoles = async (req, res) => {
	try {
		const jobRoles = await Job.find({});
		res.status(200).json(jobRoles);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error retrieving job roles");
	}
};

exports.getJobTitles = async (req, res) => {
	console.log("getJobTitles");
	try {
		const jobTitles = await Job.find({}, "title");
		const titlesArray = jobTitles.map((job) => job.title);
		console.log("titlesArray", titlesArray);
		res.status(200).json(titlesArray);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error retrieving job titles");
	}
};
