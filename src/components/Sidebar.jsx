import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ProductIcon,
  CartIcon,
  UsersIcon,
  ReportIcon,
} from "./Icons";

const data = [
  {
    icon: <HomeIcon />,
    path: "/",
    title: "Overview",
  },
  {
    icon: <ProductIcon />,
    path: "/product",
    title: "Product",
  },
  {
    icon: <CartIcon />,
    path: "/order",
    title: "Order",
  },
  {
    icon: <UsersIcon />,
    path: "/client",
    title: "Client",
  },
  {
    icon: <ReportIcon />,
    path: "/report",
    title: "Report",
  },
];

function Sidebar() {
  return (
    <aside className="w-65 bg-[#2d3e51] p-6.25">
      <h1 className="mb-7.5 text-center text-2xl font-bold text-[#3498db]">
        ShopAdmin
      </h1>
      <ul>
        {data.map((d) => {
          const icon = d.icon;

          return (
            <li key={d.title} className={`mb-1.25`}>
              <NavLink
                to={d.path}
                className={({ isActive }) =>
                  `flex rounded-lg p-3 font-medium ${
                    isActive
                      ? "bg-[#34495e] text-[#3498db]"
                      : "text-white hover:bg-[#34495e] hover:text-[#3498db]"
                  }`
                }
              >
                {icon && <span className="mr-3.75 h-5 w-5">{icon}</span>}
                {d.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
