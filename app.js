const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portolio complete! Check out index.html to see output.');
});


// 9.1 Code, just for reference:
// const printProfileData = profileDataArr => {
//     // This..
//     profileDataArr.forEach(profileItem => console.log(profileItem));

//     console.log('============');

//     // Is the same as this..
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem)
//     });
// };

// printProfileData(profileDataArgs);