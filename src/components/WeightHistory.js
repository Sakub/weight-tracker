import { useState, useContext } from "react";
import useLongPress from "../hooks/useLongPress";
import "../views/css/Dashboard.css";

import WeightContext from "../contexts/WeightContext";

import DeleteEntryModal from "./DeleteEntryModal";

const WeightHistory = () => {
  const weightHistory = useContext(WeightContext);
  const entryLongPress = useLongPress(() => setDeleteEntryModalVisible(true));
  const [deleteEntryModalVisible, setDeleteEntryModalVisible] = useState(false);

  const closeModal = () => setDeleteEntryModalVisible(false);

  const getWeightDifference = (current, next) => {
    let difference = current - next;
    if (difference === 0) return;

    difference = difference > 0 ? `+${difference}kg` : `${difference}kg`;

    return difference;
  };

  return (
    <div className="view__weightHistory fadeIn">
      {deleteEntryModalVisible && <DeleteEntryModal closeModal={closeModal} />}
      <div className="scrollable scrollable-y">
        {weightHistory
          .sort((a, b) => b.day - a.day)
          .map((entry, index, array) => (
            <div
              className={"view__weightEntry"}
              key={entry.day}
              {...entryLongPress}
            >
              <div className="weightEntry__date">
                <p className="date__day text-bold">{entry.day}</p>
                <p className="date__weekDay">{entry.weekDay}</p>
              </div>
              <div className="weightEntry__rightSection">
                <p className="weightEntry__month">{entry.month}</p>
                <p className="weightEntry__weight text-bold">
                  {entry.weight}kg{" "}
                  {array[index + 1] && (
                    <span className={"text-regular"}>
                      {getWeightDifference(
                        array[index].weight,
                        array[index + 1].weight
                      )}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WeightHistory;
