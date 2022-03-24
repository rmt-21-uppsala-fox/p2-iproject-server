# Manga Encyclopedia Decumentation

## Endpoint

list of available endpoint :

- `GET /`
- `GET /manga`
- `GET /manga:id`
- `GET /authenticate`

&nbsp;

## 1. GET /

Description : redirect to manga GET manga endpoint

&nbsp;

## 2 GET /manga

Description : get all manga from kitsu 3rd API

_Response (200 - OK)_

```json
{
    "data": [
        {
            "id": "1",
            "type": "manga",
            "links": {
                "self": "https://kitsu.io/api/edge/manga/1"
            },
            "attributes": {
                "createdAt": "2013-12-18T13:48:24.164Z",
                "updatedAt": "2022-03-23T18:00:15.385Z",
                "slug": "guardian-dog",
                "synopsis": "Gengo Kurosaka leads a normal life until a run-away alien called \"Six-eyes\" decides to take refuge in his body. From then on, Gengo becomes Ishtar's target, a beautiful alien in charge of making sure the aliens don't turn planet Earth into hunting grounds. Gengo has now to learn to coexist with his parasite to stay alive...",
                "description": "Gengo Kurosaka leads a normal life until a run-away alien called \"Six-eyes\" decides to take refuge in his body. From then on, Gengo becomes Ishtar's target, a beautiful alien in charge of making sure the aliens don't turn planet Earth into hunting grounds. Gengo has now to learn to coexist with his parasite to stay alive...",
                "coverImageTopOffset": 0,
                "titles": {
                    "en": null,
                    "en_jp": "Guardian Dog",
                    "en_us": "Guardian Dog"
                },
                "canonicalTitle": "Guardian Dog",
                "abbreviatedTitles": [
                    "Guardian Dog"
                ],
                "averageRating": "71.29",
                "ratingFrequencies": {
                    "2": "1",
                    "3": "0",
                    "4": "1",
                    "5": "0",
                    "6": "0",
                    "7": "0",
                    "8": "1",
                    "9": "0",
                    "10": "7",
                    "11": "0",
                    "12": "25",
                    "13": "1",
                    "14": "41",
                    "15": "0",
                    "16": "11",
                    "17": "0",
                    "18": "4",
                    "19": "0",
                    "20": "4"
                },
                "userCount": 129,
                "favoritesCount": 1,
                "startDate": "2005-01-01",
                "endDate": null,
                "nextRelease": null,
                "popularityRank": 7717,
                "ratingRank": 6291,
                "ageRating": null,
                "ageRatingGuide": null,
                "subtype": "manga",
                "status": "current",
                "tba": null,
                "posterImage": {
                    "tiny": "https://media.kitsu.io/manga/1/poster_image/tiny-b4be97beecfca5ba4eb744291405db76.jpeg",
                    "large": "https://media.kitsu.io/manga/1/poster_image/large-3210684af7bee6996926c63e5f16559e.jpeg",
                    "small": "https://media.kitsu.io/manga/1/poster_image/small-8014f18506a324ddf8318c4a74bf4c12.jpeg",
                    "medium": "https://media.kitsu.io/manga/1/poster_image/medium-5c1bd30a5d7538f9925796d3bbc013f4.jpeg",
                    "original": "https://media.kitsu.io/manga/poster_images/1/original.jpg",
                    "meta": {
                        "dimensions": {
                            "tiny": {
                                "width": 110,
                                "height": 156
                            },
                            "large": {
                                "width": 550,
                                "height": 780
                            },
                            "small": {
                                "width": 284,
                                "height": 402
                            },
                            "medium": {
                                "width": 390,
                                "height": 554
                            }
                        }
                    }
                },
                "coverImage": null,
                "chapterCount": 22,
                "volumeCount": 4,
                "serialization": "Comic Rush",
                "mangaType": "manga"
            },
            "relationships": {
                "genres": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/1/relationships/genres",
                        "related": "https://kitsu.io/api/edge/manga/1/genres"
                    }
                },
                "categories": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/1/relationships/categories",
                        "related": "https://kitsu.io/api/edge/manga/1/categories"
                    }
                },
                "castings": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/1/relationships/castings",
                        "related": "https://kitsu.io/api/edge/manga/1/castings"
                    }
                },
                "installments": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/1/relationships/installments",
                        "related": "https://kitsu.io/api/edge/manga/1/installments"
                    }
                },
                "mappings": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/1/relationships/mappings",
                        "related": "https://kitsu.io/api/edge/manga/1/mappings"
                    }
                },
                "reviews": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/1/relationships/reviews",
                        "related": "https://kitsu.io/api/edge/manga/1/reviews"
                    }
                },
                "mediaRelationships": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/1/relationships/media-relationships",
                        "related": "https://kitsu.io/api/edge/manga/1/media-relationships"
                    }
                },
                "characters": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/1/relationships/characters",
                        "related": "https://kitsu.io/api/edge/manga/1/characters"
                    }
                },
                "staff": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/1/relationships/staff",
                        "related": "https://kitsu.io/api/edge/manga/1/staff"
                    }
                },
                "productions": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/1/relationships/productions",
                        "related": "https://kitsu.io/api/edge/manga/1/productions"
                    }
                },
                "quotes": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/1/relationships/quotes",
                        "related": "https://kitsu.io/api/edge/manga/1/quotes"
                    }
                },
                "chapters": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/1/relationships/chapters",
                        "related": "https://kitsu.io/api/edge/manga/1/chapters"
                    }
                },
                "mangaCharacters": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/1/relationships/manga-characters",
                        "related": "https://kitsu.io/api/edge/manga/1/manga-characters"
                    }
                },
                "mangaStaff": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/1/relationships/manga-staff",
                        "related": "https://kitsu.io/api/edge/manga/1/manga-staff"
                    }
                }
            }
        },
        {
            "id": "2",
            "type": "manga",
            "links": {
                "self": "https://kitsu.io/api/edge/manga/2"
            },
            "attributes": {
                "createdAt": "2013-12-18T13:48:24.820Z",
                "updatedAt": "2022-03-23T18:00:15.385Z",
                "slug": "boku-no-mune-ga-itakutemo-glass",
                "synopsis": "When Kousei Matsumoto finds a a man apparently suffering from heatstroke alone out on the street, he takes him despite his better judgement. The young man is a mystery with a scar he won't explain, and the only clue to his past is the whispered name “Mori.” Despite this, Kousei finds his heart becoming entangled, and the pair forge a fragile relationship. When the past literally comes knocking at his door and the truth of the young man's true identity comes out, Kousei comes to a decision that literally tears the pair apart. But is it the right choice, and can the lonely, waif-like stray face his past and forge a future that includes Kousei?\n(Source Digital Manga)",
                "description": "When Kousei Matsumoto finds a a man apparently suffering from heatstroke alone out on the street, he takes him despite his better judgement. The young man is a mystery with a scar he won't explain, and the only clue to his past is the whispered name “Mori.” Despite this, Kousei finds his heart becoming entangled, and the pair forge a fragile relationship. When the past literally comes knocking at his door and the truth of the young man's true identity comes out, Kousei comes to a decision that literally tears the pair apart. But is it the right choice, and can the lonely, waif-like stray face his past and forge a future that includes Kousei?\n(Source Digital Manga)",
                "coverImageTopOffset": 0,
                "titles": {
                    "en": "The Pain in My Heart",
                    "en_jp": "Boku no Mune ga Itakutemo - Glass",
                    "en_us": "The Pain in My Heart",
                    "ja_jp": "ぼくの胸が痛くても GLASS"
                },
                "canonicalTitle": "Boku no Mune ga Itakutemo - Glass",
                "abbreviatedTitles": [],
                "averageRating": null,
                "ratingFrequencies": {
                    "2": "0",
                    "3": "0",
                    "4": "0",
                    "5": "0",
                    "6": "0",
                    "7": "0",
                    "8": "0",
                    "9": "0",
                    "10": "0",
                    "11": "0",
                    "12": "1",
                    "13": "1",
                    "14": "0",
                    "15": "0",
                    "16": "0",
                    "17": "0",
                    "18": "0",
                    "19": "0",
                    "20": "1"
                },
                "userCount": 14,
                "favoritesCount": 0,
                "startDate": "2006-01-01",
                "endDate": "2006-01-01",
                "nextRelease": null,
                "popularityRank": 30532,
                "ratingRank": null,
                "ageRating": "PG",
                "ageRatingGuide": null,
                "subtype": "manga",
                "status": "finished",
                "tba": null,
                "posterImage": {
                    "tiny": "https://media.kitsu.io/manga/2/poster_image/tiny-43a600639bb9b74e9a73b3e0ea2067aa.jpeg",
                    "large": "https://media.kitsu.io/manga/2/poster_image/large-d3fd8ae93e6621deb2f46dc66aaec749.jpeg",
                    "small": "https://media.kitsu.io/manga/2/poster_image/small-abcfd52c0f0970063481da8b74633e0c.jpeg",
                    "medium": "https://media.kitsu.io/manga/2/poster_image/medium-4008eba46e0f10fa5d58df7497b005a6.jpeg",
                    "original": "https://media.kitsu.io/manga/poster_images/2/original.jpg",
                    "meta": {
                        "dimensions": {
                            "tiny": {
                                "width": 110,
                                "height": 156
                            },
                            "large": {
                                "width": 550,
                                "height": 780
                            },
                            "small": {
                                "width": 284,
                                "height": 402
                            },
                            "medium": {
                                "width": 390,
                                "height": 554
                            }
                        }
                    }
                },
                "coverImage": null,
                "chapterCount": null,
                "volumeCount": 1,
                "serialization": "Aqua Comics",
                "mangaType": "manga"
            },
            "relationships": {
                "genres": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/2/relationships/genres",
                        "related": "https://kitsu.io/api/edge/manga/2/genres"
                    }
                },
                "categories": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/2/relationships/categories",
                        "related": "https://kitsu.io/api/edge/manga/2/categories"
                    }
                },
                "castings": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/2/relationships/castings",
                        "related": "https://kitsu.io/api/edge/manga/2/castings"
                    }
                },
                "installments": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/2/relationships/installments",
                        "related": "https://kitsu.io/api/edge/manga/2/installments"
                    }
                },
                "mappings": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/2/relationships/mappings",
                        "related": "https://kitsu.io/api/edge/manga/2/mappings"
                    }
                },
                "reviews": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/2/relationships/reviews",
                        "related": "https://kitsu.io/api/edge/manga/2/reviews"
                    }
                },
                "mediaRelationships": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/2/relationships/media-relationships",
                        "related": "https://kitsu.io/api/edge/manga/2/media-relationships"
                    }
                },
                "characters": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/2/relationships/characters",
                        "related": "https://kitsu.io/api/edge/manga/2/characters"
                    }
                },
                "staff": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/2/relationships/staff",
                        "related": "https://kitsu.io/api/edge/manga/2/staff"
                    }
                },
                "productions": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/2/relationships/productions",
                        "related": "https://kitsu.io/api/edge/manga/2/productions"
                    }
                },
                "quotes": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/2/relationships/quotes",
                        "related": "https://kitsu.io/api/edge/manga/2/quotes"
                    }
                },
                "chapters": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/2/relationships/chapters",
                        "related": "https://kitsu.io/api/edge/manga/2/chapters"
                    }
                },
                "mangaCharacters": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/2/relationships/manga-characters",
                        "related": "https://kitsu.io/api/edge/manga/2/manga-characters"
                    }
                },
                "mangaStaff": {
                    "links": {
                        "self": "https://kitsu.io/api/edge/manga/2/relationships/manga-staff",
                        "related": "https://kitsu.io/api/edge/manga/2/manga-staff"
                    }
                }
            }
        },
      ...
}
```

## 3. GET /manga/:id

Description : get manga by id from kitsu 3rd api

_Response (200 - OK )_

```json
{
	"id": "14916",
	"type": "manga",
	"links": {
		"self": "https://kitsu.io/api/edge/manga/14916"
	},
	"attributes": {
		"createdAt": "2013-12-18T13:59:39.232Z",
		"updatedAt": "2022-03-24T00:00:11.364Z",
		"slug": "shingeki-no-kyojin",
		"synopsis": "A century ago, the grotesque giants known as Titans appeared and consumed all but a few thousand humans. The survivors took refuge behind giant walls. Today, the threat of the Titans is a distant memory, and a boy named Eren yearns to explore the world beyond Wall Maria. But what began as a childish dream will become an all-too-real nightmare when the Titans return and humanity is once again on the brink of extinction … Attack on Titan is the award-winning and New York Times-bestselling series that is the manga hit of the decade! Spawning the monster hit anime TV series of the same name, Attack on Titan has become a pop culture sensation. \n\n(Source: Kodansha Comics)\n\nVolume 3 contains the special story \"Rivai Heishichou\" (リヴァイ兵士長, Captain Levi).\nVolume 5 contains the side story \"Ilse no Techou\" (イルゼの手帳, Ilse's Notebook).",
		"description": "A century ago, the grotesque giants known as Titans appeared and consumed all but a few thousand humans. The survivors took refuge behind giant walls. Today, the threat of the Titans is a distant memory, and a boy named Eren yearns to explore the world beyond Wall Maria. But what began as a childish dream will become an all-too-real nightmare when the Titans return and humanity is once again on the brink of extinction … Attack on Titan is the award-winning and New York Times-bestselling series that is the manga hit of the decade! Spawning the monster hit anime TV series of the same name, Attack on Titan has become a pop culture sensation. \n\n(Source: Kodansha Comics)\n\nVolume 3 contains the special story \"Rivai Heishichou\" (リヴァイ兵士長, Captain Levi).\nVolume 5 contains the side story \"Ilse no Techou\" (イルゼの手帳, Ilse's Notebook).",
		"coverImageTopOffset": 112,
		"titles": {
			"ar": "العملاق المهاجم",
			"en": "Attack on Titan",
			"cs_cz": "Útok Titánů",
			"en_jp": "Shingeki no Kyojin",
			"es_es": "Ataque a los Titanes",
			"fa_ir": "حمله به تایتان",
			"fi_fi": "Titaanien sota",
			"fr_fr": "L'Attaque des Titans",
			"hr_hr": "Napad Titana",
			"it_it": "L'attacco dei Giganti",
			"ja_jp": "進撃の巨人",
			"ko_kr": "진격의 거인",
			"pt_br": "Ataque dos Titãs",
			"ru_ru": "Атака на титанов",
			"th_th": "ผ่าพิภพไททัน",
			"tr_tr": "Titana Saldırı",
			"vi_vn": "Đại Chiến Titan",
			"zh_cn": "进击的巨人"
		},
		"canonicalTitle": "Attack on Titan",
		"abbreviatedTitles": [
			"L'attaque sur les titans",
			"Атака титанов",
			"ھێرش بۆ سەر زەبەلاحەكان",
			"進擊的巨人",
			"SNK",
			"AOT",
			"Ilse no Techou",
			"Rivai Heishichou"
		],
		"averageRating": "84.54",
		"ratingFrequencies": {
			"2": "4137",
			"3": "68",
			"4": "183",
			"5": "57",
			"6": "230",
			"7": "46",
			"8": "2941",
			"9": "58",
			"10": "509",
			"11": "114",
			"12": "876",
			"13": "178",
			"14": "8832",
			"15": "356",
			"16": "3195",
			"17": "665",
			"18": "4106",
			"19": "712",
			"20": "42380"
		},
		"userCount": 74162,
		"favoritesCount": 1635,
		"startDate": "2009-09-09",
		"endDate": "2021-04-09",
		"nextRelease": null,
		"popularityRank": 5,
		"ratingRank": 8,
		"ageRating": "R",
		"ageRatingGuide": "Horror",
		"subtype": "manga",
		"status": "finished",
		"tba": null,
		"posterImage": {
			"tiny": "https://media.kitsu.io/manga/poster_images/14916/tiny.jpg",
			"large": "https://media.kitsu.io/manga/poster_images/14916/large.jpg",
			"small": "https://media.kitsu.io/manga/poster_images/14916/small.jpg",
			"medium": "https://media.kitsu.io/manga/poster_images/14916/medium.jpg",
			"original": "https://media.kitsu.io/manga/poster_images/14916/original.jpg",
			"meta": {
				"dimensions": {
					"tiny": {
						"width": null,
						"height": null
					},
					"large": {
						"width": null,
						"height": null
					},
					"small": {
						"width": null,
						"height": null
					},
					"medium": {
						"width": null,
						"height": null
					}
				}
			}
		},
		"coverImage": {
			"tiny": "https://media.kitsu.io/manga/cover_images/14916/tiny.jpg",
			"large": "https://media.kitsu.io/manga/cover_images/14916/large.jpg",
			"small": "https://media.kitsu.io/manga/cover_images/14916/small.jpg",
			"original": "https://media.kitsu.io/manga/cover_images/14916/original.png",
			"meta": {
				"dimensions": {
					"tiny": {
						"width": 840,
						"height": 200
					},
					"large": {
						"width": 3360,
						"height": 800
					},
					"small": {
						"width": 1680,
						"height": 400
					}
				}
			}
		},
		"chapterCount": 141,
		"volumeCount": 34,
		"serialization": "Bessatsu Shounen Magazine",
		"mangaType": "manga"
	},
	"relationships": {
		"genres": {
			"links": {
				"self": "https://kitsu.io/api/edge/manga/14916/relationships/genres",
				"related": "https://kitsu.io/api/edge/manga/14916/genres"
			}
		},
		"categories": {
			"links": {
				"self": "https://kitsu.io/api/edge/manga/14916/relationships/categories",
				"related": "https://kitsu.io/api/edge/manga/14916/categories"
			}
		},
		"castings": {
			"links": {
				"self": "https://kitsu.io/api/edge/manga/14916/relationships/castings",
				"related": "https://kitsu.io/api/edge/manga/14916/castings"
			}
		},
		"installments": {
			"links": {
				"self": "https://kitsu.io/api/edge/manga/14916/relationships/installments",
				"related": "https://kitsu.io/api/edge/manga/14916/installments"
			}
		},
		"mappings": {
			"links": {
				"self": "https://kitsu.io/api/edge/manga/14916/relationships/mappings",
				"related": "https://kitsu.io/api/edge/manga/14916/mappings"
			}
		},
		"reviews": {
			"links": {
				"self": "https://kitsu.io/api/edge/manga/14916/relationships/reviews",
				"related": "https://kitsu.io/api/edge/manga/14916/reviews"
			}
		},
		"mediaRelationships": {
			"links": {
				"self": "https://kitsu.io/api/edge/manga/14916/relationships/media-relationships",
				"related": "https://kitsu.io/api/edge/manga/14916/media-relationships"
			}
		},
		"characters": {
			"links": {
				"self": "https://kitsu.io/api/edge/manga/14916/relationships/characters",
				"related": "https://kitsu.io/api/edge/manga/14916/characters"
			}
		},
		"staff": {
			"links": {
				"self": "https://kitsu.io/api/edge/manga/14916/relationships/staff",
				"related": "https://kitsu.io/api/edge/manga/14916/staff"
			}
		},
		"productions": {
			"links": {
				"self": "https://kitsu.io/api/edge/manga/14916/relationships/productions",
				"related": "https://kitsu.io/api/edge/manga/14916/productions"
			}
		},
		"quotes": {
			"links": {
				"self": "https://kitsu.io/api/edge/manga/14916/relationships/quotes",
				"related": "https://kitsu.io/api/edge/manga/14916/quotes"
			}
		},
		"chapters": {
			"links": {
				"self": "https://kitsu.io/api/edge/manga/14916/relationships/chapters",
				"related": "https://kitsu.io/api/edge/manga/14916/chapters"
			}
		},
		"mangaCharacters": {
			"links": {
				"self": "https://kitsu.io/api/edge/manga/14916/relationships/manga-characters",
				"related": "https://kitsu.io/api/edge/manga/14916/manga-characters"
			}
		},
		"mangaStaff": {
			"links": {
				"self": "https://kitsu.io/api/edge/manga/14916/relationships/manga-staff",
				"related": "https://kitsu.io/api/edge/manga/14916/manga-staff"
			}
		}
	}
}
```

_Response (404 - Not Found)_

```json
{
	"errors": [
		{
			"title": "Record not found",
			"detail": "The record identified by 0 could not be found.",
			"code": "404",
			"status": "404"
		}
	]
}
```

## 4. GET /authenticate

Description : firebase authentication

_Response (200 - OK)_

## GLOBAL ERROR

_Response (401 - Unauthorized)_

```json
{
	"message": "Unauthorized"
}
```

_Response (500 - Internal server error)_

```json
{
	"message": "Internal Server Error"
}
```
