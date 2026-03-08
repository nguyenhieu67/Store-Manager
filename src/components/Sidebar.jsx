import { NavLink } from "react-router-dom";
<<<<<<< HEAD
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
=======
import { Overview, Product, Order, Client, Report } from "../assets/icons";

const data = [
  {
    icon: Overview,
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
    path: "/",
    title: "Overview",
  },
  {
<<<<<<< HEAD
    icon: <ProductIcon />,
=======
    icon: Product,
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
    path: "/product",
    title: "Product",
  },
  {
<<<<<<< HEAD
    icon: <CartIcon />,
=======
    icon: Order,
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
    path: "/order",
    title: "Order",
  },
  {
<<<<<<< HEAD
    icon: <UsersIcon />,
=======
    icon: Client,
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
    path: "/client",
    title: "Client",
  },
  {
<<<<<<< HEAD
    icon: <ReportIcon />,
=======
    icon: Report,
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
    path: "/report",
    title: "Report",
  },
];

function Sidebar() {
  return (
<<<<<<< HEAD
    <aside className="w-65 bg-[#2d3e51] p-6.25">
=======
    <aside className="h-screen w-65 bg-[#2d3e51] p-6.25">
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
      <h1 className="mb-7.5 text-center text-2xl font-bold text-[#3498db]">
        ShopAdmin
      </h1>
      <ul>
        {data.map((d) => {
<<<<<<< HEAD
          const icon = d.icon;

=======
          const Icon = d.icon;
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
          return (
            <li key={d.title} className={`mb-1.25`}>
              <NavLink
                to={d.path}
                className={({ isActive }) =>
<<<<<<< HEAD
                  `flex rounded-lg p-3 font-medium ${
=======
                  `flex items-center rounded-lg p-3 font-medium ${
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
                    isActive
                      ? "bg-[#34495e] text-[#3498db]"
                      : "text-white hover:bg-[#34495e] hover:text-[#3498db]"
                  }`
                }
              >
<<<<<<< HEAD
                {icon && <span className="mr-3.75 h-5 w-5">{icon}</span>}
=======
                {Icon ? <Icon className="mr-3.75 h-5 w-5" /> : null}
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
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
