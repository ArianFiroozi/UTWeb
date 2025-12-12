
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { useI18n } from "../i18n/I18nContext";

import "./people.css"
const members = [
  {
    project: "Current Members",
    people: [
      {
        name: "Dr. Mehdi Modarressi",
        role: "Supervisor",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
      },
      {
        name: "Hatef Rezaee",
        role: "Lead Researcher",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
      },
      {
        name: "M. Sepehr Bazargan",
        role: "Koskhol 1",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
      },
      {
        name: "Sepehr Jamali",
        role: "Koskhol 2",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
      },
      {
        name: "Arian Firoozi",
        role: "Koskhol 3",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
      },
      {
        name: "Sobhan Abedi",
        role: "Koskhol 4",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
      },
      {
        name: "Erfan Daraee",
        role: "Koskhol 5",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
      },
    ]
  },
  {
    project: "Former Members",
    people: [
      {
        name: "Sohrab Moradi",
        role: "Lead Researcher",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
      },
      {
        name: "Mohammad Reza M. Hashemi",
        role: "AI Researcher",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
      },
      {
        name: "Amir TJ",
        role: "Cheater",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
      },
      {
        name: "Sara Gity",
        role: "Hardware",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
      },
      {
        name: "Mahsa Aghdam",
        role: "Web",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
      },
      {
        name: "Mohammadreza Vali",
        role: "AI Researcher",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
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
          <h2 className="mb-4 text-primary text-center">{t(section.project)}</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
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
        <Modal.Body className="text-center p-4" style={{backgroundColor: '#ffffffe5', borderRadius:"10px"}}> 
          {selectedPerson && (
            <>
              <img
                src={selectedPerson.photo}
                alt={selectedPerson.name}
                style={{ width: "100%", height: "auto", borderRadius: "12px"}}
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
