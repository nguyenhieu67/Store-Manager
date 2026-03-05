import Stats from "../components/Stats/Stats";
import StatsCard from "../components/Stats/StatsCard";

function Order() {
  return (
    <div className="flex-1">
      <Stats className="grid-cols-4">
        <StatsCard
          title="total product"
          value="1,024"
          borderLeft="border-(--primary-color)"
        />
        <StatsCard
          title="processing"
          value="15"
          borderLeft="border-(--warning)"
        />
        <StatsCard
          title="success"
          value="980"
          borderLeft="border-(--success)"
        />
        <StatsCard
          title="cancelled"
          value="29"
          borderLeft="border-(--danger)"
        />
      </Stats>
    </div>
  );
}

export default Order;
