import React from 'react';
import PropTypes from 'prop-types';
import CourseCard from '../../components/CourseCard/CourseCard';
import './style.scss';
import {getGrade} from '../../lib/utils';


function CourseCardList(props) {

    let courses = props.courses;

    //фильтрация
    const findKeys = ['findSubject', 'findGrade', 'findGenre'];
    findKeys.forEach(key => {
        if (props[key]){
            const objectKey = key.replace(/^find/, '').toLowerCase();
            courses = courses.filter(course => (course[objectKey].includes(props[key])));
        }
    });

    //поиск
    if (props.findString){
        courses = courses.filter(course => (course.title.toLowerCase().includes(props.findString.toLowerCase())));
    }

    const visibleRowResult = props.findSubject || props.findGenre || props.findGrade || props.findString;
    const textContentFindResult = visibleRowResult ? 'Результаты поиска:' : '';


    const courseCards = courses.map(course => (
        <div className={'courseCardList__elemContainer'} key = {course.courseId}>
            <CourseCard courseId={course.courseId}
                        subject={course.subject}
                        genre={course.genre}
                        grade={getGrade(course.grade)}
                        price={`${course.price} ${props.unit}`}
                        shopUrl={course.shopUrl}
            />
        </div>

    ));

    return (
        <div className={'courseCardList'}>
            <p className="courseCardList__findResult">{textContentFindResult}</p>
            <div className="courseCardList__cardsContainer">
                {courseCards}
            </div>
        </div>
    );
}


CourseCardList.propTypes = {
    courses: PropTypes.array.isRequired,
    findSubject: PropTypes.string.isRequired,
    findGrade: PropTypes.string.isRequired,
    findGenre: PropTypes.string.isRequired,
    findString: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
};


export default CourseCardList;