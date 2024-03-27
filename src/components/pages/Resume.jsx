import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ResumeFile from "../../assets/ResumeFile.pdf";

export default function Resume() {
  return (
    <>
      <Header></Header>
      <p>
        <a href={ResumeFile}>Dowload Resume</a>
      </p>
      <Footer></Footer>
    </>
  );
}
