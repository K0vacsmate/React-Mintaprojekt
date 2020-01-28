import React, { useState, useEffect } from 'react';
import InputForm from './Form';
import Subject from './Subject';

function App() {
    const [subjects, setSubjects] = useState([]);

    function AddSubject(subject) {
        setSubjects(subjects => [...subjects, subject]);

        console.log(subjects);
    }

    useEffect(() => {
        if (subjects.length == 0) {
            console.log(0);
        }
        else {
            var sumCredit = subjects.map(subject => sumCredit += subject.credit);
            var sumMark = subjects.map(subject => sumMark += subject.mark);
            var avg = sumCredit / sumMark;
            console.log(avg);
        }

    }, [subjects])

    const sublist = subjects.map(subject => <Subject name={subject.name} credit={subject.credit} />);

    return (
        <div>
            <InputForm AddSubject={AddSubject.bind(this)} />
            <div className="ui grid">
                <div className="four wide column">
                    {sublist}
                </div>
            </div>

        </div>
    )
}

export default App;