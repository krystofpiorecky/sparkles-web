pnpm build
docker build -t sparkles-web .

NEW
docker run -d -p 30100:30100 --name sparkles-web sparkles-web
START
docker start sparkles-web
REMOVE
docker rm sparkles-web

docker save sparkles-web | ssh -C root@38.242.205.186 docker load

All Images
docker images

All Containers
docker ps -a