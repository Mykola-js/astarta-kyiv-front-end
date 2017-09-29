require('./../style/login.scss');
const storage = require('./../events/storage.js');

class login extends React.Component{

    // I set the initial state
    constructor(props){
        super(props);
        this.login_submit = this.login_submit.bind(this);
        this.state = {
            name: 'Hello my dear friend'
        };
    }
    // validation checking and redirecting to the appropriate page
        login_submit(event){
           
            const self = this
            
            var date = {
                login : document.getElementById('login_name').value
            }
           
                if(event.target.type === 'submit'){
                    event.preventDefault();

                    onclick_onKeyDoun();
                } else 
                if (event.keyCode === 13 ){
                    onclick_onKeyDoun();
                }
                function onclick_onKeyDoun() {
                   
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'register/services/reg', true);
                    xhr.setRequestHeader('Content-Type','application/json')
                    
                    xhr.send(JSON.stringify(date))
                    xhr.onreadystatechange = function(){

                        if (this.readyState == 4){
                            localStorage.setItem('password','/' + date.login)

                            self.props.history.push( JSON.parse(xhr.responseText));
                            self.setState({
                                name: 'Ok'
                            })
                            
                        } else {}
                    }       
                    }             
        }
    render(){
        return (
            <div className = 'login'>
                <h3 id = 'dear_friend'>{this.state.name}</h3>
                <div className = 'login_center'>
                    <input onKeyDown = { this.login_submit.bind(this) }  type = 'text' id = 'login_name' placeholder = 'login' />
                    <input onClick = { this.login_submit.bind(this) } type = 'submit' id = 'login_submit' />
                </div>
            </div>)
    }
}
module.exports = login;