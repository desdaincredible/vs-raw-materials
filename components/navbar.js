import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Link from "next/link";

import Logo from "../components/logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function logout() {
    // TO DO: switch isLoggedIn to false in db
    console.log("logout");
  }

  return (
    <Navbar
      color="dark"
      dark
      expand="md"
      className="w-100 p-1 d-flex justify-content-between"
    >
      <Logo maxWidth="150px" fillColor="#ffffff" />
      <div className="nav-links my-auto pe-5 ps-4">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Reports
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link href="/reports">
                    <a>All Reports</a>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/reports/new">
                    <a>New Report</a>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Recipes
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link href="/recipes">
                    <a>All Recipes</a>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/recipes/new">
                    <a>New Recipe</a>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Inventory
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link href="/inventory">
                    <a>All Inventory</a>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/inventory/receiving">
                    <a>Receiving</a>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link href="/adverse-effects">
                <a className="nav-link">Adverse Effects</a>
              </Link>
            </NavItem>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="my-auto ms-2"
              style={{ color: "#fff" }}
              onClick={logout}
            />
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}
