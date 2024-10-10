# IYKRA
Welcome to IYKRA! This README will guide you through the installation process and provide basic information about the project.

## Talbe of Contents

## Requirements

Before getting started, ensure that you have the following prerequisites installed on your system:

- [Docker Desktop](https://www.docker.com/) (4.11.1)

## Building Docker Images
There are 2 images that you need to build, which is an iykra_app and iykra_db images.

For the iykra_app you need move to directory iykra-app/ and running the build script command.

```
docker build -t iykra_app:latest . 
```

And then for the iykra_db you need change directory to iykra-db then running the build script command on below.

```
docker build -t iykra_db:latest . 
```

Make sure the images has a correct name, you can check the images docker that you have been build by using command.

```
docker images
```


## Creating the folder directory
On these project we need to setup volumes for database on local, because i just want to avoiding the mistake database is deleted (like when you running docker-compose down or anything).
You can create the folder by running the script on the root project directory.

```
mkdir docker-data
mkdir k8s-data
```

## Setup and Running the application
- Docker Compose
First you need to copy the .env-example and replace the name into .env, or you just need to running these script on your root project directory.

```
cp .env-sample .env
```

You can change the values of the key on the .env file based on you want, and then you need to running the command.

```
docker compose up
```

And for stopping the application you need to run.

```
docker compose down
```

- Kubernetes
There are several things you need to prepare