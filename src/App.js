// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth } from './pages/auth/index';
import { ExpenseTracker } from './pages/expense-tracker/index';

export const App= () => {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='/expense' element={<ExpenseTracker />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
