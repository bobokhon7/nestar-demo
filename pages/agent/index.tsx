import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const AgentList: NextPage = () => {
  console.log("AgentList COMPONENT - PAGES ROUTER");
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>Mobile Agent</Stack>;
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className="container">Agents List</Stack>
      </div>
    );
  }
};
export default withLayoutBasic(AgentList);
