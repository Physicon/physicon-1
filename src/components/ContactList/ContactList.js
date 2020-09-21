import React from 'react';
import ContactCard from './ContactCard/ContactCard';
import PropTypes from 'prop-types';
import './contactList.scss';


function ContactList(props) {
    const filteredContacts = props.contacts.filter(contact => {
        if (!props.findingString) return true;

        let matched = false;

        const regExp = new RegExp(props.findingString, 'i');
        const keysForFind = ['firstName', 'lastName', 'company', 'phone', 'mail'];
        keysForFind.forEach(key => {
            if (regExp.test(contact[key])){
                matched = true;
            }
        });

        return matched;
    });

    filteredContacts.sort((a,b) => a.lastName > b.lastName ? 1 : -1);

    const contactCards = filteredContacts.map(contact =>(
        <ContactCard contact={contact}
                     deleteContact={props.deleteContact}
                     key={contact.id}
                     showFormEditContact={props.showFormEditContact}
        />
        )
    );

    return (
        <div className={'contactsList'}>
            <p className="contactsList__header">Мои контакты</p>
            {contactCards}
        </div>
    );
}


ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    findingString: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
    showFormEditContact: PropTypes.func.isRequired,
};


export default ContactList;