import NavBar from './Components/NavBar';
import ContentStart from './Components/ContentStart';
import WaveTransition from './Components/WaveTransition';
import ContentApp from './Components/ContentApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Index.css';

const App = () => {
  return (
    <>
      <div className="containerMainStart">
        <NavBar />
        <ContentStart />
      </div>
      <div className="containerApp">
        <WaveTransition />
        <ContentApp />
      </div>
    </>
  );
};

export default App;
