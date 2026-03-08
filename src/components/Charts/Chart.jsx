import ChartBox from "./ChartBox";

function Chart() {
  const getLast7Days = () => {
    const labels = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);

      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      labels.push(`${day}/${month}`);
    }
    return labels;
  };

  const revenueData = [
    12000000, 19000000, 15000000, 25000000, 22000000, 30000000, 28000000,
  ];

  return (
    <div className="mb-7.5 grid grid-cols-2 gap-5">
      <ChartBox
        title="Revenue chart (last 7 days)"
        type="line"
        labels={getLast7Days()}
        data={revenueData}
      />

      <ChartBox
        title="Category structure"
        type="doughnut"
        labels={["Smartphone", "Accessory", "Laptop"]}
        data={[50, 30, 20]}
      />
    </div>
  );
}

export default Chart;
