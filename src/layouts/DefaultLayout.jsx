import Sidebar from "../components/Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}

export default DefaultLayout;
