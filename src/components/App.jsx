import React from "react";
import { ReactDOM } from "react";
import Profile from "../components/Profile/Profile.jsx";
import UserData from '../data/user.json'
import Statistics from "../components/Statistics/Statistics.jsx";
import UserStat from '../data/data.json'




export const App = () => {
  const { username, tag, location, avatar, stats } = UserData;
  // const { title, stats } = UserStat;
  const { title, stats: statData } = UserStat;


    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile username={username}
        tag={tag}
        location={location}
        avatar={avatar}
          stats={stats} />
        <Statistics title={title} stats={statData} />
    </div>
  );
};
