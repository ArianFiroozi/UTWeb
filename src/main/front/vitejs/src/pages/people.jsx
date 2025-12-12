
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

import "./people.css"
const members = [
  {
    project: "Current Members",
    people: [
      {
        name: "Dr. Mehdi Modarressi",
        role: "Supervisor",
        photo: "https://picsum.photos/300/400"
      },
      {
        name: "Hatef Rezaee",
        role: "Lead Researcher",
        photo: "https://picsum.photos/300/400"
      },
      {
        name: "M. Sepehr Bazargan",
        role: "Koskhol 1",
        photo: "https://picsum.photos/300/400"
      },
      {
        name: "Sepehr Jamali",
        role: "Koskhol 2",
        photo: "https://picsum.photos/300/400"
      },
      {
        name: "Arian Firoozi",
        role: "Koskhol 3",
        photo: "https://picsum.photos/300/400"
      },
      {
        name: "Sobhan Abedi",
        role: "Koskhol 4",
        photo: "https://picsum.photos/300/400"
      },
      {
        name: "Erfan Daraee",
        role: "Koskhol 5",
        photo: "https://picsum.photos/300/400"
      },
    ]
  },
  {
    project: "Former Members",
    people: [
      {
        name: "Sohrab Moradi",
        role: "Lead Researcher",
        photo: "https://picsum.photos/300/400"
      },
      {
        name: "Mohammad Reza M. Hashemi",
        role: "AI Researcher",
        photo: "https://picsum.photos/300/400"
      },
      {
        name: "Amir TJ",
        role: "Cheater",
        photo: "https://picsum.photos/300/400"
      },
      {
        name: "Sara Gity",
        role: "Hardware",
        photo: "https://picsum.photos/300/400"
      },
      {
        name: "Mahsa Aghdam",
        role: "Web",
        photo: "https://picsum.photos/300/400"
      },
      {
        name: "Mohammadreza Vali",
        role: "AI Researcher",
        photo: "https://picsum.photos/300/400"
      },
    ]
  }
];
export default function LabMembersPage() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleCardClick = (person) => setSelectedPerson(person);
  const handleClose = () => setSelectedPerson(null);

  return (
    <div className="container-fluid py-5 px-5" style={{ maxWidth: "1200px" }}>
      <hr />
      <div style={{ height: "30px" }}></div>
      <h1 className="text-center mb-5">Our Lab Members</h1>

      {members.map((section, index) => (
        <div key={index} className="mb-5">
          <h2 className="mb-4 text-primary text-center">{section.project}</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
            {section.people.map((person, idx) => (
              <div className="col" key={idx}>
                <div
                  className="card shadow-sm h-100 border-0 rounded-4"
                  onClick={() => handleCardClick(person)}
                  style={{ cursor: "pointer" }}
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
        <Modal.Body className="text-center p-4">
          {selectedPerson && (
            <>
              <img
                src={selectedPerson.photo}
                alt={selectedPerson.name}
                style={{ width: "100%", height: "auto", borderRadius: "12px" }}
              />
              <h2 className="mt-4">{selectedPerson.name}</h2>
              <p className="text-muted">{selectedPerson.role}</p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
