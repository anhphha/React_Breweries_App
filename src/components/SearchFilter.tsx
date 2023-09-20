import React, { useState, useEffect } from "react";
import { Brewery, SearchFilterProps } from "../types/type";
import { Column } from "../types/type";
import { useNavigate } from "react-router-dom";
import "../styles/SearchFilter.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Breweries from "./Breweries";

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "type", label: "Type", minWidth: 170 },
  { id: "city", label: "City", minWidth: 170 },
  { id: "state", label: "State", minWidth: 170 },
  { id: "country", label: "Country", minWidth: 170 },
  { id: "details", label: "Details", minWidth: 170 },
];

const SearchFilter: React.FC<SearchFilterProps> = ({ data }) => {
  const [filteredTerm, setFilteredTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any[]>(data);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
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

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Stack spacing={2}>
      <div className="ContentFilter">
        <Autocomplete
          sx={{ inlineSize: 300 }}
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
      </div>

      <div className="Table">
        <Paper elevation={10} sx={{ width: '80%'}}>
          <TableContainer sx={{ blockSize: 600 }}>
            <Table
              sx={{ inlineSize: 900 }}
              stickyHeader
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      className="bold-header"
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((brewery: Brewery) => {
                    return (
                      <TableRow
                        hover
                        key={brewery.id}
                        role="checkbox"
                        tabIndex={-1}
                      >
                        <TableCell component="th" scope="row">
                          {brewery.name}
                        </TableCell>
                        <TableCell align="left">
                          {brewery.brewery_type}
                        </TableCell>
                        <TableCell align="left">{brewery.city}</TableCell>
                        <TableCell align="left">{brewery.state}</TableCell>
                        <TableCell align="left">{brewery.country}</TableCell>
                        <TableCell align="center">
                          <Button
                            variant="contained"
                            onClick={() => handleBreweryClick(brewery.id)}
                          >
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, { label: 'All', value: -1 }]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </Stack>
  );
};

export default SearchFilter;
