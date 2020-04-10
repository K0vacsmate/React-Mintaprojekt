import React, { useState } from 'react';
import { Menu, Item, Separator, Submenu, MenuProvider } from 'react-contexify';
import '../node_modules/react-contexify/dist/ReactContexify.min.css';
import './styles.css';
import pic from './3dots.png';

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
    const Modify = ({ event, props }) => (
        console.log(props)
    );

    const Delete = ({ event, props }) => (
        console.log(props)
    );

    const MyMenu = () => (
        <Menu id="options">
            <Item onClick={Modify}>Szerkesztés</Item>
            <Item onClick={Delete}>Törlés</Item>
        </Menu>
    );

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
            <MenuProvider event="onClick" id="options" className="dropdown">
                <img src={pic} className="picture" />
            </MenuProvider>
            <MyMenu />
        </div>
    )
}

export default Subject;