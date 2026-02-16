export default function Footer() {
  return (
    <footer className="foot-wrapper">
      <div className="layout">
        <div className="foot-item">
          <h2 className="foot-tit">Contact Us</h2>
          <ul className="contact">
            <li>
              <span className="contact-label">Address:</span> Shiji Dongfang Building, Weifang City, China.
            </li>
            <li>
              <span className="contact-label">Tel:</span> +86-532-80960265
            </li>
          </ul>
        </div>
        <div className="copyright">
          Copyright © {new Date().getFullYear()} Shandong Believe Chemical Pte., LTD.
        </div>
      </div>
    </footer>
  );
}