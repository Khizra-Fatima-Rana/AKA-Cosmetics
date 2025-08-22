import React from 'react';

function Team() {
  const team = [
    { name: 'Azka', image: '/images/azka.jpg', role: 'Creative Visionary & Frontend Enthusiast.' },
    { name: 'Khizra', image: '/images/khizra.jpg', role: 'Backend Architect & Logic Mastermind.' },
    { name: 'Alishba', image: '/images/lishbay.jpg', role: 'Marketing Strategist & Content Creator.' },
  ];

  return (
    <section id="ownersContainer" className="ownersContainer">
      <div className="container">
        <h2>Meet Our Team</h2>
        <div className="owners">
          {team.map((member, index) => (
            <div className="ownerCard" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="Onw_detail">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
