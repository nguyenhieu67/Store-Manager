import { Overview, Product, Order, Client, Report } from "../assets/icons";

const data = [
  {
    icon: Overview,
    isActive: true,
    title: "Overview",
  },
  {
    icon: Product,
    isActive: false,
    title: "Product",
  },
  {
    icon: Order,
    isActive: false,
    title: "Order",
  },
  {
    icon: Client,
    isActive: false,
    title: "Client",
  },
  {
    icon: Report,
    isActive: false,
    title: "Report",
  },
];

function Sidebar() {
  return (
    <aside className="h-screen w-65 bg-[#2d3e51] p-6.25">
      <h1 className="mb-7.5 text-center text-2xl font-bold text-[#3498db]">
        ShopAdmin
      </h1>
      <ul>
        {data.map((d) => {
          const Icon = d.icon;
          return (
            <li
              key={d.title}
              className={`mb-1.25 flex items-center rounded-lg p-3 font-medium ${
                d.isActive
                  ? "bg-[#34495e] text-[#3498db]"
                  : "text-white hover:bg-[#34495e] hover:text-[#3498db]"
              }`}
            >
              {Icon ? <Icon className="mr-3.75 h-5 w-5" /> : null}
              {d.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
