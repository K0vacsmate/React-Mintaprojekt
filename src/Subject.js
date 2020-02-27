import React, { useState } from 'react';
import './styles.css';

function Subject(props) {
    const name = props.name;
    const credit = props.credit;
    var [mark, setMark] = useState(props.mark);

    function minusMark() {
        if (mark > 1) {
            setMark(mark - 1);
            props.ModifySubject(props.id, "-");
        }
        else {
            return;
        }
    }

    function plusMark() {
        if (mark < 5) {
            setMark(mark + 1);
            props.ModifySubject(props.id, "+");
        }
        else {
            return;
        }

    }

    return (
        <div className="subject" key={props.id} >
            <p className="subjectName">
                {name}
            </p>
            <button className="button" onClick={plusMark}>+</button>
            <p className="subjectMark">
                {mark}
            </p>
            <button className="button" onClick={minusMark}>-</button>
        </div>
    )
}

export default Subject;