import React from "react";

function Dashboard() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Welcome to PrepEase 🛠</h1>
      <p style={styles.subtitle}>
        Your personalized emergency dashboard. Select a disaster type, view your checklist, or start building your plan.
      </p>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3>🌀 Hurricane Kit</h3>
          <p>View and edit your hurricane preparedness list.</p>
        </div>
        <div style={styles.card}>
          <h3>🔥 Wildfire Kit</h3>
          <p>Build your wildfire checklist for your region.</p>
        </div>
        <div style={styles.card}>
          <h3>💡 Power Outage Kit</h3>
          <p>Plan what to do when the lights go out.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: "40px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#1b4de4",
  },
  subtitle: {
    fontSize: "1.1rem",
    marginBottom: "30px",
    color: "#444",
  },
  cardContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    width: "280px",
    textAlign: "center",
  },
};

export default Dashboard;
