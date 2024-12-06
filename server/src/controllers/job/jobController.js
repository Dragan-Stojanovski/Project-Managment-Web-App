const XLSX = require("xlsx");
const mongoose = require("mongoose")

const Sector = require("../../models/sectorSchema");
const SubSector = require("../../models/subSectorSchema");
const HardSkill = require("../../models/hardSkillSchema");
const GenericSkill = require("../../models/genericSkillSchema");
const IndustrySpecificSkill = require("../../models/industrySpecificSkillSchema");
const Job = require("../../models/jobSchema");

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
        const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: null});

        const sectorTitle = rows[0][1];
        await Sector.findOneAndUpdate(
            { title: sectorTitle },
            { upsert: true, new: true }
        );

        if (i === 0) {
            await SubSector.deleteMany();
        }

        await SubSector.create({
            title: rows[1][1],
            description: rows[2][1],
        });

        var rowsWithoutHeaders = rows.slice(4);
        for (let row of rowsWithoutHeaders) {
          if (Object.values(row).every(x => x == null || x == ''))
          {
            break;
          }

          // Create a job
          await Job.create({
            title: row[2],
            job_category: row[1],
            job_role: row[2],
            job_role_definition: row[3] ?? '',
            generic_within_the_sector: row[4],
            generic_within_the_sub_sector: row[5],
            duration: row[6],
            joining_time: row[7],
            employment_share: row[8],
            skill_category: row[9],
            academic_qualification: row[10]?.split(/\r?\n/) ?? '',
            sub_major: row[11] ?? 'N/A',
            availability: row[12],
            hard_skills: row[13]?.split(/\r?\n/) ?? '',
            interpersonal_skills: row[14]?.split(/\r?\n/) ?? '',
            industry_specific: row[15]?.split(/\r?\n/) ?? '',
            generic_skills: row[16]?.split(/\r?\n/) ?? '',
            technical_skills: row[17]?.split(/\r?\n/) ?? '',
            soft_skills: row[18]?.split(/\r?\n/) ?? '',
            reference: row[19],
            media: row[20]
          });
      
          // Process skills
          (row[13] || "").split(/\r?\n/).forEach(async (skill) => {
              const cleanedSkill = skill.replace(/\d+-/, "");
              const hardSkill = await HardSkill.findOne({ title: cleanedSkill });
              if (!hardSkill) missingHardSkills.push(cleanedSkill);
          });
      
          (row[16] || "").split(/\r?\n/).forEach(async (skill) => {
              const cleanedSkill = skill.replace(/\d+-/, "");
              const genericSkill = await GenericSkill.findOne({ title: cleanedSkill });
              if (!genericSkill) missingGenericSkills.push(cleanedSkill);
          });
      
          (row[15] || "").split(/\r?\n/).forEach(async (skill) => {
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
  }
   catch (err) {
    console.error(err);
    res.status(500).send("Error importing data");
  }
};