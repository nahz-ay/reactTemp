/** @type {import('next').NextConfig} */
const path = require("path");


const nextConfig = {
  images: {
    domains: [
      "placehold.co"
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "/src/styles/main.scss";`,
  },
};



module.exports = nextConfig
