import * as React from "react";
import { Box } from "@mui/material";
import axios from "axios";
import { useState,useEffect } from "react";
import Yetenek_Kart from "./Yetenek_Kart";



function Yeteneklerim() {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("../../Datas/projeler.json"); // JSON dosyasının yolu
        setDatas(response.data.yeteneklerim); // JSON dosyasından gelen veriyi state'e kaydet
      } catch (error) {
        const response = await axios.get(""); // JSON dosyasının yolu

        console.error("Veri çekme hatası: ", error);
      }
    };

    fetchData(); // fetchData fonksiyonunu çağırarak veriyi çek
  }, []); //

  return (
    <Box>
         {datas.map((data) => (
      <Yetenek_Kart 
        dil={data.dil}
        icon={data.icon}
        key={data.id}
      />
    ))}
    </Box>
  );
}

export default Yeteneklerim;
