// ================================================
// POPTalk – All Movie & Series Data (Accurate Info)
// Each section has ONLY its own OTT content
// ================================================

export const MOVIES_DATA = {

    // ========================
    // TALK OF THE TOWN – 2026 Movies Only
    // ========================
    talkOfTown: [
        // Add posterDropDate / teaserDropDate (YYYY-MM-DD) to auto-prioritize fresh drops on Home.
        // Add releaseDate (YYYY-MM-DD) when released; it will auto-hide from Talk and move to Library pages.
        {
            id:"ramayana-part-1-2027", title:"Ramayana: Part 1", year:2027, type:"Movie",
            poster:"https://image.tmdb.org/t/p/w600_and_h900_face/8AeC8vEGElGBZBOfOuDFdcNXhI2.jpg",
            backdrop:"https://ui-avatars.com/api/?name=Ramayana&background=0b0b0d&color=f5c518&size=1400&bold=true",
            posterDropDate:"2026-04-10",
            talkBadge:"Manual",
            rating:"N/A", imdb:"N/A", rt:"N/A",
            genre:["Mythology","Drama","Adventure"], director:"Nitesh Tiwari",
            cast:[
                {name:"Ranbir Kapoor",role:"Rama",img:"",wiki:"https://en.wikipedia.org/wiki/Ranbir_Kapoor"},
                {name:"Sai Pallavi",role:"Sita",img:"",wiki:"https://en.wikipedia.org/wiki/Sai_Pallavi"},
                {name:"Yash",role:"Ravana",img:"",wiki:"https://en.wikipedia.org/wiki/Yash_(actor)"}
            ],
            overview:"Ramayana: Part 1 is an upcoming Indian epic mythological drama adaptation based on the Ramayana.",
            country:"India", language:"Hindi", ageRating:"UA", duration:"TBA",
            platform:["Theatrical"], trailer:"",
            wiki:"https://en.wikipedia.org/wiki/Ramayana_(upcoming_film)",
            vibes:{drama:30,adventure:25,epic:30,mythology:15}
        },
        {
            id:"varanasi-2027", title:"Varanasi", year:2027, type:"Movie",
            poster:"https://i.ytimg.com/vi/GFCvD76qwPA/maxresdefault.jpg",
            backdrop:"https://i.ytimg.com/vi/GFCvD76qwPA/maxresdefault.jpg",
            teaserDropDate:"2025-11-18",
            talkBadge:"Manual",
            rating:"N/A", imdb:"N/A", rt:"N/A",
            genre:["Adventure","Action","Drama"], director:"S. S. Rajamouli",
            cast:[
                {name:"Mahesh Babu",role:"Lead",img:"",wiki:"https://en.wikipedia.org/wiki/Mahesh_Babu"},
                {name:"Priyanka Chopra",role:"Lead",img:"",wiki:"https://en.wikipedia.org/wiki/Priyanka_Chopra"}
            ],
            overview:"Varanasi is an upcoming Indian epic action-adventure film directed by S. S. Rajamouli and expected in 2027.",
            country:"India", language:"Telugu, Hindi", ageRating:"UA", duration:"TBA",
            platform:["Theatrical"], trailer:"https://www.youtube.com/watch?v=GFCvD76qwPA",
            wiki:"https://en.wikipedia.org/wiki/SSMB29",
            vibes:{adventure:35,action:35,drama:30}
        },
        {
            id:"toxic-2026", title:"Toxic: A Fairy Tale for Grown-Ups", year:2026, type:"Movie",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/oXMNPP4rRPFSdXysjOmjGTIPvJZ.jpg",
            backdrop:"https://media.themoviedb.org/t/p/w600_and_h900_face/oXMNPP4rRPFSdXysjOmjGTIPvJZ.jpg",
            rating:"N/A", imdb:"N/A", rt:"N/A",
            genre:["Action","Thriller","Drama"], director:"Geetu Mohandas",
            cast:[
                {name:"Yash",role:"Raya/Ticket",img:"https://media.themoviedb.org/t/p/w600_and_h900_face/es8St0vl9otL1XAAZJKYmNpL3Wy.jpg",wiki:"https://en.wikipedia.org/wiki/Yash_(actor)"},
                {name:"Kiara Advani",role:"Nadia",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/zEhXyCvmttj9pQOXgNpO2deqtWD.jpg",wiki:"https://en.wikipedia.org/wiki/Kiara_Advani"},
                {name:"Nayanthara",role:"Ganga",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/5KubBeb2DkNXoU4lzzBdWzqzzlM.jpg",wiki:"https://en.wikipedia.org/wiki/Nayanthara"},
                {name:"Huma Qureshi",role:"Elizabeth",img:"https://media.themoviedb.org/t/p/w600_and_h900_face/nJWauZQdRjMJxwY3UP4SXrqh9CM.jpg",wiki:"https://en.wikipedia.org/wiki/Huma_Qureshi"},
                {name:"Sudev Nair",role:"Karmadi",img:"https://media.themoviedb.org/t/p/w600_and_h900_face/6x111KVuthpPOGJYTvdXLmh3J3p.jpg",wiki:"https://en.wikipedia.org/wiki/Sudev_Nair"}
            ],
            overview:"Toxic: A Fairy Tale for Grown-Ups is an upcoming Indian Kannada-language action thriller directed by Geetu Mohandas, starring Yash. The film explores the dark drug trade underworld set against the backdrop of Goa.",
            country:"India", language:"Kannada", ageRating:"UA", duration:"TBA",
            platform:["Theatrical"], trailer:"https://youtu.be/zjlCyAibeWg?si=bozF2V24xbg_H2Z_", wiki:"https://en.wikipedia.org/wiki/Toxic_(upcoming_film)",
            vibes:{action:40,thriller:30,drama:20,mystery:10}
        },                                                                                                                                
        {
            id:"bhooth-bangla-2026", title:"Bhooth Bangla", year:2026, type:"Movie",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/ArIS4vwUxdhm3j7tsTHmffdfU8W.jpg",
            backdrop:"", rating:"N/A", imdb:"N/A", rt:"N/A",
            genre:["Horror","Comedy"], director:"Anees Bazmee",
            cast:[{name:"Akshay Kumar",role:"Lead",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Akshay_Kumar_promoting_Tenu_Leke_%28cropped%29.jpg/440px-Akshay_Kumar_promoting_Tenu_Leke_%28cropped%29.jpg",wiki:"https://en.wikipedia.org/wiki/Akshay_Kumar"}],
            overview:"Bhooth Bangla is an upcoming 2026 Indian Hindi-language horror comedy film directed by Anees Bazmee, starring Akshay Kumar.",
            country:"India", language:"Hindi", ageRating:"UA", duration:"TBA",
            platform:["Theatrical"], trailer:"", wiki:"https://en.wikipedia.org/wiki/Bhooth_Bangla",
            vibes:{horror:35,comedy:40,thriller:25}
        },
        {
            id:"wuthering-heights-2026", title:"Wuthering Heights", year:2026, type:"Movie",
            poster:"https://www.themoviedb.org/t/p/w1280/ywRO5dyE8RyyXJd6cvd69jLZeic.jpg",
            backdrop:"", rating:"N/A", imdb:"N/A", rt:"N/A",
            genre:["Drama","Romance","Gothic"], director:"Emerald Fennell",
            cast:[
                {name:"Margot Robbie",role:"Catherine Earnshaw",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Margot_Robbie_%2828601016915%29_%28cropped%29.jpg/440px-Margot_Robbie_%2828601016915%29_%28cropped%29.jpg",wiki:"https://en.wikipedia.org/wiki/Margot_Robbie"},
                {name:"Jacob Elordi",role:"Heathcliff",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Jacob_Elordi_2023.jpg/440px-Jacob_Elordi_2023.jpg",wiki:"https://en.wikipedia.org/wiki/Jacob_Elordi"}
            ],
            overview:"Wuthering Heights is an upcoming 2026 gothic romance directed by Emerald Fennell, based on Emily Brontë's classic novel. Starring Margot Robbie and Jacob Elordi.",
            country:"UK/USA", language:"English", ageRating:"R", duration:"TBA",
            platform:["Theatrical"], trailer:"", wiki:"https://en.wikipedia.org/wiki/Wuthering_Heights_(2026_film)",
            vibes:{romance:40,drama:35,gothic:25}
        },
        
        {
            id:"kennedy", 
            title:"Kennedy", year:2026, type:"Movie",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/oi8PrMckw1zOrkfVxwo0o6h7I27.jpg",
            backdrop:"", rating:"N/A", imdb:"N/A", rt:"N/A",
            genre:["Crime","Thriller","Drama"], director:"Aditya Dhar",
            cast:[
                {name:"Rahul Bhat",role:"Kennedy",img:"",wiki:"https://en.wikipedia.org/wiki/Rahul_Bhat"},
                {name:"Sunny Leone",role:"Charlie",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Sunny_Leone_at_Ragini_MMS_2_promotions.jpg/440px-Sunny_Leone_at_Ragini_MMS_2_promotions.jpg",wiki:"https://en.wikipedia.org/wiki/Sunny_Leone"}
            ],
            overview:"Kennedy is an Indian Hindi-language crime thriller directed by Anurag Kashyap. A disgraced ex-cop works the night shift in Mumbai's dark underworld.",
            country:"India", language:"Hindi", ageRating:"A", duration:"148m",
            platform:["Theatrical"], trailer:"", wiki:"https://en.wikipedia.org/wiki/Kennedy_(film)",
            vibes:{crime:40,thriller:35,drama:25}
        },
        
        {
        id: "One Piece Live Action Sesion 2",
        title: "One Piece Into the Grand Line",
        year: 2026, type: "Show",
        poster: "https://media.themoviedb.org/t/p/w116_and_h174_face/ghEXtJkHZw4ye1wA0PwxKFFJU7r.jpg",
        backdrop: "https://media.themoviedb.org/t/p/w116_and_h174_face/ghEXtJkHZw4ye1wA0PwxKFFJU7r.jpg",
        rating: "N/A", imdb: "N/A", rt: "N/A",
        genre: ["Action", "Adventure", "Fantasy"], director: "Matt Owens",
        cast:[{name:"Iñaki Godoy", role:"Monkey D. Luffy", img:"https://media.themoviedb.org/t/p/w276_and_h350_face/93Z6KuFpqoDD1xN5kuswYQzbWe6.jpg", wiki:"https://en.wikipedia.org/wiki/I%C3%B1aki_Godoy"},
              {name:"Mackenyu", role:"Roronoa Zoro", img:"https://media.themoviedb.org/t/p/w276_and_h350_face/bacZSFemex2oUexBccrbIksGxGz.jpg", wiki:"https://en.wikipedia.org/wiki/Mackenyu"},
              {name:"Emily Rudd", role:"Nami", img:"https://media.themoviedb.org/t/p/w276_and_h350_face/y23GTdDPcryBVtSWjY9q2O9nzwV.jpg", wiki:"https://en.wikipedia.org/wiki/Emily_Rudd"},
              {name:"Jacob Romero Gibson", role:"Usopp", img:"https://media.themoviedb.org/t/p/w600_and_h900_face/c6uP24uFslQ3hnEgqPkojAbYuZn.jpg", wiki:"https://en.wikipedia.org/wiki/Jacob_Romero_Gibson"},
              {name:"Taz Skylar", role:"Sanji", img:"https://media.themoviedb.org/t/p/w600_and_h900_face/3EXMkfzB8EXn3ZJPJvK6OfPWLfz.jpg", wiki:"https://en.wikipedia.org/wiki/Taz_Skylar"},
              {name:"Jeff Ward", role:"Buggy the Clown", img:"https://media.themoviedb.org/t/p/w276_and_h350_face/55Vj8VuALnptdxjJYCH6EdPyR0j.jpg", wiki:"https://en.wikipedia.org/wiki/Jeff_Ward"},
        ],
        overview: "One Piece Live Action is an upcoming television series based on the manga of the same name by Eiichiro Oda. The story follows Monkey D. Luffy and his crew of pirates as they search for the legendary treasure known as 'One Piece' in order to become the Pirate King.",
        country: "USA", language: "English", ageRating: "PG-13", duration: "~45m/ep",
        platform: ["Netflix"], trailer: "https://youtu.be/S-XxKVxZ2fU?si=Ss_XHgrBksZALx0I",
        wiki: "https://en.wikipedia.org/wiki/One_Piece_Live_Action",
        vibes: { action: 40, adventure: 30, fantasy: 30 }
        }
    ],

    // ========================
    // NETFLIX – Highly Rated
    // ========================

    netflix:[
        {
            id:"squid-game", title:"Squid Game", year:2021, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
            backdrop:"https://image.tmdb.org/t/p/original/qw3J9cNeLioOLoR68WX7z79aCdK.jpg",
            rating:"8.0", imdb:"8.0", rt:"95%",
            genre:["Thriller","Drama","Mystery"], director:"Hwang Dong-hyuk",
            cast:[
                {name:"Lee Jung-jae",role:"Seong Gi-hun",img:"https://image.tmdb.org/t/p/w500/lx8oiTXL9lIx78KOXlrlvNfoz43.jpg",wiki:"https://en.wikipedia.org/wiki/Lee_Jung-jae"},
                {name:"Park Hae-soo",role:"Cho Sang-woo",img:"https://image.tmdb.org/t/p/w500/hFt7Cj8sx1VYIwm18lYmq5kS7Pw.jpg",wiki:"https://en.wikipedia.org/wiki/Park_Hae-soo"},
                {name:"Jung Ho-yeon",role:"Kang Sae-byeok",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Jung_Ho-yeon_at_81st_Venice_International_Film_Festival_%28cropped%29.jpg/500px-Jung_Ho-yeon_at_81st_Venice_International_Film_Festival_%28cropped%29.jpg",wiki:"https://en.wikipedia.org/wiki/Jung_Ho-yeon"}
            ],
            overview:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes. 456 contestants, all deeply in debt, risk their lives to play a series of deadly children's games for the chance to win ₩45.6 billion.",
            country:"South Korea", language:"Korean", ageRating:"18+", duration:"~55m/ep",
            platform:["Netflix"], trailer:"https://www.youtube.com/embed/oqxAJKy0ii4",
            wiki:"https://en.wikipedia.org/wiki/Squid_Game",
            seasons:[{name:"Season 1",episodes:9,year:2021},{name:"Season 2",episodes:7,year:2024}],
            vibes:{thriller:40,drama:25,mystery:20,action:15}
        },
        {
            id:"stranger-things", title:"Stranger Things", year:2016, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
            backdrop:"https://image.tmdb.org/t/p/original/56v2KjBlYj3Yl7B6p2W10A7s0CM.jpg",
            rating:"8.7", imdb:"8.7", rt:"96%",
            genre:["Sci-Fi","Horror","Drama"], director:"The Duffer Brothers",
            cast:[
                {name:"Millie Bobby Brown",role:"Eleven",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Millie_Bobby_Brown_by_Gage_Skidmore_2.jpg/440px-Millie_Bobby_Brown_by_Gage_Skidmore_2.jpg",wiki:"https://en.wikipedia.org/wiki/Millie_Bobby_Brown"},
                {name:"Finn Wolfhard",role:"Mike Wheeler",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Finn_Wolfhard_by_Gage_Skidmore.jpg/440px-Finn_Wolfhard_by_Gage_Skidmore.jpg",wiki:"https://en.wikipedia.org/wiki/Finn_Wolfhard"},
                {name:"David Harbour",role:"Jim Hopper",img:"",wiki:"https://en.wikipedia.org/wiki/David_Harbour"},
                {name:"Winona Ryder",role:"Joyce Byers",img:"",wiki:"https://en.wikipedia.org/wiki/Winona_Ryder"}
            ],
            overview:"When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces to get him back. Set in the 1980s in the fictional town of Hawkins, Indiana.",
            country:"USA", language:"English", ageRating:"16+", duration:"~50m/ep",
            platform:["Netflix"], trailer:"https://www.youtube.com/embed/b9EkMc79ZSU",
            wiki:"https://en.wikipedia.org/wiki/Stranger_Things",
            seasons:[{name:"Season 1",episodes:8,year:2016},{name:"Season 2",episodes:9,year:2017},{name:"Season 3",episodes:8,year:2019},{name:"Season 4",episodes:9,year:2022}],
            vibes:{"sci-fi":35,horror:25,drama:20,mystery:20}
        },
        {
            id:"dark", title:"Dark", year:2017, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
            backdrop:"https://image.tmdb.org/t/p/original/3lBDg3i6nn5R2NKFCJ6oKyUo2N5.jpg",
            rating:"8.8", imdb:"8.8", rt:"95%",
            genre:["Sci-Fi","Thriller","Mystery"], director:"Baran bo Odar",
            cast:[{name:"Louis Hofmann",role:"Jonas Kahnwald",img:"",wiki:"https://en.wikipedia.org/wiki/Louis_Hofmann"},{name:"Lisa Vicari",role:"Martha Nielsen",img:"",wiki:"https://en.wikipedia.org/wiki/Lisa_Vicari"}],
            overview:"A family saga with a supernatural twist, set in a German town where the disappearance of two children exposes the relationships among four families. Dark explores the existential implications of time.",
            country:"Germany", language:"German", ageRating:"16+", duration:"~55m/ep",
            platform:["Netflix"], trailer:"https://www.youtube.com/embed/rrwycJ08PSA",
            wiki:"https://en.wikipedia.org/wiki/Dark_(TV_series)",
            seasons:[{name:"Season 1",episodes:10,year:2017},{name:"Season 2",episodes:8,year:2019},{name:"Season 3",episodes:8,year:2020}],
            vibes:{mystery:40,"sci-fi":30,thriller:20,drama:10}
        },
        {
            id:"queens-gambit", title:"The Queen's Gambit", year:2020, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
            backdrop:"", rating:"8.6", imdb:"8.6", rt:"96%",
            genre:["Drama"], director:"Scott Frank",
            cast:[{name:"Anya Taylor-Joy",role:"Beth Harmon",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Anya_Taylor-Joy_by_Patrick_Lovell%2C_January_2019.jpg/440px-Anya_Taylor-Joy_by_Patrick_Lovell%2C_January_2019.jpg",wiki:"https://en.wikipedia.org/wiki/Anya_Taylor-Joy"}],
            overview:"Orphaned at 9, prodigious introvert Beth Harmon discovers and masters chess in 1960s USA. But child stardom comes at a price.",
            country:"USA", language:"English", ageRating:"13+", duration:"~60m/ep",
            platform:["Netflix"], trailer:"https://www.youtube.com/embed/CDrieqwSdgI",
            wiki:"https://en.wikipedia.org/wiki/The_Queen%27s_Gambit_(miniseries)",
            seasons:[{name:"Limited Series",episodes:7,year:2020}],
            vibes:{drama:50,thriller:20,emotion:30}
        },
        {
            id:"wednesday", title:"Wednesday", year:2022, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
            backdrop:"", rating:"8.1", imdb:"8.1", rt:"73%",
            genre:["Comedy","Mystery","Fantasy"], director:"Tim Burton",
            cast:[{name:"Jenna Ortega",role:"Wednesday Addams",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jenna_Ortega_2022_%28cropped%29.jpg/440px-Jenna_Ortega_2022_%28cropped%29.jpg",wiki:"https://en.wikipedia.org/wiki/Jenna_Ortega"}],
            overview:"Wednesday Addams is sent to Nevermore Academy, where she attempts to master her psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents 25 years ago.",
            country:"USA", language:"English", ageRating:"13+", duration:"~48m/ep",
            platform:["Netflix"], trailer:"https://www.youtube.com/embed/Di310WS8zLk",
            wiki:"https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
            seasons:[{name:"Season 1",episodes:8,year:2022}],
            vibes:{mystery:35,comedy:25,fantasy:25,horror:15}
        },
        {
            id:"glass-onion", title:"Glass Onion: A Knives Out Mystery", year:2022, type:"Movie",
            poster:"https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
            backdrop:"", rating:"7.1", imdb:"7.1", rt:"93%",
            genre:["Mystery","Comedy","Crime"], director:"Rian Johnson",
            cast:[{name:"Daniel Craig",role:"Benoit Blanc",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Daniel_Craig_in_2021.jpg/440px-Daniel_Craig_in_2021.jpg",wiki:"https://en.wikipedia.org/wiki/Daniel_Craig"}],
            overview:"Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is put on the case.",
            country:"USA", language:"English", ageRating:"13+", duration:"139m",
            platform:["Netflix"], trailer:"https://www.youtube.com/embed/gj5ibYSz8C0",
            wiki:"https://en.wikipedia.org/wiki/Glass_Onion:_A_Knives_Out_Mystery",
            vibes:{mystery:45,comedy:25,crime:20,drama:10}
        }
    ],
    tollywood:[
        {
            id:"rrr", title:"RRR", year:2022, type:"Movie",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/u0XUBNQWlOvrh0Gd97ARGpIkL0.jpg",
            backdrop:"https://image.tmdb.org/t/p/original/61MrK5U4w4MVL1vfwoG12zYPJ8B.jpg",
            rating:"8.0", imdb:"8.0", rt:"92%",
            genre:["Action","Drama","History"], director:"S. S. Rajamouli",
            cast:[{name:"N. T. Rama Rao Jr.",role:"Alluri Sitarama Raju",img:"https://image.tmdb.org/t/p/w500/9S0zjhNJw6FSAoVZ2LcamL4jlma.jpg",wiki:"https://en.wikipedia.org/wiki/N._T._Rama_Rao_Jr."},{name:"Ram Charan",role:"Komaram Bheem",img:"https://image.tmdb.org/t/p/w500/8O8v9CqUX7Fp1SkD1TxAo7ZgSvA.jpg",wiki:"https://en.wikipedia.org/wiki/Ram_Charan"}],
            overview:"Two legendary revolutionaries fight for their country and their freedom in this epic action drama directed by S. S. Rajamouli.",
            country:"India", language:"Telugu", ageRating:"UA", duration:"182m",
            platform:["Netflix"], trailer:"https://www.youtube.com/watch?v=PGz3hJ_7qJI",
            wiki:"https://en.wikipedia.org/wiki/RRR_(film)", vibes:{action:40,drama:30,history:20}
        },
        {
            id:"pushpa-the-rise", title:"Pushpa: The Rise", year:2021, type:"Movie",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/oaRk2HgOirEeNuDCwwScmq7rKvS.jpg",
            backdrop:"https://image.tmdb.org/t/p/original/3oqmk6mNWPatBKcjOOJLp5WW9zN.jpg",
            rating:"7.2", imdb:"7.2", rt:"83%",
            genre:["Action","Crime","Drama"], director:"Sukumar",
            cast:[{name:"Allu Arjun",role:"Pushpa Raj",img:"https://image.tmdb.org/t/p/w500/5nKYPt6dqSPznpOGe2ZV1YgBYg0.jpg",wiki:"https://en.wikipedia.org/wiki/Allu_Arjun"}],
            overview:"A labourer rises through the ranks of a red sandalwood smuggling gang, but his ambition puts him on a collision path with the police and powerful rivals.",
            country:"India", language:"Telugu", ageRating:"A", duration:"173m",
            platform:["Prime Video"], trailer:"https://www.youtube.com/watch?v=Qmv02Kp1VNs",
            wiki:"https://en.wikipedia.org/wiki/Pushpa:_The_Rise", vibes:{action:45,crime:30,drama:25}
        },
        {
            id:"baahubali-the-beginning", title:"Baahubali: The Beginning", year:2015, type:"Movie",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/9BAjt8nSSms62uOVYn1t3C3dVto.jpg",
            backdrop:"https://image.tmdb.org/t/p/original/vIEuJiIZN9EclAJDmD49F2zUzuX.jpg",
            rating:"8.1", imdb:"8.1", rt:"90%",
            genre:["Action","Drama","Fantasy"], director:"S. S. Rajamouli",
            cast:[{name:"Prabhas",role:"Shivudu",img:"https://image.tmdb.org/t/p/w500/1j8QdR4fRV8BV8Yw4upg1N8Yh4q.jpg",wiki:"https://en.wikipedia.org/wiki/Prabhas"}],
            overview:"A young man discovers his destiny while fighting to save his people and uncover the secrets of his past.",
            country:"India", language:"Telugu", ageRating:"U/A", duration:"159m",
            platform:["Netflix"], trailer:"https://www.youtube.com/watch?v=G62Hb7NxpB0",
            wiki:"https://en.wikipedia.org/wiki/Baahubali:_The_Beginning", vibes:{epic:40,adventure:30,drama:30}
        },
        {
            id:"godsof-dharmapuri", title:"Gods of Dharmapuri", year:2022, type:"Show",
            poster:"https://image.tmdb.org/t/p/w600_and_h900_face/6FzrzCjmxl5DgcNnSm7EwWcPgdO.jpg",
            backdrop:"https://image.tmdb.org/t/p/original/1FHz5G0b4LTVC9vT6B0ICiK9D4R.jpg",
            rating:"8.4", imdb:"8.4", rt:"N/A",
            genre:["Crime","Drama"], director:"Mahi V. Raghav",
            cast:[{name:"Priyadarshi",role:"People",img:"https://image.tmdb.org/t/p/w500/5M5Bs8GmQ0KFrQzV0aGFJp3xc0c.jpg",wiki:"https://en.wikipedia.org/wiki/Priyadarshi"}],
            overview:"A DGP returns to his roots and unravels a violent gang war in a small Telangana town. The series mixes crime, family loyalty and political ambition.",
            country:"India", language:"Telugu", ageRating:"16+", duration:"~40m/ep",
            platform:["Aha"], trailer:"https://www.youtube.com/watch?v=o2KfgA5f4TU",
            wiki:"https://en.wikipedia.org/wiki/Gods_of_Dharmapuri", seasons:[{name:"Season 1",episodes:8,year:2022}], vibes:{crime:45,drama:35,thriller:20}
        }
    ],

    // ========================
    // PRIME VIDEO – Highly Rated
    // ========================
    prime: [
        {
            id:"the-boys", title:"The Boys", year:2019, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
            backdrop:"https://image.tmdb.org/t/p/original/7Ns6tO3aYjppI5bFhyYZurOYGBT.jpg",
            rating:"8.7", imdb:"8.7", rt:"93%",
            genre:["Action","Comedy","Sci-Fi"], director:"Eric Kripke",
            cast:[
                {name:"Karl Urban",role:"Billy Butcher",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Karl_Urban_by_Gage_Skidmore.jpg/440px-Karl_Urban_by_Gage_Skidmore.jpg",wiki:"https://en.wikipedia.org/wiki/Karl_Urban"},
                {name:"Antony Starr",role:"Homelander",img:"",wiki:"https://en.wikipedia.org/wiki/Antony_Starr"},
                {name:"Jack Quaid",role:"Hughie Campbell",img:"",wiki:"https://en.wikipedia.org/wiki/Jack_Quaid"}
            ],
            overview:"Vigilantes set out to take down corrupt superheroes who abuse their superpowers. Set in a universe where superpowered individuals are owned by a powerful corporation, Vought International.",
            country:"USA", language:"English", ageRating:"18+", duration:"~60m/ep",
            platform:["Prime Video"], trailer:"https://www.youtube.com/embed/tcrNsIaQkb4",
            wiki:"https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
            seasons:[{name:"Season 1",episodes:8,year:2019},{name:"Season 2",episodes:8,year:2020},{name:"Season 3",episodes:8,year:2022},{name:"Season 4",episodes:8,year:2024}],
            vibes:{action:35,comedy:25,"sci-fi":20,satire:20}
        },
        {
            id:"mirzapur", title:"Mirzapur", year:2018, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/1rxLUFVrtTo82OxhbDXJDiJVkwL.jpg",
            backdrop:"https://media.themoviedb.org/t/p/w600_and_h900_face/1rxLUFVrtTo82OxhbDXJDiJVkwL.jpg", rating:"8.4", imdb:"8.4", rt:"N/A",
            genre:["Crime","Action","Thriller"], director:"Karan Anshuman",
            cast:[
                {name:"Pankaj Tripathi",role:"Kaleen Bhaiya",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pankaj_Tripathi_in_2019.jpg/440px-Pankaj_Tripathi_in_2019.jpg",wiki:"https://en.wikipedia.org/wiki/Pankaj_Tripathi"},
                {name:"Ali Fazal",role:"Guddu Pandit",img:"",wiki:"https://en.wikipedia.org/wiki/Ali_Fazal"},
                {name:"Divyenndu",role:"Munna Bhaiya",img:"",wiki:"https://en.wikipedia.org/wiki/Divyenndu"}
            ],
            overview:"The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and mafia don of Mirzapur. His son Munna, an unworthy heir, will stop at nothing to inherit his father's legacy.",
            country:"India", language:"Hindi", ageRating:"18+", duration:"~50m/ep",
            platform:["Prime Video"], trailer:"https://youtu.be/WXctqTinq3w?si=JMid5HNSoZhs8A44",
            wiki:"https://www.themoviedb.org/tv/84105-mirzapur",
            seasons:[{name:"Season 1",episodes:9,year:2018},{name:"Season 2",episodes:10,year:2020},{name:"Season 3",episodes:10,year:2024}],
            vibes:{crime:40,action:30,thriller:20,drama:10}
        },
        {
            id:"fallout", title:"Fallout", year:2024, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/c15BtJxCXMrISLVmysdsnZUPQft.jpg",
            backdrop:"https://media.themoviedb.org/t/p/w600_and_h900_face/c15BtJxCXMrISLVmysdsnZUPQft.jpg", rating:"8.5", imdb:"8.5", rt:"94%",
            genre:["Sci-Fi","Action","Adventure"], director:"Jonathan Nolan",
            cast:[{name:"Ella Purnell",role:"Lucy MacLean",img:"",wiki:"https://en.wikipedia.org/wiki/Ella_Purnell"},{name:"Walton Goggins",role:"The Ghoul",img:"",wiki:"https://en.wikipedia.org/wiki/Walton_Goggins"}],
            overview:"In a future post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, extract resources, and make allies.",
            country:"USA", language:"English", ageRating:"18+", duration:"~60m/ep",
            platform:["Prime Video"], trailer:"https://www.youtube.com/embed/V-mugKDQDlg",
            wiki:"https://en.wikipedia.org/wiki/Fallout_(TV_series)",
            seasons:[{name:"Season 1",episodes:8,year:2024}],
            vibes:{"sci-fi":35,action:30,adventure:20,drama:15}
        },
        {
            id:"invincible", title:"Invincible", year:2021, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/yDWJYRAwMNKbIYT8ZB33qy84uzO.jpg",
            backdrop:"https://image.tmdb.org/t/p/w500/yDWJYRAwMNKbIYT8ZB33qy84uzO.jpg", rating:"8.7", imdb:"8.7", rt:"98%",
            genre:["Animation","Action","Superhero"], director:"Robert Kirkman",
            cast:[{name:"Steven Yeun",role:"Mark Grayson (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Steven_Yeun"},{name:"J.K. Simmons",role:"Nolan Grayson (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/J._K._Simmons"}],
            overview:"Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his 17th birthday, Mark begins to develop powers of his own.",
            country:"USA", language:"English", ageRating:"18+", duration:"~45m/ep",
            platform:["Prime Video"], trailer:"https://www.youtube.com/embed/-bfAVpuko5o",
            wiki:"https://en.wikipedia.org/wiki/Invincible_(TV_series)",
            seasons:[{name:"Season 1",episodes:8,year:2021},{name:"Season 2",episodes:8,year:2023}],
            vibes:{action:40,superhero:25,drama:20,violence:15}
        },
        {
            id:"reacher", title:"Reacher", year:2022, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/31GlRQMiDunO8cl3NxTz34U64rf.jpg",
            backdrop:"https://media.themoviedb.org/t/p/w600_and_h900_face/31GlRQMiDunO8cl3NxTz34U64rf.jpg", rating:"8.1", imdb:"8.1", rt:"92%",
            genre:["Action","Crime","Thriller"], director:"Nick Santora",
            cast:[{name:"Alan Ritchson",role:"Jack Reacher",img:"",wiki:"https://en.wikipedia.org/wiki/Alan_Ritchson"}],
            overview:"When retired Military Police Officer Jack Reacher is arrested for a murder he did not commit, he finds himself in the middle of a deadly conspiracy full of dirty cops and scheming politicians.",
            country:"USA", language:"English", ageRating:"18+", duration:"~50m/ep",
            platform:["Prime Video"], trailer:"https://www.youtube.com/embed/GSycMV-_Csw",
            wiki:"https://en.wikipedia.org/wiki/Reacher_(TV_series)",
            seasons:[{name:"Season 1",episodes:8,year:2022},{name:"Season 2",episodes:8,year:2023}],
            vibes:{action:45,thriller:30,crime:25}
        },
        {
            id:"panchayat", title:"Panchayat", year:2020, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/cPPhduQk1eX0MAE2JDaQRh3UZB5.jpg",
            backdrop:"https://media.themoviedb.org/t/p/w600_and_h900_face/cPPhduQk1eX0MAE2JDaQRh3UZB5.jpg", rating:"8.9", imdb:"8.9", rt:"N/A",
            genre:["Comedy","Drama","Slice of Life"], director:"Deepak Kumar Mishra",
            cast:[{name:"Jitendra Kumar",role:"Abhishek Tripathi",img:"",wiki:"https://en.wikipedia.org/wiki/Jitendra_Kumar"},{name:"Neena Gupta",role:"Manju Devi",img:"",wiki:"https://en.wikipedia.org/wiki/Neena_Gupta"},{name:"Raghubir Yadav",role:"Brij Bhushan Dubey",img:"",wiki:"https://en.wikipedia.org/wiki/Raghubir_Yadav"}],
            overview:"An engineering graduate, Abhishek, is unable to find a fitting job and in desperation joins as secretary of a panchayat office in a remote village of Uttar Pradesh. He struggles to adjust to village life.",
            country:"India", language:"Hindi", ageRating:"U", duration:"~35m/ep",
            platform:["Prime Video"], trailer:"",
            wiki:"https://en.wikipedia.org/wiki/Panchayat_(TV_series)",
            seasons:[{name:"Season 1",episodes:8,year:2020},{name:"Season 2",episodes:8,year:2022},{name:"Season 3",episodes:8,year:2024}],
            vibes:{comedy:45,drama:30,"slice of life":25}
        }
    ],

    // ========================
    // CRUNCHYROLL – Top Anime
    // ========================
    crunchyroll: [
        
        {
            id:"jujutsu-kaisen", title:"Jujutsu Kaisen", year:2020, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/hFWP5HkbVEe40hrXgtCeQxoccHE.jpg",
            backdrop:"", rating:"8.6", imdb:"8.6", rt:"100%",
            genre:["Action","Fantasy","Supernatural"], director:"Gege Akutami (Creator)",
            cast:[{name:"Junya Enoki",role:"Yuji Itadori (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Junya_Enoki"},{name:"Yuichi Nakamura",role:"Satoru Gojo (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Yuichi_Nakamura_(voice_actor)"}],
            overview:"A boy swallows a cursed talisman – the finger of a demon – and becomes cursed himself. He enters a shaman school to be able to locate the demon's other body parts and exorcise himself.",
            country:"Japan", language:"Japanese", ageRating:"16+", duration:"~24m/ep",
            platform:["Crunchyroll"], trailer:"https://www.youtube.com/embed/4A_X-Dvl0ws",
            wiki:"https://en.wikipedia.org/wiki/Jujutsu_Kaisen_(TV_series)",
            seasons:[{name:"Season 1",episodes:24,year:2020},{name:"Season 2",episodes:23,year:2023}],
            vibes:{action:45,supernatural:25,fantasy:20,drama:10}
        },
        {
            id:"demon-slayer", title:"Demon Slayer", year:2019, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
            backdrop:"", rating:"8.7", imdb:"8.7", rt:"100%",
            genre:["Action","Fantasy","Adventure"], director:"Koyoharu Gotouge (Creator)",
            cast:[{name:"Natsuki Hanae",role:"Tanjiro Kamado (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Natsuki_Hanae"}],
            overview:"A family is attacked by demons and only two members survive — Tanjiro and his sister Nezuko, who is slowly turning into a demon. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
            country:"Japan", language:"Japanese", ageRating:"16+", duration:"~24m/ep",
            platform:["Crunchyroll"], trailer:"https://www.youtube.com/embed/VQGCKyvzIM4",
            wiki:"https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba",
            seasons:[{name:"Season 1",episodes:26,year:2019},{name:"Mugen Train",episodes:7,year:2021},{name:"Entertainment District",episodes:11,year:2021},{name:"Swordsmith Village",episodes:11,year:2023}],
            vibes:{action:40,fantasy:30,adventure:20,emotion:10}
        },
        {
            id:"one-piece", title:"One Piece", year:1999, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
            backdrop:"", rating:"8.9", imdb:"8.9", rt:"N/A",
            genre:["Action","Adventure","Comedy"], director:"Eiichiro Oda (Creator)",
            cast:[{name:"Mayumi Tanaka",role:"Monkey D. Luffy (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Mayumi_Tanaka"}],
            overview:"Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as 'One Piece.'",
            country:"Japan", language:"Japanese", ageRating:"13+", duration:"~24m/ep",
            platform:["Crunchyroll"], trailer:"https://www.youtube.com/embed/S8_YwFLCh4U",
            wiki:"https://en.wikipedia.org/wiki/One_Piece_(TV_series)",
            vibes:{adventure:40,action:30,comedy:20,fantasy:10}
        },
        {
            id:"solo-leveling", title:"Solo Leveling", year:2024, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg",
            backdrop:"", rating:"8.3", imdb:"8.3", rt:"N/A",
            genre:["Action","Fantasy","Adventure"], director:"Shunsuke Nakashige",
            cast:[{name:"Taito Ban",role:"Sung Jinwoo (voice)",img:"",wiki:""}],
            overview:"In a world where hunters must battle deadly monsters to protect the human race, a notoriously weak hunter named Sung Jinwoo finds himself in a seemingly impossible quest that changes everything.",
            country:"Japan/South Korea", language:"Japanese", ageRating:"16+", duration:"~24m/ep",
            platform:["Crunchyroll"], trailer:"https://www.youtube.com/embed/7NaGCOy3s5M",
            wiki:"https://en.wikipedia.org/wiki/Solo_Leveling",
            seasons:[{name:"Season 1",episodes:12,year:2024},{name:"Season 2",episodes:12,year:2025}],
            vibes:{action:45,fantasy:30,adventure:15,drama:10}
        },
        {
            id:"spy-x-family", title:"Spy x Family", year:2022, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/7NAvPYPAu7MeHwP8E9sn81PqsRh.jpg",
            backdrop:"https://media.themoviedb.org/t/p/w600_and_h900_face/7NAvPYPAu7MeHwP8E9sn81PqsRh.jpg", rating:"8.6", imdb:"8.6", rt:"100%",
            genre:["Action","Comedy","Slice of Life"], director:"Tatsuya Endo (Creator)",
            cast:[{name:"Takuya Eguchi",role:"Loid Forger (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Takuya_Eguchi"}],
            overview:"A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep their true identities hidden.",
            country:"Japan", language:"Japanese, English, Hindi etc", ageRating:"13+", duration:"~24m/ep",
            platform:["Crunchyroll" ,"Netflix", "YouTube", "Prime Video", "Hotstar"], trailer:"https://www.youtube.com/embed/ofXigq9sGM0",
            wiki:"https://en.wikipedia.org/wiki/Spy_%C3%97_Family",
            vibes:{comedy:35,action:25,"slice of life":25,drama:15}
        },
        {
            id:"naruto", title:"Naruto", year:2002, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/xppeysfvDKVx775MFuH8Z9BlpMk.jpg",
            backdrop:"https://image.tmdb.org/t/p/original/x2pWyEgfL0p2gJUzv7i8oAw2OEd.jpg", 
            rating:"8.3", imdb:"8.3", rt:"95%",
            genre:["Action","Adventure","Anime"], director:"Masashi Kishimoto (Creator)",
            cast:[{name:"Junichi Suwabe",role:"Naruto Uzumaki (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Junichi_Suwabe"}],
            overview:"Naruto Uzumaki is a young ninja who seeks recognition and dreams of becoming the Hokage - the leaders of his village. As he trains and battles, he discovers his true power and destiny.",
            country:"Japan", language:"Japanese", ageRating:"13+", duration:"~24m/ep",
            platform:["Crunchyroll"], trailer:"https://www.youtube.com/embed/7aPXP3OuaAU",
            wiki:"https://en.wikipedia.org/wiki/Naruto",
            seasons:[{name:"Season 1",episodes:220,year:2002},{name:"Shippuden",episodes:500,year:2007}],
            vibes:{action:45,adventure:35,fantasy:15,drama:5}
        },
        {
            id:"bleach", title:"Bleach", year:2004, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/5iVUUnE2tgBPypACYNobCKHagfV.jpg",
            backdrop:"https://image.tmdb.org/t/p/original/5HxqpAPGpSVMZNEcGRVH8r2vp3x.jpg", 
            rating:"7.9", imdb:"7.9", rt:"85%",
            genre:["Action","Adventure","Anime"], director:"Tite Kubo (Creator)",
            cast:[{name:"Masakazu Morita",role:"Ichigo Kurosaki (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Masakazu_Morita"}],
            overview:"Ichigo Kurosaki gains the powers of a Soul Reaper and must protect humans from malevolent spirits while defending the Soul Society from even greater threats.",
            country:"Japan", language:"Japanese", ageRating:"13+", duration:"~24m/ep",
            platform:["Crunchyroll"], trailer:"https://www.youtube.com/embed/2SWPChBp7RA",
            wiki:"https://en.wikipedia.org/wiki/Bleach_(manga)",
            seasons:[{name:"Season 1",episodes:109,year:2004},{name:"Soul Society Arc",episodes:63,year:2005}],
            vibes:{action:45,adventure:30,fantasy:20,drama:5}
        },
        {
            id:"my-hero-academia", title:"My Hero Academia", year:2016, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/xTlc93PezcZHMcvmAtPL3cyX0yE.jpg",
            backdrop:"https://image.tmdb.org/t/p/original/yNYe0C269Klt0cEu8wqgvmX8gVf.jpg", 
            rating:"8.1", imdb:"8.1", rt:"97%",
            genre:["Action","Adventure","Superheroes"], director:"Kohei Horikoshi (Creator)",
            cast:[{name:"Daiki Yamashita",role:"Izuku Midoriya (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Daiki_Yamashita"}],
            overview:"In a world where most people have superpowers called Quirks, a powerless boy dreams of becoming a superhero. He gets the chance when the greatest hero chooses him as his successor.",
            country:"Japan", language:"Japanese", ageRating:"13+", duration:"~24m/ep",
            platform:["Crunchyroll"], trailer:"https://www.youtube.com/embed/D4KvgKVwJaA",
            wiki:"https://en.wikipedia.org/wiki/My_Hero_Academia",
            seasons:[{name:"Season 1",episodes:13,year:2016},{name:"Season 2",episodes:25,year:2016}],
            vibes:{action:50,superheroes:30,adventure:15,drama:5}
        }
    ],

    // ========================
    // HOTSTAR – Only Hotstar Content
    // ========================
    hotstar: [

        {
            id:"IT Welcome to Derry", title:"IT: Welcome to Derry", year:2024, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/nyy3BITeIjviv6PFIXtqvc8i6xi.jpg",
            backdrop:"https://media.themoviedb.org/t/p/original/nyy3BITeIjviv6PFIXtqvc8i6xi.jpg", rating:"7.0", imdb:"7.0", rt:"N/A",
            genre:["Horror","Thriller"], director:"Andy Muschietti",
            cast:[
                {name:"Taylour Paige",role:"Charlotte Hanlon",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/KTX1trmIfVa7MFkZmES1MVjl79.jpg",wiki:"https://en.wikipedia.org/wiki/Taylour_Paige"},
                {name:"Jovan Adepo",role:"Leroy Hanlon",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/aJcuEbYru85meNGzM0oSeW3nsd6.jpg",wiki:"https://en.wikipedia.org/wiki/Jovan_Adepo"},
                {name:"Matilda Lawler",role:"Marge Truman",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/uKioAyk7zSyO1BCOs5OQtNB4QNP.jpg",wiki:"https://en.wikipedia.org/wiki/Matilda_Lawler"},
                {name:"Chris Chalk",role:"Dick Hallorann",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/j8IpJkLTAhalh5Q356VNojcIAtx.jpg",wiki:"https://en.wikipedia.org/wiki/Chris_Chalk"},
                {name:"James Remar",role:"General Francis Shaw",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/56LwfMaMge2LmWYI46O6R2Wm0YX.jpg",wiki:"https://en.wikipedia.org/wiki/James_Remar"},
                {name:"Stephen Rider",role:"Hank Grogan",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/tQc7TbCfDawrS0DHiQHxuoVrn4L.jpg",wiki:"https://en.wikipedia.org/wiki/Stephen_Rider"}
            ],
            overview:"In 1962, amid a spate of unexplained disappearances of local children, a group of misfit friends begin to suspect a long-buried ancient evil lurking. As the kids set out to determine what's really going on, a rising unease prompts several townspeople to work together to restore peace – all while a U.S. military operation seeks to exploit Derry for its own objectives.",
            platform:["Hotstar"], trailer:"https://www.youtube.com/embed/9DgMZpTqUe8",
            wiki:"https://en.wikipedia.org/wiki/IT:_Welcome_to_Derry",
            vibes:{horror:60,thriller:30,supernatural:10}
        },  
    

        {
            id:"criminal-justice", title:"Criminal Justice", year:2019, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/eac9ylXW2mazqOI5L50uY9Rvmxr.jpg",
            backdrop:"https://media.themoviedb.org/t/p/original/eac9ylXW2mazqOI5L50uY9Rvmxr.jpg", rating:"8.1", imdb:"8.1", rt:"N/A",
            genre:["Crime","Drama","Thriller"], director:"Tigmanshu Dhulia",
            cast:[
                {name:"Pankaj Tripathi",role:"Madhav Mishra",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/f3Vxz0QB7PHeyPcXrfJX14Xkxnu.jpg",wiki:"https://en.wikipedia.org/wiki/Pankaj_Tripathi"},
                {name:"Vikrant Massey",role:"Aditya Sharma",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/zvpP52P7CtVXYONmvWrH1aOcRTx.jpg",wiki:"https://en.wikipedia.org/wiki/Vikrant_Massey"},
                {name:"Shweta Tripathi",role:"Anu Sharma",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Shweta_Tripathi_Singh_at_LFW_2017_Day_2_%28cropped%29.jpg/440px-Shweta_Tripathi_Singh_at_LFW_2017_Day_2_%28cropped%29.jpg",wiki:"https://en.wikipedia.org/wiki/Shweta_Tripathi"}
            ],
            overview:"Criminal Justice is an Indian legal drama. It follows the story of a young man who becomes the prime suspect in the murder of a woman he had a one-night stand with.",
            country:"India", language:"Hindi", ageRating:"18+", duration:"~45m/ep",
            platform:["Hotstar"], trailer:"",
            wiki:"https://en.wikipedia.org/wiki/Criminal_Justice_(Indian_TV_series)",
            seasons:[{name:"Season 1",episodes:10,year:2019},{name:"Season 2",episodes:8,year:2020},{name:"Season 3",episodes:8,year:2022}],
            vibes:{crime:40,drama:30,thriller:20,legal:10}
        },
        {
            id:"the-night-manager-hotstar", title:"The Night Manager", year:2023, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/1anVoLwguecmFqsNx0Ic8cIzmuW.jpg",
            backdrop:"https://media.themoviedb.org/t/p/w600_and_h900_face/1anVoLwguecmFqsNx0Ic8cIzmuW.jpg", rating:"7.2", imdb:"7.2", rt:"N/A",
            genre:["Thriller","Action","Drama"], director:"Sandeep Modi",
            cast:[
                {name:"Anil Kapoor",role:"Shailendra Rungta",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Anil_Kapoor_at_Lakme_Fashion_Week_2017_Day_5_%28cropped%29.jpg/440px-Anil_Kapoor_at_Lakme_Fashion_Week_2017_Day_5_%28cropped%29.jpg",wiki:"https://en.wikipedia.org/wiki/Anil_Kapoor"},
                {name:"Aditya Roy Kapur",role:"Shaan Sengupta",img:"",wiki:"https://en.wikipedia.org/wiki/Aditya_Roy_Kapur"}
            ],
            overview:"Indian adaptation of John le Carré's novel. A night manager of a hotel is recruited by an intelligence agency to infiltrate an arms dealer's inner circle.",
            country:"India", language:"Hindi", ageRating:"16+", duration:"~50m/ep",
            platform:["Hotstar"], trailer:"",
            wiki:"https://en.wikipedia.org/wiki/The_Night_Manager_(Indian_TV_series)",
            seasons:[{name:"Season 1",episodes:7,year:2023}],
            vibes:{thriller:40,action:25,drama:20,espionage:15}
        },
        {
            id:"kannur-squad", title:"Kannur Squad", year:2023, type:"Movie",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/mGR5OVq4edV7zMicFRdBAWyeCeu.jpg",
            backdrop:"https://media.themoviedb.org/t/p/w600_and_h900_face/mGR5OVq4edV7zMicFRdBAWyeCeu.jpg", rating:"7.6", imdb:"7.6", rt:"N/A",
            genre:["Thriller","Action","Crime"], director:"Roby Varghese Raj",
            cast:[{name:"Mammootty",role:"George Martin IPS",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/c5ewp9XtDIOwK5QWhwA7TD0GzqO.jpg",wiki:"https://en.wikipedia.org/wiki/Mammootty"},
                  {name:"Shine Tom Chacko",role:"S.I. Soman",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Shine_Tom_Chacko_at_LFW_2017_Day_2_%28cropped%29.jpg/440px-Shine_Tom_Chacko_at_LFW_2017_Day_2_%28cropped%29.jpg",wiki:"https://en.wikipedia.org/wiki/Shine_Tom_Chacko"},
                    {name:"Jaffer Idukki",role:"S.I. Biju",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Jaffer_Idukki_at_LFW_2017_Day_2_%28cropped%29.jpg/440px-Jaffer_Idukki_at_LFW_2017_Day_2_%28cropped%29.jpg",wiki:"https://en.wikipedia.org/wiki/Jaffer_Idukki"}
            ],
            overview:"Kannur Squad is a 2023 Indian Malayalam-language action thriller starring Mammootty as a police officer who leads a special squad to solve a series of mysterious murders in North Kerala.",
            country:"India", language:"Malayalam", ageRating:"UA", duration:"142m",
            platform:["Hotstar"], trailer:"",
            wiki:"https://en.wikipedia.org/wiki/Kannur_Squad",
            vibes:{thriller:40,action:35,crime:15,drama:10}
        },
        {
            id:"hyouka", title:"Hyouka", year:2012, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/qoAig2n9LkukqnizytaBtOSwif7.jpg",
            backdrop:"https://media.themoviedb.org/t/p/w600_and_h900_face/qoAig2n9LkukqnizytaBtOSwif7.jpg", rating:"8.0", imdb:"8.0", rt:"N/A",
            genre:["Mystery","Slice of Life","Drama"], director:"Yasuhiro Takemoto",
            cast:[{name:"Yuichi Nakamura",role:"Houtarou Oreki (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Yuichi_Nakamura_(voice_actor)"},
                  {name:"Saori Hayami",role:"Eru Chitanda (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Saori_Hayami"},
                  {name:"Ai Kayano",role:"Satoshi Fukube (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Ai_Kayano"}
            ],
            overview:"Hyouka is a Japanese mystery anime series. Energy-conserving high school student Houtarou Oreki is dragged into the Classic Literature Club by his curious friend Eru Chitanda.",
            country:"Japan", language:"Japanese, Hindi ", ageRating:"13+", duration:"~23m/ep",
            platform:["Hotstar, Crunchyroll"], trailer:"",
            wiki:"https://en.wikipedia.org/wiki/Hyouka",
            seasons:[{name:"Season 1",episodes:22,year:2012}],
            vibes:{mystery:45,"slice of life":30,drama:15,comedy:10}
        },
        {
            id:"great-indian-murder", title:"The Great Indian Murder", year:2022, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/ou4Dal2mFUwcHYC6lmf8SW00NzZ.jpg",
            backdrop:"https://media.themoviedb.org/t/p/w600_and_h900_face/ou4Dal2mFUwcHYC6lmf8SW00NzZ.jpg", rating:"7.0", imdb:"7.0", rt:"N/A",
            genre:["Crime","Thriller","Mystery"], director:"Tigmanshu Dhulia",
            cast:[{name:"Pratik Gandhi",role:"Suraj Yadav",img:"",wiki:"https://en.wikipedia.org/wiki/Pratik_Gandhi"},{name:"Richa Chadha",role:"Sudha Bharadwaj",img:"",wiki:"https://en.wikipedia.org/wiki/Richa_Chadha"}],
            overview:"Based on Vikas Swarup's novel 'Six Suspects', the series follows the murder investigation of the son of India's Home Minister at a farmhouse party.",
            country:"India", language:"Hindi", ageRating:"18+", duration:"~45m/ep",
            platform:["Hotstar"], trailer:"",
            wiki:"https://en.wikipedia.org/wiki/The_Great_Indian_Murder",
            seasons:[{name:"Season 1",episodes:9,year:2022}],
            vibes:{crime:40,thriller:30,mystery:20,drama:10}
        }
    ],

    // ========================
    // LIBRARY ONLY
    // Extra titles for Movies/Series pages and Search.
    // Not rendered on home-page OTT rows.
    // ========================
    libraryOnly: [
        {
            id:"dhurandhar-the-revenge", title:"Dhurandhar: The Revenge of the Shadow", year:2026, type:"Movie",
            releaseDate:"2026-03-21",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/yfikYFZwy3IAq3qvCW77SNZoYI7.jpg",
            backdrop:"", rating:"N/A", imdb:"N/A", rt:"N/A",
            genre:["Crime","Thriller","Drama"], director:"Aditya Dhar",
            cast:[
                {name:"Ranveer Singh",role:"Hamza Ali Mazari",img:"",wiki:"https://en.wikipedia.org/wiki/Ranveer_Singh"},
                {name:"Sanjay Dutt",role:"SP Chaudhary Aslam",img:"",wiki:"https://en.wikipedia.org/wiki/Sanjay_Dutt"},
                {name:"Arjun Rampal",role:"Major Iqbal",img:"",wiki:"https://en.wikipedia.org/wiki/Arjun_Rampal"}
            ],
            overview:"Dhurandhar: The Revenge of the Shadow is an Indian Hindi-language action thriller following a high-stakes conflict of crime and vengeance.",
            country:"India", language:"Hindi", ageRating:"A", duration:"148m",
            platform:["Theatrical"], trailer:"https://youtu.be/CN0lNff-zm0",
            wiki:"https://en.wikipedia.org/wiki/Dhurandhar%3A_The_Revenge",
            vibes:{crime:40,thriller:35,drama:25}
        },
        {
            id:"oppenheimer-2023", title:"Oppenheimer", year:2023, type:"Movie",
            poster:"https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
            backdrop:"", rating:"8.3", imdb:"8.3", rt:"93%",
            genre:["Biography","Drama","History"], director:"Christopher Nolan",
            cast:[
                {name:"Cillian Murphy",role:"J. Robert Oppenheimer",img:"",wiki:"https://en.wikipedia.org/wiki/Cillian_Murphy"},
                {name:"Emily Blunt",role:"Katherine Oppenheimer",img:"",wiki:"https://en.wikipedia.org/wiki/Emily_Blunt"}
            ],
            overview:"The story of J. Robert Oppenheimer and the making of the atomic bomb during World War II.",
            country:"USA", language:"English", ageRating:"R", duration:"180m",
            platform:["Prime Video"], trailer:"https://www.youtube.com/embed/uYPbbksJxIg",
            wiki:"https://en.wikipedia.org/wiki/Oppenheimer_(film)",
            vibes:{drama:40,history:30,biography:20,thriller:10}
        },
        {
            id:"dune-part-two-2024", title:"Dune: Part Two", year:2024, type:"Movie",
            poster:"https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
            backdrop:"", rating:"8.5", imdb:"8.5", rt:"92%",
            genre:["Sci-Fi","Adventure","Drama"], director:"Denis Villeneuve",
            cast:[
                {name:"Timothee Chalamet",role:"Paul Atreides",img:"",wiki:"https://en.wikipedia.org/wiki/Timoth%C3%A9e_Chalamet"},
                {name:"Zendaya",role:"Chani",img:"",wiki:"https://en.wikipedia.org/wiki/Zendaya"}
            ],
            overview:"Paul Atreides unites with the Fremen and seeks revenge against those who destroyed his family.",
            country:"USA", language:"English", ageRating:"PG-13", duration:"166m",
            platform:["Hotstar"], trailer:"https://www.youtube.com/embed/Way9Dexny3w",
            wiki:"https://en.wikipedia.org/wiki/Dune:_Part_Two",
            vibes:{"sci-fi":40,adventure:30,drama:20,action:10}
        },
        {
            id:"killers-of-the-flower-moon", title:"Killers of the Flower Moon", year:2023, type:"Movie",
            poster:"https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
            backdrop:"", rating:"7.6", imdb:"7.6", rt:"93%",
            genre:["Crime","Drama","History"], director:"Martin Scorsese",
            cast:[
                {name:"Leonardo DiCaprio",role:"Ernest Burkhart",img:"",wiki:"https://en.wikipedia.org/wiki/Leonardo_DiCaprio"},
                {name:"Lily Gladstone",role:"Mollie Kyle",img:"",wiki:"https://en.wikipedia.org/wiki/Lily_Gladstone"}
            ],
            overview:"A drama based on the Osage murders in 1920s Oklahoma and the FBI investigation that followed.",
            country:"USA", language:"English", ageRating:"R", duration:"206m",
            platform:["Apple TV+"], trailer:"https://www.youtube.com/embed/EP34Yoxs3FQ",
            wiki:"https://en.wikipedia.org/wiki/Killers_of_the_Flower_Moon_(film)",
            vibes:{crime:35,drama:35,history:20,mystery:10}
        },
        {
            id:"jawan-2023", title:"Jawan", year:2023, type:"Movie",
            poster:"https://image.tmdb.org/t/p/w500/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg",
            backdrop:"", rating:"7.0", imdb:"7.0", rt:"N/A",
            genre:["Action","Thriller","Drama"], director:"Atlee",
            cast:[
                {name:"Shah Rukh Khan",role:"Vikram Rathore/Azad",img:"",wiki:"https://en.wikipedia.org/wiki/Shah_Rukh_Khan"},
                {name:"Nayanthara",role:"Narmada Rai",img:"",wiki:"https://en.wikipedia.org/wiki/Nayanthara"}
            ],
            overview:"A vigilante seeks justice and exposes corruption while balancing personal loss and duty.",
            country:"India", language:"Hindi", ageRating:"UA", duration:"169m",
            platform:["Netflix"], trailer:"https://www.youtube.com/embed/MWOlnZSnXJo",
            wiki:"https://en.wikipedia.org/wiki/Jawan_(film)",
            vibes:{action:45,thriller:25,drama:20,emotion:10}
        },
        {
            id:"john-wick-chapter-4", title:"John Wick: Chapter 4", year:2023, type:"Movie",
            poster:"https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
            backdrop:"", rating:"7.7", imdb:"7.7", rt:"94%",
            genre:["Action","Crime","Thriller"], director:"Chad Stahelski",
            cast:[
                {name:"Keanu Reeves",role:"John Wick",img:"",wiki:"https://en.wikipedia.org/wiki/Keanu_Reeves"},
                {name:"Donnie Yen",role:"Caine",img:"",wiki:"https://en.wikipedia.org/wiki/Donnie_Yen"}
            ],
            overview:"John Wick faces the High Table and fights across the world to win his freedom.",
            country:"USA", language:"English", ageRating:"R", duration:"169m",
            platform:["Prime Video"], trailer:"https://www.youtube.com/embed/qEVUtrk8_B4",
            wiki:"https://en.wikipedia.org/wiki/John_Wick:_Chapter_4",
            vibes:{action:55,crime:20,thriller:20,drama:5}
        },
        {
            id:"breaking-bad", title:"Breaking Bad", year:2008, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
            backdrop:"", rating:"9.5", imdb:"9.5", rt:"96%",
            genre:["Crime","Drama","Thriller"], director:"Vince Gilligan",
            cast:[
                {name:"Bryan Cranston",role:"Walter White",img:"",wiki:"https://en.wikipedia.org/wiki/Bryan_Cranston"},
                {name:"Aaron Paul",role:"Jesse Pinkman",img:"",wiki:"https://en.wikipedia.org/wiki/Aaron_Paul"}
            ],
            overview:"A chemistry teacher diagnosed with cancer turns to meth production with a former student.",
            country:"USA", language:"English", ageRating:"18+", duration:"~47m/ep",
            platform:["Netflix"], trailer:"https://www.youtube.com/embed/HhesaQXLuRY",
            wiki:"https://en.wikipedia.org/wiki/Breaking_Bad",
            seasons:[{name:"Season 1",episodes:7,year:2008},{name:"Season 5",episodes:16,year:2013}],
            vibes:{crime:40,drama:35,thriller:20,dark:5}
        },
        {
            id:"chernobyl-2019", title:"Chernobyl", year:2019, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
            backdrop:"", rating:"9.3", imdb:"9.3", rt:"95%",
            genre:["History","Drama","Thriller"], director:"Johan Renck",
            cast:[
                {name:"Jared Harris",role:"Valery Legasov",img:"",wiki:"https://en.wikipedia.org/wiki/Jared_Harris"},
                {name:"Stellan Skarsgard",role:"Boris Shcherbina",img:"",wiki:"https://en.wikipedia.org/wiki/Stellan_Skarsg%C3%A5rd"}
            ],
            overview:"A dramatization of the 1986 Chernobyl nuclear disaster and the people who sacrificed everything.",
            country:"UK/USA", language:"English", ageRating:"18+", duration:"~60m/ep",
            platform:["HBO","Hotstar"], trailer:"https://www.youtube.com/embed/s9APLXM9Ei8",
            wiki:"https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
            seasons:[{name:"Miniseries",episodes:5,year:2019}],
            vibes:{history:35,drama:30,thriller:25,disaster:10}
        },
        {
            id:"house-of-the-dragon", title:"House of the Dragon", year:2022, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
            backdrop:"", rating:"8.4", imdb:"8.4", rt:"93%",
            genre:["Fantasy","Drama","Action"], director:"Ryan Condal",
            cast:[
                {name:"Emma D'Arcy",role:"Rhaenyra Targaryen",img:"",wiki:"https://en.wikipedia.org/wiki/Emma_D%27Arcy"},
                {name:"Matt Smith",role:"Daemon Targaryen",img:"",wiki:"https://en.wikipedia.org/wiki/Matt_Smith"}
            ],
            overview:"Civil war brews inside House Targaryen about two centuries before the events of Game of Thrones.",
            country:"USA", language:"English", ageRating:"18+", duration:"~60m/ep",
            platform:["HBO","Hotstar"], trailer:"https://www.youtube.com/embed/DotnJ7tTA34",
            wiki:"https://en.wikipedia.org/wiki/House_of_the_Dragon",
            seasons:[{name:"Season 1",episodes:10,year:2022},{name:"Season 2",episodes:8,year:2024}],
            vibes:{fantasy:40,drama:30,action:20,politics:10}
        },
        {
            id:"the-last-of-us", title:"The Last of Us", year:2023, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
            backdrop:"", rating:"8.7", imdb:"8.7", rt:"96%",
            genre:["Drama","Post-Apocalyptic","Thriller"], director:"Craig Mazin",
            cast:[
                {name:"Pedro Pascal",role:"Joel Miller",img:"",wiki:"https://en.wikipedia.org/wiki/Pedro_Pascal"},
                {name:"Bella Ramsey",role:"Ellie",img:"",wiki:"https://en.wikipedia.org/wiki/Bella_Ramsey"}
            ],
            overview:"Joel and Ellie journey across a broken United States after a fungal pandemic destroys civilization.",
            country:"USA", language:"English", ageRating:"18+", duration:"~55m/ep",
            platform:["HBO","Hotstar"], trailer:"https://www.youtube.com/embed/uLtkt8BonwM",
            wiki:"https://en.wikipedia.org/wiki/The_Last_of_Us_(TV_series)",
            seasons:[{name:"Season 1",episodes:9,year:2023}],
            vibes:{drama:40,thriller:25,emotion:25,action:10}
        },
        {
            id:"arcane", title:"Arcane", year:2021, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
            backdrop:"", rating:"9.0", imdb:"9.0", rt:"100%",
            genre:["Animation","Action","Drama"], director:"Christian Linke",
            cast:[
                {name:"Hailee Steinfeld",role:"Vi (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Hailee_Steinfeld"},
                {name:"Ella Purnell",role:"Jinx (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Ella_Purnell"}
            ],
            overview:"Set in Piltover and Zaun, Arcane follows two sisters on opposite sides of a growing conflict.",
            country:"USA/France", language:"English", ageRating:"16+", duration:"~40m/ep",
            platform:["Netflix"], trailer:"https://www.youtube.com/embed/fXmAurh012s",
            wiki:"https://en.wikipedia.org/wiki/Arcane_(TV_series)",
            seasons:[{name:"Season 1",episodes:9,year:2021}],
            vibes:{animation:35,action:25,drama:25,fantasy:15}
        },
        {
            id:"knight-seven-kingdoms-2026", title:"A Knight of the Seven Kingdoms", year:2026, type:"Show",
            poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/k8yARbD9iYn2nRX2HvsopfKDN2r.jpg",
            backdrop:"", rating:"8.8", imdb:"8.8", rt:"85%",
            genre:["Fantasy","Drama","Adventure"], director:"Owen Harris",
            cast:[{name:"Peter Claffey",role:"Ser Duncan the Tall",img:"",wiki:"https://en.wikipedia.org/wiki/Peter_Claffey"},
                  {name:"Dexter Sol Ansell",role:"Ser Arthur Dayne",img:"",wiki:"https://en.wikipedia.org/wiki/Dexter_Sol_Ansell"},
                  {name:"Daniel Ings",role:"Ser Criston Cole",img:"",wiki:"https://en.wikipedia.org/wiki/Daniel_Ings"},
                  {name:"Owen Harris", role:"Director",img:"",wiki:"https://en.wikipedia.org/wiki/Owen_Harris"}
            ],
            overview:"A Knight of the Seven Kingdoms is an upcoming HBO fantasy drama series set in the world of George R.R. Martin's A Song of Ice and Fire. A prequel to Game of Thrones set ~100 years before.",
            country:"USA", language:"English", ageRating:"18+", duration:"~60m/ep",
            platform:["HBO","Hotstar"], trailer:"", wiki:"https://en.wikipedia.org/wiki/A_Knight_of_the_Seven_Kingdoms_(TV_series)",
            seasons:[{name:"Season 1",episodes:6,year:2026}],
            vibes:{fantasy:40,adventure:30,drama:20,action:10}
        },

        {
            id:"IT Chapter 1", title:"IT Chapter 1", year:2017, type:"Movie",
            poster:"https://image.tmdb.org/t/p/w600_and_h900_face/fCKQZkjxD4nkuI27lxit2wXN3Cu.jpg",
            backdrop:"https://image.tmdb.org/t/p/original/fCKQZkjxD4nkuI27lxit2wXN3Cu.jpg", rating:"7.3", imdb:"7.3", rt:"86%",
            genre:["Horror","Thriller"], director:"Andy Muschietti",
            cast:[
                {name:"Bill Skarsgard",role:"Pennywise the Dancing Clown",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/2vwYjYFz2rTgHqU9oXkJqvN8a0.jpg",wiki:"https://en.wikipedia.org/wiki/Bill_Skarsg%C3%A5rd"},
                {name:"Jaeden Martell",role:"Bill Denbrough",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/4q2nnPpH9IuB0A3yBM3jvYhL5a.jpg",wiki:"https://en.wikipedia.org/wiki/Jaeden_Martell"},
                {name:"Sophia Lillis",role:"Beverly Marsh",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/8sTQwSKcXcM1sYj0iKACtYFzH6.jpg",wiki:"https://en.wikipedia.org/wiki/Sophia_Lillis"},
                {name:"Finn Wolfhard",role:"Richie Tozier",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/9MNtHqZzLwM9rjK2YFZqQHjUu.jpg",wiki:"https://en.wikipedia.org/wiki/Finn_Wolfhard"},
                {name:"Chosen Jacobs",role:"Mike Hanlon",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/lZp9qj1nDvJ2UjA4gFhQj5sH6.jpg",wiki:"https://en.wikipedia.org/wiki/Chosen_Jacobs"},
                {name:"Jack Dylan Grazer",role:"Eddie Kaspbrak",img:"https://media.themoviedb.org/t/p/w276_and_h350_face/7qSxLjj2U3tX3sGkMZcHqvYl5a.jpg",wiki:"https://en.wikipedia.org/wiki/Jack_Dylan_Grazer"}
             ],
            overview:"In the town of Derry, a group of bullied kids band together to destroy a shape-shifting monster that preys on children.",
            country:"USA/Canada", language:"English", ageRating:"R", duration:"135m",
            platform:["Prime Video"], trailer:"https://www.youtube.com/embed/x2LSRK2Cm7M",
            wiki:"https://en.wikipedia.org/wiki/It_(2017_film)",
            vibes:{horror:50,thriller:30,supernatural:20}
        },

        {
            id:"attack-on-titan", title:"Attack on Titan", year:2013, type:"Show",
            poster:"https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
            backdrop:"https://image.tmdb.org/t/p/original/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
            rating:"9.1", imdb:"9.1", rt:"95%",
            genre:["Action","Dark Fantasy","Drama"], director:"Tetsuro Araki",
            cast:[
                {name:"Yuki Kaji",role:"Eren Yeager (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Yuki_Kaji"},
                {name:"Yui Ishikawa",role:"Mikasa Ackerman (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Yui_Ishikawa"},
                {name:"Marina Inoue",role:"Armin Arlert (voice)",img:"",wiki:"https://en.wikipedia.org/wiki/Marina_Inoue"}
            ],
            overview:"After his hometown is destroyed and his mother is killed, Eren Yeager vows to wipe out every Titan from the earth. As the truth of the world unfolds, the fight for freedom becomes far more complex.",
            country:"Japan", language:"Japanese", ageRating:"18+", duration:"~24m/ep",
            platform:["Crunchyroll"], trailer:"https://www.youtube.com/embed/MGRm4IzK1SQ",
            wiki:"https://en.wikipedia.org/wiki/Attack_on_Titan",
            seasons:[
                {name:"Season 1",episodes:25,year:2013},
                {name:"Season 2",episodes:12,year:2017},
                {name:"Season 3",episodes:22,year:2018},
                {name:"Season 4",episodes:16,year:2020},
                {name:"Final Season",episodes:29,year:2020}
            ],
            vibes:{action:45,drama:25,mystery:20,fantasy:10}
        },
    ],

    // Sidebar
    mostInterested: [
        {id:"monarch-legacy",title:"Monarch: Legacy of Mo...",date:"27 Feb, 2026",tag:"New Season",interested:"1.3K",poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/781327c5f8c2c4f8e2b5f1c7e3d4a5b6.jpg"},
        {id:"squid-game",title:"Squid Game",date:"Dec 2024",tag:"Season 2",interested:"2.1K",poster:"https://image.tmdb.org/t/p/w200/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg"},
        {id:"knight-seven-kingdoms-2026",title:"A Knight of the Seven...",date:"2026",tag:"New Show",interested:"980",poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/k8yARbD9iYn2nRX2HvsopfKDN2r.jpg"},
        {id:"the-boys",title:"The Boys",date:"2024",tag:"Season 4",interested:"1.8K",poster:"https://media.themoviedb.org/t/p/w600_and_h900_face/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg"},
        {id:"stranger-things",title:"Stranger Things",date:"2025",tag:"Final Season",interested:"3.2K",poster:"https://image.tmdb.org/t/p/w200/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"},
        {id:"solo-leveling",title:"Solo Leveling",date:"2024",tag:"Season 1",interested:"890",poster:"https://image.tmdb.org/t/p/w200/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg"},
        {id:"attack-on-titan",title:"Attack on Titan",date:"Completed",tag:"Classic",interested:"4.5K",poster:"https://image.tmdb.org/t/p/w200/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg"}
    ]
};

const HIDDEN_TALK_OF_TOWN_TITLES = ['kennedy', 'wuthering heights', 'one piece'];
MOVIES_DATA.talkOfTown = MOVIES_DATA.talkOfTown.filter(item => {
    const title = String(item && item.title || '').toLowerCase();
    const id = String(item && item.id || '').toLowerCase();
    return !HIDDEN_TALK_OF_TOWN_TITLES.some(hidden => title.includes(hidden) || id.includes(hidden));
});

// ===== HELPER FUNCTIONS =====
function findMovieById(id){
    for(const sec of ['talkOfTown','netflix','prime','crunchyroll','hotstar','libraryOnly']){
        const list = Array.isArray(MOVIES_DATA[sec]) ? MOVIES_DATA[sec] : [];
        const found=list.find(m=>m.id===id);
        if(found) return found;
    }
    return null;
}

function normalizeCatalogType(rawType){
    const t = String(rawType || '').toLowerCase();
    return (t === 'show' || t === 'series' || t === 'tv') ? 'show' : 'movie';
}

function movieKey(item){
    if(item && item.id) return 'id:' + String(item.id);
    return [
        String(item && item.title || '').toLowerCase().trim(),
        String(item && item.year || '').trim(),
        normalizeCatalogType(item && item.type)
    ].join('|');
}

function dedupeMovieList(list){
    const map = new Map();
    (Array.isArray(list) ? list : []).forEach(item => {
        if(!item) return;
        const key = movieKey(item);
        if(!map.has(key)) map.set(key, item);
    });
    return Array.from(map.values());
}

function parseReleaseTimestamp(rawDate){
    if(!rawDate) return 0;
    const ms = new Date(rawDate).getTime();
    return Number.isNaN(ms) ? 0 : ms;
}

function hasTheatricalPlatform(item){
    const list = Array.isArray(item && item.platform) ? item.platform : [];
    return list.some(p => /theatr|cinema|movie hall|big screen/i.test(String(p || '')));
}

function isReleasedTitle(item, referenceDate = new Date()){
    if(!item || item.keepInTalk === true) return false;
    if(item.forceReleased === true) return true;

    const status = String(item.releaseStatus || item.status || '').toLowerCase().trim();
    const releasedStatuses = ['released', 'complete', 'completed', 'ended', 'streaming', 'in theaters', 'in theatres', 'now playing'];
    if(releasedStatuses.includes(status)) return true;

    const releaseTs = parseReleaseTimestamp(
        item.releaseDate ||
        item.releasedOn ||
        item.release_date ||
        item.theatricalReleaseDate ||
        item.digitalReleaseDate
    );
    if(releaseTs){
        if(hasTheatricalPlatform(item)){
            return releaseTs <= referenceDate.getTime();
        }
        return false;
    }

    return false;
}

function getTalkOfTownActive(referenceDate = new Date()){
    const source = Array.isArray(MOVIES_DATA.talkOfTown) ? MOVIES_DATA.talkOfTown : [];
    return source.filter(item => !isReleasedTitle(item, referenceDate));
}

function getTalkOfTownReleased(referenceDate = new Date()){
    const source = Array.isArray(MOVIES_DATA.talkOfTown) ? MOVIES_DATA.talkOfTown : [];
    return source.filter(item => isReleasedTitle(item, referenceDate));
}

function getLibraryOnlyWithReleasedTalk(referenceDate = new Date()){
    const library = Array.isArray(MOVIES_DATA.libraryOnly) ? MOVIES_DATA.libraryOnly : [];
    const movedFromTalk = getTalkOfTownReleased(referenceDate).map(item => ({...item, movedFromTalkOfTown:true}));
    return dedupeMovieList([...library, ...movedFromTalk]);
}

function getAllMovies(referenceDate = new Date()){
    return dedupeMovieList([
        ...getTalkOfTownActive(referenceDate),
        ...(Array.isArray(MOVIES_DATA.netflix) ? MOVIES_DATA.netflix : []),
        ...(Array.isArray(MOVIES_DATA.prime) ? MOVIES_DATA.prime : []),
        ...(Array.isArray(MOVIES_DATA.crunchyroll) ? MOVIES_DATA.crunchyroll : []),
        ...(Array.isArray(MOVIES_DATA.hotstar) ? MOVIES_DATA.hotstar : []),
        ...(Array.isArray(MOVIES_DATA.tollywood) ? MOVIES_DATA.tollywood : []),
        ...getLibraryOnlyWithReleasedTalk(referenceDate)
    ]);
}

function getMoviesOnly(){
    return getAllMovies().filter(m => (m.type || '').toLowerCase() === 'movie');
}

function getSeriesOnly(){
    return getAllMovies().filter(m => {
        const t = (m.type || '').toLowerCase();
        return t === 'show' || t === 'series';
    });
}

let __ACTOR_INDEX_CACHE = null;

function normalizeActorName(name){
    return String(name || '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
}

function getAllActors(){
    if(__ACTOR_INDEX_CACHE) return __ACTOR_INDEX_CACHE;

    const actorMap = new Map();

    getAllMovies().forEach(movie => {
        (movie.cast || []).forEach(member => {
            const key = normalizeActorName(member.name);
            if(!key) return;

            if(!actorMap.has(key)){
                actorMap.set(key, {
                    key,
                    name: member.name,
                    img: member.img || '',
                    wiki: member.wiki || '',
                    credits: []
                });
            }

            const actor = actorMap.get(key);
            if(!actor.img && member.img) actor.img = member.img;
            if(!actor.wiki && member.wiki) actor.wiki = member.wiki;

            const exists = actor.credits.some(credit => credit.id === movie.id);
            if(exists) return;

            actor.credits.push({
                id: movie.id,
                title: movie.title,
                year: movie.year,
                type: movie.type,
                poster: movie.poster,
                role: member.role || 'Cast',
                platform: Array.isArray(movie.platform) ? movie.platform.slice() : []
            });
        });
    });

    __ACTOR_INDEX_CACHE = Array.from(actorMap.values())
        .map(actor => {
            const credits = actor.credits.slice().sort((a, b) => {
                const yearDiff = (b.year || 0) - (a.year || 0);
                if(yearDiff !== 0) return yearDiff;
                return a.title.localeCompare(b.title);
            });

            const movieCount = credits.filter(credit => (credit.type || '').toLowerCase() === 'movie').length;

            return {
                ...actor,
                credits,
                creditCount: credits.length,
                movieCount,
                seriesCount: credits.length - movieCount
            };
        })
        .sort((a, b) => a.name.localeCompare(b.name));

    return __ACTOR_INDEX_CACHE;
}

function findActorByName(name){
    const key = normalizeActorName(name);
    if(!key) return null;
    return getAllActors().find(actor => actor.key === key) || null;
}

export {
    findMovieById,
    getTalkOfTownActive,
    getTalkOfTownReleased,
    getLibraryOnlyWithReleasedTalk,
    getAllMovies,
    getMoviesOnly,
    getSeriesOnly,
    getAllActors,
    findActorByName,
    normalizeActorName,
    dedupeMovieList
};
