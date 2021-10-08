/** 
 * @author: alexandercd
 * @description: 
 * @date 07/octubre/2021
**/
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,  
} from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LogingScreen from "./LogingScreen";
import MainApp from "./MainApp";
import NavBar from "./NavBar";


export const AppRouter = () => {
    return (
        <Router>
            <div>  
                <NavBar />
                <div className="container mt-3">
                    <Switch> 
                        <Route exact path="/" component={HomeScreen}/> 
                        <Route exact path="/login" component={LogingScreen}/> 
                        <Route exact path="/about" component={AboutScreen}/> 
                        <Redirect export to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default AppRouter;
