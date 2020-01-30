import React, { useState } from 'react';

function Inputform(props) {
    const [name, setName] = useState('');
    const [credit, setCredit] = useState('');
    const [isValidName, setIsValidName] = useState(true);
    const [isValidCredit, setIsValidCredit] = useState(true);
    const [subjectId, setSubjectId] = useState(1);


    function validateName() {
        if (!name) {
            return false;
        }
        else {
            return true;
        }
    }

    function validateCredit() {
        if (credit && credit >= 0 && credit <= 30) {
            return true;
        }
        else {
            return false;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const isValidName = validateName();
        const isValidCredit = validateCredit();
        setIsValidName(isValidName);
        setIsValidCredit(isValidCredit);
        if (isValidName && isValidCredit) {
            props.AddSubject({
                name: name,
                credit: Number(credit),
                mark: Number(1),
                id: subjectId
            });
            setName('');
            setCredit('');
            setSubjectId(subjectId + 1);
        }
        else {
            return;
        }

    }


    return (
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="three fields">
                <div className="field">
                    <input
                        type="text"
                        placeholder="Név"
                        value={name}
                        onChange={(event) => setName(event.target.value)}></input>
                    <div style={{ visibility: isValidName ? 'hidden' : 'visible' }}>
                        Nem megfelelő formátum
                        </div>
                </div>
                <div className="field">
                    <input
                        type="text"
                        placeholder="Kredit"
                        value={credit}
                        onChange={(event) => setCredit(event.target.value)}></input>
                    <div style={{ visibility: isValidCredit ? 'hidden' : 'visible' }}>
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

export default Inputform;