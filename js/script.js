const projectDetails = {
  booknest: {
    eyebrow: "01 — E-COMMERCE WEB APPLICATION",
    title: "BookNest",
    description: "A mini online bookstore developed with PHP and MySQL. The application supports customer shopping flows and administrator tools for managing books, orders and inventory.",
    features: [
      "User registration and login with password hashing and PHP sessions.",
      "Book browsing, search, book details and customer reviews.",
      "Session-based shopping cart and checkout workflow.",
      "Order creation with order items, stock deduction and database transactions.",
      "Admin book CRUD, order management, inventory monitoring and sales analytics.",
      "Prepared statements, server-side validation and output escaping."
    ],
    tags: ["PHP", "MySQL", "MySQLi", "HTML", "CSS", "JavaScript"],
    note: "Academic project. Payment flow is simulated; it is not a live payment gateway."
  },
  recruitment: {
    eyebrow: "02 — FULL-STACK INTERNSHIP",
    title: "Recruitment Management System",
    description: "A recruitment management application developed during my internship at Eternity Recruitment Sdn. Bhd. The system supports recruitment workflows across applicants, clients, jobs and supporting documents.",
    features: [
      "Built frontend components and pages using React.js.",
      "Designed and integrated REST API endpoints using Node.js and Express.js.",
      "Worked on PostgreSQL schema design, relationships and queries.",
      "Implemented authentication and role-based access control.",
      "Contributed to applicant management, file uploads, notifications and PDF export.",
      "Worked with server-side filtering, sorting and pagination."
    ],
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST API", "JWT", "RBAC"],
    note: "Internship work. Screens and implementation details are represented at a high level to respect company confidentiality."
  },
  veriqurl: {
    eyebrow: "03 — FINAL YEAR PROJECT",
    title: "VeriqURL",
    description: "A lightweight URL-based phishing detection and awareness tool. It combines a feature-based Random Forest model and a character-level Temporal Convolutional Network (TCN).",
    features: [
      "Accepts and validates a URL for analysis.",
      "Extracts lexical and structural URL features for Random Forest.",
      "Encodes URL character sequences for the TCN model.",
      "Combines model phishing probabilities to produce a prediction.",
      "Provides risk explanations and awareness guidance for users.",
      "Built the application interface and prediction workflow with Streamlit."
    ],
    tags: ["Python", "Streamlit", "Scikit-learn", "PyTorch", "Pandas", "NumPy"],
    note: "Final Year Project prototype. The output is a decision-support indicator, not a guarantee that a URL is safe or malicious."
  }
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const modalTags = document.getElementById("modalTags");
const modalNote = document.getElementById("modalNote");

function openProject(key) {
  const project = projectDetails[key];
  if (!project) return;
  document.getElementById("modalEyebrow").textContent = project.eyebrow;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalFeatures.replaceChildren(...project.features.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  }));
  modalTags.replaceChildren(...project.tags.map(item => {
    const tag = document.createElement("span");
    tag.textContent = item;
    return tag;
  }));
  modalNote.textContent = project.note;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.querySelector(".modal-close").focus();
}

function closeProject() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".project-open").forEach(button => {
  button.addEventListener("click", () => openProject(button.dataset.project));
});
document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeProject));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeProject();
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
