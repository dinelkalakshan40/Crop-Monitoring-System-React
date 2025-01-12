import './App.css'
import {Route, Routes} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";

function App() {


    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>

            </Route>
        </Routes>
    );
}

export default App
