

def returnToday(response: dict):
    scheme = {
        "location": {
            "name": response["location"]["name"],
            "region": response["location"]["region"],
            "country": response["location"]["country"]
        },
        "current": {
            "last_update": response["current"]["last_updated"],
            "temp": response["current"]["temp_c"],
            "day_night": "night" if response["current"]["is_day"] == 0 else "day",
            "condition": {
                "type": response["current"]["condition"]["text"],
                "icon": "https" + response["current"]["condition"]["icon"].replace("//", "://"),
                "code": 1030
            },
            "wind": {
                "kmph": response["current"]["wind_kph"],
                "mph": response["current"]["wind_mph"],
                "direction": response["current"]["wind_dir"]
            },
            "precipitation": {
                "in_mm": response["current"]["precip_mm"],
                "in_in": response["current"]["precip_in"],
            },
            "humidity": response["current"]["humidity"],
            "cloud": response["current"]["cloud"],
            "feelslike": response["current"]["feelslike_c"],
        }

    }
    return scheme


def returnForecast(response: str):
    return_lst= []
    for x in response["forecast"]["forecastday"]:
        
        scheme = {
            "location": {
                "name": response["location"]["name"],
                "region": response["location"]["region"],
                "country": response["location"]["country"]
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
