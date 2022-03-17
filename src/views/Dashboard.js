import { useState } from "react";

import CurrentWeight from "../components/CurrentWeight";
import WeightChart from "../components/WeightChart";
import CurrentWeightForm from "../components/CurrentWeightForm";
import WeightHistory from "../components/WeightHistory";

import { WeightProvider } from "../contexts/WeightContext";

import "./css/Dashboard.css";

const Dashboard = () => {
  const TABS = {
    GENERAL: "general",
    HISTORY: "history",
  };

  const [username, setUsername] = useState("username");
  const [currentTab, setCurrentTab] = useState(TABS.GENERAL);

  const [weightHistory, setWeightHistory] = useState([
    {
      day: "12",
      weekDay: "Mon",
      month: "January",
      weight: 60,
    },
    {
      day: "17",
      weekDay: "Tue",
      month: "January",
      weight: 65,
    },
    {
      day: "18",
      weekDay: "Sun",
      month: "January",
      weight: 73,
    },
    {
      day: "19",
      weekDay: "Frid",
      month: "January",
      weight: 65,
    },
    {
      day: "20",
      weekDay: "Mon",
      month: "January",
      weight: 65,
    },
  ]);

  return (
    <WeightProvider value={weightHistory}>
      <div className="view view-dashboard">
        <h2 className="view__greeting">
          Hello <span className="text-accent">{username}</span>
        </h2>
        <div className="view__topSection">
          {currentTab === TABS.GENERAL ? <CurrentWeight /> : <WeightChart />}
        </div>
        <div className="view__block slideUp">
          <div className="view__tabs">
            <div
              className={`tab ${
                currentTab === TABS.GENERAL ? "tab--active" : ""
              }`}
              onClick={() => setCurrentTab(TABS.GENERAL)}
            >
              <p className="tab__name">{TABS.GENERAL}</p>
            </div>
            <div
              className={`tab ${
                currentTab === TABS.HISTORY ? "tab--active" : ""
              }`}
              onClick={() => setCurrentTab(TABS.HISTORY)}
            >
              <p className="tab__name">{TABS.HISTORY}</p>
            </div>
          </div>
          <div className="view__tabContent">
            {currentTab === TABS.GENERAL ? (
              <CurrentWeightForm />
            ) : (
              <WeightHistory />
            )}
          </div>
        </div>
      </div>
    </WeightProvider>
  );
};

export default Dashboard;
