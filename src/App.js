import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';
import Fragments from './components/Fragments/Fragments';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <TopHeadline></TopHeadline>
      <Fragments></Fragments>
      <Footer></Footer>
    </div>
  );
}

export default App;
