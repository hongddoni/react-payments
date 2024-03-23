import {Route, Routes} from "react-router-dom";
import FirstPage from "./page/FirstPage.tsx";
import SecondPage from "./page/SecondPage.tsx";
import ThirdPage from "./page/ThirdPage.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<FirstPage/>}/>
            <Route path="/second" element={<SecondPage/>}/>
            <Route path="/third" element={<ThirdPage/>}/>
        </Routes>
    )
}

export default App
