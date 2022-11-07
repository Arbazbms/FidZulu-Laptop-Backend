# Team09- backend Laptop API

## Install

    npm install

## Run the app

    npm start
    
## BaseUrl / PORT
    http://localhost:3022

## Endpoints
  
`GET classB/:servicename/all/:locations`

    curl -i -H 'Accept: application/json' http://localhost:3022/classB/laptops/all/durham
  Returns product with price
  
    [*] Possible values for location - [Durham, Raleigh]
    [*] If location is empty or invalid return a default price without sales tax
    [*] Possible values for servicename - [laptops, dvds, books]
    [*] Servicename should not be empty
    
    
`GET classB/:servicename/team`

    curl -i -H 'Accept: application/json' http://localhost:3022/classB/laptops/team
  Returns team name and Members in the team
  
    [*] Possible values for servicename - [laptops, dvds, books]
    [*] Servicename should not be empty

