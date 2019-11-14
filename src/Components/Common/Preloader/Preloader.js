import React from 'react';
import preloader from "../../../assets/images/Double Ring-3s-200px.svg";
import s from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div  >
            <img className={s.preloader} src={preloader} alt='preloader'/>
        </div>
    )
};

export default Preloader;