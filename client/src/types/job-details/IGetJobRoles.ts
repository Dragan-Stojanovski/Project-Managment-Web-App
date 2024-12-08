export interface IJob {
    title: string;
    job_category: string;
    job_role: string;
    job_role_definition?: string;
    generic_within_the_sector: boolean;
    generic_within_the_sub_sector: boolean;
    duration: string;
    joining_time: string;
    employment_share: string;
    skill_category: string;
    academic_qualification: string[];
    sub_major: string;
    availability: boolean;
    hard_skills: string[];
    interpersonal_skills: string[];
    industry_specific: string[];
    generic_skills: string[];
    soft_skills: string[];
    technical_skills: string[];
    reference?: string;
    media?: string;
    sub_sector: string; 
  }