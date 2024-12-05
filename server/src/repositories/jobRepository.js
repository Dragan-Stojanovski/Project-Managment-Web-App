const mongoose = require('mongoose');
const JobSchema = require("../models/jobSchema");

export class JobRepository
{
    constructor() { }

    findAllUniqueJobRoles = () => {
        return JobSchema.aggregate([
            {
              $group: {
                _id: "$job_role"
              }
            },
            {
              $project: {
                _id: 0,
                job_role: "$_id"
              }
            }
        ]);
    }
}