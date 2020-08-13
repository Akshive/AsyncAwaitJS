const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

// createPost({ title: "Post Three", body: "Body" })
//   .then(getPosts)
//   .catch(() => console.log("err"));

//Async
async function init() {
  await createPost({ title: "Post Three", body: "Body" });

  getPosts();
}

init();
