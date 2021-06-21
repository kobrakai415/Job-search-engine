import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from "react-bootstrap"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import CompanyPage from './components/CompanyPage';
import Navbar from "./components/Navbar.jsx"
import {useState, useEffect} from "react"

const ApiUrl = process.env.REACT_APP_API_URL

function App() {

  const [query, setQuery] = useState("")
  const [jobs, setJobs] = useState([])

  const searchJobs = async () => {
    try {
      if(query.length > 2){

        const res = await fetch(`${ApiUrl}?search=${query}`)
        const json = await res.json()
        console.log(json)
        setJobs(json.jobs)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    searchJobs()
  }, [query])
  return (
    <div className="App">
    <Container fluid className="px-0 mb-4">

    <Navbar></Navbar>
    </Container>
    <Container>
    <Row>
    
    <Router>

   <Route exact path="/" render={(routerProps) => <HomePage jobs={jobs} query={query} setQuery={setQuery} routerProps={routerProps} />} />
   <Route path="/company/:id" render={(routerProps) => <CompanyPage routerProps={routerProps} />} />

    </Router>
   
    </Row>
    </Container>
    </div>
  );
}

export default App;
