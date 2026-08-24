import type { LayoutSectionItemMap } from "@/features/resume-editor/preview/layout-types";
import {
  CertificationsItem,
  EducationItem,
  OrganizationVolunteeringItem,
  ProjectsItem,
  ReferencesItem,
  WorkExperienceItem,
} from "@/features/resume-editor/preview/layouts/_shared/items";
import {
  RailLanguagesItem,
  RailSkillsItem,
} from "@/features/resume-editor/preview/layouts/_shared/items/rail-items";

export const splitItemViews: LayoutSectionItemMap = {
  workExperience: WorkExperienceItem,
  skills: RailSkillsItem,
  projects: ProjectsItem,
  education: EducationItem,
  certifications: CertificationsItem,
  languages: RailLanguagesItem,
  references: ReferencesItem,
  organizationVolunteering: OrganizationVolunteeringItem,
};
