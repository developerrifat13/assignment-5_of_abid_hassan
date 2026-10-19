
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      
<button
  className="hamburger"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation menu"
>
  {/* {menuOpen ? "✕" : "☰"} */}
  ☰
</button>

      <h2 className="brand">Dev Stack</h2>

      
<ul className={`nav-links ${menuOpen ? "menu-open" : ""}`}>
  <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
  <li><a href="#technologies" onClick={() => setMenuOpen(false)}>Technologies</a></li>
  <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
  <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
  <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
</ul>


      <div className="nav-actions">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;