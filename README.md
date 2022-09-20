# BE API FOOTBALL

This backend app has a structure based on a clean architecture because this one allows us to create a simple solution adaptive, and keep the core business or application logic use cases independent of frontend and external frameworks.

## The Clean Architecture Structure Of This App
----
```
  app
    - infrastructure
      - driving-adapter
      - implementation
    - modules
      - competition
        - appplication
        - domain
          - entities
          - exceptions
          - repositories
          - services
      - player
        - appplication
        - domain
          - entities
          - exceptions
          - repositories
        - team
          - entities
          - exceptions
          - repositories
```

## Used Tools
---
```
- Node.js v16
- Express as framework
- Sequelize as ORM
- Mysql v8
- Typescript
```

## Installation
---

1) Dependency: Installing them with the below command:
```
npm i
```
2) Database: The DB credentials are in the `src/db/config/config.json` file and before running the migration, create a DB and a user (with all the schema privileges) based the file specification. Then run the below command:

```
cd src/db && npx sequelize-cli db:migrate && cd ../..
```
3) Running: With the below command the app'll be running on `http://localhost:3000`

```
npm start
```

## Endpoints
---
1) To feed the DB with data based on the football API
```
/api/competition/importLeague/:codeLeague
```
2) To get all the players regarding a the `codeLeague` and `teamName` parameters
```
/api/player/getAllByLeague/:codeLeague?teamName=Fort
```
3) To get all the players regarding a `teamName` parameter
```
/api/player/getAllBy?teamName=Fort
```
4) To get all the teams regarding a `teamName` parameter
```
/api/team/getAllBy?teamName=Fort
```