import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Detay from "./Detay";
import { Grid,Box } from "@mui/material";

export default function Kart({
  proje_adi,
  proje_uzun_aciklama,
  proje_kisa_aciklama,
  proje_resmi,
  github_linki
}) {
  return (
    <Grid
      item
      xs={12}
      md={5}
      lg={4}
      sx={{ border: 1, borderStyle: "solid", borderRadius: 3, margin: 5 }}
    >
      <Box  display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} textAlign={"center"} sx={{marginRight:2}}>
        <CardActionArea   sx={{ textAlign:"center"}}>
          <CardMedia
            component="img"
            height="140"
            image={proje_resmi}
            alt="green iguana"
            sx={{borderRadius:4 , objectFit:"contain"}}
          />
          <CardContent sx={{borderRadius:3}}>
            <Typography gutterBottom variant="h5" component="div">
              {proje_adi}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {proje_kisa_aciklama}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Detay
            proje_adi={proje_adi}
            proje_uzun_aciklama={proje_uzun_aciklama}
            github_linki={github_linki}
          />
        </CardActions>
      </Box>
    </Grid>
  );
}
