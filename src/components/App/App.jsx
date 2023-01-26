import { Routes, Route } from "react-router-dom";
import HomePage from "../../page/HomePage";

export const App = () => {
 return (
  <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="*" element={<HomePage />} />
  </Routes>
 );
};
