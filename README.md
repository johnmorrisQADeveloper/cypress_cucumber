# Build Status - [![Build Status](https://github.com/johnmorrisQADeveloper/cypress_cucumber/workflows/main/badge.svg)](https://github.com/johnmorrisQADeveloper/cypress_cucumber/actions)


[![Build Status](https://github.com/johnmorrisQADeveloper/cypress_cucumber/workflows/main/badge.svg?branch=master)](.github/workflows/main.yml) [![ubuntuChrome status](https://github.com/johnmorrisQADeveloper/cypress_cucumber/workflows/ubuntuChrome/badge.svg?branch=master)](.github/workflows/ubuntuChrome.yml)
[![macChrome status](https://github.com/johnmorrisQADeveloper/cypress_cucumber/workflows/macChrome/badge.svg?branch=master)](.github/workflows/macChrome.yml)[![ubuntuFirefox status](https://github.com/johnmorrisQADeveloper/cypress_cucumber/workflows/ubuntuFirefox/badge.svg?branch=master)](.github/workflows/ubuntuFirefox.yml)[![macEdge status](https://github.com/johnmorrisQADeveloper/cypress_cucumber/workflows/macEdge/badge.svg?branch=master)](.github/workflows/macEdge.yml)

## Testing List
```
1. Browser testing Chrome, Firefox, Edge via github actions
2. Cucumber feature files
3. Visual testing - image snapshots only on chrome
4. Use of Fixtures, for credentials
```

## Run cypress - Browser Testing
```
npm i
npm t
```

## update base images
```
npx cypress run --env updateSnapshots=true --spec "cypress\integration\visual-tests.spec.js"

npx cypress run --env updateSnapshots=true --browser chrome 
```


## run
```
npx cypress run --browser chrome
```

## Update images, keep local and remote in sync
#### 1. Build docker image
```
docker-compose up -d --build
```
#### 2. Find all images
```
docker images
```
#### 3. Open docker image
```
docker run -it --entrypoint /bin/sh imageID
```
#### 3. Update snapshot images on the local docker image, chrome browser
```
npx cypress run --browser chrome --env updateSnapshots=true
```
#### 4. Verify tests passes chrome browser
```
npx cypress run --browser chrome
```
#### 5. Copy images to local repository
```
sudo docker cp containerID:/app/cypress/snapshots/Conduit.feature images
```
#### 6. Push your changes up
```
git push
```


### dujamsd
```
 fdgfdg
```