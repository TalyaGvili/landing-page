import { Container } from "../shared/Container";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";
import { useThemeStore } from "../../store/ThemeStore";

export const Footer = () => {

  // Dynamically set logo by theme
  const logo = "/assets/JOBA-logo.png";

  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img src={logo} alt="JOBA Logo" className="w-20 h-20 lg:w-24 lg:h-24" />
          </div>

          <ul className="flex gap-6 text-heading-1">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
