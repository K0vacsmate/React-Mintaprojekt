import React from 'react';

class Subject extends React.Component {
    render() {
        const name = this.props.name;
        const credit = this.props.credit
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
}

export default Subject;