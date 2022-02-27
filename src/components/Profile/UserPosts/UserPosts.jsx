import React from "react";
import s from './UserPosts.module.css';
import Post from "./Post/Post";

const UserPosts = () => (
    <div className={s.user_posts}>
        posts
        <div>
            new post
        </div>
        <Post message='Hello world!' likes={20} image='https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png'/>
        <Post message='Loh' likes={5000} image='https://mir-s3-cdn-cf.behance.net/project_modules/disp/b3053232163929.567197ac6e6f5.png'/>
        <Post message='Be' likes={12} image='https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png'/>
    </div>
)

export default UserPosts;
