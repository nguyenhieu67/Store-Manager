import Stats from "../components/Stats/Stats";
import StatsCard from "../components/Stats/StatsCard";

function Report() {
  return (
    <div className="flex-1">
      <Stats className="grid-cols-4">
        <StatsCard
          title="revenue"
          value="128.500.000đ"
          trendUp="12% compared to last month"
        />
        <StatsCard title="order" value="452" trendUp="5%" />
        <StatsCard title="profit" value="32.100.000đ" trendDown="2%" />
        <StatsCard title="new customers" value="84" trendUp="18%" />
      </Stats>
    </div>
  );
}

export default Report;
