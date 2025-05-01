import React from "react";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import ChatsListPage from "./pages/ChatsListPage";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<ChatsListPage/>}> </Route>
    </Routes>
    </BrowserRouter>
  );
}