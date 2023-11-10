import * as React from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Egitim_Kart from "./Egitim_Kart";
import { useState,useEffect } from "react";

function Egitim() {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/egitim"); // JSON dosyasının yolu
        setDatas(response.data); // JSON dosyasından gelen veriyi state'e kaydet
      } catch (error) {
        console.error("Veri çekme hatası: ", error);
      }
    };

    fetchData(); // fetchData fonksiyonunu çağırarak veriyi çek
  }, []); //

  return (
    <Box>
         {datas.map((data) => (
      <Egitim_Kart 
        okul_turu={data.okul_turu}
        okul_adi={data.okul_adi}
        bolum={data.bolum}
        derece={data.derece}
        mezuniyet_tarihi={data.mezuniyet_tarihi}
        icon={data.icon}
        key={data.id}
      />
    ))}
    </Box>
  );
}

export default Egitim;
