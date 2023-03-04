import React from "react";
import range from "lodash/range";
import "./Carusel.scss";
import ItemsCarousel from "react-items-carousel";
import SliderIconNext from "../../images/slider-icon_next.svg";
import SliderIconPrev from "../../images/slider-icon_prev.svg";

const noOfItems = 12; // array products
const noOfCards = 3;
// const autoPlayDelay = 4000;
const chevronWidth = 80;
//Fake data
const fakeProducts = [
    {
        "id": 19,
        "attributes": {
            "price": 0.8,
            "title": "raw broccoli (kg)",
            "desc": "raw broccoli desc",
            "createdAt": "2023-02-12T15:35:46.333Z",
            "updatedAt": "2023-02-23T16:32:05.449Z",
            "publishedAt": "2023-02-12T15:35:48.491Z",
            "type": "featured",
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 7,
                    "attributes": {
                        "name": "raw-broccoli.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 722,
                        "height": 616,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_raw-broccoli.png",
                                "hash": "thumbnail_raw_broccoli_005aac881b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 183,
                                "height": 156,
                                "size": 63.47,
                                "url": "/uploads/thumbnail_raw_broccoli_005aac881b.png"
                            },
                            "small": {
                                "name": "small_raw-broccoli.png",
                                "hash": "small_raw_broccoli_005aac881b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 427,
                                "size": 412.89,
                                "url": "/uploads/small_raw_broccoli_005aac881b.png"
                            }
                        },
                        "hash": "raw_broccoli_005aac881b",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 193.2,
                        "url": "/uploads/raw_broccoli_005aac881b.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-12T14:52:32.360Z",
                        "updatedAt": "2023-02-23T16:24:57.960Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 3,
                        "attributes": {
                            "title": "Vegetables",
                            "desc": "Vegetables cat desc",
                            "createdAt": "2023-02-12T15:08:24.054Z",
                            "updatedAt": "2023-02-23T16:10:26.090Z",
                            "publishedAt": "2023-02-12T15:08:24.719Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 2,
        "attributes": {
            "price": 1.2,
            "title": "cauliflower (kg)",
            "desc": "cauliflower desc",
            "createdAt": "2023-02-12T15:21:52.870Z",
            "updatedAt": "2023-02-24T23:19:28.448Z",
            "publishedAt": "2023-02-12T15:21:54.278Z",
            "type": "latest",
            "onTop": true,
            "onSale": true,
            "img": {
                "data": {
                    "id": 25,
                    "attributes": {
                        "name": "cauliflower.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 1291,
                        "height": 1045,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_cauliflower.png",
                                "hash": "thumbnail_cauliflower_95c8375db2",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 193,
                                "height": 156,
                                "size": 68.88,
                                "url": "/uploads/thumbnail_cauliflower_95c8375db2.png"
                            },
                            "small": {
                                "name": "small_cauliflower.png",
                                "hash": "small_cauliflower_95c8375db2",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 405,
                                "size": 415.84,
                                "url": "/uploads/small_cauliflower_95c8375db2.png"
                            },
                            "medium": {
                                "name": "medium_cauliflower.png",
                                "hash": "medium_cauliflower_95c8375db2",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 607,
                                "size": 893.91,
                                "url": "/uploads/medium_cauliflower_95c8375db2.png"
                            },
                            "large": {
                                "name": "large_cauliflower.png",
                                "hash": "large_cauliflower_95c8375db2",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 809,
                                "size": 1519.82,
                                "url": "/uploads/large_cauliflower_95c8375db2.png"
                            }
                        },
                        "hash": "cauliflower_95c8375db2",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 602.58,
                        "url": "/uploads/cauliflower_95c8375db2.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-12T15:18:04.955Z",
                        "updatedAt": "2023-02-23T16:13:01.978Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 3,
                        "attributes": {
                            "title": "Vegetables",
                            "desc": "Vegetables cat desc",
                            "createdAt": "2023-02-12T15:08:24.054Z",
                            "updatedAt": "2023-02-23T16:10:26.090Z",
                            "publishedAt": "2023-02-12T15:08:24.719Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": [
                    {
                        "id": 1,
                        "attributes": {
                            "title": "Latest Product",
                            "createdAt": "2023-02-12T21:47:12.563Z",
                            "updatedAt": "2023-02-12T21:47:15.480Z",
                            "publishedAt": "2023-02-12T21:47:15.462Z"
                        }
                    }
                ]
            }
        }
    },
    {
        "id": 4,
        "attributes": {
            "price": 1.93,
            "title": "tomato hybrid (kg)",
            "desc": "tomato hybrid desc",
            "createdAt": "2023-02-12T15:23:54.269Z",
            "updatedAt": "2023-02-23T16:32:31.470Z",
            "publishedAt": "2023-02-12T15:23:55.269Z",
            "type": "latest",
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 33,
                    "attributes": {
                        "name": "tomato-hybrid.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 982,
                        "height": 678,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_tomato-hybrid.png",
                                "hash": "thumbnail_tomato_hybrid_4e77dbf9ff",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 226,
                                "height": 156,
                                "size": 77.81,
                                "url": "/uploads/thumbnail_tomato_hybrid_4e77dbf9ff.png"
                            },
                            "medium": {
                                "name": "medium_tomato-hybrid.png",
                                "hash": "medium_tomato_hybrid_4e77dbf9ff",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 518,
                                "size": 699.93,
                                "url": "/uploads/medium_tomato_hybrid_4e77dbf9ff.png"
                            },
                            "small": {
                                "name": "small_tomato-hybrid.png",
                                "hash": "small_tomato_hybrid_4e77dbf9ff",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 345,
                                "size": 330.26,
                                "url": "/uploads/small_tomato_hybrid_4e77dbf9ff.png"
                            }
                        },
                        "hash": "tomato_hybrid_4e77dbf9ff",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 241.23,
                        "url": "/uploads/tomato_hybrid_4e77dbf9ff.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-12T15:23:17.572Z",
                        "updatedAt": "2023-02-23T16:15:23.048Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 3,
                        "attributes": {
                            "title": "Vegetables",
                            "desc": "Vegetables cat desc",
                            "createdAt": "2023-02-12T15:08:24.054Z",
                            "updatedAt": "2023-02-23T16:10:26.090Z",
                            "publishedAt": "2023-02-12T15:08:24.719Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": [
                    {
                        "id": 1,
                        "attributes": {
                            "title": "Latest Product",
                            "createdAt": "2023-02-12T21:47:12.563Z",
                            "updatedAt": "2023-02-12T21:47:15.480Z",
                            "publishedAt": "2023-02-12T21:47:15.462Z"
                        }
                    }
                ]
            }
        }
    },
    {
        "id": 17,
        "attributes": {
            "price": 2.33,
            "title": "cucumber (kg)",
            "desc": "cucumber desc",
            "createdAt": "2023-02-12T15:34:51.234Z",
            "updatedAt": "2023-02-23T16:22:20.879Z",
            "publishedAt": "2023-02-12T15:34:52.088Z",
            "type": "featured",
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 5,
                    "attributes": {
                        "name": "cucumber.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 2607,
                        "height": 1737,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_cucumber.png",
                                "hash": "thumbnail_cucumber_1c92e37245",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 234,
                                "height": 156,
                                "size": 86.17,
                                "url": "/uploads/thumbnail_cucumber_1c92e37245.png"
                            },
                            "small": {
                                "name": "small_cucumber.png",
                                "hash": "small_cucumber_1c92e37245",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 333,
                                "size": 347.57,
                                "url": "/uploads/small_cucumber_1c92e37245.png"
                            },
                            "medium": {
                                "name": "medium_cucumber.png",
                                "hash": "medium_cucumber_1c92e37245",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 500,
                                "size": 743.18,
                                "url": "/uploads/medium_cucumber_1c92e37245.png"
                            },
                            "large": {
                                "name": "large_cucumber.png",
                                "hash": "large_cucumber_1c92e37245",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 666,
                                "size": 1275.36,
                                "url": "/uploads/large_cucumber_1c92e37245.png"
                            }
                        },
                        "hash": "cucumber_1c92e37245",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 1645.92,
                        "url": "/uploads/cucumber_1c92e37245.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-12T14:52:32.239Z",
                        "updatedAt": "2023-02-23T16:22:19.920Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 3,
                        "attributes": {
                            "title": "Vegetables",
                            "desc": "Vegetables cat desc",
                            "createdAt": "2023-02-12T15:08:24.054Z",
                            "updatedAt": "2023-02-23T16:10:26.090Z",
                            "publishedAt": "2023-02-12T15:08:24.719Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 27,
        "attributes": {
            "price": 3,
            "title": "orange juice (L)",
            "desc": "orange juice desc",
            "createdAt": "2023-02-20T22:11:11.149Z",
            "updatedAt": "2023-02-23T16:31:07.987Z",
            "publishedAt": "2023-02-20T22:11:12.328Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 52,
                    "attributes": {
                        "name": "Orange juice.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "width": 677,
                        "height": 797,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_Orange juice.jpg",
                                "hash": "thumbnail_Orange_juice_bea36f9ecf",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 133,
                                "height": 156,
                                "size": 39.96,
                                "url": "/uploads/thumbnail_Orange_juice_bea36f9ecf.jpg"
                            },
                            "small": {
                                "name": "small_Orange juice.jpg",
                                "hash": "small_Orange_juice_bea36f9ecf",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 425,
                                "height": 500,
                                "size": 303.44,
                                "url": "/uploads/small_Orange_juice_bea36f9ecf.jpg"
                            },
                            "medium": {
                                "name": "medium_Orange juice.jpg",
                                "hash": "medium_Orange_juice_bea36f9ecf",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 637,
                                "height": 750,
                                "size": 619.8,
                                "url": "/uploads/medium_Orange_juice_bea36f9ecf.jpg"
                            }
                        },
                        "hash": "Orange_juice_bea36f9ecf",
                        "ext": ".jpg",
                        "mime": "image/png",
                        "size": 128.49,
                        "url": "/uploads/Orange_juice_bea36f9ecf.jpg",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T22:10:58.632Z",
                        "updatedAt": "2023-02-23T12:55:30.730Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 4,
                        "attributes": {
                            "title": "Drink fruits",
                            "desc": "Drink fruits  cat desc",
                            "createdAt": "2023-02-12T15:08:50.812Z",
                            "updatedAt": "2023-02-23T12:46:07.184Z",
                            "publishedAt": "2023-02-12T15:08:51.558Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 28,
        "attributes": {
            "price": 3,
            "title": "carrot juice (L)",
            "desc": "carrot juice desc",
            "createdAt": "2023-02-20T22:12:43.193Z",
            "updatedAt": "2023-02-23T16:28:50.455Z",
            "publishedAt": "2023-02-20T22:12:44.722Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 53,
                    "attributes": {
                        "name": "carrot juice.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "width": 1602,
                        "height": 1599,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_carrot juice.jpg",
                                "hash": "thumbnail_carrot_juice_371e784b82",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 156,
                                "height": 156,
                                "size": 33.6,
                                "url": "/uploads/thumbnail_carrot_juice_371e784b82.jpg"
                            },
                            "small": {
                                "name": "small_carrot juice.jpg",
                                "hash": "small_carrot_juice_371e784b82",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 499,
                                "size": 236.87,
                                "url": "/uploads/small_carrot_juice_371e784b82.jpg"
                            },
                            "medium": {
                                "name": "medium_carrot juice.jpg",
                                "hash": "medium_carrot_juice_371e784b82",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 749,
                                "size": 487.48,
                                "url": "/uploads/medium_carrot_juice_371e784b82.jpg"
                            },
                            "large": {
                                "name": "large_carrot juice.jpg",
                                "hash": "large_carrot_juice_371e784b82",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 998,
                                "size": 815.12,
                                "url": "/uploads/large_carrot_juice_371e784b82.jpg"
                            }
                        },
                        "hash": "carrot_juice_371e784b82",
                        "ext": ".jpg",
                        "mime": "image/png",
                        "size": 349.55,
                        "url": "/uploads/carrot_juice_371e784b82.jpg",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T22:12:37.955Z",
                        "updatedAt": "2023-02-23T13:02:09.089Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 4,
                        "attributes": {
                            "title": "Drink fruits",
                            "desc": "Drink fruits  cat desc",
                            "createdAt": "2023-02-12T15:08:50.812Z",
                            "updatedAt": "2023-02-23T12:46:07.184Z",
                            "publishedAt": "2023-02-12T15:08:51.558Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 29,
        "attributes": {
            "price": 3,
            "title": "peach juice (L)",
            "desc": "peach juice desc",
            "createdAt": "2023-02-20T22:14:08.905Z",
            "updatedAt": "2023-02-23T16:31:21.437Z",
            "publishedAt": "2023-02-20T22:14:09.939Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 54,
                    "attributes": {
                        "name": "Peach juice.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "width": 388,
                        "height": 454,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_Peach juice.jpg",
                                "hash": "thumbnail_Peach_juice_89b7a3eee5",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 133,
                                "height": 156,
                                "size": 36.08,
                                "url": "/uploads/thumbnail_Peach_juice_89b7a3eee5.jpg"
                            }
                        },
                        "hash": "Peach_juice_89b7a3eee5",
                        "ext": ".jpg",
                        "mime": "image/png",
                        "size": 46.05,
                        "url": "/uploads/Peach_juice_89b7a3eee5.jpg",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T22:14:05.316Z",
                        "updatedAt": "2023-02-23T13:04:33.321Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 4,
                        "attributes": {
                            "title": "Drink fruits",
                            "desc": "Drink fruits  cat desc",
                            "createdAt": "2023-02-12T15:08:50.812Z",
                            "updatedAt": "2023-02-23T12:46:07.184Z",
                            "publishedAt": "2023-02-12T15:08:51.558Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 30,
        "attributes": {
            "price": 3,
            "title": "apple juice (L)",
            "desc": "apple juice desc",
            "createdAt": "2023-02-20T22:15:00.355Z",
            "updatedAt": "2023-02-23T16:28:11.912Z",
            "publishedAt": "2023-02-20T22:15:01.283Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 55,
                    "attributes": {
                        "name": "Apple juice.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "width": 569,
                        "height": 607,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_Apple juice.jpg",
                                "hash": "thumbnail_Apple_juice_e726d606c3",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 146,
                                "height": 156,
                                "size": 48.05,
                                "url": "/uploads/thumbnail_Apple_juice_e726d606c3.jpg"
                            },
                            "small": {
                                "name": "small_Apple juice.jpg",
                                "hash": "small_Apple_juice_e726d606c3",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 469,
                                "height": 500,
                                "size": 367.07,
                                "url": "/uploads/small_Apple_juice_e726d606c3.jpg"
                            }
                        },
                        "hash": "Apple_juice_e726d606c3",
                        "ext": ".jpg",
                        "mime": "image/png",
                        "size": 100.14,
                        "url": "/uploads/Apple_juice_e726d606c3.jpg",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T22:14:55.450Z",
                        "updatedAt": "2023-02-23T13:09:31.966Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 4,
                        "attributes": {
                            "title": "Drink fruits",
                            "desc": "Drink fruits  cat desc",
                            "createdAt": "2023-02-12T15:08:50.812Z",
                            "updatedAt": "2023-02-23T12:46:07.184Z",
                            "publishedAt": "2023-02-12T15:08:51.558Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 31,
        "attributes": {
            "price": 3,
            "title": "tomato juice (L)",
            "desc": "tomato juice desc",
            "createdAt": "2023-02-20T22:22:41.595Z",
            "updatedAt": "2023-02-23T16:32:36.460Z",
            "publishedAt": "2023-02-20T22:22:43.732Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 56,
                    "attributes": {
                        "name": "Tomato juice.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 892,
                        "height": 679,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_Tomato juice.png",
                                "hash": "thumbnail_Tomato_juice_8570301db2",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 205,
                                "height": 156,
                                "size": 59.81,
                                "url": "/uploads/thumbnail_Tomato_juice_8570301db2.png"
                            },
                            "small": {
                                "name": "small_Tomato juice.png",
                                "hash": "small_Tomato_juice_8570301db2",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 381,
                                "size": 288.12,
                                "url": "/uploads/small_Tomato_juice_8570301db2.png"
                            },
                            "medium": {
                                "name": "medium_Tomato juice.png",
                                "hash": "medium_Tomato_juice_8570301db2",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 571,
                                "size": 600.62,
                                "url": "/uploads/medium_Tomato_juice_8570301db2.png"
                            }
                        },
                        "hash": "Tomato_juice_8570301db2",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 152.58,
                        "url": "/uploads/Tomato_juice_8570301db2.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T22:22:36.627Z",
                        "updatedAt": "2023-02-23T13:13:08.583Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 4,
                        "attributes": {
                            "title": "Drink fruits",
                            "desc": "Drink fruits  cat desc",
                            "createdAt": "2023-02-12T15:08:50.812Z",
                            "updatedAt": "2023-02-23T12:46:07.184Z",
                            "publishedAt": "2023-02-12T15:08:51.558Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 7,
        "attributes": {
            "price": 3.5,
            "title": "capsicium-Green (kg)",
            "desc": "capsicium-Green desc",
            "createdAt": "2023-02-12T15:26:07.867Z",
            "updatedAt": "2023-02-24T23:21:00.572Z",
            "publishedAt": "2023-02-12T15:26:08.751Z",
            "type": "top-rated",
            "onTop": null,
            "onSale": true,
            "img": {
                "data": {
                    "id": 26,
                    "attributes": {
                        "name": "capsicum.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 874,
                        "height": 482,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_capsicum.png",
                                "hash": "thumbnail_capsicum_8f69b23b16",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 245,
                                "height": 135,
                                "size": 51.06,
                                "url": "/uploads/thumbnail_capsicum_8f69b23b16.png"
                            },
                            "small": {
                                "name": "small_capsicum.png",
                                "hash": "small_capsicum_8f69b23b16",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 276,
                                "size": 176.16,
                                "url": "/uploads/small_capsicum_8f69b23b16.png"
                            },
                            "medium": {
                                "name": "medium_capsicum.png",
                                "hash": "medium_capsicum_8f69b23b16",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 414,
                                "size": 378.15,
                                "url": "/uploads/medium_capsicum_8f69b23b16.png"
                            }
                        },
                        "hash": "capsicum_8f69b23b16",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 45.07,
                        "url": "/uploads/capsicum_8f69b23b16.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-12T15:18:05.004Z",
                        "updatedAt": "2023-02-23T16:18:41.001Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 3,
                        "attributes": {
                            "title": "Vegetables",
                            "desc": "Vegetables cat desc",
                            "createdAt": "2023-02-12T15:08:24.054Z",
                            "updatedAt": "2023-02-23T16:10:26.090Z",
                            "publishedAt": "2023-02-12T15:08:24.719Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": [
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Top Rated Products",
                            "createdAt": "2023-02-12T21:47:42.196Z",
                            "updatedAt": "2023-02-21T00:04:19.343Z",
                            "publishedAt": "2023-02-12T21:47:43.080Z"
                        }
                    }
                ]
            }
        }
    },
    {
        "id": 10,
        "attributes": {
            "price": 3.8,
            "title": "green Apple (kg)",
            "desc": "green Apple desc",
            "createdAt": "2023-02-12T15:28:26.218Z",
            "updatedAt": "2023-02-23T16:30:16.744Z",
            "publishedAt": "2023-02-12T15:28:27.024Z",
            "type": "review",
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 13,
                    "attributes": {
                        "name": "green-apple.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 901,
                        "height": 611,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_green-apple.png",
                                "hash": "thumbnail_green_apple_860ad976fa",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 230,
                                "height": 156,
                                "size": 76.55,
                                "url": "/uploads/thumbnail_green_apple_860ad976fa.png"
                            },
                            "small": {
                                "name": "small_green-apple.png",
                                "hash": "small_green_apple_860ad976fa",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 339,
                                "size": 318.17,
                                "url": "/uploads/small_green_apple_860ad976fa.png"
                            },
                            "medium": {
                                "name": "medium_green-apple.png",
                                "hash": "medium_green_apple_860ad976fa",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 509,
                                "size": 680.61,
                                "url": "/uploads/medium_green_apple_860ad976fa.png"
                            }
                        },
                        "hash": "green_apple_860ad976fa",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 160.44,
                        "url": "/uploads/green_apple_860ad976fa.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-12T14:53:15.468Z",
                        "updatedAt": "2023-02-23T14:41:50.004Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 15,
                        "attributes": {
                            "title": "Fresh Fruits",
                            "desc": "Fresh Fruits desc",
                            "createdAt": "2023-02-20T18:42:17.412Z",
                            "updatedAt": "2023-02-23T15:22:50.972Z",
                            "publishedAt": "2023-02-20T18:53:22.587Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": [
                    {
                        "id": 3,
                        "attributes": {
                            "title": "Discounted Products",
                            "createdAt": "2023-02-12T21:48:11.228Z",
                            "updatedAt": "2023-02-21T00:04:30.127Z",
                            "publishedAt": "2023-02-12T21:48:12.311Z"
                        }
                    }
                ]
            }
        }
    },
    {
        "id": 34,
        "attributes": {
            "price": 4,
            "title": "raisin (kg)",
            "desc": "raisin desc",
            "createdAt": "2023-02-20T22:42:41.665Z",
            "updatedAt": "2023-02-23T16:31:38.246Z",
            "publishedAt": "2023-02-20T22:42:42.685Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 59,
                    "attributes": {
                        "name": "raisin.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 207,
                        "height": 166,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_raisin.png",
                                "hash": "thumbnail_raisin_634970fc83",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 195,
                                "height": 156,
                                "size": 83.37,
                                "url": "/uploads/thumbnail_raisin_634970fc83.png"
                            }
                        },
                        "hash": "raisin_634970fc83",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 23.23,
                        "url": "/uploads/raisin_634970fc83.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T22:42:37.547Z",
                        "updatedAt": "2023-02-23T12:11:12.844Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Dried fruit",
                            "desc": "Dried fruit",
                            "createdAt": "2023-02-12T15:07:52.593Z",
                            "updatedAt": "2023-02-15T03:03:16.763Z",
                            "publishedAt": "2023-02-12T15:07:53.333Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 12,
        "attributes": {
            "price": 4.2,
            "title": "bananas (kg)",
            "desc": "bananas (kg)",
            "createdAt": "2023-02-12T15:31:17.962Z",
            "updatedAt": "2023-02-23T14:45:32.371Z",
            "publishedAt": "2023-02-12T15:32:13.182Z",
            "type": "featured",
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 43,
                    "attributes": {
                        "name": "bananas.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 692,
                        "height": 490,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_bananas.png",
                                "hash": "thumbnail_bananas_2822dd9434",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 220,
                                "height": 156,
                                "size": 65.94,
                                "url": "/uploads/thumbnail_bananas_2822dd9434.png"
                            },
                            "small": {
                                "name": "small_bananas.png",
                                "hash": "small_bananas_2822dd9434",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 354,
                                "size": 268.92,
                                "url": "/uploads/small_bananas_2822dd9434.png"
                            }
                        },
                        "hash": "bananas_2822dd9434",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 92.03,
                        "url": "/uploads/bananas_2822dd9434.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T19:04:43.986Z",
                        "updatedAt": "2023-02-23T14:45:02.018Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 15,
                        "attributes": {
                            "title": "Fresh Fruits",
                            "desc": "Fresh Fruits desc",
                            "createdAt": "2023-02-20T18:42:17.412Z",
                            "updatedAt": "2023-02-23T15:22:50.972Z",
                            "publishedAt": "2023-02-20T18:53:22.587Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 15,
        "attributes": {
            "price": 4.29,
            "title": "red apple (kg)",
            "desc": "red apple desc",
            "createdAt": "2023-02-12T15:33:56.554Z",
            "updatedAt": "2023-02-23T14:56:48.567Z",
            "publishedAt": "2023-02-12T15:33:57.474Z",
            "type": "featured",
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 8,
                    "attributes": {
                        "name": "red-apple.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 214,
                        "height": 159,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_red-apple.png",
                                "hash": "thumbnail_red_apple_04a3a1de8b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 210,
                                "height": 156,
                                "size": 73.57,
                                "url": "/uploads/thumbnail_red_apple_04a3a1de8b.png"
                            }
                        },
                        "hash": "red_apple_04a3a1de8b",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 20.19,
                        "url": "/uploads/red_apple_04a3a1de8b.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-12T14:52:32.415Z",
                        "updatedAt": "2023-02-23T14:53:27.861Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 15,
                        "attributes": {
                            "title": "Fresh Fruits",
                            "desc": "Fresh Fruits desc",
                            "createdAt": "2023-02-20T18:42:17.412Z",
                            "updatedAt": "2023-02-23T15:22:50.972Z",
                            "publishedAt": "2023-02-20T18:53:22.587Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 13,
        "attributes": {
            "price": 5.2,
            "title": "apricot (kg)",
            "desc": "apricot desc",
            "createdAt": "2023-02-12T15:32:53.656Z",
            "updatedAt": "2023-02-23T14:58:25.661Z",
            "publishedAt": "2023-02-12T15:32:55.042Z",
            "type": "featured",
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 4,
                    "attributes": {
                        "name": "fresh-organic-apricot.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 176,
                        "height": 133,
                        "formats": {},
                        "hash": "fresh_organic_apricot_6768d5fb9f",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 13.38,
                        "url": "/uploads/fresh_organic_apricot_6768d5fb9f.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-12T14:52:32.158Z",
                        "updatedAt": "2023-02-23T14:58:22.515Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 15,
                        "attributes": {
                            "title": "Fresh Fruits",
                            "desc": "Fresh Fruits desc",
                            "createdAt": "2023-02-20T18:42:17.412Z",
                            "updatedAt": "2023-02-23T15:22:50.972Z",
                            "publishedAt": "2023-02-20T18:53:22.587Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 3,
        "attributes": {
            "price": 5.71,
            "title": "quince (kg)",
            "desc": "quince desc",
            "createdAt": "2023-02-12T15:22:41.399Z",
            "updatedAt": "2023-02-23T16:31:32.761Z",
            "publishedAt": "2023-02-12T15:22:42.359Z",
            "type": "latest",
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 17,
                    "attributes": {
                        "name": "organic-quince.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 229,
                        "height": 153,
                        "formats": {},
                        "hash": "organic_quince_d61b5f911b",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 16.21,
                        "url": "/uploads/organic_quince_d61b5f911b.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-12T14:53:15.736Z",
                        "updatedAt": "2023-02-23T15:01:04.610Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 15,
                        "attributes": {
                            "title": "Fresh Fruits",
                            "desc": "Fresh Fruits desc",
                            "createdAt": "2023-02-20T18:42:17.412Z",
                            "updatedAt": "2023-02-23T15:22:50.972Z",
                            "publishedAt": "2023-02-20T18:53:22.587Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": [
                    {
                        "id": 1,
                        "attributes": {
                            "title": "Latest Product",
                            "createdAt": "2023-02-12T21:47:12.563Z",
                            "updatedAt": "2023-02-12T21:47:15.480Z",
                            "publishedAt": "2023-02-12T21:47:15.462Z"
                        }
                    }
                ]
            }
        }
    },
    {
        "id": 20,
        "attributes": {
            "price": 6.71,
            "title": "lemon (kg)",
            "desc": "lemon desc",
            "createdAt": "2023-02-20T19:14:56.877Z",
            "updatedAt": "2023-02-23T16:30:27.270Z",
            "publishedAt": "2023-02-20T19:19:06.194Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 44,
                    "attributes": {
                        "name": "lemon.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 3454,
                        "height": 3009,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_lemon.png",
                                "hash": "thumbnail_lemon_848b9a750b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 179,
                                "height": 156,
                                "size": 57.08,
                                "url": "/uploads/thumbnail_lemon_848b9a750b.png"
                            },
                            "small": {
                                "name": "small_lemon.png",
                                "hash": "small_lemon_848b9a750b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 436,
                                "size": 358.41,
                                "url": "/uploads/small_lemon_848b9a750b.png"
                            },
                            "medium": {
                                "name": "medium_lemon.png",
                                "hash": "medium_lemon_848b9a750b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 653,
                                "size": 753.21,
                                "url": "/uploads/medium_lemon_848b9a750b.png"
                            },
                            "large": {
                                "name": "large_lemon.png",
                                "hash": "large_lemon_848b9a750b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 871,
                                "size": 1270.32,
                                "url": "/uploads/large_lemon_848b9a750b.png"
                            }
                        },
                        "hash": "lemon_848b9a750b",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 2576.16,
                        "url": "/uploads/lemon_848b9a750b.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T19:14:52.012Z",
                        "updatedAt": "2023-02-23T15:06:18.268Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 15,
                        "attributes": {
                            "title": "Fresh Fruits",
                            "desc": "Fresh Fruits desc",
                            "createdAt": "2023-02-20T18:42:17.412Z",
                            "updatedAt": "2023-02-23T15:22:50.972Z",
                            "publishedAt": "2023-02-20T18:53:22.587Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": [
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Top Rated Products",
                            "createdAt": "2023-02-12T21:47:42.196Z",
                            "updatedAt": "2023-02-21T00:04:19.343Z",
                            "publishedAt": "2023-02-12T21:47:43.080Z"
                        }
                    }
                ]
            }
        }
    },
    {
        "id": 16,
        "attributes": {
            "price": 7.2,
            "title": "figs (kg)",
            "desc": "figs desc",
            "createdAt": "2023-02-12T15:34:25.361Z",
            "updatedAt": "2023-02-23T15:11:43.179Z",
            "publishedAt": "2023-02-12T15:34:26.225Z",
            "type": "featured",
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 6,
                    "attributes": {
                        "name": "figs.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 232,
                        "height": 143,
                        "formats": {},
                        "hash": "fresh_figs_c2624b1bf1",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 20.25,
                        "url": "/uploads/fresh_figs_c2624b1bf1.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-12T14:52:32.304Z",
                        "updatedAt": "2023-02-23T15:11:40.529Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 15,
                        "attributes": {
                            "title": "Fresh Fruits",
                            "desc": "Fresh Fruits desc",
                            "createdAt": "2023-02-20T18:42:17.412Z",
                            "updatedAt": "2023-02-23T15:22:50.972Z",
                            "publishedAt": "2023-02-20T18:53:22.587Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 23,
        "attributes": {
            "price": 7.29,
            "title": "mussels (kg)",
            "desc": "mussels desc",
            "createdAt": "2023-02-20T21:27:30.638Z",
            "updatedAt": "2023-02-23T16:30:53.829Z",
            "publishedAt": "2023-02-20T21:27:57.247Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 48,
                    "attributes": {
                        "name": "mussels.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 729,
                        "height": 431,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_mussels.png",
                                "hash": "thumbnail_mussels_81c536ee88",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 245,
                                "height": 145,
                                "size": 81.71,
                                "url": "/uploads/thumbnail_mussels_81c536ee88.png"
                            },
                            "small": {
                                "name": "small_mussels.png",
                                "hash": "small_mussels_81c536ee88",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 296,
                                "size": 298.56,
                                "url": "/uploads/small_mussels_81c536ee88.png"
                            }
                        },
                        "hash": "mussels_81c536ee88",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 126.26,
                        "url": "/uploads/mussels_81c536ee88.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T21:27:20.995Z",
                        "updatedAt": "2023-02-23T15:56:33.620Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 9,
                        "attributes": {
                            "title": "Ocean Foods",
                            "desc": "Ocean Foods desc",
                            "createdAt": "2023-02-17T16:32:25.792Z",
                            "updatedAt": "2023-02-23T15:59:03.839Z",
                            "publishedAt": "2023-02-17T16:32:26.527Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 8,
        "attributes": {
            "price": 7.8,
            "title": "granat (kg)",
            "desc": "Granat desc",
            "createdAt": "2023-02-12T15:26:57.532Z",
            "updatedAt": "2023-02-24T23:19:44.407Z",
            "publishedAt": "2023-02-12T15:26:58.722Z",
            "type": "top-rated",
            "onTop": true,
            "onSale": null,
            "img": {
                "data": {
                    "id": 31,
                    "attributes": {
                        "name": "granat.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 1914,
                        "height": 1250,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_granat.png",
                                "hash": "thumbnail_granat_379a73eefb",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 239,
                                "height": 156,
                                "size": 89.52,
                                "url": "/uploads/thumbnail_granat_379a73eefb.png"
                            },
                            "small": {
                                "name": "small_granat.png",
                                "hash": "small_granat_379a73eefb",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 327,
                                "size": 346.48,
                                "url": "/uploads/small_granat_379a73eefb.png"
                            },
                            "medium": {
                                "name": "medium_granat.png",
                                "hash": "medium_granat_379a73eefb",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 490,
                                "size": 734.44,
                                "url": "/uploads/medium_granat_379a73eefb.png"
                            },
                            "large": {
                                "name": "large_granat.png",
                                "hash": "large_granat_379a73eefb",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 653,
                                "size": 1251.14,
                                "url": "/uploads/large_granat_379a73eefb.png"
                            }
                        },
                        "hash": "granat_379a73eefb",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 752.08,
                        "url": "/uploads/granat_379a73eefb.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-12T15:20:12.034Z",
                        "updatedAt": "2023-02-23T15:17:12.412Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 15,
                        "attributes": {
                            "title": "Fresh Fruits",
                            "desc": "Fresh Fruits desc",
                            "createdAt": "2023-02-20T18:42:17.412Z",
                            "updatedAt": "2023-02-23T15:22:50.972Z",
                            "publishedAt": "2023-02-20T18:53:22.587Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": [
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Top Rated Products",
                            "createdAt": "2023-02-12T21:47:42.196Z",
                            "updatedAt": "2023-02-21T00:04:19.343Z",
                            "publishedAt": "2023-02-12T21:47:43.080Z"
                        }
                    }
                ]
            }
        }
    },
    {
        "id": 14,
        "attributes": {
            "price": 9.45,
            "title": "avocado (1kg)",
            "desc": "avocado desc",
            "createdAt": "2023-02-12T15:33:24.868Z",
            "updatedAt": "2023-02-23T16:25:35.836Z",
            "publishedAt": "2023-02-12T15:33:25.850Z",
            "type": "featured",
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 2,
                    "attributes": {
                        "name": "avokado-fruit.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 176,
                        "height": 158,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_avokado-fruit.png",
                                "hash": "thumbnail_avokado_fruit_7e380080f2",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 174,
                                "height": 156,
                                "size": 66.61,
                                "url": "/uploads/thumbnail_avokado_fruit_7e380080f2.png"
                            }
                        },
                        "hash": "avokado_fruit_7e380080f2",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 17.42,
                        "url": "/uploads/avokado_fruit_7e380080f2.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-12T14:52:32.004Z",
                        "updatedAt": "2023-02-23T15:24:50.877Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 15,
                        "attributes": {
                            "title": "Fresh Fruits",
                            "desc": "Fresh Fruits desc",
                            "createdAt": "2023-02-20T18:42:17.412Z",
                            "updatedAt": "2023-02-23T15:22:50.972Z",
                            "publishedAt": "2023-02-20T18:53:22.587Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 26,
        "attributes": {
            "price": 10,
            "title": "squid (kg)",
            "desc": "squid desc",
            "createdAt": "2023-02-20T22:01:19.435Z",
            "updatedAt": "2023-02-23T16:32:15.765Z",
            "publishedAt": "2023-02-20T22:01:21.475Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 51,
                    "attributes": {
                        "name": "squid.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "width": 1089,
                        "height": 490,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_squid.jpg",
                                "hash": "thumbnail_squid_e6f5b9c14d",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 245,
                                "height": 110,
                                "size": 41.14,
                                "url": "/uploads/thumbnail_squid_e6f5b9c14d.jpg"
                            },
                            "small": {
                                "name": "small_squid.jpg",
                                "hash": "small_squid_e6f5b9c14d",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 225,
                                "size": 145.43,
                                "url": "/uploads/small_squid_e6f5b9c14d.jpg"
                            },
                            "medium": {
                                "name": "medium_squid.jpg",
                                "hash": "medium_squid_e6f5b9c14d",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 337,
                                "size": 305.76,
                                "url": "/uploads/medium_squid_e6f5b9c14d.jpg"
                            },
                            "large": {
                                "name": "large_squid.jpg",
                                "hash": "large_squid_e6f5b9c14d",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 450,
                                "size": 515.87,
                                "url": "/uploads/large_squid_e6f5b9c14d.jpg"
                            }
                        },
                        "hash": "squid_e6f5b9c14d",
                        "ext": ".jpg",
                        "mime": "image/png",
                        "size": 152.88,
                        "url": "/uploads/squid_e6f5b9c14d.jpg",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T22:01:15.348Z",
                        "updatedAt": "2023-02-23T16:02:24.992Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 9,
                        "attributes": {
                            "title": "Ocean Foods",
                            "desc": "Ocean Foods desc",
                            "createdAt": "2023-02-17T16:32:25.792Z",
                            "updatedAt": "2023-02-23T15:59:03.839Z",
                            "publishedAt": "2023-02-17T16:32:26.527Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 32,
        "attributes": {
            "price": 10,
            "title": "dried apricots (kg)",
            "desc": "dried apricots desc",
            "createdAt": "2023-02-20T22:31:52.270Z",
            "updatedAt": "2023-02-23T16:29:42.965Z",
            "publishedAt": "2023-02-20T22:31:53.344Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 57,
                    "attributes": {
                        "name": "dried apricots.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 193,
                        "height": 90,
                        "formats": {},
                        "hash": "dried_apricots_6ef0543324",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 10.26,
                        "url": "/uploads/dried_apricots_6ef0543324.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T22:31:42.713Z",
                        "updatedAt": "2023-02-23T12:19:01.482Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Dried fruit",
                            "desc": "Dried fruit",
                            "createdAt": "2023-02-12T15:07:52.593Z",
                            "updatedAt": "2023-02-15T03:03:16.763Z",
                            "publishedAt": "2023-02-12T15:07:53.333Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 41,
        "attributes": {
            "price": 10,
            "title": "parsley (kg)",
            "desc": "parsley desc",
            "createdAt": "2023-02-20T23:48:01.148Z",
            "updatedAt": "2023-02-23T16:31:15.110Z",
            "publishedAt": "2023-02-20T23:48:02.206Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 67,
                    "attributes": {
                        "name": "Parsley.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "width": 1101,
                        "height": 1017,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_Parsley.jpg",
                                "hash": "thumbnail_Parsley_12c7077a26",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 169,
                                "height": 156,
                                "size": 55.17,
                                "url": "/uploads/thumbnail_Parsley_12c7077a26.jpg"
                            },
                            "small": {
                                "name": "small_Parsley.jpg",
                                "hash": "small_Parsley_12c7077a26",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 462,
                                "size": 402.36,
                                "url": "/uploads/small_Parsley_12c7077a26.jpg"
                            },
                            "medium": {
                                "name": "medium_Parsley.jpg",
                                "hash": "medium_Parsley_12c7077a26",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 693,
                                "size": 854.81,
                                "url": "/uploads/medium_Parsley_12c7077a26.jpg"
                            },
                            "large": {
                                "name": "large_Parsley.jpg",
                                "hash": "large_Parsley_12c7077a26",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 924,
                                "size": 1446.55,
                                "url": "/uploads/large_Parsley_12c7077a26.jpg"
                            }
                        },
                        "hash": "Parsley_12c7077a26",
                        "ext": ".jpg",
                        "mime": "image/png",
                        "size": 423.77,
                        "url": "/uploads/Parsley_12c7077a26.jpg",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T23:47:53.875Z",
                        "updatedAt": "2023-02-23T15:40:14.867Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 16,
                        "attributes": {
                            "title": "Fresh greens",
                            "desc": "Fresh greens desc",
                            "createdAt": "2023-02-20T23:24:34.698Z",
                            "updatedAt": "2023-02-21T00:03:52.520Z",
                            "publishedAt": "2023-02-20T23:24:36.260Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 33,
        "attributes": {
            "price": 11,
            "title": "prunes (kg)",
            "desc": "prunes desc",
            "createdAt": "2023-02-20T22:39:06.678Z",
            "updatedAt": "2023-02-23T16:31:27.392Z",
            "publishedAt": "2023-02-20T22:39:08.020Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 58,
                    "attributes": {
                        "name": "prunes.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 184,
                        "height": 100,
                        "formats": {},
                        "hash": "prunes_04515808ff",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 7.03,
                        "url": "/uploads/prunes_04515808ff.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T22:38:58.900Z",
                        "updatedAt": "2023-02-23T12:25:09.006Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Dried fruit",
                            "desc": "Dried fruit",
                            "createdAt": "2023-02-12T15:07:52.593Z",
                            "updatedAt": "2023-02-15T03:03:16.763Z",
                            "publishedAt": "2023-02-12T15:07:53.333Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 37,
        "attributes": {
            "price": 11,
            "title": "dried bananas (kg)",
            "desc": "dried bananas desc",
            "createdAt": "2023-02-20T23:15:55.910Z",
            "updatedAt": "2023-02-23T16:29:49.431Z",
            "publishedAt": "2023-02-20T23:15:56.811Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 62,
                    "attributes": {
                        "name": "dried bananas.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 221,
                        "height": 155,
                        "formats": {},
                        "hash": "dried_bananas_83eab2890b",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 20.82,
                        "url": "/uploads/dried_bananas_83eab2890b.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T23:15:50.379Z",
                        "updatedAt": "2023-02-23T12:27:40.438Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Dried fruit",
                            "desc": "Dried fruit",
                            "createdAt": "2023-02-12T15:07:52.593Z",
                            "updatedAt": "2023-02-15T03:03:16.763Z",
                            "publishedAt": "2023-02-12T15:07:53.333Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 38,
        "attributes": {
            "price": 12,
            "title": "lettuce (kg)",
            "desc": "lettuce desc",
            "createdAt": "2023-02-20T23:37:09.047Z",
            "updatedAt": "2023-02-23T16:30:38.254Z",
            "publishedAt": "2023-02-20T23:37:10.557Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 64,
                    "attributes": {
                        "name": "Lettuce.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 1553,
                        "height": 1053,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_Lettuce.png",
                                "hash": "thumbnail_Lettuce_49fe5fd45c",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 230,
                                "height": 156,
                                "size": 69.83,
                                "url": "/uploads/thumbnail_Lettuce_49fe5fd45c.png"
                            },
                            "small": {
                                "name": "small_Lettuce.png",
                                "hash": "small_Lettuce_49fe5fd45c",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 339,
                                "size": 273.58,
                                "url": "/uploads/small_Lettuce_49fe5fd45c.png"
                            },
                            "medium": {
                                "name": "medium_Lettuce.png",
                                "hash": "medium_Lettuce_49fe5fd45c",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 509,
                                "size": 567.59,
                                "url": "/uploads/medium_Lettuce_49fe5fd45c.png"
                            },
                            "large": {
                                "name": "large_Lettuce.png",
                                "hash": "large_Lettuce_49fe5fd45c",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 678,
                                "size": 944.23,
                                "url": "/uploads/large_Lettuce_49fe5fd45c.png"
                            }
                        },
                        "hash": "Lettuce_49fe5fd45c",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 469.73,
                        "url": "/uploads/Lettuce_49fe5fd45c.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T23:36:59.945Z",
                        "updatedAt": "2023-02-23T15:33:32.991Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 16,
                        "attributes": {
                            "title": "Fresh greens",
                            "desc": "Fresh greens desc",
                            "createdAt": "2023-02-20T23:24:34.698Z",
                            "updatedAt": "2023-02-21T00:03:52.520Z",
                            "publishedAt": "2023-02-20T23:24:36.260Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 24,
        "attributes": {
            "price": 12.86,
            "title": "octopus (kg)",
            "desc": "octopus desc",
            "createdAt": "2023-02-20T21:55:59.827Z",
            "updatedAt": "2023-02-23T16:30:59.839Z",
            "publishedAt": "2023-02-20T21:56:01.735Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 49,
                    "attributes": {
                        "name": "octopus.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 847,
                        "height": 638,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_octopus.png",
                                "hash": "thumbnail_octopus_1f0aa44d11",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 207,
                                "height": 156,
                                "size": 79.25,
                                "url": "/uploads/thumbnail_octopus_1f0aa44d11.png"
                            },
                            "small": {
                                "name": "small_octopus.png",
                                "hash": "small_octopus_1f0aa44d11",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 377,
                                "size": 421.29,
                                "url": "/uploads/small_octopus_1f0aa44d11.png"
                            },
                            "medium": {
                                "name": "medium_octopus.png",
                                "hash": "medium_octopus_1f0aa44d11",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 565,
                                "size": 913.92,
                                "url": "/uploads/medium_octopus_1f0aa44d11.png"
                            }
                        },
                        "hash": "octopus_1f0aa44d11",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 293.33,
                        "url": "/uploads/octopus_1f0aa44d11.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T21:55:49.285Z",
                        "updatedAt": "2023-02-23T16:03:58.370Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 9,
                        "attributes": {
                            "title": "Ocean Foods",
                            "desc": "Ocean Foods desc",
                            "createdAt": "2023-02-17T16:32:25.792Z",
                            "updatedAt": "2023-02-23T15:59:03.839Z",
                            "publishedAt": "2023-02-17T16:32:26.527Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 22,
        "attributes": {
            "price": 14.93,
            "title": "tiger chrimp (kg)",
            "desc": "tiger chrimp desc",
            "createdAt": "2023-02-20T21:21:03.645Z",
            "updatedAt": "2023-02-23T16:32:25.685Z",
            "publishedAt": "2023-02-20T21:22:09.642Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 47,
                    "attributes": {
                        "name": "Tiger_chrimp.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 1768,
                        "height": 1300,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_Tiger_chrimp.png",
                                "hash": "thumbnail_Tiger_chrimp_db4e75538b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 212,
                                "height": 156,
                                "size": 59.95,
                                "url": "/uploads/thumbnail_Tiger_chrimp_db4e75538b.png"
                            },
                            "small": {
                                "name": "small_Tiger_chrimp.png",
                                "hash": "small_Tiger_chrimp_db4e75538b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 368,
                                "size": 287.04,
                                "url": "/uploads/small_Tiger_chrimp_db4e75538b.png"
                            },
                            "medium": {
                                "name": "medium_Tiger_chrimp.png",
                                "hash": "medium_Tiger_chrimp_db4e75538b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 551,
                                "size": 611.05,
                                "url": "/uploads/medium_Tiger_chrimp_db4e75538b.png"
                            },
                            "large": {
                                "name": "large_Tiger_chrimp.png",
                                "hash": "large_Tiger_chrimp_db4e75538b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 735,
                                "size": 1046.51,
                                "url": "/uploads/large_Tiger_chrimp_db4e75538b.png"
                            }
                        },
                        "hash": "Tiger_chrimp_db4e75538b",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 742.55,
                        "url": "/uploads/Tiger_chrimp_db4e75538b.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T21:20:57.579Z",
                        "updatedAt": "2023-02-23T15:52:01.425Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 9,
                        "attributes": {
                            "title": "Ocean Foods",
                            "desc": "Ocean Foods desc",
                            "createdAt": "2023-02-17T16:32:25.792Z",
                            "updatedAt": "2023-02-23T15:59:03.839Z",
                            "publishedAt": "2023-02-17T16:32:26.527Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 35,
        "attributes": {
            "price": 15,
            "title": "date fruit (kg)",
            "desc": "date fruit desc",
            "createdAt": "2023-02-20T22:46:30.945Z",
            "updatedAt": "2023-02-23T16:29:27.878Z",
            "publishedAt": "2023-02-20T22:46:31.963Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 60,
                    "attributes": {
                        "name": "date fruit.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 221,
                        "height": 169,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_date fruit.png",
                                "hash": "thumbnail_date_fruit_a8bcb04c00",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 204,
                                "height": 156,
                                "size": 64.51,
                                "url": "/uploads/thumbnail_date_fruit_a8bcb04c00.png"
                            }
                        },
                        "hash": "date_fruit_a8bcb04c00",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 16.63,
                        "url": "/uploads/date_fruit_a8bcb04c00.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T22:46:26.534Z",
                        "updatedAt": "2023-02-23T12:30:34.009Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Dried fruit",
                            "desc": "Dried fruit",
                            "createdAt": "2023-02-12T15:07:52.593Z",
                            "updatedAt": "2023-02-15T03:03:16.763Z",
                            "publishedAt": "2023-02-12T15:07:53.333Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": [
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Top Rated Products",
                            "createdAt": "2023-02-12T21:47:42.196Z",
                            "updatedAt": "2023-02-21T00:04:19.343Z",
                            "publishedAt": "2023-02-12T21:47:43.080Z"
                        }
                    }
                ]
            }
        }
    },
    {
        "id": 39,
        "attributes": {
            "price": 15,
            "title": "dill (kg)",
            "desc": "dill",
            "createdAt": "2023-02-20T23:41:01.978Z",
            "updatedAt": "2023-02-23T15:42:59.743Z",
            "publishedAt": "2023-02-20T23:41:02.903Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 65,
                    "attributes": {
                        "name": "Dill.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "width": 1523,
                        "height": 989,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_Dill.jpg",
                                "hash": "thumbnail_Dill_a6ad7c5213",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 240,
                                "height": 156,
                                "size": 74.99,
                                "url": "/uploads/thumbnail_Dill_a6ad7c5213.jpg"
                            },
                            "small": {
                                "name": "small_Dill.jpg",
                                "hash": "small_Dill_a6ad7c5213",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 325,
                                "size": 289.41,
                                "url": "/uploads/small_Dill_a6ad7c5213.jpg"
                            },
                            "medium": {
                                "name": "medium_Dill.jpg",
                                "hash": "medium_Dill_a6ad7c5213",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 487,
                                "size": 619.47,
                                "url": "/uploads/medium_Dill_a6ad7c5213.jpg"
                            },
                            "large": {
                                "name": "large_Dill.jpg",
                                "hash": "large_Dill_a6ad7c5213",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 649,
                                "size": 1060.95,
                                "url": "/uploads/large_Dill_a6ad7c5213.jpg"
                            }
                        },
                        "hash": "Dill_a6ad7c5213",
                        "ext": ".jpg",
                        "mime": "image/png",
                        "size": 506.02,
                        "url": "/uploads/Dill_a6ad7c5213.jpg",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T23:40:56.340Z",
                        "updatedAt": "2023-02-23T15:42:58.625Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 16,
                        "attributes": {
                            "title": "Fresh greens",
                            "desc": "Fresh greens desc",
                            "createdAt": "2023-02-20T23:24:34.698Z",
                            "updatedAt": "2023-02-21T00:03:52.520Z",
                            "publishedAt": "2023-02-20T23:24:36.260Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 40,
        "attributes": {
            "price": 15,
            "title": "leek (kg)",
            "desc": "leek desc",
            "createdAt": "2023-02-20T23:44:22.146Z",
            "updatedAt": "2023-02-23T16:30:22.574Z",
            "publishedAt": "2023-02-20T23:44:23.039Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 66,
                    "attributes": {
                        "name": "Leek.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "width": 2229,
                        "height": 1368,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_Leek.jpg",
                                "hash": "thumbnail_Leek_61370ec799",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 245,
                                "height": 150,
                                "size": 65.02,
                                "url": "/uploads/thumbnail_Leek_61370ec799.jpg"
                            },
                            "small": {
                                "name": "small_Leek.jpg",
                                "hash": "small_Leek_61370ec799",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 307,
                                "size": 230.83,
                                "url": "/uploads/small_Leek_61370ec799.jpg"
                            },
                            "medium": {
                                "name": "medium_Leek.jpg",
                                "hash": "medium_Leek_61370ec799",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 460,
                                "size": 451.8,
                                "url": "/uploads/medium_Leek_61370ec799.jpg"
                            },
                            "large": {
                                "name": "large_Leek.jpg",
                                "hash": "large_Leek_61370ec799",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 614,
                                "size": 724.53,
                                "url": "/uploads/large_Leek_61370ec799.jpg"
                            }
                        },
                        "hash": "Leek_61370ec799",
                        "ext": ".jpg",
                        "mime": "image/png",
                        "size": 310.9,
                        "url": "/uploads/Leek_61370ec799.jpg",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T23:44:17.816Z",
                        "updatedAt": "2023-02-23T15:44:54.285Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 16,
                        "attributes": {
                            "title": "Fresh greens",
                            "desc": "Fresh greens desc",
                            "createdAt": "2023-02-20T23:24:34.698Z",
                            "updatedAt": "2023-02-21T00:03:52.520Z",
                            "publishedAt": "2023-02-20T23:24:36.260Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 42,
        "attributes": {
            "price": 15,
            "title": "mint (kg)",
            "desc": "mint desc",
            "createdAt": "2023-02-20T23:56:51.606Z",
            "updatedAt": "2023-02-23T16:30:44.182Z",
            "publishedAt": "2023-02-20T23:56:54.544Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 68,
                    "attributes": {
                        "name": "mint.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 202,
                        "height": 149,
                        "formats": {},
                        "hash": "mint_207c369a41",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 17.13,
                        "url": "/uploads/mint_207c369a41.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T23:53:26.848Z",
                        "updatedAt": "2023-02-23T15:48:03.309Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 16,
                        "attributes": {
                            "title": "Fresh greens",
                            "desc": "Fresh greens desc",
                            "createdAt": "2023-02-20T23:24:34.698Z",
                            "updatedAt": "2023-02-21T00:03:52.520Z",
                            "publishedAt": "2023-02-20T23:24:36.260Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 36,
        "attributes": {
            "price": 16,
            "title": "dried mango (kg)",
            "desc": "dried mango desc",
            "createdAt": "2023-02-20T22:50:24.225Z",
            "updatedAt": "2023-02-23T16:29:57.021Z",
            "publishedAt": "2023-02-20T22:50:25.127Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 61,
                    "attributes": {
                        "name": "dried mango.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "width": 692,
                        "height": 464,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_dried mango.jpg",
                                "hash": "thumbnail_dried_mango_0086cdfbee",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 233,
                                "height": 156,
                                "size": 70.28,
                                "url": "/uploads/thumbnail_dried_mango_0086cdfbee.jpg"
                            },
                            "small": {
                                "name": "small_dried mango.jpg",
                                "hash": "small_dried_mango_0086cdfbee",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 335,
                                "size": 278.46,
                                "url": "/uploads/small_dried_mango_0086cdfbee.jpg"
                            }
                        },
                        "hash": "dried_mango_0086cdfbee",
                        "ext": ".jpg",
                        "mime": "image/png",
                        "size": 111.22,
                        "url": "/uploads/dried_mango_0086cdfbee.jpg",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T22:50:19.497Z",
                        "updatedAt": "2023-02-23T12:35:54.251Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Dried fruit",
                            "desc": "Dried fruit",
                            "createdAt": "2023-02-12T15:07:52.593Z",
                            "updatedAt": "2023-02-15T03:03:16.763Z",
                            "publishedAt": "2023-02-12T15:07:53.333Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 45,
        "attributes": {
            "price": 24.6,
            "title": "cranberry (kg)",
            "desc": "cranberry desc",
            "createdAt": "2023-02-24T21:11:53.950Z",
            "updatedAt": "2023-02-24T21:11:54.945Z",
            "publishedAt": "2023-02-24T21:11:54.943Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 71,
                    "attributes": {
                        "name": "cranberry.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 1953,
                        "height": 919,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_cranberry.png",
                                "hash": "thumbnail_cranberry_33e0597681",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 245,
                                "height": 115,
                                "size": 71.19,
                                "url": "/uploads/thumbnail_cranberry_33e0597681.png"
                            },
                            "small": {
                                "name": "small_cranberry.png",
                                "hash": "small_cranberry_33e0597681",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 235,
                                "size": 264.33,
                                "url": "/uploads/small_cranberry_33e0597681.png"
                            },
                            "medium": {
                                "name": "medium_cranberry.png",
                                "hash": "medium_cranberry_33e0597681",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 353,
                                "size": 567.02,
                                "url": "/uploads/medium_cranberry_33e0597681.png"
                            },
                            "large": {
                                "name": "large_cranberry.png",
                                "hash": "large_cranberry_33e0597681",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 471,
                                "size": 979.99,
                                "url": "/uploads/large_cranberry_33e0597681.png"
                            }
                        },
                        "hash": "cranberry_33e0597681",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 796.97,
                        "url": "/uploads/cranberry_33e0597681.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-24T21:11:50.701Z",
                        "updatedAt": "2023-02-24T21:11:50.701Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 7,
                        "attributes": {
                            "title": "Fresh Berries",
                            "desc": "Fresh Berries cat desc",
                            "createdAt": "2023-02-12T15:25:02.811Z",
                            "updatedAt": "2023-02-20T20:33:12.260Z",
                            "publishedAt": "2023-02-12T15:25:03.701Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 44,
        "attributes": {
            "price": 26.15,
            "title": "cowberry (kg)",
            "desc": "cowberry desc",
            "createdAt": "2023-02-24T21:10:21.766Z",
            "updatedAt": "2023-02-24T21:10:23.264Z",
            "publishedAt": "2023-02-24T21:10:23.262Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 70,
                    "attributes": {
                        "name": "cowberry.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 2123,
                        "height": 1209,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_cowberry.png",
                                "hash": "thumbnail_cowberry_aeb6ee7c49",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 245,
                                "height": 140,
                                "size": 77.55,
                                "url": "/uploads/thumbnail_cowberry_aeb6ee7c49.png"
                            },
                            "small": {
                                "name": "small_cowberry.png",
                                "hash": "small_cowberry_aeb6ee7c49",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 285,
                                "size": 280.08,
                                "url": "/uploads/small_cowberry_aeb6ee7c49.png"
                            },
                            "medium": {
                                "name": "medium_cowberry.png",
                                "hash": "medium_cowberry_aeb6ee7c49",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 427,
                                "size": 590,
                                "url": "/uploads/medium_cowberry_aeb6ee7c49.png"
                            },
                            "large": {
                                "name": "large_cowberry.png",
                                "hash": "large_cowberry_aeb6ee7c49",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 569,
                                "size": 996.9,
                                "url": "/uploads/large_cowberry_aeb6ee7c49.png"
                            }
                        },
                        "hash": "cowberry_aeb6ee7c49",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 660.55,
                        "url": "/uploads/cowberry_aeb6ee7c49.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-24T21:10:16.587Z",
                        "updatedAt": "2023-02-24T21:10:16.587Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 7,
                        "attributes": {
                            "title": "Fresh Berries",
                            "desc": "Fresh Berries cat desc",
                            "createdAt": "2023-02-12T15:25:02.811Z",
                            "updatedAt": "2023-02-20T20:33:12.260Z",
                            "publishedAt": "2023-02-12T15:25:03.701Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 21,
        "attributes": {
            "price": 35.7,
            "title": "strawberry (kg)",
            "desc": "strawberry desc",
            "createdAt": "2023-02-20T20:51:43.390Z",
            "updatedAt": "2023-02-23T12:04:51.506Z",
            "publishedAt": "2023-02-20T20:52:58.779Z",
            "type": "top-rated",
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 45,
                    "attributes": {
                        "name": "strawberry.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 213,
                        "height": 175,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_strawberry.png",
                                "hash": "thumbnail_strawberry_70017e21c7",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 190,
                                "height": 156,
                                "size": 76.55,
                                "url": "/uploads/thumbnail_strawberry_70017e21c7.png"
                            }
                        },
                        "hash": "strawberry_70017e21c7",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 22.85,
                        "url": "/uploads/strawberry_70017e21c7.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T20:49:24.564Z",
                        "updatedAt": "2023-02-23T12:03:16.131Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 7,
                        "attributes": {
                            "title": "Fresh Berries",
                            "desc": "Fresh Berries cat desc",
                            "createdAt": "2023-02-12T15:25:02.811Z",
                            "updatedAt": "2023-02-20T20:33:12.260Z",
                            "publishedAt": "2023-02-12T15:25:03.701Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": [
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Top Rated Products",
                            "createdAt": "2023-02-12T21:47:42.196Z",
                            "updatedAt": "2023-02-21T00:04:19.343Z",
                            "publishedAt": "2023-02-12T21:47:43.080Z"
                        }
                    }
                ]
            }
        }
    },
    {
        "id": 6,
        "attributes": {
            "price": 36,
            "title": "blueberry (kg)",
            "desc": "blueberry desc",
            "createdAt": "2023-02-12T15:25:29.426Z",
            "updatedAt": "2023-02-23T16:28:33.127Z",
            "publishedAt": "2023-02-12T15:25:32.237Z",
            "type": "top-rated",
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 30,
                    "attributes": {
                        "name": "blueberry.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 412,
                        "height": 320,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_blueberry.png",
                                "hash": "thumbnail_blueberry_dbe40ddb71",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 201,
                                "height": 156,
                                "size": 63.51,
                                "url": "/uploads/thumbnail_blueberry_dbe40ddb71.png"
                            }
                        },
                        "hash": "blueberry_dbe40ddb71",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 58.1,
                        "url": "/uploads/blueberry_dbe40ddb71.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-12T15:20:11.977Z",
                        "updatedAt": "2023-02-23T11:51:16.390Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 7,
                        "attributes": {
                            "title": "Fresh Berries",
                            "desc": "Fresh Berries cat desc",
                            "createdAt": "2023-02-12T15:25:02.811Z",
                            "updatedAt": "2023-02-20T20:33:12.260Z",
                            "publishedAt": "2023-02-12T15:25:03.701Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": [
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Top Rated Products",
                            "createdAt": "2023-02-12T21:47:42.196Z",
                            "updatedAt": "2023-02-21T00:04:19.343Z",
                            "publishedAt": "2023-02-12T21:47:43.080Z"
                        }
                    }
                ]
            }
        }
    },
    {
        "id": 46,
        "attributes": {
            "price": 42.3,
            "title": "red currant (kg)",
            "desc": "red currant desc",
            "createdAt": "2023-02-24T21:49:21.384Z",
            "updatedAt": "2023-02-24T21:49:22.437Z",
            "publishedAt": "2023-02-24T21:49:22.435Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 72,
                    "attributes": {
                        "name": "red currant.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 949,
                        "height": 638,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_red currant.png",
                                "hash": "thumbnail_red_currant_84754190f8",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 232,
                                "height": 156,
                                "size": 69.09,
                                "url": "/uploads/thumbnail_red_currant_84754190f8.png"
                            },
                            "small": {
                                "name": "small_red currant.png",
                                "hash": "small_red_currant_84754190f8",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 336,
                                "size": 272.96,
                                "url": "/uploads/small_red_currant_84754190f8.png"
                            },
                            "medium": {
                                "name": "medium_red currant.png",
                                "hash": "medium_red_currant_84754190f8",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 504,
                                "size": 572.46,
                                "url": "/uploads/medium_red_currant_84754190f8.png"
                            }
                        },
                        "hash": "red_currant_84754190f8",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 183.31,
                        "url": "/uploads/red_currant_84754190f8.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-24T21:49:17.613Z",
                        "updatedAt": "2023-02-24T21:49:17.613Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 7,
                        "attributes": {
                            "title": "Fresh Berries",
                            "desc": "Fresh Berries cat desc",
                            "createdAt": "2023-02-12T15:25:02.811Z",
                            "updatedAt": "2023-02-20T20:33:12.260Z",
                            "publishedAt": "2023-02-12T15:25:03.701Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 47,
        "attributes": {
            "price": 42.9,
            "title": "black currant (kg)",
            "desc": "black currant desc",
            "createdAt": "2023-02-24T21:51:52.743Z",
            "updatedAt": "2023-02-24T21:51:53.733Z",
            "publishedAt": "2023-02-24T21:51:53.731Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 73,
                    "attributes": {
                        "name": "black currant.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 776,
                        "height": 653,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_black currant.png",
                                "hash": "thumbnail_black_currant_b49217f937",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 185,
                                "height": 156,
                                "size": 57.43,
                                "url": "/uploads/thumbnail_black_currant_b49217f937.png"
                            },
                            "small": {
                                "name": "small_black currant.png",
                                "hash": "small_black_currant_b49217f937",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 421,
                                "size": 346.08,
                                "url": "/uploads/small_black_currant_b49217f937.png"
                            },
                            "medium": {
                                "name": "medium_black currant.png",
                                "hash": "medium_black_currant_b49217f937",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 631,
                                "size": 728.11,
                                "url": "/uploads/medium_black_currant_b49217f937.png"
                            }
                        },
                        "hash": "black_currant_b49217f937",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 206.37,
                        "url": "/uploads/black_currant_b49217f937.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-24T21:51:49.042Z",
                        "updatedAt": "2023-02-24T21:51:49.042Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 7,
                        "attributes": {
                            "title": "Fresh Berries",
                            "desc": "Fresh Berries cat desc",
                            "createdAt": "2023-02-12T15:25:02.811Z",
                            "updatedAt": "2023-02-20T20:33:12.260Z",
                            "publishedAt": "2023-02-12T15:25:03.701Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 25,
        "attributes": {
            "price": 44.29,
            "title": "crabs (kg)",
            "desc": "crabs desc",
            "createdAt": "2023-02-20T21:58:47.333Z",
            "updatedAt": "2023-02-23T16:29:16.669Z",
            "publishedAt": "2023-02-20T21:58:48.833Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 50,
                    "attributes": {
                        "name": "crabs.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 1520,
                        "height": 794,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_crabs.png",
                                "hash": "thumbnail_crabs_f8f0143e9b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 245,
                                "height": 128,
                                "size": 83.68,
                                "url": "/uploads/thumbnail_crabs_f8f0143e9b.png"
                            },
                            "small": {
                                "name": "small_crabs.png",
                                "hash": "small_crabs_f8f0143e9b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 261,
                                "size": 318.89,
                                "url": "/uploads/small_crabs_f8f0143e9b.png"
                            },
                            "medium": {
                                "name": "medium_crabs.png",
                                "hash": "medium_crabs_f8f0143e9b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 392,
                                "size": 688.29,
                                "url": "/uploads/medium_crabs_f8f0143e9b.png"
                            },
                            "large": {
                                "name": "large_crabs.png",
                                "hash": "large_crabs_f8f0143e9b",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 522,
                                "size": 1182.81,
                                "url": "/uploads/large_crabs_f8f0143e9b.png"
                            }
                        },
                        "hash": "crabs_f8f0143e9b",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 566.21,
                        "url": "/uploads/crabs_f8f0143e9b.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-20T21:58:34.770Z",
                        "updatedAt": "2023-02-23T15:54:27.107Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 9,
                        "attributes": {
                            "title": "Ocean Foods",
                            "desc": "Ocean Foods desc",
                            "createdAt": "2023-02-17T16:32:25.792Z",
                            "updatedAt": "2023-02-23T15:59:03.839Z",
                            "publishedAt": "2023-02-17T16:32:26.527Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 48,
        "attributes": {
            "price": 45.75,
            "title": "gooseberry (kg)",
            "desc": "gooseberry desc",
            "createdAt": "2023-02-24T21:56:32.998Z",
            "updatedAt": "2023-02-24T21:57:25.686Z",
            "publishedAt": "2023-02-24T21:56:34.048Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 74,
                    "attributes": {
                        "name": "1-1200x800.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "width": 1020,
                        "height": 583,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_1-1200x800.jpg",
                                "hash": "thumbnail_1_1200x800_cbef2e8209",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 245,
                                "height": 140,
                                "size": 79.7,
                                "url": "/uploads/thumbnail_1_1200x800_cbef2e8209.jpg"
                            },
                            "small": {
                                "name": "small_1-1200x800.jpg",
                                "hash": "small_1_1200x800_cbef2e8209",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 286,
                                "size": 289.52,
                                "url": "/uploads/small_1_1200x800_cbef2e8209.jpg"
                            },
                            "large": {
                                "name": "large_1-1200x800.jpg",
                                "hash": "large_1_1200x800_cbef2e8209",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 572,
                                "size": 976.14,
                                "url": "/uploads/large_1_1200x800_cbef2e8209.jpg"
                            },
                            "medium": {
                                "name": "medium_1-1200x800.jpg",
                                "hash": "medium_1_1200x800_cbef2e8209",
                                "ext": ".jpg",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 429,
                                "size": 603.51,
                                "url": "/uploads/medium_1_1200x800_cbef2e8209.jpg"
                            }
                        },
                        "hash": "1_1200x800_cbef2e8209",
                        "ext": ".jpg",
                        "mime": "image/png",
                        "size": 198.91,
                        "url": "/uploads/1_1200x800_cbef2e8209.jpg",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-24T21:56:29.113Z",
                        "updatedAt": "2023-02-24T21:57:24.261Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 7,
                        "attributes": {
                            "title": "Fresh Berries",
                            "desc": "Fresh Berries cat desc",
                            "createdAt": "2023-02-12T15:25:02.811Z",
                            "updatedAt": "2023-02-20T20:33:12.260Z",
                            "publishedAt": "2023-02-12T15:25:03.701Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": []
            }
        }
    },
    {
        "id": 43,
        "attributes": {
            "price": 75.2,
            "title": "blackberry (kg)",
            "desc": "blackberry desc",
            "createdAt": "2023-02-24T21:08:19.722Z",
            "updatedAt": "2023-03-01T00:41:43.646Z",
            "publishedAt": "2023-02-24T21:08:53.501Z",
            "type": null,
            "onTop": null,
            "onSale": null,
            "img": {
                "data": {
                    "id": 69,
                    "attributes": {
                        "name": "blackberry.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 1466,
                        "height": 1088,
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_blackberry.png",
                                "hash": "thumbnail_blackberry_9f68ae448d",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 210,
                                "height": 156,
                                "size": 71.37,
                                "url": "/uploads/thumbnail_blackberry_9f68ae448d.png"
                            },
                            "small": {
                                "name": "small_blackberry.png",
                                "hash": "small_blackberry_9f68ae448d",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 500,
                                "height": 371,
                                "size": 341.73,
                                "url": "/uploads/small_blackberry_9f68ae448d.png"
                            },
                            "medium": {
                                "name": "medium_blackberry.png",
                                "hash": "medium_blackberry_9f68ae448d",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 750,
                                "height": 557,
                                "size": 729.6,
                                "url": "/uploads/medium_blackberry_9f68ae448d.png"
                            },
                            "large": {
                                "name": "large_blackberry.png",
                                "hash": "large_blackberry_9f68ae448d",
                                "ext": ".png",
                                "mime": "image/png",
                                "path": null,
                                "width": 1000,
                                "height": 742,
                                "size": 1247.14,
                                "url": "/uploads/large_blackberry_9f68ae448d.png"
                            }
                        },
                        "hash": "blackberry_9f68ae448d",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 613.47,
                        "url": "/uploads/blackberry_9f68ae448d.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-24T21:07:48.310Z",
                        "updatedAt": "2023-02-24T21:07:48.310Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    },
                    {
                        "id": 7,
                        "attributes": {
                            "title": "Fresh Berries",
                            "desc": "Fresh Berries cat desc",
                            "createdAt": "2023-02-12T15:25:02.811Z",
                            "updatedAt": "2023-02-20T20:33:12.260Z",
                            "publishedAt": "2023-02-12T15:25:03.701Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": [
                    {
                        "id": 3,
                        "attributes": {
                            "title": "Discounted Products",
                            "createdAt": "2023-02-12T21:48:11.228Z",
                            "updatedAt": "2023-02-21T00:04:30.127Z",
                            "publishedAt": "2023-02-12T21:48:12.311Z"
                        }
                    }
                ]
            }
        }
    },
    {
        "id": 11,
        "attributes": {
            "price": 80.29,
            "title": "raspberry (kg)",
            "desc": "Fresh raspberry desc",
            "createdAt": "2023-02-12T15:29:07.884Z",
            "updatedAt": "2023-02-24T23:19:59.478Z",
            "publishedAt": "2023-02-12T15:29:10.214Z",
            "type": "review",
            "onTop": true,
            "onSale": null,
            "img": {
                "data": {
                    "id": 32,
                    "attributes": {
                        "name": "fresh-raspberry.png",
                        "alternativeText": null,
                        "caption": null,
                        "width": 154,
                        "height": 113,
                        "formats": {},
                        "hash": "fresh_raspberry_2e3cecb5b5",
                        "ext": ".png",
                        "mime": "image/png",
                        "size": 10.26,
                        "url": "/uploads/fresh_raspberry_2e3cecb5b5.png",
                        "previewUrl": null,
                        "provider": "local",
                        "provider_metadata": null,
                        "createdAt": "2023-02-12T15:20:12.100Z",
                        "updatedAt": "2023-02-23T11:55:24.118Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 7,
                        "attributes": {
                            "title": "Fresh Berries",
                            "desc": "Fresh Berries cat desc",
                            "createdAt": "2023-02-12T15:25:02.811Z",
                            "updatedAt": "2023-02-20T20:33:12.260Z",
                            "publishedAt": "2023-02-12T15:25:03.701Z"
                        }
                    },
                    {
                        "id": 1,
                        "attributes": {
                            "title": "All",
                            "desc": "All desc",
                            "createdAt": "2023-02-22T01:55:58.208Z",
                            "updatedAt": "2023-03-01T00:56:39.904Z",
                            "publishedAt": "2023-02-22T02:14:23.682Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": [
                    {
                        "id": 3,
                        "attributes": {
                            "title": "Discounted Products",
                            "createdAt": "2023-02-12T21:48:11.228Z",
                            "updatedAt": "2023-02-21T00:04:30.127Z",
                            "publishedAt": "2023-02-12T21:48:12.311Z"
                        }
                    }
                ]
            }
        }
    }
]
 const fakeCategories = [
    {
        "id": 1,
        "attributes": {
            "title": "All",
            "desc": "All desc"
        }
    },
    {
        "id": 2,
        "attributes": {
            "title": "Dried fruit",
            "desc": "Dried fruit"
        }
    },
    {
        "id": 3,
        "attributes": {
            "title": "Vegetables",
            "desc": "Vegetables cat desc"
        }
    },
    {
        "id": 4,
        "attributes": {
            "title": "Drink fruits",
            "desc": "Drink fruits  cat desc"
        }
    },
    {
        "id": 7,
        "attributes": {
            "title": "Fresh Berries",
            "desc": "Fresh Berries cat desc"
        }
    },
    {
        "id": 9,
        "attributes": {
            "title": "Ocean Foods",
            "desc": "Ocean Foods desc"
        }
    },
    {
        "id": 15,
        "attributes": {
            "title": "Fresh Fruits",
            "desc": "Fresh Fruits desc"
        }
    },
    {
        "id": 16,
        "attributes": {
            "title": "Fresh greens",
            "desc": "Fresh greens desc"
        }
    }
]
//
const carouselItems = range(noOfItems).map((index) => (
    <div className="slider__item" key={index}>
        {index + 1}
    </div>
));

export default class AutoPlayCarousel extends React.Component {
    state = {
        activeItemIndex: 0,
    };

    //AutoPlayCarousel

    //   componentDidMount() {
    //     this.interval = setInterval(this.tick, autoPlayDelay);
    //   }

    //   componentWillUnmount() {
    //     clearInterval(this.interval);
    //   }

    // tick = () =>
    //   this.setState((prevState) => ({
    //     activeItemIndex:
    //       (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1),
    //   }));

    onChange = (value) => this.setState({ activeItemIndex: value });

    render() {
        return (
            <div className="slider">
                <ItemsCarousel
                    gutter={12}
                    numberOfCards={noOfCards}
                    activeItemIndex={this.state.activeItemIndex}
                    requestToChangeActive={this.onChange}
                    rightChevron={
                        <button className="slider__btn">
                            <img src={SliderIconNext} alt='' />
                        </button>
                    }
                    leftChevron={
                        <button className="slider__btn">
                            <img src={SliderIconPrev} alt='' />
                        </button>
                    }
                    chevronWidth={chevronWidth}
                    outsideChevron
                    children={carouselItems} // produsts
                />
            </div>
        );
    }
}
