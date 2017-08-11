(function (angular) {
    var mod3=angular.module("mod3",["ngRoute"]);
    mod3.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/in_theaters",{
            templateUrl:"./in_theaters/in_theaters.html",
            controller:"cont3"
        })
    }])
    mod3.controller("cont3",["$scope",function ($scope) {
        $scope.data={
            "count": 20,
            "start": 0,
            "total": 46,
            "subjects": [
                {
                    "rating": {
                        "max": 10,
                        "average": 7.5,
                        "stars": "40",
                        "min": 0
                    },
                    "genres": [
                        "动作"
                    ],
                    "title": "战狼2",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1000525/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/39105.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/39105.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/39105.jpg"
                            },
                            "name": "吴京",
                            "id": "1000525"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1100321/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1415801312.29.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1415801312.29.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1415801312.29.jpg"
                            },
                            "name": "弗兰克·格里罗",
                            "id": "1100321"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1274840/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1401440361.14.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1401440361.14.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1401440361.14.jpg"
                            },
                            "name": "吴刚",
                            "id": "1274840"
                        }
                    ],
                    "collect_count": 284664,
                    "original_title": "战狼2",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1000525/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/39105.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/39105.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/39105.jpg"
                            },
                            "name": "吴京",
                            "id": "1000525"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2485983612.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2485983612.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2485983612.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26363254/",
                    "id": "26363254"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 6,
                        "stars": "30",
                        "min": 0
                    },
                    "genres": [
                        "动作",
                        "犯罪",
                        "悬疑"
                    ],
                    "title": "心理罪",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1007401/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1454644679.84.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1454644679.84.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1454644679.84.jpg"
                            },
                            "name": "廖凡",
                            "id": "1007401"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1314140/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1403196522.98.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1403196522.98.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1403196522.98.jpg"
                            },
                            "name": "李易峰",
                            "id": "1314140"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1315477/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1483453357.64.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1483453357.64.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1483453357.64.jpg"
                            },
                            "name": "万茜",
                            "id": "1315477"
                        }
                    ],
                    "collect_count": 9802,
                    "original_title": "心理罪",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1317475/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1446390191.61.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1446390191.61.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1446390191.61.jpg"
                            },
                            "name": "谢东燊",
                            "id": "1317475"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2492869971.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2492869971.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2492869971.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26698000/",
                    "id": "26698000"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 4.9,
                        "stars": "25",
                        "min": 0
                    },
                    "genres": [
                        "喜剧",
                        "动作",
                        "爱情"
                    ],
                    "title": "鲛珠传",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1341187/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/bA7b3PGSjgMcel_avatar_uploaded1404566496.8.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/bA7b3PGSjgMcel_avatar_uploaded1404566496.8.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/bA7b3PGSjgMcel_avatar_uploaded1404566496.8.jpg"
                            },
                            "name": "王大陆",
                            "id": "1341187"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1353578/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1458201743.67.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1458201743.67.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1458201743.67.jpg"
                            },
                            "name": "张天爱",
                            "id": "1353578"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1031194/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/32971.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/32971.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/32971.jpg"
                            },
                            "name": "任达华",
                            "id": "1031194"
                        }
                    ],
                    "collect_count": 2333,
                    "original_title": "鲛珠传",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1321964/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1497492672.66.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1497492672.66.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1497492672.66.jpg"
                            },
                            "name": "杨磊",
                            "id": "1321964"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2493908018.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2493908018.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2493908018.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/25857966/",
                    "id": "25857966"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 5.8,
                        "stars": "30",
                        "min": 0
                    },
                    "genres": [
                        "动作",
                        "冒险"
                    ],
                    "title": "侠盗联盟",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1054424/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1378956633.91.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1378956633.91.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1378956633.91.jpg"
                            },
                            "name": "刘德华",
                            "id": "1054424"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1138320/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/727.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/727.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/727.jpg"
                            },
                            "name": "舒淇",
                            "id": "1138320"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1016668/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/146.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/146.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/146.jpg"
                            },
                            "name": "张静初",
                            "id": "1016668"
                        }
                    ],
                    "collect_count": 2525,
                    "original_title": "俠盜聯盟",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1023278/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/20775.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/20775.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/20775.jpg"
                            },
                            "name": "冯德伦",
                            "id": "1023278"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2494018217.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2494018217.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2494018217.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/25858758/",
                    "id": "25858758"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 8.2,
                        "stars": "40",
                        "min": 0
                    },
                    "genres": [
                        "纪录片"
                    ],
                    "title": "地球：神奇的一天",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1054531/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/694.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/694.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/694.jpg"
                            },
                            "name": "成龙",
                            "id": "1054531"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1053617/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/543.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/543.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/543.jpg"
                            },
                            "name": "罗伯特·雷德福",
                            "id": "1053617"
                        }
                    ],
                    "collect_count": 554,
                    "original_title": "Earth: One Amazing Day",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1281735/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                            },
                            "name": "理查德·戴尔",
                            "id": "1281735"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1300561/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1499912397.39.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1499912397.39.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1499912397.39.jpg"
                            },
                            "name": "彼得·韦柏 ",
                            "id": "1300561"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1312984/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/14524.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/14524.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/14524.jpg"
                            },
                            "name": "范立欣",
                            "id": "1312984"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2493261459.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2493261459.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2493261459.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26647876/",
                    "id": "26647876"
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
                        "历史"
                    ],
                    "title": "建军大业",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1000572/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/43.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/43.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/43.jpg"
                            },
                            "name": "刘烨",
                            "id": "1000572"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1312699/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1414489207.88.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1414489207.88.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1414489207.88.jpg"
                            },
                            "name": "朱亚文",
                            "id": "1312699"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1255860/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1415028529.74.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1415028529.74.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1415028529.74.jpg"
                            },
                            "name": "黄志忠",
                            "id": "1255860"
                        }
                    ],
                    "collect_count": 231,
                    "original_title": "建军大业",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1106979/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1403267018.07.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1403267018.07.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1403267018.07.jpg"
                            },
                            "name": "刘伟强",
                            "id": "1106979"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2493892158.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2493892158.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2493892158.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26692823/",
                    "id": "26692823"
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
                    "collect_count": 397,
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
                        "average": 7,
                        "stars": "35",
                        "min": 0
                    },
                    "genres": [
                        "喜剧",
                        "动画",
                        "冒险"
                    ],
                    "title": "神偷奶爸3",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1054391/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/15731.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/15731.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/15731.jpg"
                            },
                            "name": "史蒂夫·卡瑞尔",
                            "id": "1054391"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1022588/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/24543.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/24543.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/24543.jpg"
                            },
                            "name": "克里斯汀·韦格",
                            "id": "1022588"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1027229/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/5253.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/5253.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/5253.jpg"
                            },
                            "name": "崔·帕克",
                            "id": "1027229"
                        }
                    ],
                    "collect_count": 88455,
                    "original_title": "Despicable Me 3",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1313385/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/51602.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/51602.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/51602.jpg"
                            },
                            "name": "凯尔·巴尔达",
                            "id": "1313385"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1313061/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1389806916.36.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1389806916.36.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1389806916.36.jpg"
                            },
                            "name": "皮埃尔·科凡",
                            "id": "1313061"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1365884/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1499651172.02.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1499651172.02.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1499651172.02.jpg"
                            },
                            "name": "埃里克·吉伦",
                            "id": "1365884"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2469070974.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2469070974.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2469070974.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/25812712/",
                    "id": "25812712"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 4.2,
                        "stars": "25",
                        "min": 0
                    },
                    "genres": [
                        "爱情",
                        "奇幻"
                    ],
                    "title": "三生三世十里桃花",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1049732/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/38640.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/38640.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/38640.jpg"
                            },
                            "name": "刘亦菲",
                            "id": "1049732"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1276051/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1435567211.65.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1435567211.65.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1435567211.65.jpg"
                            },
                            "name": "杨洋",
                            "id": "1276051"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1276171/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1370330521.5.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1370330521.5.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1370330521.5.jpg"
                            },
                            "name": "罗晋",
                            "id": "1276171"
                        }
                    ],
                    "collect_count": 94132,
                    "original_title": "三生三世十里桃花",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1274347/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/17758.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/17758.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/17758.jpg"
                            },
                            "name": "赵小丁",
                            "id": "1274347"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1289344/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/45049.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/45049.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/45049.jpg"
                            },
                            "name": "安东尼·拉默里纳拉",
                            "id": "1289344"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2494279388.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2494279388.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2494279388.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/25823277/",
                    "id": "25823277"
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
                        "average": 5.5,
                        "stars": "30",
                        "min": 0
                    },
                    "genres": [
                        "喜剧",
                        "动画",
                        "冒险"
                    ],
                    "title": "大耳朵图图之美食狂想曲",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1317642/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/40719.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/40719.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/40719.jpg"
                            },
                            "name": "潘延",
                            "id": "1317642"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1321911/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1501821131.88.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1501821131.88.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1501821131.88.jpg"
                            },
                            "name": "范楚绒",
                            "id": "1321911"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1328393/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1498555461.54.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1498555461.54.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1498555461.54.jpg"
                            },
                            "name": "胡谦",
                            "id": "1328393"
                        }
                    ],
                    "collect_count": 953,
                    "original_title": "大耳朵图图之美食狂想曲",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1327328/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1501821071.66.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1501821071.66.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1501821071.66.jpg"
                            },
                            "name": "速达",
                            "id": "1327328"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2490966346.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2490966346.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2490966346.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/22232939/",
                    "id": "22232939"
                },
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
                    "collect_count": 812,
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
                        "动画",
                        "奇幻",
                        "冒险"
                    ],
                    "title": "玩偶奇兵",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1328395/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1496307914.59.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1496307914.59.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1496307914.59.jpg"
                            },
                            "name": "严丽祯",
                            "id": "1328395"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1326522/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1498555670.36.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1498555670.36.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1498555670.36.jpg"
                            },
                            "name": "李晔",
                            "id": "1326522"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1374803/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1496307969.11.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1496307969.11.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1496307969.11.jpg"
                            },
                            "name": "王衡",
                            "id": "1374803"
                        }
                    ],
                    "collect_count": 372,
                    "original_title": "玩偶奇兵",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1374801/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1496307826.17.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1496307826.17.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1496307826.17.jpg"
                            },
                            "name": "申宇",
                            "id": "1374801"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1336918/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1496307805.39.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1496307805.39.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1496307805.39.jpg"
                            },
                            "name": "黄燕",
                            "id": "1336918"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2492765331.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2492765331.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2492765331.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/27026033/",
                    "id": "27026033"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 6.6,
                        "stars": "35",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "运动"
                    ],
                    "title": "我是马布里",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1173696/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1501554655.02.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1501554655.02.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1501554655.02.jpg"
                            },
                            "name": "斯蒂芬·马布里",
                            "id": "1173696"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1028237/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/28356.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/28356.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/28356.jpg"
                            },
                            "name": "吴尊",
                            "id": "1028237"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1274825/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/21352.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/21352.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/21352.jpg"
                            },
                            "name": "何冰",
                            "id": "1274825"
                        }
                    ],
                    "collect_count": 1927,
                    "original_title": "我是马布里",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1335623/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1382696083.12.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1382696083.12.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1382696083.12.jpg"
                            },
                            "name": "杨子",
                            "id": "1335623"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2494729086.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2494729086.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2494729086.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/25903033/",
                    "id": "25903033"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 7.5,
                        "stars": "40",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "喜剧",
                        "音乐"
                    ],
                    "title": "闪光少女",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1319376/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1433145556.71.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1433145556.71.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1433145556.71.jpg"
                            },
                            "name": "徐璐",
                            "id": "1319376"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1354775/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1498308698.86.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1498308698.86.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1498308698.86.jpg"
                            },
                            "name": "彭昱畅",
                            "id": "1354775"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1375961/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1498314784.03.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1498314784.03.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1498314784.03.jpg"
                            },
                            "name": "刘泳希",
                            "id": "1375961"
                        }
                    ],
                    "collect_count": 28295,
                    "original_title": "闪光少女",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1375966/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1498315140.44.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1498315140.44.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1498315140.44.jpg"
                            },
                            "name": "王冉",
                            "id": "1375966"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2494275431.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2494275431.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2494275431.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26790961/",
                    "id": "26790961"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 7.6,
                        "stars": "40",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "动作",
                        "武侠"
                    ],
                    "title": "绣春刀II：修罗战场",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1077991/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1477225566.41.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1477225566.41.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1477225566.41.jpg"
                            },
                            "name": "张震",
                            "id": "1077991"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1052359/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/37843.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/37843.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/37843.jpg"
                            },
                            "name": "杨幂",
                            "id": "1052359"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1274761/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/25943.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/25943.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/25943.jpg"
                            },
                            "name": "张译",
                            "id": "1274761"
                        }
                    ],
                    "collect_count": 104859,
                    "original_title": "绣春刀II：修罗战场",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1321200/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/50405.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/50405.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/50405.jpg"
                            },
                            "name": "路阳",
                            "id": "1321200"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2492665487.jpg",
                        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2492665487.jpg",
                        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2492665487.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26270502/",
                    "id": "26270502"
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
                        "战争",
                        "动画"
                    ],
                    "title": "大象林旺之一炮成名",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1326029/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1497931434.53.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1497931434.53.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1497931434.53.jpg"
                            },
                            "name": "宋晓宇",
                            "id": "1326029"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1375891/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1497931521.94.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1497931521.94.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1497931521.94.jpg"
                            },
                            "name": "李垚",
                            "id": "1375891"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1375892/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1497931601.49.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1497931601.49.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1497931601.49.jpg"
                            },
                            "name": "徐炜",
                            "id": "1375892"
                        }
                    ],
                    "collect_count": 174,
                    "original_title": "大象林旺之一炮成名",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1375890/",
                            "avatars": {
                                "small": "http://img3.doubanio.com/img/celebrity/small/1498455064.89.jpg",
                                "large": "http://img3.doubanio.com/img/celebrity/large/1498455064.89.jpg",
                                "medium": "http://img3.doubanio.com/img/celebrity/medium/1498455064.89.jpg"
                            },
                            "name": "李涛歌",
                            "id": "1375890"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2493912545.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2493912545.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2493912545.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/27068480/",
                    "id": "27068480"
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
                        "历史",
                        "战争"
                    ],
                    "title": "龙之战",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1274585/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/5612.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/5612.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/5612.jpg"
                            },
                            "name": "刘佩琦",
                            "id": "1274585"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1318973/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1490533079.73.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1490533079.73.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1490533079.73.jpg"
                            },
                            "name": "曹云金",
                            "id": "1318973"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1342748/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/1464930051.83.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/1464930051.83.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/1464930051.83.jpg"
                            },
                            "name": "罗昱焜",
                            "id": "1342748"
                        }
                    ],
                    "collect_count": 849,
                    "original_title": "龙之战",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1319184/",
                            "avatars": {
                                "small": "http://img7.doubanio.com/img/celebrity/small/46010.jpg",
                                "large": "http://img7.doubanio.com/img/celebrity/large/46010.jpg",
                                "medium": "http://img7.doubanio.com/img/celebrity/medium/46010.jpg"
                            },
                            "name": "高峰",
                            "id": "1319184"
                        }
                    ],
                    "year": "2017",
                    "images": {
                        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2495031914.jpg",
                        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2495031914.jpg",
                        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2495031914.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26873799/",
                    "id": "26873799"
                }
            ],
            "title": "正在上映的电影-北京"
        }
    }])
})(angular)