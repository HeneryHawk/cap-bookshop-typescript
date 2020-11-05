# cap-bookshop-typescript
This is a sample implementation of the [SAP Application Programming Model (CAP)](https://cap.cloud.sap/) Node.js Runtime using TypeScript.

The implementation was based on the Bookshop example of [SAP samples](https://github.com/SAP-samples/cloud-cap-samples).

The following two tools were used in this example:

## [cds2types](https://www.npmjs.com/package/cds2types)
CLI to convert CDS definitions to native Typescript types.
It creates interfaces and enums from the CDS definitions for all entities. These interfaces can be used in TypeScript to implement a complete and consistent typing.

## [cds-routing-handlers](https://www.npmjs.com/package/cds-routing-handlers)
Package to route and implement CDS handlers via a class based system in Typescript.

## Running the Sample
Install all dependencies:
```
npm install
```
### Local Development
For local development, nodemon is installed, which restarts the node service when changes are made to the TypeScript sources. Here the sources are recompiled and the service is restarted.
```
npm run dev
```
If the sources are only to be built without starting the node service, this can be done as follows:
Build the project:
```
npm run build
```
The following script can be used to deploy to the local SQLite database:
```
npm run deploy
```

## MTA Definition
In `mta.yaml` you can find an example how to configure it for the TypeScript project.

## Content & Project structure
| Folder        | Description   |
| ------------- | ------------- |
|`/db`|Domain models and database-related content|
|`/src`|Your code written in TypeScript. All your service implementations and handlers go in here and will be compiled to JavaScript when building your project.|
|`/srv`|This folder contains only the cds files of the service so that cds can find them during build. **DO NOT MODIFY THE CODE IN HERE.**|

