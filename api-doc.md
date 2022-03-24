# Supreme Soccer

The Supreme Soccer app is where the football fans gathered. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

### POST /login

> Account login

_Request Body_

```
{
  "email": "<input account email>",
  "password": "<input account password>"
}
```

_Response (200)_

```
{
  "access_token": "<access token to the client side>",
  "id": "<user id>",
  "name": "<username from the account>",
}
```

_Response (401 - Bad Request)_

```
{
  "message": "Invalid email/ password"
}
```

_Response (500 - Internal server Error)_

```
{
  "message": "Internal server Error"
}
```

### POST /register

> Account registration (default role: admin)

_Request Body_

```
{
  "name": "<input desired name>",
  "password": "<input desired password>",
  "email": "<input desired email>",
}
```

_Response (201)_

```
{
  "id": "<user id>",
  "name": "<name from the account>",
  "email": "<email from the account>",
}
```

_Response (400 - Bad Request)_

```
{
  "message": Name is requjired"
}
OR
{
  "message": Email is requjired"
}
OR
{
  "message": Password is requjired"
}
OR
```

_Response (500 - Internal server Error)_

```
{
  "message": "Internal server Error"
}
```

### POST /authGoogle

> Account registration and sign in via Google SignIn (default role: staff)

_Request Body_

```
{
  "id_token": "<token gained from client side>"
}
```

_Response (200)_

```
{
  "access_token": "<access token to the client side>",
  "id": "<user id>",
  "name": "<username from the gmail account>",
}
```

_Response (500 - Internal server Error)_

```
{
  "message": "Internal server Error"
}
```

## RESTful endpoints

These endpoints is protected by authentication

### GET /epl

> Get epl informations

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
"teams": [
    {
      "all-matches": {
        "lost": 3,
        "against": 18,
        "goal-difference": 50,
        "won": 22,
        "for": 68,
        "drawn": 4,
        "played": 29
      },
      "zone": "Promotion",
      "name": "Manchester City",
      "home-matches": {
        "lost": 2,
        "against": 10,
        "won": 11,
        "for": 40,
        "drawn": 1,
        "played": 14
      },
      "away-matches": {
        "lost": 1,
        "against": 8,
        "won": 11,
        "for": 28,
        "drawn": 3,
        "played": 15
      },
      "id": 12,
      "position": 1,
      "total-points": 70
    },.....
  ]
}
```

_Response (500 - Internal server Error)_

```
{
  "message": "Internal server Error"
}
```

---

### GET /seriea

> Get Serie A informations

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "teams": [
    {
      "all-matches": {
        "lost": 4,
        "against": 29,
        "goal-difference": 27,
        "won": 20,
        "for": 56,
        "drawn": 6,
        "played": 30
      },
      "zone": "Promotion",
      "name": "AC Milan",
      "home-matches": {
        "lost": 3,
        "against": 12,
        "won": 9,
        "for": 23,
        "drawn": 3,
        "played": 15
      },
      "away-matches": {
        "lost": 1,
        "against": 17,
        "won": 11,
        "for": 33,
        "drawn": 3,
        "played": 15
      },
      "id": 482,
      "position": 1,
      "total-points": 66
    },...
  ]
}
```

_Response (500 - Internal server Error)_

```
{
  "message": "Internal server Error"
}
```

---

### GET /laliga

> Get La Liga A informations

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "teams": [
    {
      "all-matches": {
        "lost": 3,
        "against": 25,
        "goal-difference": 34,
        "won": 20,
        "for": 59,
        "drawn": 6,
        "played": 29
      },
      "zone": "Promotion",
      "name": "Real Madrid",
      "home-matches": {
        "lost": 1,
        "against": 13,
        "won": 10,
        "for": 32,
        "drawn": 4,
        "played": 15
      },
      "away-matches": {
        "lost": 2,
        "against": 12,
        "won": 10,
        "for": 27,
        "drawn": 2,
        "played": 14
      },
      "id": 485,
      "position": 1,
      "total-points": 66
    },....
  ]
}
```

_Response (500 - Internal server Error)_

```
{
  "message": "Internal server Error"
}
```

---

### GET /epltop

> Get epl informations

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  {
    "id": 36288,
    "first-name": "Mohamed",
    "last-name": "Salah",
    "goals": []....
  },
]
```

_Response (500 - Internal server Error)_

```
{
  "message": "Internal server Error"
}
```

---

### GET /serieatop

> Get Serie A informations

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  {
    "id": 36778,
    "first-name": "Ciro",
    "last-name": "Immobile",
    "goals": [].....
  },.....
]
```

_Response (500 - Internal server Error)_

```
{
  "message": "Internal server Error"
}
```

---

### GET /laligatop

> Get La Liga A informations

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  {
    "id": 39692,
    "first-name": "Karim",
    "last-name": "Benzema",
    "goals": []....
  },.....
]
```

_Response (500 - Internal server Error)_

```
{
  "message": "Internal server Error"
}
```

---

### GET /findfav

> Get epl informations

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
"leagueName": <favorite league name>
```

_Response (500 - Internal server Error)_

```
{
  "message": "Internal server Error"
}
```

---

### GET /claimfav

> Get epl informations

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
"leagueName" : "<favorite league name>"
```

_Response (201)_

```
{
  "id" : "<new favorite id>",
  "UserId" : "<user id>",
  "leagueName" : "<favorite league name>"
}
```

_Response (403)_

```
{
  "message": "You already have a favorite league"
}
```

_Response (500 - Internal server Error)_

```
{
  "message": "Internal server Error"
}
```

---
