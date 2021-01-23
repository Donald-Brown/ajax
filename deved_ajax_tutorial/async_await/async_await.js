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

async function displayUser() {
  try {
    const loggedUser = await loginUser('don', 12345);
    const videos = await getUserVideos(loggedUser.userEmail);
    const details = await videoDetails(videos[1]);
    console.log(details);
  } catch  (err) {
      console.log(err);
  }
}

displayUser();