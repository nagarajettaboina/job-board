import React, { useState } from 'react';

const INITIAL_JOBS = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechHive Solutions",
    location: "Hitech City, Hyderabad (Onsite)",
    type: "Full-time",
    shift: "Night Shift",
    salary: "₹12,00,000 / year",
    description: "We are seeking a talented Software Engineer to join our core team in Hyderabad. This role requires working strictly onsite during night shifts to coordinate with our global teams.",
    requirements: ["React/Node.js experience", "Good communication skills", "Willingness to work night shifts"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Quantum Leap Labs",
    location: "Remote (India)",
    type: "Full-time",
    shift: "Day Shift",
    salary: "₹8,00,000 / year",
    description: "Join our fast-growing UI engineering division. You will build pixel-perfect interfaces using React.",
    requirements: ["Deep knowledge of React hooks", "Expert level styling proficiency"]
  }
];

export default function App() {
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [selectedJob, setSelectedJob] = useState(INITIAL_JOBS[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application sent successfully to " + selectedJob.company + "!");
    setShowApplyModal(false);
    setApplicantName("");
    setApplicantEmail("");
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', color: '#0f172a', fontFamily: 'sans-serif', padding: '20px' }}>
      <header style={{ backgroundColor: '#ffffff', padding: '15px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, color: '#2563eb' }}>💼 CareerHub</h1>
        <p style={{ margin: 0, fontWeight: 'bold' }}>Job Board Assessment</p>
      </header>

      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="🔍 Search positions or companies..." 
          style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', boxSizing: 'border-box', fontSize: '16px' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filteredJobs.map(job => (
            <div 
              key={job.id} 
              onClick={() => setSelectedJob(job)}
              style={{ padding: '16px', backgroundColor: '#ffffff', border: selectedJob.id === job.id ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer' }}
            >
              <h3 style={{ margin: '0 0 5px 0' }}>{job.title}</h3>
              <p style={{ margin: '0 0 10px 0', color: '#475569' }}>{job.company}</p>
              <span style={{ padding: '3px 8px', backgroundColor: '#eff6ff', color: '#1d4ed8', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>{job.shift}</span>
            </div>
          ))}
        </div>

        <div style={{ flex: '2', minWidth: '300px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h2>{selectedJob.title}</h2>
          <p style={{ fontSize: '16px', color: '#475569', fontWeight: 'bold' }}>{selectedJob.company}</p>
          <p>📍 <b>Location:</b> {selectedJob.location}</p>
          <p>⏰ <b>Schedule:</b> {selectedJob.shift}</p>
          <p>💰 <b>Compensation:</b> {selectedJob.salary}</p>
          <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '20px 0' }} />
          <h3>Description</h3>
          <p style={{ lineHeight: '1.6' }}>{selectedJob.description}</p>
          <h3>Requirements</h3>
          <ul>
            {selectedJob.requirements.map((req, i) => <li key={i}>{req}</li>)}
          </ul>
          <button 
            onClick={() => setShowApplyModal(true)}
            style={{ width: '100%', padding: '12px', backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' }}
          >
            Apply For This Position
          </button>
        </div>
      </div>

      {showApplyModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', width: '100%', maxWidth: '400px' }}>
            <h3>Apply for {selectedJob.title}</h3>
            <form onSubmit={handleApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Full Name *</label>
                <input type="text" required value={applicantName} onChange={e => setApplicantName(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Email *</label>
                <input type="email" required value={applicantEmail} onChange={e => setApplicantEmail(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button type="button" onClick={() => setShowApplyModal(false)} style={{ padding: '8px 12px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '8px 12px', border: 'none', backgroundColor: '#2563eb', color: '#ffffff', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}