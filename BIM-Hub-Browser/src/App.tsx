import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import LoginForm from "./Pages/Auth/LoginForm";
import DashboardHome from "./Pages/Dashboard/DashboardHome";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<LoginForm />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" index element={<DashboardHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
