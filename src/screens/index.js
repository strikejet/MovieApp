import {Route,BrowserRouter as Router} from "react-router-dom";
import Launch from "../Launch";
import Details from "./Details";
import Booking from "./Booking";

function Controller()
{
    return (<Router>
                <Route exact path = "/" component ={Launch}></Route>
                <Route exact path = "/details/:id" component ={Details}></Route>
                <Route exact path = "/book" component ={Booking}></Route>
            </Router>)
}

export default Controller;