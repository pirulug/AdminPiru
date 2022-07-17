const purgecss = require("@fullhuman/postcss-purgecss");

process.env.NODE_ENV === "production"
  ? (module.exports = {
      plugins: [
        require("autoprefixer"),

        purgecss({
          content: ["./static/*.html"],
        }),
      ],
    })
  : (module.exports = {
      plugins: [require("autoprefixer")],
    });
