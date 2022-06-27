const profileDataArgs = process.argv.slice(2, process.argv.length);


const printProfileData = profileDataArr => {
    // This..
    profileDataArr.forEach(profileItem => console.log(profileItem));

    console.log('============');

    // Is the same as this..
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem)
    });
};

printProfileData(profileDataArgs);