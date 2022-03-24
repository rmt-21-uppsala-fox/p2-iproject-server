# LOKER-API Documentation

List of Available Endpoints:

- `GET /route`
- `GET /carbon`
- `GET /carbon/fuelEfficiency`
- `POST /carbon/screenshot`

## 1.GET /route

### Description :

- Get Matching Route from given coordinate

### Query :

- Coordinate : combined string of array route coordinate

Example:

```
112.00397288906544%2C-7.853017581808061%3B112.01781779154089,-7.8412541115704215%3B112.00913810268065,-7.837666978213818
```

- Radiuses: combined string of array radiuses of route

Example

```
25%3B25%3B25
```

### Response (200 - OK)

```Json
{
	"coords": {
		"coordinates": [
			[
				112.004061,
				-7.853054
			],
			[
				112.004194,
				-7.85274
			],
            ...
		],
		"type": "LineString"
	},
	"distance": {
		"value": 3894.448,
		"unit": "m"
	}
}
```

### Response (400 - Bad Request)

```Json
{
    "Message":"Bad Request"
}

```

### Response (400 - Failed To Get Route)

```Json
{
    "Message":"Failed To Get Route"
}

```

&nbsp;

## 2.GET /carbon

### Description :

- Get carbon produced from given distance and car fuel efficiency

### Query :

- distance: number value of route distance in kilometer

Example:

```
12.64
```

- Radiuses: combined string of array radiuses of route

Example

```
25%3B25%3B25
```

### Response (200 - OK)

```Json

	{
	"carbonProducedInKg": 12.64
    }
```

### Response (404 - Bad Request)

```Json
{
    "Message":"Bad Request"
}

```

&nbsp;

## 2.GET /carbon

### Description :

- Get carbon produced from given distance and car fuel efficiency

### Query :

- distance: number value of route distance in kilometer

Example:

```
12.64
```

- Radiuses: combined string of array radiuses of route

Example

```
25%3B25%3B25
```

### Response (200 - OK)

```Json

	{
	"carbonProducedInKg": 12.64
    }
```

### Response (404 - Bad Request)

```Json
{
    "Message":"Bad Request"
}

```

### Response (404 - Fuel Efficiency Not Found)

```Json
{
    "Message":"Unable To Find Fuel Efficiency"
}

```

&nbsp;

## 3.GET /carbon/fuelEfficiency

### Description :

- Get fuelEfficiency from given query of model car and year car released

### Query :

- model: string of car model

Example:

```
"avanza"
```

- year: string year the car released

Example

```
"2020"
```

### Response (200 - OK)

```Json

[
	{
		"city_mpg": 24,
		"class": "compact car",
		"combination_mpg": 28,
		"cylinders": 4,
		"displacement": 2.4,
		"drive": "fwd",
		"fuel_type": "gas",
		"highway_mpg": 35,
		"make": "acura",
		"model": "tlx",
		"transmission": "a",
		"year": 2015
	},
	{
		"city_mpg": 21,
		"class": "compact car",
		"combination_mpg": 25,
		"cylinders": 6,
		"displacement": 3.5,
		"drive": "fwd",
		"fuel_type": "gas",
		"highway_mpg": 34,
		"make": "acura",
		"model": "tlx",
		"transmission": "a",
		"year": 2015
	}
]
```

### Response (404 - Bad Request)

```Json
{
    "Message":"Bad Request"
}

```

### Response (404 - Fuel Efficiency Not Found)

```Json
{
    "Message":"Unable To Find Fuel Efficiency"
}

```

&nbsp;

## 3.POST /carbon/screenshot

### Description :

- Send mail with the estimated carbon production to given email address

### Body :

- carbon: number of carbon produced with unit kg

Example:

```
"12.7"
```

- email address: sting email address

Example

```
"test@test.com"
```

### Response (200 - OK)

```Json
{
    "message": "email has been sent"
}
```

### Response (502 - Bad Gateway)

```Json
{
    "message": "Unable to send email"
}

```

&nbsp;

## Global Error

### Response (500 - Internal Server Error)

```json
{
  "message": "Internal Server Error"
}
```
