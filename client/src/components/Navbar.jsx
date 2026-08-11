import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5">

  <h1 className="text-3xl font-bold text-blue-600">
    UHired?
  </h1>

  <div className="flex items-center gap-10">

    <div className="flex gap-8">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
    </div>

    <Link
      to="/register"
      className="bg-blue-600 text-white px-5 py-2 rounded-lg"
    >
      Sign Up
    </Link>

  </div>

</nav>
  );
}

export default Navbar;