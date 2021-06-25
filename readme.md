# cap-bookshop-typescript

This is a sample implementation of the [SAP Application Programming Model (CAP)](https://cap.cloud.sap/) Node.js Runtime using TypeScript.  
The implementation is based on the Bookshop example of [SAP samples](https://github.com/SAP-samples/cloud-cap-samples).

## Usefull packages

The following two tools were used in this example:

### [cds2types](https://www.npmjs.com/package/cds2types)

Module to convert CDS definitions to native TypeScript types.  
It creates interfaces and enums from the CDS definitions for all entities. These interfaces can be used in TypeScript to implement a complete and consistent typing.

### [cds-routing-handlers](https://www.npmjs.com/package/cds-routing-handlers)

Module to route and implement CDS handlers via a class based system in Typescript.

## How it works

A standard CAP project has the following project structure:

```
CAP-Project
├── db
│   ├── schema.cds (Domain models)
├── srv
│   ├── service.cds (Service models)
│   ├── service.js
├── package.json
```

This structure can be extended in a TypeScript based project with a `src` folder. This folder contains the implementations of the handlers and any other code in TypeScript.

The build of a project now consists of the following steps:

1. First, `cds build` builds the contents of `srv` and writes it to the output folder (`/gen/srv/srv` by default).
2. Second, the TypeScript code from `src` is compiled into the output folder of CAP (`./gen/srv/srv` by default).  
   See config `compilerOptions.outDir` of `tsconfig.json`

Since the implementation of the handlers is in the `src` folder as TypeScript code, CAP compiles only the \*.cds files of the `srv` folder and copies them to the output folder.
Then, the TypeScript code must be compiled directly into CAP's output folder.

> 📣 The two build steps can also be switched, the TypeScript compiler can compile into the `srv` folder and CAP copies the files into the output folder. However, this approach was not used since the TypeScript compiler can also compile directly into the output folder, which save a step in cds build.

### Content & Project structure

```
CAP-Project-TypeScript
├── db
│   ├── schema.cds (Domain models)
├── src
│   ├── service.ts
│   ├── someOtherCode.ts
├── srv
│   ├── service.cds (Service models)
├── package.json
├── tsconfig.json
```

The following is an explanation of the project structure

| Folder | Description                                                                                                                                              |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/db`  | Domain models and database-related content                                                                                                               |
| `/src` | Your code written in TypeScript. All your service implementations and handlers go in here and will be compiled to JavaScript when building your project. |
| `/srv` | This folder contains only the cds files of the service so that CAP can find them during build. **DO NOT MODIFY THE CODE IN HERE.**                       |

## Running the Sample

Install all dependencies:

```
npm install
```

### Local Development

For local development, **[nodemon](https://nodemon.io/)** is used, which restarts the node service when changes are made to the TypeScript sources. Here the sources are recompiled and the service is restarted.

```
npm run dev
```

If the sources are only to be built without starting the node service, this can be done by using the build script:

```
npm run build
```

The following script can be used to deploy to the local SQLite database:

```
npm run deploy
```

## MTA Definition

In `mta.yaml` you can find an example how to configure it for the TypeScript project.
