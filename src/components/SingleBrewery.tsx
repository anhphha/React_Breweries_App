import React, { useEffect, useState } from "react";
import { Brewery } from "../types/type";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../services/brewery";

const SingleBrewery: React.FC = () => {
  const [brewery, setBrewery] = useState<Brewery | null>(null);
  const { id } = useParams<{ id: string }>();
  let navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getSingleBrewery(id);
    }
  }, [id]);

  //fetch single Brewery data from API
  const getSingleBrewery = async (id: string) => {
    try {
      const response = await fetch(`${baseURL}/${id}`);
      const data: Brewery = await response.json();
      setBrewery(data);
    } catch (error) {
      console.error("Error fetching single Brewery", error);
    }
  };

  if (!brewery) {
    return <div> Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>{brewery.name}</h1>
        <button onClick={() => navigate("/breweries")}>Back</button>
      </div>

      <div>Brewery Type: {brewery.brewery_type}</div>
      <div>Street: {brewery.street}</div>
      <div>City: {brewery.city}</div>
      <div>Country: {brewery.country}</div>
      <div>Website URL: {brewery.website_url}</div>
      <div>Phone: {brewery.phone}</div>

      <div>
        <iframe
          src={`//maps.google.com/maps?q=${brewery.latitude},${brewery.longitude}&z=15&output=embed`}
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default SingleBrewery;
