import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";

function Watch() {
  const location = useLocation();
  console.log(location.state.movie);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      {/* <video controls autoPlay={true} loop className="video">
        <source
          src="https://www.w3schools.com/tags/movie.mp4"
          type="video/mp4"
        />
      </video> */}
      <iframe
        className="video"
        src={
          location.state
            ? location.state.movie.video
            : "https://www.youtube.com/embed/bON-KPiiNCk?si=dX8ZJOim9HzeHEFe"
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Watch;
