
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import AddTask from './pages/AddTask'
import DisplayTask from './pages/DisplayTask'



function App() {
  return (
    <div className="App">

      <h1>PlanetTA</h1>
<BrowserRouter>
    
      <NavBar />

      <Routes>
          
        <Route path="/" element={<HomePage />} />
        <Route path="/AddTask" element={<AddTask />} />
        <Route path="/DisplayTask" element={<DisplayTask />} />

      </Routes>

</BrowserRouter>


      {/* <BrowserRouter >

          <NavBar />

              <Routes>
                <Route path="/" element={<HomePage />} />

                  <Route path="/AddTask" element={<AddTask />} />

                  <Route path="/DisplayTask" element={<DisplayTask />} />
              </Routes>


          </BrowserRouter> */}


    </div>
  );
}

export default App;
