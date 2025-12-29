// USER (demo login)
if (!localStorage.getItem("user")) {
  localStorage.setItem("user", JSON.stringify({
    name: "GuestUser",
    avatar: "https://i.pravatar.cc/100"
  }));
}

const user = JSON.parse(localStorage.getItem("user"));

// VIDEOS DATABASE
const videos = {
  "vid1": {
    title: "Love of Christ",
    category: "sermons",
    likes: 0,
    dislikes: 0,
    comments: []
  }
};

localStorage.setItem("videos", JSON.stringify(
  JSON.parse(localStorage.getItem("videos")) || videos
));

