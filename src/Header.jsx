import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";

function Header() {
  return (
    <Grid container columnSpacing={10} rowSpacing={5}   justifyContent={"center"}  sx={{ marginTop: 5, marginBottom:2, fontSize: 20, textAlign: "center" }}>
      <Grid item xs={6} md={3}>
        <Link to={"/"}>Anasayfa</Link>
      </Grid>
      <Grid item xs={6} md={3}>
        <Link to={"/Projelerim"}>Projelerim</Link>
      </Grid>
      <Grid item xs={6} md={3}>
        <Link to={"/Sertifikalarim"}>Sertifikalarım</Link>
      </Grid>
      <Grid item xs={6} md={3}>
        <Link to={"/Deneyimlerim"}>Deneyimlerim </Link>
      </Grid>
    </Grid>
  );
}

export default Header;
