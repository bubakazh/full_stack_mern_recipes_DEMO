
import './App.css';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details'
import Edit from './pages/Edit';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Routes>
        <Route path = "/" element = {<Create/>} />
        <Route path = "/dashboard" element = {<Dashboard/>} />
        <Route path = "/recipes/:recipe_id" element = {<Details/>} />
        <Route path = "/recipes/edit/:recipe_id" element = {<Edit/>} />
      </Routes>
    </fieldset>
  );
}

export default App;
