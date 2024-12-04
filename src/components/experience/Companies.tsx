import React from 'react';
import './Companies.css';  // Import the new CSS file


const IHPLogo = require('../../assets/IHPLogo.png');
const OutlierLogo = require('../../assets/OutlierLogo.png');
const TutorDoctorLogo = require('../../assets/TutorDoctorLogo.jpg');

interface TimelineEntryProps {
  role: string;
  companyName: string;
  companyUrl: string;
  period: string;
  responsibilities: string[];
  logoUrl: string;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({ role, companyName, companyUrl, period, responsibilities, logoUrl }) => {
  return (
    <div className="experience__timeline-entry">
      <div className="experience__timeline-dot"></div>
      <div className="experience__timeline-content">
        <div className="experience__timeline-info">
          <h3>{role}</h3>
          <h4>
            <a href={companyUrl} target="_blank" rel="noopener noreferrer">
              {companyName}
            </a>
          </h4>
          <p>{period}</p>
          <ul>
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Button to Website */}
          <a href={companyUrl} target="_blank" rel="noopener noreferrer">
            <button className="experience__btn">Visit Website</button>
          </a>
        </div>

        {/* Add Logo */}
        <div className="experience__logo-container">
          <img src={logoUrl} alt={`${companyName} Logo`} className="experience__company-logo" />
        </div>
      </div>
    </div>
  );
};

const Companies: React.FC = () => {
  return (
    <div className="experience__timeline-container">
      {/* Example Timeline Entries */}
      <TimelineEntry
        role="AI Evaluator"
        companyName="Outlier AI"
        companyUrl="https://outlier.ai/"
        period="Jan 2020 - Jun 2023"
        responsibilities={[
          'Developed responsive user interfaces with React.',
          'Collaborated on e-commerce platform redesigns.',
          'Improved performance, reducing page load time by 35%',
        ]}
        logoUrl={OutlierLogo}
      />

      <TimelineEntry
        role="Full Stack Developer"
        companyName="Interact Health PRO"
        companyUrl="https://backendcorp.com"
        period="Aug 2018 - Dec 2019"
        responsibilities={[
          'Designed RESTful APIs for customer platforms.',
          'Implemented database solutions using MySQL.',
          'Automated server-side processes to optimize workflows.',
        ]}
        logoUrl={IHPLogo}
      />

    <TimelineEntry
        role="Academic Tutor"
        companyName="Tutor Doctor"
        companyUrl="https://backendcorp.com"
        period="Aug 2018 - Dec 2019"
        responsibilities={[
          'Designed RESTful APIs for customer platforms.',
          'Implemented database solutions using MySQL.',
          'Automated server-side processes to optimize workflows.',
        ]}
        logoUrl={TutorDoctorLogo}
      />      
    </div>
  );
};

export default Companies;
