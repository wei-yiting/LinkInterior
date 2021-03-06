<p align="center">
  <img src="src/utils/images/readmeImages/logo.png" width="300px">
  <br/>
A webpage builder SPA developed using React/React context, featuring WYSIWYG user experience.<br/>
</p>
<table>
<tr>
<td>
LinkInterior is a webpage builder for interior engineering/design services to publish their own page with real-time edit/preview mode toggle switch, template switch, additional blocks for extended content and one-click publishing features.</td>
</tr>
</table>
<p align="center">
  <img src="src/utils/images/readmeImages/homepage.png" width="800px">
</p>

<p align="center">
  <b>
  Demo: https://linkinterior.com.tw/
  </b>
</p>

<br/>
<p align="center">
  <b>
  Test Account
  </b>
</p>
<p align="center">
  Email: test@gmail.com
</p>
<p align="center">
  Password: test123
</p>

## Used Skills

| skill                     | description                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| React ( hook )            | SPA, reusable functional components, custom hooks                                                                                    |
| React Router              | SPA, public and private route set up                                                                                                 |
| React Context             | pass data through nested components tree                                                                                             |
| styled-components         | CSS-In-JS library for styling                                                                                                        |
| Tailwind CSS, Tailwind UI | help accelerating development speed                                                                                                  |
| Third-Party Modules       | [Browser Image Compression](https://www.npmjs.com/package/browser-image-compression), [Swiper](https://www.npmjs.com/package/swiper) |
| Prettier                  | keep coding style consistent and better formatted                                                                                    |
| ESLint                    | help debugging, enhance development efficiency                                                                                                       |
| Normalize.css             | cross-browsers homogeneous style development                                                                                         |
| Firebase                  | Firestore, Storage, Authentication, Hosting for Back-End                                                                             |
| Miro                      | Wireframe Design                                                                                                                     |

<br/>

## Key Development Techniques

### React Components Structure Design

Accomplish

- WYSIWYG (edit/preview toggle)
- Real-time Template Switch

by 
1. shared React components design
2. nested components tree with the usage of React Context to pass data
<img src="src/utils/images/readmeImages/template-component-structure.jpg">

### Custom Hook For Page Publishing

Build a custom hook for page publishing procedure

1. compress all images to proper size
2. upload compressed image to Firebase Storage, retrieving URLs of uploaded images
3. create new Firestore Database document with image urls and other data
<p align="center">
  <img src="src/utils/images/readmeImages/publish-custom-hook.jpg" width="750px">
</p>

## Application Features

### WYSIWYG: Real-time Edit/Preview mode toggle

- User can toggle between Edit Mode and Preview Mode any time during their page compiling process
- Preview mode allow user to inspect final publishing result and adjusting accordingly, achieving WYSIWYG user experience.

<img src="src/utils/gif/editPreview.gif" width="650px">

<br>

### Real-Time Template Switch

In both Edit and Preview mode, user can switch template to inspect and decide which one best-presented their webpage.
<img src="src/utils/gif/templateSwitch.gif" width="650px">

<br>

### Extended Page Content Using Block

User can select different types of block and add more image, text content to their own page.
<img src="src/utils/gif/extendedBlock.gif" width="650px">

<br>

### One-Click Publishing

User can publish their own page with simply one-click. <br>
After few seconds of processing, user's own page will be published and ready for the world to visit.
<img src="src/utils/gif/publish.gif" width="650px">
