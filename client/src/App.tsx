import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./layout/Header";
import Footer from './layout/Footer';
import HomePage from "./home/HomePage";
import NotFound from "./layout/NotFound";
import './App.css';

function App(): ReactElement {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
