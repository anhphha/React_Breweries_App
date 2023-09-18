import React, { useEffect, useState } from "react";
import { Brewery } from "../types/type";

const BreweryList: React.FC = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.openbrewerydb.org/v1/breweries"
      );
      const data: Brewery[] = await response.json();
      setBreweries(data);
    } catch (error) {
      console.error("Error fetching all Breweries: ", error);
    }
  };

  return (
    <div>
      <h1> List of Breweries</h1>
      <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id}>
            <h2>{brewery.name}</h2>
            <p>Type: {brewery.brewery_type}</p>
            <p>City: {brewery.city}</p>
            <p>State: {brewery.state}</p>
            <p>Country: {brewery.country}</p>
            <p>Longitude: {brewery.longitude}</p>
            <p>Latitude: {brewery.latitude}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreweryList;
