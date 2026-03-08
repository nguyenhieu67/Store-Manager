import Stats from "../components/Stats/Stats";
import StatsCard from "../components/Stats/StatsCard";
<<<<<<< HEAD
import Header from "../layouts/components/Header";
import Search from "../layouts/components/Search";
import Table from "../components/Table";
import { tableTitle, tableData } from "../data";
import { EditIcon, HistoryIcon } from "../components/Icons";
import { useFilter } from "../hooks/Filter";
import { useState } from "react";

function Client() {
  const clientTitle = tableTitle.client;
  const clientData = tableData.client;

  const [filterRank, setFilterRank] = useState("all");

  const filteredData = useFilter(clientData, "rank", filterRank, "all");

  return (
    <div className="flex-1 p-7.5">
      <Header>
        <Search
          title="Add customers"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="M10 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2Z" />
            </svg>
          }
          placeholder="Search for name, email, or phone number..."
          btnColor="bg-(--success)"
        />
      </Header>
=======

function Client() {
  return (
    <div className="flex-1">
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
      <Stats className="grid-cols-3">
        <StatsCard title="total customers" value="850" />
        <StatsCard title="new customers(monthly)" value="42" />
        <StatsCard title="return rate" value="65%" />
      </Stats>
<<<<<<< HEAD
      <Table
        title="Recent orders"
        options={
          <select
            value={filterRank}
            onChange={(e) => setFilterRank(e.target.value)}
          >
            <option value="all">Rank: All</option>
            <option value="gold">Rank: Gold</option>
            <option value="silver">Rank: Silver</option>
            <option value="bronze">Rank: Bronze</option>
          </select>
        }
        tableTitles={clientTitle}
        tableDatas={filteredData}
        actions={[
          {
            icon: <HistoryIcon />,
            type: "history",
          },
          {
            icon: <EditIcon />,
            type: "edit",
          },
        ]}
      />
=======
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
    </div>
  );
}

export default Client;
