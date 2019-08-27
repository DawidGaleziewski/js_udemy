//There should be no comments in json, it should be only data
//Json is similar to object literal but with diffrence that key and value needs to be wrapped in double qotes
    //Object Literal - key: 'value'
    //JSON - "key": "value"
    // We can validate json online: https://jsonlint.com/

    document.getElementById('button1').addEventListener('click', loadCustomer);

    document.getElementById('button2').addEventListener('click', loadCustomers);

    function loadCustomer(){
       const xhr = new XMLHttpRequest();
       xhr.open('GET', 'customer.json', true);
       xhr.onload = function(){
           if(this.status === 200){
            //  console.log(this.responseText) 
            
            //First we need to parse json fromt ext
            const customer = JSON.parse(this.responseText);

            //Create template for customer in html
            const output = `
            <ul>
              <li>ID: ${customer.id}</li>
              <li>NAME: ${customer.name}</li>
              <li>COMPANY: ${customer.company}</li>
              <li>PHONE: ${customer.phone}</li>
            </ul>
            `
            
            //Add template to DOM
            document.getElementById('customer').innerHTML = output
           }


       }
       xhr.send();
    }

    //Load customers
    function loadCustomers(){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'customers.json', true);
        xhr.onload = function(){
            if(this.status === 200){
                //console.log(this.responseText)
                const customers = JSON.parse(this.responseText);

                let finalHTML = '';


                customers.forEach(function(customer){
                    
                    //Create template for customer in html
                    const output = `
                    <ul>
                    <li>ID: ${customer.id}</li>
                    <li>NAME: ${customer.name}</li>
                    <li>COMPANY: ${customer.company}</li>
                    <li>PHONE: ${customer.phone}</li>
                    </ul>
                    `
                    finalHTML += output;

                })

                //Add template to DOM
                document.getElementById('customers').innerHTML = finalHTML
            }
        }

        xhr.send()
    }