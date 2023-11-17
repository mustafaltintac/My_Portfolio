import Kart from "./components/Kart";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

function Projelerim() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("../../Datas/projeler.json"); // JSON dosyasının yolu
        setDatas(response.data.projelerim); // JSON dosyasından gelen veriyi state'e kaydet
      } catch (error) {
        console.error("Veri çekme hatası: ", error);
      }
    };

    fetchData(); // fetchData fonksiyonunu çağırarak veriyi çek
  }, []); //

  return (
    <Grid container spacing={2} justifyContent={"center"}>
      {datas.map((data) => (
        <Kart 
          proje_adi={data.proje_adi}
          proje_uzun_aciklama={data.proje_uzun_aciklama}
          proje_kisa_aciklama={data.proje_kisa_aciklama}
          proje_resmi={data.proje_resmi}
          github_linki={data.github_linki}
          key={data.id}
        />
      ))}
    </Grid>
  );
}

export default Projelerim;
