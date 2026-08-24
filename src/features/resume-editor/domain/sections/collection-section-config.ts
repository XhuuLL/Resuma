import type {

  CertificationItem,
  EducationItem,
  LanguageItem,
  OrganizationItem,
  ProjectItem,

  ReferenceItem,
  SkillCategoryItem,
  WorkExperienceItem,
} from "@/features/resume-editor/domain/schema";
import { createLocalId } from "@/features/resume-editor/domain/create-local-id";
import type { CollectionSectionKey } from "@/features/resume-editor/domain/sections/section-metadata";

type CollectionSectionConfig<TItem> = {
  key: CollectionSectionKey;
  title: string;
  description: string;
  addLabel: string;
  itemTitle: string;
  emptyTitle: string;
  emptyDescription: string;
  createItem: () => TItem;
  /** Set only on date-range sections, for auto-sort and the header's "sort" action. */
  dateRange?: { startName: string; endName: string };
};

export const collectionSectionConfigs: Record<
  CollectionSectionKey,
  CollectionSectionConfig<
    | WorkExperienceItem
    | SkillCategoryItem
    | ProjectItem
    | EducationItem
    | CertificationItem
    | LanguageItem
    | ReferenceItem
    | OrganizationItem
  >
> = {
  workExperience: {
    key: "workExperience",
    title: "Pengalaman Kerja",
    description: "Peran, rentang tanggal, dan dampak untuk setiap perusahaan.",
    addLabel: "Tambah pengalaman",
    itemTitle: "Pengalaman",
    emptyTitle: "Belum ada pengalaman kerja",
    emptyDescription: "Tambahkan setidaknya satu peran untuk menunjukkan pengalaman terbaru Anda.",
    createItem: () => ({
      id: createLocalId("work-experience"),
      companyName: "",
      position: "",
      location: "",
      startDate: "Jan 2024",
      endDate: "saat ini",
      description: "<p></p>",
    }),
    dateRange: { startName: "startDate", endName: "endDate" },
  },
  skills: {
    key: "skills",
    title: "Keahlian",
    description: "Kelompokkan keahlian ke dalam kategori agar lebih rapi.",
    addLabel: "Tambah kategori keahlian",
    itemTitle: "Kategori keahlian",
    emptyTitle: "Belum ada kategori keahlian",
    emptyDescription: "Tambahkan kategori seperti Frontend, Backend, atau Alat.",
    createItem: () => ({
      id: createLocalId("skill-category"),
      categoryName: "",
      skills: [],
    }),
  },
  projects: {
    key: "projects",
    title: "Proyek",
    description: "Sorot proyek pilihan dengan tautan dan hasil singkat.",
    addLabel: "Tambah proyek",
    itemTitle: "Proyek",
    emptyTitle: "Belum ada proyek",
    emptyDescription:
      "Tambahkan proyek andalan atau relevan untuk mendukung pengalaman Anda.",
    createItem: () => ({
      id: createLocalId("project"),
      projectName: "",
      projectLink: "",
      startDate: "Jan 2024",
      endDate: "saat ini",
      description: "<p></p>",
    }),
    dateRange: { startName: "startDate", endName: "endDate" },
  },
  education: {
    key: "education",
    title: "Pendidikan",
    description: "Gelar, institusi, dan konteks akademis.",
    addLabel: "Tambah pendidikan",
    itemTitle: "Pendidikan",
    emptyTitle: "Belum ada riwayat pendidikan",
    emptyDescription: "Tambahkan sekolah, gelar, dan konteks yang relevan.",
    createItem: () => ({
      id: createLocalId("education"),
      name: "",
      location: "",
      startDate: "Jan 2020",
      endDate: "Jan 2024",
      degree: "",
      gpa: "",
      description: "<p></p>",
    }),
    dateRange: { startName: "startDate", endName: "endDate" },
  },

  certifications: {
    key: "certifications",
    title: "Sertifikasi",
    description:
      "Sertifikasi profesional dengan organisasi penerbit dan referensi.",
    addLabel: "Tambah sertifikasi",
    itemTitle: "Sertifikasi",
    emptyTitle: "Belum ada sertifikasi",
    emptyDescription: "Tambahkan sertifikasi hanya jika membantu peran yang dituju.",
    createItem: () => ({
      id: createLocalId("certification"),
      certificationName: "",
      issuingOrganization: "",
      issuedDate: "Jan 2024",
      certificationLink: "",
      credentialId: "",
    }),
  },

  languages: {
    key: "languages",
    title: "Bahasa",
    description: "Daftar bahasa dengan tingkat kemahiran yang jelas.",
    addLabel: "Tambah bahasa",
    itemTitle: "Bahasa",
    emptyTitle: "Belum ada bahasa",
    emptyDescription: "Tambahkan bahasa lisan atau tulisan yang relevan dengan peran.",
    createItem: () => ({
      id: createLocalId("language"),
      language: "",
      proficiency: "Kemahiran kerja profesional",
    }),
  },
  references: {
    key: "references",
    title: "Referensi",
    description: "Referensi yang dapat dihubungi untuk peran yang membutuhkannya.",
    addLabel: "Tambah referensi",
    itemTitle: "Referensi",
    emptyTitle: "Belum ada referensi",
    emptyDescription:
      "Tambahkan referensi hanya jika Anda ingin mencetaknya di CV.",
    createItem: () => ({
      id: createLocalId("reference"),
      name: "",
      background: "",
      contactDetails: "",
    }),
  },
  organizationVolunteering: {
    key: "organizationVolunteering",
    title: "Organisasi & Relawan",
    description:
      "Kerja komunitas, kepemimpinan, atau sukarela di luar peran berbayar.",
    addLabel: "Tambah pengalaman organisasi",
    itemTitle: "Pengalaman organisasi",
    emptyTitle: "Belum ada aktivitas organisasi",
    emptyDescription:
      "Tambahkan kerja organisasi atau sukarela bila itu mendukung cerita Anda.",
    createItem: () => ({
      id: createLocalId("organization"),
      organizationName: "",
      position: "",
      location: "",
      startDate: "Jan 2024",
      endDate: "saat ini",
      description: "<p></p>",
    }),
    dateRange: { startName: "startDate", endName: "endDate" },
  },
};

