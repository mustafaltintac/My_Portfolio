import * as React from "react";
import { Box } from "@mui/material";
import axios from "axios";
import { useState,useEffect } from "react";
import Calisma_Kart from "./Calisma_Kart";

function Calismalarim() {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/calismalarim"); // JSON dosyasının yolu
        setDatas(response.data); // JSON dosyasından gelen veriyi state'e kaydet
      } catch (error) {
        console.error("Veri çekme hatası: ", error);
      }
    };

    fetchData(); // fetchData fonksiyonunu çağırarak veriyi çek
  }, []); //

const temp_data=datas.reverse()



  return (
    <Box>
         {temp_data.map((data) => (
      <Calisma_Kart 
        sirket={data.sirket}
        pozisyon={data.pozisyon}
        gorev={data.gorev}
        tarih={data.tarih}
        icon={data.icon}
        key={data.id}
      />
    ))}
    </Box>
  );
}

export default Calismalarim;
