import React from 'react';
import s from "./Users.module.css";



const Paginator = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return <div>
            {pages.map(p => {

                return <span key={p} onClick={(e) => {props.onPageChanged(p)}}
                             className={props.currentPage === p ?  s.selectedPage: undefined }>{p} </span>;
            })}
        </div>
};

export default Paginator;
