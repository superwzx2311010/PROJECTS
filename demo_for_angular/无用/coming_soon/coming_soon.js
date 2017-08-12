(function (angular) {
    var mod4=angular.module("mod4",["ngRoute"]);
    mod4.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/coming_soon",{
            templateUrl:"./coming_soon/coming_soon.html",
            controller:"cont4"
        })
    }])
    mod4.controller("cont4",["$scope",function ($scope) {
        $scope.data={
            "count": 20,
            "start": 0,
            "total": 129,
            "subjects": [
                {
                    "rating": {
                        "max": 10,
                        "average": 7.9,
                        "stars": "40",
                        "min": 0
                    },
                    "genres": [
                        "纪录片"
                    ],
                    "title": "二十二",
                    "casts": [],
                    "collect_count": 813,
                    "original_title": "二十二",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1351483/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1479539291.46.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1479539291.46.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1479539291.46.jpg"
                            },
                            "name": "郭柯",
                            "id": "1351483"
                        }
                    ],
                    "year": "2015",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2457609817.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2457609817.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2457609817.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26430107/",
                    "id": "26430107"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "剧情"
                    ],
                    "title": "双手洪拳",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1318441/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/42891.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/42891.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/42891.jpg"
                            },
                            "name": "狄威",
                            "id": "1318441"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1378675/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                            },
                            "name": "阎玺",
                            "id": "1378675"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1378676/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                            },
                            "name": "龚洁影",
                            "id": "1378676"
                        }
                    ],
                    "collect_count": 2,
                    "original_title": "双手洪拳",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1378674/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                            },
                            "name": "胡军",
                            "id": "1378674"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2495470083.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2495470083.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2495470083.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/27096510/",
                    "id": "27096510"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "动作",
                        "犯罪"
                    ],
                    "title": "破·局",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1041390/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/49475.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/49475.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/49475.jpg"
                            },
                            "name": "郭富城",
                            "id": "1041390"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1314827/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1445948736.67.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1445948736.67.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1445948736.67.jpg"
                            },
                            "name": "王千源",
                            "id": "1314827"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1011562/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1415689928.93.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1415689928.93.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1415689928.93.jpg"
                            },
                            "name": "刘涛",
                            "id": "1011562"
                        }
                    ],
                    "collect_count": 398,
                    "original_title": "破·局",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1316302/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/35859.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/35859.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/35859.jpg"
                            },
                            "name": "连奕琦",
                            "id": "1316302"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2494818916.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2494818916.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2494818916.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26760160/",
                    "id": "26760160"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "动作"
                    ],
                    "title": "杀破狼·贪狼",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1027577/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1419164187.6.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1419164187.6.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1419164187.6.jpg"
                            },
                            "name": "古天乐",
                            "id": "1027577"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1004643/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/4862.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/4862.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/4862.jpg"
                            },
                            "name": "托尼·贾",
                            "id": "1004643"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1314321/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/45924.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/45924.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/45924.jpg"
                            },
                            "name": "吴樾",
                            "id": "1314321"
                        }
                    ],
                    "collect_count": 124,
                    "original_title": "殺破狼‧貪狼",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1274472/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1379340288.41.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1379340288.41.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1379340288.41.jpg"
                            },
                            "name": "叶伟信",
                            "id": "1274472"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2494948513.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2494948513.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2494948513.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26826398/",
                    "id": "26826398"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "喜剧",
                        "动画",
                        "奇幻"
                    ],
                    "title": "十万个冷笑话2",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1334349/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1398540567.14.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1398540567.14.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1398540567.14.jpg"
                            },
                            "name": "山新",
                            "id": "1334349"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1340968/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1493704624.54.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1493704624.54.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1493704624.54.jpg"
                            },
                            "name": "郝祥海",
                            "id": "1340968"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1345414/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1498213287.65.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1498213287.65.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1498213287.65.jpg"
                            },
                            "name": "李姝洁",
                            "id": "1345414"
                        }
                    ],
                    "collect_count": 278,
                    "original_title": "十万个冷笑话2",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1343619/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1498213042.81.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1498213042.81.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1498213042.81.jpg"
                            },
                            "name": "卢恒宇",
                            "id": "1343619"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1345414/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1498213287.65.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1498213287.65.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1498213287.65.jpg"
                            },
                            "name": "李姝洁",
                            "id": "1345414"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2492917402.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2492917402.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2492917402.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26759539/",
                    "id": "26759539"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 7.1,
                        "stars": "35",
                        "min": 0
                    },
                    "genres": [
                        "剧情"
                    ],
                    "title": "皮绳上的魂",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1362878/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1495517018.67.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1495517018.67.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1495517018.67.jpg"
                            },
                            "name": "金巴",
                            "id": "1362878"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1376956/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1499769716.36.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1499769716.36.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1499769716.36.jpg"
                            },
                            "name": "曲尼次仁",
                            "id": "1376956"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1376957/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1499769871.04.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1499769871.04.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1499769871.04.jpg"
                            },
                            "name": "夏诺.扎西敦珠",
                            "id": "1376957"
                        }
                    ],
                    "collect_count": 1159,
                    "original_title": "皮绳上的魂",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1301697/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1356350729.21.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1356350729.21.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1356350729.21.jpg"
                            },
                            "name": "张杨",
                            "id": "1301697"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2494811175.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2494811175.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2494811175.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26177735/",
                    "id": "26177735"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "历史",
                        "纪录片"
                    ],
                    "title": "铁血残阳——在刺刀和藩篱下",
                    "casts": [],
                    "collect_count": 86,
                    "original_title": "铁血残阳——在刺刀和藩篱下",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1314210/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/22470.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/22470.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/22470.jpg"
                            },
                            "name": "沈好放",
                            "id": "1314210"
                        }
                    ],
                    "year": "2015",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2494947011.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2494947011.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2494947011.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26608235/",
                    "id": "26608235"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "儿童",
                        "喜剧",
                        "动画"
                    ],
                    "title": "赛尔号大电影6：圣者无敌",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1321912/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/51744.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/51744.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/51744.jpg"
                            },
                            "name": "罗玉婷",
                            "id": "1321912"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1320013/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1359861027.53.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1359861027.53.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1359861027.53.jpg"
                            },
                            "name": "翟巍",
                            "id": "1320013"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1332379/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1496308187.65.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1496308187.65.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1496308187.65.jpg"
                            },
                            "name": "王晓彤",
                            "id": "1332379"
                        }
                    ],
                    "collect_count": 60,
                    "original_title": "赛尔号大电影6：圣者无敌",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1330788/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1500536247.43.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1500536247.43.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1500536247.43.jpg"
                            },
                            "name": "王章俊",
                            "id": "1330788"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2475952676.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2475952676.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2475952676.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26969037/",
                    "id": "26969037"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "惊悚",
                        "恐怖"
                    ],
                    "title": "恐怖毕业照2",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1336641/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1393155538.46.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1393155538.46.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1393155538.46.jpg"
                            },
                            "name": "陈圆",
                            "id": "1336641"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1360341/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1489151067.25.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1489151067.25.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1489151067.25.jpg"
                            },
                            "name": "刘俐儿",
                            "id": "1360341"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1340991/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1451208505.66.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1451208505.66.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1451208505.66.jpg"
                            },
                            "name": "宋伟",
                            "id": "1340991"
                        }
                    ],
                    "collect_count": 28,
                    "original_title": "恐怖毕业照2",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1274565/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1489151244.79.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1489151244.79.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1489151244.79.jpg"
                            },
                            "name": "陆诗雨",
                            "id": "1274565"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2486561596.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2486561596.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2486561596.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26991769/",
                    "id": "26991769"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "犯罪",
                        "家庭"
                    ],
                    "title": "我是谁的宝贝",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1275878/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1363252953.23.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1363252953.23.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1363252953.23.jpg"
                            },
                            "name": "郑国霖",
                            "id": "1275878"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1040154/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1455980076.07.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1455980076.07.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1455980076.07.jpg"
                            },
                            "name": "程皓枫",
                            "id": "1040154"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1322856/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1501058214.75.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1501058214.75.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1501058214.75.jpg"
                            },
                            "name": "华少",
                            "id": "1322856"
                        }
                    ],
                    "collect_count": 2,
                    "original_title": "我是谁的宝贝",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1378079/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1501058017.04.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1501058017.04.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1501058017.04.jpg"
                            },
                            "name": "李南",
                            "id": "1378079"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2495449669.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2495449669.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2495449669.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26955948/",
                    "id": "26955948"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "喜剧",
                        "爱情"
                    ],
                    "title": "顺德人家之合家欢",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1378025/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                            },
                            "name": "宋艾橦",
                            "id": "1378025"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1378026/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                            },
                            "name": "冼兆天",
                            "id": "1378026"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1363033/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1476002964.21.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1476002964.21.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1476002964.21.jpg"
                            },
                            "name": "刘天蔚",
                            "id": "1363033"
                        }
                    ],
                    "collect_count": 3,
                    "original_title": "顺德人家之合家欢",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1378023/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1502365310.8.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1502365310.8.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1502365310.8.jpg"
                            },
                            "name": "杜翛然",
                            "id": "1378023"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2494018240.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2494018240.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2494018240.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/27096447/",
                    "id": "27096447"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "爱情"
                    ],
                    "title": "绝技情缘之艺魂",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1335604/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1501888234.24.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1501888234.24.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1501888234.24.jpg"
                            },
                            "name": "童苡萱",
                            "id": "1335604"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1275965/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1500536910.66.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1500536910.66.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1500536910.66.jpg"
                            },
                            "name": "杜奕衡",
                            "id": "1275965"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1319306/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/46534.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/46534.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/46534.jpg"
                            },
                            "name": "曹帅",
                            "id": "1319306"
                        }
                    ],
                    "collect_count": 1,
                    "original_title": "绝技情缘之艺魂",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1337255/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                            },
                            "name": "张建成",
                            "id": "1337255"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2494295978.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2494295978.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2494295978.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/27092962/",
                    "id": "27092962"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 8.6,
                        "stars": "45",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "家庭"
                    ],
                    "title": "海边的曼彻斯特",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1022593/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/2199.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/2199.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/2199.jpg"
                            },
                            "name": "卡西·阿弗莱克",
                            "id": "1022593"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1340596/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1487925258.18.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1487925258.18.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1487925258.18.jpg"
                            },
                            "name": "卢卡斯·赫奇斯",
                            "id": "1340596"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1049491/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/19972.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/19972.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/19972.jpg"
                            },
                            "name": "米歇尔·威廉姆斯",
                            "id": "1049491"
                        }
                    ],
                    "collect_count": 131603,
                    "original_title": "Manchester by the Sea",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1027514/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/20335.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/20335.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/20335.jpg"
                            },
                            "name": "肯尼思·洛纳根",
                            "id": "1027514"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2495066410.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2495066410.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2495066410.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/25980443/",
                    "id": "25980443"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 7.8,
                        "stars": "40",
                        "min": 0
                    },
                    "genres": [
                        "动作",
                        "犯罪",
                        "音乐"
                    ],
                    "title": "极盗车神",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1335176/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1410576603.62.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1410576603.62.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1410576603.62.jpg"
                            },
                            "name": "安塞尔·艾尔高特",
                            "id": "1335176"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1054432/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/5491.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/5491.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/5491.jpg"
                            },
                            "name": "凯文·史派西",
                            "id": "1054432"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1036329/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1374587274.39.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1374587274.39.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1374587274.39.jpg"
                            },
                            "name": "杰米·福克斯",
                            "id": "1036329"
                        }
                    ],
                    "collect_count": 2874,
                    "original_title": "Baby Driver",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1002716/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/40583.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/40583.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/40583.jpg"
                            },
                            "name": "埃德加·赖特",
                            "id": "1002716"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2493236321.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2493236321.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2493236321.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/25933890/",
                    "id": "25933890"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 6.7,
                        "stars": "35",
                        "min": 0
                    },
                    "genres": [
                        "动作",
                        "科幻",
                        "冒险"
                    ],
                    "title": "星际特工：千星之城",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1317646/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/40783.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/40783.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/40783.jpg"
                            },
                            "name": "戴恩·德哈恩",
                            "id": "1317646"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1326177/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1365676042.23.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1365676042.23.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1365676042.23.jpg"
                            },
                            "name": "卡拉·迪瓦伊",
                            "id": "1326177"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1025147/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/5321.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/5321.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/5321.jpg"
                            },
                            "name": "克里夫·欧文",
                            "id": "1025147"
                        }
                    ],
                    "collect_count": 1378,
                    "original_title": "Valérian and the City of a Thousand Planets",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1031876/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/33301.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/33301.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/33301.jpg"
                            },
                            "name": "吕克·贝松",
                            "id": "1031876"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2494316209.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2494316209.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2494316209.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/11502973/",
                    "id": "11502973"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 7,
                        "stars": "35",
                        "min": 0
                    },
                    "genres": [
                        "喜剧",
                        "动画",
                        "冒险"
                    ],
                    "title": "赛车总动员3：极速挑战",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1006964/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/2059.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/2059.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/2059.jpg"
                            },
                            "name": "欧文·威尔逊",
                            "id": "1006964"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1252170/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1502089218.9.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1502089218.9.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1502089218.9.jpg"
                            },
                            "name": "克里斯黛拉·阿朗索",
                            "id": "1252170"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1009288/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/2378.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/2378.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/2378.jpg"
                            },
                            "name": "克里斯·库珀",
                            "id": "1009288"
                        }
                    ],
                    "collect_count": 695,
                    "original_title": "Cars 3",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1370154/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1489128648.71.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1489128648.71.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1489128648.71.jpg"
                            },
                            "name": "布莱恩·菲",
                            "id": "1370154"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2492869476.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2492869476.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2492869476.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/25849480/",
                    "id": "25849480"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "喜剧",
                        "爱情"
                    ],
                    "title": "天生不对",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1274366/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/55133.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/55133.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/55133.jpg"
                            },
                            "name": "周渝民",
                            "id": "1274366"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1023827/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/48497.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/48497.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/48497.jpg"
                            },
                            "name": "薛凯琪",
                            "id": "1023827"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1032940/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1398052268.11.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1398052268.11.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1398052268.11.jpg"
                            },
                            "name": "郑中基",
                            "id": "1032940"
                        }
                    ],
                    "collect_count": 26,
                    "original_title": "天生不对",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1025526/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1387511001.02.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1387511001.02.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1387511001.02.jpg"
                            },
                            "name": "谷德昭",
                            "id": "1025526"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2494709675.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2494709675.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2494709675.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26696871/",
                    "id": "26696871"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "喜剧",
                        "爱情",
                        "奇幻"
                    ],
                    "title": "二次初恋",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1041734/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/49237.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/49237.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/49237.jpg"
                            },
                            "name": "朱茵",
                            "id": "1041734"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1326549/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1359690025.23.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1359690025.23.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1359690025.23.jpg"
                            },
                            "name": "杜天皓",
                            "id": "1326549"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1337438/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1389617411.02.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1389617411.02.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1389617411.02.jpg"
                            },
                            "name": "黄征",
                            "id": "1337438"
                        }
                    ],
                    "collect_count": 7,
                    "original_title": "二次初恋",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1328542/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1367549379.37.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1367549379.37.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1367549379.37.jpg"
                            },
                            "name": "戴玮",
                            "id": "1328542"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2494180720.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2494180720.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2494180720.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/27040349/",
                    "id": "27040349"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "喜剧",
                        "爱情"
                    ],
                    "title": "泡菜爱上小龙虾",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1275610/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1387773287.54.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1387773287.54.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1387773287.54.jpg"
                            },
                            "name": "金起范",
                            "id": "1275610"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1334544/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1415793375.92.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1415793375.92.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1415793375.92.jpg"
                            },
                            "name": "徐申东",
                            "id": "1334544"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1050240/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/3250.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/3250.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/3250.jpg"
                            },
                            "name": "元华",
                            "id": "1050240"
                        }
                    ],
                    "collect_count": 6,
                    "original_title": "泡菜爱上小龙虾",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1333304/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1492870407.78.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1492870407.78.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1492870407.78.jpg"
                            },
                            "name": "虞军豪",
                            "id": "1333304"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2492669016.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2492669016.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2492669016.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26425435/",
                    "id": "26425435"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "爱情"
                    ],
                    "title": "阿婆的槟榔",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1276893/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/43970.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/43970.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/43970.jpg"
                            },
                            "name": "艾丽娅",
                            "id": "1276893"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1341771/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1477220227.45.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1477220227.45.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1477220227.45.jpg"
                            },
                            "name": "郭月",
                            "id": "1341771"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1378159/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                            },
                            "name": "王尉",
                            "id": "1378159"
                        }
                    ],
                    "collect_count": 1,
                    "original_title": "阿婆的槟榔",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1353455/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1501242310.0.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1501242310.0.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1501242310.0.jpg"
                            },
                            "name": "江流",
                            "id": "1353455"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2494321059.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2494321059.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2494321059.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/27099258/",
                    "id": "27099258"
                }
            ],
            "title": "即将上映的电影"
        }
    }])
})(angular)