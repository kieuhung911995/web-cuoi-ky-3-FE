import { Routes, Route } from "react-router-dom";

import FlightSearch from "./pages/FlightSearch";
import FlightList from "./pages/FlightList";
import Account from "./pages/Account";

const App = () => {
  return (
    <Routes>
      <Route path="/flight/search" element={<FlightSearch />} />
      <Route path="/flight/list" element={<FlightList />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default App;
