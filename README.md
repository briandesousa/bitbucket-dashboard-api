# Overview
The  Bitbucket Dashboard API is a simple REST interface used by the Bitbucket Dashboard App to connect to a local bitbucket server.

# Design
* built using NodeJS + Express framework
* authentication between this API and the backend BitBucket server is Basic Authentication

## API Endpoints (in lieu of Swagger docs)
* /repository - rerieve a list of repositoris in the project being observed
* /project - retrieve information about the project being observed
