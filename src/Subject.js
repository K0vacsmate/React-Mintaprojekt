import React from 'react';

function Subject(props) {
    const name = props.name;
    const credit = props.credit
    const mark = 0;
    return (
        <div className="">
            <h3>
                {name}
            </h3>
            <button className=""></button>
            <h3>
                {mark}
            </h3>
            <button className=""></button>
            <button></button>
        </div>
    )
}

export default Subject;