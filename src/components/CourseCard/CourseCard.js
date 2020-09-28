import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Button from '../Button/Button';


function CourseCard(props) {
    return (
        <div className={'courseCard'}>
            <div className="courseCard__topImg">
                <img src={`https://www.imumk.ru/svc/coursecover/${props.courseId}`} alt=""/>
            </div>
            <div className="courseCard__description">
                <p className="courseCard__subject">{props.subject}</p>
                <p className="courseCard__grade">{props.grade}</p>
                <p className="courseCard__genre">{props.genre}</p>
                <p className="courseCard__descriptionRef"><a href={props.shopUrl}>Подробнее</a></p>
                <div className="courseCard__button">
                    <Button textContent={props.price} onClick={null}/>
                </div>
            </div>
        </div>
    );
}


CourseCard.propTypes = {
    courseId: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    shopUrl: PropTypes.string.isRequired,
};


export default CourseCard;