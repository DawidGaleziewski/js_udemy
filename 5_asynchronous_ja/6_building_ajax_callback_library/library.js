//This will be ES5 OOP based library
function ajaxLibrary(){
    this.http = new XMLHttpRequest();
}


//Make an HTTP GET request               //2b. Calback for fixing issue with undefined
ajaxLibrary.prototype.get = function(url, callback){
    this.http.open('GET', url, true);

    //In es5 we fix this issue by setting a self variable or this ();
     //we can capture this keyword in current scope
    let self = this;

    this.http.onload = function(){
        if(this.status === 200){
            //1. THIS scope !!Potential issue 
                //- Function will change the scope of this keyword!
                //this is fixed in arrow functions by using lexical this
            
            //2. RETURN !!Potential isue - this is a issue with - undefined
                //Data is returned before it gets added
                //We fix this with callback (same as in section 5)

            //Null is the first parametter that is passed back
            callback(null, self.http.responseText)

            //Basic error control
        } else {
                //Callback will return first value not as null but as text with issue
            callback('Error: ' + self.http.status)
        }
    }

    this.http.send();
}


//Make an HTTP POST request
    // we also need calback due asynchronus nature as with GET
ajaxLibrary.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    //In adition we need to set the header, unlike with GET request
        //We need to set content type to application/json in the header of the post request
    this.http.setRequestHeader('Content-type', 'application/json')

    let self = this;
    this.http.onload = function(){
        //We do not need to check the status in the post request
            // if(this.status === 200){
            // }
        callback(null, self.http.responseText);
    } 

    //We send the data here
        //We need to change the format from object to string
    this.http.send(JSON.stringify(data))
}


//Make an HTTP PUT request
ajaxLibrary.prototype.put = function(url, data, callback){
    //Put request is same as post expect for PUT in open
    this.http.open('PUT', url, true);

    //We also need to set the header for PUT
    this.http.setRequestHeader('Content-type', 'application/json')

    let self = this;
    this.http.onload = function(){

        callback(null, self.http.responseText);
    } 

    this.http.send(JSON.stringify(data))
}

//Make an HTTP DELETE request
ajaxLibrary.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function(){
        //Delete checks for status
        if(self.http.status ===200){
            //Response is empty object as we delete the post
            callback(null, 'Post deleted');
        } else {
            callback('Error: ' + self.http.status)
        }
        
    } 

    this.http.send(JSON.stringify())
}