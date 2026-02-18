
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { useI18n } from "../i18n/I18nContext";
import hatef from "../assets/people/hatef.jpg"
import sohrab from "../assets/people/sohrab.jpg"
import sobhan from "../assets/people/sobhan.jpg"
import erfan from "../assets/people/erfan.jpg"
import sepehr_jam from "../assets/people/sepehr_jam.jpg"
import sepehr_baz from "../assets/people/sepehr_baz.jpg"
import bardia from "../assets/people/bardia.jpg"
import mahsa from "../assets/people/mahsa.jpg"
import hanita from "../assets/people/hanita.jpg"

import "./people.css"

const members = [
  {
    project: "Current Members",
    people: [
      {
        name: "Dr. Mehdi Modarressi",
        role: "Supervisor",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWomKCshk9koMK7EhLHEj-i7ud9hC8TfGQawK11fFJqQ&s"
      },
      {
        name: "Hatef Rezaee",
        role: "Lead Researcher",
        photo: hatef
      },
      {
        name: "Sohrab Moradi",
        role: "Advisor - Ex Lead",
        photo: sohrab
      },
      {
        name: "M. Sepehr Bazargan",
        role: "Qt Developer",
        photo: sepehr_baz
      },
      {
        name: "Sepehr Jamali",
        role: "Qt Developer",
        photo: sepehr_jam
      },
      {
        name: "Arian Firoozi",
        role: "AI - Decision Making",
        photo: "https://arianfiroozi.github.io/assets/img/prof_pic-480.webp"
      },
      {
        name: "Sobhan Abedi",
        role: "AI - Decision Making",
        photo: sobhan
      },
      {
        name: "Erfan Daraee",
        role: "Harware - CV",
        photo: erfan
      },
    ]
  },
  {
    project: "Former Members",
    people: [
      {
        name: "Mohammad Reza M. Hashemi",
        role: "AI Researcher",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
      },
      {
        name: "Amirhossein",
        role: "Researcher",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
      },
      {
        name: "Hanita Nik Nasab",
        role: "Researcher",
        photo: hanita
      },
      {
        name: "Amirreza Kaffashan",
        role: "Researcher",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
      },
      {
        name: "Sana Sabeti",
        role: "Researcher",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
      },
      {
        name: "Bardia Khalafi",
        role: "Researcher",
        photo: bardia
      },
      {
        name: "Behrad Elmi",
        role: "Researcher",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
      },
      {
        name: "Sara Gity",
        role: "Hardware",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
      },
      {
        name: "Mahsa Aghdam",
        role: "Web",
        photo: mahsa
      },
      {
        name: "Mohammadreza Vali",
        role: "AI Researcher",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
      },
    ]
  }
];
export default function LabMembersPage() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleCardClick = (person) => setSelectedPerson(person);
  const handleClose = () => setSelectedPerson(null);
  const { t, lang } = useI18n();

  return (
    <div className="container-fluid py-5 px-5" style={{ maxWidth: "1200px" }}>
      <hr />
      <div style={{ height: "30px" }}></div>
      <h1 className="text-center mb-5">{t("ourlabmem")}</h1>

      {members.map((section, index) => (
        <div key={index} className="mb-5">
          <h2 className="mb-4 text-primary text-center memtitle">{t(section.project)}</h2>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
            {section.people.map((person, idx) => (
              <div className="col" key={idx}>
                <div
                  className="card shadow-sm h-100 border-0 rounded-4"
                  onClick={() => handleCardClick(person)}
                  style={{ cursor: "pointer", backgroundColor:'#ffffffe5' }}
                >
                  <img
                    src={person.photo}
                    className="card-img-top rounded-top-4"
                    alt={person.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title mb-2">{person.name}</h5>
                    <p className="card-text text-muted">{person.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Modal
        show={selectedPerson !== null}
        onHide={handleClose}
        centered
        size="lg"
      >
        <Modal.Body className="text-center p-4" style={{backgroundColor: '#ffffffe5', borderRadius:"10px", maxHeight:"90vh"}}> 
          {selectedPerson && (
            <>
              <img
                src={selectedPerson.photo}
                alt={selectedPerson.name}
                style={{ width: "100%", maxHeight: "70vh", borderRadius: "12px"}}
              />
              <h2 className="mt-4" style={{color: '#1f1f1fe5'}}>{selectedPerson.name}</h2>
              <p className="text-muted">{selectedPerson.role}</p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
