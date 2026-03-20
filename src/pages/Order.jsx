import { useState } from "react";

import { useFilter } from "../hooks/useFilter";
import {
  ViewIcon,
  PrinterIcon,
  CheckIcon,
  CloseIcon,
} from "../components/Icons";
import Stats from "../components/Stats/Stats";
import StatsCard from "../components/Stats/StatsCard";
import Header from "../layouts/components/Header";
import Search from "../layouts/components/Search";
import Table from "../components/Table";
import { tableTitle, tableData } from "../data";
import { GetDateString } from "../components/Date";
function Order() {
  const orderTitle = tableTitle.order;
  const orderData = tableData.orderManagement;

  const [date, setDate] = useState(GetDateString());
  const [filterOrder, setFilterOrder] = useState("All");

  const tabBtns = [
    { label: "All", value: "All" },
    { label: "Pending", value: "pending" },
    { label: "Progress", value: "progress" },
    { label: "Completed", value: "completed" },
    { label: "Cancelled", value: "cancelled" },
  ];

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const filteredOrderData = useFilter(orderData, "status", filterOrder, "All");

  return (
    <div className="flex-1 p-7.5">
      <Header>
        <Search
          title="Export Excel"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75C2 3.784 2.784 3 3.75 3h4.836c.464 0 .909.184 1.237.513l1.414 1.414a.25.25 0 0 0 .177.073h4.836c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 16.25 17H3.75A1.75 1.75 0 0 1 2 15.25V4.75Zm8.75 4a.75.75 0 0 0-1.5 0v2.546l-.943-1.048a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.114 0l2.25-2.5a.75.75 0 1 0-1.114-1.004l-.943 1.048V8.75Z"
                clipRule="evenodd"
              />
            </svg>
          }
          placeholder="Find order number, customer name..."
          btnColor="bg-(--primary-color)"
        />
      </Header>
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
      <Table
        custom={
          <div className="flex flex-wrap gap-2.5">
            {tabBtns.map((tab, index) => (
              <button
                key={index}
                onClick={() => setFilterOrder(tab.value)}
                className={`cursor-pointer rounded-[20px] px-4 py-2 text-[15px] font-medium transition-all ${
                  filterOrder === tab.value
                    ? "bg-(--primary-color) text-white"
                    : "bg-[#eee] text-[#666] hover:bg-[#ddd]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        }
        options={
          <input
            className="rounded-[5px] border border-solid border-[#ddd] p-2"
            type="date"
            value={date}
            onChange={handleChange}
          />
        }
        tableTitles={orderTitle}
        tableDatas={filteredOrderData}
        actions={[
          {
            getButtons: (status) => {
              const statusText = String(status || "")
                .toLowerCase()
                .trim();

              switch (statusText) {
                case "completed":
                case "progress":
                  return [
                    {
                      icon: <ViewIcon />,
                      type: "view",
                    },
                    {
                      icon: <PrinterIcon />,
                      type: "print",
                    },
                  ];
                case "pending":
                  return [
                    {
                      icon: <CheckIcon />,
                      type: "approve",
                    },
                    {
                      icon: <CloseIcon />,
                      type: "delete",
                    },
                  ];
                case "cancelled":
                  return [
                    {
                      icon: <CloseIcon />,
                      type: "delete",
                    },
                  ];
                default:
                  return [];
              }
            },
          },
        ]}
      />
    </div>
  );
}

export default Order;
