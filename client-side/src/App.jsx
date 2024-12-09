import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ItemListPage from './pages/ItemListPage';
import CreateItemPage from './pages/CreateItemPage';
import UpdateItemPage from './pages/UpdateItemPage';
import DeleteItemPage from './pages/DeleteItemPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/items" element={<ItemListPage />} />
        <Route path="/create" element={<CreateItemPage />} />
        <Route path="/update/:id" element={<UpdateItemPage />} />
        <Route path="/delete/:id" element={<DeleteItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;