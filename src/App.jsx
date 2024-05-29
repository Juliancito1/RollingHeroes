import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import MainPage from './components/MainPage';
import './App.css'
import { useState } from 'react';
import DetailComponent from './components/DetailComponent';
import SearchHero from './components/SearchHero';
function App() {

  const [heroePublisher, setHeroePublisher] = useState("")
  console.log(heroePublisher)
  return (
    <BrowserRouter>
    <NavbarComponent setHeroePublisher={setHeroePublisher}/>
      <Routes>
        <Route exact path= "/" element={<MainPage heroePublisher={heroePublisher}></MainPage>}></Route>
        <Route exact path= "/detail/:heroId" element={<DetailComponent></DetailComponent>}></Route>
        <Route exact path="/search" element={<SearchHero></SearchHero>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
