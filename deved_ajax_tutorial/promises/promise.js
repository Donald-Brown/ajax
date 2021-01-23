const promise = new Promise((resolve, reject) => {
  // use setTimeOut to simulate delay in recieving data
  setTimeout(() => {
    resolve({ user: "don" });
    reject(new Error("User not logged in"));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err.message));

//* -------------------------------------------------------- //
function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: "email" });
    }, 3000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the video");
    }, 2000);
  });
}

loginUser("don", "12345")
  .then((user) => getUserVideos(user.userEmail))
  .then((videos) => videoDetails(videos[1]))
  .then((detail) => console.log(detail));

//* ------------------------------------------------ //

const yt = new Promise(resolve => {
  setTimeout(() => {
    console.log('getting stuff from youtube');
    resolve( { videos: [1, 2, 3, 4, 5] } );
  }, 2000);
});

const fb = new Promise(resolve => {
  setTimeout(() => {
    console.log('getting stuff from facebook');
    resolve( { user: 'Name' } );
  }, 2000);
});

Promise.all([yt, fb])
  .then(result => console.log(result));