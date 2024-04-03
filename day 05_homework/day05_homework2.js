console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};





function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}


function loginUser(email, Success, onError) {

  if (usersDB.hasOwnProperty(email)) {
    setTimeout(() => {
      const start_email = email.split('@');
      console.log(`Now we have the data of user: ${start_email[0]}`);
      Success({ userEmail: email });

    }, 3000);
  } else {
    setTimeout(() => {
      onError("User not found!");
    }, 3000);
  }
}

function getUserVideos(email, Success, Error) {
  if (usersDB.hasOwnProperty(email)) {
    setTimeout(() => {
      Success(usersDB[email]);
    }, 2000);
  } else {
    setTimeout(() => {
      Error("Videos not found!");
    }, 2000);
  }
}

function videoDetails(video, Success, Error) {
  if (video && video.title) {
    setTimeout(() => {
      Success(video.title);
    }, 2000);
  } else {
    setTimeout(() => {
      Error("Video Title not found!");
    }, 2000);
  }
}


const getPassedUsersFirstVideoTitle = (user) => {

  loginUser(user, "1234", (result) => {
    console.log("user:", result);

    getUserVideos(result.userEmail, (videos) => {
      console.log("videos:", videos);

      videoDetails(videos[0], (title) => {
        console.log("title:", title);
      },
        (error) => {
          console.error("Error getting video details:", error);
        }
      );
    },
      (error) => {
        console.error("Error getting user videos:", error);
      }
    );
  },
    (error) => {
      console.error("Error logging in:", error);
    }
  );
}

getPassedUsersFirstVideoTitle("user1@hw.js");




console.log("Finish");