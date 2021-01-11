import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Orders from "./Components/Orders";

function Routes(){
    return(
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route path="/orders" ><Orders /></Route>
                <Route path="/" ><Home /></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default  Routes;