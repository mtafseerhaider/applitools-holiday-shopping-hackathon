# Applitools Holiday Shopping Hackathon 2020

I have created this Hackathon project to participate in the **Applitools Holiday Shopping Hackathon 2020** challenge.
This project is based on Cypress using JavaScript language.

This README includes information about the project structure and instructions to execute the tests on all the three different versions of Applifashion application.

## Technologies

- Cypress v6.0.1 - for functional UI testing
- Applitool Eyes for Cypress v3.16.1 - for visual testing

### External Libraries Used

- Node.js:fs-extra v9.0.4 - for adding promise support to the fs methods
- Prettier v2.2.1 - as opinionated code formatter

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for evaluating my effort on this challenge.

1. Clone https://github.com/mtafseerhaider/applitools-holiday-shopping-hackathon.git locally

2. **cd applitools-holiday-shopping-hackathon** if you are not on this directory

3. **npm i** to install the project dependencies

4. Add your Applitools API Key to your system environment variables 
   Use **export APPLITOOLS_API_KEY= {yourAPIKey}** if you are on MacOs or Linux 
   Use **set APPLITOOLS_API_KEY= {yourAPIKey}** if you are on Windows 

5. Execute below NPM commands to run tests on different versions of the Applifashion app 
   a. for running tests on V1 production version 
   **npm run cy:run-pv1** 
   b. for running tests on Dev-branch version 
   **npm run cy:run-dev** 
   c. for running tests on Final production version 
   **npm run cy:run-pv2** 

## Project Structure 

### The cypress folder 

The cypress folder is the main folder which contains below different folders to serve various needs of the project. 

#### The config folder 

- contains **v1-prod.json** having environment variables used for AppliFashion V1 production version 
- contains **final-prod.json** having environment variables used for AppliFashion V2 final production version 
- contains **dev-branch.json** having environment variables used for AppliFashion V1 production version 

#### The integration folder 

This is the main folder where Cypress test runner looks for test files. Under this folder I've created another folder for Holiday Shopping specific tests. 

##### The holiday-shopping folder 

- contains **holiday-shopping.spec.js** test file that contains all three tests for AppliFashion Holiday Shopping 

#### The page-objects folder 

- contains the **MainPage.js** implemented using the very famous design pattern **Page Object Model**. This was a bit overkill for such a small project. However, since page objects are staple of designing a test suite and also offers great flexibility, reusuability and scalability. Thus, keeping in mind the project's future needs it might have I decided in favour of it. 

#### The plugins folder 

- contains **index.js** where I have dynamically set environment variables for multiple configuration files with the Node code. 

#### The support folder 

- contains **index.js** for additional imports and libraries 
- contains **index.d.ts** to allow interacting with third party JavaScript APIs in a strongly typed manner via TypeScript 

#### The utils folder 

- contains **EyesManager.js** which is a customized utility containing the required methods for visual validation with Applitools Eyes 

#### The tsconfig.json file 

This file contains the required configurations to get intelligent code completion whle working test files. 

### The cypress.json file 

This file exists at the root level and contains the user defined settings. 

### The applitools.config.js file 

This file exists at the root level and contains the desired Applitools configurations related to browsers, viewports, app name, batch name, concurrency, etc. 

### The package.json file 

This file exists at the root level and handles the project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, author and license information, and other configuration data - all of which can be vital to both npm and to the end users of the package. 

### The .prettierrc file 

This file exists at the root level and contains the configurations related to the Prettier formatter. 

## Applitools Eyes Ultrafast Grid Test Manager Results 

### Part 1 | Applitools Dashboard | Chrome Test Results 

URL of the Test Results on Applitools Dashboard is: 

https://eyes.applitools.com/app/test-results/00000251795373421782?accountId=ruqgQJOC0EaFMmy32hbAJA~~&display=details&top=00000251795373421782%281%29

### Part 2 | Applitools Dashboard | Root Cause Analysis (RCA) view 

Bug 1 - RCA link 
https://eyes.applitools.com/app/test-results/00000251795373258995/00000251795373251686/steps/1/edit?accountId=ruqgQJOC0EaFMmy32hbAJA~~&diff=eyJub2RlMSI6eyJ0b3AiOjY5MywibGVmdCI6MTUsIndpZHRoIjo1NzAsImhlaWdodCI6MTA1fSwibm9kZTFoYXNoIjotMTk0NjAxNDQ5Mywibm9kZTIiOnsidG9wIjo2NTcsImxlZnQiOjAsIndpZHRoIjo2MDAsImhlaWdodCI6MTEyN30sIm5vZGUyaGFzaCI6LTE4NTI3NDU1MTF9&mode=step-editor

Bug 2 - RCA link 
https://eyes.applitools.com/app/test-results/00000251795373258995/00000251795373251686/steps/1/edit?accountId=ruqgQJOC0EaFMmy32hbAJA~~&diff=eyJub2RlMSI6eyJ0b3AiOjc3MSwibGVmdCI6NzE1LCJ3aWR0aCI6MjYxLjcsImhlaWdodCI6MjR9LCJub2RlMWhhc2giOjEzNTQzMzIzNCwibm9kZTIiOnsidG9wIjo3NzEsImxlZnQiOjcxNSwid2lkdGgiOjI2MS43LCJoZWlnaHQiOjI0fSwibm9kZTJoYXNoIjoxMzU0MzMyMzR9&mode=step-editor

Bug 3 - RCA link 
https://eyes.applitools.com/app/test-results/00000251795373258995/00000251795373251686/steps/1/edit?accountId=ruqgQJOC0EaFMmy32hbAJA~~&diff=eyJub2RlMSI6eyJ0b3AiOjc2MSwibGVmdCI6MTA2NCwid2lkdGgiOjEyMSwiaGVpZ2h0Ijo0MH0sIm5vZGUxaGFzaCI6MTcxNTYzMjY0Nywibm9kZTIiOnsidG9wIjo3NTEsImxlZnQiOjEwNjQsIndpZHRoIjoxMjEsImhlaWdodCI6NDB9LCJub2RlMmhhc2giOjE3MTU2MzI2NDd9&mode=step-editor

### Part 3 | Applitools Dashboard | Batch Test Results 

URL of the Test Results on Applitools Dashboard is: 

https://eyes.applitools.com/app/test-results/00000251795371622773?accountId=ruqgQJOC0EaFMmy32hbAJA~~&display=details&top=00000251795371622773%283%29

## Author

- MUHAMMAD TAFSEER HAIDER  
  Principal Software Engineer, SDET 
  Afiniti

## Contact 

In case you are stuck and not able to run my tests for any reason, please contact me on: 

E-mail: mtafseer.haider@gmail.com OR tafseer.haider@afiniti.com, WhatsApp: +923008359570
