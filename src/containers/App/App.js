import React from 'react';
import Login from '../Login/Login';
import {connect} from 'react-redux';
import Main from '../Main/Main';
import {checkToken} from '../../actions/authentification';


class App extends React.Component{
  // constructor(props){
  //   super(props)
  // }

  componentDidMount() {
    this.props.checkToken();
  }

  render() {
    if (this.props.userName){
      return (<Main/>);
    } else {
      return (<Login/>);
    }
  }
}



const mapStateToProps = state =>({
  userName: state.loginInfo.userProfile.userName,
});

const mapDispatchToProps = dispatch =>({
  checkToken: () => dispatch(checkToken()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
