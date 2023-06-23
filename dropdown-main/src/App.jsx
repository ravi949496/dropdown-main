import styles from "./App.module.css";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";



function App() {
  const dropdownOptions = ["Yes", "No", "Maybe", "Never", "Always"];

  return (
    <div>
      {/* here Header Part Of Page */}
      <Header/>
      <div className={styles.app}>
        <h1>Are You Going To Use this Stylish Dropdown ?</h1>
        {/* here dropdown component, will recieve the dropdownOptions as props */}
        <Dropdown options={dropdownOptions} />
      </div>
    </div>
  );
}

export default App;
