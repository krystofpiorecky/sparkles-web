pnpm build
docker build -t sparkles-web .
docker run -p 30100:30100 sparkles-web
