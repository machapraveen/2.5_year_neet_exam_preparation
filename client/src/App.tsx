import React from 'react';
import './styles/styles.css';
 // Assuming you have imported CSS correctly
import SubjectSection from './components/SubjectSection';

const App = () => {
    return (
        <div className="container">
            <SubjectSection subject="Physics" />
            <SubjectSection subject="Chemistry" />
            <SubjectSection subject="Botany" />
            <SubjectSection subject="Zoology" />
        </div>
    );
};

export default App;
