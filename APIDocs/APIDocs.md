# Booking-hotel API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /hotels`
- `GET /hotels/markers`
- `GET /hotels/:hotelId`

Routes below need authentication:

- `GET /hotels/book`
- `POST /hotels/:hotelId`
- `POST /hotels/payment/:id`

Xendit Callback endpoints :

- `POST /xenditpayment`

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

## 3. GET /hotels

Description:

- Get all hotels from 3rd API

_Response (200 - OK)_

```json
{
  "result": "OK",
  "data": {
    "body": {
      "header": "Jakarta, Special Capital Region of Jakarta, Indonesia",
      "query": {
        "destination": {
          "id": "659455",
          "value": "Jakarta, Special Capital Region of Jakarta, Indonesia",
          "resolvedLocation": "CITY:659455:UNKNOWN:UNKNOWN"
        }
      },
      "searchResults": {
        "totalCount": 5836,
        "results": [
          {
            "id": 255718,
            "name": "The Ritz-Carlton Jakarta, Pacific Place",
            "starRating": 5,
            "urls": {},
            "address": {
              "streetAddress": "Jalan Jendral Sudirman Kav 52-53",
              "extendedAddress": "Sudirman Central Business District",
              "locality": "Jakarta",
              "postalCode": "12190",
              "region": "Jakarta",
              "countryName": "Indonesia",
              "countryCode": "id",
              "obfuscate": false
            },
            "guestReviews": {
              "unformattedRating": 9.6,
              "rating": "9.6",
              "total": 46,
              "scale": 10,
              "badge": "exceptional",
              "badgeText": "Exceptional"
            },
            "landmarks": [
              {
                "label": "City center",
                "distance": "2.3 miles"
              },
              {
                "label": "Jakarta (CGK-Soekarno-Hatta Intl.)",
                "distance": "13 miles"
              }
            ],
            "ratePlan": {
              "price": {
                "current": "Rp3.316.540",
                "exactCurrent": 3316540.2
              },
              "features": {
                "paymentPreference": false,
                "noCCRequired": false
              }
            },
            "neighbourhood": "Jakarta",
            "coordinate": {
              "lat": -6.22501,
              "lon": 106.810523
            },
            "providerType": "LOCAL",
            "supplierHotelId": 1813629,
            "optimizedThumbUrls": {
              "srpDesktop": "https://exp.cdn-hotels.com/hotels/2000000/1820000/1813700/1813629/b6f78a1b_z.jpg?impolicy=fcrop&w=250&h=140&q=high"
            }
          },
          ...
        ],
        "pagination": {
          "currentPage": 1,
          "pageGroup": "EXPEDIA_IN_POLYGON",
          "nextPageStartIndex": 25,
          "nextPageNumber": 2,
          "nextPageGroup": "EXPEDIA_IN_POLYGON"
        }
      }
    }
  }
}
```

&nbsp;

## 4. GET /hotels/markers

Description:

- Get all hotels location from 3rd API

_Response (200 - OK)_

```json
{
  "result": "OK",
  "data": {
    "body": {
      "header": "Jakarta, Special Capital Region of Jakarta, Indonesia",
      "query": {
        "destination": {
          "id": "659455",
          "value": "Jakarta, Special Capital Region of Jakarta, Indonesia",
          "resolvedLocation": "CITY:659455:UNKNOWN:UNKNOWN"
        }
      },
      "searchResults": {
        "totalCount": 5836,
        "results": [
          {
            "id": 255718,
            "name": "The Ritz-Carlton Jakarta, Pacific Place",
            "starRating": 5,
            "address": {
              "streetAddress": "Jalan Jendral Sudirman Kav 52-53",
              "extendedAddress": "Sudirman Central Business District",
              "locality": "Jakarta",
              "postalCode": "12190",
              "region": "Jakarta",
              "countryName": "Indonesia",
              "countryCode": "id",
              "obfuscate": false
            },
            "coordinate": {
              "lat": -6.22501,
              "lon": 106.810523
            },
            "optimizedThumbUrls": {
              "srpDesktop": "https://exp.cdn-hotels.com/hotels/2000000/1820000/1813700/1813629/b6f78a1b_z.jpg?impolicy=fcrop&w=250&h=140&q=high"
            }
          },
        ...
        ],
        "pagination": {
          "currentPage": 1,
          "pageGroup": "EXPEDIA_IN_POLYGON",
          "nextPageStartIndex": 25,
          "nextPageNumber": 2,
          "nextPageGroup": "EXPEDIA_IN_POLYGON"
        }
      }
    }
  }
}
```

## 5. GET /hotels/:hotelId

Description:

- Get all hotel details with hotelId

Request:

- params:

```json
{
  "id": "1"
}
```

_Response (200 - OK)_

```json
{
  "result": "OK",
  "data": {
    "body": {
      "pdpHeader": {...},
      "overview": {
        "overviewSections": [
          {...},
          {...},
          {...},
          {...}
        ]
      },
      "propertyDescription": {
        "clientToken": "fLGkkR0j7dDb5GOZu5no5S8tT1w.",
        "address": {
          "countryName": "Indonesia",
          "addressLine2": "Kebayoran Baru",
          "cityName": "Jakarta",
          "postalCode": "12160",
          "provinceName": "Jakarta",
          "addressLine1": "Jl Brawijaya Raya No 26",
          "countryCode": "IDN",
          "pattern": "AddressLine1,#AddressLine2,#CityName,#ProvinceName,#PostalCode,#CountryName",
          "fullAddress": "Jl Brawijaya Raya No 26, Kebayoran Baru, Jakarta, 12160, Indonesia"
        },
        "priceMatchEnabled": false,
        "name": "The Dharmawangsa Jakarta",
        "starRatingTitle": "5 stars",
        "starRating": 5,
        "featuredPrice": {
          "beforePriceText": "Lowest price",
          "afterPriceText": "",
          "pricingAvailability": "available on 03/23/22",
          "pricingTooltip": "Price may be available on other dates",
          "currentPrice": {
            "formatted": "Rp2.481.056",
            "plain": 2481056
          },
          "oldPrice": "Rp2.768.160",
          "taxInclusiveFormatting": false,
          "bookNowButton": false
        },
        "mapWidget": {...},
        "roomTypeNames": [...],
        "tagline": [...],
        "freebies": [...]
      },
      "guestReviews": {...},
      "amenities": [...],
      "hygieneAndCleanliness": {
        "title": "COVID-19: Hygiene and cleanliness",
        "healthAndSafetyMeasures": {
          "title": "Enhanced health and safety measures",
          "description": "This property advises that enhanced cleaning and guest safety measures are currently in place.",
          "measures": [
            "Property is cleaned with disinfectant",
            "Property confirms they are implementing enhanced cleaning measures",
            "Social distancing measures are in place"
          ]
        }
      },
      "specialFeatures": {
        "sections": [
          {...},
          {
            "heading": "Recreation",
            "freeText": "",
            "listItems": [],
            "subsections": [...]
          }
        ]
      }
    }
  },
  "transportation": {...}
}
```

&nbsp;

## 6. GET /hotels/book

Description:

- Get all login customer booked ballroom

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
    "id": 1,
    "hotelId": "134171",
    "name": "Shangri-La Jakarta",
    "price": 309916800,
    "status": "UNPAID",
    "bookDateStart": "2020-07-18T17:00:00.000Z",
    "bookDateEnd": "2020-07-20T17:00:00.000Z",
    "customerId": 1,
    "Customer": {
      "id": 1,
      "username": "customer1",
      "email": "customer1@customer.com",
      "password": "$2b$10$9pLuc.sMYcC9/NujFclo2.Z1tCImlN9SwkJ9iBbwdVI4jZ8Va8T9u"
    }
  },
  {
    "id": 2,
    "hotelId": "255718",
    "name": "The Ritz-Carlton Jakarta, Pacific Place",
    "price": 331654000,
    "status": "PAID",
    "bookDateStart": "2020-01-27T17:00:00.000Z",
    "bookDateEnd": "2020-01-28T17:00:00.000Z",
    "customerId": 1,
    "Customer": {
      "id": 1,
      "username": "customer1",
      "email": "customer1@customer.com",
      "password": "$2b$10$9pLuc.sMYcC9/NujFclo2.Z1tCImlN9SwkJ9iBbwdVI4jZ8Va8T9u"
    }
  }
]
```

&nbsp;

## 7. POST /hotels/book/:hotelId

Description:

- Post Date to Hotel for Booking Features

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
  "id": "723419552"
}
```

_Response (200 - OK)_

```json
{
  "id": 4,
  "name": "Alila SCBD, Jakarta",
  "hotelId": 723419552,
  "bookDateStart": "2020-03-31T17:00:00.000Z",
  "bookDateEnd": "2020-04-01T17:00:00.000Z",
  "customerId": 1,
  "price": 289083500,
  "updatedAt": "2022-03-23T21:59:03.034Z",
  "createdAt": "2022-03-23T21:59:03.034Z",
  "status": "UNPAID"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Ballroom has been booked"
}
Or
{
  "message": "Price must be lower than Rp 2.000.000.000,-"
}
```

&nbsp;

## 8. POST /hotels/payment/:id

Description:

- Pay Booked BallRoom via Xendit

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
  "id": "1"
}
```

_Response (200 - OK)_

```json
{
  "url": "https://checkout-staging.xendit.co/web/623b98d166a665f95893b7d8"
}
```

&nbsp;

## 9. POST /xenditpayment

Description:

- Callback xendit payment

Request:

- body:

```json
{
  "external_id": "1-723419552-va-success-$timestamp",
  "amount": "578167000",
  "payer_email": "customer1@customer.com",
  "description": "723419552 - VA Sucessfull invoice payment"
}
```

_Response (200 - OK)_

```json
{
  "message": "1 - Status change to PAID"
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
