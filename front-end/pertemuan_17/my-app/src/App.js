import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
// import StyledComponentExample from './component/StyledComponentExample';
import ClassComponentExample from './component/ClassComponentExample';
import './css/style.css';
import { Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    var name = 'Vincent'

    // function multiply(a, b) {
    //   return a * b;
    // }

    // const daftarSiswa = ["Budi", "Agus", "Yono"];
    // const listSiswa = daftarSiswa.map((siswa) => {
    //   return <li>{siswa}</li>
    // })

    // const contohInlineStyle = {
    //   color: 'green'
    // }

    return (
      <div>
        <Header name={name} />

        {/* <StyledComponentExample />
        <h1 className='color-red'>Welcome to my website !</h1>
        <p style={contohInlineStyle}>Hasil perkalian dari 3x5 adalah {multiply(3, 5)}</p>
        <ul>
          {listSiswa}
        </ul> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />

        {/* contoh parsing props ke class component */}
        <ClassComponentExample email="lalala@gmail.com" />
      </div>
    );
  }
}

export default App;
