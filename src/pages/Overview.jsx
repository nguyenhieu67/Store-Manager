import Stats from "../components/Stats/Stats";
import StatsCard from "../components/Stats/StatsCard";

function Overview() {
  return (
    <div className="flex-1">
      <Stats className="grid-cols-2">
        <StatsCard title="revenue" value="2.500.000đ" />
        <StatsCard title="new orders" value="12" />
      </Stats>
    </div>
  );
}

export default Overview;
