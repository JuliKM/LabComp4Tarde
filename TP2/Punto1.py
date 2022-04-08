
from math import isnan
import requests
#response =  requests.get("http://api.open-notify.org/astros.json")
response =  requests.get("https://restcountries.eu/rest/v2/callingcode/54")

#response.content()
#response.text()
#response.json()
#query = {'lat':'45', 'lon':'180'}
#  response = requests.get('http://api.open-notify.org/iss-pass.json', params=query)
# print(response.json())

for code in range(300):
    jsonData = requests.get(s'https://restcountries.eu/rest/v2/callingcode/{i}')
    if jsonData !=isnan:
        nameCountry = jsonData.name
        capitalCountry = jsonData.capital
        region = jsonData.region
        population=jsonData.population
        latitude = jsonData.latIng[0]
        longitude = jsonData.latIng[1]
        countryCode = jsonData.countryCode
        Country = SELECT * FROM PAIS WHERE countryCode = countryCode
        if (PaisExists):
            UPDATE país SET nombrePais = ……………………… WHERE codigoPais = codigoPais


