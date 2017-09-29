const Template = require('./component/template/index.jsx');
const Login = require('./component/login/index.jsx');
const storage = require('./component/events/storage.js');
const Router = ReactRouterDOM.BrowserRouter;
const browserHistory =  ReactRouterDOM.browserHistory;
const Route = ReactRouterDOM.Route;
const Provider = ReactRedux.Provider;


ReactDOM.render(
    <Provider store = {storage}>
        <Router history={browserHistory}>
            <div className='App'> 
                <Route  exact path = '/' component = {Login} />
                <Route  path = '/alice' component = {Template} />
                <Route  path = '/bob' component = {Template} /> 
            </div>
        </Router>
    </Provider>,
    document.getElementById('container')
)