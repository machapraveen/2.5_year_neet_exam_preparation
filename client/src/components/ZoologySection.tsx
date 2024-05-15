import React from 'react';
import zoologyLessons from '../data/ZoologyLessons';

const ZoologySection = () => {
    return (
        <div>
            {zoologyLessons.map((section) => (
                <div key={section.name}>
                    <h2>{section.name}</h2>
                    {section.topics.map((topic, index) => (
                        <div key={index}>
                            <h3>{topic.title}</h3>
                            <a href={topic.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video</a>
                            <a href={topic.pdfUrl} download>Download PDF</a>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ZoologySection;
