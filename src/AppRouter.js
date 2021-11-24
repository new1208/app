import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductList from './product/ProductList';
import EmployeeList from './employee/EmployeeList';
import Main from './ui/Main';
import Hello from './new/Hello';
import {AuthContext, STATUS} from './account/AuthContext';

export default function AppRouter(){
    const [status, setStatus] = useState(STATUS.toSignIn);
    return (
        <AuthContext.Provider value={{status, setStatus}}>
        <Router>
            <Switch>
                <Route exact path="/" component={Main}/>
                 <Route path="/product" component={ProductList}/>
                 <Route exact path="/employee" component={EmployeeList}/>
                 <Route path="/new" component={Hello}/>
             </Switch>
         </Router>
         </AuthContext.Provider>

);

}