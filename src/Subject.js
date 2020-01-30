import React, { useState } from 'react';

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
        <div key={props.id} className="ui container">
            <h2 className="ui header">
                {name}
            </h2>
            <button className="medium ui button" onClick={plusMark}>+</button>
            <h3>
                {mark}
            </h3>
            <button className="medium ui button" onClick={minusMark}>-</button>
            <button className="small ui button" >:</button>
        </div>
    )
}

export default Subject;