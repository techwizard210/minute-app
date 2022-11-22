import React from "react";

import Card from "../components/Card";

const Project = () => {
  const tasks = [
    {
      no: "1.1",
      title: "GENERAL",
      content:
        "The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.",
      assignee: "Alle",
      duedate: "11/2/2022",
      status: "determination",
    },
    {
      no: "1.2",
      title: "MEETINGS",
      content:
        "In this context, the GSG announces that no construction activities will take place after a) submission of the building permit and b) completion of all active and planned demolition and construction preparation measures and the tenant conversions to the BVM.",
      assignee: "GSG",
      duedate: "11/18/2022",
      status: "done",
    },
    {
      no: "1.3",
      title: "PROJECT | SUPERIOR",
      content:
        "The client, GSG, decides to stop the project completely on September 13, 2022. BZ informs the client about the associated effects and, in particular, risks in a decision proposal BZ-EV027 on September 22nd, 2022 and September 27th, 2022.",
      assignee: "Alle",
      duedate: "11/22/2022",
      status: "determination",
    },
    {
      no: "to1.3",
      title: "",
      content:
        "In this context, the GSG announces that no construction activities will take place after a) submission of the building permit and b) completion of all active and planned demolition and construction preparation measures and the tenant conversions to the BVM.",
      assignee: "THA",
      duedate: "11/18/2022",
      status: "done",
    },
    {
      no: "to1.3",
      title: "",
      content:
        "BZ, Mr. Wenzel, once again draws the GSG's attention to the effects of the complete project stop decision of September 13th, 2022 and clearly emphasizes the recommendation of a complete conclusion of the LPH5 and continuation of the essential tender LPH6.",
      assignee: "Alle",
      duedate: "11/18/2022",
      status: "done",
    },
  ];

  const tasksTwo = [
    {
      no: "2.1",
      title: "GENERAL",
      content:
        "The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.The Bauherrin Jour Fixe takes place as an online video conference There are no comments on the previous BH-JF.",
      assignee: "THA",
      duedate: "11/2/2022",
      status: "determination",
    },
    {
      no: "2.2",
      title: "MEETINGS",
      content:
        "In this context, the GSG announces that no construction activities will take place after a) submission of the building permit and b) completion of all active and planned demolition and construction preparation measures and the tenant conversions to the BVM.",
      assignee: "GSG",
      duedate: "11/18/2022",
      status: "done",
    },
    {
      no: "2.3",
      title: "PROJECT | SUPERIOR",
      content:
        "The client, GSG, decides to stop the project completely on September 13, 2022. BZ informs the client about the associated effects and, in particular, risks in a decision proposal BZ-EV027 on September 22nd, 2022 and September 27th, 2022.",
      assignee: "Alle",
      duedate: "11/22/2022",
      status: "determination",
    },
    {
      no: "to2.3",
      title: "",
      content:
        "In this context, the GSG announces that no construction activities will take place after a) submission of the building permit and b) completion of all active and planned demolition and construction preparation measures and the tenant conversions to the BVM.",
      assignee: "THA",
      duedate: "11/18/2022",
      status: "done",
    },
    {
      no: "to2.3",
      title: "",
      content:
        "BZ, Mr. Wenzel, once again draws the GSG's attention to the effects of the complete project stop decision of September 13th, 2022 and clearly emphasizes the recommendation of a complete conclusion of the LPH5 and continuation of the essential tender LPH6.",
      assignee: "GSG",
      duedate: "11/18/2022",
      status: "done",
    },
  ];

  return (
    <div className="flex justify-center poppin-font bg-[#e8eaed]">
      <div className="max-w-[1024px] w-[100%] p-[20px] font-serif shadow-md bg-[#f1f3f4]">
        <div className="mb-[20px]">
          <div className="bg-red-300 p-[6px] rounded">
            <p className="font-bold">1. GENERAL / ORGANIZATION</p>
          </div>
          {tasks.map((task, index) => (
            <Card
              no={task.no}
              title={task.title}
              content={task.content}
              assignee={task.assignee}
              duedate={task.duedate}
              status={task.status}
              key={index}
            />
          ))}
        </div>
        <div className="mb-[20px]">
          <div className="bg-teal-500 p-[6px] rounded">
            <p className="font-bold">2. PLANNING</p>
          </div>
          {tasksTwo.map((task, index) => (
            <Card
              no={task.no}
              title={task.title}
              content={task.content}
              assignee={task.assignee}
              duedate={task.duedate}
              status={task.status}
              key={index}
            />
          ))}
        </div>
        <div className="mb-[20px]">
          <div className="bg-blue-500 p-[6px] rounded">
            <p className="font-bold">3. EXECUTION</p>
          </div>
        </div>
        <div className="mb-[20px]">
          <div className="bg-violet-500 p-[6px] rounded">
            <p className="font-bold">4. REQUIREMENTS | QUALITIES</p>
          </div>
        </div>
        <div className="mb-[20px]">
          <div className="bg-pink-200 p-[6px] rounded">
            <p className="font-bold">5. EVENTS</p>
          </div>
        </div>
        <div className="mb-[20px]">
          <div className="bg-yellow-500 p-[6px] rounded">
            <p className="font-bold">6. COSTS</p>
          </div>
        </div>
        <div className="mb-[20px]">
          <div className="bg-lime-200 p-[6px] rounded">
            <p className="font-bold">7. CONTRACTS | FORGIVED</p>
          </div>
        </div>
        <div className="mb-[20px]">
          <div className="bg-stone-500 p-[6px] rounded">
            <p className="font-bold">8. OTHER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
