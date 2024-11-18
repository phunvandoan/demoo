import { Visibility } from "@mui/icons-material";
import "./widgetSm.css";
import { useEffect, useState } from "react";
import axios from "axios";

function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/users/?new=true`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmYxZjAzY2RjOTNmMzlkMjc0ZDFlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNDI4NzU5NiwiZXhwIjoxNzI0NzE5NTk2fQ.AJQvOnrFd-eDYz-rpmG7HgfB2snJjI984Cp9vlFEPLM",
            },
          }
        );
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUser();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers &&
          newUsers.map((user, index) => (
            <li className="widgetSmListItem" key={index}>
              <img
                src={
                  user.profilePic
                    ? user.profilePic
                    : "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
                {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default WidgetSm;
