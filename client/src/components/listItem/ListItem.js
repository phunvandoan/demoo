import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listItem.scss";
import { memo, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListItem({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isShowVideoDemo, setIsShowVideoDemo] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/movies/find/${item}`,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  const handleMouseEnterOfFilm = () => {
    setIsHovered(true);
    setIsShowVideoDemo(true);
  };

  const handleMouseLeaveOfFilm = () => {
    setIsHovered(false);
    setIsShowVideoDemo(false);
  };

  return (
    <Link to={{ pathname: "/watch" }} state={{ movie }} className="link">
      <div
        className="listItem"
        // style={{ left: isHovered && index * 360 - 50 + index * 2.5 }}
        onMouseEnter={handleMouseEnterOfFilm}
        onMouseLeave={handleMouseLeaveOfFilm}
      >
        <img
          src={
            movie
              ? movie.imgSm
              : "https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
          }
          alt=""
          style={{ display: isShowVideoDemo && "none" }}
        />
        {isHovered && (
          <>
            {/* <video controls autoPlay={true} loop>
            <source
              src="https://www.youtube.com/embed/DIcaXui8AXs?si=pqoFp9sKTbA7YshG"
              //  src={movie.trailer}
              type="video/mp4"
            />
            {movie.trailer}
          </video> */}
            <iframe
              width="560"
              height="315"
              src={
                movie
                  ? movie.trailer
                  : "https://www.youtube.com/embed/bON-KPiiNCk?si=dX8ZJOim9HzeHEFe"
              }
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow />
                <Add></Add>
                <ThumbUpAltOutlined className="icon"></ThumbUpAltOutlined>
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie ? movie.duration : ""}</span>
                <span className="limit">+ {movie && movie.limit}</span>
                <span>{movie && movie.year}</span>
              </div>
              <div className="desc">{movie && movie.desc}</div>
              <div className="genre">{movie && movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default memo(ListItem);
