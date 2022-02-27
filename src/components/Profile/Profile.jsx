import background from "../../backgroud.jpg";
import React from "react";
import s from './Profile.module.css';
import UserPosts from "./UserPosts/UserPosts";

const Profile = () => (
    <>
        <div>
            <img src={background} alt=""/>
        </div>
        <div>
            Avatar + description
        </div>
        <UserPosts/>
        Main content
    </>
);

export default Profile;
