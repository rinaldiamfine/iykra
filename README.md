# IYKRA
Welcome to IYKRA! This README will guide you through the installation process and provide basic information about the project.

## Talbe of Contents
- [Requirements](#requirements)
- [Building Docker Images](#building-docker-images)
- [Creating the folder directory](#creating-the-folder-directory)
- [Setup and Running the application](#setup-and-running-the-application)
- [Checking and Testing](#checking-and-testing)

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
### Docker Compose
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

### Kubernetes
* There are several things you need to setup, the first is you need to copy and rename the app-config.yml-example, db-secret.yml-example and db-pv.yml-example into app-config.yml, db-secret.yml and db-pv.yml or you can run the script on main project directory.

```
cp <PROJECT_DIRECTORY_PATH>/iykra-k8s/app-config.yml-example <PROJECT_DIRECTORY_PATH>/iykra-k8s/app-config.yml
cp <PROJECT_DIRECTORY_PATH>/iykra-k8s/db-secret.yml-example <PROJECT_DIRECTORY_PATH>/iykra-k8s/db-secret.yml
cp <PROJECT_DIRECTORY_PATH>/iykra-k8s/db/db-pv.yml-example <PROJECT_DIRECTORY_PATH>/iykra-k8s/db/db-pv.yml
```

Make sure your `<PROJECT_DIRECTORY_PATH>` is correct, to know about your project directory you can use command `pwd` on your terminal.

* Open the iykra-k8s/db/db-pv.yml files, and changing the `<YOUR_ACTUAL_PATH>` (code line 14) into the k8s-data directory path that you already created on the [Creating the folder directory](#creating-the-folder-directory) section.

* You can changed the values on the files iykra-k8s/app-config.yml and iykra-k8s/db-secret.yml, but for your note the values on iykra-k8s/db-secret.yml need to be encoded with base64. You can encode your plain text using the command.

```
echo -n <YOUR_PLAIN_TEXT> | base64
```

* You need to apply the configuration on kubernetes by running the command on your project root directory.
```
kubectl apply -f iykra-k8s/app-config.yml
kubectl apply -f iykra-k8s/db-secret.yml
kubectl apply -f iykra-k8s/db
kubectl apply -f iykra-k8s/app
```

* To checking the status of the pods, you can also using the command.

```
kubectl get pods
```

## Checking and Testing
- Database
If you using the docker to running the application, you can also checking on tools using PgAdmin or Tableplus or you can check via docker exect.
```
docker exec -it <container_name> psql -U <username>
```

And if you using the kubernetes to run, you need to export the services first by using this command. And then you can connect using another tools like PgAdmin or Tableplus.

```
kubectl port-forward svc/iykra-db-service 5432:5432
```

or you can also go through by using command.

```
kubectl exec -it <pod_name> -- psql -U <username>
```

- API
You can go to the url on your browser `http://127.0.0.1:3000/docs/`, in here you can test the API using the swagger. You can change the port 3000 based on your configuration.
![API Screenshot](https://github.com/rinaldiamfine/iykra/blob/main/assets/api-image.png?raw=true)