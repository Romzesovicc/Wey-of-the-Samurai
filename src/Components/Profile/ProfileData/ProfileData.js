import React from 'react';
import s from "./ProfileInfo.module.css";

export const ProfileData = ({profile}) => {
    return (
        <div>
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>my professional scills </b>: {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return  <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}
const Contacts = ({contactTitle, contactValue}) => {
    return <div className={s.contacts} ><b>{contactTitle}</b>: {contactValue}</div>
}