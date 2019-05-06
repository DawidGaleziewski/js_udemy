// ####################Template literals (also called templates literals)

    // when we want to inject something to html using js
    const literalName = "John";
    const literalAge = 30;
    const literalJob = "Web developer";
    const literalCity = "Miami";
    let html; 

        //Without template strings (es5)
            // html string
            //  if we want to go to diffrent lines we need to concatenate with + signs
            html= '<ul>' +
                '<li>Name:' + literalName + '</li>' +
                '<li>Age:' + literalAge + '</li>' + 
                '<li>Job:' + literalJob +'</li>' +
                '<li>City:' + literalCity + '</li>' +
            '</ul>'

            // injecting the html into the dom
            document.body.innerHTML = html;

        // Template strings (es6)
            // template strings makes this easier
            // it uses backtick, which is to the left of the 1 key on keybord
            // variables are inside ${variable}

            // we can include function calls inside the template literals
            function hello(){
                return 'hello'
            }

            // You can also do:
                // conditionals
                // booleans
                // if statments
        let htmlEs6 = `
            <ul>
                <li>Name: ${literalName} </li>
                <li>Age: ${literalAge} </li>
                <li>Job: ${literalJob} </li>
                <li>City: ${literalCity}</li>
                <li>${2 + 2}</li>
                <li>${hello()}</li>
                <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
            </ul>
        `;
          document.body.innerHTML = htmlEs6;