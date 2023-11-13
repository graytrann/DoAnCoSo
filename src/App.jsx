import Login from "./modules/Auth/pages/Login";
import Signup from "./modules/Auth/pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="jobs" element={<Jobs />} /> */}
          {/* <Route path="jobs/:title" element={<Jobs />} />
          <Route path="types/:jobtype/:id" element={<Types />} />
          <Route path="job/:jobId" element={<Detail />} /> */}
          {/* <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          /> */}
        </Route>
        {/* TRANG ĐĂNG KÝ */}
        <Route path="/sign-up" element={<Signup />} />
        {/* TRANG ĐĂNG NHẬP */}
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
