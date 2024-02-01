import axios from 'axios';

function getUser(userID) {
    return new Promise(async (resolve) => {
        const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${userID}`);
        resolve(data);
    });
};

function getPosts(userID) {
    return new Promise(async (resolve) => {
        const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/?userId=${userID}`);
        resolve(data);
    });
};

async function getData(userID) {
    let user = await getUser(userID);
    let userPosts = await getPosts(userID);

    const data = {...user,posts:userPosts}
    
    console.log(data);
}

export default getData;
