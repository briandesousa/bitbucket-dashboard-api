# Overview
The  Bitbucket Dashboard API is a simple REST interface used by the Bitbucket Dashboard App to connect to a local bitbucket server.

# Design
* built using NodeJS + Express framework
* authentication between this API and the backend BitBucket server is Basic Authentication

# TODO List
1. Leverage Swagger for generating API documentation
2. Externalize important configuration to config.json (i.e. Basic Auth params, URLs, ports, etc.)