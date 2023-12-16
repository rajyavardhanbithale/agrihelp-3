# #!/usr/bin/python3
import requests
import json
from dotenv import load_dotenv
import os
import datetime
from weather import response_scheme

load_dotenv()


class Weather:
    def __init__(self) -> None:
        self.urlForecast = "http://api.weatherapi.com/v1/current.json"
        self.baseUrlWeather = "http://api.openweathermap.org/data/2.5/weather"
        
        self.urlToday = "http://api.weatherapi.com/v1/forecast.json"
        self.key = os.getenv("WEATHERAPI")
        self.OpenKey = os.getenv("OPENWEATHERAPI")


    def weatherToday(self,city:str):
        print("{url}?key={key}&q={city}".format(url=self.urlForecast,key=self.key,city=city))
        
        # print(self.baseUrlWeather + "appid=" + self.OpenKey + "&q=" + city)
        
        fetch = requests.get("{url}?key={key}&q={city}".format(url=self.urlToday,key=self.key,city=city))
        parseFetch = fetch.json()
        
        fetch1 = requests.get("{url}?appid={key}&q={city}".format(url=self.baseUrlWeather,key=self.OpenKey,city=city))
        parseFetch1 = fetch1.json()
        
        ret = response_scheme.returnToday(responseWeatherAPI=parseFetch,responseOpenWeatherAPI=parseFetch1)
        # print(json.dumps(ret,indent=4))
        return ret
 
        
    def weatherForecast(self,city:str,days:int):
        fetch = requests.get("{url}?key={key}&q={city}&days={days}".format(url=self._urlForecast,key=self.key,city=city,days=7 if days>7 else days))
        parseFetch = fetch.json()
        ret = response_scheme.returnForecast(response=parseFetch)
        return ret
        # print(json.dumps(ret,indent=4))
        

    
# x = Weather()
# x.weatherToday("raipur")