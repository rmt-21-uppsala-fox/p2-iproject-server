# Movie API Documentation

## Endpoints :

- `POST /register`
- `POST /login`
- `GET /menus`
- `GET /ingredient`
- `POST /authGoogle`

&nbsp;

## 1. POST /register

Description:
- add user to the database. After register, page will be moved to login page. error shown can either be one or many. An email will be sent after registration done.

_Response (200 - Ok)_

```json
{
    "msg": "Register Compleate",
    "identity": {
        "id": 5,
        "email": "gibah@mail.com",
    }
}  
```

_Response (401 - Bad Request)_

```json
{
    "msg": [
        "email cannot be empty or null",
        "Please input email format correctly (example@yahoo.com)",
        "password cannot null",
        "Password must containt with 5 Characters Minimum and 20 Maximum"
    ]
}
```

&nbsp;

## 2. POST /login

Description:
- Login user. Will return token.

_Response (200 - Ok)_

```json
{
    "msg": "success log in",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjb2JhMUBtYWlsLmNvbSIsImlhdCI6MTY0ODA1NzA3MH0.4T1LdAHpJLQ35hGr6nGx9rihK_jNUmvF34yGhdBxFoA",
    "id": 1,
    "email": "coba1@mail.com"
}
```

_Response (401 - Bad Request)_

```json
{
    "msg": [
        "email cannot be empty or null",
        "Please input email format correctly (example@yahoo.com)",
        "password cannot null",
        "Password must containt with 5 Characters Minimum and 20 Maximum"
    ]
}
```

&nbsp;

## 3. GET /menus

Description:
- Show the data of many reciepies with base ingredient as query(its a must). this function use 3rd party API named "edamam-recipe".

_Response (201 - Created)_

```json
[
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6",
            "label": "Chicken Vesuvio",
            "image": "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
            "source": "Serious Eats",
            "url": "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
            "shareAs": "http://www.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken",
            "yield": 4,
            "dietLabels": [
                "Low-Carb"
            ],
            "healthLabels": [
                "Mediterranean",
                "Peanut-Free",
                "Tree-Nut-Free"
            ],
            "cautions": [
                "Sulfites"
            ],
            "ingredientLines": [
                "1/2 cup olive oil",
                "5 cloves garlic, peeled",
                "2 large russet potatoes, peeled and cut into chunks",
                "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
                "3/4 cup white wine",
                "3/4 cup chicken stock",
                "3 tablespoons chopped parsley",
                "1 tablespoon dried oregano",
                "Salt and pepper",
                "1 cup frozen peas, thawed"
            ],
        }
    }
]
```

&nbsp;

## 4. GET /ingredient

Description:
- Show the data of many brand with base ingredient as query(its a must). this function use 3rd party API named "nutritionixApi".

_Response (201 - Created)_

```json
[
    {
        "_index": "f762ef22-e660-434f-9071-a10ea6691c27",
        "_type": "item",
        "_id": "513fceb775b8dbbc210032be",
        "_score": 12.624024,
        "fields": {
            "item_id": "513fceb775b8dbbc210032be",
            "item_name": "Beef, ground, 80% lean meat / 20% fat, crumbles, cooked, pan-browned - 3 oz",
            "brand_name": "USDA",
            "nf_calories": 231,
            "nf_total_fat": 14.76,
            "nf_serving_size_qty": 1,
            "nf_serving_size_unit": "serving"
        }
    },
]
```

&nbsp;

## 5. POST /authGoogle

Description:
- Login author with google account. Will return access_token.

_Response (200 - Ok)_

```json
{
    "msg": "success log in with google",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJCdWRpTkBnbWFpbC5jb20iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2NDc2ODU1NjN9.kBedm3F4LP9Eu2eEeMiT6jHlpkKdr_6_bdMGBQ7nGZI",
    "id": 1,
    "email": "BudiN@gmail.com",
}
```

&nbsp;

## Global Error


_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

