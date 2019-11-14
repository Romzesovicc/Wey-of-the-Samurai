import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "../../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28Oh0cPaHHL2bGVU-vDd-9fIOE3ZGOQUXx-pj6XKoSDbpKYfa&s'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus ={props.updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;