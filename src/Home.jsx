import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import "./App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import Linkedin from "@mui/icons-material/Linkedin";
import Email from "@mui/icons-material/Email";
import Twitter from "@mui/icons-material/Twitter";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

function Home() {
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
    <Box className="Border">
      <Grid container sx={{ margin: 1 }}>
        <Grid xs={12} md={6} lg={8}>
          <Box>
            <Typography variant="h5" className="baslik">
              M.Mustafa ALTINTAÇ
            </Typography>
            <Box marginTop={2} alignItems={"center"}>
              <Typography variant="p" className="paragraf">
                Temel React becerilerimle heyecan verici web uygulamaları
                geliştirmek için buradayım. İçsel motivasyonum, hızlı öğrenme
                yeteneğim ve takım çalışmasına olan uyumlu kişiliğimle,
                kullanıcı dostu arayüzler oluşturma konusundaki tutkumu sizin
                projenizde değerlendirmek istiyorum. Front-end geliştirmeye olan
                tutkum, teknolojik yenilikleri takip etme arzum ve sürekli
                öğrenme isteğimle birleşerek, projenizin başarılı bir şekilde
                 için katkı enerjik ve hedef odaklı bir geliştirici ekibine
              </Typography>
              <br />
              <br />
              {isTrue ? (
                <Typography variant="h6">0553 921 37 99</Typography>
              ) : (
                <Typography></Typography>
              )}

              <Stack direction={"row"} justifyContent={"start"} spacing={4}>
                <Email
                  sx={{ cursor: "pointer" }}
                  onClick={handleIconClickGmail}
                />
                <GitHubIcon
                  sx={{ cursor: "pointer" }}
                  onClick={handleIconClickGithub}
                />
                <Linkedin
                  sx={{ cursor: "pointer" }}
                  onClick={handleIconClickLinkedin}
                />
                <Twitter
                  sx={{ cursor: "pointer" }}
                  onClick={handleIconClickX}
                />
                <PhoneIphoneIcon
                  sx={{ cursor: "pointer" }}
                  onClick={handleIconClickPhone}
                />
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <CardMedia
            sx={{ height: "60vh", borderRadius: 60 }}
            component="img"
            image="https://avatars.githubusercontent.com/u/87954653?v=4"
            alt="green iguana"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
