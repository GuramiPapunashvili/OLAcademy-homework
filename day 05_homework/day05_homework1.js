console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email, password, callback) {
    setTimeout(() => {
        const email_start = email.split('@');
        console.log(`Now we have the data of user: ${email_start[0]}`);
        callback({ userEmail: email });
      }, 3000);
  }

function getUserVideos(email, callback) {
    setTimeout(() => {
      callback(usersDB[//...]);
    }, 2000);
  }

  const getPassedUsersFirstVideoTitle = (user) => {

    loginUser("user1@hw.js", "1234", (result) => {
      console.log("user:", result);
      
  
      getUserVideos(result.userEmail, (videos) => {
        console.log("videos:", videos);
  
        videoDetails(videos[0], (title) => {
          console.log("title:", title);
  
        })
      })
    })
  }  

console.log("Finish");