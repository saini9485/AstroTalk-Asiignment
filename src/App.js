import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/navbar/Navbar';
import { Banner } from './component/banner/Banner';
import { Footer } from './component/footer/Footer';
import { Card } from './component/card/Card';
import { CardPage } from './component/card/CardPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Card/>
      {/* <CardPage/> */}
      <Footer/>
    </div>
  );
}

export default App;
