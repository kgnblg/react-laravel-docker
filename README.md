# Docker Compose - React, Laravel, MySQL, PhpMyAdmin
Just a basic boilerplate to start directly coding on React, Laravel, MySQL and PhpMyAdmin with Docker Compose.

## Frontend
- NodeJS 13.10.1 Alpine
- React 16.13.0
- Webpack 4

## Backend
- PHP 7.4 FPM Alpine
- Laravel 8
- Composer 1.10
- NodeJS 14.17.0 Alpine

## MySQL and PhpMyAdmin

MySQL Version: 5.7.x

## Using the Project

Execute the following command and the Docker will build and run the containers;

```
docker-compose up --build
```

### To-Do

1. Webpack and Babel configuration for Frontend & Updating the versions of the dependencies in Frontend
2. Creating some examples in Backend & Frontend, example request & response.

### Contribution

Feel free to contribute this project.

### Changelog

#### 2021-07-31
- **[Backend]** PHP version updated to 7.4
- **[Backend]** Laravel update 7 to 8
- **[Backend]** Composer & NPM update and audits
- **[Backend]** Docker multistage build
- **[Frontend]** NPM update and audits