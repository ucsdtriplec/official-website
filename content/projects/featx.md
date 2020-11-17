---
title: FeatX
description: 'An efficient and creative platform for artists, producers and companies inside or outside music industry to collaborate projects, share resources and protect original contents'
---
## Demo

![homepage screenshot](https://placeholder.com/assests/images/yyy.jpg)

Visit https://www.example.com to see the demo in action!

## How to run

```shell
# clone repo to local disk
git clone https://github.com/andyyang352/FeatX.git featx

cd featx
# install dependency
yarn install
# start frontend server on localhost:3000
yarn start

cd server
```

Go to [application.yaml](server/src/main/resources/application.yaml) and change the url, username, password under spring.datasource to correct value  

```shell
# clean previous build and install
./mvnw clean install
# start Spring boot application on localhost:9743
java -jar target/featx-0.0.1-SNAPSHOT.jar com.triplec.featx.FeatxApplication
# swagger documentation can be visited at localhost:9743/swagger-ui/
```

## Tech stack

### Frontend

| Name      | Function                            |
| ----------| ------------------------------------|
| React.js       | Frontend framework             |

### Backend

| Name                | Function
| --------------------| ---------------------------------------------------- |
| SpringBoot          | Bean container + MVC framework                       |
| SpringSecurity      | Authentication and Authorization                     |
| MySQL               | SQL database                                         |
| Swagger-UI          | Documentation generation tool                        |
| Hibernator-Validator| Validation framework                                 |
| Elasticsearch       | Search engine                                        |
| Redis               | Distributed cache                                    |
| LogStash            | Data pipeline for Elasticsearch                      |
| Lombok              | Tool to reduce boilerplate code for model/data   objects             |
| Junit + Mockito     |  Test framework                                      |  

## Progress

- [ ] sign up and sign in
- [ ] set up account
- [ ] setting
  - [ ] account privacy
  - [ ] help & feedback
  - [ ] log out
  - [ ] cancel account
- [ ] notification
  - [ ] followed
  - [ ] messaged
  - [ ] commented
- [ ] home
  - [ ] browse posts
  - [ ] explore
  - [ ] following
  - [ ] trending
  - [ ] search

## Help

Thanks for using FeatX. Your feedback is important to us. If you have any questions, want to propose a new feature or have ideas on improvements of existing behavior. You can either:
  
1. open a new issue in the [issue board](https://github.com/andyyang352/FeatX/issues)  
2. send an email to yil761@ucsd.edu
