import { Outlet } from "react-router-dom";

function DesktopLayout() {
  return (
    <div>
      <header>Desktop Navbar</header>
      <Outlet />
    </div>
  );
}

export default DesktopLayout;
