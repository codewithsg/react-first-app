import TopBar from "./components/topbar/TopBar";
import CreateListing from "./pages/create-listing/CreateListing";
import Home from "./pages/home/Home";
import Detail from "./pages/listing-detail/Detail";
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'


function App() {
  return (
      <Router>
        <div>
          <TopBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/detail" element={<Detail />} />
            <Route exact path="/create" element={<CreateListing />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
