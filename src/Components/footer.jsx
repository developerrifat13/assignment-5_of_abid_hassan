
const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <h2 className="footer-brand">Dev Stack</h2>

        <p>
          Explore technologies. Build your future.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Dev Stack.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
