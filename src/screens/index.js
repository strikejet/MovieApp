import {Route,BrowserRouter as Router} from "react-router-dom";
import Launch from "../Launch";
import Details from "./Details";
function Controller()
{
    return (<Router>
                <Route exact path = "/" component ={Launch}></Route>
                <Route exact path = "/details/:id" component ={Details}></Route>
            </Router>)
}

export default Controller;