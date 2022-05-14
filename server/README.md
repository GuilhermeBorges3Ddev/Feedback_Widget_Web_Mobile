# ABOUT BACK END CONFIGS AND COMMANDS:

* Install the typescript superset for project with Node types and ts-node-dev to observe the modifications on SS with these single command:

`npm i typescript @types/node ts-node-dev -D`

* To create the tsconfig.json on the project use on of those 2 commands bellow:

``npx typescript --init``
``npx tsc --init``

* With the tsconfig.json created remember to change the ECMA version, the source and output directories:

```
"compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Enable incremental compilation */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2020",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h' */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */
    // "reactNamespace": "",                             /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "rootDir": "./src",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like `./node_modules/@types`. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "resolveJsonModule": true,                        /* Enable importing .json files */
    // "noResolve": true,                                /* Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */
    "outDir": "./dist",  
    ...
```

* Configure your .env into /src to make your server consume the correctly DB, example of .env:

```
DATABASE_URL="file:./dev.db"
```

* After run these command to crete our dist/ output folder:

`npm run build`

* Install Express and his types to make the HTTP routes system:

`npm i express`
`npm i --save-dev @types/express`

* Prisma ORM installation and creation of schema.prisma:

`npm i prisma -D`
`npm i @prisma/client`
`npx run prisma`

* To create the tables on Prisma based on your schema and start project:

`npx prisma migrate deploy && npm run start`

* To view the Prisma Studio

`npx prisma studio`

* For send an email after a Feedback insertion on our DB install nodemailer and his types:

`npm install nodemailer`
`npm install @types/nodemailer`

* Here we're using SOLID:
```
  1) Single Responsibility Principle
  2) Open/Closed Principle
  3) Liskov Substitution Principle
  4) Interface Segregation Principle
  5) Dependency Inversion Principle
```
* Installing Jest and running the initial config:

`npm install jest -D`
`npx jest --init`
`npm install ts-node -D`
`npm i @types/jest -D`

* Installing a TS for JS compiler called SWC, which is faster than Babel:

`npm i -D jest @swc/jest`

* After install SWC insert into jest.config.ts the content bellow replacing "transform":
```
transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
```

* Now you can test the application using:

`npm run test`

* I've installed Cors to communicate our backend with our frontend without headers restrictions:

`npm i cors`
`npm i @types/cors -D`

* In package.json has a script to run and watch the project, just run:

`npm run dev`

* An alternative to the command above is run the server using /dist:

`npm run start`