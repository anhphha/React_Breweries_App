import React, { useEffect, useState } from "react";
import { Brewery } from "../types/type";
import { baseURL } from "../services/brewery";
import SearchFilter from "./SearchFilter";
import "../styles/Breweries.css";

const Breweries: React.FC = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  //Fetch whole data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(`${baseURL}/`);
      const data: Brewery[] = await response.json();
      setBreweries(data);
    } catch (error) {
      console.error("Error fetching all Breweries: ", error);
    }
  };

  return (
    <>
      <div className="breweries">
        <h1>Brewery Search</h1>
        <SearchFilter data={breweries} />
      </div>
    </>
  );
};

export default Breweries;
