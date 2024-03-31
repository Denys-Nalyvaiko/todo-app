import { useEffect, useState } from "react";

const SkeletonTaskLoader = () => {
  const [visibleTasks, setVisibleTasks]: any = useState([]);

  const createArray = (length: number) =>
    Array.from({ length }, (_, i) => i + 1);

  useEffect(() => {
    const updateVisibleTasks = () => {
      const width = window.innerWidth;
      let tasksAmount = 0;

      if (width < 990) {
        tasksAmount = 2;
      } else if (width < 1329) {
        tasksAmount = 4;
      } else {
        tasksAmount = 6;
      }

      setVisibleTasks(createArray(tasksAmount));
    };

    updateVisibleTasks();

    addEventListener("resize", updateVisibleTasks);

    return () => removeEventListener("resize", updateVisibleTasks);
  }, []);

  return (
    <ul className="tasks_grid my-4">
      {visibleTasks.map((order: number) => (
        <li key={order} className="task_item p-0 border-none">
          <div className="animate-pulse h-64 rounded-2xl border-2 border-solid bg-colorBg5 shadow-shadow border-borderColor2"></div>
        </li>
      ))}
    </ul>
  );
};

export default SkeletonTaskLoader;
