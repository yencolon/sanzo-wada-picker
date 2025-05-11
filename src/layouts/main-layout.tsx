import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-svh">
      <nav className="bg-neutral-200 sticky top-0 overflow-hidden">
        <Link to="/">
          <div className="p-5">sanzo wada</div> {/* Header content */}
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
