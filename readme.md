# Store Monolith with DDD

Projeto de uma de um emissor de pedidos criada em forma de monolito, porem pensando nos princípios do DDD e Solid

O que está sendo exercitado:
- DDD
- Node 
- Typescript
- Jest

## Requisitos
### Requisitos Funcionais

- Administração de produtos
- Criação de clientes
- Emissão de pedidos
### Requisitos Não Funcionais

- O Sistema deve ser criado em módulos desacoplados de forma a ser 
fácil substituir ou transformar em um serviço
- Um módulo não pode se comunicar diretamente com outro modulo dever 
haver uma Facade entre a comunicação entre os módulos.


## Contextos

- product-adm
- store-catalog
- customer-adm
- checkout
- payment
- invoice

# Como Executar

É Necessário no mínimo a versão v16.18.1 do Node para executar o Projeto

## Instalar o projeto
para instalar o projeto e rodar os testes basta executar 

```
npm install
```

## Rodar os testes

```
npm test
```


# Próximos Passos

- Finalizar módulo Customer-Adm
- Finalizar módulo Checkout
- Finalizar módulo Payment
- Finalizar módulo Invoice
- Disponibilizar UseCases Via API
- Disponibilizar um DockerFile para o Projeto
