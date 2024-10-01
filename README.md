# Walkthrough - Boost Your Development Experience with UI5 Tooling Extensions

This repository is a step-by-step guide explaining how to build a UI5 freestyle bookshop application on top of the booskop CAP server from the [Cloud CAP Samples](https://github.com/SAP-samples/cloud-cap-samples) project.

## Preparation

Make sure to have a current supported version of [Node.js](https://nodejs.org/) installed, and a modern JavaScript IDE such as [VSCode](https://code.visualstudio.com/) or use a hosted IDE such as [SAP Business Application Studio](https://www.sap.com/products/technology-platform/business-application-studio.html).

To create projects, install [Yeoman](https://yeoman.io/) and [Easy-UI5](https://github.com/SAP/generator-easy-ui5) globally to your Node.js environment:

```sh
npm install -g yo generator-easy-ui5
```

To run the CAP server locally, you should also install the CAP SDK globally:

```sh
npm install -g @sap/cds-dk
```

Interested in more details about CAP, just got [here...](https://cap.cloud.sap/docs/).

## Step 1: Prepare the bookshop server

Download the ZIP of the [Cloud CAP Samples](https://github.com/SAP-samples/cloud-cap-samples) repository:

* Direct link to zip: https://github.com/SAP-samples/cloud-cap-samples/archive/refs/heads/main.zip
* Unpack the archive and copy the `bookshop` directory into your projects' root directory

Your folder structure should look like that now:

```sh
<root>
└── bookshop
```

To make the bookshop server usable, you need to run `npm install` in the `bookshop` directory.

Now you can test the `bookshop` server by running `npm start` and open the welcome page [http://localhost:4004](http://localhost:4004).

It has already a bookshop application based on [Vue.js](https://vuejs.org/) built-in - but we prefer [OpenUI5](https://sdk.openui5.org/)/[SAPUI5](https://ui5.sap.com/) to build our application! :wink:

Let's stop the server again and proceed...

## Step 2: Create the TypeScript application

* Create a TypeScript application using Easy-UI5 (why TypeScript: GA since UI5con 2023) => my.bookshop.app
* Quickly show the different capabilities, linting, testing (still Karma, yes), dev server and build.
* Use ui5-middleware-simpleproxy to consume bookshop OData service (connect to http://localhost:4004/browse)
* Now we can start to put the UI5 bookshop application together (copy and paste the manifest.json, the Main.view.xml and Main.controller.ts)
* Show how to connect even easier with the ui5-middleware-cap using a devDependency to the bookshop project
* Show local development performance using index-cdn to improve the turnaround times – but this requires being online – offline option is to use the ui5-middleware-serveframework
* Now we want to make it even nicer – integrate a chart using Chart.js – but let’s make it reusable with a chart library!

## Step 3: Cteate the TypeScript library

* Create a TypeScript library using Easy-UI5 => my.bookshop.lib
* Quickly show the different capabilities, linting (build the interface upfront), testing (incl. coverage), dev server and build.
* Chart.js is an OSS NPM package. In UI5 you can also consume NPM packages seamlessly using the ui5-tooling-modules tooling extension
* Add a dependency to Chart.js and show how it is being integrated and can be used inside UI5 (copy and paste Chart.ts, ChartRenderer.ts and ChartRecord.ts and copy and paste the example code in the Example.ts).
* Build the library and demo the output => explain the benefits of the addToNamespace config option for the task
* Show how to exclude the thirdparty from the library preload

## Step 4: Connecting the TypeScript UI5 library and application

* Add a dependency to the library project using npm install as a normal dependency
* Add the dependency to the library in the manifest.json and tsconfig.json (otherwise it won’t be served/transpiled during development!)
* Add the chart to the Main.view.xml (now the app fails to resolve Chart.js)
* Install the ui5-tooling-modules to consume the thirdparty packages (just as a middleware is sufficient here)
* Add the builder > settings > includeDependency to include the library in the build package of the application (e.g. if you want to build a single app including its custom libs)

## Bonus

* Move the initial app into CAPs “app” folder and add workspaces so that npm install works!
* Run the application from within the CAP server
* Move it next to CAP and connect it as dev dependency
* Run the application from next to the CAP server

## Support, Feedback, Contributing

This project is open to feature requests/suggestions, bug reports etc. via [GitHub issues](https://github.com/petermuessig/devtoberfest2024-typescript-e2e/issues). Contribution and feedback are encouraged and always welcome.

## License

This work is [licensed](LICENSE) under Apache 2.0.
