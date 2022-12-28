import { RouterProvider } from "react-router-dom";
import "./App.scss";
import router from "./Routes/routes";

function App() {
    return (
        <div className="App" style={{ height: "100%" }}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
