import React, { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import { FaRegUserCircle, FaRegEnvelope, FaPhone, FaRegSmile } from "react-icons/fa";

export function Contact(props) {
    const imagePath = process.env.PUBLIC_URL + '/Default-Profile.png';
    if (props.user) {
        const user = props.user[0];
        return (
            <div className="contactCard">
                <div className="barHeader"></div>
                <div className="contactDetail">
                    <div className="imgContainer">
                        <img className="img" src={imagePath} alt={user.name}/>
                    </div>

                    <div className="contactDetailName">{user.name}</div>
                    <div className="contactDetailUserName">({user.username})</div>
                    <div className="contactDetailEmail">Email: {user.email}</div>
                    <div className="contactDetailPhone">Phone: {user.phone}</div>
                </div>
                <div className="contactExpanded">
                    <div>
                        Company: {user.company.name}
                    </div>
                    <div>
                        "{user.company.catchPhrase}"
                    </div>
                </div>
            </div>
        )
    }
}

export function ContactModal(props) {
    if (props.user) {
        const user = props.user[0];
        return (
            <div className="contactCard">
                <div className="contactDetail">
                    <FaRegSmile size={'3em'}/>
                    <div className="contactDetailName">{user.name}</div>
                    <div className="contactDetailUserName">({user.username})</div>
                    <div className="contactDetailEmail">{user.email}</div>
                    <div className="contactDetailPhone">{user.phone}</div>
                </div>
            </div>
        )
    }
}

export function ContactList(props) {
    const users = props.users;
    let contactRows;    
    const [currentUser, setCurrentUser] = useState();
    const [modalIsOpen, setIsOpen] = useState(true);

    useEffect(() => {
        Modal.setAppElement('#contactContainer');
      }, []);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const contactRowOnClick = (userId) => {
        const filteredUser = users.filter(person => person.id === userId);
        setCurrentUser(filteredUser);
        openModal();
    }

    if (users) {
        users.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if (nameA < nameB) {
                return -1;
            } else if (nameA > nameB) {
                return 1;
            } else {
                return 0;
            }
        });

        contactRows = users.map(user => {
            return (
                <div className="contactRow" key={user.id} onClick={() => contactRowOnClick(user.id)}>
                    <FaRegUserCircle size={ "2.5em" }/>
                    <div className="nameContents">
                        <div className="name">{user.name}</div>
                        <div className="userName">{user.username}</div>
                        <div className="phoneNumber">{user.phone}</div>
                    </div>
                    <div className="contactIcons">
                        <FaRegEnvelope size={ "1.3em" }/>
                        <FaPhone size={ "1.3em" }/>
                    </div>
                </div>
            )
        });
    }

    return (
        <>
            <div className="contactList" id="contactList">
                { contactRows }
            </div>

            {currentUser && <Contact user={currentUser}/>}

            <div className="contactModal">
                {currentUser && 
                <Modal
                    isOpen={modalIsOpen}

                    onRequestClose={closeModal}
                >
                    <Contact user={currentUser}/>
                </Modal>}
            </div>
        </>
    )
}