// import UserStat from '../../data/user.json'

const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
  <h2 class="title">Upload stats</h2>

          <ul class="stat-list">
              {stats.map(stat => (
    <li key={stat.id} class="item">
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}%</span>
    </li>
    
              ))}
  </ul>
</section>
  );
};

export default Statistics;


// qqqqq