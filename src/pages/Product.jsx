import Stats from "../components/Stats/Stats";
import StatsCard from "../components/Stats/StatsCard";

function Product() {
  return (
    <div className="flex-1">
      <Stats className="grid-cols-3">
        <StatsCard
          title="total product"
          value="1,240"
          borderLeft="border-(--primary-color)"
        />
        <StatsCard
          title="out of stock"
          value="12"
          borderLeft="border-(--primary-color)"
          className="text-[#e74c3c]"
        />
        <StatsCard
          title="categories"
          value="15"
          borderLeft="border-(--primary-color)"
        />
      </Stats>
    </div>
  );
}

export default Product;
