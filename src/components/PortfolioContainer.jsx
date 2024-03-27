import { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");
  console.log(currentPage);
  const renderPage = () => {
    // if (currentPage === "Home") {
    //   return <Home />;
    // }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <NavTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></NavTabs>
      {renderPage()}
    </>
  );
}
