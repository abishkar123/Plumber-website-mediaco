
import './App.css';
import { Deliver } from './pages/Deliver/Deliver';
import Question from './pages/FAQ/Question';
import { QuestionBanner } from './pages/FAQ/QuestionBanner';
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
      <Question/>
      <QuestionBanner/>
    </div>
  );
}

export default App;
