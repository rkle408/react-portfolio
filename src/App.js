import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import Page from "./Page";
import { ChakraProvider } from '@chakra-ui/react';

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
    <ChakraProvider>
      <div>
        <Header />
        <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
          <main>
              <Page currentPage={currentPage}></Page>
          </main>
        <Footer />
      </div>
    </ChakraProvider>
  )
}

export default App;