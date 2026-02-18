import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useI18n } from "../i18n/I18nContext";
import hatef from "../assets/people/hatef.jpg";
import sohrab from "../assets/people/sohrab.jpg";
import sobhan from "../assets/people/sobhan.jpg";
import erfan from "../assets/people/erfan.jpg";
import sepehr_jam from "../assets/people/sepehr_jam.jpg";
import sepehr_baz from "../assets/people/sepehr_baz.jpg";
import bardia from "../assets/people/bardia.jpg";
import mahsa from "../assets/people/mahsa.jpg";
import hanita from "../assets/people/hanita.jpg";
import "./people.css";

const PLACEHOLDER_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

const MEMBERS = [
  {
    sectionKey: "Current Members",
    people: [
      { name: "Dr. Mehdi Modarressi", role: "Supervisor", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWomKCshk9koMK7EhLHEj-i7ud9hC8TfGQawK11fFJqQ&s" },
      { name: "Hatef Rezaee", role: "Lead Researcher", photo: hatef },
      { name: "Sohrab Moradi", role: "Advisor - Ex Lead", photo: sohrab },
      { name: "M. Sepehr Bazargan", role: "Qt Developer", photo: sepehr_baz },
      { name: "Sepehr Jamali", role: "Qt Developer", photo: sepehr_jam },
      { name: "Arian Firoozi", role: "AI - Decision Making", photo: "https://arianfiroozi.github.io/assets/img/prof_pic-480.webp" },
      { name: "Sobhan Abedi", role: "AI - Decision Making", photo: sobhan },
      { name: "Erfan Daraee", role: "Hardware - CV", photo: erfan },
    ]
  },
  {
    sectionKey: "Former Members",
    people: [
      { name: "Mohammad Reza M. Hashemi", role: "AI Researcher", photo: PLACEHOLDER_IMAGE },
      { name: "Amirhossein", role: "Researcher", photo: PLACEHOLDER_IMAGE },
      { name: "Hanita Nik Nasab", role: "Researcher", photo: hanita },
      { name: "Amirreza Kaffashan", role: "Researcher", photo: PLACEHOLDER_IMAGE },
      { name: "Sana Sabeti", role: "Researcher", photo: PLACEHOLDER_IMAGE },
      { name: "Bardia Khalafi", role: "Researcher", photo: bardia },
      { name: "Behrad Elmi", role: "Researcher", photo: PLACEHOLDER_IMAGE },
      { name: "Sara Gity", role: "Hardware", photo: PLACEHOLDER_IMAGE },
      { name: "Mahsa Aghdam", role: "Web", photo: mahsa },
      { name: "Mohammadreza Vali", role: "AI Researcher", photo: PLACEHOLDER_IMAGE },
    ]
  }
];

function MemberCard({ person, onClick }) {
  return (
    <article
      className="card shadow-sm h-100 border-0 rounded-4 member-card"
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`${person.name}, ${person.role}`}
    >
      <img
        src={person.photo}
        className="card-img-top rounded-top-4"
        alt={person.name}
        loading="lazy"
      />
      <div className="card-body text-center">
        <h3 className="card-title h5 mb-2">{person.name}</h3>
        <p className="card-text text-muted mb-0">{person.role}</p>
      </div>
    </article>
  );
}

function MemberModal({ person, onClose }) {
  if (!person) return null;

  return (
    <Modal show={!!person} onHide={onClose} centered size="lg">
      <Modal.Body
        className="text-center p-4"
        style={{ backgroundColor: "#ffffffe5", borderRadius: "10px", maxHeight: "90vh" }}
      >
        <img
          src={person.photo}
          alt={person.name}
          style={{ width: "100%", maxHeight: "70vh", borderRadius: "12px", objectFit: "contain" }}
        />
        <h2 className="mt-4" style={{ color: "#1f1f1fe5" }}>{person.name}</h2>
        <p className="text-muted">{person.role}</p>
      </Modal.Body>
    </Modal>
  );
}

export default function LabMembersPage() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const { t, lang } = useI18n();
  const isRtl = lang === "fa";

  return (
    <main className="container-fluid py-5 px-3 px-md-5" style={{ maxWidth: "1200px" }} dir={isRtl ? "rtl" : "ltr"}>
      <hr />
      <div className="mb-5" />
      
      <h1 className="text-center mb-5">{t("ourlabmem")}</h1>

      {MEMBERS.map((section, index) => (
        <section key={index} className="mb-5" aria-labelledby={`section-${index}`}>
          <h2 id={`section-${index}`} className="mb-4 text-center memtitle">
            {t(section.sectionKey)}
          </h2>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
            {section.people.map((person, idx) => (
              <div className="col" key={idx}>
                <MemberCard
                  person={person}
                  onClick={() => setSelectedPerson(person)}
                />
              </div>
            ))}
          </div>
        </section>
      ))}

      <MemberModal
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />
    </main>
  );
}
