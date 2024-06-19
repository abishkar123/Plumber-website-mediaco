
import './App.css';
import { Deliver } from './pages/Deliver/Deliver';
import { Header } from './pages/Header/Header';
import { RequestForm } from './pages/RequestForm/RequestForm';
import { ServicePage } from './pages/ServicePage/ServicePage';
import { HeroPage } from './pages/mainpage/HeroPage';
import { PaymentPage } from './pages/payment/PaymentPage';

function App() {
  return (
    <div>
      <Header/>
      <HeroPage/>
      <RequestForm/>
      <ServicePage/>
      <Deliver/>
      <PaymentPage/>
    </div>
  );
}

export default App;
