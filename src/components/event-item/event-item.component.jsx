import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useNavigate } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function EventItemCard({
  eventName,
  eventID,
  eventDate,
  eventShortDescription,
  imgURL,
  eventCategory,
}) {
  const navigate = useNavigate();

  const goToEventHandler = () => {
    navigate(`/events/${eventCategory}/${eventID}`);
  };

  return (
    <Card sx={{ maxWidth: "270px", minWidth: "270px" }}>
      <CardHeader
        title={eventName}
        subheader={eventDate}
        onClick={goToEventHandler}
        style={{ cursor: "pointer" }}
      />
      <CardMedia
        component="img"
        height="194"
        image={imgURL}
        alt={eventShortDescription ?? "Event Picture"}
        onClick={goToEventHandler}
        style={{ cursor: "pointer" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {eventShortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
