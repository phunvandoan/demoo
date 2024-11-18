import { useEffect, useMemo, useState } from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
// import { userData } from "../../dummyData";
import "./home.css";
import axios from "axios";

function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);
  console.log(userStats);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/users/stats`, {
          headers: {
            token:
              "Breaker eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmYxZjAzY2RjOTNmMzlkMjc0ZDFlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNDMyMDc5MCwiZXhwIjoxNzI0NzUyNzkwfQ.3pfymzonmbOCHaGO38t84m5vDNKntO5t9q05czva_IY",
          },
        });
        const statsList = res.data.reverse();
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo></FeaturedInfo>
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="New User"
      ></Chart>
      <div className="homeWidgets">
        <WidgetSm></WidgetSm>
        <WidgetLg></WidgetLg>
      </div>
    </div>
  );
}

export default Home;
