import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SidenavList from "./sideNavList";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen(true);
  const handleIsClose = () => setIsOpen(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        style={{ width: isOpen ? "6%" : "30%" }}
        className="bg-orange-600 h-[100vh] relative transition-all duration-300 ease-in-out"
      >
        <div className="flex p-2 relative">
          <i
            style={{ display: isOpen ? "block" : "" }}
            onClick={handleIsClose}
            className="text-white fa-solid fa-chevron-left hidden absolute right-2"
          ></i>

          <i
            style={{ display: isOpen ? "none" : "" }}
            onClick={handleIsOpen}
            className="text-white ml-0 fa-solid fa-chevron-right absolute right-2"
          ></i>
        </div>

        {/* Sidebar Links */}
        <div className="pt-20 flex flex-col gap-y-6 px-4">
          <Link to="/dash">
            <SidenavList icon="fa-home" title="Dashboard" />
          </Link>

          <Link to="/dash/books">
            <SidenavList icon="fa-book" title="Books" />
          </Link>

          <Link to="/dash/add-book">
            <SidenavList icon="fa-plus" title="Add Book" />
          </Link>

          <Link to="/dash/customers">
            <SidenavList icon="fa-user" title="Customers" />
          </Link>

          <Link to="/dash/orders">
            <SidenavList icon="fa-shopping-cart" title="Orders" />
          </Link>

          <Link to="/dash/addOrder">
            <SidenavList icon="fa-shopping-cart" title=" Add Orders" />
          </Link>

          <Link to="/dash/reports">
            <SidenavList icon="fa-chart-bar" title="Reports" />
          </Link>

          <Link to="/dash/settings">
            <SidenavList icon="fa-cog" title="Settings" />
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full p-4 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
