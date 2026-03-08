import Sidebar from "../components/Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      {children}
    </div>
  );
}

export default DefaultLayout;
