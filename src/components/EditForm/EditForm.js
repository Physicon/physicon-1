import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import './style.scss';
import Button from '../../components/Button/Button';



class EditForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            id: props.contact.id,
            firstName: props.contact.firstName,
            lastName: props.contact.lastName,
            phone: props.contact.phone,
            company: props.contact.company,
            mail: props.contact.mail,
        };


        this.onChange = this.onChange.bind(this);
        this.onClickOk = this.onClickOk.bind(this);
        this.onClickCancel = this.onClickCancel.bind(this);
    };

    onChange(event) {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({[key]: value});
    }

    onClickOk(event){
        event.preventDefault();
        this.props.sendData(this.state);
        this.props.closeForm();
    }

    onClickCancel(event){
        event.preventDefault();
        this.props.closeForm();
    }


    render() {
        return (
            <Modal>
                <form className="formEdit">
                    <p className="formEdit__title">{this.props.formTitle}</p>
                    <input type="text"
                           name="firstName"
                           value={this.state.firstName}
                           onChange={this.onChange}
                           placeholder={'First Name'}
                    />
                    <input type="text"
                           name="lastName"
                           value={this.state.lastName}
                           onChange={this.onChange}
                           placeholder={'Last Name'}
                    />
                    <input type="text"
                           name="company"
                           value={this.state.company}
                           onChange={this.onChange}
                           placeholder={'Company'}
                    />
                    <input type="text"
                           name="phone"
                           value={this.state.phone}
                           onChange={this.onChange}
                           placeholder={'Phone'}
                    />
                    <input type="text"
                           name="mail"
                           value={this.state.mail}
                           onChange={this.onChange}
                           placeholder={'E-mail'}
                    />
                    <div className="formEdit__buttons">
                        <Button textContent={'Ok'} onClick={this.onClickOk}/>
                        <Button textContent={'Отмена'} onClick={this.onClickCancel}/>
                    </div>
                </form>
            </Modal>
        );
    }
}

EditForm.defaultProps = {
    contact: {
        id: '',
        firstName: '',
        lastName: '',
        phone: '',
        company: '',
        mail: '',
    }
};


EditForm.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        phone: PropTypes.string,
        company: PropTypes.string,
        mail: PropTypes.string,
    }),
    formTitle: PropTypes.string.isRequired,
    sendData: PropTypes.func.isRequired,
    closeForm: PropTypes.func,
};


export default EditForm;