import React, { useState } from 'react';
import './Companies.css'; // Import the new CSS file

const IHPLogo = require('../../assets/IHPLogo.png');
const OutlierLogo = require('../../assets/OutlierLogo.png');
const TutorDoctorLogo = require('../../assets/TutorDoctorLogo.jpg');
const YMCALogo = require('../../assets/YMCA.jpg');
const StampedeLogo = require('../../assets/CalgaryStampedeLogo.png');

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
  const [showAdditional, setShowAdditional] = useState(false);

  const toggleAdditional = () => setShowAdditional(!showAdditional);

  return (
    <div className="experience__timeline-container">
      {/* Default Timeline Entries */}
      <TimelineEntry
        role="AI Evaluator"
        companyName="Outlier AI"
        companyUrl="https://outlier.ai/"
        period="Jan 2024 - Present"
        responsibilities={[
          'Analyzed various code solutions attempting to address user prompts, identifying strengths, weaknesses, and areas for improvement',
          'Developed test scenarios to assess AI performance on complex real-world challenges and edge cases',
          'Documented insights to enhance AI evaluation processes and inform model training',
        ]}
        logoUrl={OutlierLogo}
      />

      <TimelineEntry
        role="Full Stack Developer"
        companyName="Interact Health PRO"
        companyUrl="https://interacthealthpro.com/"
        period="Aug 2023 - Present"
        responsibilities={[
          'Designed RESTful APIs for customer platforms',
          'Implemented database solutions using MySQL',
          'Automated server-side processes to optimize workflows',
        ]}
        logoUrl={IHPLogo}
      />

      <TimelineEntry
        role="Academic Tutor"
        companyName="Tutor Doctor"
        companyUrl="https://www.tutordoctor.com/calgary/"
        period="Jan 2020 - Present"
        responsibilities={[
          'Mentored 20+ students (grades 7-12), enhancing their understanding of course material',
          'Developed personalized tutoring content, including lesson plans, practice problems, and resources',
          'Provided academic support in Mathematics, Science, English, and Social Studies',
        ]}
        logoUrl={TutorDoctorLogo}
      />

      {/* Additional Experiences */}
      {showAdditional && (
        <>
          <TimelineEntry
            role="Mathematics Tutor"
            companyName="YMCA"
            companyUrl="https://www.ymcacalgary.org/"
            period="Oct 2019 – April 2020"
            responsibilities={[
               'Provided mentoring to groups of up to five individuals, adeptly tailoring guidance to meet the diverse learning needs of each student',
               'Consulted with other colleagues to provide personal thoughts on strategies to help students improve their grades by up to 20%', 
              ]}
            logoUrl={YMCALogo}
          />

          <TimelineEntry
            role="Summer Guest Ambassador"
            companyName="Calgary Stampede"
            companyUrl="https://www.calgarystampede.com/"
            period="July 2017"
            responsibilities={[
            'Delivered exceptional customer service by assisting thousands of attendees daily, ensuring a positive and welcoming event experience',
            'Set up and managed event logistics, including posters, stanchions, and turnstiles, maintaining organized and visually appealing spaces',
            'Operated ticket scanning systems efficiently, facilitating smooth entry for guests and reducing wait times']}
            logoUrl={StampedeLogo}
          />
        </>
      )}

      {/* Toggle Button */}
      <button onClick={toggleAdditional} className="experience__btn">
        {showAdditional ? 'Collapse Experiences' : 'Show More Experiences'}
      </button>
    </div>
  );
};

export default Companies;
