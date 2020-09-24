import React from 'react';
import ContactCard from '../../components/ContactCard/ContactCard';
import PropTypes from 'prop-types';
import './contactList.scss';
import Select from '../../components/Select/Select';



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

    filteredContacts.sort((a,b) => a[props.sortBy].toLowerCase() > b[props.sortBy].toLowerCase() ? 1 : -1);

    const selectItems = [
        {option: 'First name', value: 'firstName'},
        {option: 'Last name', value: 'lastName'},
        {option: 'Company', value: 'company'},
    ];

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
            <div className="contactList__top">
                <p className={'contactList__header'}>Мои контакты</p>
                <div className={'sorting'}>
                    <p>Sort by:</p>
                    <div><Select sendData={props.setSortBy} items={selectItems} value={props.sortBy}/></div>
                </div>
            </div>
            {contactCards}
        </div>
    );
}


ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    findingString: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
    showFormEditContact: PropTypes.func.isRequired,
    setSortBy: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
};


export default ContactList;