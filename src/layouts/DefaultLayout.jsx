import { NavLink } from "react-router-dom";
import { Overview, Product, Order, Client, Report } from "../assets/icons";
import Button from "../components/Button";

const data = [
  {
    icon: Overview,
    path: "/",
    title: "Overview",
  },
  {
    icon: Product,
    path: "/product",
    title: "Product",
  },
  {
    icon: Order,
    path: "/order",
    title: "Order",
  },
  {
    icon: Client,
    path: "/client",
    title: "Client",
  },
  {
    icon: Report,
    path: "/report",
    title: "Report",
  },
];

function DefaultLayout() {
  return (
    <aside className="h-screen w-65 bg-[#2d3e51] p-6.25">
      <h1 className="mb-7.5 text-center text-2xl font-bold text-[#3498db]">
        ShopAdmin
      </h1>
      <ul>
        {data.map((d) => {
          const Icon = d.icon;
          return (
            <li key={d.title} className={`mb-1.25`}>
              <NavLink
                to={d.path}
                className={({ isActive }) =>
                  `flex items-center rounded-lg p-3 font-medium ${
                    isActive
                      ? "bg-[#34495e] text-[#3498db]"
                      : "text-white hover:bg-[#34495e] hover:text-[#3498db]"
                  }`
                }
              >
                {Icon ? <Icon className="mr-3.75 h-5 w-5" /> : null}
                {d.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default DefaultLayout;
