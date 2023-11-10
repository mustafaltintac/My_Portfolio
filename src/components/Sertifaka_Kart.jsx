import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Grid, Box } from "@mui/material";

function Sertifika_Kart({
  sertifika_adi,
  sertifika_kurumu,
  sertifika_resim_linki,
  sertifika_linki,
}) {
  return (
    <Grid
      item
      xs={12}
      md={4}
      lg={4}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        sx={{ border:1 , borderRadius:5    }}
      >
        <CardActionArea sx={{ textAlign: "center" }}>
          <CardMedia
            component="img"
            image={sertifika_resim_linki}
            height={300}
            alt="sertifika  "
            sx={{ borderRadius: 4, objectFit: "contain" }}
          />
          <CardContent sx={{ borderRadius: 3 }}>
            <a href={sertifika_linki} download={sertifika_linki}>
              <Button variant="text" color="primary">
                Sertifikayı İndir
              </Button>
            </a>
          </CardContent>
        </CardActionArea>
      </Box>
    </Grid>
  );
}

export default Sertifika_Kart;
