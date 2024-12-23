import { Route, Routes } from "react-router-dom";
import { path } from "./ultils/constan";
import { Home, Login } from "./containers/public";

function App() {
  return (
    <div className="w-screen h-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
