import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
            ))}
        </ul>
    )
}

export default FriendList;







// const FriendList = ({ friends }) => {
//     return (
//         <ul className="friend-list">
//             {friends.map(({ avatar, name, isOnline, id }) => ( 
//             <li key={id} className="item">
//   <span className="status"> {isOnline} </span>
//                 <img className="avatar" src={avatar} alt="User avatar" width="48" />
//   <p className="name"> {name} </p>
// </li>
// ))}
// </ul>
//     )
// }

// export default FriendList;