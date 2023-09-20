import React, { useEffect, useState } from "react";
import { Brewery } from "../types/type";
import { baseURL } from "../services/brewery";
import SearchFilter from "./SearchFilter";
import "../styles/Breweries.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Breweries: React.FC = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, [sortBy]);

  //Fetch whole data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(`${baseURL}?sort=${sortBy}`);
      const data: Brewery[] = await response.json();
      setBreweries(data);
    } catch (error) {
      console.error("Error fetching all Breweries: ", error);
    }
  };

  /// Handling sorting change
  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortBy(event.target.value);
  };

  return (
    <>
      <div className="breweries">
        <h1>Brewery Search</h1>
        <br />
        <SearchFilter data={breweries} />
        <br />

        {/* Sorting dropdown */}
        <Box sx={{ inlineSize: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Sort By"
              value={sortBy}
              onChange={handleSortChange}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="type">Type</MenuItem>
              <MenuItem value="city">City</MenuItem>
              <MenuItem value="country">Country</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </>
  );
};

export default Breweries;
