# Overview
The  Bitbucket Dashboard API is a simple REST interface used by the Bitbucket Dashboard App to connect to a local bitbucket server.

# Design
* built using NodeJS + Express framework
* authentication between this API and the backend BitBucket server is Basic Authentication

## API Endpoints (in lieu of Swagger docs)
* /repository - rerieve a list of repositoris in the project being observed
* /project - retrieve information about the project being observed

# TODO List
1. Leverage Swagger for generating API documentation
2. Externalize important configuration to config.json (i.e. Basic Auth params, URLs, ports, etc.)
3. Implement standard error handling and response
4. Implement error logging
5. OAuth authentication using PassportJS
6. Specify project to be observed by API in path parameters