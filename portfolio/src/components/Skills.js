import React, { useState, useEffect } from "react";
import Axios from "axios";

const Skills = () => {
  const [skill, setSkill] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(process.env.REACT_APP_SKILLS)
      .then((res) => {
        setSkill(res.data);
        setLoading(false);
      })
      .catch((err) => console.log("error fetching skills", err));
  }, []);

  return (
    <div id="skills" className="skills">
      <h3>Skills</h3>

      {!loading ? (
        <div className="ind-skills">
          {skill.map((item) => (
            <div className="my-skills" key={item.id}>
              <img src={item.img_url} alt={`${item.skills_name}_logo`} />
              <h3>{item.skills_name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Skills;
