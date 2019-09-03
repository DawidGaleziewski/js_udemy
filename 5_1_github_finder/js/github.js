class GitHub {
    constructor(){
        //In normal project this should be requested from external api ie the server
        this.client_id = '2f967efb5187d9863802';
        this.client_secret = '595e769fae5ee6d3aaede19dc28cd02f48b682fb';
        this.repos_count = 10;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        //We add the user name to github api link to get user with this name
        // We add the oauth information to the link as well
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            //If the value and key are the same we can write it like this:
                //profile
                //reposData
            profile: profileData,
            repos //shorter notation
        }
    }

}