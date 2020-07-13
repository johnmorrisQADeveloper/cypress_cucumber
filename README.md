# Build Status - [![Build Status](https://github.com/johnmorrisQADeveloper/cypress_cucumber/workflows/main/badge.svg)](https://github.com/johnmorrisQADeveloper/cypress_cucumber/actions)


[![Build Status](https://github.com/johnmorrisQADeveloper/cypress_cucumber/workflows/main/badge.svg?branch=master)](.github/workflows/main.yml) [![ubuntuChrome status](https://github.com/johnmorrisQADeveloper/cypress_cucumber/workflows/ubuntuChrome/badge.svg?branch=master)](.github/workflows/ubuntuChrome.yml)
[![macChrome status](https://github.com/johnmorrisQADeveloper/cypress_cucumber/workflows/macChrome/badge.svg?branch=master)](.github/workflows/macChrome.yml)[![ubuntuFirefox status](https://github.com/johnmorrisQADeveloper/cypress_cucumber/workflows/ubuntuFirefox/badge.svg?branch=master)](.github/workflows/ubuntuFirefox.yml)[![macEdge status](https://github.com/johnmorrisQADeveloper/cypress_cucumber/workflows/macEdge/badge.svg?branch=master)](.github/workflows/macEdge.yml)

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