const XLSX = require("xlsx");

// MongoDB Models
const Sector = require("../models/sectorSchema");
const HardSkill = require("../models/hardSkillSchema");
const GenericSkill = require("../models/genericSkillSchema");
const IndustrySpecificSkill = require("../models/industrySpecificSkillSchema");
const Job = require("../models/jobSchema");

// Multer setup for file uploads

exports.jobImport = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("Attach a file first");
  }

  try {
    const workbook = XLSX.readFile(req.file.path);
    const sheetNames = workbook.SheetNames;

    const missingHardSkills = [];
    const missingGenericSkills = [];
    const missingIndustrySpecificSkills = [];

    for (let i = 0; i < sheetNames.length; i++) {
        const worksheet = workbook.Sheets[sheetNames[i]];
        const rows = XLSX.utils.sheet_to_json(worksheet, { header: 4 });

        const sectorTitle = rows[0][1]
        let sector = await Sector.findOneAndUpdate(
            { title: sectorTitle },
            { title: sectorTitle },
            { upsert: true, new: true }
        );

        if (i === 0) {
            await sector.subSectors.deleteMany();
        }

        const subSector = await sector.subSectors.create({
            title: rows[1][1],
            description: rows[2][1],
        });

        for (let row of data) {
            // Create a job
            await subSector.jobs.create({
                title: row["Job Title"],
                jobCategory: row["Job Category"],
                jobRole: row["Job Role"],
                jobRoleDefinition: row["Job Role Definition"],
                genericWithinTheSector: row["Generic Within Sector"],
                genericWithinTheSubSector: row["Generic Within Sub-Sector"],
                duration: row["Duration"],
                joiningTime: row["Joining Time"],
                employmentShare: row["Employment Share"],
                skillCategory: row["Skill Category"],
                academicQualification: (row["Academic Qualification"] || "").split(/\r?\n|\r/),
                subMajor: row["Sub Major"],
                availability: row["Availability"],
                hardSkills: (row["Hard Skills"] || "").split(/\r?\n|\r/),
                interpersonalSkills: (row["Interpersonal Skills"] || "").split(/\r?\n|\r/),
                industrySpecific: (row["Industry Specific Skills"] || "").split(/\r?\n|\r/),
                genericSkills: (row["Generic Skills"] || "").split(/\r?\n|\r/),
                technicalSkills: (row["Technical Skills"] || "").split(/\r?\n|\r/),
                softSkills: (row["Soft Skills"] || "").split(/\r?\n|\r/),
                reference: row["Reference"],
                media: row["Media"],
            });
        
            // Process skills
            (row["Hard Skills"] || "").split(/\r?\n|\r/).forEach(async (skill) => {
            const cleanedSkill = skill.replace(/\d+-/, "");
            const hardSkill = await HardSkill.findOne({ title: cleanedSkill });
            if (!hardSkill) missingHardSkills.push(cleanedSkill);
            });
        
            (row["Generic Skills"] || "").split(/\r?\n|\r/).forEach(async (skill) => {
            const cleanedSkill = skill.replace(/\d+-/, "");
            const genericSkill = await GenericSkill.findOne({ title: cleanedSkill });
            if (!genericSkill) missingGenericSkills.push(cleanedSkill);
            });
        
            (row["Industry Specific Skills"] || "").split(/\r?\n|\r/).forEach(async (skill) => {
            const cleanedSkill = skill.replace(/\d+-/, "");
            const industrySpecificSkill = await IndustrySpecificSkill.findOne({
                title: cleanedSkill,
            });
            if (!industrySpecificSkill)
            {
                missingIndustrySpecificSkills.push(cleanedSkill);
            }
            });
        }
    }

    const missingSkillsReport = {
      missingHardSkills: missingHardSkills.join(","),
      missingGenericSkills: missingGenericSkills.join(","),
      missingIndustrySpecificSkills: missingIndustrySpecificSkills.join(","),
    };

    if (
      missingHardSkills.length > 0 ||
      missingGenericSkills.length > 0 ||
      missingIndustrySpecificSkills.length > 0
    ) {
      res.json(missingSkillsReport);
    } else {
      res.send("Data imported successfully.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error importing data");
  }
};