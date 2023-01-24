import React from "react";
import TextField from "@mui/material/TextField";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const Catalog = ({ produto = "governance" }: { produto?: string }) => {
  const [dados, setDados] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      <h2>Catalog List ({produto})</h2>
      <Grid mt={2} mb={1} container spacing={1}>
        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel>Filtro 1</InputLabel>
            <Select label="Filtro" name="filtro">
              <MenuItem value="filtrox">Filtro X</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel>Filtro 1</InputLabel>
            <Select label="Filtro" name="filtro">
              <MenuItem value="filtrox">Filtro A</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel>Filtro 1</InputLabel>
            <Select label="Filtro" name="filtro">
              <MenuItem value="filtrox">Filtro B</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dados.map((todo: any) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {todo.title}
                </TableCell>
                <TableCell align="right">{todo.title}</TableCell>
                <TableCell align="right">{todo.title}</TableCell>
                <TableCell align="right">{todo.title}</TableCell>
                <TableCell align="right">{todo.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
