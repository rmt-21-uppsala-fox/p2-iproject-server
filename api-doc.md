# Hacktiv Heroes API Documentation

## Models :

_User_

```
- email : string, required, unique
- password : string, required
```


## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`

Routes below need authentication:

- `GET /TeamRanks`
- `GET /matches`
- `GET /news`
- `GET /player/:name`
- `GET /playerRank`


&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /TeamRanks

Description:
- Get all team with rankings

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "points": 771,
        "place": 1,
        "team": {
            "name": "Natus Vincere",
            "id": 4608
        },
        "change": 0,
        "isNew": false
    },
    {
        "points": 698,
        "place": 2,
        "team": {
            "name": "FaZe",
            "id": 6667
        },
        "change": 1,
        "isNew": false
    },
    {
        "points": 652,
        "place": 3,
        "team": {
            "name": "G2",
            "id": 5995
        },
        "change": 1,
        "isNew": false
    }
]
```

&nbsp;

## 4.  GET /matches

Description:
- GET all matches happening 

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 2354561,
        "stars": 1,
        "team1": {
            "name": "Liquid",
            "id": 5973
        },
        "team2": {
            "name": "GODSENT",
            "id": 6902
        },
        "format": "bo3",
        "event": {
            "id": 6137,
            "name": "ESL Pro League Season 15"
        },
        "live": true
    },
    {
        "id": 2355220,
        "stars": 0,
        "team1": {
            "name": "Young Ninjas",
            "id": 10960
        },
        "team2": {
            "name": "00Prospects",
            "id": 11425
        },
        "format": "bo3",
        "event": {
            "id": 6481,
            "name": "Elisa Invitational Spring 2022 Contenders"
        },
        "live": true
    }
]
```
&nbsp;

## 5. GET /news

Description:
- Get all news

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "link": "/news/31478/esic-involves-fbi-in-north-american-match-fixing-investigation",
        "title": "ESIC involves FBI in North American match-fixing investigation",
        "comments": 393,
        "date": 1617148800000,
        "country": {
            "name": "North America",
            "code": "NAM"
        }
    },
    {
        "link": "/news/31477/sharks-recall-pancc-after-suspension",
        "title": "Sharks recall pancc after suspension",
        "comments": 39,
        "date": 1617148800000,
        "country": {
            "name": "Brazil",
            "code": "BR"
        }
    },
    {
        "link": "/news/31471/styko-by-the-looks-of-things-were-going-back-to-chrisj-if-everything-gets-settled",
        "title": "STYKO: \"By the looks of things, we're going back to chrisJ if everything gets settled\"",
        "comments": 123,
        "date": 1617148800000,
        "country": {
            "name": "Slovakia",
            "code": "SK"
        }
    }
]
```

&nbsp;

## 6. GET /players/:name


Description:
- get player data based on name

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "string"
}
```

_Response (200 - OK)_

```json
{
    "id": 7998,
    "name": "Aleksandr Kostyliev",
    "ign": "s1mple",
    "image": "https://img-cdn.hltv.org/playerbodyshot/Q2u6AgnDNYQ3dyObwN4JBX.png?ixlib=java-2.1.0&w=400&s=5e19fa63867872bd78409f6e757ff6c3",
    "age": 24,
    "twitter": "https://www.twitter.com/s1mpleO",
    "twitch": "https://www.twitch.tv/s1mple",
    "instagram": "https://www.instagram.com/s1mpleo",
    "country": {
        "name": "Ukraine",
        "code": "UA"
    },
    "team": {
        "name": "Natus Vincere",
        "id": 4608
    },
    "statistics": {
        "rating": 1.27,
        "killsPerRound": 0.84,
        "headshots": 37.5,
        "mapsPlayed": 19,
        "deathsPerRound": 0.61,
        "roundsContributed": 74.1
    }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Player not found"
}
```

&nbsp;
## 7. GET /playerRank
Description:
- Get lastest update of player ranking

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "player": {
            "name": "ZywOo",
            "id": 11893
        },
        "teams": [
            {
                "id": 9565,
                "name": "Vitality"
            },
            {
                "id": 5639,
                "name": "aAa"
            }
        ],
        "maps": 960,
        "kdDiff": 5865,
        "rounds": 25214,
        "kd": 1.38,
        "rating1": 1.27
    },
    {
        "player": {
            "name": "s1mple",
            "id": 7998
        },
        "teams": [
            {
                "id": 4608,
                "name": "Natus Vincere"
            },
            {
                "id": 5988,
                "name": "FlipSid3"
            }
        ],
        "maps": 1510,
        "kdDiff": 8651,
        "rounds": 39857,
        "kd": 1.34,
        "rating1": 1.25
    },
    {
        "player": {
            "name": "sh1ro",
            "id": 16920
        },
        "teams": [
            {
                "id": 6651,
                "name": "Gambit"
            },
            {
                "id": 9976,
                "name": "Gambit Youngsters"
            }
        ],
        "maps": 832,
        "kdDiff": 5243,
        "rounds": 22075,
        "kd": 1.45,
        "rating1": 1.22
    },
    {
        "player": {
            "name": "Kaze",
            "id": 8950
        },
        "teams": [
            {
                "id": 7606,
                "name": "ViCi"
            },
            {
                "id": 7660,
                "name": "Flash"
            },
            {
                "id": 6109,
                "name": "MVP.karnal"
            }
        ],
        "maps": 810,
        "kdDiff": 4011,
        "rounds": 21116,
        "kd": 1.32,
        "rating1": 1.2
    }
]
```

&nbsp;
## Global Error


_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```