import { Route, Switch } from 'react-router-dom';
import Publics from '../views/Public';
// import {Admin, Users, User, EditUser, DeleteUser, AddUser} from '../views/Admin';

const Routes = () => (
    <Switch >
        <Route exact path="/" component={Publics.Home} />
        <Route path="/product" component={Publics.Product} />
        <Route path="/about" component={Publics.About} />
        <Route path="/contact" component={Publics.Contact} />
        <Route path="/login" component={Publics.Login} />
        <Route path="/register" component={Publics.Register} />
        {/* <Route path="/profile" component={Profile}/> 
         <Route path="/admin" component={Admin}/>
        <Route path="/admin/users" component={Users}/>
        <Route path="/admin/users/:id" component={User}/>
        <Route path="/admin/users/:id/edit" component={EditUser}/>
        <Route path="/admin/users/:id/delete" component={DeleteUser}/>
        <Route path="/admin/users/:id/add" component={AddUser}/> */}
    </Switch>
);

export default Routes;