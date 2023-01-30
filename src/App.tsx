import Scene from './components/Scene';
import Box from './components/Box';
import './components/r3f-elements';
import './App';

const App = () => {
  return (
    <div className='App h-screen w-screen'>
      <Scene>
        <Box />
      </Scene>
    </div>
  );
};

export default App;
