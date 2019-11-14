import React from 'react';
import s from "./Users.module.css";
import userPhoto from '../../assets/images/img_avatar.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../API/api";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={(e) => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p && s.selectedPage}>{p} </span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
<span>
    <div>
        <NavLink to={'profile/' + u.id}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
        </NavLink>
    </div>
    <div>

        {u.followed

            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                props.unfollow(u.id);

            }}>Unfollow</button>

            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                props.follow(u.id);

            }}>Follow</button>}

    </div>
</span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
            </div>
        )}
    </div>


}

export default Users;
