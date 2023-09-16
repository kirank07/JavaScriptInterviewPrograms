const githubUser = async (login) => {
    let response = await fetch(`https://api.github.com/users/${login}`);
    let usersData = await response.json();
    let summary = `${usersData.name}, ${usersData.location}`;
    console.log(summary);
}

githubUser("kirank07");
