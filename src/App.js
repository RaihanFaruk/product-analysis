import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllReviews from './components/AllReviews/AllReviews';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
    
      <Routes >
      <Route path="/" element={<Header></Header>} />
      <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      <Route path="/blog" element={<Blog></Blog>} />
      <Route path="/allreviews" element={<AllReviews></AllReviews>} />
    </Routes>
    </div>
  );
}

export default App;
