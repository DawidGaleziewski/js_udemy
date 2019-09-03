//Init Github
const github = new GitHub;

//Init UI
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (event)=> {
    //1 Check input text
    const userText = event.target.value

    //2 Make sure the input is not empty
    if(userText !== ''){
        //Make http call
        github.getUser(userText)
            .then(data=> {
                //3 Alert if no user was found and clear profile
                if(data.profile.message === 'Not Found'){
                    //Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                    ui.clearProfile()
                } else {
                    //Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //Clear the profile if nothing is in input
        ui.clearProfile()
    }
})