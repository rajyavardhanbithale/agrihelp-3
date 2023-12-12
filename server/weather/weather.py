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
        self._urlForecast = "http://api.weatherapi.com/v1/forecast.json"
        self.urlToday = "http://api.weatherapi.com/v1/forecast.json"
        self.key = os.getenv("WEATHERAPI")


    def weatherToday(self,city:str):
        fetch = requests.get("{url}?key={key}&q={city}".format(url=self.urlToday,key=self.key,city=city))
        parseFetch = fetch.json()
        
        ret = response_scheme.returnToday(response=parseFetch)
        print(json.dumps(ret,indent=4))
        return ret
        # print(json.dumps(ret,indent=4))
        
    def weatherForecast(self,city:str,days:int):
        fetch = requests.get("{url}?key={key}&q={city}&days={days}".format(url=self._urlForecast,key=self.key,city=city,days=7 if days>7 else days))
        parseFetch = fetch.json()
        ret = response_scheme.returnForecast(response=parseFetch)
        return ret
        # print(json.dumps(ret,indent=4))
        

    
