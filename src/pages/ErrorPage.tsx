import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ErrorPage: React.FC = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div>
        <h1>Oops! Something went wrong.</h1>
        <p>We're sorry, but there was an error processing your request.</p>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
