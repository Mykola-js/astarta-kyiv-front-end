require('./../style/main.scss');


const Login_all = require('./../login/index.jsx');
const user_menu = require('./../json/config.json').menu;

const storage = require('./../events/storage.js');
const connect = ReactRedux.connect;
       

class template extends React.Component{
    // I set the initial state
    constructor(props){
        super(props);
        //Request available menu
        // write them in state React Redux
        (function() {
            var res_location = {
                date : location.pathname
            }
             if(localStorage.password === res_location.date){
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'bob/register/services/bob', true);
                xhr.setRequestHeader('Content-Type','application/json')
                
                xhr.send(JSON.stringify(res_location))
                xhr.onreadystatechange = function(){

                    if (this.readyState == 4){
                    
                        var menu_user = JSON.parse(xhr.responseText);
               
                storage.dispatch({
                    type: 'add_event',
                    one_name:  menu_user[0],
                    two_name: menu_user[1]
                })
            }
        }
        
    } else {location.pathname = '/'}
         })()
        this.state = {
            check : false,
            severa : false,
            name_value : '',
            hide_click : 'Hide',
            hide_menu_and_width_conteiner : false,
            one_name:  '',
            two_name: ''
            
        };
    }
  
    // function by pressing and changing className style
    // and displays the selected menu in #content_rigth_menu
    push_menu(e){

        if( e.target.id == 1 ){
            this.setState({
                check : true,
                severa : false,
                name_value : e.target.innerText
               
            })
        } else {
            this.setState({
                check : false,
                severa : true,
                name_value : e.target.innerText
            })
        }
      
    }
    // Hide or Visible content_left
    hide_visible(){
       
        if(this.state.hide_click === 'Hide'){
            this.setState({
                hide_click : 'Visible',
                hide_menu_and_width_conteiner : true

            })
        } else {
            this.setState({
                hide_click : 'Hide',
                hide_menu_and_width_conteiner : false
            })
        }

    }
    render(){
      
        return (
            <div className = 'wraper'>
                <div className = 'header'>
                    <div className = 'hide_block' >
                        <input onClick = { this.hide_visible.bind(this) } className = {'hide_click_' + this.state.hide_menu_and_width_conteiner} type = 'button'  value = {this.state.hide_click}/>
                    </div>
                    <input id = 'login_in' type = 'button' value = {location.pathname.replace('/','Dear ')} />
                </div>
                <div className = 'content'>
                    <div className = {'content_left_' + this.state.hide_menu_and_width_conteiner}>           
                        <h3  id = '1' onClick = {this.push_menu.bind(this)} className = {'name_one_' + this.state.check}>{this.props.testStorage[0]}</h3>
                        <h3 id = '2' onClick = {this.push_menu.bind(this)} className = {'name_two_'+ this.state.severa}>{this.props.testStorage[1]}</h3>
                     </div>
                    <div className = {'content_rigth_' + this.state.hide_menu_and_width_conteiner }>
                        <h3 id = 'content_rigth_menu'>{'Item selected ' + this.state.name_value}</h3>
                    </div>
                </div>
            </div>
            )
    }
}
module.exports = connect(
    function (state) {
       return{
           testStorage: state
       } 
    },
    function (dispatch) {
        return{} 
    }
)(template);

