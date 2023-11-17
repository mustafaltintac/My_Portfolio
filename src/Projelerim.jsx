import Kart from "./components/Kart";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

function Projelerim() {
  const [datas, setDatas] = useState([
    {
      "id": 1,
      "proje_adi": "Personel bilgi sistemi",
      "proje_resmi": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Xm8iIpusGdNiBuC9iiM9o-_3vsLC6jqWLX1D3pCNW1gBjFVxGRWh9pyawGBJIEt-HWo&usqp=CAU",
      "proje_kisa_aciklama": "Şirket personelinin COVID-19 bilgilerini içeren bir veri tabanı, ilişkisel veri tabanı prensipleri doğrultusunda tasarlanarak, bu verilere erişim sağlayan etkileyici bir web arayüzü geliştirilmiştir.",
      "proje_uzun_aciklama": "COVID-19 pandemisi sürecinde şirket, çalışanlarıyla ilgili sağlık durumu bilgilerini depolamak amacıyla bir veri tabanı oluşturmayı hedeflemektedir.\n\n- Şirkette çalışan her bir personelin (TC Kimlik No, isim, soyad, kan grubu, doğduğu şehir, pozisyon, maaş, hobileri, lisans, yüksek lisans, doktora) bilgileri depolanacaktır.\n- Her bir çalışanın hastalık bilgileri ayrıca kaydedilecektir (hastalığın adı, hastalığa yakalandığı tarih, reçetedeki ilaçlar ve dozları, semptomları).\n- COVID-19 geçiren çalışanlar için: COVID'e yakalandığı tarih, negatif döndüğü tarih, COVID öncesi belirtileri (Sağlık Bakanlığının bildirdiği semptom listesinden seçilebilenler), temaslı olduğu diğer çalışan bilgileri, aşı durumu (vurulup vurulmadığı, vurulduysa önceden vurulduğu aşılar, kronik hastalığı olup olmadığı) gibi bilgiler tutulacaktır.\n- Çalışanların haftanın hangi günleri ve saatler arasında çalıştıkları ayrıca kaydedilecektir.\n\nBu bilgiler doğrultusunda oluşturulan veritabanının özellikleri aşağıdaki gibidir: (Veritabanı için raporda ER diyagramı ve indirgenmiş tablo tasarımları olmalıdır. Rapor ayrıca kullanıcı arabirimini kullanımına yönelik bilgiler içermelidir)\n\n- Çalışanlarla ilgili tüm özellikler üzerinde sorgulamalar gerçekleştirebilecek yetenekte olmalıdır. Yeni bir çalışan ekleyebilme, var olanı silebilme ve güncelleyebilme yetenekleri bulunmalıdır.\n- Her bir çalışan için yeni hastalık ve reçete bilgileri ekleyebilmeli, güncelleyebilmeli ve gerektiğinde silebilmelidir.\n- Her bir çalışan için COVID bilgilerini ekleyebilmeli, güncelleyebilmeli ve gerektiğinde silebilmelidir.\n- Her bir çalışanın çalışma saatleri bilgilerini ekleyebilmeli, güncelleyebilmeli ve gerektiğinde silebilmelidir.\n- Eğitim durumu ile COVID geçirme arasındaki istatistiksel bilgiler çıkarılabilmelidir.\n- Elemanlar arasında en sık rastlanan üç hastalık türü rapor edilebilmeli ve bu hastalığa sahip olan elemanların listesi çıkarılabilmelidir.\n- Belirli bir şehirde doğan elemanlar arasında en sık görülen ilk üç hastalık rapor edilebilmelidir.\n- En yaygın kullanılan ilk üç ilacı kullanan elemanların COVID geçirme durumu rapor edilebilmelidir.\n- Belirli bir ilacı kullanan çalışanların COVID geçirme durumu rapor edilebilmelidir.\n- Biontech aşısı olan ve belirli bir hastalığı önceden geçirmiş olan çalışanlardan COVID’e yakalananlar listelenebilmelidir.\n- Aşı vurulma durumuna göre COVID hastalığına yakalanma oranı rapor edilebilmelidir.\n- Belirli bir kronik hastalığa göre, çalışanların COVID testinin negatife dönmesi için geçen süre rapor edilebilmelidir.\n- Kan grubuna göre COVID’e yakalanma sıklığı rapor edilebilmelidir.\n- Toplam çalışma süresi ile COVID’e yakalanma arasındaki istatistiksel bilgiler sunulabilmelidir.\n- COVID’e yakalananlar arasında görülen en sık karşılaşılan ilk 3 belirti listelenebilmelidir.\n- En fazla temas bulunan ilk 3 çalışan listelenebilmelidir.\n- Biontech ve Sinovac aşılarının etkinliği, COVID geçirme süresi göz önüne alınarak kıyaslanabilmelidir.\n- Haftasonu çalışan kişiler arasında görülen COVID miktarı rapor edilebilmelidir.\n- Son bir ay içinde en sık hasta olan ilk 10 kişinin COVID'e yakalanma durumları listelenebilmelidir.\n- Aşı vurulmayanlar arasında, en uzun süre COVID geçiren kişinin son 1 yılda geçirdiği hastalıklar ve verilen reçeteler listelenebilmelidir.",
      "github_linki": "https://github.com/mustafaltintac/Personel_Bilgi_Sistemi"
    },
    {
      "id": 2,
      "proje_adi": "My Portfolyo",
      "proje_resmi": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEkql7cgDI3boRmP0g9rWDVZ1grNa1Rz7Mw&usqp=CAU",
      "proje_kisa_aciklama": "React kullanılarak geliştirilen kişisel portföy sitesi, modern web tasarımının temel prensiplerini benimseyerek, bileşen tabanlı yapısı ve etkileşimli öğeleriyle dikkat çeker. Modern tasarım, dinamik içerik ve animasyonlar, siteyi bilgi sunma ve etkileşimli kullanıcı deneyimi açısından öne çıkarır. ",
      "proje_uzun_aciklama": "Bu proje, modern web geliştirme teknolojileri kullanılarak özenle tasarlanmıştır. Temel olarak React ve Material UI kütüphanesi kullanılarak, responsive tasarım prensiplerine uygun bir arayüz oluşturulmuştur. Bu, kullanıcıların farklı cihazlarda rahatça erişebilmelerini sağlamak adına önemlidir.\n\nProje, verilerin dinamik olarak yönetilmesi amacıyla bir API ile entegre edilmiştir. Bu, kullanıcılara siteyi daha etkileşimli ve güncel bir deneyimle sunma imkanı sağlar. Verilerin API üzerinden çekilmesi, içeriğin anlık olarak güncellenmesini mümkün kılar.\n\nTekrar etmeyen bir kod yapısı kullanılarak, proje kodları daha okunabilir ve sürdürülebilir hale getirilmiştir. Bu, geliştirme sürecini kolaylaştırır ve gelecekteki güncellemeleri daha hızlı ve sorunsuz bir şekilde eklemeyi mümkün kılar.\n\nMaterial UI kütüphanesi, kullanıcı arayüzünü görsel olarak çekici hale getirmek adına kullanılmıştır. Bu kütüphane, hazır bileşenler ve tema özellikleri sağlayarak tasarım sürecini hızlandırırken, aynı zamanda modern ve şık bir görünüm elde etmeye yardımcı olur.\n\nHer bir kart öğesi, API üzerinden çekilen verilerle dinamik olarak oluşturulmuştur. Props kullanılarak, bu veriler üstten alta taşınarak kart öğeleri oluşturulur. Bu sayede, yeni özellikler eklenmek istendiğinde sadece JSON dosyasında yapılan değişikliklerle projenin genişletilmesi kolaylaşır.\n\nSonuç olarak, proje hem teknik açıdan güçlü bir temele sahip hem de kullanıcı dostu bir arayüz sunarak, modern web geliştirmenin en iyi uygulamalarını içermektedir.",
      "github_linki": "https://github.com/mustafaltintac/Personel_Bilgi_Sistemi"
    },
    {
      "id": 3,
      "proje_adi": "Library",
      "proje_resmi": "https://media.istockphoto.com/id/1453081662/tr/foto%C4%9Fraf/bookstore-in-the-city-center-of-lisbon.webp?b=1&s=612x612&w=0&k=20&c=5ksx42sMGSzjzbFdc6KT04BG3AZEgo2AAgC9-6UZgrY=",
      "proje_kisa_aciklama": "Kişisel kütüphanenizi yönetmenize olanak tanıyan ve uygulama üzerinden kütüphanenize kitap ekleyebilir, varolan kitapları düzenleyebilir, silme veya çıkarma işlemleri gerçekleştirebileceğiniz kullanıcı dostu arayüze sahip bir web uygulamasıdır.",
      "github_linki": "https://github.com/mustafaltintac/React-101-Projects/tree/main/15-LIBRARY/library"
    },
    {
      "id": 4,
      "proje_adi": "Dijital  Sağlık Asistanı",
      "proje_resmi": "https://cdni.iconscout.com/illustration/premium/thumb/digital-health-service-9522733-7740733.png",
      "proje_kisa_aciklama": "Yatalak hastanın vital bulgularını analiz ederek anlık uyarılarla olumsuz reaksiyonlara karşı önlem alır. Aynı zamanda, hastanın tükettiği besinlerin vital bulgular üzerindeki etkilerini değerlendirir, böylece hastayı etkileyen besinleri belirler.",
      "proje_uzun_aciklama": "Bir veri tabanı, organizasyonların büyük miktarda veriyi düzenleyip depolayabildiği, veriye hızlı erişim sağlayan ve verileri güvenli bir şekilde yöneten önemli bir sistemdir. İlişkisel veri tabanları, verileri tablolar halinde düzenler, her tablo belirli bir veri türünü temsil eder ve tablolar arasında ilişkiler kurulabilir. Örneğin, bir müşteri veri tablosu ile sipariş veri tablosu arasında ilişki kurularak müşterilerin siparişleri takip edilebilir. Belge tabanlı veri tabanları ise verileri JSON veya BSON gibi belge formatlarında saklar, bu da verilerin daha esnek bir şekilde depolanmasını sağlar. Veri tabanları, karmaşık sorgular kullanarak veri analizi yapmayı mümkün kılar ve verilerin güvenliğini sağlamak için yetkilendirme ve kimlik doğrulama gibi güvenlik önlemlerini içerebilir. Veri tabanları, web uygulamaları, mobil uygulamalar, iş zekası sistemleri ve daha birçok alanda yaygın olarak kullanılır, bu da veri yönetimini ve analizini büyük ölçüde kolaylaştırır. Bu nedenle, doğru bir şekilde yapılandırılan ve etkili bir şekilde kullanılan veri tabanları, organizasyonlar için kritik bir öneme sahiptir.",
      "github_linki": "https://github.com/mustafaltintac/Personel_Bilgi_Sistemi"
    },    {
      "id": 5,
      "proje_adi": "Orhan  Sağlık Asistanı",
      "proje_resmi": "https://cdni.iconscout.com/illustration/premium/thumb/digital-health-service-9522733-7740733.png",
      "proje_kisa_aciklama": "Yatalak hastanın vital bulgularını analiz ederek anlık uyarılarla olumsuz reaksiyonlara karşı önlem alır. Aynı zamanda, hastanın tükettiği besinlerin vital bulgular üzerindeki etkilerini değerlendirir, böylece hastayı etkileyen besinleri belirler.",
      "proje_uzun_aciklama": "Bir veri tabanı, organizasyonların büyük miktarda veriyi düzenleyip depolayabildiği, veriye hızlı erişim sağlayan ve verileri güvenli bir şekilde yöneten önemli bir sistemdir. İlişkisel veri tabanları, verileri tablolar halinde düzenler, her tablo belirli bir veri türünü temsil eder ve tablolar arasında ilişkiler kurulabilir. Örneğin, bir müşteri veri tablosu ile sipariş veri tablosu arasında ilişki kurularak müşterilerin siparişleri takip edilebilir. Belge tabanlı veri tabanları ise verileri JSON veya BSON gibi belge formatlarında saklar, bu da verilerin daha esnek bir şekilde depolanmasını sağlar. Veri tabanları, karmaşık sorgular kullanarak veri analizi yapmayı mümkün kılar ve verilerin güvenliğini sağlamak için yetkilendirme ve kimlik doğrulama gibi güvenlik önlemlerini içerebilir. Veri tabanları, web uygulamaları, mobil uygulamalar, iş zekası sistemleri ve daha birçok alanda yaygın olarak kullanılır, bu da veri yönetimini ve analizini büyük ölçüde kolaylaştırır. Bu nedenle, doğru bir şekilde yapılandırılan ve etkili bir şekilde kullanılan veri tabanları, organizasyonlar için kritik bir öneme sahiptir.",
      "github_linki": "https://github.com/mustafaltintac/Personel_Bilgi_Sistemi"
    }
  ]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://github.com/mustafaltintac/My_Portfolio/blob/main/Datas/projeler.json"); // JSON dosyasının yolu
  //       setDatas(response.data.projelerim); // JSON dosyasından gelen veriyi state'e kaydet
  //       console.log(typeof(response.data.projelerim))

  //     } catch (error) {
  //       const response = await axios.get("../../Datas/projeler.json"); // JSON dosyasının yolu
  //       setDatas(response.data.projelerim); // JSON dosyasından gelen veriyi state'e kaydet
  //       console.log(typeof(response.data.projelerim))
  //       console.error("Veri çekme hatası: ", error);
  //     }
  //   };

  //   console.log(datas)

  //   fetchData(); // fetchData fonksiyonunu çağırarak veriyi çek
  // }, []); //

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
