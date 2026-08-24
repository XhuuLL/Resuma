import { z } from "zod";

import type { CollectionSectionKey } from "@/features/resume-editor/domain/sections/section-metadata";
import {
  educationItemSchema,
  languageItemSchema,
  organizationItemSchema,
  referenceItemSchema,
  skillCategoryItemSchema,
  type ResumeDraft,
  workExperienceItemSchema,
} from "@/features/resume-editor/domain/schema";
import {
  certificationFormItemSchema,
  projectFormItemSchema,
} from "@/features/resume-editor/forms/schemas/collection-form-item-schemas";
import { createCollectionSectionFormSchema } from "@/features/resume-editor/forms/schemas/create-collection-section-form-schema";

type CollectionSectionFormSchema<K extends CollectionSectionKey> = z.ZodType<{
  items: ResumeDraft["sections"][K]["items"];
}>;

export const collectionSectionFormSchemaMap: {
  [K in CollectionSectionKey]: CollectionSectionFormSchema<K>;
} = {
  workExperience: createCollectionSectionFormSchema(workExperienceItemSchema),
  skills: createCollectionSectionFormSchema(skillCategoryItemSchema),
  projects: createCollectionSectionFormSchema(projectFormItemSchema),
  education: createCollectionSectionFormSchema(educationItemSchema),
  certifications: createCollectionSectionFormSchema(certificationFormItemSchema),
  languages: createCollectionSectionFormSchema(languageItemSchema),
  references: createCollectionSectionFormSchema(referenceItemSchema),
  organizationVolunteering: createCollectionSectionFormSchema(
    organizationItemSchema,
  ),
};
