import {AllRouts} from './routes/AllRouts';
import {Header, Footer, ScrollToTop} from "./components";

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
