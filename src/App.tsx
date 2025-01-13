import './App.css'
import {Route, Routes} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import FieldPage from "./pages/FieldPage.tsx";

function App() {


    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="field" element={<FieldPage />} />
            </Route>
        </Routes>
    );
}

export default App
