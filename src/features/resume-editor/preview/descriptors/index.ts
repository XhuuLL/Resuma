
import { certificationsDescriptor } from "./certifications";
import { educationDescriptor } from "./education";
import { languagesDescriptor } from "./languages";
import { organizationVolunteeringDescriptor } from "./organization-volunteering";
import { projectsDescriptor } from "./projects";
import { referencesDescriptor } from "./references";
import { skillsDescriptor } from "./skills";
import { workExperienceDescriptor } from "./work-experience";

export const sectionDescriptors = {
  workExperience: workExperienceDescriptor,
  skills: skillsDescriptor,
  projects: projectsDescriptor,
  education: educationDescriptor,
  certifications: certificationsDescriptor,
  languages: languagesDescriptor,
  references: referencesDescriptor,
  organizationVolunteering: organizationVolunteeringDescriptor,
} as const;
