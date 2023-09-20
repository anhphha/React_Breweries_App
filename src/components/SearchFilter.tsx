import React, { useState, useEffect } from "react";
import { SearchFilterProps } from "../types/type";
import { useNavigate } from "react-router-dom";
import "../styles/SearchFilter.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const SearchFilter: React.FC<SearchFilterProps> = ({ data }) => {
  const [filteredTerm, setFilteredTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any[]>(data);
  const navigate = useNavigate();

  useEffect(() => {
    applyFilter();
  }, [filteredTerm, data]);

  const applyFilter = () => {
    const filteredResults = data.filter((brewery) => {
      const breweryName = brewery.name.toLowerCase();
      const breweryCity = brewery.city.toLowerCase();
      const breweryCountry = brewery.country.toLowerCase();
      const breweryState = brewery.state.toLowerCase();
      const breweryType = brewery.brewery_type.toLowerCase();
      const searchTerm = filteredTerm.toLowerCase();
      return (
        breweryName.includes(searchTerm) ||
        breweryCity.includes(searchTerm) ||
        breweryCountry.includes(searchTerm) ||
        breweryState.includes(searchTerm) ||
        breweryType.includes(searchTerm)
      );
    });
    setFilteredData(filteredResults);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredTerm(e.target.value);
  };

  // Handle click event to navigate to the Detail Page Component
  const handleBreweryClick = (id: string) => {
    // Navigate to the Detail Page Component with the specific id
    navigate(`/breweries/${id}`);
  };

  return (
    <Stack spacing={2} sx={{ inlineSize: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={filteredData.map((brewery) => brewery.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            onChange={handleInputChange}
          />
        )}
      />
      <ul>
        {filteredData.map((brewery) => (
          <li className="box" key={brewery.id}>
            <h2>{brewery.name}</h2>
            <p>Type: {brewery.brewery_type}</p>
            <p>City: {brewery.city}</p>
            <p>State: {brewery.state}</p>
            <p>Country: {brewery.country}</p>
            <p>Longitude: {brewery.longitude}</p>
            <p>Latitude: {brewery.latitude}</p>
            <Button
              variant="contained"
              onClick={() => handleBreweryClick(brewery.id)}
            >
              View Details
            </Button>
          </li>
        ))}
      </ul>
    </Stack>
  );
};

export default SearchFilter;
