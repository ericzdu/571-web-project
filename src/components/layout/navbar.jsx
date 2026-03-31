import {
  Link,
  MenuTrigger,
  Popover,
  Menu,
  MenuItem,
} from "react-aria-components";
import { Dropdown, DropdownItem } from "../ui/dropdown";
import logo from "../../assets/logo.gif";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white">
      {/* Logo — left side */}
      <Link href="/">
        <img src={logo} alt="logo" className="h-14 w-auto" />
      </Link>

      {/* Nav links — right side */}
      <ul className="flex items-center gap-8 list-none m-0 p-0">
        <li>
          <Dropdown label="artwork">
            <DropdownItem to="/2026">2026</DropdownItem>
            <DropdownItem to="/2025">2025</DropdownItem>
            <DropdownItem to="/2024">2024</DropdownItem>
            <DropdownItem to="/2023">2023</DropdownItem>
            <DropdownItem to="/2022">2022</DropdownItem>
            <DropdownItem to="/2016-2021">2016–2021</DropdownItem>
          </Dropdown>
        </li>
        <li>
          <Dropdown label="about">
            <DropdownItem to="/cv">cv</DropdownItem>
            <DropdownItem to="/contact">contact me</DropdownItem>
            <DropdownItem to="/yeah">yeah</DropdownItem>
          </Dropdown>
        </li>
        <li>
          <Dropdown label="store" />
        </li>
      </ul>
    </nav>
  );
}
