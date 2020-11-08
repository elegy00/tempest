cd ../client
docker build -f ../docker/dockerfile.client.web.x64 -t elegy/tempest.web.x64:latest .

cd ..
docker build -f docker/dockerfile.server.api.x64 -t elegy/tempest.api.x64:latest .

docker push elegy/tempest.api.x64:latest
docker push elegy/tempest.web.x64:latest