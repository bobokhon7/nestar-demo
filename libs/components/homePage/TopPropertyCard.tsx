import { Favorite, RemoveRedEye } from "@mui/icons-material";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";

const TopPropertyCard = () => {
  return (
    <Stack className="top-card-box">
      <Box
        className="card-img"
        style={{ backgroundImage: `url("/img/banner/types/apartment.webp")` }}
      >
        <div>$42000</div>
      </Box>
      <Box className="info">
        <strong className="title">Run Will Buildings</strong>
        <p className="desc">Seoul Gangnam Apartments</p>
        <div className="options">
          <div>
            <img src="/img/icons/bed.svg" />
            <span>3 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>7 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>250 m2</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className="bott">
          <p>Rent</p>
          <div className="view-like-box">
            <IconButton color="default">
              <RemoveRedEye />
            </IconButton>
            <Typography className="view-cnt">120</Typography>
            <IconButton color="default">
              <Favorite />
            </IconButton>
            <Typography className="view-cnt">200</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TopPropertyCard;
