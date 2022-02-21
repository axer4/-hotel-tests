import SignUp from "./components/SignUp/SignUp";
import { Route, Routes } from 'react-router-dom';
import PublicRoute from './components/PublicRoute'
import Hotels from './components/Hotels/Hotels';
import PrivateRoute from './components/PrivateRoute'
import HotelsRoom from './components/HotelsRoom/HotelsRoom'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route
            path='/'
            element={<PublicRoute component={SignUp} />}
          />
          <Route
            path='/hotels'
            element={<PrivateRoute component={Hotels} />}
          />
          <Route path='/hotels/:id'
                 element={<PrivateRoute component={HotelsRoom}/>}
          />
     </Routes>
    </div>
  );
}

export default App;
