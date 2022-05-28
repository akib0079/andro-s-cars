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
import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myorder from './Pages/Dashboard/Myorder';
import Profile from './Pages/Dashboard/Profile';
import SubmitReview from './Pages/Dashboard/SubmitReview';
import Payment from './Pages/Dashboard/Payment';
import AddTools from './Pages/Dashboard/AddTools';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AllUsers from './Pages/Dashboard/AllUsers';
import ManageProducrs from './Pages/Dashboard/ManageProducrs';
import RequireAdmin from './Pages/LogIn&Register/RequireAdmin';
import Portfolio from './Pages/Portfolio';



function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        } />

        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<Profile></Profile>} />
          <Route path="profile" element={<Profile></Profile>} />
          <Route path="myorders" element={<Myorder />} />
          <Route path="submitreview" element={<SubmitReview></SubmitReview>} />
          <Route path="myorders/payment/:id" element={<Payment></Payment>} />
          <Route path="add-tools" element={<RequireAdmin><AddTools></AddTools></RequireAdmin>} />
          <Route path="manage-orders" element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>} />
          <Route path="manage-products" element={<RequireAdmin><ManageProducrs></ManageProducrs></RequireAdmin>} />
          <Route path="users" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>} />
        </Route>

        {/* <Routes path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="myorders" element={<Myorder></Myorder>} />
        </Routes> */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/verify" element={<VerfPage></VerfPage>} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
