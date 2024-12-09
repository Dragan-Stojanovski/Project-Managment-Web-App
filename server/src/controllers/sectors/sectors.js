const XLSX = require("xlsx");
const mongoose = require("mongoose");

const sectors = require("../../models/sectorSchema");

exports.getSectors = async (req, res) => {
	try {
		const sector = await sectors.find({});
		res.status(200).json(sector);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error retrieving sub sectors");
	}
};

