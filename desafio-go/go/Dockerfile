FROM golang:1.23.5-alpine AS build

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -ldflags "-s -w" -o go-app main.go

FROM scratch

COPY --from=build /app/go-app ./

ENTRYPOINT [ "/go-app" ]