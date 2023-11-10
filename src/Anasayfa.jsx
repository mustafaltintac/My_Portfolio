import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Linkedin from "@mui/icons-material/Linkedin";
import Email from "@mui/icons-material/Email";
import Twitter from "@mui/icons-material/Twitter";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
export default function MediaControlCard() {
  const theme = useTheme();
  const [isTrue, setIsTrue] = useState(false);

  const handleIconClickGmail = () => {
    window.open("https://m.mustafaltintac@gmail.com", "_blank");
  };
  const handleIconClickGithub = () => {
    window.open("https://github.com/mustafaltintac", "_blank");
  };
  const handleIconClickLinkedin = () => {
    window.open("https://www.linkedin.com/in/mustafaltintac/", "_blank");
  };
  const handleIconClickX = () => {
    window.open("https://www.x.com/mustafaltintac/", "_blank");
  };

  const handleIconClickPhone = () => {
    setIsTrue(!isTrue);
  };

  console.log(isTrue);
  return (
    <Card sx={{ display: "flex", border: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          backgroundColor: "#E7E1D8",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Muhammet Mustafa ALTINTAÇ
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Front-end Developer
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Typography component="div" variant="p" className="paragraf">
            Temel React becerilerimle heyecan verici web uygulamaları
            geliştirmek için buradayım. İçsel motivasyonum, hızlı öğrenme
            yeteneğim ve takım çalışmasına olan uyumlu kişiliğimle, kullanıcı
            dostu arayüzler oluşturma konusundaki tutkumu sizin projenizde
            değerlendirmek istiyorum. Front-end geliştirmeye olan tutkum,
            teknolojik yenilikleri takip etme arzum ve sürekli öğrenme isteğimle
            birleşerek, projenizin başarılı bir şekilde için katkı enerjik ve
            hedef odaklı bir geliştirici ekibine{" "}
          </Typography>
        </Box>

        {isTrue ? (
          <Typography textAlign={"center"} variant="h6">0553 921 37 99</Typography>
        ) : (
          <Typography></Typography>
        )}
        <Stack direction={"row"} justifyContent={"center"} spacing={4}>
          <Email sx={{ cursor: "pointer" }} onClick={handleIconClickGmail} />
          <GitHubIcon
            sx={{ cursor: "pointer" }}
            onClick={handleIconClickGithub}
          />
          <Linkedin
            sx={{ cursor: "pointer" }}
            onClick={handleIconClickLinkedin}
          />
          <Twitter sx={{ cursor: "pointer" }} onClick={handleIconClickX} />
          <PhoneIphoneIcon
            sx={{ cursor: "pointer" }}
            onClick={handleIconClickPhone}
          />
        </Stack>
      </Box>
      <CardMedia
        component="img"
        sx={{ maxWidth: 200 }}
        image="https://avatars.githubusercontent.com/u/87954653?v=4"
        alt="Live from space album cover"
      />
    </Card>
  );
}
