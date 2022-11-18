import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const Project = () => {
  const topics = [
    {
      name: "First",
      content:
        "The Gnosis mission has always been centered on building decentralized infrastructure for the Ethereum ecosystem. When Gnosis was founded in 2015, it focused on building p...",
      comFlag: true,
      assignees: "Oliver Hansen, Van Henry, April Tucker, Ralph Hubbard",
      duedate: "2023/1/30",
    },
    {
      name: "Second",
      content:
        "The Gnosis mission has always been centered on building decentralized infrastructure for the Ethereum ecosystem. When Gnosis was founded in 2015, it focused on building p...",
      comFlag: true,
      assignees: "Oliver Hansen, Van Henry, April Tucker, Ralph Hubbard",
      duedate: "2023/1/30",
    },
    {
      name: "Third",
      content:
        "The Gnosis mission has always been centered on building ecosystem. When Gnosis was founded in 2015, it focused on building p...",
      comFlag: true,
      assignees: "Oliver Hansen, Van Henry, April Tucker, Ralph Hubbard",
      duedate: "2023/1/30",
    },
  ];
  const projects = [
    { name: "First One Project", topic: topics },
    { name: "Second One Project", topic: topics },
    { name: "Third One Project", topic: topics },
  ];

  const [flag] = useState(true);

  return (
    <div className="flex justify-center poppin-font">
      <div className="max-w-[1024px] w-[100%] rounded border-2 p-[20px]">
        {projects.map((project, index) => (
          <div key={index} className="mb-[30px]">
            <p className="text-[25px] font-serif">{project.name}</p>
            {project.topic.map((topic, index) => (
              <div
                className="flex border-[1px] rounded p-[25px] mb-[5px]"
                key={index}
              >
                <span className="flex-none w-[100px] font-serif text-[20px]">
                  {topic.name}
                </span>
                <div>
                  <div className="flex justify-between font-serif mb-[10px] items-center">
                    <div className="flex">
                      <p>assignees :</p>
                      <p>{topic.assignees}</p>
                    </div>
                    <div className="flex items-center">
                      <p>due date :</p>
                      <p>{topic.duedate}</p>
                      <Checkbox
                        checked={flag}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                  </div>
                  <div className="bg-stone-200 p-[10px]">
                    <span className="shrink poppin-font">{topic.content}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
