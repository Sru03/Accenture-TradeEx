import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";

const MarketPlace = () => {
  const [jobs, setJobs] = useState([
    {
      url: "https://www.shutterstock.com/image-photo/male-plumbers-hand-repairing-sink-pipe-1149190532",
      title: "plumbing",
      location: "Auckland",
      price: 120,
    },
    {
      url: "https://www.google.com/search?q=carpentry&rlz=1C1GCEA_enNZ1016NZ1016&tbm=isch&source=iu&ictx=1&vet=1&fir=YY-lpxGTA5vXIM%252CSecyRAIewTS5iM%252C%252Fg%252F1228lnvx%253BKtdvBpVq-3QqzM%252CHhHV8HfmL-yS6M%252C_%253B4UGa74B59wIN1M%252Ch_mU0IAty5VZkM%252C_%253BuwSv6mV3cVwBxM%252C9WKxmJwnCCLR_M%252C_%253BviVSWrRfA-tayM%252C4g29-HuGI_IGgM%252C_&usg=AI4_-kQO_tMFrEB7fN9ID5EwMZ8LWfLv1w&sa=X&ved=2ahUKEwjJmeeAwuX_AhUHl1YBHfRtC5kQ_B16BAhOEAE#imgrc=YY-lpxGTA5vXIM",
      title: "carpentry",
      location: "Auckland",
      price: 150,
    },
    {
      url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.ctfassets.net%2Fj001bqnk84dk%2F3D2HCE6okFV6JjBcLOEcWO%2F1dc7ed1e1214a76ae67f19cb7a90bff8%2Fhowto-interior-problemsolver-painter.png%3Ffm%3Dwebp&tbnid=CFFCuIvclENUdM&vet=12ahUKEwj7zfWNwuX_AhUUoukKHTGaCEMQMygTegUIARCMAg..i&imgrefurl=https%3A%2F%2Fwww.dulux.com.au%2Fhow-to%2Fgeneral%2Fhow-to-use-a-paint-brush%2F&docid=MKoOIOinPTzqEM&w=597&h=480&q=painting%20walls&ved=2ahUKEwj7zfWNwuX_AhUUoukKHTGaCEMQMygTegUIARCMAg",
      title: "painting",
      location: "Christchurch",
      price: 120,
    },
    {
      url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fshutterstock%2Fphotos%2F274860569%2Fdisplay_1500%2Fstock-photo-interior-of-abandoned-and-ruined-house-with-broken-wall-274860569.jpg&tbnid=r8eLIvDMXxGKOM&vet=12ahUKEwit6IumwuX_AhXwomMGHfbKBQgQMygBegUIARDnAQ..i&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Finterior-abandoned-ruined-house-broken-wall-274860569&docid=E4KMB8mK6K2_oM&w=1500&h=1101&q=broken%20wall%20in%20the%20house%20&ved=2ahUKEwit6IumwuX_AhXwomMGHfbKBQgQMygBegUIARDnAQ",
      title: "Broken wall",
      location: "Wellington",
      price: 500,
    },
    {
      url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fjumanji.livspace-cdn.com%2Fmagazine%2Fwp-content%2Fuploads%2Fsites%2F3%2F2021%2F07%2F21103428%2FKitchen-Modular-Design-Resale-Value.png&tbnid=SEEYf5a7uoF9BM&vet=12ahUKEwjypp-zwuX_AhW96DgGHS7sBRwQMygFegUIARDdAQ..i&imgrefurl=https%3A%2F%2Fwww.livspace.com%2Fsg%2Fmagazine%2Fkitchen-modular-design&docid=z7vGGgUd-MT1eM&w=1500&h=1000&q=kitchen%20fix%20&ved=2ahUKEwjypp-zwuX_AhW96DgGHS7sBRwQMygFegUIARDdAQ",
      title: "Kitchen fix",
      location: "Auckland",
      price: 300,
    },
    {
        url: "https://www.shutterstock.com/image-photo/male-plumbers-hand-repairing-sink-pipe-1149190532",
        title: "plumbing",
        location: "Auckland",
        price: 120,
      },
      {
        url: "https://www.google.com/search?q=carpentry&rlz=1C1GCEA_enNZ1016NZ1016&tbm=isch&source=iu&ictx=1&vet=1&fir=YY-lpxGTA5vXIM%252CSecyRAIewTS5iM%252C%252Fg%252F1228lnvx%253BKtdvBpVq-3QqzM%252CHhHV8HfmL-yS6M%252C_%253B4UGa74B59wIN1M%252Ch_mU0IAty5VZkM%252C_%253BuwSv6mV3cVwBxM%252C9WKxmJwnCCLR_M%252C_%253BviVSWrRfA-tayM%252C4g29-HuGI_IGgM%252C_&usg=AI4_-kQO_tMFrEB7fN9ID5EwMZ8LWfLv1w&sa=X&ved=2ahUKEwjJmeeAwuX_AhUHl1YBHfRtC5kQ_B16BAhOEAE#imgrc=YY-lpxGTA5vXIM",
        title: "carpentry",
        location: "Auckland",
        price: 150,
      },
      {
        url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.ctfassets.net%2Fj001bqnk84dk%2F3D2HCE6okFV6JjBcLOEcWO%2F1dc7ed1e1214a76ae67f19cb7a90bff8%2Fhowto-interior-problemsolver-painter.png%3Ffm%3Dwebp&tbnid=CFFCuIvclENUdM&vet=12ahUKEwj7zfWNwuX_AhUUoukKHTGaCEMQMygTegUIARCMAg..i&imgrefurl=https%3A%2F%2Fwww.dulux.com.au%2Fhow-to%2Fgeneral%2Fhow-to-use-a-paint-brush%2F&docid=MKoOIOinPTzqEM&w=597&h=480&q=painting%20walls&ved=2ahUKEwj7zfWNwuX_AhUUoukKHTGaCEMQMygTegUIARCMAg",
        title: "painting",
        location: "Christchurch",
        price: 120,
      }
  ]);

  return (
    <div>
      <p>Market Place</p>
      <SearchBar />
      <JobList jobs={jobs} />
    </div>
  );
};

export default MarketPlace;
