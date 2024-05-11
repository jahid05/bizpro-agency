import logo from "../../../assets/images/logo.png";
import { Navbar, Button } from "keep-react";

const Nav = () => {
  return (
    <Navbar className="bg-theme-color-200">
      <div className="lg:pt-8">
        <Navbar.Container className="flex items-center justify-between md:px-8 px-2 py-2 rounded-2xl bg-white">
          <Navbar.Container className="flex items-center">
            <Navbar.Brand>
              <img src={logo} />
            </Navbar.Brand>
            <Navbar.Divider></Navbar.Divider>
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-8"
            >
              <Navbar.Link linkName="Home" />
              <Navbar.Link linkName="Projects" />
              <Navbar.Link linkName="About" />
              <Navbar.Link linkName="News" />
              <Navbar.Link linkName="Resources" />
            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                <Navbar.Link linkName="Home" />
                <Navbar.Link linkName="Projects" />
                <Navbar.Link linkName="Blogs" />
                <Navbar.Link linkName="News" />
                <Navbar.Link linkName="Resources" />
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>

          <Navbar.Container className="flex gap-2">
            <Button
              className="bg-theme-color-300 hover:bg-theme-color-100 duration-300"
              size="sm"
            >
              Free Trial
            </Button>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </div>
    </Navbar>
  );
};

export default Nav;
