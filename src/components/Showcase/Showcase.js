import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../../components/Wrapper/Wrapper';
import './style.scss';
import Select from '../../components/Select/Select';
import FindInput from '../../components/FindInput/FindInput';
import CourseCardList from '../../containers/CourseCardList/CourseCardList';
import {getOptionsSelect, getOptionsGradeSelect} from '../../lib/utils';
import RadioGroup from '../../components/RadioGroup/RadioGroup';



class Showcase extends Component {
    componentDidMount() {
        this.props.getCourses();
    }


    render() {
        const subjectOptions = getOptionsSelect(this.props.courses, 'subject', 'Все предметы');
        const genreOptions = getOptionsSelect(this.props.courses, 'genre', 'Все жанры');
        const gradeOptions = getOptionsGradeSelect();

        const radioGroupItems = [
            {label: 'Рубли', value: 'руб'},
            {label: 'Баллы', value: 'баллов'},
        ];

        return (
            <Wrapper>
                <div className={'showcase'} >
                    <h1>Витрина</h1>
                    <div className="showcase__findSetting">
                        <div>
                            <Select sendData={this.props.setFindSubject}
                                    value={this.props.findSubject}
                                    items={subjectOptions}/>
                        </div>
                        <div>
                            <Select sendData={this.props.setFindGenre}
                                    value={this.props.findGenre}
                                    items={genreOptions}/>
                        </div>
                        <div>
                            <Select sendData={this.props.setFindGrade}
                                    value={this.props.findGrade}
                                    items={gradeOptions}/>
                        </div>
                        <div>
                            <FindInput sendString={this.props.setFindString}/>
                        </div>
                        <div>
                            <RadioGroup uniqueId={'unit'}
                                        items={radioGroupItems}
                                        defaultValue={'руб'}
                                        sendData={this.props.setUnit}
                            />
                        </div>
                    </div>
                    <CourseCardList courses={this.props.courses}
                                    findSubject={this.props.findSubject}
                                    findGenre={this.props.findGenre}
                                    findGrade={this.props.findGrade}
                                    findString={this.props.findString}
                                    unit={this.props.unit}
                    />
                </div>
            </Wrapper>
        );
    }
}

Showcase.propTypes = {
    courses: PropTypes.array.isRequired,
    findSubject: PropTypes.string.isRequired,
    findGenre: PropTypes.string.isRequired,
    findGrade: PropTypes.string.isRequired,
    findString: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    getCourses: PropTypes.func.isRequired,
    setFindSubject: PropTypes.func.isRequired,
    setFindGenre: PropTypes.func.isRequired,
    setFindGrade: PropTypes.func.isRequired,
    setFindString: PropTypes.func.isRequired,
    setUnit: PropTypes.func.isRequired,
};


export default Showcase;