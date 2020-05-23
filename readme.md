# cap-bookshop-typescript
This is a sample implementation of the [SAP Application Programming Model (CAP)](https://cap.cloud.sap/) Node.js Runtime using TypeScript.

The implementation was based on the Bookshop example of [SAP samples](https://github.com/SAP-samples/cloud-cap-samples).

The following two tools were used in this example:

## cds2types
This tool creates interfaces and enums from the CDS definitions for all entities. These interfaces can be used in the TypeScript code to implement a complete and consistent typing.

## cds-routing handlers
This tool is used for the implementation of class-based implementation of CDS handlers.

## Running the Sample
Install all dependencies:
```
npm install
```
Build the project:
```
npm run build
```
and deploy to local sqlite database:
```
npm run deploy
```
And finaly run the server:
```
npm run start
```
## Content & Project structure
| Folder        | Description   |
| ------------- | ------------- |
|`/db`|Domain models and database-related content|
|`/src`|Your code written in TypeScript. All your service implementations and handlers go in here and will be compiled to JavaScript when building your project.|
|`/srv`|The compiled JavaScript resources can be found here. Modifications to this code will be overwritten each time your TypeScript code is recompiled. **DO NOT MODIFY THE CODE IN HERE.**|

**Note:**
In a real world project, the `/srv` folder would never be added to the git repository because it only contains compiled sources. I have included it here for illustration purposes only.
