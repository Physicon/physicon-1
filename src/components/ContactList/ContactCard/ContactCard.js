import React from 'react';
import PropTypes from 'prop-types';
import editIcon from './edit-icon.png';
import deleteIcon from './delete-icon.png';
import './contactCard.scss';


function ContactCard(props) {
    const onClickDelete = event => {
        const id = event.currentTarget.dataset.id;
        props.deleteContact(id);
    };

    const onClickEdit = event => {
        const id = event.currentTarget.dataset.id;
        props.showFormEditContact(id);
    };

    return (
        <div className={'contactCard'}>
            <div className="contactCard__content">
                <p className="contactCard__fullName">
                    {props.contact.firstName + ' ' + props.contact.lastName}
                </p>
                <p className="contactCard__company">
                    {'Место работы: ' + props.contact.company}
                </p>
                <p className="contactCard__contacts">
                    {'Телефон: ' + props.contact.phone + '. E-mail: ' + props.contact.mail}
                </p>
            </div>
            <div className="contactCard__buttons">
                <button className="contactCard__button"
                        data-id={props.contact.id}
                        onClick={onClickEdit}>
                    <img src={editIcon} alt="Edit"/>
                </button>
                <button className="contactCard__button"
                        data-id={props.contact.id}
                        onClick={onClickDelete}>
                    <img src={deleteIcon} alt="Delete"/>
                </button>
            </div>
        </div>
    );
}


ContactCard.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        phone: PropTypes.string,
        company: PropTypes.string,
        mail: PropTypes.string,
    }).isRequired,
    deleteContact: PropTypes.func.isRequired,
    showFormEditContact: PropTypes.func.isRequired,
};


export default ContactCard;