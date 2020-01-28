import React, { useState, useEffect } from 'react';
import InputForm from './Form';
import Subject from './Subject';

function App() {
    const [subjects, setSubjects] = useState([]);

    function AddSubject(subject) {
        if (subjects.length == 0) {
            setSubjects([subject]);
        }
        else {
            setSubjects(subjects => [...subjects, subject]);
        }


    }

    useEffect(() => {
        if (subjects.length == 0) {

        }
        else {
            var sumCredit = subjects.map(subject => subject.credit).reduce((a, b) => a + b, 0);
            var sumMark = subjects.map(subject => subject.mark * subject.credit).reduce((a, b) => a + b, 0);

            var avg = sumCredit / sumMark;
            console.log(sumCredit, sumMark, avg);

        }

    }, [subjects])

    const sublist = subjects.map(subject => <Subject name={subject.name} credit={subject.credit} mark={subject.mark} />);

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