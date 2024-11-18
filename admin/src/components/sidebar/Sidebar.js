import {
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  ListAlt,
  MailOutline,
  PermIdentity,
  PlayCircle,
  Report,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import { useEffect, useState } from "react";

function Sidebar() {
  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActive("home");
        break;
      case "/users":
        setActive("users");
        break;
      case "/movies":
        setActive("movies");
        break;
      case "/lists":
        setActive("lists");
        break;
      case "/reports":
        setActive("reports");
        break;
      case "/mail":
        setActive("mail");
        break;
      case "/feedback":
        setActive("feedback");
        break;
      case "/messages":
        setActive("messages");
        break;
      case "/manage":
        setActive("manage");
        break;
      case "/analytics":
        setActive("analytics");
        break;
      case "/staff-reports":
        setActive("staff-reports");
        break;
      default:
        setActive("");
        break;
    }
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li
                className={`sidebarListItem ${
                  active === "home" ? "active" : ""
                }`}
              >
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li
              className={`sidebarListItem ${
                active === "analytics" ? "active" : ""
              }`}
            >
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li
              className={`sidebarListItem ${
                active === "sales" ? "active" : ""
              }`}
            >
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li
                className={`sidebarListItem ${
                  active === "users" ? "active" : ""
                }`}
              >
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li
                className={`sidebarListItem ${
                  active === "movies" ? "active" : ""
                }`}
              >
                <PlayCircle className="sidebarIcon" />
                Movies
              </li>
            </Link>

            <Link to="/lists" className="link">
              <li
                className={`sidebarListItem ${
                  active === "lists" ? "active" : ""
                }`}
              >
                <ListAlt className="sidebarIcon" />
                lists
              </li>
            </Link>

            <li
              className={`sidebarListItem ${
                active === "reports" ? "active" : ""
              }`}
            >
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li
              className={`sidebarListItem ${active === "mail" ? "active" : ""}`}
            >
              <MailOutline className="sidebarIcon" />
              Mail
            </li>

            <li
              className={`sidebarListItem ${
                active === "feedback" ? "active" : ""
              }`}
            >
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>

            <li
              className={`sidebarListItem ${
                active === "messages" ? "active" : ""
              }`}
            >
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li
              className={`sidebarListItem ${
                active === "manage" ? "active" : ""
              }`}
            >
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>

            <li
              className={`sidebarListItem ${
                active === "analytics" ? "active" : ""
              }`}
            >
              <Timeline className="sidebarIcon" />
              Analytics
            </li>

            <li
              className={`sidebarListItem ${
                active === "staff-reports" ? "active" : ""
              }`}
            >
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
