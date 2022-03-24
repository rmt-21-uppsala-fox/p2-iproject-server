# OpenGalerie API Documentation

Server Link

```
https://opengalerie.herokuapp.com/
```

## Endpoints :

List of cms endpoints:

- `GET /news`
- `GET /gallery`
- `POST /gallery/nft`
- `GET /gallery/:id`
  &nbsp;

## 1. GET /news

Description:

- Get all NFT news from rapidApi

_Response (200 - OK)_

```json
[
  {
    "title": "PUBG Developer Krafton Teams Up With Solana Blockchain, Likely to Add Crypto and NFT Twist to Games",
    "url": "https://gadgets360.com/cryptocurrency/news/pubg-developer-krafton-partnership-solana-blockchain-crypto-nft-games-web-3-2838825",
    "source": "NDTV",
    "img": "https://i.gadgets360cdn.com/large/pubg_facebook_small_1648037236135.jpg"
  },
  {
    "title": "American Express Plans Footprint in Metaverse and NFT Sectors, Files for Trademarks",
    "url": "https://gadgets360.com/cryptocurrency/news/american-express-nft-metaverse-web-3-trademark-2826319",
    "source": "NDTV",
    "img": "https://i.gadgets360cdn.com/large/american_express_facebook_small_1647427010206.jpg"
  },
  {
    "title": "ConsenSys Blockchain Firm Says Valuation Doubled to Over $7 Billion After New Funding From Microsoft, SoftBank",
    "url": "https://gadgets360.com/cryptocurrency/news/consensys-blockchain-firm-valuation-usd-7-billion-funding-microsoft-softbank-vision-fund-2-2826188",
    "source": "NDTV",
    "img": "https://i.gadgets360cdn.com/large/consensys_logo_small_1647424367014.jpg"
  }
]
```

&nbsp;

## 2. GET /gallery

Description:

- Get Gallery list

_Response (200 - OK)_

```json
[
  {
    "id": 1,

    "wallet": "0xd7b69ae58976ee0d1c6e4c56eefd7c2c2bd449b6",

    "image1": "https://lh3.googleusercontent.com/WrST_yC1AWCs5GQckuYf_8pmghxfpD-0FXZVJZUJcmBN-kZ7WipWu3Z4N9ZMwP1CU3gRjGGL27i-enZE4JkmPXz5FUVcPUxi0tmT2Ys",

    "image2": "https://lh3.googleusercontent.com/67_Zinc_28OWh7ORJoBPu1rnzCtdGV89-P2m-0i8z7Zg2dYa4s-ebHnar4-1cZckER-zzI-zLieFwQIMEe4apf5O6JEzT88di4jn5Q",

    "image3": "https://lh3.googleusercontent.com/QAFhi3JGTMamlnbyfYao3lsBc2IQweNcZlO9sTb0r8ETrCt_fQDtnf1WafVLs6eupM9VlgNR5tnDUOXnYGsvS91SIb8AxuoynbJWOYY",

    "image4": null,

    "image5": null,

    "image6": null,

    "image7": null,

    "image8": null,

    "image9": null,

    "image10": null,

    "createdAt": "2022-03-23T18:26:03.381Z",

    "updatedAt": "2022-03-23T18:26:03.381Z"
  },

  {
    "id": 2,

    "wallet": "0x1f3b538a75ae8758ddff25d3d2bf7ca64408f853",

    "image1": "https://lh3.googleusercontent.com/W9MhzrEp_CZdgfHY0xQvYOPAo83HgHJnUhg3je3XBXbhZWW8fnwvS7oGX8VLqXeNH0l9eU26gO0ShPiZJLewHUeH0DD-6EsWMVudI1g",

    "image2": "https://lh3.googleusercontent.com/WRabUtk8zlDTqZLo5ZyOPZjnUPkNrr5J9NnQW1vjZdbtR0HnT0XuLx-RVEEte9gnhcUj-5vRMRJ0eNVqEaboGR2SWMIRkogFNvvTyDo",

    "image3": "https://lh3.googleusercontent.com/WRabUtk8zlDTqZLo5ZyOPZjnUPkNrr5J9NnQW1vjZdbtR0HnT0XuLx-RVEEte9gnhcUj-5vRMRJ0eNVqEaboGR2SWMIRkogFNvvTyDo",

    "image4": "https://lh3.googleusercontent.com/WRabUtk8zlDTqZLo5ZyOPZjnUPkNrr5J9NnQW1vjZdbtR0HnT0XuLx-RVEEte9gnhcUj-5vRMRJ0eNVqEaboGR2SWMIRkogFNvvTyDo",

    "image5": "https://lh3.googleusercontent.com/J5Xuq9bleXB8Ym6qgKdVJI8On9uf9M7CCq-nnZMzT0t4H4wtb1N61fEmi4l7nY82F24ChDw7tvt_MLfH1WArebRC4wII53GvYMa7AQ",

    "image6": "https://lh3.googleusercontent.com/qdRN1cRoMfMDt435t9tWtSg8GaRxhrvex5R2--VI2QLBM7ML_twRQeAPzhhuX8Fr2LcGqp3FvPWXb6hKQSea16Uc1tGoe9W6-RQv",

    "image7": "https://lh3.googleusercontent.com/qdRN1cRoMfMDt435t9tWtSg8GaRxhrvex5R2--VI2QLBM7ML_twRQeAPzhhuX8Fr2LcGqp3FvPWXb6hKQSea16Uc1tGoe9W6-RQv",

    "image8": "https://lh3.googleusercontent.com/LDmxlMB1zSVg8gdIV5wmEg2UxU234Rwd6XwZ8sBZxGwgt5GZW9Gzbti9yrRSzcySZx-at4veIbM6VAh1_e2pBvujsqjoHI-HcsEBRNo",

    "image9": "https://lh3.googleusercontent.com/sJ6Y3OXkzWAxv0rl5GnHqDrOvgF7CfBgmtsPaWl301voR2thI9XeOfKLdvlk5tcVLnMbrnQFcCRmQdOsW-1vd2Aq5Fbf3-9u1agp8w",

    "image10": "https://lh3.googleusercontent.com/sJ6Y3OXkzWAxv0rl5GnHqDrOvgF7CfBgmtsPaWl301voR2thI9XeOfKLdvlk5tcVLnMbrnQFcCRmQdOsW-1vd2Aq5Fbf3-9u1agp8w",

    "createdAt": "2022-03-23T18:39:16.488Z",

    "updatedAt": "2022-03-23T18:39:16.488Z"
  }
]
```

&nbsp;

## 3. POST /gallery/nft

Description:

- Scrap NFT image from wallet id

Request:

- body:

```json
{
  "owner": "walletId"
}
```

_Response (201 - Created)_

```json
{
  "id": 2,

  "wallet": "0x1f3b538a75ae8758ddff25d3d2bf7ca64408f853",

  "image1": "https://lh3.googleusercontent.com/W9MhzrEp_CZdgfHY0xQvYOPAo83HgHJnUhg3je3XBXbhZWW8fnwvS7oGX8VLqXeNH0l9eU26gO0ShPiZJLewHUeH0DD-6EsWMVudI1g",

  "image2": "https://lh3.googleusercontent.com/WRabUtk8zlDTqZLo5ZyOPZjnUPkNrr5J9NnQW1vjZdbtR0HnT0XuLx-RVEEte9gnhcUj-5vRMRJ0eNVqEaboGR2SWMIRkogFNvvTyDo",

  "image3": "https://lh3.googleusercontent.com/WRabUtk8zlDTqZLo5ZyOPZjnUPkNrr5J9NnQW1vjZdbtR0HnT0XuLx-RVEEte9gnhcUj-5vRMRJ0eNVqEaboGR2SWMIRkogFNvvTyDo",

  "image4": "https://lh3.googleusercontent.com/WRabUtk8zlDTqZLo5ZyOPZjnUPkNrr5J9NnQW1vjZdbtR0HnT0XuLx-RVEEte9gnhcUj-5vRMRJ0eNVqEaboGR2SWMIRkogFNvvTyDo",

  "image5": "https://lh3.googleusercontent.com/J5Xuq9bleXB8Ym6qgKdVJI8On9uf9M7CCq-nnZMzT0t4H4wtb1N61fEmi4l7nY82F24ChDw7tvt_MLfH1WArebRC4wII53GvYMa7AQ",

  "image6": "https://lh3.googleusercontent.com/qdRN1cRoMfMDt435t9tWtSg8GaRxhrvex5R2--VI2QLBM7ML_twRQeAPzhhuX8Fr2LcGqp3FvPWXb6hKQSea16Uc1tGoe9W6-RQv",

  "image7": "https://lh3.googleusercontent.com/qdRN1cRoMfMDt435t9tWtSg8GaRxhrvex5R2--VI2QLBM7ML_twRQeAPzhhuX8Fr2LcGqp3FvPWXb6hKQSea16Uc1tGoe9W6-RQv",

  "image8": "https://lh3.googleusercontent.com/LDmxlMB1zSVg8gdIV5wmEg2UxU234Rwd6XwZ8sBZxGwgt5GZW9Gzbti9yrRSzcySZx-at4veIbM6VAh1_e2pBvujsqjoHI-HcsEBRNo",

  "image9": "https://lh3.googleusercontent.com/sJ6Y3OXkzWAxv0rl5GnHqDrOvgF7CfBgmtsPaWl301voR2thI9XeOfKLdvlk5tcVLnMbrnQFcCRmQdOsW-1vd2Aq5Fbf3-9u1agp8w",

  "image10": "https://lh3.googleusercontent.com/sJ6Y3OXkzWAxv0rl5GnHqDrOvgF7CfBgmtsPaWl301voR2thI9XeOfKLdvlk5tcVLnMbrnQFcCRmQdOsW-1vd2Aq5Fbf3-9u1agp8w",

  "updatedAt": "2022-03-23T18:39:16.488Z",

  "createdAt": "2022-03-23T18:39:16.488Z"
}
```

## 4. GET /gallery/:id`

Description:

- get specific gallery by id

Request:

- params:

```json
{
  "id": "galleryId"
}
```

_Response (200 - OK)_

```json
{
  "id": 1,

  "wallet": "0xd7b69ae58976ee0d1c6e4c56eefd7c2c2bd449b6",

  "image1": "https://lh3.googleusercontent.com/WrST_yC1AWCs5GQckuYf_8pmghxfpD-0FXZVJZUJcmBN-kZ7WipWu3Z4N9ZMwP1CU3gRjGGL27i-enZE4JkmPXz5FUVcPUxi0tmT2Ys",

  "image2": "https://lh3.googleusercontent.com/67_Zinc_28OWh7ORJoBPu1rnzCtdGV89-P2m-0i8z7Zg2dYa4s-ebHnar4-1cZckER-zzI-zLieFwQIMEe4apf5O6JEzT88di4jn5Q",

  "image3": "https://lh3.googleusercontent.com/QAFhi3JGTMamlnbyfYao3lsBc2IQweNcZlO9sTb0r8ETrCt_fQDtnf1WafVLs6eupM9VlgNR5tnDUOXnYGsvS91SIb8AxuoynbJWOYY",

  "image4": null,

  "image5": null,

  "image6": null,

  "image7": null,

  "image8": null,

  "image9": null,

  "image10": null,

  "createdAt": "2022-03-23T18:26:03.381Z",

  "updatedAt": "2022-03-23T18:26:03.381Z"
}
```

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
