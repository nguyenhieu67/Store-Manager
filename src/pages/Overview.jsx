import Stats from "../components/Stats/Stats";
import StatsCard from "../components/Stats/StatsCard";
<<<<<<< HEAD
import Table from "../components/Table";
import Header from "../layouts/components/Header";
import { tableTitle, tableData } from "../data";

function Overview() {
  const overviewTitle = tableTitle.overview;
  const overviewData = tableData.overview;

  return (
    <div className="flex-1 p-7.5">
      <Header>
        <div className="flex items-center">
          <strong>Admin</strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Header>
=======

function Overview() {
  return (
    <div className="flex-1">
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
      <Stats className="grid-cols-2">
        <StatsCard title="revenue" value="2.500.000đ" />
        <StatsCard title="new orders" value="12" />
      </Stats>
<<<<<<< HEAD
      <Table
        title="Recent orders"
        tableTitles={overviewTitle}
        tableDatas={overviewData}
      />
=======
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
    </div>
  );
}

export default Overview;
