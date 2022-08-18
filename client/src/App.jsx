import './style.sass';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import { useDispatch } from 'react-redux';



function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCategories())
  // }, [dispatch])

  return (
    <div className="app">
      <Header />
        <Routes>
          <Route path='/login' element={<SignIn />}></Route>
          <Route path='/auth' element={<SignUp />}></Route>
        </Routes>
    </div>
  );
}

export default App;
