import React, { useState, useEffect } from 'react';
import InputForm from './Form';
import Subject from './Subject';
import './styles.css';

function App() {
    const [subjects, setSubjects] = useState([]);
    const [avg, setAvg] = useState(0);

    function AddSubject(subject) {
        if (subjects.length === 0) {
            setSubjects([subject]);
        }
        else {
            setSubjects(subjects => [...subjects, subject]);
        }


    }

    function ModifySubject(id, action) {
        const s = subjects.find(subject => subject.id === id);
        if (action === "+") {
            s.mark += 1;
        }
        else if (action === "-") {
            s.mark -= 1;
        }

        setSubjects(subjects.map(subject => subject.id === id ? subject = s : subject = subject));

    }

    useEffect(() => {
        if (subjects.length === 0) {

        }
        else {
            var sumCredit = subjects.map(subject => subject.credit).reduce((a, b) => a + b, 0);
            var sumMark = subjects.map(subject => subject.mark * subject.credit).reduce((a, b) => a + b, 0);

            var avg = sumMark / sumCredit;
            setAvg(avg);

        }

    }, [subjects])

    const sublist = subjects.map(subject =>
        <li className="listItem" key={subject.id}><Subject
            name={subject.name}
            credit={subject.credit}
            mark={subject.mark}
            id={subject.id}
            ModifySubject={ModifySubject.bind(this)} />
        </li>);

    return (
        <div className="body">
            <InputForm AddSubject={AddSubject.bind(this)} />
            <div >
                <h1 className="avgText">Átlag: {avg}</h1>
                <ul>
                    {sublist}
                </ul>
            </div>


        </div >
    )
}

export default App;