
import './App.css';
import { Header } from './pages/Header/Header';
import { RequestForm } from './pages/RequestForm/RequestForm';
import { HeroPage } from './pages/mainpage/HeroPage';

function App() {
  return (
    <div>
      <Header/>
      <HeroPage/>
      <RequestForm/>
    </div>
  );
}

export default App;
