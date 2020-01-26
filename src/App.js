import React, { useState } from 'react';
import InputForm from './Form';
import Subject from './Subject';

function App() {
    const [subjects, setSubjects] = useState([]);

    function AddSubject(subject) {
        setSubjects([...subjects, subject])
    }

    subjects.map(subject => console.log(subject.name, subject.credit));

    return (
        <div>
            <InputForm AddSubject={AddSubject.bind(this)} />
        </div>
    )
}

export default App;