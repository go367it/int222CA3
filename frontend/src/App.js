import './App.css';
import {Routes, Route} from 'react-router-dom'
import VideoCall from "./pages/meeting";
import JoinMeeting from "./pages/join";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<JoinMeeting />} />
        <Route path='/video/:id' element={<VideoCall />} />
      </Routes>
    </div>
  );
}

export default App;
