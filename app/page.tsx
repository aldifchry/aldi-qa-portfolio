
"use client";

import { useEffect, useState } from "react";

type Language = "en" | "id";

const skills = [
  { name: "Excel", logo: "/icons/excel.svg" },
  { name: "Postman", logo: "/icons/postman.svg" },
  { name: "Katalon Studio", logo: "/icons/katalon.svg" },
  { name: "Cypress", logo: "/icons/cypress.svg" },
  { name: "Jira", logo: "/icons/jira.svg" },
  { name: "Asana", logo: "/icons/asana.svg" },
  { name: "DBeaver", logo: "/icons/dbeaver.svg" },
  { name: "JMeter", logo: "/icons/jmeter.svg" },
  { name: "K6", logo: "/icons/k6.svg" },
  { name: "AppScript", logo: "/icons/appscript.svg" },
];

const projects = [
  {
    title: "Bank Jatim - Internet Bank for Business",
    logo: "/icons/bankjatim.svg",
    tag: "Internet Bank for Business",
    tagId: "Internet Banking untuk Bisnis",
    period: "September 2023 - April 2025",
periodId: "September 2023 - April 2025",
    desc: "Internet Bank for Business project involving manual, API, SIT, UAT, and regression automation using Katalon.",
    descId:
      "Proyek Internet Bank for Business yang mencakup pengujian manual, API, SIT, UAT, dan regression automation menggunakan Katalon.",
    details: [
  { en: "Account Configuration", id: "Konfigurasi Rekening" },
  { en: "Account Categorization", id: "Kategorisasi Rekening" },
  { en: "Group Settings", id: "Pengaturan Grup" },
  { en: "Game Top-Up", id: "Isi Ulang Game" },
  { en: "Indihome Internet", id: "Internet IndiHome" },
  { en: "Telkom", id: "Telkom" },
  { en: "Multifinance", id: "Pembiayaan Multiguna" },
  { en: "BPR", id: "BPR" },
  { en: "Credit Card", id: "Kartu Kredit" },
  { en: "XL/Axis Data Plans", id: "Paket Data XL/Axis" },
  { en: "Game Voucher", id: "Voucher Game" },
  { en: "Insurance", id: "Asuransi" },
],
  },
  {
    title: "Bank Jatim - Internet Banking",
    logo: "/icons/bankjatim.svg",
    tag: "Internet Banking",
    tagId: "Internet Banking",
    period: "September 2023 - February 2024",
periodId: "September 2023 - Februari 2024",
    desc: "Internet Banking project involving manual and API testing, SIT, and UAT support.",
    descId:
      "Proyek Internet Banking yang mencakup pengujian manual dan API, SIT, serta dukungan UAT.",
    details: [
  { en: "Hotel", id: "Hotel" },
  { en: "PDAM Customer ID", id: "ID Pelanggan PDAM" },
  { en: "Interest Rate Information", id: "Informasi Suku Bunga" },
  { en: "PDAM Payment Code", id: "Kode Pembayaran PDAM" },
  { en: "Mega Central Finance", id: "Mega Central Finance" },
  { en: "Multifinance", id: "Pembiayaan Multiguna" },
  { en: "TV Transaction Dispute", id: "Sanggahan Transaksi TV" },
  { en: "Airline Ticket", id: "Tiket Pesawat" },
  { en: "PDAM Virtual Account", id: "Virtual Account PDAM" },
  { en: "Ziswaf", id: "Ziswaf" },
],
  },
  {
    title: "Bank Victoria - Internet Bank for Business",
    logo: "/icons/bankvictoria.svg",
    tag: "Internet Bank for Business",
    tagId: "Internet Banking untuk Bisnis",
    period: "August 2024 - October 2024",
    periodId: "Agustus 2024 - Oktober 2024",
    desc: "Internet Bank for Business project covering manual and API testing, SIT, and UAT support.",
    descId:
      "Proyek Internet Bank for Business yang mencakup pengujian manual dan API, SIT, serta dukungan UAT.",
    details: [
  { en: "Role Maintenance Authorization", id: "Otorisasi Pengelolaan Role" },
  { en: "Product Purchase", id: "Pembelian Produk" },
  { en: "Email Broadcast", id: "Pengiriman Email Massal" },
],
  },
  {
    title: "Bank CIMB Niaga - Internet Banking",
    logo: "/icons/octoclicks.svg",
    tag: "Internet Banking",
    tagId: "Internet Banking",
    period: "April 2025 - September 2025",
    periodId: "April 2025 - September 2025",
    desc: "Internet Banking project covering manual and API testing, SIT, and UAT support.",
    descId: "Proyek Internet Banking yang mencakup pengujian manual dan API, SIT, serta dukungan UAT.",
    details: [
  { en: "Transfer (Deliverable 3)", id: "Transfer (Revamp yang ke 3)" },
  { en: "Affinity Debit Card", id: "Kartu Debit Affinity" },
],
  },
  {
    title: "Bank CIMB Niaga - Mobile Banking",
    logo: "/icons/octomobile.jpeg",
    tag: "Mobile Banking",
    tagId: "Mobile Banking",
    period: "April 2025 - February 2026",
    periodId: "April 2025 - Februari 2026",
    desc: "Mobile Banking project covering manual and API testing, SIT, and UAT support.",
    descId:
      "Proyek Mobile Banking yang mencakup pengujian manual dan API, SIT, serta dukungan UAT.",
    details: [
  { en: "Enable e-Debit", id: "Aktivasi e-Debit" },
  { en: "Point Xtra Dynamic Rewards", id: "Point Xtra Dynamic Rewards" },
  { en: "Schedule Transaction (Phase 2)", id: "Transaksi Terjadwal (Tahap 2)" },
  { en: "FDS Challenge", id: "FDS Challenge" },
  { en: "Add Phone Number", id: "Tambah Nomor Telepon" },
],
  },
  {
    title: "Bank Hibank - Mobile Banking",
    logo: "/icons/hibank.svg",
    tag: "Mobile Banking",
    tagId: "Mobile Banking",
    period: "July 2025 - November 2025",
    periodId: "Juli 2025 - November 2025",
    desc: "Mobile Banking project covering manual and API testing, SIT, and UAT support.",
    descId:
      "Proyek Mobile Banking yang mencakup pengujian manual dan API, SIT, serta dukungan UAT.",
    details: [
  { en: "Charity Wallet (Zakat, Donations)", id: "Dompet Amal (Zakat, Donasi)" },
  { en: "Hi-Community", id: "Hi-Community" },
  { en: "Virtual Card", id: "Kartu Virtual" },
  { en: "Disable Screenshot & Screen Recording", id: "Menonaktifkan Screenshot & Perekaman Layar" },
],
  },
  {
    title: "Pegadaian - Tring!",
    logo: "/icons/tring.svg",
    tag: "Mobile Application",
    tagId: "Aplikasi Mobile",
    period: "February 2026 - July 2026",
    periodId: "Februari 2026 - Juli 2026",
    desc: "Digital application project involving manual and API testing, SIT, and UAT support.",
    descId:
      "Proyek aplikasi digital yang mencakup pengujian manual dan API, SIT, serta dukungan UAT.",
   details: [
  { en: "Vehicle Installment Financing", id: "Pembiayaan Angsuran Kendaraan" },
  { en: "Hajj Plus Financing", id: "Pembiayaan Haji Plus" },
  { en: "Ayoconnect Direct Debit", id: "Direct Debit Ayoconnect" },
  { en: "Pawn Services at Branches (Electronics & Jewelry)", id: "Layanan Gadai di Cabang (Elektronik & Perhiasan)" },
  { en: "Additional Bank Account Disbursement", id: "Pencairan ke Rekening Bank Tambahan" },
],
  },
  {
    title: "Bank Nobu - Internet Bank for Business",
    logo: "/icons/banknobu.png",
    tag: "Internet Bank for Business",
    tagId: "Internet Banking untuk Bisnis",
    period: "August 2026 - Present",
    periodId: "Agustus 2026 - Sekarang",
    desc: "Current Internet Bank for Business project involving manual and API testing, SIT, and UAT support.",
    descId:
      "Proyek Internet Bank for Business yang sedang berjalan, mencakup pengujian manual dan API, SIT, serta dukungan UAT.",
    details: [
  { en: "Change Kurs Rate", id: "Perubahan Kurs" },
  { en: "Foreign Currency Transfer", id: "Transfer Valuta Asing" },
  { en: "Transfer Destination Forex List", id: "Daftar Tujuan Transfer Valas" },
  { en: "Currency", id: "Mata Uang" },
  { en: "Forex Purpose", id: "Tujuan Transaksi Valas" },
  { en: "Country Management", id: "Pengelolaan Negara" },
  { en: "Source of Income", id: "Sumber Penghasilan" },
  { en: "Whitelist Corridor", id: "Koridor Whitelist" },
],
  },
];

const content = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      eyebrow: "IT QUALITY ASSURANCE",
      greeting: "Hi, I'm",
      title: "I make software safer to release.",
      description:
        "IT Quality Assurance with around 3 years of experience in manual testing, API testing, SQL validation, and test automation across banking and financial services projects.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      role: "IT Quality Assurance",
      skills: "Manual · API · Automation",
    },
    about: {
      eyebrow: "ABOUT ME",
      title: "QA is more than finding bugs.",
      paragraph1:
        "I'm Aldi, an IT Quality Assurance professional currently working at PT Infosys Solusi Terpadu. My work has involved enterprise banking and financial services clients.",
      paragraph2:
        "My usual QA flow is simple: understand the requirement, create test scenarios and cases, execute testing, report defects, and support the team until the feature is ready.",
    },
    skills: {
      eyebrow: "SKILLS",
      title: "Tools I work with.",
    },
    projects: {
      eyebrow: "PROJECTS",
      title: "Selected QA projects.",
      subtitle:
        "Professional QA experience across banking, financial services, and digital applications.",
    },
    experience: {
      eyebrow: "EXPERIENCE",
      title: "Professional experience.",
      period: "September 2023 - Present",
      role: "IT Quality Assurance",
      company: "PT Infosys Solusi Terpadu",
      description:
        "Manual and automation testing for enterprise banking and financial services projects. Worked with requirements, test scenarios, functional and regression testing, API validation, database checks, defect reporting, and UAT support.",
    },
    quote: {
      title: "“Find problems before our users do.”",
      subtitle: "My simple approach to quality.",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Let's connect.",
      description:
        "Open to QA opportunities and conversations about software quality.",
    },
    footer: "IT Quality Assurance Portfolio",
  },
  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
    },
    hero: {
      eyebrow: "IT QUALITY ASSURANCE",
      greeting: "Hai, saya",
      title: "Saya memastikan software lebih aman sebelum dirilis.",
      description:
        "IT Quality Assurance dengan pengalaman sekitar 3 tahun dalam pengujian manual, API testing, validasi SQL, dan test automation pada proyek perbankan dan layanan keuangan.",
      viewProjects: "Lihat Proyek",
      contactMe: "Hubungi Saya",
      role: "IT Quality Assurance",
      skills: "Manual · API · Automation",
    },
    about: {
      eyebrow: "TENTANG SAYA",
      title: "QA bukan hanya tentang menemukan bug.",
      paragraph1:
        "Saya Aldi, seorang IT Quality Assurance yang saat ini bekerja di PT Infosys Solusi Terpadu. Pekerjaan saya mencakup proyek perbankan dan layanan keuangan berskala enterprise.",
      paragraph2:
        "Alur kerja QA yang biasa saya lakukan cukup sederhana: memahami kebutuhan, membuat skenario dan test case, menjalankan pengujian, melaporkan defect, serta mendukung tim hingga fitur siap digunakan.",
    },
    skills: {
      eyebrow: "KEAHLIAN",
      title: "Tools yang saya gunakan.",
    },
    projects: {
      eyebrow: "PROYEK",
      title: "Pilihan proyek QA.",
      subtitle:
        "Pengalaman profesional QA di bidang perbankan, layanan keuangan, dan aplikasi digital.",
    },
    experience: {
      eyebrow: "PENGALAMAN",
      title: "Pengalaman profesional.",
      period: "September 2023 - Sekarang",
      role: "IT Quality Assurance",
      company: "PT Infosys Solusi Terpadu",
      description:
        "Pengujian manual dan automation untuk proyek perbankan dan layanan keuangan berskala enterprise. Terlibat dalam memahami requirement, menyusun test scenario, functional dan regression testing, validasi API, pengecekan database, pelaporan defect, serta dukungan UAT.",
    },
    quote: {
      title: "“Temukan masalah sebelum pengguna mengalaminya.”",
      subtitle: "Pendekatan sederhana saya terhadap kualitas.",
    },
    contact: {
      eyebrow: "KONTAK",
      title: "Mari terhubung.",
      description:
        "Terbuka untuk peluang QA dan diskusi seputar kualitas software.",
    },
    footer: "Portofolio IT Quality Assurance",
  },
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");

    if (savedLanguage === "en" || savedLanguage === "id") {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("portfolio-language", newLanguage);
  };

  const t = content[language];

  return (
    <main className={darkMode ? "site dark-mode" : "site light-mode"}>
      {/* NAVBAR */}
      <nav className="nav">
        <a
          className="brand"
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          ALDI FACHRY<span>.</span>
        </a>

        <div className={`navlinks ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t.nav.about}
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            {t.nav.skills}
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            {t.nav.projects}
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            {t.nav.experience}
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t.nav.contact}
          </a>
        </div>

        <div className="nav-actions">
          {/* LANGUAGE SWITCH */}
          <div className="language-toggle" aria-label="Choose language">
            <button
              type="button"
              className={language === "en" ? "language-active" : ""}
              onClick={() => changeLanguage("en")}
              aria-label="Switch to English"
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <span></span>
            <button
              type="button"
              className={language === "id" ? "language-active" : ""}
              onClick={() => changeLanguage("id")}
              aria-label="Ganti ke Bahasa Indonesia"
              aria-pressed={language === "id"}
            >
              ID
            </button>
          </div>

          {/* THEME TOGGLE */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            aria-pressed={!darkMode}
            type="button"
          >
            <span className="sun-icon">☀</span>
            <span className="moon-icon">☾</span>
          </button>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero section soft">
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>

          <h1>
            {t.hero.greeting} <span>Aldi Fachry.</span>
          </h1>

          <h2>{t.hero.title}</h2>

          <p className="lead">{t.hero.description}</p>

          <div className="actions">
            <a className="button primary" href="#projects">
              {t.hero.viewProjects}
            </a>

            <a className="button secondary" href="#contact">
              {t.hero.contactMe}
            </a>
          </div>
        </div>

        <div className="hero-card profile-card">
          <img src="/aldi.jpg" alt="Aldi Fachry" />

          <div className="profile-info">
            <h3>Aldi Fachry</h3>
            <p>{t.hero.role}</p>
            <span>{t.hero.skills}</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-heading">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2>{t.about.title}</h2>
        </div>

        <div className="about-grid">
          <p>{t.about.paragraph1}</p>
          <p>{t.about.paragraph2}</p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section soft">
        <div className="section-heading">
          <p className="eyebrow">{t.skills.eyebrow}</p>
          <h2>{t.skills.title}</h2>
        </div>

        <div className="skill-grid">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <img
                src={skill.logo}
                alt={skill.name}
                className="skill-logo"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-heading">
          <p className="eyebrow">{t.projects.eyebrow}</p>
          <h2>{t.projects.title}</h2>
          <p className="subtext">{t.projects.subtitle}</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="project-client">
                <div className="client-logo">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                  />
                </div>

                <div>
                  <p className="tag">
                    {language === "en" ? project.tag : project.tagId}
                  </p>
                  <h3>{project.title}</h3>
                </div>
              </div>

              <p className="project-period">
  {language === "en" ? project.period : project.periodId}
</p>
              <p>
                {language === "en" ? project.desc : project.descId}
              </p>

              <ul>
  {project.details.map((detail, detailIndex) => (
    <li key={detailIndex}>
      {language === "en" ? detail.en : detail.id}
    </li>
  ))}
</ul>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section soft">
        <div className="section-heading">
          <p className="eyebrow">{t.experience.eyebrow}</p>
          <h2>{t.experience.title}</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <span>{t.experience.period}</span>

            <div className="experience-content">
              <div className="experience-company">
                <div className="experience-logo">
                  <img
                    src="/icons/ist.png"
                    alt="PT Infosys Solusi Terpadu logo"
                  />
                </div>

                <div>
                  <h3>{t.experience.role}</h3>
                  <h4>{t.experience.company}</h4>
                </div>
              </div>

              <p>{t.experience.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section quote-section">
        <p className="quote">{t.quote.title}</p>
        <p className="subtext">{t.quote.subtitle}</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section soft contact">
        <div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>

          <p className="subtext">{t.contact.description}</p>
        </div>

        <div className="contact-links">
          <a href="mailto:aalamsyah442@gmail.com">Email ↗</a>

          <a
            href="https://www.linkedin.com/in/aldifachry/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/aldifchry"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 Aldi Fachry · {t.footer}
      </footer>
    </main>
  );
}
