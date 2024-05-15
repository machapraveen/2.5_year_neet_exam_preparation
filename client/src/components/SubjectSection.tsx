import React, { useState } from 'react';
import physicsLessons from '../data/PhysicsLessons';
import chemistryLessons from '../data/ChemistryLessons'; // Ensure this file exists and is exported correctly
import botanyLessons from '../data/BotanyLessons'; // Ensure this file exists and is exported correctly
import zoologyLessons from '../data/ZoologyLessons'; // Ensure this file exists and is exported correctly

interface Topic {
    title: string;
    videoUrl: string;
    pdfUrl: string;
}

interface Section {
    name: string;
    topics: Topic[];
}

interface SubjectProps {
    subject: string;
}

const SubjectSection: React.FC<SubjectProps> = ({ subject }) => {
    const [isActive, setIsActive] = useState(false);
    let lessons: Section[] = [];

    switch (subject) {
        case 'Physics':
            lessons = physicsLessons;
            break;
        case 'Chemistry':
            lessons = chemistryLessons;
            break;
        case 'Botany':
            lessons = botanyLessons;
            break;
        case 'Zoology':
            lessons = zoologyLessons;
            break;
        default:
            lessons = [];
    }

    return (
        <div className={`subject ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
            <h2>{subject}</h2>
            {lessons.map((section, index) => (
                <div key={index} className="section">
                    <h3>{section.name}</h3>
                    {section.topics.map((topic, idx) => (
                        <div key={idx} className="topic">
                            <strong>{topic.title}</strong> -
                            <a href={topic.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video</a>
                            <a href={topic.pdfUrl} download>Download PDF</a>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SubjectSection;
