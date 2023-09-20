import React, { useEffect, useState } from "react";
import { Brewery } from "../types/type";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../services/brewery";
import Button from "@mui/material/Button";
import "../styles/SingleBrewery.css";

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
    <div className="single-brewery-container">
      <div className="brewery-name">{brewery.name}</div>
      <br />
      <div>
        <Button
          size="large"
          className="back-button"
          variant="contained"
          onClick={() => navigate("/breweries")}
        >
          Back
        </Button>
      </div>
      <br />
      <div className="brewery-details">
        <strong>Brewery Type:</strong> {brewery.brewery_type}
      </div>
      <br />
      <div className="brewery-details">
        <strong>Street:</strong> {brewery.street}
      </div>
      <br />
      <div className="brewery-details">
        <strong>City:</strong> {brewery.city}
      </div>
      <br />
      <div className="brewery-details">
        <strong>Country:</strong> {brewery.country}
      </div>
      <br />
      <div className="brewery-details">
        <strong>Website URL:</strong> {brewery.website_url}
      </div>
      <br />
      <div className="brewery-details">
        <strong>Phone:</strong> {brewery.phone}
      </div>
      <br />

      <div className="google-maps">
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
