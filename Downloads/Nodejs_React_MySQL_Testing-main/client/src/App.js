
import { Routes, Route } from "react-router-dom";
import CreateIdea from "./components/CreateIdea";

import { Home } from "./components/Home";
import ListIdea from "./components/ListIdea";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}>
           
      </Route>
      <Route path="/idea" element={<CreateIdea></CreateIdea>}>
           
       </Route>
       <Route path="/ideas" element={<ListIdea></ListIdea>}>
           
       </Route>
    </Routes>
  );
}

export default App;


