export default function NavTabs(props) {
  console.log("navTabs", props);
  return (
    <>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            props.currentPage === "About" ? "nav-link active" : "nav-link"
          }
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Po"
          onClick={() => props.handlePageChange("Portfolio")}
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            props.currentPage === "Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => props.handlePageChange("Resume")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            props.currentPage === "Resume" ? "nav-link active" : "nav-link"
          }
        >
          Resume
        </a>
      </li>
    </>
  );
}
