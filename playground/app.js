const multiplier = {
    numbers : [1, 3, 5, 7],
    multiply(x){
        return this.numbers.map((number) => number*x);
    },consoleLogger(){
        console.log(this.numbers);
    }
};


console.log(multiplier.multiply(2));


/*let contacts = [{
    id: 1,
    name: 'Sherlock',
    address : '21B Baker Street',
    category : 'Detective',
    phone: '221 221 221'
}, {
    id: 2,
    name: 'Watson',
    address : '21B Baker Street',
    category : 'Assistant',
    phone: '332 333 331'
}];*/

let contacts = [
    {
        "name": "Delia Haley",
        "username": "Jarrett65",
        "email": "Royce_Satterfield81@hotmail.com",
        "address": {
            "streetA": "Ima Trace",
            "streetB": "65594 Jacobs Heights",
            "streetC": "21830 Hoeger Dam Apt. 145",
            "streetD": "Suite 691",
            "city": "Bergnaumtown",
            "state": "Idaho",
            "country": "Cyprus",
            "zipcode": "89870",
            "geo": {
                "lat": "61.8544",
                "lng": "144.5820"
            }
        },
        "phone": "169.578.9837",
        "website": "johnny.net",
        "company": {
            "name": "Sporer Group",
            "catchPhrase": "Synchronised discrete neural-net",
            "bs": "ubiquitous matrix users"
        },
        "posts": [
            {
                "words": "facilis et incidunt",
                "sentence": "Aut mollitia perferendis delectus.",
                "sentences": "Expedita non eum illum id. Est nobis libero.",
                "paragraph": "Alias saepe quibusdam ut. Cum ipsa voluptatem ex animi est laboriosam minus. Quia aperiam ut. Esse ut molestias repudiandae alias et vero eos. Voluptas aut maxime."
            },
            {
                "words": "vero perferendis consectetur",
                "sentence": "Tempora rerum officiis.",
                "sentences": "Fuga et qui. Placeat facere quisquam consectetur facere. Rem quibusdam ipsa. Ex qui esse consequuntur eos amet aut modi. Voluptatem dolorem unde voluptatibus facere beatae quod sed. Qui expedita tempora minima.",
                "paragraph": "Assumenda fugit voluptatem nobis velit harum velit et distinctio. Esse maiores molestiae necessitatibus. Magnam ipsum distinctio voluptatem cumque quo. Consequuntur rem reiciendis et et qui ipsa vel."
            },
            {
                "words": "ad eum ut",
                "sentence": "Libero qui et et debitis tempora.",
                "sentences": "Veritatis aspernatur quod consequatur aut nihil quia. Nisi quia consequuntur sequi.",
                "paragraph": "Rerum illo at sapiente asperiores non temporibus quaerat. Rerum numquam cumque. Placeat minus doloribus quia nihil. Non beatae corporis voluptas minus voluptate rerum non."
            }
        ],
        "accountHistory": [
            {
                "amount": "159.47",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Schroeder Inc",
                "name": "Checking Account 5685",
                "type": "invoice",
                "account": "82828308"
            },
            {
                "amount": "790.90",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Lakin Inc",
                "name": "Checking Account 3795",
                "type": "withdrawal",
                "account": "38841193"
            },
            {
                "amount": "923.86",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Bode, Konopelski and Rowe",
                "name": "Savings Account 3712",
                "type": "deposit",
                "account": "30745252"
            }
        ]
    },
    {
        "name": "Erin Bailey",
        "username": "Noah76",
        "email": "Felicita_Gerlach47@hotmail.com",
        "address": {
            "streetA": "Bauch Throughway",
            "streetB": "65836 Sydni Ford",
            "streetC": "700 Goldner Greens Apt. 821",
            "streetD": "Apt. 231",
            "city": "North Sophie",
            "state": "California",
            "country": "Slovakia (Slovak Republic)",
            "zipcode": "56957",
            "geo": {
                "lat": "-58.2607",
                "lng": "166.3207"
            }
        },
        "phone": "869-754-6598 x3300",
        "website": "johan.info",
        "company": {
            "name": "Quigley, Ryan and Batz",
            "catchPhrase": "Face to face tangible initiative",
            "bs": "rich grow mindshare"
        },
        "posts": [
            {
                "words": "labore enim error",
                "sentence": "Suscipit itaque et sit accusantium.",
                "sentences": "Modi quaerat ducimus. Impedit similique quo delectus et. Odit dolorum aut provident blanditiis minima sed. Fugit aut natus dignissimos magnam. Laborum non voluptas.",
                "paragraph": "Ut quaerat culpa repellat. Debitis unde et assumenda sit autem voluptas enim excepturi. Modi doloribus sit fugit et molestias. Et quia cumque qui quia."
            },
            {
                "words": "exercitationem id amet",
                "sentence": "Consequatur quia unde.",
                "sentences": "Hic ab culpa atque. Et mollitia numquam laborum. Sint rem inventore consequuntur odio. Mollitia qui neque dolorem commodi ut voluptatem alias alias sequi. Consequatur odio error nulla ipsum inventore voluptatem magni.",
                "paragraph": "Nesciunt magni corrupti cumque sint possimus voluptatem est. Esse sit fugiat quae cupiditate dolores inventore rerum incidunt. Ea error quaerat quasi tempore perferendis aut sunt. Saepe et doloribus aliquam. Provident odio officiis. At facilis temporibus id expedita quibusdam doloribus."
            },
            {
                "words": "aliquam occaecati sit",
                "sentence": "Iure numquam eum quo molestiae voluptatem quasi mollitia.",
                "sentences": "Eligendi non in non eos sapiente aut accusamus. Nisi laboriosam id ea dolor. Rerum voluptate natus id ipsum nobis. Et occaecati vel modi. Quos impedit voluptas doloremque architecto delectus soluta culpa consequuntur id. Quod voluptas ut.",
                "paragraph": "Nemo nisi sint et enim qui numquam itaque. Voluptatibus cumque illo repellat ab voluptatibus. Rerum temporibus aut qui mollitia quas."
            }
        ],
        "accountHistory": [
            {
                "amount": "61.69",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Heller and Sons",
                "name": "Personal Loan Account 7552",
                "type": "payment",
                "account": "58399690"
            },
            {
                "amount": "42.42",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Hamill - McGlynn",
                "name": "Credit Card Account 9286",
                "type": "payment",
                "account": "34815898"
            },
            {
                "amount": "65.52",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Kilback, Carter and Ernser",
                "name": "Investment Account 0354",
                "type": "invoice",
                "account": "85747770"
            }
        ]
    },
    {
        "name": "Cole Thompson",
        "username": "Gay21",
        "email": "Ciara.Anderson78@yahoo.com",
        "address": {
            "streetA": "Brown Drives",
            "streetB": "7200 Paucek Greens",
            "streetC": "411 Breitenberg Road Apt. 494",
            "streetD": "Apt. 971",
            "city": "Kayahaven",
            "state": "West Virginia",
            "country": "Aruba",
            "zipcode": "54462-9112",
            "geo": {
                "lat": "56.0596",
                "lng": "158.8467"
            }
        },
        "phone": "(475) 695-6658",
        "website": "mattie.org",
        "company": {
            "name": "Klein, Hansen and Hettinger",
            "catchPhrase": "Total zero tolerance encoding",
            "bs": "24/7 scale platforms"
        },
        "posts": [
            {
                "words": "voluptatem quia aut",
                "sentence": "Amet nemo quo sit nemo quis.",
                "sentences": "Est quaerat minus cumque magnam neque doloribus est. Laboriosam odit enim ratione labore labore omnis reprehenderit voluptatibus omnis. Id et cumque esse est repellendus cumque aut rerum molestias. Sit officiis dolor ea qui dolor mollitia facere.",
                "paragraph": "Vero dicta tempore delectus temporibus est iste aspernatur est. Illo et sint dolor similique. Iusto suscipit sunt doloremque ut et eius sit voluptatum."
            },
            {
                "words": "aut at minus",
                "sentence": "Sapiente aperiam ipsa ut eveniet dolores.",
                "sentences": "Odio unde occaecati aut quo a aliquid. Maiores sed beatae quam eos. Dolor modi dicta. Eveniet vel et repellat. Delectus ab voluptas distinctio illo. Neque quam sunt.",
                "paragraph": "Aut inventore qui sint sit necessitatibus a quaerat ratione. Aut eos accusamus cupiditate sit qui dolor ratione consequatur voluptas. Modi voluptatem vel eveniet est. Eos ab vel est aspernatur aut voluptates. Omnis et voluptatum nemo."
            },
            {
                "words": "mollitia vel a",
                "sentence": "Aperiam unde totam laboriosam excepturi qui numquam autem non.",
                "sentences": "Placeat quia aut at aut ut aut rerum. Earum aut necessitatibus omnis debitis autem aliquid est. Labore in sit qui ea dolorum excepturi perferendis laudantium atque. Vero neque qui aut.",
                "paragraph": "Adipisci commodi asperiores id totam sequi facere natus. Nesciunt harum pariatur ad qui aut aut exercitationem consectetur. Id laborum consequatur iste. Nostrum ut possimus totam et maiores nobis qui. Eos quia ea quis temporibus ab cupiditate."
            }
        ],
        "accountHistory": [
            {
                "amount": "811.37",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Johnston and Sons",
                "name": "Credit Card Account 7621",
                "type": "withdrawal",
                "account": "23110788"
            },
            {
                "amount": "996.72",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "O'Conner - Harber",
                "name": "Personal Loan Account 6908",
                "type": "deposit",
                "account": "53950758"
            },
            {
                "amount": "855.61",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Frami Group",
                "name": "Auto Loan Account 6231",
                "type": "invoice",
                "account": "02978110"
            }
        ]
    },
    {
        "name": "Mrs. Kasandra Effertz",
        "username": "Woodrow_Kohler",
        "email": "Meaghan.Strosin@yahoo.com",
        "address": {
            "streetA": "Blanche Square",
            "streetB": "53038 Davis Place",
            "streetC": "946 Alberto Forges Suite 929",
            "streetD": "Apt. 452",
            "city": "Boydchester",
            "state": "Iowa",
            "country": "French Southern Territories",
            "zipcode": "58913",
            "geo": {
                "lat": "-85.9211",
                "lng": "-115.0426"
            }
        },
        "phone": "(563) 393-5285 x0460",
        "website": "mathew.info",
        "company": {
            "name": "Bradtke - Boehm",
            "catchPhrase": "Decentralized needs-based data-warehouse",
            "bs": "transparent incubate models"
        },
        "posts": [
            {
                "words": "voluptatem ullam quae",
                "sentence": "Quod vitae incidunt quibusdam perferendis ducimus.",
                "sentences": "Quod sed deleniti. Est facilis sed laudantium ipsa minus pariatur ratione doloribus ut. Quod minima molestias dolorum asperiores. Quia laborum harum adipisci cumque eligendi praesentium accusantium eum. Voluptates molestias veniam qui tempora illo qui quidem. Nobis iste aperiam.",
                "paragraph": "Ea iusto et quasi cumque porro commodi earum commodi. Harum tempora repellat. Velit aut ad et. Praesentium exercitationem placeat minima."
            },
            {
                "words": "porro perspiciatis praesentium",
                "sentence": "Est nesciunt cupiditate ducimus asperiores dolorem vel quod ipsam.",
                "sentences": "Eos molestiae quae sit id nemo aliquid rerum. Nostrum aut iste iure ab. Eos est explicabo temporibus et sed harum. Corrupti sequi sequi qui magni voluptate qui et. In aut a. Neque expedita dolor saepe magnam maiores ipsam ea maiores doloribus.",
                "paragraph": "Est error non quasi. Earum quia ut consequuntur autem aut omnis minima nesciunt est. Veritatis corporis nostrum beatae nam eos. Repudiandae eveniet non et consequatur quod soluta. Consequatur vitae non ipsam eos voluptas inventore omnis."
            },
            {
                "words": "ipsam aut quas",
                "sentence": "Impedit odit nisi occaecati sed voluptatibus.",
                "sentences": "Incidunt consequatur facilis alias est voluptatem. Et est quia ut ipsam fuga dolorem inventore eum adipisci. Atque qui sed quos voluptas quos quo et et placeat. Deserunt vitae iure commodi neque vel.",
                "paragraph": "Sequi dolores esse non sequi est sed. Ratione vel quia incidunt voluptates molestiae quae sit nihil hic. Cumque excepturi animi qui quaerat. Nisi repellendus nulla quibusdam voluptatibus."
            }
        ],
        "accountHistory": [
            {
                "amount": "538.99",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Kessler, Douglas and Russel",
                "name": "Money Market Account 7242",
                "type": "deposit",
                "account": "74534479"
            },
            {
                "amount": "780.54",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Quitzon Inc",
                "name": "Checking Account 1312",
                "type": "invoice",
                "account": "74558996"
            },
            {
                "amount": "764.79",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Bechtelar - Bernhard",
                "name": "Credit Card Account 8628",
                "type": "withdrawal",
                "account": "00191697"
            }
        ]
    },
    {
        "name": "Leora Weissnat",
        "username": "Napoleon.Heathcote92",
        "email": "Arturo.Gaylord@hotmail.com",
        "address": {
            "streetA": "Waelchi Passage",
            "streetB": "3948 Carlotta Vista",
            "streetC": "69993 Leannon Walk Apt. 867",
            "streetD": "Suite 977",
            "city": "Lake Alison",
            "state": "South Carolina",
            "country": "Cayman Islands",
            "zipcode": "09334-1191",
            "geo": {
                "lat": "46.5674",
                "lng": "-127.6229"
            }
        },
        "phone": "1-839-972-9951 x102",
        "website": "camryn.name",
        "company": {
            "name": "Lueilwitz - Blanda",
            "catchPhrase": "Inverse interactive emulation",
            "bs": "granular unleash web services"
        },
        "posts": [
            {
                "words": "quibusdam possimus qui",
                "sentence": "Asperiores similique perferendis dolor.",
                "sentences": "Iusto doloribus enim sapiente perferendis. Alias deserunt placeat soluta vitae natus voluptatum. Porro qui sapiente corrupti cumque veniam aspernatur dolores. Iste cupiditate et ducimus id excepturi molestiae voluptatem doloremque placeat. Non molestiae possimus et quia et atque.",
                "paragraph": "Et sed odit ipsum aut voluptates. Magnam itaque aut adipisci. Quo quaerat cumque aperiam excepturi non. Eveniet sit necessitatibus ipsa ea."
            },
            {
                "words": "aut voluptas cupiditate",
                "sentence": "Ducimus sequi inventore.",
                "sentences": "Adipisci dolorem consequatur aut sed quas ea. Eius fugit est fugit eum. Voluptatem cumque est quia voluptatem sed qui.",
                "paragraph": "Placeat quae consequatur et asperiores et ducimus officia. Ratione rerum nesciunt eius aut praesentium sunt sit aperiam. Qui impedit molestias. Dolores ipsum maiores est et qui beatae fugiat. Rem quod totam quia voluptatum odio autem beatae."
            },
            {
                "words": "labore quis at",
                "sentence": "Provident ut sit rerum tempora asperiores esse.",
                "sentences": "Similique earum voluptatem dolorem et. Totam dolorem repellat impedit cupiditate eos harum.",
                "paragraph": "Magni eos id sequi asperiores nulla et. Animi tenetur et neque ducimus harum vel repellat ex. Quos debitis quisquam ea corporis optio reprehenderit provident ipsam. Voluptas ut rerum enim porro totam consequatur sit labore vel."
            }
        ],
        "accountHistory": [
            {
                "amount": "925.44",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Pfannerstill, Barrows and Veum",
                "name": "Savings Account 4344",
                "type": "invoice",
                "account": "68438232"
            },
            {
                "amount": "557.11",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Kunde, Von and Franecki",
                "name": "Auto Loan Account 9425",
                "type": "withdrawal",
                "account": "82373910"
            },
            {
                "amount": "815.99",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Williamson LLC",
                "name": "Personal Loan Account 9027",
                "type": "payment",
                "account": "52204874"
            }
        ]
    },
    {
        "name": "Marty Mills",
        "username": "Jody.Jast26",
        "email": "Dayton25@yahoo.com",
        "address": {
            "streetA": "Gerry Brook",
            "streetB": "86874 Vaughn Island",
            "streetC": "5607 Lewis Tunnel Apt. 251",
            "streetD": "Apt. 628",
            "city": "West Cordie",
            "state": "Arkansas",
            "country": "Malawi",
            "zipcode": "87776-9019",
            "geo": {
                "lat": "60.4748",
                "lng": "4.0022"
            }
        },
        "phone": "(095) 702-7089",
        "website": "dan.net",
        "company": {
            "name": "Jakubowski, Leuschke and Reilly",
            "catchPhrase": "Distributed eco-centric access",
            "bs": "B2B enable portals"
        },
        "posts": [
            {
                "words": "sit impedit qui",
                "sentence": "Omnis cumque possimus voluptas harum.",
                "sentences": "Aut saepe non. Voluptas eos et ipsam recusandae ut qui. Voluptates qui fugiat. Reiciendis iusto sapiente iusto ut quas nulla. Molestiae consectetur dolorem sunt consectetur facere. Omnis fuga atque cumque et consequatur voluptatibus cum recusandae consequatur.",
                "paragraph": "Sunt dolores molestiae deleniti nobis iure omnis ea tempora. Omnis dignissimos magnam. Alias qui voluptatum omnis iste quas illo ipsa."
            },
            {
                "words": "sit voluptas provident",
                "sentence": "Dolorem perferendis libero aut repudiandae voluptates.",
                "sentences": "Voluptas quae sit reprehenderit mollitia vel ut provident aut. Possimus placeat dolorum incidunt soluta blanditiis. Ut non officiis est sit harum dignissimos recusandae eius.",
                "paragraph": "Et eum quam a. Et incidunt enim accusamus. Quisquam magnam tempore libero in et perferendis qui ab. Eaque amet cupiditate id aliquid aliquid animi voluptate. Ut suscipit et quo."
            },
            {
                "words": "architecto quidem quos",
                "sentence": "Quam tempora vero dolor deleniti quia aut.",
                "sentences": "Et tempore corrupti voluptas suscipit. Voluptates voluptatem eius occaecati debitis ipsam. Voluptatem ea excepturi quidem corporis sequi enim adipisci nobis magni. Tenetur quaerat aspernatur qui qui excepturi delectus.",
                "paragraph": "Eaque facere impedit quia voluptas consequatur enim et. A molestiae sed ipsam ad animi suscipit at possimus unde. Suscipit qui dolores dolor blanditiis deleniti dolores ab unde rerum. Rerum natus qui iure quis aut consequuntur ex corrupti. Quam laboriosam repellendus sapiente vel repellendus omnis corrupti nostrum."
            }
        ],
        "accountHistory": [
            {
                "amount": "893.30",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Mayer, Predovic and McKenzie",
                "name": "Savings Account 9995",
                "type": "payment",
                "account": "40861029"
            },
            {
                "amount": "332.44",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Roob - Schroeder",
                "name": "Auto Loan Account 5759",
                "type": "deposit",
                "account": "43476926"
            },
            {
                "amount": "366.65",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Wolf - Torphy",
                "name": "Checking Account 4847",
                "type": "invoice",
                "account": "35380244"
            }
        ]
    },
    {
        "name": "Maybell VonRueden II",
        "username": "Arne66",
        "email": "Maryse51@gmail.com",
        "address": {
            "streetA": "Eichmann Drives",
            "streetB": "72972 Bruen Plaza",
            "streetC": "740 Krystel Forest Apt. 322",
            "streetD": "Suite 724",
            "city": "West Letha",
            "state": "Arizona",
            "country": "Barbados",
            "zipcode": "39358-3003",
            "geo": {
                "lat": "-10.2796",
                "lng": "18.2208"
            }
        },
        "phone": "1-623-745-4539",
        "website": "kimberly.biz",
        "company": {
            "name": "Schaefer, Ankunding and Will",
            "catchPhrase": "Intuitive 5th generation circuit",
            "bs": "leading-edge engage deliverables"
        },
        "posts": [
            {
                "words": "eveniet numquam quia",
                "sentence": "Molestias ut veritatis qui.",
                "sentences": "Unde consequuntur ut. Consequatur autem dolorem labore. Eum tenetur quos omnis. Quae dignissimos at et voluptatem et dolore maxime consequatur dolores. Quidem sit optio aspernatur necessitatibus nisi quibusdam ut quia dolor. Placeat deleniti enim magnam molestiae tenetur quidem.",
                "paragraph": "A cum rerum dolorem expedita laudantium occaecati perferendis aperiam nam. Odio et in quod nobis distinctio labore ad alias iure. A ratione fugit vel eos ipsam ullam blanditiis incidunt amet."
            },
            {
                "words": "et amet ab",
                "sentence": "Voluptatem quasi est dolorem laboriosam culpa sequi asperiores fuga.",
                "sentences": "Et recusandae atque sint tempore est. Vel est et cupiditate doloremque consequuntur aperiam. Fugit ut in facilis expedita quia sit maiores optio aut. Ut est totam aut recusandae repellendus aut quia quo.",
                "paragraph": "Asperiores placeat officiis magni et minus odio. Aliquam molestiae et. Quibusdam sit quae soluta aut quos excepturi natus non."
            },
            {
                "words": "deserunt illo repellendus",
                "sentence": "Repudiandae est sed quia.",
                "sentences": "Dicta aperiam qui sequi vitae est aut vel ratione. Eum nesciunt voluptates consequuntur vel voluptatem pariatur voluptatibus.",
                "paragraph": "Consectetur labore quo eligendi eum reiciendis officiis quam. Recusandae et cumque expedita repudiandae sapiente rerum hic voluptate. Debitis unde distinctio. Voluptas repellendus ipsam et esse sit qui dolor iusto libero."
            }
        ],
        "accountHistory": [
            {
                "amount": "594.38",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Reichel, Aufderhar and Purdy",
                "name": "Credit Card Account 5549",
                "type": "deposit",
                "account": "50427852"
            },
            {
                "amount": "815.82",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Ankunding, Prosacco and Green",
                "name": "Auto Loan Account 4777",
                "type": "invoice",
                "account": "80435434"
            },
            {
                "amount": "197.41",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Goldner and Sons",
                "name": "Savings Account 8295",
                "type": "invoice",
                "account": "28513743"
            }
        ]
    },
    {
        "name": "Crawford Price Jr.",
        "username": "Angeline.Kihn89",
        "email": "Corbin_Hodkiewicz@yahoo.com",
        "address": {
            "streetA": "Bartoletti Burgs",
            "streetB": "08499 Garret Cliff",
            "streetC": "5601 Wilhelmine Tunnel Apt. 878",
            "streetD": "Suite 500",
            "city": "Bauchside",
            "state": "New Mexico",
            "country": "Marshall Islands",
            "zipcode": "29241-8191",
            "geo": {
                "lat": "1.7840",
                "lng": "4.1507"
            }
        },
        "phone": "(401) 230-5471",
        "website": "maya.net",
        "company": {
            "name": "Cremin Group",
            "catchPhrase": "Assimilated modular project",
            "bs": "interactive expedite systems"
        },
        "posts": [
            {
                "words": "aut sapiente rerum",
                "sentence": "Assumenda enim id quos libero ipsam.",
                "sentences": "Consequatur et in consequatur est rerum. Enim et repellat qui.",
                "paragraph": "Aut provident ab dolor autem. Voluptatem aperiam et laborum molestias velit mollitia et. Dignissimos ut doloribus omnis in non. Perspiciatis qui minima enim in fuga. Et vel natus ullam."
            },
            {
                "words": "delectus ut nemo",
                "sentence": "Est aspernatur vel dolorem fugiat aperiam velit tempore non magni.",
                "sentences": "Optio et numquam quis nihil provident eaque quibusdam quis. Error qui alias sint qui. Ad suscipit incidunt tempore et. Numquam sunt nostrum odio iusto voluptatem beatae rerum.",
                "paragraph": "Vel vel nemo. Illo consequuntur sit exercitationem quia iste. Totam iusto sed et voluptatem. Sequi voluptatibus consequuntur temporibus quasi quisquam est sit. Molestias iure deserunt. Amet voluptas non occaecati inventore esse."
            },
            {
                "words": "dolore dolores sed",
                "sentence": "Hic et natus recusandae aut at.",
                "sentences": "Et accusantium maiores minus quo molestiae fugiat. Perspiciatis nulla reiciendis dolorum sed aut.",
                "paragraph": "Consequatur illo exercitationem asperiores ut aut. Culpa vel ratione neque ut consequatur repellendus voluptatem laboriosam. Iusto quia maxime officia ex perferendis sunt."
            }
        ],
        "accountHistory": [
            {
                "amount": "954.19",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Jaskolski, Legros and Bins",
                "name": "Checking Account 8760",
                "type": "payment",
                "account": "60368470"
            },
            {
                "amount": "524.84",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Bashirian LLC",
                "name": "Auto Loan Account 4102",
                "type": "payment",
                "account": "22636363"
            },
            {
                "amount": "878.76",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Hickle and Sons",
                "name": "Credit Card Account 2269",
                "type": "deposit",
                "account": "69619453"
            }
        ]
    },
    {
        "name": "Hattie Prosacco",
        "username": "Barrett.Rogahn29",
        "email": "Rubie.Rosenbaum@hotmail.com",
        "address": {
            "streetA": "Nader Course",
            "streetB": "66212 Reinger Plaza",
            "streetC": "47458 Einar Canyon Apt. 364",
            "streetD": "Suite 644",
            "city": "Bridgetfort",
            "state": "Ohio",
            "country": "Honduras",
            "zipcode": "64682",
            "geo": {
                "lat": "12.4979",
                "lng": "34.8293"
            }
        },
        "phone": "897-012-0998",
        "website": "mason.com",
        "company": {
            "name": "Gottlieb Group",
            "catchPhrase": "Sharable zero administration workforce",
            "bs": "next-generation maximize infomediaries"
        },
        "posts": [
            {
                "words": "cupiditate eum voluptatibus",
                "sentence": "Aperiam voluptatum dolores perspiciatis assumenda.",
                "sentences": "Voluptatem et non porro omnis. Voluptatem maiores optio nisi voluptas eaque aut.",
                "paragraph": "Perferendis dignissimos voluptatem voluptas. Vero vel cupiditate harum quod ullam nulla voluptas occaecati. Deleniti dolores delectus vel et qui. Aliquid veniam et et ratione est. Qui deleniti doloribus vel et quis nostrum aperiam necessitatibus. Inventore consectetur natus autem laboriosam odio modi molestiae."
            },
            {
                "words": "quia voluptas ex",
                "sentence": "Impedit voluptatem ipsam.",
                "sentences": "Totam odit et velit quidem autem. Quasi officia reprehenderit ut consequuntur dolores eum est ab.",
                "paragraph": "Omnis sunt animi deleniti quia sit temporibus enim fugit. Recusandae et magni. Nostrum qui molestias porro iure. Alias ut aliquid officia voluptatem et. Dignissimos aut quae minima voluptatem quis ea temporibus. Modi ipsa voluptatum velit provident amet corrupti."
            },
            {
                "words": "ad nisi excepturi",
                "sentence": "Itaque vitae magnam autem corrupti esse voluptatem id.",
                "sentences": "Rerum omnis repellat necessitatibus ullam non nisi consequatur officiis quia. Beatae voluptas et nihil ratione et. Tempore nihil rem aut fugit et et ut ut velit. Vero modi sed. Nihil explicabo quo quisquam laborum tempora nihil.",
                "paragraph": "Laborum laboriosam illum nihil. Sed eum quibusdam nemo recusandae possimus omnis. Aliquid sint iusto aut autem animi non incidunt delectus laborum. Quia et consequatur culpa sed sit rerum ducimus. Consequuntur est ut amet similique voluptatum a."
            }
        ],
        "accountHistory": [
            {
                "amount": "425.21",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Bernhard and Sons",
                "name": "Money Market Account 9003",
                "type": "payment",
                "account": "90551819"
            },
            {
                "amount": "256.82",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Altenwerth LLC",
                "name": "Savings Account 1497",
                "type": "invoice",
                "account": "89528217"
            },
            {
                "amount": "714.50",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Sawayn Group",
                "name": "Personal Loan Account 7512",
                "type": "payment",
                "account": "28602885"
            }
        ]
    },
    {
        "name": "Shawn Hammes",
        "username": "Miller79",
        "email": "Ozella_Thompson@yahoo.com",
        "address": {
            "streetA": "Reese Via",
            "streetB": "185 Scot Gateway",
            "streetC": "17148 Dickens Neck Suite 747",
            "streetD": "Suite 405",
            "city": "Lake Casperside",
            "state": "Michigan",
            "country": "Montserrat",
            "zipcode": "01761-3323",
            "geo": {
                "lat": "83.1534",
                "lng": "-112.6946"
            }
        },
        "phone": "1-284-486-6601 x6412",
        "website": "lily.name",
        "company": {
            "name": "Crona - Rohan",
            "catchPhrase": "Automated regional extranet",
            "bs": "efficient synergize paradigms"
        },
        "posts": [
            {
                "words": "reprehenderit aut laborum",
                "sentence": "Doloribus odio vitae dolore.",
                "sentences": "Inventore quos repellat unde molestiae. Hic unde non laborum illo enim odit vel iste.",
                "paragraph": "Dolorem numquam minima esse animi et cupiditate. Autem ullam distinctio ipsa fugiat vel. Laborum labore qui et culpa perspiciatis necessitatibus iure. Blanditiis eos ea beatae. Consequatur iure quia accusantium dolorem quibusdam eaque. Totam fugiat necessitatibus praesentium dolores corrupti."
            },
            {
                "words": "ut ut temporibus",
                "sentence": "Sed inventore eaque eveniet.",
                "sentences": "Est et tenetur qui ut. Voluptas non excepturi aut aliquid itaque occaecati laborum maiores. Aspernatur iure occaecati. Debitis explicabo omnis quidem ullam. Repudiandae voluptatem veritatis dolor minima reprehenderit repudiandae. Non vitae qui recusandae.",
                "paragraph": "Doloribus id perferendis odio. Rem eos sint pariatur. Quae labore qui modi. Quia dolorem amet commodi earum quas. Laudantium et sed debitis quidem et eligendi. Officiis consequuntur quod quia dolor ex eos amet quia quod."
            },
            {
                "words": "voluptas sed ut",
                "sentence": "Cumque omnis expedita exercitationem debitis et incidunt nihil quos.",
                "sentences": "Et rerum labore voluptatum eveniet dolor debitis quo. Placeat rem repellendus omnis saepe in sed amet perferendis qui. Velit enim asperiores velit fugiat placeat. Dignissimos quo laudantium error consectetur laboriosam voluptas et quia. Consequatur aut et consequuntur dolorem cum. Cupiditate perferendis laboriosam.",
                "paragraph": "Soluta eos ut optio vel neque. Consequatur rerum expedita eius cum veniam aperiam sed ut vitae. Consectetur velit voluptas tempore est doloremque vitae culpa consectetur sed. Hic ipsum minima quasi. Eum dolore voluptatem est consequatur amet placeat quo."
            }
        ],
        "accountHistory": [
            {
                "amount": "819.61",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Homenick LLC",
                "name": "Investment Account 8154",
                "type": "invoice",
                "account": "36223167"
            },
            {
                "amount": "568.90",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "O'Hara Inc",
                "name": "Savings Account 9339",
                "type": "invoice",
                "account": "67305628"
            },
            {
                "amount": "638.35",
                "date": "2012-02-01T18:30:00.000Z",
                "business": "Simonis and Sons",
                "name": "Investment Account 0599",
                "type": "payment",
                "account": "88602906"
            }
        ]
    }
];

/*class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Contact List</h2>
                <br />
                <ContactList contacts={this.props.contacts} />
            </div>
        )
    }
}

class Contact extends React.Component {
    render() {
        return (
            <li>{this.props.contact.name} {this.props.contact.username} {this.props.contact.phone} {this.props.contact.address.city}</li>
        )
    }
}

class ContactList extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    // Passing in event to allow access to whatevever is typed into the textbox
    updateSearch(event) {
        this.setState({
            // Limit to 10 characters only for search
            search: event.target.value.substr(0, 10)
        });
           console.log(this.state.search); // this will show the previous value of state.
    }

    render() {
        //  Note: below part where map is the juice where iteration is done. Passing bind will let updateSearch function to access this.state.search
        let filteredContacts = this.props.contacts.filter(
            (contact) => {
                //Use includes looks cleaner and should be easier to remember.
                //return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                return contact.name.toLowerCase().includes(this.state.search.toLowerCase());
            }
        );

        return (
            <div>
                <input className="text" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                <hr />
                <ul>
                    {filteredContacts.map((contact) => {
                        return <Contact contact={contact} />
                    })}
                </ul>
            </div>
        )
    }
}

*/


// ReactDOM.render(<App contacts={contacts} />, document.getElementById('container'));