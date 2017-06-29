export const config = {
  title: 'Fusebox Angular Universal Starter',
  outputDir: "dist",
  sourceDir: "src",
  prodOutDir: "./dist/prod",
  assetParentDir: "src/client",
  baseHref: "/",
  stylesheets: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css",
    "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  ],
  server: {
    port: 8080
  }
}