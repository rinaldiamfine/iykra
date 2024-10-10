# iykra

create directory with name is postgres-data
mkdir -p postgres-data
ls -la /Users/macbook/Documents/IYKRA/iykra/postgres-data

Just take the note, if you want to set the value for Secret you need to do this on your plain text
echo -n <your_plain_text> | base64

Setup the ConfigMap
kubectl apply -f iykra-k8s/app-config.yml

Setup the Secret
kubectl apply -f iykra-k8s/db-secret.yml

Setup the database
kubectl apply -f iykra-k8s/db/

Database checking
kubectl get pods
kubectl exec -it <pod_name> -- psql -U <username>
or
kubectl port-forward svc/iykra-db-service 5432:5432