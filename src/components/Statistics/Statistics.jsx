// import UserStat from '../../data/user.json'
import s from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
  {title && <h2 className="title">{title}</h2>}

          <ul className={s.stat_list}>
              {stats.map(stat => (
    <li key={stat.id} className="item">
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
    
                  ))}
  </ul>
</section>
  );
};

export default Statistics;


// qqqqq

















