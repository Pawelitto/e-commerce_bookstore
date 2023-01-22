import NavBar from './Components/NavBar';
import ContentStart from './Components/ContentStart';
// import WaveTransition from './Components/WaveTransition';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Index.css';

const App = () => {
  return (
    <>
      <div className="containerMainStart">
        <NavBar />
        <ContentStart />
      </div>
      {/* <WaveTransition /> */}
    </>
  );
};

export default App;
