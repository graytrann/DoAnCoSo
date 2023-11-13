import React from "react";
import FooterStyles from "./Footer.module.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import StadiumIcon from "@mui/icons-material/Stadium";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: 0,
}));
export default function Footer() {
  return (
    <div
      className={`${FooterStyles.footer}`}
      style={{ backgroundColor: "#dc0813" }}
    >
      <div className={`${FooterStyles.footer_container}`}>
        <Box sx={{ flexGrow: 1, boxShadow: 0 }}>
          <Grid container spacing={2}>
            <Grid xs={12} md={3}>
              <Item
                sx={{ boxShadow: 0, backgroundColor: "transparent" }}
                className="d-flex align-items-center"
              >
                <StadiumIcon fontSize="large" />
                <h2 className="m-0 ms-2" style={{ color: "white" }}>
                  SOCCERTIME
                </h2>
              </Item>
            </Grid>
            <Grid xs={12} md={3}>
              <Item sx={{ boxShadow: 0, backgroundColor: "transparent" }}>
                <h5 style={{ color: "white", fontWeight: "bold" }}>
                  Quick Links
                </h5>
                <ul className={`${FooterStyles.ul}`} style={{ color: "white" }}>
                  <li>
                    <a style={{ cursor: "pointer" }}>Về chúng tôi</a>
                  </li>
                  <li>
                    <a style={{ cursor: "pointer" }}>Đăng kí hợp tác</a>
                  </li>
                  <li>
                    <a style={{ cursor: "pointer" }}>Blog tin tức</a>
                  </li>
                  <li>
                    <a style={{ cursor: "pointer" }}>Site maps</a>
                  </li>
                </ul>
              </Item>
            </Grid>
            <Grid xs={12} md={3}>
              <Item sx={{ boxShadow: 0, backgroundColor: "transparent" }}>
                <h5 style={{ color: "white", fontWeight: "bold" }}>
                  THÔNG TIN LIÊN HỆ
                </h5>
                <ul className={`${FooterStyles.ul}`} style={{ color: "white" }}>
                  <li>
                    <a style={{ cursor: "pointer" }}>Địa chỉ : Landmark 81</a>
                  </li>
                  <li>
                    <a style={{ cursor: "pointer" }}>Trần Khải Phong</a>
                  </li>
                  <li>
                    <a style={{ cursor: "pointer" }}>Cao Bảo Khánh</a>
                  </li>
                  <li>
                    <a style={{ cursor: "pointer" }}>Lê Nguyễn Duy Khánh</a>
                  </li>
                </ul>
              </Item>
            </Grid>
            <Grid xs={12} md={3}>
              <Item sx={{ boxShadow: 0, backgroundColor: "transparent" }}>
                <h5 style={{ color: "white", fontWeight: "bold" }}>BẢN ĐỒ</h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.851937952686!2d106.7218215!3d10.7949932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sT%C3%B2a%20nh%C3%A0%20The%20Landmark%2081!5e0!3m2!1svi!2s!4v1699885262063!5m2!1svi!2s"
                  width="300"
                  height="250"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
