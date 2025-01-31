# FullCycle 3.0
## Desafio Docker + Go

### Desafio

O desafio é composto por:
- Criar uma imagem Docker utilizando Golang
- A imagem deverá ser disponibilizada no DockerHub
- Ao executar a imagem, deverá resultar em um print da menagem `Full Cycle Rocks!!`
- A imagem deverá ter menos de 2MB

### Resultado
Este repositório contém o arquivo em Golang e o Dockerfile utilizados para gerar a imagem.

A imagem está disponibilizada [no DockerHub](https://hub.docker.com/repository/docker/thainarafurforo/desafio-go/general) e pode ser rodada através do seguinte comando:

```bash
docker run thainarafurforo/desafio-go
```

O tamanho total da imagem é 2.13MB.

Ao rodar a imagem irá ser printado no terminal a mensagem "Full Cycle Rocks!!".

### Referências

Além das aulas do FullCycle, foram usados como referência para este desafio:
- [[Docker] Go language-specific guide](https://docs.docker.com/guides/golang/build-images/)
- [[Golang] Tutorial: Get started with Go](https://go.dev/doc/tutorial/getting-started)
- [[Aprenda Golang] Como fazer uma imagem Docker com multi stage build](https://aprendagolang.com.br/como-fazer-uma-imagem-docker-otimizada-com-multi-stage-build/)
