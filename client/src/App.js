import './App.css';
// import React, { useState } from "react";
import Footer from "./components/footer/index";
import Header from "./components/header/index";
import Profile from "./components/profile/index";
import Login from "./components/login/index";
import Landing from "./components/landing/index";
import "./assets/global-stylesheet/style.css";
import { ApolloClient, InMemoryCache} from '@apollo/client';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <div className="App">
      <h1>Dead Feed</h1>
      <Login />
      
      
      
      
    </div>
  );
}

export default App;