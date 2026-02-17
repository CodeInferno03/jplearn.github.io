import { useRoutes } from "react-router-dom";
import { appRoutes } from "../routes/routes";
import DesktopLayout from "../layouts/DesktopLayout";
import MobileLayout from "../layouts/MobileLayout";
import { useMobileLayout } from "../hooks/useMobileLayout";

export default function AppRouter() {
  const isMobile = useMobileLayout();
  const Layout = isMobile ? MobileLayout : DesktopLayout;

  const element = useRoutes([
    {
      element: <Layout />,
      children: appRoutes,
    },
  ]);

  return element;
}
