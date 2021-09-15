//Use linkedin styling

/*
1. Look for the linkedin image linkedin.png or jpg
2. Create images folder under your public folder and paste it there. we want to use it as favicon
3. In index.html, edit the link to favicon and replace with the image
4. In index.html, edit the link to apple-touch-icon and replace with the image also
5. Add some basic styles in index.css
*/

//index.html modifeid
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/images/linkedin.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/images/linkedin.jpg" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

//index.css

/* display the vertical scroll on overflow, hide the bottom scroll on overflow */
body {
  overflow-y: scroll;
  overflow-x: hidden;
}

#root, body, html {
  background-color: #f5f5f5;
  box-sizing: border-box;
}

div, h1, h2, h3, h4, h5, h6, header, html, i, img, label, li, nav, p, small, span, ol {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
