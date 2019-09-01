//ES6
//Version using promises 
    //Using modern standards

/** 
 * 
    *EasyHTTP Library
    *Library for making HTTP request
    *@version 2.0.0
    *@author Brad Traversy
    *@license MIT
 *
**/

class EasyHTTP {
    //Make an HTTP GET request
    get(url){
        //Fetch will return undefined to variables if we do not wrap it in promise
        return new Promise((resolve, reject)=>{
            fetch(url)
            .then(response => response.json())
            .then(data =>  resolve(data)) //We need to mark what will be resolved 
            .catch(error => reject(error))
            //This will retune a promise and we need to handle those in app.js by then
        })
    }

    //Make an HTTP POST request
    post(url, data){
        return new Promise((resolve, reject)=>{
            //For post methods we need to pass a object with settings to fetch
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data =>  resolve(data)) 
            .catch(error => reject(error))
        })
    }

    //Make HTTP put request
    put(url, data){
        return new Promise((resolve, reject)=> {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response=> response.json())
            .then(data=> {resolve(data)})
            .catch(error=> reject(error))
        })
    }
}