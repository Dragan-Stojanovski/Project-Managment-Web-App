const XLSX = require("xlsx");
const mongoose = require("mongoose");

const subSectors = require("../../models/jobSchema");

exports.getSubSectors = async (req, res) => {
	try {
		const subSector = await subSectors.find({});
		res.status(200).json(subSector);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error retrieving sub sectors");
	}
};

