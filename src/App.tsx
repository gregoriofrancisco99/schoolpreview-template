import {Header} from './components/Header';
import { Home } from './pages/Home';

import './assets/style/global.scss';


function App() {
  return (
      <div id="wrapper">
        <Header />
        <Home />
      </div>
  );
}

export default App;
