
import './App.css';
import { Deliver } from './pages/Deliver/Deliver';
import Question from './pages/FAQ/Question';
import { QuestionBanner } from './pages/FAQ/QuestionBanner';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import { RequestForm } from './pages/RequestForm/RequestForm';
import { ServicePage } from './pages/ServicePage/ServicePage';
import { HeroPage } from './pages/mainpage/HeroPage';
import { PaymentPage } from './pages/payment/PaymentPage';
import { BookForm } from './pages/review-form/BookForm';
import { CustomerReview } from './pages/review-form/CustomerReview';
import { Review } from './pages/review-form/Review';

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
      {/* <Review/> */}
      <CustomerReview/>
      <BookForm/>
      <Footer/>
    </div>
  );
}

export default App;
