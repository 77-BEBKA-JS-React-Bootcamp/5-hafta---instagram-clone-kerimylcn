import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard value = "1"/>
      <Dashboard value = "2"/>
      <Dashboard value = "3"/>
      <Footer/>
    </div>
  );
}

export default App;
