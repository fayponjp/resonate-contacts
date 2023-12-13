import React, { useEffect, useState } from "react";
import { FaRegUserCircle, FaRegEnvelope, FaPhone } from "react-icons/fa";
/**
 * 
 * Header
 * Search Bar sticky
 * Contact List - Ordered By Name, collapsible
 * Contact Card - Right side on desktop, Modal on mobile
 * Letter Break
 * Recent
 */

export function Contact(props) {
    if (props.user) {
        const user = props.user[0];
        return (
            <div className="contactCard">
                <div className="contactDetail">
                    <div className="contactDetailName">{user.name}</div>
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
    const [isVisible, setVisibility] = useState();

    useEffect(() => {
        console.log("currentUser updated:", currentUser);
      }, [currentUser]);

    const contactRowOnClick = (userId) => {
        const filteredUser = users.filter(person => person.id === userId);
        setCurrentUser(filteredUser);
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
                        <FaRegEnvelope size={ "1.1em" }/>
                        <FaPhone size={ "1.1em" }/>
                    </div>
                </div>
                
            )
        });
    } 

    return (
        <>
            <div className="contactList">
                { contactRows }
            </div>
            {currentUser && <Contact user={currentUser}/>}
        </>
    )
}