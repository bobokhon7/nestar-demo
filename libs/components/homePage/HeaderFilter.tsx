import { ExpandMore } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";

const HeaderFilter = () => {
  return (
    <>
      <Stack className="search-box">
        <Stack className="select-box">
          <Box component={"div"} className="box on">
            <span>Location</span>
            <ExpandMore />
          </Box>
          <Box className="box">
            <span>7 Rooms</span>
            <ExpandMore />
          </Box>
          <Box className="box">
            <span>7 Rooms</span>
            <ExpandMore />
          </Box>
        </Stack>
        <Stack className="search-box-other">
          <Box className="advanced-filter">
            <img src="/img/icons/tune.svg" alt="" />
            <span>Advanced</span>
          </Box>
          <Box className="search-btn">
            <img src="/img/icons/search_white.svg" />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default HeaderFilter;
