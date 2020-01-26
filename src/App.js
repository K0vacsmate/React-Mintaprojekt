import React, { useState } from 'react';
import InputForm from './Form';
import Subject from './Subject';

function App() {
    const [subjects, setSubjects] = useState([]);

    function AddSubject(subject) {
        setSubjects([...subjects, subject])
    }

    const sublist = subjects.map(subject => <Subject name={subject.name} credit={subject.credit} />);

    return (
        <div>
            <InputForm AddSubject={AddSubject.bind(this)} />
            <div className="ui grid">
                <div classname="four wide column">
                    {sublist}
                </div>
            </div>

        </div>
    )
}

export default App;