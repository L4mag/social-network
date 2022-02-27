import React from "react";
import s from './Post.module.css';

const Post = (props) => (
    <div className={s.item}>
        <img src={props.image} alt=""/>
        {props.message}
        <div>
            <span>like {props.likes}</span>
        </div>
    </div>
);

export default Post;
