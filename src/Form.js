import React from 'react';
import Subject from './Subject';

class Inputform extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', credit: '', isValidName: true, isValidCredit: true };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    validateName = () => {
        if (!this.state.name) {
            return false;
        }
        else {
            return true;
        }
    }

    validateCredit = () => {
        if (this.state.credit && this.state.credit >= 0 && this.state.credit <= 30) {
            return true;
        }
        else {
            return false;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const isValidName = this.validateName();
        const isValidCredit = this.validateCredit();
        this.setState({ isValidName: isValidName, isValidCredit: isValidCredit });
        if (isValidName && isValidCredit) {
            this.props.AddSubject({
                name: this.state.name,
                credit: this.state.credit
            });
            this.setState({ name: '', credit: '' });
        }
        else {
            return;
        }

    }

    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="three fields">
                    <div className="field">
                        <input
                            type="text"
                            placeholder="Név"
                            value={this.state.name}
                            onChange={(event) => this.setState({ name: event.target.value })}></input>
                        <div style={{ visibility: this.state.isValidName ? 'hidden' : 'visible' }}>
                            Nem megfelelő formátum
                        </div>
                    </div>
                    <div className="field">
                        <input
                            type="text"
                            placeholder="Kredit"
                            value={this.state.credit}
                            onChange={(event) => this.setState({ credit: event.target.value })}></input>
                        <div style={{ visibility: this.state.isValidCredit ? 'hidden' : 'visible' }}>
                            Nem megfelelő formátum
                        </div>
                    </div>
                    <div className="field">
                        <input className="medium ui button" type="submit" value="+"></input>
                    </div>
                </div>

            </form>
        )
    }
}

export default Inputform;