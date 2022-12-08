import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import Page from "./Page";
import 'bootstrap/dist/css/bootstrap.min.css';

// Components

function App() {

  const [pages] = useState([
    {
      name: "About Rosa"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact"
    },
    {
      name: "Resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
      <div>
        <Header />
        <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} /><br/>
          <main>
              <Page currentPage={currentPage}></Page>
          </main>
        <Footer />
      </div>
  )
}

export default App;