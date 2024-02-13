import React from "react";
import { ReactDOM } from "react";
import Profile from "../components/Profile/Profile";
import UserData from '../data/user.json'
import Statistics from "../components/Statistics/Statistics";
import UserStat from '../data/data.json'
import FriendList from "../components/FriendList/FriendList";
import UserFriends from '../data/friends.json'
import TransactionHistory from "../components/TransactionHistory/TransactionHistory";
import UserTransaction from '../data/transactions.json';




export const App = () => {
  const { username, tag, location, avatar, stats } = UserData;
  // const { title, stats } = UserStat;
  // const { title, stats: statData } = UserStat;
  // const { title } = UserStat;


    return (
    <div
        style={{
          flexDirection: 'column',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
          color: '#010101',
        padding: 40,
      }}
    >
      <Profile username={username}
        tag={tag}
        location={location}
        avatar={avatar}
          stats={stats} />
        <Statistics title="Upload stats" stats={UserStat} />
        <FriendList friends={UserFriends} />
        <TransactionHistory items={UserTransaction} />
    </div>
  );
};
