import React from 'react';
import {connect} from 'react-redux';
import {fakeFetch as getCourses, setFindSubject, setFindGenre, setFindGrade, setFindString}
  from '../../actions/courses'; //сейчас фейковый запрос
import Showcase from '../../components/Showcase/Showcase';


class App extends React.Component{



  render() {
    return(
        <Showcase courses={this.props.courses}
                  findSubject={this.props.findSubject}
                  findGenre={this.props.findGenre}
                  findGrade={this.props.findGrade}
                  findString={this.props.findString}
                  getCourses={this.props.getCourses}
                  setFindSubject={this.props.setFindSubject}
                  setFindGenre={this.props.setFindGenre}
                  setFindGrade={this.props.setFindGrade}
                  setFindString={this.props.setFindString}
        />
    );
  }
}



const mapStateToProps = state =>({
  courses: state.courses.courses,
  findSubject: state.courses.findSubject,
  findGenre: state.courses.findGenre,
  findGrade: state.courses.findGrade,
  findString: state.courses.findString,
});

const mapDispatchToProps = dispatch =>({
  getCourses: () => dispatch(getCourses()),
  setFindSubject: string => dispatch(setFindSubject(string)),
  setFindGenre: string => dispatch(setFindGenre(string)),
  setFindGrade: string => dispatch(setFindGrade(string)),
  setFindString: string => dispatch(setFindString(string)),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
