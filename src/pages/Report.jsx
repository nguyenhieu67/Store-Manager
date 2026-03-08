import Stats from "../components/Stats/Stats";
import StatsCard from "../components/Stats/StatsCard";
import Header from "../layouts/components/Header";
import { useState } from "react";
import { GetDateString } from "../components/Date";
import Chart from "../components/Charts/Chart";
import Table from "../components/Table";
import { tableData, tableTitle } from "../data";

function Report() {
  const reportTitle = tableTitle.report;
  const reportData = tableData.report;

  const [date, setDate] = useState(GetDateString(7));

  const today = GetDateString(0);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="flex-1 p-7.5">
      <Header>
        <h2 className="text-2xl font-bold">Business report</h2>
        <div className="flex gap-2.5">
          <input
            type="date"
            value={today}
            onChange={handleChange}
            className="rounded-[5px] border border-solid border-[#ddd] p-2"
          />
          <input
            type="date"
            value={date}
            onChange={handleChange}
            className="rounded-[5px] border border-solid border-[#ddd] p-2"
          />
          <button className="cursor-pointer rounded-[5px] border-none bg-(--primary-color) px-3.75 py-2 text-white">
            Filter
          </button>
        </div>
      </Header>

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
      <Chart />
      <Table
        title="Best-selling product"
        tableTitles={reportTitle}
        tableDatas={reportData}
      />
    </div>
  );
}

export default Report;
