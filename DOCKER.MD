START

Start/Open the Docker Desktop
Then :

From root folder: 
docker-compose up --build


< ------------------- COMMANDS ---------------------->

# 1. (Optional) show files to confirm you are in project root
ls

# 2. (Optional) build and start everything (foreground)
docker compose up --build

# OR (recommended) build, start and detach
docker compose up --build -d

# 3. watch logs (all services)
docker compose logs -f

# 4. watch logs for a single service (e.g. server)
docker compose logs -f server

# 5. see running containers and ports
docker compose ps

# 6. open a shell inside the running server container
docker compose exec server sh

# 7. run an one-off command inside a service (e.g. run migrations or seeds)
docker compose run --rm initdb npm run seed

# 8. when finished, stop & remove containers, networks, volumes
docker compose down --volumes --remove-orphans

# 9. force rebuild from scratch (no cache)
docker compose build --no-cache

# 10. clean unused images/volumes (use carefully)
docker image prune -a
docker volume prune
