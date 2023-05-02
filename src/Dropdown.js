// import useState hooks
import { useState } from "react";

const Dropdown = () => {
  const [isActive, setActive] = useState(false);
  //Array element
  const [list] = useState(["MongoDB", "Express", "React", "Node"]);
  const [value, setValue] = useState("");
  //Mouse Click Handle element
  const onClickHandeler = (e) => {
    setValue(e.target.textContent);
    setActive(false);
  };
  //Mouse Hover element handler
  const onMouseHover = () => {
    setActive(true);
  };
  //Traversing the array
  const results = list.map((result, index) => {
    return (
      <a onClick={onClickHandeler} key={index}>
        {result}
      </a>
    );
  });

  return (
    //Main parent component
    <div className="dropdown">
      {/* Coding Ninjas text comming from heare  */}
      <h1 className="codingNinjas">
        <u>Coding Ninjas DropDown Project</u>
      </h1>
      {/* MernStack img class  */}
      <div className="mernstack">
        <img
          src="https://miro.medium.com/v2/resize:fit:678/1*l2tlJsFNg2tH6QizegKkqA.png"
          alt="MERN STACK"
        />
      </div>
      {/* Sellecting technolog text comming from here  */}
      <h2>Sellect your Technology from Drop-down</h2>
      <h3 className="output">Output: {value}</h3>
      <div className="buttonDown">
        <button className="dropbtn" onMouseEnter={onMouseHover}>
          Select
        </button>
      </div>
      {/* displaing frunctionality  */}
      <div
        className="dropdown-content"
        style={{ display: `${isActive ? "block" : "none"}` }}
      >
        {results}
      </div>
    </div>
  );
};

export default Dropdown;
