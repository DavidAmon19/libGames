import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameListPage from "../pages/GameListPage";
import GameFormPage from "../pages/GameFormPage";



const AppRoutes = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GameListPage />} />
                <Route path="/add" element={<GameFormPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;