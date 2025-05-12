import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-svh">
      <nav className="bg-neutral-200 sticky top-0 overflow-hidden">
        <div className="flex justify-between">
          <Link to="/">
            <div className="p-5">sanzo wada</div> {/* Header content */}
          </Link>
          <div>
            <Link to="/explore">
              <div className="p-5">explore</div> {/* Header content */}
            </Link>
          </div>
        </div>
      </nav>
      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  );
}
