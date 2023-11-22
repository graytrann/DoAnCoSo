import React, { useState } from "react";
import PitchStyles from "./Pitch.module.scss";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import PitchType from "./PitchType";
import PitchList from "./PitchList";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Pitch() {
  return (
    <div className={`${PitchStyles.pitch}`}>
      <div className={`${PitchStyles.pitch_container}`}>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <PitchType />
          </Grid>
          <Grid xs={9}>
            <PitchList />
            <div className="text-center d-flex justify-content-center mt-5">
              <Stack spacing={2}>
                <Pagination count={10} />
              </Stack>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
