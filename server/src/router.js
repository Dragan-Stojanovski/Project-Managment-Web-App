const express = require("express");
const router = express.Router();
const { register, login } = require("./controllers/user/authController");
const { getUserOwnData } = require("./controllers/user/userController");
const authenticateToken = require("./services/middlewares/authenticateToken");
const { jobImport } = require("./controllers/job/jobController");
const {
	getJobRoles,
	getJobRolesWindSector,
	getJobRolesSolar,
	getJobRolesEnergy,
} = require("./controllers/job-roles/jobRoles");
const { getJobTitles } = require("./controllers/job-roles/jobRoles");
const { getSubSectors } = require("./controllers/sub-sectors/subSectors");
const { getSectors } = require("./controllers/sectors/sectors");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/register", register);
router.post("/login", login);
router.get("/userown", authenticateToken, getUserOwnData);
router.post("/import", upload.single("file"), jobImport);
router.get("/job-roles", getJobRoles);
router.get("/job-roles-solar-sector", getJobRolesSolar);
router.get("/job-roles-wind-sector", getJobRolesWindSector);
router.get("/job-roles-energy", getJobRolesEnergy);
router.get("/job-titles", getJobTitles);
router.get("/sub-sectors", getSubSectors);
router.get("/sectors", getSectors);

module.exports = router;
