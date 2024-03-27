import { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

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
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
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
