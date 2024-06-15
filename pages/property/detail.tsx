import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import React from "react";

const Propertydetail = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>Mobile Detail</Stack>;
  } else {
    return (
      <>
        <Stack sx={{ background: "#81c784" }}> Header Basic</Stack>
        <Container>Property Detail</Container>
        <Stack sx={{ bgcolor: "#a1887f" }}>Footer</Stack>
      </>
    );
  }
};

export default Propertydetail;
