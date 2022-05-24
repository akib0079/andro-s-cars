import './App.css';
import './Pages/GlobalCss/grobal.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'boxicons';
import Header from './Static/Header/Header';
import Footer from './Static/Footer/Footer';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/LogIn&Register/Login/LogIn';
import Register from './Pages/LogIn&Register/Register/Register';
import Page404 from './Pages/Page404/Page404';
import VerfPage from './Pages/VerfPage/VerfPage';
import RequireAuth from './Pages/LogIn&Register/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />

        {/* <Route path="/checkout/:serviceInfo" element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/verify" element={<VerfPage></VerfPage>} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
