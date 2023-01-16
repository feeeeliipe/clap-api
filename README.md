# Clap API 

3, 2, 1... 👏

## Installing ArgoCD on K8s Cluster

1. Create a namespace and install ArgoCD within the cluster
```
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

2. Accessing ArgoCD dashboard

```
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

3. Getting the current password to ArgoCD dashboard

```
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
```

test-code-build-aws
