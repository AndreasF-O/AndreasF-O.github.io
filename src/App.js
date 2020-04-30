import * as React from 'react';
import { HashRouter } from "react-router-dom";
import './App.css';
import Pages from "./pages";
import Layout from "./components/Layout";
function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Layout />
        <Pages />
      </div>
    </HashRouter>
  )
}

export default App;
