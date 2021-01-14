## [Leia esta página em português](https://github.com/ojeffpinheiro01/jeffDeliver/blob/main/README-PT.md)
<h1 align="center">
    <img alt="Happy" title="JeffDeliver" src="https://user-images.githubusercontent.com/60162736/104525364-c029d600-55de-11eb-8f29-106c7e9f6783.png">
   JeffDeliver
</h1>
  
<p align="center">
  <a href="#book-overview">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#eye-preview">Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;    
  <a href="#computer-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#fire-how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-how-to-contribute">How to contribute</a>
</p>

# :book: Overview
 <p>
 The <strong> JeffDeliver </strong> application was developed during the 2nd edition of DevSuperior Week (#SDS2), an event organized by <a href="https://devsuperior.com.br"> DevSuperior </a>
   It was built to facilitate ordering and delivery. The order request is made via the web and the delivery person receives the information via a mobile app.
</p>

# :eye: Preview
## :desktop_computer: Web
<p>
  <img src="https://user-images.githubusercontent.com/60162736/104526969-70e5a480-55e2-11eb-90ab-b40337fab38c.png" alt="JeffDeliver Web" width="750px"><br />
  <p align="center">Home page</p>
  <img src="https://user-images.githubusercontent.com/60162736/104528303-a8098500-55e5-11eb-8887-9c71ec3a1d7b.png" alt="JeffDeliver Web" width="750px"><br />
  <p align="center">Order page</p>
</p>

## :iphone: Mobile 
<p>
  <img src="https://user-images.githubusercontent.com/60162736/104526473-3f200e00-55e1-11eb-8c54-8f41dbf92fcb.png" alt="JeffDeliver Mobile map" width="400px">
  <img src="https://user-images.githubusercontent.com/60162736/104526607-98883d00-55e1-11eb-8346-a7694d5ecc9c.jpg" alt="JeffDeliver Mobile" width="400px">
  <img src="https://user-images.githubusercontent.com/60162736/104527289-1d278b00-55e3-11eb-8bd0-3b291e34becc.png" alt="JeffDeliver Mobile" width="400px">
</p>

<p>
     The layout was developed by <a href="https://github.com/washingtonsoares"> Washington Soares </a>, you can access figma <a href = "https://www.figma.com/file/ LAIvIzyaJsSl2A9NMrnR7W /? Viewer = 1 & node-id = "> here </a>
   </p>

---


# :computer: Technologies
This project was developed with the following technologies:
<details>
  <summary>Frontend Web</summary>

- [ReactJS](https://pt-br.reactjs.org)
- [Leaflet](https://leafletjs.com)
- [React Leaflet](https://react-leaflet.js.org)
- [Toastify](https://www.npmjs.com/package/react-toastify)
- [Axios](https://github.com/axios/axios)
- [Typescript](typescriptlang.org/)
- [React Router](https://reactrouter.com/)
</details>

<details>
  <summary>Frontend Mobile</summary>

- [React Native](https://reactnative.dev)
- [React Native Community - Masked View](https://docs.expo.io/versions/latest/sdk/masked-view/)
- [Expo](https://expo.io)
- [Expo Google Fonts - Open Sans](https://docs.expo.io/guides/using-custom-fonts/)
- [Intl](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [React Navigation](https://reactnavigation.org)
- [Typescript](typescriptlang.org/)
- [Axios](https://github.com/axios/axios)

</details>

<details>
  <summary>Backend</summary>

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://typescriptlang.org/)
- [Postgres](https://www.postgresql.org)
- [Sprint Boot](https://spring.io/projects/spring-boot)
</details>
---

# 🌎 Deploy
### Back-end: [Heroku](https://jeff-sds2.herokuapp.com)<br />
### Front-end WEB: [Netlify](https://jeffdeliver-sds2.netlify.app)<br />

# :fire: How to use
## :white_flag: Precondition
You must have installed:

- NodeJS
- Package manager (NPM OR Yarn)

## 💾 Clone this repository

```bash
$ git clone https://github.com/ojeffpinheiro01/jeffDeliver.git
```

## 📁 Enter the folder

```bash
$ cd jeffDeliver
```

## 🔧 Install the dependencies

```bash
cd backend && yarn install
cd front-web && yarn install
cd mobile && yarn install
```


## 🌐 Running the Server

- Install and configure the postgreSQL database

- Import as a Maven project into your Java IDE

- Create the tables with the code in the data.sql file in resources

- Fill in the information for the application.properties files

- Run as Spring Boot application


## :computer: Front-end WEB
Enter the folder

```bash
$ cd front-web
```

Run the application

```bash
$ yarn start
```

## :iphone: Front-end Mobile

Enter the folder
```bash
$ cd mobile
```

Run the application
```bash
$ yarn start
```
---

# :gear: How to contribute
- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

---
