import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


function Preloader(props) {
    if (!props.visible) return null;
    return (
        <div className={'preloader'}>
            <svg viewBox="0 0 120 120" className="preloader__SVG">
                <symbol id="s-circle">
                    <circle r="9" cx="9" cy="9"></circle>
                </symbol>
                <g id="circle" className="g-circles">
                    <use href="#s-circle" className="u-circle"/>
                    <use href="#s-circle" className="u-circle"/>
                    <use href="#s-circle" className="u-circle"/>
                    <use href="#s-circle" className="u-circle"/>
                    <use href="#s-circle" className="u-circle"/>
                    <use href="#s-circle" className="u-circle"/>
                    <use href="#s-circle" className="u-circle"/>
                    <use href="#s-circle" className="u-circle"/>
                    <use href="#s-circle" className="u-circle"/>
                    <use href="#s-circle" className="u-circle"/>
                    <use href="#s-circle" className="u-circle"/>
                    <use href="#s-circle" className="u-circle"/>
                </g>
            </svg>
        </div>
    );
}


Preloader.propTypes = {
    visible: PropTypes.bool.isRequired,
};


export default Preloader;