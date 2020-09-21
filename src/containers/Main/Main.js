import React from 'react';
import {connect} from 'react-redux';
import {logout} from "../../actions/authentification";
import {getContacts, clearContacts, setFindingString, deleteContactFetch as deleteContact,
        addNewContactFetch as addNewContact, editContactFetch as editContact} from '../../actions/contacts';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import '../../components/ContactList/ContactList';
import ContactList from "../../components/ContactList/ContactList";
import {closeFormEdit, showFormEditContact, showFormNewContact} from '../../actions/applicationView';
import FormContainer from '../../components/FormContainer/FormContainer'


class Main extends React.Component{
    componentDidMount() {
        this.props.getContacts();
    }

    componentWillUnmount() {
        this.props.clearContacts();
    }

    render() {

        return(
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
            </>
        );
    }
}



const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
    findingString: state.contacts.findingString,
    userName: state.loginInfo.userProfile.userName,
    applicationView: state.applicationView,

});

const mapDispatchToProps = dispatch =>({
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

});


export default connect(mapStateToProps, mapDispatchToProps)(Main);