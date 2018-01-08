const IntangibleDataController = require('dc-intangible')
const TYPE = 'JobPostingDataController';

class JobPostingDataController extends IntangibleDataController {

	static get type(){ return TYPE; }

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

	get baseSalary(){ return this.model.baseSalary; }
	set baseSalary(value){ this.model.baseSalary = value; }

	get datePosted(){ return this.model.datePosted; }
	set datePosted(value){ this.model.datePosted = value; }

	get educationRequirements(){ return this.model.educationRequirements; }
	set educationRequirements(value){
		if(IntangibleDataController.isArray(value)){ this.model.educationRequirements = value.join('\n'); }
		else if(IntangibleDataController.isString(value)) { this.model.educationRequirements = value; }
	}

	get employmentType(){ return this.model.employmentType; }
	set employmentType(value){ this.model.employmentType = value; }

	get experienceRequirements(){ return this.model.experienceRequirements; }
	set experienceRequirements(value){
		if(IntangibleDataController.isArray(value)){ this.model.experienceRequirements = value.join('\n'); }
		else if(IntangibleDataController.isString(value)) { this.model.experienceRequirements = value; }
	}

	get hiringOrganization(){ return this.model.hiringOrganization; }
	set hiringOrganization(value){ this.model.hiringOrganization = value; }

	get incentiveCompensation(){ return this.model.incentiveCompensation; }
	set incentiveCompensation(value){
		if(IntangibleDataController.isArray(value)){ this.model.incentiveCompensation = value.join('\n'); }
		else if(IntangibleDataController.isString(value)) { this.model.incentiveCompensation = value; }
	}

	get industry(){ return this.model.industry; }
	set industry(value){ this.model.industry = value; }

	get jobBenefits(){ return this.model.jobBenefits; }
	set jobBenefits(value){
		if(IntangibleDataController.isArray(value)){ this.model.jobBenefits = value.join('\n'); }
		else if(IntangibleDataController.isString(value)) { this.model.jobBenefits = value; }
	}

	get jobLocation(){ return this.model.jobLocation; }
	set jobLocation(value){ this.model.jobLocation = value; }

	get occupationalCategory(){ return this.model.occupationalCategory; }
	set occupationalCategory(value){ this.model.occupationalCategory = value; }

	get qualifications(){ return this.model.qualifications; }
	set qualifications(value){
		if(IntangibleDataController.isArray(value)){ this.model.qualifications = value.join('\n'); }
		else if(IntangibleDataController.isString(value)) { this.model.qualifications = value; }
	}

	get responsibilities(){ return this.model.responsibilities; }
	set responsibilities(value){
		if(IntangibleDataController.isArray(value)){ this.model.responsibilities = value.join('\n'); }
		else if(IntangibleDataController.isString(value)) { this.model.responsibilities = value; }
	}

	get salaryCurrency(){ return this.model.salaryCurrency; }
	set salaryCurrency(value){ this.model.salaryCurrency = value; }

	get skills(){ return this.model.skills; }
	set skills(value){
		if(IntangibleDataController.isArray(value)){ this.model.skills = value.join('\n'); }
		else if(IntangibleDataController.isString(value)) { this.model.skills = value; }
	}

	get specialCommitments(){ return this.model.specialCommitments; }
	set specialCommitments(value){ this.model.specialCommitments = value; }

	get title(){ return this.model.title; }
	set title(value){ this.model.title = value; }

	get validThrough(){ return this.model.validThrough; }
	set validThrough(value){ this.model.validThrough = value; }

	get workHours(){ return this.model.workHours; }
	set workHours(value){ this.model.workHours = value; }
}

module.exports = JobPostingDataController;
