import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, } from "react-bootstrap"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import CompanyPage from './components/CompanyPage';
import Navbar from "./components/Navbar.jsx"
import FavouritesPage from './components/FavouritesPage';



function App() {


  return (
    <div className="App">

      <Router>
        <Container fluid className="px-0 mb-4">

          <Navbar />
        </Container>

        <Container>
          <Row>
            <Route exact path="/" render={(routerProps) => <HomePage routerProps={routerProps} />} />
            <Route path="/company/:id" render={(routerProps) => <CompanyPage routerProps={routerProps} />} />
            <Route path="/favourites" render={(routerProps) => <FavouritesPage routerProps={routerProps} />} />

          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
