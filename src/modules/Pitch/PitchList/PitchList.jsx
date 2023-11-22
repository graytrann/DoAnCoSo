import React, { useEffect, useState } from "react";
import PitchListStyles from "./Pitch.module.scss";
import PitchItem from "../PitchItem/PitchItem";

export default function PitchList() {
  const [pitch, setPitch] = useState(null);

  useEffect(() => {
    let lstItem = [
      {
        name: "Sân Mỹ Đình 2",
        type: "Sân 7",
        status: "trống",
        address: "81 landmark",
        image:
          "https://nld.mediacdn.vn/2018/6/2/mordovia-arena-saransk-1527915860667205779137.jpg",
        price: 1000,
      },
      {
        name: "Old Trafford",
        type: "Sân 5",
        status: "bảo trì",
        address: "82 landmark",
        image:
          "https://manunitedcore.com/wp-content/uploads/2019/07/stretford-end-old-trafford-corner-flag-soccer-hdr.jpg",
        price: 2000,
      },
      {
        name: "Stanford Bridge",
        type: "Sân 5",
        status: "bảo trì",
        address: "82 landmark",
        image:
          "https://bendacgroup.tech/wp-content/uploads/2023/03/Chelsea_Bendac_2.jpg",
        price: 2000,
      },
      {
        name: "Công viên các hoàng tử",
        type: "Sân 11",
        status: "bảo trì",
        address: "82 landmark",
        image:
          "https://congtrinhthep.vn/wp-content/uploads/2018/05/dan-khong-gian-svd-san-van-dong-cong-vien-cac-hoang-tu.jpg",
        price: 2000,
      },
    ];

    setPitch(lstItem);

    // getVideoAPI()
    //   .then((result) => {
    //     setVideos(result);
    //   })
    //   .catch((error) => {});
  }, []);
  return (
    <div className={`${PitchListStyles.pitchList}`}>
      <div className={`${PitchListStyles.pitchList_container}`}>
        <PitchItem pitchs={pitch} />
      </div>
    </div>
  );
}
