/* Se importa route y switch de react-router-dom para definir las rutas y el componente a mostrar */
import { Route, Switch } from 'react-router-dom';
/* Se importa las vistas de la carpeta views/public para definir las rutas en las cuales se motraran estas vistas */
import Publics from '../views/Public';
import Admin from '../views/Admin';
import PrivateRoute from './PrivateRouter';

//Opcion para importar cuando se exporta de manera diferente
// import {Admin, Users, User, EditUser, DeleteUser, AddUser} from '../views/Admin';

const Routes = () => (
    /* Usamos switch para definir una unica url de estas y que dos no concuerden y se rendericen */
    <Switch >
        {/* Usamos router para definir la ruta y el componente a rederizar */}
        <Route exact path="/" component={Publics.Home} />
        <Route path="/product" component={Publics.Product} />
        <Route path="/about" component={Publics.About} />
        <Route path="/contact" component={Publics.Contact} />
        <Route path="/login" component={Publics.Login} />
        <Route path="/register" component={Publics.Register} />
        <PrivateRoute path="/dashboard" component={Admin.Dashboard} />
        <Route path="/products" component={Admin.Products} />
        {/* <Route path="/profile" component={Profile}/> 
         <Route path="/admin" component={Admin}/>
        <Route path="/admin/users" component={Users}/>
        <Route path="/admin/users/:id" component={User}/>
        <Route path="/admin/users/:id/edit" component={EditUser}/>
        <Route path="/admin/users/:id/delete" component={DeleteUser}/>
        <Route path="/admin/users/:id/add" component={AddUser}/> */}
    </Switch>
);

//Exportar el componente para poder utilizarlo en el archivo App.js
export default Routes;