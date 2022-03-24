# Job Portal API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /recipes`
- `GET /recipes/filter`
- `POST /recipes/:RecipeId`
- `GET /recipes/bookmark`
- `POST /recipes/rate/:RecipeId`
- `GET /recipes/:RecipeId`
- `GET /recipe/rate/:RecipeId`
- `DELETE /recipes/:id`

## 1. POST /register

Request:

- headers:

```json
{
  "access_token": "STRING"
}
```

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "Successfully register user",
  "id": 3,
  "username": "userbaru",
  "email": "userbaru@gmail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Username and password is required"
}
```

&nbsp;

## 2. POST /login

Request:

- headers:

```json
{
  "access_token": "STRING"
}
```

- body:

```json
{
  "username": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJvY2FhIiwiaWF0IjoxNjQ4MDk5Mjc0fQ.J9Mnw1RpE0NgVRPbgVVC8bUOBkst8oj-DTbWWQ33FeY"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Username and password is required"
}
```

&nbsp;

## 3. POST /recipes

Request:
- body:

```json
{
  "name": "string",
  "minCal": "integer",
  "maxCal": "integer",
  "dietLabel": "string",
  "dietLabel": "string",
}
```

_Response (201 - Created)_

```json
[
  {
    "recipe": {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7eb3edfc916ebf0e4b028c8e5c04b81a",
      "label": "Roast sirloin of beef",
      "image": "https://www.edamam.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg",
      "images": {
        "REGULAR": {
          "url": "https://www.edamam.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg",
          "width": 300,
          "height": 300
        }
      },
      "source": "BBC Good Food",
      "url": "http://www.bbcgoodfood.com/recipes/2558/roast-sirloin-of-beef",
      "shareAs": "http://www.edamam.com/recipe/roast-sirloin-of-beef-7eb3edfc916ebf0e4b028c8e5c04b81a/beef/800-cal",
      "yield": 6,
      "dietLabels": [
        "High-Protein",
        "Low-Carb"
      ],
      "cautions": [
        "Gluten",
        "Wheat",
        "Sulfites"
      ],
      "ingredientLines": [
        "2 tbsp vegetable oil or beef fat",
        "1-1½kg/2lb 4-3lb 5oz sirloin of beef joint",
        "1 glass red wine",
        "400g can beef consommé"
      ],
      "calories": 2120.44,
      "totalWeight": 1913.2,
      "totalTime": 160,
      "cuisineType": [
        "american"
      ],
      "mealType": [
        "lunch/dinner"
      ],
      "dishType": [
        "main course"
      ],
      "totalDaily": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 106.022,
          "unit": "%"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 0,
          "unit": "%"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 559.08928,
          "unit": "%"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 262.5,
          "unit": "%"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 85.53783333333332,
          "unit": "%"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 19.731600000000004,
          "unit": "%"
        },
      },
      "digest": [
        {
          "label": "Fat",
          "tag": "FAT",
          "schemaOrgTag": "fatContent",
          "total": 88.125,
          "hasRDI": true,
          "daily": 135.57692307692307,
          "unit": "g",
        },
      ]
    }
  }]
```

_Response (400 - Bad Request)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 4. GET /recipes/filter

_Response (201 - Created)_

```json
[
  {
    "recipe": {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7eb3edfc916ebf0e4b028c8e5c04b81a",
      "label": "Roast sirloin of beef",
      "image": "https://www.edamam.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg",
      "images": {
        "REGULAR": {
          "url": "https://www.edamam.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg",
          "width": 300,
          "height": 300
        }
      },
      "source": "BBC Good Food",
      "url": "http://www.bbcgoodfood.com/recipes/2558/roast-sirloin-of-beef",
      "shareAs": "http://www.edamam.com/recipe/roast-sirloin-of-beef-7eb3edfc916ebf0e4b028c8e5c04b81a/beef/800-cal",
      "yield": 6,
      "dietLabels": [
        "High-Protein",
        "Low-Carb"
      ],
      "cautions": [
        "Gluten",
        "Wheat",
        "Sulfites"
      ],
      "ingredientLines": [
        "2 tbsp vegetable oil or beef fat",
        "1-1½kg/2lb 4-3lb 5oz sirloin of beef joint",
        "1 glass red wine",
        "400g can beef consommé"
      ],
      "calories": 2120.44,
      "totalWeight": 1913.2,
      "totalTime": 160,
      "cuisineType": [
        "american"
      ],
      "mealType": [
        "lunch/dinner"
      ],
      "dishType": [
        "main course"
      ],
      "totalDaily": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 106.022,
          "unit": "%"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 0,
          "unit": "%"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 559.08928,
          "unit": "%"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 262.5,
          "unit": "%"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 85.53783333333332,
          "unit": "%"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 19.731600000000004,
          "unit": "%"
        },
      },
      "digest": [
        {
          "label": "Fat",
          "tag": "FAT",
          "schemaOrgTag": "fatContent",
          "total": 88.125,
          "hasRDI": true,
          "daily": 135.57692307692307,
          "unit": "g",
        },
      ]
    }
  }]
```

_Response (400 - Bad Request)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 5. POST /recipes/:RecipeId

Request:
- params:

```json
{
  "RecipeId": "integer",
}
```

- headers:

```json
{
  "access_token": "string",
}
```

_Response (201 - Created)_

```json
[
  {
    "recipe": {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7eb3edfc916ebf0e4b028c8e5c04b81a",
      "label": "Roast sirloin of beef",
      "image": "https://www.edamam.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg",
      "images": {
        "REGULAR": {
          "url": "https://www.edamam.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg",
          "width": 300,
          "height": 300
        }
      },
      "source": "BBC Good Food",
      "url": "http://www.bbcgoodfood.com/recipes/2558/roast-sirloin-of-beef",
      "shareAs": "http://www.edamam.com/recipe/roast-sirloin-of-beef-7eb3edfc916ebf0e4b028c8e5c04b81a/beef/800-cal",
      "yield": 6,
      "dietLabels": [
        "High-Protein",
        "Low-Carb"
      ],
      "cautions": [
        "Gluten",
        "Wheat",
        "Sulfites"
      ],
      "ingredientLines": [
        "2 tbsp vegetable oil or beef fat",
        "1-1½kg/2lb 4-3lb 5oz sirloin of beef joint",
        "1 glass red wine",
        "400g can beef consommé"
      ],
      "calories": 2120.44,
      "totalWeight": 1913.2,
      "totalTime": 160,
      "cuisineType": [
        "american"
      ],
      "mealType": [
        "lunch/dinner"
      ],
      "dishType": [
        "main course"
      ],
      "totalDaily": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 106.022,
          "unit": "%"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 0,
          "unit": "%"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 559.08928,
          "unit": "%"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 262.5,
          "unit": "%"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 85.53783333333332,
          "unit": "%"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 19.731600000000004,
          "unit": "%"
        },
      },
      "digest": [
        {
          "label": "Fat",
          "tag": "FAT",
          "schemaOrgTag": "fatContent",
          "total": 88.125,
          "hasRDI": true,
          "daily": 135.57692307692307,
          "unit": "g",
        },
      ]
    }
  }]
```

_Response (400 - Bad Request)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 6. GET /recipes/bookmark

Request:
- params:

```json
{
  "RecipeId": "integer",
}
```

- headers:

```json
{
  "access_token": "string",
}
```

_Response (201 - Created)_

```json
[
  {
    "id": 1,
    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_bbfc1a248bd6fe277e35fe01027de91f",
    "label": "Naomi Duguid's Fried Noodles",
    "image": "https://www.edamam.com/web-img/041/04158b5869398c899942336274f0e0f7.jpg",
    "calories": 196.30800000000002,
    "ingredients": [
      "1 cup dried egg noodles",
      "Peanut oil, for frying"
    ]
  },
  {
    "id": 3,
    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_84b8126a7e5c3ceea9dcaee0f4d8df00",
    "label": "Strawberry Vodka",
    "image": "https://www.edamam.com/web-img/018/018c94e42ca9816d6800e22e1d967906.jpg",
    "calories": 1857.0816824002154,
    "ingredients": [
      "One bottle (750ml) vodka",
      "2 pints (about 1 1/4 pounds, 575g) strawberries, organic or unsprayed"
    ]
  }
]
```

_Response (400 - Bad Request)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 7. POST /recipes/rate/:RecipeId

Request:
- params:

```json
{
  "RecipeId": "integer",
}
```

- headers:

```json
{
  "access_token": "string",
}
```

_Response (201 - Created)_

```json
{
  "message": "Update recipe's rating Fresh Lemon Syrup Recipe successfully"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 8. DELETE /recipes/:id

Request:
- params:

```json
{
  "id": "integer",
}
```

- headers:

```json
{
  "access_token": "string",
}
```

_Response (201 - Created)_

```json
{
  "message": "Successfully delete bookmark"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Data not found"
}
```

&nbsp;