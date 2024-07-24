import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Searchbox from './components/Searchbox';
import AssetTable from './components/Table';
import InventorySorter from './components/InventorySort';



function App() {
  return (
    <Router>
      <Header />
      <Searchbox />
      <InventorySorter/>
      <AssetTable/>
    </Router>
  );
}

export default App;
