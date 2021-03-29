# GO RESTAURANT

<h1 align="center">
    <img src="./docs/running.gif" alt="App">
</h1>

[![LEIAME.md](https://img.shields.io/badge/-Leia%20em%20Portugu%C3%AAs-brightgreen?style=for-the-badge)](./LEIAME.md)

## Summary

- [🧾 About](#-about)
- [🚀 Main technologies](#-main-technologies)
- [🔽 How to download the project](#-how-to-download-the-project)
- [💻 How to run the project](#-how-to-run-the-project)
- [👌 How to use the app](#-how-to-use-the-app)
  <br>

## 🧾 About

GO RESTAURANT is a ReactJS application. An administrative panel example to Italian restaurants register and edit their dishes (name, description, price and availability).
<br>

## 🚀 Main technologies

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [JSON Server](https://github.com/typicode/json-server)

_(You can see all the dependencies in the [package.json](./package.json) file)_
<br>

## 🔽 How to download the project

```bash
$ git clone https://github.com/victorbadaro/ignite-challenge-gorestaurant
```

<br>

## 💻 How to run the project

The commands below use the [yarn](https://yarnpkg.com/) package manager.

```bash
# 1. Install all the project dependencies
$ yarn

# 2. Run JSON Server Fake API
yarn server

# 3. Run the app
$ yarn start

# You can also generate the files to put the app into production with:
$ yarn build

# the files will be available in the dist/ folder
```

If everything runs correctly, a message will be displayed on your terminal informing that the app code has been successfully compiled:

```bash
Compiled successfully
```

After that open your browser and access: http://localhost:3000/

✅ Nice! If you followed all the steps above correctly the project will be running locally on your machine already.
<br>

## 👌 How to use the app

- To register a new dish you can click on the "Novo Prato" button on the top right corner of the page and fill the form that will be shown on the screen:
  <img src="./docs/add.gif" alt="Add">

- To edit, delete or even change the availability of the dishes:
  <img src="./docs/edit.gif" alt="Edit">

<br>

---

<p align="center">This project was created using this <a href="https://github.com/rocketseat-education/ignite-template-reactjs-refactoring-classes-ts">template</a> and developed with ❤ by <a href="https://github.com/victorbadaro">Victor Badaró</a></p>
