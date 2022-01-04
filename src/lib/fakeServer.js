import Cookies from 'universal-cookie';
import {getElements} from '../crud';
import Swal from 'sweetalert2'

const cookies= new Cookies()

export async function Login (email, password) {
    
    await getElements("users").then((res) => {
        console.log(res)
       let userEmail = res.filter((elem) => {
           return elem.email === email;
       })
        let userPassword = userEmail.filter((elem) => {
            
            return elem.password === password;
        })
        if(userEmail.length <= 0) {
            Swal('email incorrecto')
        } else if(userPassword <= 0){
            Swal('Contraseña incorrecta')
        }
        console.log(userPassword)
        let userLogin = userPassword[0];
        cookies.set("id", userLogin.id, {path:'/'});
        cookies.set("email", userLogin.email, {path:'/'});
        cookies.set("admin", userLogin.role.admin, {path:'/'});
        cookies.set("waiter", userLogin.role.waiter, {path:'/'});
        cookies.set("kitchen", userLogin.role.kitchen, {path:'/'});
        cookies.set("name", userLogin.name,{path:'/'});

        if(cookies.get('admin')==='true'){
            window.location.href= '/admin';
            
        }else if(cookies.get('waiter')=== 'true'){
          window.location.href= '/orders';
        }else if(cookies.get('kitchen')=== "true"){
            window.location.href= '/kitchen';
        }
        
    })

        .catch((error) => {
            alert(error.message)
        })
}

export function Logout () {
    cookies.remove("id", {path:'/'});
    cookies.remove("email", {path:'/'});
    cookies.remove("admin", {path:'/'});
    cookies.remove("waiter", {path:'/'});
    cookies.remove("kitchen", {path:'/'});
    cookies.remove("name", {path:'/'});

    console.log(cookies.get("id"));
    if(!cookies.get("id")) {
        window.location.href= '/';
    }
    
    
    
    
}


