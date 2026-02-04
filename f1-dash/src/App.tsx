import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { CardsCarousel } from './Card'
import { HeaderSimple } from './HeaderSimple';
import { StatsRing } from './StatsRing';

function App() {

  return (
    <>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>Hello</code> and save to test HMR
        </p>
      </div> */}
      {<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Teams" element={<Teams />} />
        </Routes></BrowserRouter>}
     
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

const Home = () => {
  return (
    <>
    <div>
        <HeaderSimple/>
      </div>
      <h1>F1 Dashboard</h1>
      <div className= "carousel-container">
        <CardsCarousel />
      </div>
      <div>
        <StatsRing/>
      </div>
      </>
  );
}

const Teams = () => {
  return (
    <>
    <div>
        <HeaderSimple/>
      </div>
      <h1>Mercedes</h1>
      <div className= "carousel-container">
        <CardsCarousel />
      </div>
      <div>
        <StatsRing/>
      </div>
      </>
  );
}