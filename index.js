const Intangible = require('@josebarrios/intangible')

class JobPosting extends Intangible {

  constructor(model){
    model = model || {};
    super(model)
    this.baseSalary = model.baseSalary;
    this.datePosted = model.datePosted;
    this.educationRequirements = model.educationRequirements;
    this.employmentType = model.employmentType;
    this.experienceRequirements = model.experienceRequirements;
    this.hiringOrganization = model.hiringOrganization;
    this.incentiveCompensation = model.incentiveCompensation;
    this.industry = model.industry;
    this.jobBenefits = model.jobBenefits;
    this.jobLocation = model.jobLocation;
    this.occupationalCategory = model.occupationalCategory;
    this.qualifications = model.qualifications;
    this.responsibilities = model.responsibilities;
    this.salaryCurrency = model.salaryCurrency;
    this.skills = model.skills;
    this.specialCommitments = model.specialCommitments;
    this.title = model.title;
    this.validThrough = model.validThrough;
    this.workHours = model.workHours;
  }

  get baseSalary(){ return this.computed.baseSalary; }
  set baseSalary(value){ this.computed.baseSalary = value; }

  get datePosted(){ return this.computed.datePosted; }
  set datePosted(value){ this.computed.datePosted = value; }

  get educationRequirements(){ return this.computed.educationRequirements; }
  set educationRequirements(value){
		if(!value) return;
    if(!this.computed.educationRequirements){ this.computed.educationRequirements = []; }
    if(Intangible.isArray(value)){ this.computed.educationRequirements = value; }
    else if(Intangible.isString(value)){ this.computed.educationRequirements = [value]; }
  }

  get employmentType(){ return this.computed.employmentType; }
  set employmentType(value){ this.computed.employmentType = value; }

  get experienceRequirements(){ return this.computed.experienceRequirements; }
  set experienceRequirements(value){
		if(!value) return;
    if(Intangible.isArray(value)){ this.computed.experienceRequirements = value; }
    else if(Intangible.isString(value)) { this.computed.experienceRequirements = [value]; }
    else if(!this.computed.experienceRequirements){ this.computed.experienceRequirements = []; }
  }

  get hiringOrganization(){ return this.computed.hiringOrganization; }
  set hiringOrganization(value){ this.computed.hiringOrganization = value; }

  get incentiveCompensation(){ return this.computed.incentiveCompensation; }
	set incentiveCompensation(value){
		if(!value) return;
		if(!this.computed.incentiveCompensation){ this.computed.incentiveCompensation = []; }
    if(Intangible.isArray(value)){ this.computed.incentiveCompensation = value; }
    else if(Intangible.isString(value)) { this.computed.incentiveCompensation = [value]; }
	}

  get industry(){ return this.computed.industry; }
  set industry(value){ this.computed.industry = value; }

  get jobBenefits(){ return this.computed.jobBenefits; }
	set jobBenefits(value){
		if(!this.computed.jobBenefits){ this.computed.jobBenefits = []; }
    if(Intangible.isArray(value)){ this.computed.jobBenefits = value; }
    else if(Intangible.isString(value)) { this.computed.jobBenefits = [value]; }
	}

  get jobLocation(){ return this.computed.jobLocation; }
  set jobLocation(value){ this.computed.jobLocation = value; }

  get occupationalCategory(){ return this.computed.occupationalCategory; }
  set occupationalCategory(value){ this.computed.occupationalCategory = value; }

  get qualifications(){ return this.computed.qualifications; }
  set qualifications(value){
		if(!value) return;
    if(!this.computed.qualifications){ this.computed.qualifications = []; }
    if(Intangible.isArray(value)){ this.computed.qualifications = value; }
    else if(Intangible.isString(value)) { this.computed.qualifications = [value]; }
  }

  get responsibilities(){ return this.computed.responsibilities; }
  set responsibilities(value){
		if(!value) return;
    if(!this.computed.responsibilities){ this.computed.responsibilities = []; }
    if(Intangible.isArray(value)){ this.computed.responsibilities = value; }
    else if(Intangible.isString(value)) { this.computed.responsibilities = [value]; }
  }

  get salaryCurrency(){ return this.computed.salaryCurrency; }
  set salaryCurrency(value){ this.computed.salaryCurrency = value; }

  get skills(){ return this.computed.skills; }
	set skills(value){
		if(!value) return;
		if(!this.computed.skills){ this.computed.skills = []; }
    if(Intangible.isArray(value)){ this.computed.skills = value; }
    else if(Intangible.isString(value)) { this.computed.skills = [value]; }
	}

  get specialCommitments(){ return this.computed.specialCommitments; }
  set specialCommitments(value){ this.computed.specialCommitments = value; }

  get title(){ return this.computed.title; }
  set title(value){ this.computed.title = value; }

  get validThrough(){ return this.computed.validThrough; }
  set validThrough(value){ this.computed.validThrough = value; }

  get workHours(){ return this.computed.workHours; }
  set workHours(value){ this.computed.workHours = value; }
}

module.exports = JobPosting;
