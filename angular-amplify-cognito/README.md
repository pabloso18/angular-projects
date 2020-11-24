# AmplifyAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Run server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Documentation

To get more help on the Angular Amplify [Angular Amplify](https://docs.amplify.aws/start/q/integration/angular).


## Configuration Steps

we need to install a couple of dependencies: AWS Amplify and AWS Amplify Angular

`
$ npm install --save aws-amplify
$ npm install --save aws-amplify-angular
`

Next go to tsconfig.app.json file and include node for the types in compilerOptions field.
`
"compilerOptions": {
  "outDir": "../out-tsc/app",
  "types": ["node"] // node is required 
  }
`

 For Angular 6+ you need to add this to your pollyfill.ts

 `
 (window as any).global = window;
(window as any).process = {
  env: { DEBUG: undefined },
};
`

We need to create new file called aws-exports.js inside your Angular application 'scr/aws-exports.js', which holds all the configuration related to AWS Cognito.

 we need to import these configurations to our app. In your main.ts file, you need to add the following imports:
 `
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'; 

Amplify.configure(awsconfig);
 `

Sometimes depends of who you setup your Angular project, you need to add this line (on tsconfig.app.json) to secure that your project can read native JS file:

`
"compilerOptions": {
    "outDir": "./out-tsc/app",
    "types" : ["node"],
    "allowJs": true -- this line
  }
`


 In your root module src/app/app.module.ts, you can import AWS Amplify modules as following:

`
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular'

@NgModule({
  ...
  imports: [
    ...
    AmplifyAngularModule
  ],
  ...
  providers: [
    ...
    AmplifyService
  ]
  ...
})

`




