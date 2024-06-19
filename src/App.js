
import './App.css';
import { Deliver } from './pages/Deliver/Deliver';
import { Header } from './pages/Header/Header';
import { RequestForm } from './pages/RequestForm/RequestForm';
import { ServicePage } from './pages/ServicePage/ServicePage';
import { HeroPage } from './pages/mainpage/HeroPage';

function App() {
  return (
    <div>
      <Header/>
      <HeroPage/>
      <RequestForm/>
      <ServicePage/>
      <Deliver/>
    </div>
  );
}

export default App;
