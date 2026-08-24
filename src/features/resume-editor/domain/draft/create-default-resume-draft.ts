import { createDefaultPdfPresentation } from "@/features/resume-editor/domain/presentation/pdf-presentation";
import type { ResumeDraft } from "@/features/resume-editor/domain/schema";

function createTimestamp() {
  return new Date().toISOString();
}

function createDefaultWorkExperienceItem() {
  return {
    id: "default-work-experience-1",
    companyName: "PT Alter Teknologi",
    position: "Staf Departemen Operasional",
    location: "Remote / WFH",
    startDate: "September 2025",
    endDate: "Saat ini",
    description:
      "<ul><li>Memantau dan mengelola operasional harian secara remote untuk memastikan kelancaran sistem perusahaan.</li><li>Berkolaborasi dengan tim lintas departemen untuk menyelesaikan masalah teknis operasional harian.</li><li>Menyusun laporan kinerja dan mendokumentasikan prosedur standar operasional (SOP).</li></ul>",
  };
}

function createDefaultSkillCategoryItem() {
  return {
    id: "default-skill-category-1",
    categoryName: "Frontend Development Ceritanee",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Desain Sistem",
      "Vitest",
      "Playwright",
    ],
  };
}

function createDefaultProjectItem() {
  return {
    id: "default-project-1",
    projectName: "Portal Pelayanan Desa Luwunggede",
    projectLink:
      "https://inventaris-luwunggede.id/",
    startDate: "Juli 2026",
    endDate: "Agustus 2026",
    description:
      "<ul>Proker Individu KKN Jierrrs.></ul>",
  };
}

function createDefaultEducationItem() {
  return {
    id: "default-education-1",
    name: "Universitas Muhadi Setiabudi",
    location: "Brebes, Indonesia",
    startDate: "September 2023",
    endDate: "September 2027",
    degree: "S1 Teknik Informatika",
    gpa: "3.85 / 4.00",
    description:
      "<ul><li>Fokus pada pengembangan Frontend dan Machine Learning Ceritanee.</li></ul>",
  };
}

function createDefaultCertificationItem() {
  return {
    id: "default-certification-1",
    certificationName: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuingOrganization: "Dicoding",
    issuedDate: "Januari 2026",
    certificationLink:
      "https://www.dicoding.com/certificates/MEPJ279GWP3V",
    credentialId: "MEPJ279GWP3V",
  };
}

function createDefaultLanguageItem() {
  return {
    id: "default-language-1",
    language: "Bahasa Jawaa",
    proficiency: "Fassih men bahasa jawaa coyy",
  };
}

function createDefaultReferenceItem() {
  return {
    id: "default-reference-1",
    name: "Seluruh Dosen TI Ceritanee",
    background: "Dosen TI Ceritanee, Universitas Muhadi Setiabudi",
    contactDetails: "dosen.informatika@umus.ac.id · +62 811-2233-4455",
  };
}

function createDefaultOrganizationItem() {
  return {
    id: "default-organization-1",
    organizationName: "BEM KM FT",
    position: "PSDM",
    location: "Brebes, Indonesia",
    startDate: "Oktober 2024",
    endDate: "Oktober 2025",
    description:
      "<ul><li>Meluan Tok Sebagai Anggota Sing Kadang kiding aktif ee.</ul>",
  };
}

export function createDefaultResumeDraft(): ResumeDraft {
  return {
    schemaVersion: 3,
    updatedAt: createTimestamp(),
    pdfPresentation: createDefaultPdfPresentation(),
    profile: {
      fullName: "Akhmad Fatkhul Arifin",
      headline: "Web Development Ceritanee",
      location: "Brebes, Indonesia",
      phone: "+62 812-3344-5568",
      email: "fatkhuldisini@gmail.com",
      photo: "https://github.com/XhuuLL.png",
      extraLinks: [
        {
          id: "profile-link-linkedin",
          url: "https://linkedin.com/in/akhmad-fatkhul-arifin-632a383a6",
        },
        {
          id: "profile-link-github",
          url: "https://github.com/XhuuLL",
        },
        {
          id: "profile-link-portfolio",
          url: "https://xhuull.vercel.app",
        },
      ],
    },
    sections: {
      summary: {
        visible: true,
        order: 0,
        content:
          "<p>Saya adalah seorang mahasiswa di Universitas Muhadi Setiabudi dengan minat yang kuat dalam pengembangan software, khususnya di bidang low-level, mobile, website dan desktop. Selain itu, saya memiliki pengalaman dalam pengembangan website dan sistem informasi, yang saya dapatkan dari berbagai proyek. Saya juga rutin berkontribusi di GitHub untuk mendokumentasikan dan membagikan proyek-proyek yang saya kerjakan. Sebagai pengguna Windows And Linux, saya selalu bersemangat untuk terus belajar dan mendalami teknologi baru.</p>",
      },
      workExperience: {
        visible: true,
        order: 1,
        items: [createDefaultWorkExperienceItem()],
      },
      skills: {
        visible: true,
        order: 2,
        items: [createDefaultSkillCategoryItem()],
      },
      projects: {
        visible: true,
        order: 3,
        items: [createDefaultProjectItem()],
      },
      education: {
        visible: true,
        order: 4,
        items: [createDefaultEducationItem()],
      },
      certifications: {
        visible: true,
        order: 6,
        items: [createDefaultCertificationItem()],
      },
      languages: {
        visible: true,
        order: 8,
        items: [createDefaultLanguageItem()],
      },
      references: {
        visible: false,
        order: 9,
        items: [createDefaultReferenceItem()],
      },
      organizationVolunteering: {
        visible: false,
        order: 10,
        items: [createDefaultOrganizationItem()],
      },
    },
  };
}
