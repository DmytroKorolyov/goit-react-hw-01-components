// import UserData from '../../data/user.json'

import s from './Profile.module.css'

const Profile = ({ username, tag, location, avatar, stats }) => {
    // const { username, tag, location, avatar, stats } = UserData;
    return (
      <div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt="User avatar"
      class={s.avatar}
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={s.stats}>
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

export default Profile;