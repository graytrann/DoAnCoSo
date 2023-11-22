import React, { useEffect, useState } from "react";
import DetailStyles from "./Detail.module.scss";
import Loading from "../../components/Loading";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import MapIcon from "@mui/icons-material/Map";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
export default function Detail() {
  // MUI SETUP
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    border: "1px solid black",
    backgroundColor: "#dc0813",
    "&:hover": {
      backgroundColor: "#dc0813",
    },
  }));

  // COMPONENTS SETUP
  const [pitchDetail, setPitchDetail] = useState(null);
  const [pitchs, setPitchs] = useState(null);

  useEffect(() => {
    let item = {
      name: "Sân Mỹ Đình 2",
      type: "Sân 7",
      status: "trống",
      address: "81 landmark",
      image:
        "https://nld.mediacdn.vn/2018/6/2/mordovia-arena-saransk-1527915860667205779137.jpg",
      price: 1000,
    };

    setPitchDetail(item);

    // let lstItem = [{ video_id: 1, video_name: "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI", channelDetail: "", marginTop: " ", thumbnail: "https://i.ytimg.com/vi/QU9c0053UAU/hq720.jpg", channelId: 1, channelTitle: "abc", channelId: 1, channelTitle: "JavaScript Mastery" },
    // { video_id: 2, video_name: "The movies Iron man 4: 0.1 Hours", channelDetail: "", marginTop: " ", thumbnail: "https://i.ytimg.com/vi/t86sKsR4pnk/hq720.jpg", channelId: 1, channelTitle: "abc", channelId: 1, channelTitle: "JavaScript Mastery" }
    // ];
    // setVideos(lstItem);
  }, []);

  if (!pitchDetail) return <Loading />;
  return (
    <div className={`${DetailStyles.detail}`}>
      <div className={`${DetailStyles.detail_container}`}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12} md={8}>
              <h2>{pitchDetail.name}</h2>
              <div className={`${DetailStyles.detail_container_image}`}>
                <img src={pitchDetail.image} alt={pitchDetail.name} />
              </div>
              <div
                className={`${DetailStyles.detail_container_description} mt-4`}
              >
                <h2 style={{ backgroundColor: "gray" }}>MÔ TẢ SÂN</h2>
                <h4>
                  Loại sân:{" "}
                  <span style={{ color: "#dc0813" }}>{pitchDetail.type}</span>
                </h4>
                <p>
                  Sân bóng {pitchDetail.name} là 1 sân bóng lâu đời, mới được
                  chủ đầu tư chỉnh trang, nâng cấp và đang là 1 trong những sân
                  bóng đẹp nhất sân SOCCERTIME
                </p>
                <h4>Cơ sở vật chất và tiện ích tại sân</h4>
                <ul>
                  <li>
                    <p>Địa điểm thú vị để thi đấu</p>
                  </li>
                  <li>
                    <p>
                      Có hệ thống đèn chiếu sáng hiện đại, đáp ứng nhu cầu thi
                      đấu ban đêm
                    </p>
                  </li>
                  <li>
                    <p>Lưới chăn bóng giúp cầu thủ đỡ đi nhặt bóng</p>
                  </li>
                  <li>
                    <p>Có thùng nước uống giải khát</p>
                  </li>
                  <li>
                    <p>Có khán đài để cổ vũ</p>
                  </li>
                  <li>
                    <p>Cho thuê áo đấu tập</p>
                  </li>
                  <li>
                    <p>Cho thuê trọng tài</p>
                  </li>
                </ul>
                <div className="d-flex">
                  <h4>Giá Thuê Sân</h4>
                  <Button
                    className="ms-3"
                    aria-describedby={id}
                    variant="contained"
                    style={{ backgroundColor: "#dc0813" }}
                    onClick={handleClick}
                  >
                    CLICK ĐỂ XEM
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      {pitchDetail.price.toLocaleString()} $
                    </Typography>
                  </Popover>
                </div>
              </div>
            </Grid>
            <Grid xs={12} md={4}>
              <div className={`${DetailStyles.book}`}>
                <div className={`${DetailStyles.book_container} text-center`}>
                  <h4>Địa chỉ</h4>
                  <h2>{pitchDetail.address}</h2>
                  <div className="text-center">
                    <Stack
                      direction="row"
                      spacing={2}
                      className="d-flex justify-content-center"
                    >
                      <ColorButton
                        variant="outlined"
                        startIcon={<PriceCheckIcon />}
                      >
                        ĐẶT SÂN
                      </ColorButton>
                      <ColorButton variant="contained" endIcon={<MapIcon />}>
                        XEM BẢN ĐỒ
                      </ColorButton>
                    </Stack>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
