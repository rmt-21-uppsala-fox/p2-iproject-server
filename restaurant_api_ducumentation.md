# Restaurant App Documentation

## Endpoint:

list of available endpoint :

- `POST /Register`
- `POST /food`
- `GET /food`
- `GET /food/:id`
- `PATCH /food/:id`
- `PUT /food/:id`
- `DELETE /food/:id`
- `GET /categories`
- `GET /histories`
- `POST /customers/register`
- `POST /customers/login`
- `GET /customers/food`
- `GET /customers/food/:id`
- `POST /customers/favorites/:id`
- `GET /customers/favorites/`

&nbsp;

## 1. POST /register

Description: if using register, role automatically admin.

- body

```json
{
	"email": "string",
	"password": "string",
	"role": "admin",
	"phoneNumber": "string",
	"address": "string"
}
```

_Response (201 - Created)_

&nbsp;

## 2. POST /login

description: login admin

- body

```json
{
	"email": "string",
	"password": "string"
}
```

_Response (200 - OK)_

&nbsp;

## 3. POST /food

- body:

```json
{
	"name": "string",
	"description": "string",
	"price": "integer",
	"imgUrl": "string",
	"AuthorId": " integer",
	"CategoryId": "integer"
}
```

_Response (201 - Created)_

&nbsp;

`if req.body null or undifined`

```json
  "name":"",
  "description":"",
  "price": "",
  "imgUrl": "",
  "AuthorId":" integer",
  "CategoryId": "integer"
```

_Response (400 - Bad Request)_

&nbsp;

## 4. GET /food

description: get all food from database

_Response (200 - OK)_

```json
[
	{
		"id": 1,
		"name": "American Classic Cheeseburger",
		"description": "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble, Onion, Slice Cheese, Mozzarella Cheese",
		"price": 80910,
		"imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/m/american-classic-cheeseburger-550x550px.png",
		"AuthorId": 1,
		"CategoryId": 1,
		"status": "active",
		"createdAt": "2022-03-03T14:31:41.100Z",
		"updatedAt": "2022-03-03T14:31:41.100Z",
		"Category": {
			"id": 1,
			"name": "pizza",
			"createdAt": "2022-03-03T14:31:41.094Z",
			"updatedAt": "2022-03-03T14:31:41.094Z"
		},
		"User": {
			"id": 1,
			"email": "admin13@admin.com",
			"password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
			"role": "admin",
			"phoneNumber": "+48 475 198 0103",
			"address": "1 Ridgeway Lane",
			"createdAt": "2022-03-03T14:31:40.950Z",
			"updatedAt": "2022-03-03T14:31:40.950Z"
		}
	},
	{
		"id": 2,
		"name": "Potato Wedges",
		"description": "Potongan Kentang dengan Saus Domino's Pizza",
		"price": 19000,
		"imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/p/o/potato-wedges-550x550px.png",
		"AuthorId": 2,
		"CategoryId": 2,
		"status": "active",
		"createdAt": "2022-03-03T14:31:41.100Z",
		"updatedAt": "2022-03-07T13:25:39.695Z",
		"Category": {
			"id": 2,
			"name": "side dish",
			"createdAt": "2022-03-03T14:31:41.094Z",
			"updatedAt": "2022-03-03T14:31:41.094Z"
		},
		"User": {
			"id": 2,
			"email": "staff13@staff.com",
			"password": "$2b$10$jg4kolP.SP9jDANT3wQ7kO2xpVZCaO/wt4tzjv1xSV6a.SBtaTdyK",
			"role": "staff",
			"phoneNumber": "+86 752 895 4364",
			"address": "17 Fairview Lane",
			"createdAt": "2022-03-03T14:31:41.017Z",
			"updatedAt": "2022-03-03T14:31:41.017Z"
		}
	},
	{
		"id": 3,
		"name": "Lychee Tea ",
		"description": "Tea with Lychee flavor, that fresh your day",
		"price": 15455,
		"imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/l/y/lychee-tea.png",
		"AuthorId": 1,
		"CategoryId": 3,
		"status": "active",
		"createdAt": "2022-03-03T14:31:41.100Z",
		"updatedAt": "2022-03-03T14:31:41.100Z",
		"Category": {
			"id": 3,
			"name": "drink",
			"createdAt": "2022-03-03T14:31:41.094Z",
			"updatedAt": "2022-03-03T14:31:41.094Z"
		},
		"User": {
			"id": 1,
			"email": "admin13@admin.com",
			"password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
			"role": "admin",
			"phoneNumber": "+48 475 198 0103",
			"address": "1 Ridgeway Lane",
			"createdAt": "2022-03-03T14:31:40.950Z",
			"updatedAt": "2022-03-03T14:31:40.950Z"
		}
	},
	{
		"id": 8,
		"name": "Ultimate Cheese Melt",
		"description": "Liquid Cheese Sauce,Keju Mozzarella, Cheddar Cheese Sauce, Keju Ricotta, Mozzarella String, Keju Parmesan, Parsley",
		"price": 80910,
		"imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/u/l/ultimatecheesemeltnew.png",
		"AuthorId": 1,
		"CategoryId": 1,
		"status": "active",
		"createdAt": "2022-03-05T17:49:38.274Z",
		"updatedAt": "2022-03-05T17:49:38.274Z",
		"Category": {
			"id": 1,
			"name": "pizza",
			"createdAt": "2022-03-03T14:31:41.094Z",
			"updatedAt": "2022-03-03T14:31:41.094Z"
		},
		"User": {
			"id": 1,
			"email": "admin13@admin.com",
			"password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
			"role": "admin",
			"phoneNumber": "+48 475 198 0103",
			"address": "1 Ridgeway Lane",
			"createdAt": "2022-03-03T14:31:40.950Z",
			"updatedAt": "2022-03-03T14:31:40.950Z"
		}
	},
	{
		"id": 9,
		"name": "Mexican Chicken Nachos",
		"description": "Saus Domino's Pizza, Keju Mozzarella, Saus Keju Cheddar, Liquid Cheese Sauce, Beef Burger, Beef Crumble, Bawang, Tomat, Jalapeno, Mexican Seasoning, Nachos Chips",
		"price": 80910,
		"imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/m/e/mexicanbeefnachos.png",
		"AuthorId": 1,
		"CategoryId": 1,
		"status": "active",
		"createdAt": "2022-03-05T18:05:03.897Z",
		"updatedAt": "2022-03-05T18:05:03.897Z",
		"Category": {
			"id": 1,
			"name": "pizza",
			"createdAt": "2022-03-03T14:31:41.094Z",
			"updatedAt": "2022-03-03T14:31:41.094Z"
		},
		"User": {
			"id": 1,
			"email": "admin13@admin.com",
			"password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
			"role": "admin",
			"phoneNumber": "+48 475 198 0103",
			"address": "1 Ridgeway Lane",
			"createdAt": "2022-03-03T14:31:40.950Z",
			"updatedAt": "2022-03-03T14:31:40.950Z"
		}
	},
	{
		"id": 27,
		"name": "Plantt Pro Jerky Beef Blackpepper",
		"description": "Plant Based Beef, Saus BBQ, Saus Blackpepper, Keju Mozzarella, Bawang, Paprika Merah, Saus Keju Cheddar",
		"price": 80910,
		"imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb-plantt_pro_jerky_beef_blackpepper.jpg",
		"AuthorId": 1,
		"CategoryId": 1,
		"status": "active",
		"createdAt": "2022-03-07T12:58:40.973Z",
		"updatedAt": "2022-03-07T12:58:40.973Z",
		"Category": {
			"id": 1,
			"name": "pizza",
			"createdAt": "2022-03-03T14:31:41.094Z",
			"updatedAt": "2022-03-03T14:31:41.094Z"
		},
		"User": {
			"id": 1,
			"email": "admin13@admin.com",
			"password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
			"role": "admin",
			"phoneNumber": "+48 475 198 0103",
			"address": "1 Ridgeway Lane",
			"createdAt": "2022-03-03T14:31:40.950Z",
			"updatedAt": "2022-03-03T14:31:40.950Z"
		}
	},
	{
		"id": 28,
		"name": "Plantt Pro Jerky Beef Blackpepper",
		"description": "Plant Based Beef, Saus BBQ, Saus Blackpepper, Keju Mozzarella, Bawang, Paprika Merah, Saus Keju Cheddar",
		"price": 80910,
		"imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb-plantt_pro_jerky_beef_blackpepper.jpg",
		"AuthorId": 1,
		"CategoryId": 1,
		"status": "active",
		"createdAt": "2022-03-07T13:03:34.964Z",
		"updatedAt": "2022-03-07T15:03:48.941Z",
		"Category": {
			"id": 1,
			"name": "pizza",
			"createdAt": "2022-03-03T14:31:41.094Z",
			"updatedAt": "2022-03-03T14:31:41.094Z"
		},
		"User": {
			"id": 1,
			"email": "admin13@admin.com",
			"password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
			"role": "admin",
			"phoneNumber": "+48 475 198 0103",
			"address": "1 Ridgeway Lane",
			"createdAt": "2022-03-03T14:31:40.950Z",
			"updatedAt": "2022-03-03T14:31:40.950Z"
		}
	},
	{
		"id": 29,
		"name": "Plantt Pro Jerky Beef Blackpepper",
		"description": "Plant Based Beef, Saus BBQ, Saus Blackpepper, Keju Mozzarella, Bawang, Paprika Merah, Saus Keju Cheddar",
		"price": 80910,
		"imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb-plantt_pro_jerky_beef_blackpepper.jpg",
		"AuthorId": 1,
		"CategoryId": 1,
		"status": "active",
		"createdAt": "2022-03-07T13:04:17.782Z",
		"updatedAt": "2022-03-07T13:04:17.782Z",
		"Category": {
			"id": 1,
			"name": "pizza",
			"createdAt": "2022-03-03T14:31:41.094Z",
			"updatedAt": "2022-03-03T14:31:41.094Z"
		},
		"User": {
			"id": 1,
			"email": "admin13@admin.com",
			"password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
			"role": "admin",
			"phoneNumber": "+48 475 198 0103",
			"address": "1 Ridgeway Lane",
			"createdAt": "2022-03-03T14:31:40.950Z",
			"updatedAt": "2022-03-03T14:31:40.950Z"
		}
	}
]
```

&nbsp;

## 5. GET /food/:id

description: get food detail by Id

- params:

```json
{
	"id": "integer(requeired)"
}
```

_Response (200 - OK)_

```json
{
	"id": 5,
	"name": "Ultimate Cheese Melt ",
	"description": "Liquid Cheese Sauce,Keju Mozzarella, Cheddar Cheese Sauce, Keju Ricotta, Mozzarella String, Keju Parmesan, Parsley",
	"price": 80910,
	"imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/u/l/ultimatecheesemeltnew.png",
	"AuthorId": 2,
	"CategoryId": 1,
	"createdAt": "2022-03-01T14:02:59.924Z",
	"updatedAt": "2022-03-01T15:14:59.024Z"
}
```

_response (404- not found)_

&nbsp;

## 5. PATCH /food/:id

description: update status food by Id

- params
- body

```json
{
	"status": "Enum"
}
```

```json
{
	"msg": "Data successfully Updated",
	"updatedStatus": [1],
	"history": {
		"id": 11,
		"foodName": "Plantt Pro Jerky Beef Blackpepper",
		"description": "Food with id 28 status has been updated from active into inactive ",
		"updatedBy": "admin13",
		"FoodId": 28,
		"updatedAt": "2022-03-08T15:36:53.929Z",
		"createdAt": "2022-03-08T15:36:53.929Z"
	}
}
```

_Response (200 - OK)_

_Response (404 - Not Found)_

_Response (403 - Forbidden)_

_Response (500 - internal server error)_

## 6. PUT /food/:id

description : update data food by id

- params:

```json
{
	"id": "integer(required)"
}
```

```js
  if(!oneMenu) // if menu with id not found
```

_Response (404 - not found)_

&nbsp;

```js
  else // req.body to update found menu
```

- body

```json
{
	"name": "string",
	"description": "string",
	"price": "integer",
	"imgUrl": "string",
	"AuthorId": " integer",
	"CategoryId": "integer"
}
```

_Response (200-OK)_

```json
{
	"msg": "Data successfully Updated"
}
```

&nbsp;

`if req.body null or undifined`

```json
  "name":"",
  "description":"",
  "price": "",
  "imgUrl": "",
  "AuthorId":" integer",
  "CategoryId": "integer"
```

_Response (400 - Bad Request)_

&nbsp;

## 7. DELETE /food/:id

description : update data food by id

- params:

```json
{
	"id": "integer(requeired)"
}
```

```js
  if(!oneMenu) // if menu with id not found
```

_Response (404 - not found)_

```json
  else // req.body to update found menu
```

```json
{
	"msg": "Food Success to Delete",
	"previousData": {
		"id": 7,
		"name": "Ultimate Cheese Melt ",
		"description": "Liquid Cheese Sauce,Keju Mozzarella, Cheddar Cheese Sauce, Keju Ricotta, Mozzarella String, Keju Parmesan, Parsley",
		"price": 80910,
		"imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/u/l/ultimatecheesemeltnew.png",
		"AuthorId": 2,
		"CategoryId": 1,
		"createdAt": "2022-03-01T14:02:59.924Z",
		"updatedAt": "2022-03-01T15:14:59.024Z"
	}
}
```

&nbsp;

## 8. GET /categories

description : get all categories

_Response (200 - OK)_

```js
[
	{
		id: 1,
		name: "pizza",
		createdAt: "2022-03-03T14:31:41.094Z",
		updatedAt: "2022-03-03T14:31:41.094Z",
	},
	{
		id: 2,
		name: "side dish",
		createdAt: "2022-03-03T14:31:41.094Z",
		updatedAt: "2022-03-03T14:31:41.094Z",
	},
	{
		id: 3,
		name: "drink",
		createdAt: "2022-03-03T14:31:41.094Z",
		updatedAt: "2022-03-03T14:31:41.094Z",
	},
];
```

&nbsp;

## 9. GET /histories

description : get all histories

```json
[
    {
        "id": 10,
        "foodName": "Plantt Pro Jerky Beef Blackpepper",
        "description": "Food with id 28 status has been updated from inactive into active ",
        "updatedBy": "admin13",
        "FoodId": 28,
        "createdAt": "2022-03-07T15:03:48.945Z",
        "updatedAt": "2022-03-07T15:03:48.945Z"
    },
    {
        "id": 9,
        "foodName": "Plantt Pro Jerky Beef Blackpepper",
        "description": "Food with id 28 status has been updated from inactive into inactive ",
        "updatedBy": "admin13",
        "FoodId": 28,
        "createdAt": "2022-03-07T15:03:19.079Z",
        "updatedAt": "2022-03-07T15:03:19.079Z"
    },
    {
        "id": 8,
        "foodName": "Plantt Pro Jerky Beef Blackpepper",
        "description": "Food with id 28 status has been updated from [object Object] into 1 ",
        "updatedBy": "admin13",
        "FoodId": 28,
        "createdAt": "2022-03-07T15:01:33.155Z",
        "updatedAt": "2022-03-07T15:01:33.155Z"
    }
]

_Response (200 - OK)_

_Response (500 - Internal Server Error)_

```

## 10. POST /customers/register

-body

```JSON
{
  "email": "string",
  "password": "string,
  "phoneNumber": "string"
}
```

_Response (201- created)_

```JSON
{
    "id": 6,
    "email": "customer35@customer.com",
    "password": "$2b$10$XTz5TMaV9nEieNtDZ2z3UuDQ0BEbsbQnyYAfCCy3Ws.fn99Q9Z0MC",
    "phoneNumber": "0812315632",
    "updatedAt": "2022-03-19T16:17:49.136Z",
    "createdAt": "2022-03-19T16:17:49.136Z"
}
```

_Response (400 - Bad Request)_

## 11. POST /customers/login

-req.body

```JSON
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```JSON
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJjdXN0b21lcjE3QGN1c3RvbWVyLmNvbSIsImlhdCI6MTY0NzcwNjg3N30.ty0s9mYKxDUvICjwZEzlyjyR4RjMvwqfHMJbzBRJkkw",
    "id": 5,
    "email": "customer17@customer.com"
}
```

_Response (400 - Bad Request)_

## 12. GET /customers/food

-req.query = search, filter, page, null

_Response (200- OK)_

null or without query

```JSON
{
    "count": 24,
    "rows": [
        {
            "id": 1,
            "name": "American Classic Cheeseburger",
            "description": "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble, Onion, Slice Cheese, Mozzarella Cheese",
            "price": 80910,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/m/american-classic-cheeseburger-550x550px.png",
            "AuthorId": 1,
            "CategoryId": 1,
            "status": "active",
            "createdAt": "2022-03-03T14:31:41.100Z",
            "updatedAt": "2022-03-12T15:20:22.527Z",
            "Category": {
                "id": 1,
                "name": "pizza",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 45,
            "name": "American Classic Cheeseburger 123213",
            "description": "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble, Onion, Slice Cheese, Mozzarella Cheese",
            "price": 80910,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/m/american-classic-cheeseburger-550x550px.png",
            "AuthorId": 1,
            "CategoryId": 1,
            "status": "active",
            "createdAt": "2022-03-12T14:48:27.519Z",
            "updatedAt": "2022-03-12T14:48:27.519Z",
            "Category": {
                "id": 1,
                "name": "pizza",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 39,
            "name": "American Classic Cheeseburger walwallaw",
            "description": "Tomato Sauce, Mustard Sauce, Tomato, Beasdsadef Rasher, Beef Crumble, Onion, Slice Cheese, Mozzarella Cheese",
            "price": 809104,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/m/american-classic-cheeseburger-550x550px.png",
            "AuthorId": 1,
            "CategoryId": 1,
            "status": "active",
            "createdAt": "2022-03-12T13:47:17.135Z",
            "updatedAt": "2022-03-12T13:47:17.135Z",
            "Category": {
                "id": 1,
                "name": "pizza",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 35,
            "name": "Plantt Pro Jerky Beef Blackpepper",
            "description": "Plant Based Beef, Saus BBQ, Saus Blackpepper, Keju Mozzarella, Bawang, Paprika Merah, Saus Keju Cheddar",
            "price": 80910,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb-plantt_pro_jerky_beef_blackpepper.jpg",
            "AuthorId": 1,
            "CategoryId": 1,
            "status": "active",
            "createdAt": "2022-03-12T06:59:30.466Z",
            "updatedAt": "2022-03-12T06:59:30.466Z",
            "Category": {
                "id": 1,
                "name": "pizza",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 34,
            "name": "Plantt Pro Jerky Beef Blackpepper",
            "description": "Plant Based Beef, Saus BBQ, Saus Blackpepper, Keju Mozzarella, Bawang, Paprika Merah, Saus Keju Cheddar",
            "price": 80910,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb-plantt_pro_jerky_beef_blackpepper.jpg",
            "AuthorId": 1,
            "CategoryId": 1,
            "status": "active",
            "createdAt": "2022-03-12T06:59:13.534Z",
            "updatedAt": "2022-03-12T06:59:13.534Z",
            "Category": {
                "id": 1,
                "name": "pizza",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 33,
            "name": "Plantt Pro Jerky Beef Blackpepper",
            "description": "Plant Based Beef, Saus BBQ, Saus Blackpepper, Keju Mozzarella, Bawang, Paprika Merah, Saus Keju Cheddar",
            "price": 80910,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb-plantt_pro_jerky_beef_blackpepper.jpg",
            "AuthorId": 1,
            "CategoryId": 1,
            "status": "active",
            "createdAt": "2022-03-12T06:58:40.657Z",
            "updatedAt": "2022-03-12T06:58:40.657Z",
            "Category": {
                "id": 1,
                "name": "pizza",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 32,
            "name": "Plantt Pro Jerky Beef Blackpepper",
            "description": "Plant Based Beef, Saus BBQ, Saus Blackpepper, Keju Mozzarella, Bawang, Paprika Merah, Saus Keju Cheddar",
            "price": 80910,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb-plantt_pro_jerky_beef_blackpepper.jpg",
            "AuthorId": 1,
            "CategoryId": 1,
            "status": "active",
            "createdAt": "2022-03-12T06:56:14.713Z",
            "updatedAt": "2022-03-12T06:56:14.713Z",
            "Category": {
                "id": 1,
                "name": "pizza",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 31,
            "name": "NewYorker Alfredo Beef Mushroom Truffle",
            "description": "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble, Onion, Slice Cheese, Mozzarella Cheese",
            "price": 90000,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/n/e/newyorkeralfredobeefmushroomtrufflebig.png",
            "AuthorId": 1,
            "CategoryId": 1,
            "status": "active",
            "createdAt": "2022-03-12T06:54:51.227Z",
            "updatedAt": "2022-03-12T06:54:51.227Z",
            "Category": {
                "id": 1,
                "name": "pizza",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 30,
            "name": "NewYorker Alfredo Beef Mushroom Truffle",
            "description": "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble, Onion, Slice Cheese, Mozzarella Cheese",
            "price": 80910,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/n/e/newyorkeralfredobeefmushroomtrufflebig.png",
            "AuthorId": 1,
            "CategoryId": 1,
            "status": "active",
            "createdAt": "2022-03-12T06:53:40.750Z",
            "updatedAt": "2022-03-12T06:53:40.750Z",
            "Category": {
                "id": 1,
                "name": "pizza",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        }
    ]
}

```

with query search

_Response (200 - OK)_

```JSON
{
    "count": 1,
    "rows": [
        {
            "id": 38,
            "name": "Arabic Chicken Kebab",
            "description": "Truffle Alfredo Sauce, Keju Mozzarella, Beef Burger, Onion, Jamur Champignon, Keju Parmesan, Parsley",
            "price": 564564,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/n/e/newyorkeralfredobeefmushroomtrufflebig.png",
            "AuthorId": 1,
            "CategoryId": 2,
            "status": "active",
            "createdAt": "2022-03-12T13:28:33.031Z",
            "updatedAt": "2022-03-12T13:28:33.031Z",
            "Category": {
                "id": 2,
                "name": "side dish",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        }
    ]
}

```

with query filter

```JSON
{
    "count": 3,
    "rows": [
        {
            "id": 3,
            "name": "Lychee Tea ",
            "description": "Tea with Lychee flavor, that fresh your day",
            "price": 15455,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/l/y/lychee-tea.png",
            "AuthorId": 1,
            "CategoryId": 3,
            "status": "active",
            "createdAt": "2022-03-03T14:31:41.100Z",
            "updatedAt": "2022-03-03T14:31:41.100Z",
            "Category": {
                "id": 3,
                "name": "drink",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 40,
            "name": "American Classic Cheeseburger 123213",
            "description": "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble, Onion, Slice Cheese, Mozzarella Cheese",
            "price": 80910,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/m/american-classic-cheeseburger-550x550px.png",
            "AuthorId": 1,
            "CategoryId": 3,
            "status": "active",
            "createdAt": "2022-03-12T13:52:49.429Z",
            "updatedAt": "2022-03-12T13:52:49.429Z",
            "Category": {
                "id": 3,
                "name": "drink",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 47,
            "name": "tes12",
            "description": "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble, Onion, Slice Cheese, Mozzarella Cheese",
            "price": 1211212,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/n/e/newyorkeralfredobeefmushroomtrufflebig.png",
            "AuthorId": 1,
            "CategoryId": 3,
            "status": "active",
            "createdAt": "2022-03-12T15:53:48.451Z",
            "updatedAt": "2022-03-12T15:53:48.451Z",
            "Category": {
                "id": 3,
                "name": "drink",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        }
    ]
}

```

with query page

_Response (200- OK)_

```JSON
{
    "count": 24,
    "rows": [
        {
            "id": 45,
            "name": "American Classic Cheeseburger 123213",
            "description": "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble, Onion, Slice Cheese, Mozzarella Cheese",
            "price": 80910,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/m/american-classic-cheeseburger-550x550px.png",
            "AuthorId": 1,
            "CategoryId": 1,
            "status": "active",
            "createdAt": "2022-03-12T14:48:27.519Z",
            "updatedAt": "2022-03-12T14:48:27.519Z",
            "Category": {
                "id": 1,
                "name": "pizza",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 46,
            "name": "NewYorker Alfredo Beef Mushroom Truffle 1231",
            "description": "Truffle Alfredo Sauce, Keju Mozzarella, Beef Burger, Onion, Jamur Champignon, Keju Parmesan, Parsley",
            "price": 55642,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/n/e/newyorkeralfredobeefmushroomtrufflebig.png",
            "AuthorId": 1,
            "CategoryId": 2,
            "status": "active",
            "createdAt": "2022-03-12T14:52:50.570Z",
            "updatedAt": "2022-03-12T14:52:50.570Z",
            "Category": {
                "id": 2,
                "name": "side dish",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 1,
            "name": "American Classic Cheeseburger",
            "description": "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble, Onion, Slice Cheese, Mozzarella Cheese",
            "price": 80910,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/m/american-classic-cheeseburger-550x550px.png",
            "AuthorId": 1,
            "CategoryId": 1,
            "status": "active",
            "createdAt": "2022-03-03T14:31:41.100Z",
            "updatedAt": "2022-03-12T15:20:22.527Z",
            "Category": {
                "id": 1,
                "name": "pizza",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 47,
            "name": "tes12",
            "description": "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble, Onion, Slice Cheese, Mozzarella Cheese",
            "price": 1211212,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/n/e/newyorkeralfredobeefmushroomtrufflebig.png",
            "AuthorId": 1,
            "CategoryId": 3,
            "status": "active",
            "createdAt": "2022-03-12T15:53:48.451Z",
            "updatedAt": "2022-03-12T15:53:48.451Z",
            "Category": {
                "id": 3,
                "name": "drink",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 48,
            "name": "tes 24",
            "description": "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble, Onion, Slice Cheese, Mozzarella Cheese",
            "price": 56565,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/n/e/newyorkeralfredobeefmushroomtrufflebig.png",
            "AuthorId": 1,
            "CategoryId": 2,
            "status": "active",
            "createdAt": "2022-03-12T15:56:36.031Z",
            "updatedAt": "2022-03-12T15:56:36.031Z",
            "Category": {
                "id": 2,
                "name": "side dish",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        },
        {
            "id": 49,
            "name": "American Classic Cheeseburger 45",
            "description": "Saus Domino's Pizza, Keju Mozzarella, Saus Keju Cheddar, Liquid Cheese Sauce, Beef Burger, Beef Crumble, Bawang, Tomat, Jalapeno, Mexican Seasoning, Nachos Chips",
            "price": 659898,
            "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/c/h/chicken_kebab_side.png",
            "AuthorId": 1,
            "CategoryId": 2,
            "status": "active",
            "createdAt": "2022-03-12T15:58:14.794Z",
            "updatedAt": "2022-03-12T15:58:58.418Z",
            "Category": {
                "id": 2,
                "name": "side dish",
                "createdAt": "2022-03-03T14:31:41.094Z",
                "updatedAt": "2022-03-03T14:31:41.094Z"
            },
            "User": {
                "id": 1,
                "email": "admin13@admin.com",
                "password": "$2b$10$rzia0xAyGs7GcLOR.rhiy.jV/PL0MAPvWgqmOS9BH.9989pLMbYs.",
                "role": "admin",
                "phoneNumber": "+48 475 198 0103",
                "address": "1 Ridgeway Lane",
                "createdAt": "2022-03-03T14:31:40.950Z",
                "updatedAt": "2022-03-03T14:31:40.950Z"
            }
        }
    ]
}

```

_Response (500 - Internal Server Error)_

## 13 GET /customers/food/:Id

- req.params.id

```JSON
{
    "id": 1,
    "name": "American Classic Cheeseburger",
    "description": "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble, Onion, Slice Cheese, Mozzarella Cheese",
    "price": 80910,
    "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/m/american-classic-cheeseburger-550x550px.png",
    "AuthorId": 1,
    "CategoryId": 1,
    "status": "active",
    "createdAt": "2022-03-03T14:31:41.100Z",
    "updatedAt": "2022-03-12T15:20:22.527Z",
    "Category": {
        "id": 1,
        "name": "pizza",
        "createdAt": "2022-03-03T14:31:41.094Z",
        "updatedAt": "2022-03-03T14:31:41.094Z"
    }
}

```

_Response (500 - Internal Server Error)_

## 14. POST /customers/favorites/:Id

- req.params.Id
- CustomerId = req.customer.id
- req.headers

_Response(200 - OK)_

```JSON
{
    "id": 15,
    "CustomerId": 5,
    "FoodId": 1,
    "updatedAt": "2022-03-19T16:32:14.879Z",
    "createdAt": "2022-03-19T16:32:14.879Z"
}

```

_Response (404- not found)_

## 15 GET /customers/food

- req.customers.id
- req.headers

_Response (200 - OK)_

```JSON
{
    "id": 1,
    "FoodId": 1,
    "CustomerId": 1,
    "createdAt": "2022-03-15T13:57:09.194Z",
    "updatedAt": "2022-03-15T13:57:09.194Z",
    "Food": {
        "id": 1,
        "name": "American Classic Cheeseburger",
        "description": "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble, Onion, Slice Cheese, Mozzarella Cheese",
        "price": 80910,
        "imgUrl": "https://dom-repo-olo-prod.oss-ap-southeast-5.aliyuncs.com/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/m/american-classic-cheeseburger-550x550px.png",
        "AuthorId": 1,
        "CategoryId": 1,
        "status": "active",
        "createdAt": "2022-03-03T14:31:41.100Z",
        "updatedAt": "2022-03-12T15:20:22.527Z"
    }
}

```

&nbsp;

## GLOBAL ERROR

_Response (400 - Bad Request)_

```json
{
  "msg": "Email is required"
}
OR
{
  "msg": "Password is required"
}
OR
{
  "msg": "Food Name is required"
}
OR
{
  "msg": "Description is required"
}
OR
{
  "msg": "Price min Rp. 10.000,00"
}
OR
{
  "msg": "imageUrl is required"
}
```

_Response (401 - Unautorized)_

```json
{
	"msg": "You must Log in first"
}
```

\_Response (403 - Forbidden)

```json
{
	"msg": "You dont have Permission to Access"
}
```

\_Response (404 - Not Found)

```json
{
	"msg": "Data with Id ${:id} not Found"
}
```

_Response (500 - Internal Server Error)_

```json
{
	"message": "Internal server error"
}
```
