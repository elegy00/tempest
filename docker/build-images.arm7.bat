cd ../client
docker build -f ../docker/dockerfile.client.web.arm7 -t elegy/tempest.web.arm7:latest .

cd ..
docker build -f docker/dockerfile.server.api.arm7 -t elegy/tempest.api.arm7:latest .

docker push elegy/tempest.api.arm7:latest
docker push elegy/tempest.web.arm7:latest
