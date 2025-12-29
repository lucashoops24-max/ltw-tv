// USER (demo login)
if (!localStorage.getItem("videos")) {
  localStorage.setItem("videos", JSON.stringify({
    vid1: {
      title: "Love of Christ",
      youtube: "VIDEO_ID_1",
      category: "sermons",
      likes: 0,
      dislikes: 0,
      comments: []
    },
    vid2: {
      title: "Worship Through Song",
      youtube: "VIDEO_ID_2",
      category: "worship",
      likes: 0,
      dislikes: 0,
      comments: []
    },
    vid3: {
      title: "Bible Story for Kids",
      youtube: "VIDEO_ID_3",
      category: "kids",
      likes: 0,
      dislikes: 0,
      comments: []
    }
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

