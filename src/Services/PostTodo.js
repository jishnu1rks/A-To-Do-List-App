export function PostTodo(type, userData) {
    //let BaseURL = 'https://api.thewallscript.com/restful/';
    // let BaseURL = 'http://localhost/PHP-Slim-Restful/api/';
    let BaseURL = 'http://localhost/jishnu/todoapp/public/index.php/api/todo/';


    return new Promise((resolve, reject) =>{
    
         
        fetch(BaseURL+type, {
            method: 'POST',
            body: JSON.stringify(userData), 
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

  
      });
}
