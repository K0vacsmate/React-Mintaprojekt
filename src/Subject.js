import React, { useState } from 'react';

function Subject(props) {
    const name = props.name;
    const credit = props.credit
    const [mark, setMark] = useState(1);
    function minusMark() {
        if (mark > 1) {
            setMark(mark - 1);
        }
        else {
            return;
        }
    }

    function plusMark() {
        if (mark < 5) {
            setMark(mark + 1);
        }
        else {
            return;
        }

    }

    return (
        <div className="ui container">
            <h2 className="ui header">
                {name}
            </h2>
            <button className="medium ui button" onClick={plusMark}>+</button>
            <h3>
                {mark}
            </h3>
            <button className="medium ui button" onClick={minusMark}>-</button>
            <button className="" ></button>
        </div>
    )
}

export default Subject;