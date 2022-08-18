import './style.sass';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAreas } from './features/areaSlice';
import YandexMap from "./components/YandexMap/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAreas())
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/auth" element={<SignUp />}></Route>
        <Route path="/map" element={<YandexMap />}></Route>
      </Routes>
    </div>
  );
}

export default App;
