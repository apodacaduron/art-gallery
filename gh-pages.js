import { publish } from "gh-pages";

publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/apodacaduron/art-gallery.git", // Update to point to your repository
    user: {
      name: "Daniel Apodaca", // update to use your name
      email: "apodacaduron@gmail.com", // Update to use your email
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
