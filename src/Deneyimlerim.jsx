import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Egitim from "./components/Egitim";
import Calismalarim from "./components/Calismlarim";
import Yeteneklerim from "./components/Yeteneklerim";

export default function Deneyimlerim() {
  return (
    <Grid item  xs={12} md={3} lg={3} display={"flex"}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom textAlign={"center"}>
            Eğitim Bilgilerim
          </Typography>
          <Typography variant="body2">
            <Egitim />
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom textAlign={"center"}>
            Deneyimlerim
          </Typography>
          <Typography variant="body2">
            <Calismalarim />
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom textAlign={"center"}>
            Yeteneklerim
          </Typography>
          <Typography variant="body2">
            <Yeteneklerim />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
