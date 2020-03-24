# Docker Compose - React, Laravel, MySQL, PhpMyAdmin
React, Laravel, MySQL and PhpMyAdmin with Docker Compose.

## Frontend Container
This container contains NodeJS and React enviroment with the following versions;
- NodeJS 13.10.1 Alpine
- React 16.13.0
- Webpack 4

## Backend Container
This container created for backend support. The aim is serving different API endpoints via Laravel. It contains the following software versions;
- PHP 7.2.5 FPM
- Laravel 7

## MySQL and PhpMyAdmin

MySQL Version: 5.7.29

## Using the Project

Execute the following command and the Docker will build the images for containers;

```
docker-compose up --build
```

After the first build, please use the following command for preventing unnecessary builds;

```
docker-compose up --d
```

### To-Do

1. Webpack and Babel configuration for Frontend part
2. DB Enviroment variables and migration configuration for Laravel
