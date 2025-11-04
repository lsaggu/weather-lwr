# LWC Weather Reporting

This LWR application is built from a boilerplate template. The app was created by following the instructions on lwc.dev after installing Node.js (and npm). After initialization, I followed the tutorial proveded by Arun Kumar on SFDC Lessons: [LWC OSS: Unleashing the Power of Modern Web Development](https://sfdclesson.com/2023/02/01/lwc-oss-unleashing-the-power-of-modern-web-development/)

## Project Setup

The directory structure looks like this:

```fs
src/
  ├── assets/           // static assets
  │   └── recipes-logo.png
  |   └── favicon.ico
  └── modules/          // lwc modules
      └── resources/
          └── bootstrap/
              └── bootstrap.js      // pull in bootstrap styles as page is loading
      └── main/
          └── app/
              ├── app.css
              ├── app.html
              └── app.js
          └── weather/
              ├── weather.css
              ├── weather.html
              └── weather.js
lwr.config.json         // lwr configuration
package.json            // npm packaging configuration
```

## Configuration

The LWR server is configured in `lwr.config.json`, at the root of the project. The **LWC Boilerplate** example had one LWC module and one server-side route. I added an additional module for resources (as seen above) and renamed the 'example' module to 'main'.

```json
// lwr.config.json
{
    "lwc": { "modules": [{ "dir": "$rootDir/src/modules" }] },
    "routes": [
        {
            "id": "main",
            "path": "/",
            "rootComponent": "main/app"
        }
    ],
    "assets": [
        {
            "alias": "assetsDir",
            "dir": "$rootDir/src/assets",
            "urlPath": "/public/assets"
        },
        {
            "alias": "favicon",
            "file": "$rootDir/src/assets/favicon.ico",
            "urlPath": "/favicon.ico"
        }
    ]
}
```

## Running the Project in dev Mode

I used npm.

### With NPM

```bash
npm install
npm run start # run `npm run dev` for development mode
```

### With Yarn:

```bash
yarn install
yarn start # `yarn dev` for development mode
```

Open the site at [http://localhost:3000](http://localhost:3000)

## Project Status Log

- 2025-11-04
    - Managed to get the application running!
    - Took too long trying to include Bootstrap styles. Was not able to successfully introduce a static layout because route to root component would not resolve. Not sure if this is an issue with running on Windows.
    - May consider launching on Heroku in the future
    - Need to consider secure method to store and access API Key - may need to create separate backend service in Salesforce or using a backend Node.js server.

## Resources

- [https://lwc.dev/](https://lwc.dev/) - Lightning Web Components web framework with instructions to quickly spin up a new project.
- [LWC OSS: Unleashing the Power of Modern Web Development](https://sfdclesson.com/2023/02/01/lwc-oss-unleashing-the-power-of-modern-web-development/) by Arun Kumar
