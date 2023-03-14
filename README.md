<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.</br>
Be side that I use the TypeORM and Postgresql to build database.</br>
<a>My idea to work on this project is:</a></br>
- When start the sever i will check the dabase existed the transaction element or not. If no data found, i will read the CSV file and write the transaction to database </br>
- Right now the process for import data to database sever is longtime. You have to waited long time to insert fully value to database. So i think you can test with a batch of data to check the query function work or not. </br>
- You can query on domain: <p>localhost:3000/transaction</p> after the project started:</br>
  - I support query a token: <a>localhost:3000/transaction?token=BTC</a> </br> 
  - I support query a date with dateStart and dateEnd params: <a>localhost:3000/transaction?dateStart=1571966499&dateEnd=1571966685</a> </br> 
  - I support query a date and a token with dateStart,dateEnd and token params: <a>localhost:3000/transaction?dateStart=1571966499&dateEnd=1571966685&token=BTC</a> </br>

I decision with this idea because: </br>
 - Writing value to database will make the system easier to maintain and reuse.
But I'm really confused about how I can handle it so that saving data to the database can be faster.
I also thought we could calculate the profolio on a day by day before save them to the database, but now I can't.</br>
Regardless of the test results, if you have a solution or sample code, if possible, please share it with me.
 

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# first step
$ docker-compose up (which will start the Posgrest SQL sever)

# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
# watch mode
$ yarn run start:dev
