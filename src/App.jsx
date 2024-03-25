// # lib
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// # layout
import { Private } from "@layout";

// # pages
import { Login, Main } from "@pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Private />}>
          <Route path="/" element={<Main />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
