import { Container } from "./styles";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useState } from "react";

export function Header() {
  const [isActive, setActive] = useState(false);
  function closeMenu() { setActive(false); }

  return (
    <Container className="header-fixed" onKeyDown={(event) => { if (event.key === "Escape") closeMenu(); }}>
      <HashLink smooth to="#home" className="logo" onClick={closeMenu}>Rishab Kumar<span>.</span></HashLink>
      <input
        onChange={() => document.documentElement.classList.toggle("light")}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch" className="theme-switch"><span className="sr-only">Toggle light theme</span></label>
      <nav id="main-navigation" aria-label="Main navigation" className={isActive ? "active" : ""}>
        <NavHashLink smooth to="#home" onClick={closeMenu}>Home</NavHashLink>
        <NavHashLink smooth to="#about" onClick={closeMenu}>About me</NavHashLink>
        <NavHashLink smooth to="#project" onClick={closeMenu}>Projects</NavHashLink>
        <NavHashLink smooth to="#contact" onClick={closeMenu}>Contact</NavHashLink>
        <a href={`${import.meta.env.BASE_URL}Rishab_Kumar.pdf`} download className="button">Resume <span aria-hidden="true">↓</span></a>
      </nav>
      <button
        type="button"
        aria-expanded={isActive}
        aria-controls="main-navigation"
        aria-label={isActive ? "Close menu" : "Open menu"}
        className={isActive ? "menu active" : "menu"}
        onClick={() => setActive(!isActive)}
      ><span /></button>
    </Container>
  );
}
