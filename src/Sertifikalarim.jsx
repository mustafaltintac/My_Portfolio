import Sertifika_Kart from "./components/Sertifaka_Kart";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

function Sertifikalarim () {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("../../Datas/projeler.json"); // JSON dosyasının yolu
        setDatas(response.data.sertifikalarim); // JSON dosyasından gelen veriyi state'e kaydet
      } catch (error) {
        console.error("Veri çekme hatası: ", error);
      }
    };

    fetchData(); // fetchData fonksiyonunu çağırarak veriyi çek
  }, []); //

  console.log("sertifikalarim çalisiyor")
  return (
    <Grid container spacing={2} justifyContent={"center"}>
      {datas.map((data) => (
        <Sertifika_Kart 
          sertifika_adi={data.sertifika_adi}
          sertifika_resim_linki={data.sertifika_resim_linki}
          sertifika_linki={data.sertifika_linki}
          sertifika_kurumu={data.sertifika_kurumu}
          key={data.id}
        />
      ))}
    </Grid>
  );
}

export default Sertifikalarim;
