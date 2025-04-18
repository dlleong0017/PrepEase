import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "./ExportPage.css";

function ExportPage() {
  const [checklist, setChecklist] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchChecklist = async () => {
      if (!username || username === "Guest") return;
      try {
        const response = await fetch(`http://localhost:3000/quiz/checklist/${username}`);
        const data = await response.json();
        if (response.ok) {
          setChecklist(data.checklist);
        } else {
          console.error("Error fetching checklist:", data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchChecklist();
  }, [username]);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Emergency Checklist", 14, 20);
    doc.setFontSize(12);
    checklist.forEach((item, index) => {
      doc.text(`- ${item}`, 14, 30 + index * 10);
    });
    doc.save("EmergencyChecklist.pdf");
  };

  return (
    <div className="export-container">
      <h2>Your Emergency Checklist</h2>
      <ul className="checklist">
        {checklist.map((item, index) => (
          <li key={index}>✔ {item}</li>
        ))}
      </ul>
      <button className="export-button" onClick={generatePDF}>
        Download as PDF
      </button>
    </div>
  );
}

export default ExportPage;
 