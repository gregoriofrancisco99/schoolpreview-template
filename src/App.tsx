import { Header } from './components/Header';
import { Home } from './pages/Home';
import { ContactUs } from './pages/ContactUs';

import './assets/style/global.scss';


function App() {
  return (
    <div id="wrapper">
      <Header />
      <Home />
      <ContactUs />
    </div>
  );
}

export default App;
