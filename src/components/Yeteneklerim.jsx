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
        const response = await axios.get("http://localhost:3000/yeteneklerim"); // JSON dosyasının yolu
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
