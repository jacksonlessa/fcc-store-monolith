# Order Service Monolith with DDD

This is a project of a Order maker service, following a monolith strategy,
however thinking in a DDD approach so in the future is easy to transform 
part of the project into a separated service

Used technologist:
- DDD
- Node 
- Typescript
- Jest

## Requirements
### Functional Requirements

- Products Administration
- Clients creation
- Issuance of orders
### Non-Functional Requirements

- The System must be created in decoupled modules in order to be
easy to replace or turn into a service
- A module cannot communicate directly with another module, there 
must be a Facade between the modules.


## Contexts

- product-adm
- store-catalog
- customer-adm
- checkout
- payment
- invoice

# How to Running
Node version v16.18.1 is required at least to run the Project

## Instal de project

```
npm install
```

## Run tests

```
npm test
```


# Next Steps

- Finalize Customer-Adm module
- Finalize Checkout module
- Finalize Payment module
- Finalize Invoice module
- Make facades available via API
- Make a DockerFile available to the Project
