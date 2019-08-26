//AJAX - older standard

document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    //Create x XHR object
    const xhr = new XMLHttpRequest();

    //OPEN method
        //Type request?
        //File name we want to make it to?

    //Params are:
        //Type of request, file to put data to, is it asynchronous?
        //data.txt is in the same directory
    xhr.open('GET', 'data.txt', true);

    // a) new method on waiting for readyStateCHange
        xhr.onload = function(){
            //Operations on data we recive!

            //Checking if we get http 200 status
                //200: OK
                //403: Forbidden
                //404: Not Found

                // console.log(this)
            //This refers to xhr object
            if(this.status ===200){
                console.log('READYSTATE', xhr.readyState)
                console.log(this.responseText)

                //HERE STARTS WORK WITH DATA
                document.getElementById('output').innerHTML = `<h1>${this.response}</h1>`
            }
        }

    //a.1) Optional - used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState)
    }

    //a.2) Opional - on error
    xhr.onerror = function(){
        console.log('REQUEST error..')
    }

    // b) old method for waiting onReadyStateChange
        // xhr.onreadystatechange = function(){
        //     //In older versions we needed to also check readyState, on load does this for us
        //     //this.readyState or xhr ready state will show us on which point we are
        //     // console.log(this.readyState)

        //     if(this.status === 200 && this.readyState === 0){
        //         console.log(`Ready state is ${this.readyState}`)
        //         console.log(this.responseText)
        //     } else if(this.status === 200 && this.readyState === 1){
        //         console.log(`Ready state is ${this.readyState}`)
        //         console.log(this.responseText)
        //     } else if(this.status === 200 && this.readyState === 2){
        //         console.log(`Ready state is ${this.readyState}`)
        //         console.log(this.responseText)
        //     } else if(this.status === 200 && this.readyState === 3){
        //         console.log(`Ready state is ${this.readyState}`)
        //         console.log(this.responseText)
        //     }else if(this.status === 200 && this.readyState === 4){
        //         console.log(`Ready state is ${this.readyState}`)
        //         console.log(this.responseText)
        //     }
        // }

    //ReadyState Values
        //0: request not initialized
        //1: server connection established
        //2: request recived
        //3: processing request
            //xhr.onprogress is in this state
        //4: request finished and response ready
            //xhr.onload is a new method and waits for state #4.
            //Before that we needed to check all states

    //Send needs to close whole operation
    xhr.send(null);
}