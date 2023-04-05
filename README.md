# Posinews

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mrclag/posinews">
    <img src="assets/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Posinews</h3>

  <p align="center">
    In case you're tired of negative job market news on LinkedIn
    <br />
    <br />
    <a href="https://github.com/mrclag/posinews/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a Chrome extension that allows users to choose which news stories to hide from LinkedIn top news. When using this extension, a button will appear next to each story, which when clicked, will remove the story. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Plasmo
- [![React][react.js]][react-url]
- [![Typescript][typescript]][typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] - Add hidden story titles to storage, which will then hide the stories in future sessions
- [ ] - Add key words to phrase ban list, which will be used to hide stories in future sessions


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Any contributions you make are **greatly appreciated**.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Email: mattrclagett@gmail.com
LinkedIn: linkedin.com/in/matthewclagett
Project Link: [https://github.com/mrclag/posinews](https://github.com/mrclag/posinews)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/matthewclagett
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[typescript]: https://shields.io/badge/TypeScript-000000?logo=TypeScript&logoColor=61DAFB&style=for-the-badge
[prisma]: https://shields.io/badge/Prisma-20232A?logo=Prisma&logoColor=61DAFB&style=for-the-badge
[postgres]: https://shields.io/badge/Postgresql-000000?logo=Postgresql&logoColor=61DAFB&style=for-the-badge
[react-url]: https://reactjs.org/
[postgres-url]: https://www.postgresql.org/
[prisma-url]: https://www.prisma.io/
[typescript-url]: https://www.typescriptlang.org/



Plasmo development and build instructions:


## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
