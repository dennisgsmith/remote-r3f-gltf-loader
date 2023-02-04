import { Suspense } from 'react';

import { Physics } from '@react-three/cannon';
import { PresentationControls } from '@react-three/drei';

import Scene from './components/Scene';
import Croissant from './components/models/Croissant';
import Plane from './components/Plane';
import './components/r3f-elements';
import './App';

const App = () => {
  return (
    <div className='App h-screen w-screen'>
      <Suspense>
        <Scene>
          <Physics>
            {/* <Plane
              colors={['hotpink', 'pink', 'white']}
              stops={[0, 0.5, 1]}
              size={1080}
            /> */}
            <PresentationControls>
              <Croissant scale={20} position={[0, 0, 2]} />
            </PresentationControls>
          </Physics>
        </Scene>
      </Suspense>
    </div>
  );
};

export default App;
