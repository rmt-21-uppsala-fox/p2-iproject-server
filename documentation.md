# Samine

## Overview Routes :

> ## /users :
>
> - `POST, /login`
> - `POST, /register`
>
> ## /animes
>
> - `GET, /animes`
> - `GET, /animes/season`
> - `GET, /animes/:animeId`
> - `POST, /animes/favorites`
> - `GET, /animes/favorites`
> - `DELETE, /animes/favorites/:animeId`

## `POST, /login`

Login into an already registered account.

### request.body:

```json
{
  "email": "string",
  "password": "string"
}
```

### If success: code 200

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE2LCJlbWFpbCI6InRoZWJsYWNrc3dvcmRzbWFuOTVAZ21haWwuY29tIiwicm9sZSI6InN0YWZmIiwiaWF0IjoxNjQ2NTc2NDk3fQ.ZrKPSvuezx41cxVebYFVOETRlS6cDiDEqrKieFb8cO8"
}
```

### If password or email is not inputted : code 401

```json
{
  "Error": "Email and Password is required"
}
```

### If fail to validate : code 401

```json
{
  "Error": "Wrong email or password"
}
```

### If anything else failed : code 500

```json
{
  "Error": "Internal Server Error"
}
```

## `POST, /register`

Register new account into the database

### request.body:

```json
{
  "email": "string",
  "password": "string"
}
```

### If success: code 201

```json
{
  "id": "1",
  "email": "example@mail.com"
}
```

### If password or email is not inputted : code 401

```json
{
  "Error": "Email and Password is required"
}
```

### If fail to validate : code 400

```json
{
  "Error": "Email already registered"
}
```

### If anything else failed : code 500

```json
{
  "Error": "Internal server error"
}
```

## `GET, /animes`

Showing list of animes from 3rd party API jikan.moe

### If success: code 200

```json
{
  "pagination": {
    "last_visible_page": 951,
    "has_next_page": true
  },
  "data": [
    {
      "mal_id": 1,
      "url": "https://myanimelist.net/anime/1/Cowboy_Bebop",
      "images": {
        "jpg": {
            "image_url": "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
            "small_image_url": "https://cdn.myanimelist.net/images/anime/4/19644t.jpg",
            "large_image_url": "https://cdn.myanimelist.net/images/anime/4/19644l.jpg"
      },
        "webp": {
          "image_url": "https://cdn.myanimelist.net/images/anime/4/19644.webp",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/4/19644t.webp",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/4/19644l.webp"
        }
      },
      "trailer": {
        "youtube_id": "qig4KOK2R2g",
        "url": "https://www.youtube.com/watch?v=qig4KOK2R2g",
        "embed_url": "https://www.youtube.com/embed/qig4KOK2R2g?enablejsapi=1&wmode=opaque&autoplay=1",
        "images": {
          "image_url": "https://img.youtube.com/vi/qig4KOK2R2g/default.jpg",
          "small_image_url": "https://img.youtube.com/vi/qig4KOK2R2g/sddefault.jpg",
          "medium_image_url": "https://img.youtube.com/vi/qig4KOK2R2g/mqdefault.jpg",
          "large_image_url": "https://img.youtube.com/vi/qig4KOK2R2g/hqdefault.jpg",
          "maximum_image_url": "https://img.youtube.com/vi/qig4KOK2R2g/maxresdefault.jpg"
        }
      },
      "title": "Cowboy Bebop",
      "title_english": "Cowboy Bebop",
      "title_japanese": "カウボーイビバップ",
      "title_synonyms": [],
      "type": "TV",
      "source": "Original",
      "episodes": 26,
      "status": "Finished Airing",
      "airing": false,
      "aired": {
        "from": "1998-04-03T00:00:00+00:00",
        "to": "1999-04-24T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 3,
            "month": 4,
            "year": 1998
          },
          "to": {
            "day": 24,
            "month": 4,
            "year": 1999
          }
        },
        "string": "Apr 3, 1998 to Apr 24, 1999"
      },
      "duration": "24 min per ep",
      "rating": "R - 17+ (violence & profanity)",
      "score": 8.76,
      "scored_by": 767603,
      "rank": 35,
      "popularity": 42,
      "members": 1573862,
      "favorites": 69765,
      "synopsis": "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters. Spike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi. While developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds. [Written by MAL Rewrite]",
      "background": "When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2, 3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively. Cowboy Bebop's biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show's heavy Western influence struck a chord with American viewers, where it became a \"gateway drug\" to anime aimed at adult audiences.",
      "season": "spring",
      "year": 1998,
      "broadcast": {
        "day": "Saturdays",
        "time": "01:00",
        "timezone": "Asia/Tokyo",
        "string": "Saturdays at 01:00 (JST)"
      },
      "producers": [
        {
          "mal_id": 23,
          "type": "anime",
          "name": "Bandai Visual",
          "url": "https://myanimelist.net/anime/producer/23/Bandai_Visual"
        }
      ],
      "licensors": [
        {
          "mal_id": 102,
          "type": "anime",
          "name": "Funimation",
          "url": "https://myanimelist.net/anime/producer/102/Funimation"
        },
        {
          "mal_id": 233,
          "type": "anime",
          "name": "Bandai Entertainment",
          "url": "https://myanimelist.net/anime/producer/233/Bandai_Entertainment"
        }
      ],
      "studios": [
        {
          "mal_id": 14,
          "type": "anime",
          "name": "Sunrise",
          "url": "https://myanimelist.net/anime/producer/14/Sunrise"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "anime",
          "name": "Action",
          "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
          "mal_id": 2,
          "type": "anime",
          "name": "Adventure",
          "url": "https://myanimelist.net/anime/genre/2/Adventure"
        },
        {
          "mal_id": 4,
          "type": "anime",
          "name": "Comedy",
          "url": "https://myanimelist.net/anime/genre/4/Comedy"
        },
        {
          "mal_id": 8,
          "type": "anime",
          "name": "Drama",
          "url": "https://myanimelist.net/anime/genre/8/Drama"
        },
        {
          "mal_id": 24,
          "type": "anime",
          "name": "Sci-Fi",
          "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
            "mal_id": 29,
            "type": "anime",
            "name": "Space",
            "url": "https://myanimelist.net/anime/genre/29/Space"
        }
      ],
      "demographics": []
    },
    {
      "mal_id": 5,
      "url": "https://myanimelist.net/anime/5/Cowboy_Bebop__Tengoku_no_Tobira",
      "images": {
        "jpg": {
          "image_url": "https://cdn.myanimelist.net/images/anime/1439/93480.jpg",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480t.jpg",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480l.jpg"
        },
        "webp": {
          "image_url": "https://cdn.myanimelist.net/images/anime/1439/93480.webp",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480t.webp",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480l.webp"
        }
      },
      "trailer": {
        "youtube_id": "hc7IxJ93jtM",
        "url": "https://www.youtube.com/watch?v=hc7IxJ93jtM",
        "embed_url": "https://www.youtube.com/embed/hc7IxJ93jtM?enablejsapi=1&wmode=opaque&autoplay=1",
        "images": {
          "image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/default.jpg",
          "small_image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/sddefault.jpg",
          "medium_image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/mqdefault.jpg",
          "large_image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/hqdefault.jpg",
          "maximum_image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/maxresdefault.jpg"
        }
      },
      "title": "Cowboy Bebop: Tengoku no Tobira",
      "title_english": "Cowboy Bebop: The Movie",
      "title_japanese": "カウボーイビバップ 天国の扉",
      "title_synonyms": [
        "Cowboy Bebop: Knockin' on Heaven's Door"
      ],
      "type": "Movie",
      "source": "Original",
      "episodes": 1,
      "status": "Finished Airing",
      "airing": false,
      "aired": {
        "from": "2001-09-01T00:00:00+00:00",
        "to": null,
        "prop": {
          "from": {
          "day": 1,
          "month": 9,
          "year": 2001
          },
          "to": {
            "day": null,
            "month": null,
            "year": null
          }
        },
          "string": "Sep 1, 2001"
      },
      "duration": "1 hr 55 min",
      "rating": "R - 17+ (violence & profanity)",
      "score": 8.38,
      "scored_by": 187046,
      "rank": 176,
      "popularity": 559,
      "members": 326671,
      "favorites": 1247,
      "synopsis": "Another day, another bounty—such is the life of the often unlucky crew of the Bebop. However, this routine is interrupted when Faye, who is chasing a fairly worthless target on Mars, witnesses an oil tanker suddenly explode, causing mass hysteria. As casualties mount due to a strange disease spreading through the smoke from the blast, a whopping three hundred million woolong price is placed on the head of the supposed perpetrator. With lives at stake and a solution to their money problems in sight, the Bebop crew springs into action. Spike, Jet, Faye, and Edward, followed closely by Ein, split up to pursue different leads across Alba City. Through their individual investigations, they discover a cover-up scheme involving a pharmaceutical company, revealing a plot that reaches much further than the ragtag team of bounty hunters could have realized. [Written by MAL Rewrite]",
      "background": null,
      "season": null,
      "year": null,
      "broadcast": {
        "day": null,
        "time": null,
        "timezone": null,
        "string": null
      },
      "producers": [
        {
          "mal_id": 14,
           "type": "anime",
          "name": "Sunrise",
          "url": "https://myanimelist.net/anime/producer/14/Sunrise"
        },
        {
          "mal_id": 23,
          "type": "anime",
          "name": "Bandai Visual",
          "url": "https://myanimelist.net/anime/producer/23/Bandai_Visual"
        }
      ],
      "licensors": [
        {
          "mal_id": 15,
          "type": "anime",
          "name": "Sony Pictures Entertainment",
          "url": "https://myanimelist.net/anime/producer/15/Sony_Pictures_Entertainment"
        }
      ],
      "studios": [
        {
          "mal_id": 4,
          "type": "anime",
          "name": "Bones",
          "url": "https://myanimelist.net/anime/producer/4/Bones"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "anime",
          "name": "Action",
          "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
          "mal_id": 8,
          "type": "anime",
          "name": "Drama",
          "url": "https://myanimelist.net/anime/genre/8/Drama"
        },
        {
          "mal_id": 7,
          "type": "anime",
          "name": "Mystery",
          "url": "https://myanimelist.net/anime/genre/7/Mystery"
        },
        {
          "mal_id": 24,
          "type": "anime",
          "name": "Sci-Fi",
          "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 29,
          "type": "anime",
          "name": "Space",
          "url": "https://myanimelist.net/anime/genre/29/Space"
        }
      ],
      "demographics": []
    },
  ...,
    ]
  }
]
```

### If failed : code 500

```json
{
  "Error": "Internal server error"
}
```

## `GET, /animes/season`

Showing list of this season animes from 3rd party API jikan.moe

### If success: code 200

```json
{
  "pagination": {
    "last_visible_page": 2,
    "has_next_page": true
  },
  "data": [
    {
      "mal_id": 1,
      "url": "https://myanimelist.net/anime/1/Cowboy_Bebop",
      "images": {
        "jpg": {
            "image_url": "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
            "small_image_url": "https://cdn.myanimelist.net/images/anime/4/19644t.jpg",
            "large_image_url": "https://cdn.myanimelist.net/images/anime/4/19644l.jpg"
      },
        "webp": {
          "image_url": "https://cdn.myanimelist.net/images/anime/4/19644.webp",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/4/19644t.webp",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/4/19644l.webp"
        }
      },
      "trailer": {
        "youtube_id": "qig4KOK2R2g",
        "url": "https://www.youtube.com/watch?v=qig4KOK2R2g",
        "embed_url": "https://www.youtube.com/embed/qig4KOK2R2g?enablejsapi=1&wmode=opaque&autoplay=1",
        "images": {
          "image_url": "https://img.youtube.com/vi/qig4KOK2R2g/default.jpg",
          "small_image_url": "https://img.youtube.com/vi/qig4KOK2R2g/sddefault.jpg",
          "medium_image_url": "https://img.youtube.com/vi/qig4KOK2R2g/mqdefault.jpg",
          "large_image_url": "https://img.youtube.com/vi/qig4KOK2R2g/hqdefault.jpg",
          "maximum_image_url": "https://img.youtube.com/vi/qig4KOK2R2g/maxresdefault.jpg"
        }
      },
      "title": "Cowboy Bebop",
      "title_english": "Cowboy Bebop",
      "title_japanese": "カウボーイビバップ",
      "title_synonyms": [],
      "type": "TV",
      "source": "Original",
      "episodes": 26,
      "status": "Finished Airing",
      "airing": false,
      "aired": {
        "from": "1998-04-03T00:00:00+00:00",
        "to": "1999-04-24T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 3,
            "month": 4,
            "year": 1998
          },
          "to": {
            "day": 24,
            "month": 4,
            "year": 1999
          }
        },
        "string": "Apr 3, 1998 to Apr 24, 1999"
      },
      "duration": "24 min per ep",
      "rating": "R - 17+ (violence & profanity)",
      "score": 8.76,
      "scored_by": 767603,
      "rank": 35,
      "popularity": 42,
      "members": 1573862,
      "favorites": 69765,
      "synopsis": "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters. Spike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi. While developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds. [Written by MAL Rewrite]",
      "background": "When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2, 3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively. Cowboy Bebop's biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show's heavy Western influence struck a chord with American viewers, where it became a \"gateway drug\" to anime aimed at adult audiences.",
      "season": "spring",
      "year": 1998,
      "broadcast": {
        "day": "Saturdays",
        "time": "01:00",
        "timezone": "Asia/Tokyo",
        "string": "Saturdays at 01:00 (JST)"
      },
      "producers": [
        {
          "mal_id": 23,
          "type": "anime",
          "name": "Bandai Visual",
          "url": "https://myanimelist.net/anime/producer/23/Bandai_Visual"
        }
      ],
      "licensors": [
        {
          "mal_id": 102,
          "type": "anime",
          "name": "Funimation",
          "url": "https://myanimelist.net/anime/producer/102/Funimation"
        },
        {
          "mal_id": 233,
          "type": "anime",
          "name": "Bandai Entertainment",
          "url": "https://myanimelist.net/anime/producer/233/Bandai_Entertainment"
        }
      ],
      "studios": [
        {
          "mal_id": 14,
          "type": "anime",
          "name": "Sunrise",
          "url": "https://myanimelist.net/anime/producer/14/Sunrise"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "anime",
          "name": "Action",
          "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
          "mal_id": 2,
          "type": "anime",
          "name": "Adventure",
          "url": "https://myanimelist.net/anime/genre/2/Adventure"
        },
        {
          "mal_id": 4,
          "type": "anime",
          "name": "Comedy",
          "url": "https://myanimelist.net/anime/genre/4/Comedy"
        },
        {
          "mal_id": 8,
          "type": "anime",
          "name": "Drama",
          "url": "https://myanimelist.net/anime/genre/8/Drama"
        },
        {
          "mal_id": 24,
          "type": "anime",
          "name": "Sci-Fi",
          "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
            "mal_id": 29,
            "type": "anime",
            "name": "Space",
            "url": "https://myanimelist.net/anime/genre/29/Space"
        }
      ],
      "demographics": []
    },
    {
      "mal_id": 5,
      "url": "https://myanimelist.net/anime/5/Cowboy_Bebop__Tengoku_no_Tobira",
      "images": {
        "jpg": {
          "image_url": "https://cdn.myanimelist.net/images/anime/1439/93480.jpg",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480t.jpg",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480l.jpg"
        },
        "webp": {
          "image_url": "https://cdn.myanimelist.net/images/anime/1439/93480.webp",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480t.webp",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480l.webp"
        }
      },
      "trailer": {
        "youtube_id": "hc7IxJ93jtM",
        "url": "https://www.youtube.com/watch?v=hc7IxJ93jtM",
        "embed_url": "https://www.youtube.com/embed/hc7IxJ93jtM?enablejsapi=1&wmode=opaque&autoplay=1",
        "images": {
          "image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/default.jpg",
          "small_image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/sddefault.jpg",
          "medium_image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/mqdefault.jpg",
          "large_image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/hqdefault.jpg",
          "maximum_image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/maxresdefault.jpg"
        }
      },
      "title": "Cowboy Bebop: Tengoku no Tobira",
      "title_english": "Cowboy Bebop: The Movie",
      "title_japanese": "カウボーイビバップ 天国の扉",
      "title_synonyms": [
        "Cowboy Bebop: Knockin' on Heaven's Door"
      ],
      "type": "Movie",
      "source": "Original",
      "episodes": 1,
      "status": "Finished Airing",
      "airing": false,
      "aired": {
        "from": "2001-09-01T00:00:00+00:00",
        "to": null,
        "prop": {
          "from": {
          "day": 1,
          "month": 9,
          "year": 2001
          },
          "to": {
            "day": null,
            "month": null,
            "year": null
          }
        },
          "string": "Sep 1, 2001"
      },
      "duration": "1 hr 55 min",
      "rating": "R - 17+ (violence & profanity)",
      "score": 8.38,
      "scored_by": 187046,
      "rank": 176,
      "popularity": 559,
      "members": 326671,
      "favorites": 1247,
      "synopsis": "Another day, another bounty—such is the life of the often unlucky crew of the Bebop. However, this routine is interrupted when Faye, who is chasing a fairly worthless target on Mars, witnesses an oil tanker suddenly explode, causing mass hysteria. As casualties mount due to a strange disease spreading through the smoke from the blast, a whopping three hundred million woolong price is placed on the head of the supposed perpetrator. With lives at stake and a solution to their money problems in sight, the Bebop crew springs into action. Spike, Jet, Faye, and Edward, followed closely by Ein, split up to pursue different leads across Alba City. Through their individual investigations, they discover a cover-up scheme involving a pharmaceutical company, revealing a plot that reaches much further than the ragtag team of bounty hunters could have realized. [Written by MAL Rewrite]",
      "background": null,
      "season": null,
      "year": null,
      "broadcast": {
        "day": null,
        "time": null,
        "timezone": null,
        "string": null
      },
      "producers": [
        {
          "mal_id": 14,
           "type": "anime",
          "name": "Sunrise",
          "url": "https://myanimelist.net/anime/producer/14/Sunrise"
        },
        {
          "mal_id": 23,
          "type": "anime",
          "name": "Bandai Visual",
          "url": "https://myanimelist.net/anime/producer/23/Bandai_Visual"
        }
      ],
      "licensors": [
        {
          "mal_id": 15,
          "type": "anime",
          "name": "Sony Pictures Entertainment",
          "url": "https://myanimelist.net/anime/producer/15/Sony_Pictures_Entertainment"
        }
      ],
      "studios": [
        {
          "mal_id": 4,
          "type": "anime",
          "name": "Bones",
          "url": "https://myanimelist.net/anime/producer/4/Bones"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "anime",
          "name": "Action",
          "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
          "mal_id": 8,
          "type": "anime",
          "name": "Drama",
          "url": "https://myanimelist.net/anime/genre/8/Drama"
        },
        {
          "mal_id": 7,
          "type": "anime",
          "name": "Mystery",
          "url": "https://myanimelist.net/anime/genre/7/Mystery"
        },
        {
          "mal_id": 24,
          "type": "anime",
          "name": "Sci-Fi",
          "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 29,
          "type": "anime",
          "name": "Space",
          "url": "https://myanimelist.net/anime/genre/29/Space"
        }
      ],
      "demographics": []
    },
  ...,
    ]
  }
]
```

## `GET, /animes/:animeId`

Showing detail of anime with ID from :animeId from 3rd party API jikan.moe

### request.params:

```json
{
  "animeId": "integer"
}
```

### If success: code 200

```json
{
  "data": {
    "mal_id": 1,
    "url": "https://myanimelist.net/anime/1/Cowboy_Bebop",
    "images": {
      "jpg": {
        "image_url": "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
        "small_image_url": "https://cdn.myanimelist.net/images/anime/4/19644t.jpg",
        "large_image_url": "https://cdn.myanimelist.net/images/anime/4/19644l.jpg"
      },
      "webp": {
        "image_url": "https://cdn.myanimelist.net/images/anime/4/19644.webp",
        "small_image_url": "https://cdn.myanimelist.net/images/anime/4/19644t.webp",
        "large_image_url": "https://cdn.myanimelist.net/images/anime/4/19644l.webp"
      }
    },
    "trailer": {
      "youtube_id": "qig4KOK2R2g",
      "url": "https://www.youtube.com/watch?v=qig4KOK2R2g",
      "embed_url": "https://www.youtube.com/embed/qig4KOK2R2g?enablejsapi=1&wmode=opaque&autoplay=1",
      "images": {
        "image_url": "https://img.youtube.com/vi/qig4KOK2R2g/default.jpg",
        "small_image_url": "https://img.youtube.com/vi/qig4KOK2R2g/sddefault.jpg",
        "medium_image_url": "https://img.youtube.com/vi/qig4KOK2R2g/mqdefault.jpg",
        "large_image_url": "https://img.youtube.com/vi/qig4KOK2R2g/hqdefault.jpg",
        "maximum_image_url": "https://img.youtube.com/vi/qig4KOK2R2g/maxresdefault.jpg"
      }
    },
    "title": "Cowboy Bebop",
    "title_english": "Cowboy Bebop",
    "title_japanese": "カウボーイビバップ",
    "title_synonyms": [],
    "type": "TV",
    "source": "Original",
    "episodes": 26,
    "status": "Finished Airing",
    "airing": false,
    "aired": {
      "from": "1998-04-03T00:00:00+00:00",
      "to": "1999-04-24T00:00:00+00:00",
      "prop": {
        "from": {
          "day": 3,
          "month": 4,
          "year": 1998
        },
        "to": {
          "day": 24,
          "month": 4,
          "year": 1999
        }
      },
      "string": "Apr 3, 1998 to Apr 24, 1999"
    },
    "duration": "24 min per ep",
    "rating": "R - 17+ (violence & profanity)",
    "score": 8.76,
    "scored_by": 767603,
    "rank": 35,
    "popularity": 42,
    "members": 1573862,
    "favorites": 69765,
    "synopsis": "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters. Spike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi. While developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds. [Written by MAL Rewrite]",
    "background": "When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2, 3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively. Cowboy Bebop's biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show's heavy Western influence struck a chord with American viewers, where it became a \"gateway drug\" to anime aimed at adult audiences.",
    "season": "spring",
    "year": 1998,
    "broadcast": {
      "day": "Saturdays",
      "time": "01:00",
      "timezone": "Asia/Tokyo",
      "string": "Saturdays at 01:00 (JST)"
    },
    "producers": [
      {
        "mal_id": 23,
        "type": "anime",
        "name": "Bandai Visual",
        "url": "https://myanimelist.net/anime/producer/23/Bandai_Visual"
      }
    ],
    "licensors": [
      {
        "mal_id": 102,
        "type": "anime",
        "name": "Funimation",
        "url": "https://myanimelist.net/anime/producer/102/Funimation"
      },
      {
        "mal_id": 233,
        "type": "anime",
        "name": "Bandai Entertainment",
        "url": "https://myanimelist.net/anime/producer/233/Bandai_Entertainment"
      }
    ],
    "studios": [
      {
        "mal_id": 14,
        "type": "anime",
        "name": "Sunrise",
        "url": "https://myanimelist.net/anime/producer/14/Sunrise"
      }
    ],
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      }
    ],
    "explicit_genres": [],
    "themes": [
      {
        "mal_id": 29,
        "type": "anime",
        "name": "Space",
        "url": "https://myanimelist.net/anime/genre/29/Space"
      }
    ],
    "demographics": []
  }
}
```

### If failed : code 500

```json
{
  "Error": "Internal server error"
}
```

## `POST, /animes/favorites``

Add the animeId into table named Favorites

### request.headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE2LCJlbWFpbCI6InRoZWJsYWNrc3dvcmRzbWFuOTVAZ21haWwuY29tIiwicm9sZSI6InN0YWZmIiwiaWF0IjoxNjQ2NTc2NDk3fQ.ZrKPSvuezx41cxVebYFVOETRlS6cDiDEqrKieFb8cO8"
}
```

### request.params:

```json
{
  "animeId": "integer"
}
```

### If success: code 201

```json
{
  "anime": {
    "data": {
      "themes": [
        {
          "url": "https://myanimelist.net/anime/genre/23/School",
          "type": "anime",
          "mal_id": 23,
          "name": "School",
        },
      ],
      "background":
        "On April 24, 2007, Viz Media released the first DVD box set in the United States. An additional three box sets have been released since January 15, 2008. However, these four sets only contain 50 of the 178 episodes. On April 2, 2021, Funimation obtained licensing rights to the series and announced a new dub was in the works.",
      "url": "https://myanimelist.net/anime/22/Tennis_no_Ouji-sama",
      "title_english": "The Prince of Tennis",
      "favorites": 2885,
      "rating": "PG-13 - Teens 13 or older",
      "studios": [
        {
          "name": "Trans Arts",
          "url": "https://myanimelist.net/anime/producer/80/Trans_Arts",
          "mal_id": 80,
          "type": "anime",
        },
      ],
      "duration": "22 min per ep",
      "airing": false,
      "mal_id": 22,
      "status": "Finished Airing",
      "score": 7.88,
      "producers": [
        {
          "name": "Production I.G",
          "type": "anime",
          "url": "https://myanimelist.net/anime/producer/10/Production_IG",
          "mal_id": 10,
        },
        {
          "mal_id": 139,
          "url": "https://myanimelist.net/anime/producer/139/Nihon_Ad_Systems",
          "type": "anime",
          "name": "Nihon Ad Systems",
        },
      ],
      "genres": [
        {
          "type": "anime",
          "mal_id": 1,
          "name": "Action",
          "url": "https://myanimelist.net/anime/genre/1/Action",
        },
        {
          "type": "anime",
          "name": "Comedy",
          "url": "https://myanimelist.net/anime/genre/4/Comedy",
          "mal_id": 4,
        },
        {
          "name": "Sports",
          "type": "anime",
          "url": "https://myanimelist.net/anime/genre/30/Sports",
          "mal_id": 30,
        },
      ],
      "popularity": 1154,
      "aired": {
        "string": "Oct 10, 2001 to Mar 23, 2005",
        "from": "2001-10-10T00:00:00+00:00",
        "to": "2005-03-23T00:00:00+00:00",
        "prop": {
          "to": {
            "year": 2005,
            "month": 3,
            "day": 23,
          },
          "from": {
            "day": 10,
            "year": 2001,
            "month": 10,
          },
        },
      },
      "trailer": {
        "images": {
          "small_image_url": null,
          "medium_image_url": null,
          "image_url": null,
          "maximum_image_url": null,
          "large_image_url": null,
        },
        "embed_url": null,
        "url": null,
        "youtube_id": null,
      },
      "type": "TV",
      "demographics": [
        {
          "mal_id": 27,
          "name": "Shounen",
          "url": "https://myanimelist.net/anime/genre/27/Shounen",
          "type": "anime",
        },
      ],
      "broadcast": {
        "timezone": null,
        "day": null,
        "time": null,
        "string": "Unknown",
      },
      "episodes": 178,
      "synopsis":
        "At the request of his father, tennis prodigy Ryouma Echizen has returned from America and is ready to take the Japanese tennis scene by storm. Aiming to become the best tennis player in the country, he enrolls in Seishun Academy—home to one of the best middle school tennis teams in Japan. After Ryouma catches the captain's eye, he finds himself playing for a spot on the starting lineup in the intra-school ranking matches despite only being a freshman. Due to his age, the rest of the Seishun Boys' Tennis Team are initially reluctant to accept him, but his skill and determination convinces them to let him in. Armed with their new \"super rookie,\" Seishun sets out to claim a spot in the National Tournament, hoping to take the coveted title for themselves. In order to do so, the team must qualify by playing through the Tokyo Prefectural and Kanto Regionals. Yet, the road ahead of them is shared by a plethora of strong schools, each playing tennis in unique ways for their own reasons. Ryouma and his teammates must learn to cooperate if they want to become the champions they aspire to be. [Written by MAL Rewrite]",
      "images": {
        "jpg": {
          "small_image_url":
            "https://cdn.myanimelist.net/images/anime/6/21624t.jpg",
          "large_image_url":
            "https://cdn.myanimelist.net/images/anime/6/21624l.jpg",
          "image_url": "https://cdn.myanimelist.net/images/anime/6/21624.jpg",
        },
        "webp": {
          "large_image_url":
            "https://cdn.myanimelist.net/images/anime/6/21624l.webp",
          "image_url": "https://cdn.myanimelist.net/images/anime/6/21624.webp",
          "small_image_url":
            "https://cdn.myanimelist.net/images/anime/6/21624t.webp",
        },
      },
      "title_synonyms": [],
      "rank": 730,
      "licensors": [
        {
          "name": "VIZ Media",
          "url": "https://myanimelist.net/anime/producer/119/VIZ_Media",
          "type": "anime",
          "mal_id": 119,
        },
      ],
      "scored_by": 67670,
      "explicit_genres": [],
      "title": "Tennis no Ouji-sama",
      "source": "Manga",
      "season": "fall",
      "members": 162836,
      "year": 2001,
      "title_japanese": "テニスの王子様",
    },
  },
  "UserId": "JzYfd7XjUFeJ3tgH2MOt",
  "AnimeId": "22",
};
```

### If anime already favorited : code 400

```json
{
  "Error": "Anime already favorited"
}
```

### If anything else failed : code 500

```json
{
  "Error": "Internal server error"
}
```

## `GET, /animes/favorites`

Show all currently logged in user favorited anime from database

### request.headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE2LCJlbWFpbCI6InRoZWJsYWNrc3dvcmRzbWFuOTVAZ21haWwuY29tIiwicm9sZSI6InN0YWZmIiwiaWF0IjoxNjQ2NTc2NDk3fQ.ZrKPSvuezx41cxVebYFVOETRlS6cDiDEqrKieFb8cO8"
}
```

### If success: code 200

```json
[
  {
    "id": "15ajsuXuiySYRAFcnwEm",
    "AnimeId": "22",
    "anime": {
      "data": {
        "episodes": 178,
        "images": {
          "jpg": {
            "small_image_url": "https://cdn.myanimelist.net/images/anime/6/21624t.jpg",
            "large_image_url": "https://cdn.myanimelist.net/images/anime/6/21624l.jpg",
            "image_url": "https://cdn.myanimelist.net/images/anime/6/21624.jpg"
          },
          "webp": {
            "small_image_url": "https://cdn.myanimelist.net/images/anime/6/21624t.webp",
            "image_url": "https://cdn.myanimelist.net/images/anime/6/21624.webp",
            "large_image_url": "https://cdn.myanimelist.net/images/anime/6/21624l.webp"
          }
        },
        "background": "On April 24, 2007, Viz Media released the first DVD box set in the United States. An additional three box sets have been released since January 15, 2008. However, these four sets only contain 50 of the 178 episodes. On April 2, 2021, Funimation obtained licensing rights to the series and announced a new dub was in the works.",
        "aired": {
          "from": "2001-10-10T00:00:00+00:00",
          "string": "Oct 10, 2001 to Mar 23, 2005",
          "prop": {
            "from": {
              "year": 2001,
              "day": 10,
              "month": 10
            },
            "to": {
              "year": 2005,
              "day": 23,
              "month": 3
            }
          },
          "to": "2005-03-23T00:00:00+00:00"
        },
        "licensors": [
          {
            "type": "anime",
            "mal_id": 119,
            "name": "VIZ Media",
            "url": "https://myanimelist.net/anime/producer/119/VIZ_Media"
          }
        ],
        "scored_by": 67670,
        "title_japanese": "テニスの王子様",
        "score": 7.88,
        "season": "fall",
        "type": "TV",
        "title_english": "The Prince of Tennis",
        "favorites": 2885,
        "status": "Finished Airing",
        "airing": false,
        "trailer": {
          "images": {
            "maximum_image_url": null,
            "image_url": null,
            "medium_image_url": null,
            "small_image_url": null,
            "large_image_url": null
          },
          "url": null,
          "youtube_id": null,
          "embed_url": null
        },
        "rating": "PG-13 - Teens 13 or older",
        "year": 2001,
        "demographics": [
          {
            "mal_id": 27,
            "name": "Shounen",
            "type": "anime",
            "url": "https://myanimelist.net/anime/genre/27/Shounen"
          }
        ],
        "synopsis": "At the request of his father, tennis prodigy Ryouma Echizen has returned from America and is ready to take the Japanese tennis scene by storm. Aiming to become the best tennis player in the country, he enrolls in Seishun Academy—home to one of the best middle school tennis teams in Japan. After Ryouma catches the captain's eye, he finds himself playing for a spot on the starting lineup in the intra-school ranking matches despite only being a freshman. Due to his age, the rest of the Seishun Boys' Tennis Team are initially reluctant to accept him, but his skill and determination convinces them to let him in. Armed with their new \"super rookie,\" Seishun sets out to claim a spot in the National Tournament, hoping to take the coveted title for themselves. In order to do so, the team must qualify by playing through the Tokyo Prefectural and Kanto Regionals. Yet, the road ahead of them is shared by a plethora of strong schools, each playing tennis in unique ways for their own reasons. Ryouma and his teammates must learn to cooperate if they want to become the champions they aspire to be. [Written by MAL Rewrite]",
        "popularity": 1154,
        "members": 162836,
        "title_synonyms": [],
        "studios": [
          {
            "name": "Trans Arts",
            "mal_id": 80,
            "type": "anime",
            "url": "https://myanimelist.net/anime/producer/80/Trans_Arts"
          }
        ],
        "url": "https://myanimelist.net/anime/22/Tennis_no_Ouji-sama",
        "title": "Tennis no Ouji-sama",
        "mal_id": 22,
        "rank": 730,
        "source": "Manga",
        "duration": "22 min per ep",
        "themes": [
          {
            "url": "https://myanimelist.net/anime/genre/23/School",
            "name": "School",
            "type": "anime",
            "mal_id": 23
          }
        ],
        "broadcast": {
          "time": null,
          "string": "Unknown",
          "day": null,
          "timezone": null
        },
        "producers": [
          {
            "name": "Production I.G",
            "type": "anime",
            "url": "https://myanimelist.net/anime/producer/10/Production_IG",
            "mal_id": 10
          },
          {
            "name": "Nihon Ad Systems",
            "url": "https://myanimelist.net/anime/producer/139/Nihon_Ad_Systems",
            "type": "anime",
            "mal_id": 139
          }
        ],
        "genres": [
          {
            "url": "https://myanimelist.net/anime/genre/1/Action",
            "type": "anime",
            "mal_id": 1,
            "name": "Action"
          },
          {
            "url": "https://myanimelist.net/anime/genre/4/Comedy",
            "type": "anime",
            "mal_id": 4,
            "name": "Comedy"
          },
          {
            "url": "https://myanimelist.net/anime/genre/30/Sports",
            "name": "Sports",
            "type": "anime",
            "mal_id": 30
          }
        ],
        "explicit_genres": []
      }
    }
  }
]

```




### If anything else failed : code 500

```json
{
  "Error": "Internal server error"
}
```

## `DELETE, /animes/favorites/:animeId`

Delete an entry of favorite from table named "Favorite"

### request.headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE2LCJlbWFpbCI6InRoZWJsYWNrc3dvcmRzbWFuOTVAZ21haWwuY29tIiwicm9sZSI6InN0YWZmIiwiaWF0IjoxNjQ2NTc2NDk3fQ.ZrKPSvuezx41cxVebYFVOETRlS6cDiDEqrKieFb8cO8"
}
```

### request.params:

```json
{
  "favoriteId": "integer"
}
```

### If success: code 200

```json
{
  "message": "Favorite has been deleted"
}
```

### If anything else failed : code 500

```json
{
  "Error": "Internal server error"
}
```
