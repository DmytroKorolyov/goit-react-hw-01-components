import React from "react";
import s from './FriendListItem.module.css'


const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={s.item}>
            <span className={isOnline ? s.online : s.offline}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
};

export default FriendListItem;