import {AllRouts} from './routes/AllRouts';
import {Header, Footer, ScrollToTop} from "./components"
import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Header/>
      <AllRouts/>
      <Footer/>
    </div>
  );
}

export default App;
