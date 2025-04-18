import React from "react";
import "./Home.css";

function Home() {
  const steps = [
    {
      title: "Start Planning",
      description: "Input key personal information like household needs, medical dependencies, and location risks.",
    },
    {
      title: "Create Your List",
      description: "Automatically generate a checklist tailored to your needs and local disasters.",
    },
    {
      title: "Customize Your Kit",
      description: "Edit your generated list to suit your preferences or add custom items.",
    },
    {
      title: "Save & Access",
      description: "Save your personalized plan so you can return and update it anytime.",
    },
  ];

  return (
    <div className="intro-wrapper">
      <h2 className="intro-title">Get Started</h2>
      <div className="step-flow">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.description}</p>
            {index < steps.length - 1 && <div className="arrow">➝</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
