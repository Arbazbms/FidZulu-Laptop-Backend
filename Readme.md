# Team09- backend Laptop API

## Install

    npm install

## Run the app

    npm start

## Endpoints
  
`GET laptops/all/:location`

    curl -i -H 'Accept: application/json' http://localhost:3036/laptops/all/Durham
  Returns product with price
  
    [*] Possible values for location - [Durham, Raleigh]
    [*] If location is empty or invalid return a default price without sales tax
    
    
`GET /laptops/team`

    curl -i -H 'Accept: application/json' http://localhost:3036/laptops/team
  Returns team name and Members in the team
