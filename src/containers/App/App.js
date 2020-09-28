import React from 'react';
import {connect} from 'react-redux';
import {coursesFetch as getCourses, setFindSubject, setFindGenre, setFindGrade, setFindString, setUnit}
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
                  unit={this.props.unit}
                  getCourses={this.props.getCourses}
                  setFindSubject={this.props.setFindSubject}
                  setFindGenre={this.props.setFindGenre}
                  setFindGrade={this.props.setFindGrade}
                  setFindString={this.props.setFindString}
                  setUnit={this.props.setUnit}
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
  unit: state.courses.unit,
});

const mapDispatchToProps = dispatch =>({
  getCourses: () => dispatch(getCourses()),
  setFindSubject: string => dispatch(setFindSubject(string)),
  setFindGenre: string => dispatch(setFindGenre(string)),
  setFindGrade: string => dispatch(setFindGrade(string)),
  setFindString: string => dispatch(setFindString(string)),
  setUnit: unit => dispatch(setUnit(unit)),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
