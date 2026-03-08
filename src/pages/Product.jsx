<<<<<<< HEAD
import { useState } from "react";

import { useFilter } from "../hooks/Filter";
import Stats from "../components/Stats/Stats";
import StatsCard from "../components/Stats/StatsCard";
import Header from "../layouts/components/Header";
import Search from "../layouts/components/Search";
import Table from "../components/Table";
import { tableTitle, tableData } from "../data";
import { EditIcon, DeleteIcon } from "../components/Icons";

function Product() {
  const productTitle = tableTitle.product;
  const productData = tableData.product;

  const [filterCategory, setFilterCategory] = useState("All product");

  const filteredData = useFilter(
    productData,
    "category",
    filterCategory,
    "All product",
  );

  return (
    <div className="flex-1 p-7.5">
      <Header>
        <Search
          title="Add product"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>
          }
          placeholder="Find product name, SKU code..."
          btnColor="bg-(--success)"
        />
      </Header>
=======
import Stats from "../components/Stats/Stats";
import StatsCard from "../components/Stats/StatsCard";

function Product() {
  return (
    <div className="flex-1">
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
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
<<<<<<< HEAD
      <Table
        title="Product catalog"
        options={
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="cursor-pointer rounded-md border border-[#eee] p-1 text-sm outline-none"
          >
            <option>All product</option>
            <option>Smartphone</option>
            <option>Accessory</option>
          </select>
        }
        tableTitles={productTitle}
        tableDatas={filteredData}
        actions={[
          {
            icon: <EditIcon color="#3498db" />,
            type: "edit",
            bgColor: "bg-[#ebf5fb] hover:bg-[#ebf5fb] hover:opacity-70",
          },
          {
            icon: <DeleteIcon color="#e74c3c" />,
            type: "delete",
            bgColor: "bg-[#fdedec] hover:bg-[#fdedec] hover:opacity-70",
          },
        ]}
      />
=======
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
    </div>
  );
}

export default Product;
