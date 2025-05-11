import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  );
}
