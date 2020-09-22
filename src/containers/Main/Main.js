import React from 'react';
import {connect} from 'react-redux';
import {logout} from "../../actions/authentification";
import {
    getContacts, clearContacts, setFindingString, deleteContactFetch as deleteContact,
    addNewContactFetch as addNewContact, editContactFetch as editContact, setSortBy
} from '../../actions/contacts';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import '../ContactList/ContactList';
import ContactList from "../ContactList/ContactList";
import {closeFormEdit, showFormEditContact, showFormNewContact} from '../../actions/applicationView';
import FormContainer from '../FormContainer/FormContainer';
import Preloader from '../../components/Preloader/Preloader';


class Main extends React.Component {
    componentDidMount() {
        this.props.getContacts();
    }

    componentWillUnmount() {
        this.props.clearContacts();
    }

    render() {

        return (
            <>
                <Wrapper>
                    <Header setFindingString={this.props.setFindingString}
                            userName={this.props.userName}
                            logout={this.props.logout}
                            showFormNewContact={this.props.showFormNewContact}
                    />
                    <ContactList contacts={this.props.contacts}
                                 findingString={this.props.findingString}
                                 deleteContact={this.props.deleteContact}
                                 showFormEditContact={this.props.showFormEditContact}
                                 setSortBy={this.props.setSortBy}
                                 sortBy={this.props.sortBy}
                    />
                </Wrapper>
                <FormContainer contacts={this.props.contacts}
                               visible={this.props.applicationView.formEditVisible}
                               formType={this.props.applicationView.formEditType}
                               closeFormEdit={this.props.closeFormEdit}
                               addNewContact={this.props.addNewContact}
                               editableContactId={this.props.applicationView.editableContactId}
                               editContact={this.props.editContact}
                />
                <Preloader visible={this.props.applicationView.preloaderVisible}/>
            </>
        );
    }
}


const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
    findingString: state.contacts.findingString,
    sortBy: state.contacts.sortBy,
    userName: state.loginInfo.userProfile.userName,
    applicationView: state.applicationView,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    getContacts: () => dispatch(getContacts()),
    clearContacts: () => dispatch(clearContacts()),
    setFindingString: string => dispatch(setFindingString(string)),
    deleteContact: id => dispatch(deleteContact(id)),
    closeFormEdit: () => dispatch(closeFormEdit()),
    addNewContact: contact => dispatch(addNewContact(contact)),
    showFormEditContact: id => dispatch(showFormEditContact(id)),
    showFormNewContact: () => dispatch(showFormNewContact()),
    editContact: contact => dispatch(editContact(contact)),
    setSortBy: sortBy => dispatch(setSortBy(sortBy)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);