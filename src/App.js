import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import User from "./components/pages/User";
import { GithubProvider } from "./components/context/github/GithubContext";
import { AlertContextProvider } from "./components/context/alert/AlertContext";
import Alert from "./components/element/Alert";

function App() {
  return (
    <GithubProvider>
      <AlertContextProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar title={"Github Finder"} />

            <main className="pb-12 px-3 container mx-auto ">
              <Alert />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notFound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertContextProvider>
    </GithubProvider>
  );
}

export default App;
