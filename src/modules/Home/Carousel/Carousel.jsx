import React from "react";
import CarouselStyles from "./Carousel.module.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function Carousel() {
  const [loaiSan, setLoaiSan] = React.useState("");

  const handleChange = (event) => {
    setLoaiSan(event.target.value);
  };
  console.log(loaiSan);
  return (
    <div className={`${CarouselStyles.carousel}`}>
      <div className={`${CarouselStyles.carousel_container}`}>
        <div className={`${CarouselStyles.carousel_container_bg}`}></div>
        <div className={`${CarouselStyles.carousel_container_player}`}>
          <img src="./img/newFile-3.png" />
        </div>
        <div className={`${CarouselStyles.carousel_container_search}`}>
          <div
            className={`${CarouselStyles.carousel_container_search_container}`}
          >
            <h1>
              <span className="text-danger">FIND</span> YOUR{" "}
              <span className="text-danger">STADIUM</span>
            </h1>
            <p className="text-secondary">
              <em>Tìm kiếm sân chơi thể thao của riêng bạn</em>
            </p>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sân</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={loaiSan}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={5}>Sân 5</MenuItem>
                  <MenuItem value={7}>Sân 7</MenuItem>
                  <MenuItem value={11}>Sân 11</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
