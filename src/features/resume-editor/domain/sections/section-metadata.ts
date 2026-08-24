import type { ResumeDraft } from "@/features/resume-editor/domain/schema";

const editablePanelKeys = [
  "profile",
  "summary",
  "workExperience",
  "skills",
  "projects",
  "education",
  "certifications",
  "languages",
  "references",
  "organizationVolunteering",
] as const;

export type EditorPanelKey = (typeof editablePanelKeys)[number];
export const resumeSectionKeys = editablePanelKeys.filter(
  (panelKey) => panelKey !== "profile",
) as Exclude<EditorPanelKey, "profile">[];
export type ResumeSectionPanelKey = (typeof resumeSectionKeys)[number];

export const collectionSectionKeys = [
  "workExperience",
  "skills",
  "projects",
  "education",
  "certifications",
  "languages",
  "references",
  "organizationVolunteering",
] as const;

export type CollectionSectionKey = (typeof collectionSectionKeys)[number];

export const sectionLabels: Record<
  Exclude<EditorPanelKey, "profile">,
  string
> = {
  summary: "Ringkasan",
  workExperience: "Pengalaman Kerja",
  skills: "Keahlian",
  projects: "Proyek",
  education: "Pendidikan",
  certifications: "Sertifikasi",
  languages: "Bahasa",
  references: "Referensi",
  organizationVolunteering: "Organisasi & Relawan",
};

/** Single read path for a section heading: the user's title if set, else the built-in
 *  label — clearing the rename field resets to the default. */
export function sectionTitleFor(
  sections: ResumeDraft["sections"],
  sectionKey: ResumeSectionPanelKey,
) {
  return sections[sectionKey].title?.trim() || sectionLabels[sectionKey];
}

export const languageProficiencyOptions = [
  "Kemahiran dasar",
  "Kemahiran kerja terbatas",
  "Kemahiran kerja profesional",
  "Kemahiran profesional penuh",
  "Kemahiran penutur asli atau dwibahasa",
];

export function isCollectionSectionKey(
  sectionKey: ResumeSectionPanelKey,
): sectionKey is CollectionSectionKey {
  return collectionSectionKeys.includes(sectionKey as CollectionSectionKey);
}

/** A hidden collection section must be revealed before editing, or the form edits
 *  something the paper can't show. Shared by desktop and mobile panel entry points. */
export function needsSectionReveal(
  sections: ResumeDraft["sections"],
  panel: EditorPanelKey,
): panel is CollectionSectionKey {
  return (
    panel !== "profile" &&
    isCollectionSectionKey(panel as ResumeSectionPanelKey) &&
    !sections[panel].visible
  );
}

export function getOrderedSectionKeys(sections: ResumeDraft["sections"]) {
  return [...resumeSectionKeys].sort(
    (left, right) => sections[left].order - sections[right].order,
  );
}

export function getOrderedVisibleSectionKeys(
  sections: ResumeDraft["sections"],
) {
  return getOrderedSectionKeys(sections).filter(
    (sectionKey) => sections[sectionKey].visible,
  );
}

/** Splits ordered collection sections into visible (drag-sortable) keys and hidden
 *  keys for the "Add section" menu. Shared by desktop and mobile section lists. */
export function partitionCollectionKeys(sections: ResumeDraft["sections"]) {
  const ordered = getOrderedSectionKeys(sections);
  const sortableKeys = ordered.filter(
    (key): key is CollectionSectionKey =>
      isCollectionSectionKey(key) && sections[key].visible,
  );
  const hiddenKeys = ordered.filter(
    (key): key is CollectionSectionKey =>
      isCollectionSectionKey(key) && !sections[key].visible,
  );
  return { sortableKeys, hiddenKeys };
}
