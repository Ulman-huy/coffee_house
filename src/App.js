import { routes } from "./routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

  return (
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Routes>
                {routes.map((route, index) => {
                  const Page = route.component;
                  return <Route key={index} path={route.path} element={<Page />} />
                })}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
