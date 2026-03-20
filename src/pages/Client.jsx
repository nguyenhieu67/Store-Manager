import { useState, useEffect } from "react";
import axios from "axios";

import Stats from "../components/Stats/Stats";
import StatsCard from "../components/Stats/StatsCard";
import Table from "../components/Table";
import { tableTitle } from "../data";
import { EditIcon, HistoryIcon } from "../components/Icons";
import { useFilter } from "../hooks/useFilter";
import Form from "../components/Form";

function Client() {
  const API_URL = "https://store-managerapi.onrender.com/client";

  const clientTitle = tableTitle.client;
  const [client, setClient] = useState([]);
  const [loading, setLoading] = useState(true);

  const calculateRank = (order) => {
    if (order >= 31) return "gold";
    if (order >= 11) return "silver";
    return "bronze";
  };

  const processedClients = client.map((item) => ({
    ...item,
    rank: calculateRank(item.order || 0),
  }));

  const [filterRank, setFilterRank] = useState("all");
  const filteredDatas = useFilter(processedClients, "rank", filterRank, "all");

  const getRankPriority = (order) => {
    if (order >= 31) return 3; // Gold
    if (order >= 11) return 2; // Silver
    return 1; // Bronze
  };

  const sortedClients = [...filteredDatas].sort((a, b) => {
    const priorityA = getRankPriority(a.order || 0);
    const priorityB = getRankPriority(b.order || 0);

    if (priorityA !== priorityB) {
      return priorityB - priorityA;
    }
    return (b.order || 0) - (a.order || 0);
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    rank: "Bronze",
    order: 0,
    totalSpending: 0,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setClient(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Backend connection error, TheBad:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    const payload = {
      ...formData,
      fullName: fullName,
      order: Number(formData.order),
      totalSpending: Number(formData.totalSpending),
    };
    try {
      const response = await axios.post(API_URL, payload);
      setClient((prevClients) => [...prevClients, response.data]);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        rank: "Bronze",
        order: 0,
        totalSpending: 0,
      });
    } catch (error) {
      console.error("Error when adding product:", error);
    }
  };

  return (
    <div className="flex-1 p-7.5">
      <Form
        title="Add customers"
        submitText="Add customers"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="first-name" className="text-lg font-medium">
                First Name:
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                id="first-name"
                placeholder="Enter..."
                className="rounded border p-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name" className="text-lg font-medium">
                Last Name:
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                id="last-name"
                placeholder="Enter..."
                className="rounded border p-1"
              />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-medium">
                Email:
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                id="email"
                placeholder="Enter..."
                className="rounded border p-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-lg font-medium">
                Phone:
              </label>
              <input
                type="phone"
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                id="phone"
                placeholder="Enter..."
                className="rounded border p-1"
              />
            </div>
          </div>
        </div>
      </Form>
      <Stats className="grid-cols-3">
        <StatsCard title="total customers" value="850" />
        <StatsCard title="new customers(monthly)" value="42" />
        <StatsCard title="return rate" value="65%" />
      </Stats>
      <Table
        title="Recent orders"
        maxHeight="max-h-122.5"
        options={
          <select
            className="cursor-pointer rounded-md border border-[#eee] p-1 text-sm outline-none"
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
        loading={loading}
        clientData={sortedClients}
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
    </div>
  );
}

export default Client;
