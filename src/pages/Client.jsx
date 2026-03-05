import Stats from "../components/Stats/Stats";
import StatsCard from "../components/Stats/StatsCard";

function Client() {
  return (
    <div className="flex-1">
      <Stats className="grid-cols-3">
        <StatsCard title="total customers" value="850" />
        <StatsCard title="new customers(monthly)" value="42" />
        <StatsCard title="return rate" value="65%" />
      </Stats>
    </div>
  );
}

export default Client;
