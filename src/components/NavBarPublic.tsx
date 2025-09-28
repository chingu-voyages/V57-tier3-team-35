import { Link, useLocation } from "react-router-dom";
export default function NavBarPublic() {
  const location = useLocation();

  return (
    <nav className="h-16 bg-primary flex items-center justify-between px-4 sm:px-8">
      <div className="text-white font-bold text-3xl">Logo</div>
      <div className="flex gap-4 text-base sm:text-lg md:text-xl">
        {location.pathname !== "/" && (
          <Link to="/" className="nav-link">
            Home
          </Link>
        )}
        {location.pathname !== "/login" && (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
        {location.pathname !== "/signup" && location.pathname !== "/" && (
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        )}
      </div>
    </nav>
  );
}
