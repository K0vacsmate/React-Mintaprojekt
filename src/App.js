import React from 'react';
import InputForm from './Form';
import Subject from './Subject';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { subjects: [] };
    }

    AddSubject(subject) {
        this.setState({ subjects: this.state.subjects.concat(subject) });
        this.state.subjects.map(subject => console.log(subject.name, subject.credit));
        this.SubjectList();
    }

    SubjectList() {
        if (!this.state.subjects) {
            return;
        }
        else {
            const sl = this.state.subjects.map(subject => <li><Subject name={subject.name} credit={subject.credit} /></li>)
            return sl
        }

    }


    render() {
        return (
            <div>
                <InputForm AddSubject={this.AddSubject.bind(this)} />
                <ul>
                    {this.sl}
                </ul>
            </div>

        )
    }
}

export default App;