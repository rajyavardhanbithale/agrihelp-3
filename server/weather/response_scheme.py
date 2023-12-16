from datetime import datetime


def toCelcius(temp: float | int) ->str:
    return str(round(temp - 273.15,1))


def returnToday(responseWeatherAPI: dict, responseOpenWeatherAPI: dict):
    scheme = {
        "location": {
            "name": responseWeatherAPI["location"]["name"],
            "region": responseWeatherAPI["location"]["region"],
            "country": responseWeatherAPI["location"]["country"],
            "country_code": responseOpenWeatherAPI["sys"]["country"],

        },
        "current": {
            "last_updated_epoch": responseOpenWeatherAPI["dt"],
            # "last_update": responseWeatherAPI["current"]["last_updated"],
            "last_update_formatted": datetime.utcfromtimestamp(responseOpenWeatherAPI["dt"]).strftime("%A %dth %B"),

            "main": {
                "temp": toCelcius(responseOpenWeatherAPI["main"]["temp"]),
                "feels_like": toCelcius(responseOpenWeatherAPI["main"]["feels_like"]),
                "temp_min": toCelcius(responseOpenWeatherAPI["main"]["temp_min"]),
                "temp_max": toCelcius(responseOpenWeatherAPI["main"]["temp_max"]),
            },


            "day_night": "night" if responseWeatherAPI["current"]["is_day"] == 0 else "day",
            "condition": {
                "type1": responseWeatherAPI["current"]["condition"]["text"],
                "type2": {
                    "main": responseOpenWeatherAPI["weather"][0]["main"],
                    "description": responseOpenWeatherAPI["weather"][0]["description"]
                },
                "icon": "https" + responseWeatherAPI["current"]["condition"]["icon"].replace("//", "://"),
                "code": 1030
            },
            "wind": {
                "kmph": responseWeatherAPI["current"]["wind_kph"],
                "mph": responseWeatherAPI["current"]["wind_mph"],
                "direction": responseWeatherAPI["current"]["wind_dir"]
            },
            "precipitation": {
                "in_mm": responseWeatherAPI["current"]["precip_mm"],
                "in_in": responseWeatherAPI["current"]["precip_in"],
            },
            "humidity": responseOpenWeatherAPI["main"]["humidity"],
            "cloud": responseWeatherAPI["current"]["cloud"],

        }

    }
    return scheme


def returnForecast(responseWeatherAPI: str):
    return_lst = []
    for x in responseWeatherAPI["forecast"]["forecastday"]:

        scheme = {
            "location": {
                "name": responseWeatherAPI["location"]["name"],
                "region": responseWeatherAPI["location"]["region"],
                "country": responseWeatherAPI["location"]["country"]
            },
            "info": {
                "date": x["date"],
                "temp": x["day"]["avgtemp_c"],

                "condition": {
                    "type": x["day"]["condition"]["text"],
                    "icon": "https" + x["day"]["condition"]["icon"].replace("//", "://"),
                    "code": 1030
                },
                "wind": {
                    "kmph": x["day"]["avgvis_km"],
                    "mph": x["day"]["avgvis_miles"],
                },
                "precipitation": {
                    "in_mm": x["day"]["totalprecip_mm"],
                    "in_in": x["day"]["totalprecip_in"],
                },
                "humidity": x["day"]["avghumidity"],
                "rain": x["day"]["daily_chance_of_rain"],

            }

        }
        return_lst.append(scheme)
    return return_lst
