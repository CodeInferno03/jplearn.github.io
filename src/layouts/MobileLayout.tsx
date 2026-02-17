import { Outlet } from "react-router-dom";

function MobileLayout() {
  return (
    <div>
      <header>Mobile Navbar</header>
      <Outlet />
    </div>
  );
}

export default MobileLayout;
