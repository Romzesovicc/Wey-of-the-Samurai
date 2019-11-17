import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://www.w3schools.com/w3css/img_avatar3.png' alt='ItemPhoto'/>
            {props.message}
            <div>
                <span>{`Like ${props.likesCount}`}</span>
            </div>
        </div>
    )
}
export default Post;