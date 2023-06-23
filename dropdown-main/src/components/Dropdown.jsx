import React, { useState } from "react";

import styles from "./Dropdown.module.css";

const Dropdown = (props) => {
  // Destructuring props
  const { options } = props;
  // State that shows the selected options
  const [selected, setSelected] = useState("");
  // State that shows and hides the dropdown
  const [display, setDisplay] = useState(false);

  const showSelectedOption = (event) => {
    // setting the selected item value for the selected state
    setSelected(event.target.innerText);
    // setting the display value of the state to false
    setDisplay(false);
  };

  // for click handle
  const toggleDropdown = () => {
    setDisplay(!display);
  };

  let items = options.map((item) => {
    return <li onClick={showSelectedOption}>{item}</li>;
  });

  return (
    <div>
      <div className={styles.dropdown}>
      {/* Dropdown box */}
      <div
        onMouseOver={() => setDisplay(true)}
        className={styles["dropdown-menu"]}
        onClick={toggleDropdown}
      >
        {selected !== "" ? (
          <span>{selected}</span>
        ) : (
          <span>Select an option</span>
        )}

        {display ? (
          <i class="fa-solid fa-caret-up"></i>
        ) : (
          <i class="fa-solid fa-caret-down"></i>
        )}
      </div>
      {display ? <ul className={styles["menu-items"]}>{items}</ul> : ""}
      <h3 className={styles["selected-option"]}>Selected Option: {selected}</h3>
     </div>
    </div>
  );
};

export default Dropdown;



