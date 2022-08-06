import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="h-[5rem] w-full bg-[#2a2a2e]">
      <nav className="max-h-[4rem] w-[350px] mx-auto rounded-bl-[1.7rem] rounded-tr-[1.7rem]  border border-[#424245] py-4 px-8 bg-[#424245] text-white ">
        <ul className="flex justify-between">
          <li className="">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
