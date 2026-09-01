// Aptis Listening Part 2 — study data
// 12 topics: speaker transcripts, supplied answers, and KEY highlights.
// Source content is kept as provided for the project.
const TOPICS = [
  {
    "id": 1,
    "title": "Protect the environment",
    "speakers": [
      {
        "speaker": "A",
        "text": "I try to help the environment by using less electricity at home. I always turn off the lights when I don't need them and make sure my appliances are energy-efficient. I've also started unplugging things like chargers when I'm not using them because they still use power. This helps lower my electricity bill and reduces my impact on the planet. I believe that if everyone made these small changes, we could save a lot of energy and help fight climate change.",
        "answer": "Using less electricity",
        "highlights": [
          "electricity",
          "turn off the lights",
          "unplugging things like chargers"
        ]
      },
      {
        "speaker": "B",
        "text": "To protect the environment, I don't drive to work anymore. Instead, I walk when the weather is nice, or I take the bus. It's not only better for the planet, but it also keeps me more active, and I enjoy the fresh air. By not driving, I use less fuel and help reduce air pollution in the city. I think if more people chose to walk or use public transport, we could reduce traffic and make our towns and cities cleaner and healthier for everyone.",
        "answer": "Not driving to work",
        "highlights": [
          "don't drive to work anymore",
          "take the bus",
          "By not driving"
        ]
      },
      {
        "speaker": "C",
        "text": "I've decided to shop online as a way to protect the environment. By ordering things online, I don't need to drive to the store, which means I'm using less fuel and producing less pollution. Many companies now offer eco-friendly packaging, and I try to buy from them whenever possible. Also, online deliveries often group items together, which reduces the number of trips made. It's convenient for me, and I feel like I'm doing something good for the environment at the same time.",
        "answer": "Shopping online",
        "highlights": [
          "shop online",
          "ordering things online",
          "online deliveries"
        ]
      },
      {
        "speaker": "D",
        "text": "I try to save water every day as a way to protect the environment. For example, I take shorter showers, turn off the tap while brushing my teeth, and use less water when washing dishes. I've also installed special taps and showerheads that use less water but still work well. Water is a limited resource, and many places don't have enough clean water. That's why I think it's important for all of us to be careful and not waste it. Even small actions can make a big difference.",
        "answer": "Using less water",
        "highlights": [
          "save water",
          "shorter showers",
          "turn off the tap",
          "showerheads"
        ]
      }
    ],
    "distractors": [
      "In a quiet place",
      "Horse riding"
    ]
  },
  {
    "id": 2,
    "title": "Online shopping",
    "speakers": [
      {
        "speaker": "A",
        "text": "The biggest advantage of shopping online for me is the fact that I don't have to leave my house. I love how products get delivered straight to my doorstep, especially when I order something heavy or large. It saves me the hassle of carrying things back from the store. I also like how fast the delivery can be, sometimes arriving the very next day. It makes life so much easier, especially when I have a busy week ahead and can't make it to the shops.",
        "answer": "The products are delivered",
        "highlights": [
          "products get delivered",
          "straight to my doorstep",
          "delivery"
        ]
      },
      {
        "speaker": "B",
        "text": "For me, one of the main reasons I shop online is because it's usually more affordable. I've noticed that many online stores offer discounts and I can often find cheaper prices than I would in physical shops. Plus, I can compare products easily, making sure I'm getting the best deal. I also don't have to spend money on transportation or parking, which adds up in the long run. It's a great way to stick to my budget while still getting everything I need.",
        "answer": "It is cheaper",
        "highlights": [
          "more affordable",
          "discounts",
          "cheaper prices"
        ]
      },
      {
        "speaker": "C",
        "text": "I've always been a bit short on time, especially with my busy work schedule. That's why I prefer shopping online. It really helps me save so much time. Instead of spending hours in stores, I can quickly browse through different websites, compare prices, and make my purchase in just a few clicks. It's so convenient, especially when I need something urgently. I can even shop during my lunch break or late at night. It fits perfectly with my lifestyle, and I don't have to worry about rushing to a store before it closes.",
        "answer": "It saves time",
        "highlights": [
          "short on time",
          "save so much time",
          "quickly browse",
          "few clicks"
        ]
      },
      {
        "speaker": "D",
        "text": "What I love about shopping online is the incredible variety of products available. When I go to a store, I'm limited to what's in stock, but online, there's so much more choice. I can find different brands, styles, and even products that aren't available locally. It's great for finding unique items or hard-to-find sizes. I can spend time browsing until I find exactly what I'm looking for without feeling rushed. It gives me the freedom to explore all my options.",
        "answer": "There are more choices",
        "highlights": [
          "variety of products",
          "more choice",
          "different brands",
          "styles"
        ]
      }
    ],
    "distractors": [
      "While singing",
      "At the seaside"
    ]
  },
  {
    "id": 3,
    "title": "Prefer to study",
    "speakers": [
      {
        "speaker": "A",
        "text": "I've realized that my study environment has a significant impact on my productivity. Changing my study space has really helped me focus better. The library offers a quiet atmosphere that's perfect for serious work, but sometimes, a lively cafe is just what I need for a refreshing change. Being outdoors in a park with fresh air can also clear my mind. Each place keeps my study sessions interesting and engaging.",
        "answer": "At various places",
        "highlights": [
          "Changing my study space",
          "library",
          "cafe",
          "park"
        ]
      },
      {
        "speaker": "B",
        "text": "Finding the right space to study is crucial for effective learning. I usually end up in a quiet room at home or a secluded corner in the library. It's incredible how much I can absorb without distractions. This kind of environment really allows me to think deeply and connect with the material I'm learning.",
        "answer": "In a quiet place",
        "highlights": [
          "quiet room",
          "secluded corner",
          "without distractions"
        ]
      },
      {
        "speaker": "C",
        "text": "I've discovered that the right soundtrack can enhance my study sessions significantly. When I study, having some background music makes a noticeable difference. I tend to choose soft melodies or instrumental tracks that won't distract me. The right music helps maintain my energy and makes long study sessions feel less tedious. It creates a motivating atmosphere that encourages me to keep pushing through.",
        "answer": "With music",
        "highlights": [
          "background music",
          "soft melodies",
          "instrumental tracks"
        ]
      },
      {
        "speaker": "D",
        "text": "Surprisingly, I find that late-night hours work best for my studying. The quietness of the night really helps me concentrate. While others are winding down, I feel more alert and inspired. Those late hours give me a chance to dive deep into my work without interruptions, turning them into my most productive study sessions.",
        "answer": "Late at night",
        "highlights": [
          "late-night hours",
          "quietness of the night",
          "late hours"
        ]
      }
    ],
    "distractors": [
      "Does not use commercial cleaning products",
      "Hate exercising"
    ]
  },
  {
    "id": 4,
    "title": "Listening to music",
    "speakers": [
      {
        "speaker": "A",
        "text": "I like to start my day with music as soon as I wake up. It helps me feel energized and ready for whatever lies ahead. As soon as I get out of bed, I turn on my favorite playlist, which is usually full of upbeat, happy songs. It's like my morning ritual, setting the mood for the day and getting me in a good headspace. Music really helps kick-start my mornings on a positive note.",
        "answer": "After waking up",
        "highlights": [
          "as soon as I wake up",
          "get out of bed",
          "morning ritual"
        ]
      },
      {
        "speaker": "B",
        "text": "For me, music is a must when I'm studying. I know some people find it distracting but I actually concentrate better when there's music playing in the background. I usually pick something without lyrics like instrumental or electronic music. So it doesn't interrupt my thinking. It keeps me focused and helps me stay motivated when I'm working on long assignments or preparing for exams. It's become part of my study routine now.",
        "answer": "While studying",
        "highlights": [
          "when I'm studying",
          "music playing in the background",
          "study routine"
        ]
      },
      {
        "speaker": "C",
        "text": "I've always loved singing. So, I listen to music whenever I feel like practicing my vocals. It's not just about listening for fun. I like to sing along and try to improve my voice. Whether it's pop songs or karaoke tracks, I find it really enjoyable and a great way to express myself. Sometimes, I even record myself to see how I'm doing. It's a fun hobby, and I love exploring new songs and melodies.",
        "answer": "While singing",
        "highlights": [
          "loved singing",
          "practicing my vocals",
          "sing along"
        ]
      },
      {
        "speaker": "D",
        "text": "I've always found music to be the best way to unwind after a long day. I like to listen to music when I want to relax. It helps me switch off from everything, whether I'm lying on the couch or taking a walk in the park. I usually go for something soft and calming like acoustic or classical music. It's my way of de-stressing and escaping from all the noise of everyday life. I just closed my eyes and the music took me away.",
        "answer": "To relax",
        "highlights": [
          "unwind after a long day",
          "when I want to relax",
          "de-stressing"
        ]
      }
    ],
    "distractors": [
      "In the street",
      "Find transport information"
    ]
  },
  {
    "id": 5,
    "title": "Enviroment problem",
    "speakers": [
      {
        "speaker": "A",
        "text": "You know, it amazes me how much we throw away without thinking. I've started giving away my old clothes and furniture instead of dumping them. Think about it-someone else could really use what we consider junk. It's such a simple thing, but it keeps stuff out of landfills and helps people out. The more we share, the less we waste. Why let things rot in a corner when they could have a second life somewhere else? It makes me feel like I'm doing my part, even in small ways. Plus, it's a good reminder that what's old to me could be new to someone else.",
        "answer": "Give away used items",
        "highlights": [
          "giving away my old clothes and furniture",
          "someone else could really use",
          "second life"
        ]
      },
      {
        "speaker": "B",
        "text": "I think one of the biggest ways we can protect the environment is by changing what we buy. I only purchase products that are sustainably sourced or made from recycled materials. Every dollar we spend is like casting a vote for the kind of world we want. It's crazy how much waste and pollution come from manufacturing—choosing eco-friendly products is a way to push back against that. Sure, it might cost a bit more sometimes, but isn't the planet worth it? I mean, we talk a lot about big changes, but if everyone just started small, like switching to biodegradable packaging, we'd see a massive impact.",
        "answer": "Buy environmentally friendly products",
        "highlights": [
          "sustainably sourced",
          "recycled materials",
          "eco-friendly products",
          "biodegradable packaging"
        ]
      },
      {
        "speaker": "C",
        "text": "I've started reusing containers for storing food. I was tired of buying plastic wrap and bags every month, just to toss them after one use. You don't realize how much waste you produce until you try cutting it down. Now, I use glass jars and old containers to store leftovers, and it works just as well. Honestly, it makes me feel a little less guilty about all the plastic in my life. I'm not saying I'm perfect, but even this small habit makes a difference. And let's be real-who needs more clutter in the kitchen, anyway?",
        "answer": "Reuse containers for storing food",
        "highlights": [
          "reusing containers",
          "plastic wrap and bags",
          "glass jars",
          "old containers"
        ]
      },
      {
        "speaker": "D",
        "text": "I stopped buying commercial cleaning products altogether. Most of them are filled with harsh chemicals that are terrible for the environment-and probably for us, too. Now, I make my own cleaning solutions. Vinegar, baking soda, and a little lemon juice can handle pretty much anything around the house. It's cheaper, safer, and I don't feel like I'm dumping toxins down the drain every time I clean. People think it's hard, but honestly, once you try it, it's not that bad. We don't need a cabinet full of chemicals to keep things tidy. Nature's got it covered.",
        "answer": "Does not use commercial cleaning products",
        "highlights": [
          "stopped buying commercial cleaning products",
          "make my own cleaning solutions",
          "Vinegar, baking soda",
          "lemon juice"
        ]
      }
    ],
    "distractors": [
      "Has fun exercising with friends",
      "Walk with friends"
    ]
  },
  {
    "id": 6,
    "title": "Outdoor activities",
    "speakers": [
      {
        "speaker": "A",
        "text": "I've been involved in different sports over the years, but one thing that stands out for me is horse riding. There's something about being with horses that feels both calming and exciting. Riding through open fields or along forest paths is an amazing way to stay active. It's not just a workout, but also a chance to connect with animals and nature. I try to go riding whenever I have a free weekend—it's definitely my favorite way to keep fit.",
        "answer": "Horse riding",
        "highlights": [
          "horse riding",
          "being with horses",
          "go riding"
        ]
      },
      {
        "speaker": "B",
        "text": "I used to love mountain biking, enjoying the thrill of riding down steep slopes. It was really an amazing and adventurous feeling. However, after an injury from a fall, I became haunted by the fear of crashing and now I'm scared of this sport. But I still love the mountains, so I've decided to just go hiking every weekend instead.",
        "answer": "Climbing",
        "highlights": [
          "mountain biking",
          "steep slopes",
          "hiking every weekend"
        ],
        "note": "SOURCE MISMATCH: The file's answer says “Climbing”, but the transcript says mountain biking and then hiking. The app preserves the source answer exactly."
      },
      {
        "speaker": "C",
        "text": "I've always been drawn to outdoor activities, especially those that get my heart racing. While some of my friends prefer running or hiking, I find nothing more exciting than mountain biking. I love the challenge of rough terrains and feeling the wind rush by as I go downhill. It's also a great way to explore nature and stay fit. I try to hit the trails at least a few times a month because it's such a thrilling experience for me. It's become my go-to form of exercise whenever I have the time.",
        "answer": "Mountain biking",
        "highlights": [
          "mountain biking",
          "rough terrains",
          "go downhill",
          "trails"
        ]
      },
      {
        "speaker": "D",
        "text": "My husband and I often wake up early and go to a nearby forest for exercise. We usually go jogging in the early morning to stay healthy, and we really enjoy the fresh air and natural scenery in the forest. This peaceful routine helps us start our day with lots of positive energy. It is also a great way for both of us to bond and relax together after a busy week.",
        "answer": "Going for a run",
        "highlights": [
          "go jogging",
          "early morning",
          "fresh air",
          "forest"
        ]
      }
    ],
    "distractors": [
      "Complete school assignments",
      "In a coffee shop"
    ]
  },
  {
    "id": 7,
    "title": "Place to run",
    "speakers": [
      {
        "speaker": "A",
        "text": "The city gives me new things to see every time I run. I like the busy streets and different buildings around me. Stopping at traffic lights and watching out for people helps me stay alert. Running in the street is what I love most. I also get to find new places in my city this way. The hard ground makes my legs stronger. It can be a bit dangerous with cars, but that's what makes it exciting for me.",
        "answer": "In the street",
        "highlights": [
          "busy streets",
          "traffic lights",
          "Running in the street"
        ]
      },
      {
        "speaker": "B",
        "text": "The clean air by the sea makes me feel good and helps clear my head. I enjoy feeling the sand under my feet, which helps make my legs stronger. The sound of the waves makes a nice beat for my run. There's nothing better than running by the seaside. Seeing the sun come up or go down while I run is really pretty. The cool wind from the sea keeps me from getting too hot. And after I'm done, I can jump in the water to cool off.",
        "answer": "At the seaside",
        "highlights": [
          "by the sea",
          "sand under my feet",
          "running by the seaside"
        ]
      },
      {
        "speaker": "C",
        "text": "The track lets me know exactly how far I've run and helps me set goals. The smooth surface is better for my knees and ankles. There are no bumps or things in the way, so I can focus on how I run. For me, the running track is the best place to run. I can easily see how long each lap takes me. Having other runners around makes me want to try harder. I can run on the track in almost any weather, which is great.",
        "answer": "On the running track",
        "highlights": [
          "The track",
          "running track",
          "each lap"
        ]
      },
      {
        "speaker": "D",
        "text": "Inside, I don't have to worry about it being too hot, cold, or rainy. I can use the treadmill and other machines to mix up my workout. The soft surface of the treadmill is easier on my knees than the road. I like running on the treadmill best. I can change how steep or fast the treadmill goes to make it more challenging. The machines tell me how fast my heart is beating and how well I'm doing. And when I'm done, I can take a shower and change right there.",
        "answer": "In the fitness centre",
        "highlights": [
          "Inside",
          "treadmill",
          "other machines"
        ]
      }
    ],
    "distractors": [
      "Alone",
      "Shopping online"
    ]
  },
  {
    "id": 8,
    "title": "Doing exercise",
    "speakers": [
      {
        "speaker": "A",
        "text": "Honestly? Exercise wears me out. The idea of getting all sweaty and sore doesn't excite me at all. Every time I try to work out, it feels like I'm running on empty within minutes. And people say it gives them energy- are we talking about the same thing? I feel more tired just thinking about the treadmill! I know it's supposed to be good for me, and I try to do it for my health, but I don't get that rush people talk about. Exercise for me is just... exhausting. Why do something that makes me want to lie down for three days afterward?",
        "answer": "Find exercise tiring",
        "highlights": [
          "wears me out",
          "more tired",
          "exhausting"
        ]
      },
      {
        "speaker": "B",
        "text": "Exercising is a blast when you're with the right people! I've joined a few group classes, and they're like a party every time. The music is pumping, everyone's in sync, and it feels like we're all in this together. Working out alone can get boring, but with friends? You laugh, you encourage each other, and suddenly, an hour has flown by. We push each other, you know? It's kind of amazing—half the time, I forget I'm even working out. I actually look forward to it. The camaraderie makes it worth every minute.",
        "answer": "Has fun exercising with friends",
        "highlights": [
          "group classes",
          "with friends",
          "laugh",
          "encourage each other"
        ]
      },
      {
        "speaker": "C",
        "text": "Exercise? Ugh, I can't stand it. I know it's supposed to be 'good for you' and all that, but I find it completely miserable. The sweat, the strain, the way my muscles burn afterward—it's like a punishment. People say it'll get better or that I'll start to like it eventually, but I've tried, and I still hate it. Honestly, life's too short to spend it doing something you can't stand. There are other ways to be healthy that don't involve torturing myself. I'd rather read a book than jog any day.",
        "answer": "Hate exercising",
        "highlights": [
          "can't stand it",
          "completely miserable",
          "still hate it"
        ]
      },
      {
        "speaker": "D",
        "text": "Exercise has become essential in my life, especially with my demanding and stressful job. The workload can be overwhelming at times, leaving me feeling exhausted and overwhelmed. That's why I turn to exercise as a way to unwind and rejuvenate. Whether it's going for a run, practicing yoga, or even just taking a brisk walk, exercise helps me release stress and clear my mind. I've noticed that after exercising, I feel more focused, energized, and ready to tackle my work with renewed vigor. It's incredible how something as simple as exercise can greatly improve my work performance and overall well-being.",
        "answer": "Help improve work performance",
        "highlights": [
          "more focused",
          "energized",
          "improve my work performance"
        ]
      }
    ],
    "distractors": [
      "Prefer to studying at home",
      "There are more choices"
    ]
  },
  {
    "id": 9,
    "title": "Using the internet",
    "speakers": [
      {
        "speaker": "A",
        "text": "I spend quite a bit of my free time online, mostly because I love watching movies. The Internet makes it so easy to find a wide variety of films, from the latest releases to old classics. I can stream them directly on my laptop or TV without needing to go out and buy DVDs or rent movies. I just pick a film and relax. It's the best way to unwind after a long day, and I can watch whatever I want, whenever I want.",
        "answer": "Watch films",
        "highlights": [
          "watching movies",
          "wide variety of films",
          "stream them"
        ]
      },
      {
        "speaker": "B",
        "text": "The main reason I use the Internet is to stay in touch with my friends. It's great because I can talk to people who live far away without any issues. Whether it's through social media, video calls, or messaging apps, the Internet allows me to communicate easily and quickly. My best friend loves using the Internet for studying online courses, but that's not really for me. I prefer just chatting and staying connected through messages and calls.",
        "answer": "Communicate with friends",
        "highlights": [
          "stay in touch with my friends",
          "talk to people",
          "social media",
          "messaging apps"
        ]
      },
      {
        "speaker": "C",
        "text": "For me, the Internet is an essential tool for completing my school assignments. I use it to research information, find articles, and access educational websites that help me understand my subjects better. It's so convenient because I can find everything I need online without having to spend hours in the library. I also use it to download notes and submit my homework. It has really made studying more efficient, and I can work from anywhere, whether it's at home or on the go.",
        "answer": "Complete school assignments",
        "highlights": [
          "school assignments",
          "research information",
          "submit my homework"
        ]
      },
      {
        "speaker": "D",
        "text": "Whenever I need to plan a trip or get somewhere, I always use the Internet to find transportation details. I can check train schedules, bus routes, and even look up flights. It helps me figure out the best way to travel, and I can even buy tickets online. I like how I can get real-time updates about delays or changes. It makes traveling much easier and saves me the hassle of standing in line at stations or airports.",
        "answer": "Find transport information",
        "highlights": [
          "transportation details",
          "train schedules",
          "bus routes",
          "flights"
        ]
      }
    ],
    "distractors": [
      "Not driving to work",
      "After waking up"
    ]
  },
  {
    "id": 10,
    "title": "Does art",
    "speakers": [
      {
        "speaker": "A",
        "text": "I love when people come together to create something—it's not just about the art itself but about connecting with each other. Ideas bounce around, and suddenly, new ones come to life. Everyone's personality blends into the work, making it feel bigger than anything we could make alone. Art becomes a shared experience, bringing us all together.",
        "answer": "As a social activity",
        "highlights": [
          "people come together",
          "connecting with each other",
          "shared experience"
        ]
      },
      {
        "speaker": "B",
        "text": "Kids are so fearless with art. They jump in, without worrying about mistakes, making everything feel magical. Teaching them is a reminder that creativity should be free and fun. They show you that art is as much about play and expression as it is about any 'rules'.",
        "answer": "With the children",
        "highlights": [
          "Kids",
          "Teaching them",
          "children"
        ]
      },
      {
        "speaker": "C",
        "text": "Art is part of my work, so it comes with structure—deadlines, clients, and goals. It's different from personal art because I'm balancing my ideas with what's needed for the project. But there's a thrill in that challenge, and seeing the finished work is deeply satisfying.",
        "answer": "As part of their jobs",
        "highlights": [
          "part of my work",
          "deadlines",
          "clients",
          "project"
        ]
      },
      {
        "speaker": "D",
        "text": "Art, for me, is a quiet, personal thing. It's my time to focus inward, away from distractions. I don't need anyone else there, it's just me and my thoughts. Creating alone brings a peace where I can explore and express freely just for myself.",
        "answer": "Alone",
        "highlights": [
          "quiet, personal thing",
          "I don't need anyone else",
          "Creating alone"
        ]
      }
    ],
    "distractors": [
      "It saves time",
      "Buy environmentally friendly products"
    ]
  },
  {
    "id": 11,
    "title": "They journey to work",
    "speakers": [
      {
        "speaker": "A",
        "text": "Mornings are actually my favorite time of day. I get to catch up with my friends, laugh about silly things, and just share a moment before the real day starts. We're out there together, moving through the city like it's our own little world. It's funny how just talking and walking can make you forget about everything else. Sometimes, we even take a longer route just to keep the conversation going. By the time we get to work, I'm already in a good mood, ready for whatever comes my way.",
        "answer": "Walk with friends",
        "highlights": [
          "catch up with my friends",
          "together",
          "talking and walking"
        ]
      },
      {
        "speaker": "B",
        "text": "There's something oddly comforting about my mornings. It's like this in-between space where I'm not quite at home, not quite at work. I hop on the bus, find a seat if I'm lucky, and just watch the world go by. You see all kinds of faces, each with their own story, each heading somewhere. It's not glamorous, but it's my little escape time to listen to my favorite songs or daydream out the window. By the time I step off, I'm ready to face whatever the day throws at me.",
        "answer": "Go by bus",
        "highlights": [
          "hop on the bus",
          "find a seat",
          "step off"
        ]
      },
      {
        "speaker": "C",
        "text": "Mornings are quiet, and that's how I like it. It's just me, the fresh air, and the city slowly waking up. I take my time, choosing the paths that are less crowded. I guess you could say it's my way of getting ready for the day. There's no rush, just the steady rhythm of my own footsteps. It's my chance to breathe, to think, to just be by myself. By the time I reach work, I feel like I've had a small adventure all my own.",
        "answer": "Walk alone",
        "highlights": [
          "just me",
          "less crowded",
          "my own footsteps",
          "by myself"
        ]
      },
      {
        "speaker": "D",
        "text": "Every morning, it's just me, my car, and the open road. There's a kind of freedom in it, you know? I get to decide my route, crank up my favorite tunes, and just go. Traffic can be a pain, sure, but it's worth it for those moments when it's just me and my thoughts. I like having that bit of control, especially before a busy day. Sometimes, I even take the scenic route, just to stretch out the time a bit. By the time I park, I'm in my zone, ready to take on whatever comes next.",
        "answer": "Drive car",
        "highlights": [
          "my car",
          "open road",
          "decide my route",
          "park"
        ]
      }
    ],
    "distractors": [
      "Late at night",
      "Mountain biking"
    ]
  },
  {
    "id": 12,
    "title": "A place for studying",
    "speakers": [
      {
        "speaker": "A",
        "text": "I don't like studying in very crowded places because I can't focus well. I usually sit on the sofa in the living room to study. My parents often travel for work, so my house is very quiet.",
        "answer": "Prefer to studying at home",
        "highlights": [
          "sofa in the living room",
          "my house",
          "at home"
        ]
      },
      {
        "speaker": "B",
        "text": "I don't like studying in very quiet places such as at home or in the library because I get sleepy easily and might even fall asleep while studying. There's a coffee shop near my house, and I often go there to study because the presence of other people makes me feel more motivated. I find that I achieve higher productivity and efficiency in my studies when I'm there.",
        "answer": "In a coffee shop",
        "highlights": [
          "coffee shop",
          "presence of other people",
          "more motivated"
        ]
      },
      {
        "speaker": "C",
        "text": "I notice that most people prefer doing their homework in the classroom, but for me, those chairs are way too hard and leave me sore all day. I prefer sitting under the trees in the park to study—it's cool, and the air is fresh. There's a famous coffee shop across from where I sit, and they serve really good coffee.",
        "answer": "In the park",
        "highlights": [
          "under the trees in the park",
          "park",
          "air is fresh"
        ]
      },
      {
        "speaker": "D",
        "text": "The distance from my house to school is 20\" km\" , and it usually takes me an hour to get there. So, when I'm on the train, I use the time to do homework and review the lessons for the day. Some people say that studying like this can be distracting, but I find it very effective for me.",
        "answer": "On a public transport",
        "highlights": [
          "on the train",
          "get there",
          "do homework and review the lessons"
        ]
      }
    ],
    "distractors": [
      "Give away used items",
      "In the fitness centre"
    ]
  },
  {
    "id": 13,
    "title": "Visiting a new museum in town",
    "speakers": [
      {
        "speaker": "A",
        "text": "I expected rows of objects behind glass, so the museum surprised me. At one display, I moved a tablet over an old ship model and watched sailors appear on the screen. In another room, headphones recreated the sounds of a crowded nineteenth-century market. The paintings were impressive, of course, but I spent the longest at the interactive tables, trying different languages and zooming into tiny details. That digital side of the museum turned what could have been a visit into something genuinely exciting.",
        "answer": "Enjoyed the rise of technology",
        "highlights": [
          "moved a tablet",
          "headphones recreated the sounds",
          "interactive tables",
          "digital side"
        ]
      },
      {
        "speaker": "B",
        "text": "I nearly postponed the museum trip because I had a dentist appointment across town. Still, I thought I could squeeze in one gallery before leaving. I scanned the map, hurried past the café, and stopped only long enough to photograph the enormous whale skeleton. When the announcement said the next guided tour would begin in twenty minutes, I was already checking my watch. My friends stayed for the ancient coins exhibition, but I was back outside before they had even reached the second floor.",
        "answer": "Finished the visit quickly",
        "highlights": [
          "squeeze in one gallery",
          "hurried past",
          "checking my watch",
          "back outside before they had even reached the second floor"
        ]
      },
      {
        "speaker": "C",
        "text": "My cousin complained that the museum was too crowded, and she was right—we fought for the space exhibition and missed the final planetarium show. Even so, the few rooms we managed to enter were excellent. I kept noticing doors marked 'Members only' and posters for an exhibition opening next month. On the bus home, I checked the museum website and saved the date. One afternoon clearly wasn't enough, so I've already persuaded my brother to come back with me.",
        "answer": "Wants to visit again",
        "highlights": [
          "saved the date",
          "One afternoon clearly wasn't enough",
          "persuaded my brother to come back with me"
        ]
      },
      {
        "speaker": "D",
        "text": "The building looked simple from outside, but inside it was a maze. I followed a blue arrow for 'Local History,' went through two glass doors and somehow arrived back beside the dinosaur model. A guard pointed me upstairs, yet the lift opened in the modern art wing. By then, my sister had sent three messages asking where I was. I finally found her after asking at the information desk. I saw more corridors than exhibits that afternoon.",
        "answer": "Got lost during the visit",
        "highlights": [
          "inside it was a maze",
          "arrived back beside",
          "lift opened in the modern art wing",
          "asking where I was",
          "saw more corridors than exhibits"
        ]
      }
    ],
    "distractors": [
      "When travel to the school",
      "Don't have time to read"
    ]
  },
  {
    "id": 14,
    "title": "Reading books",
    "speakers": [
      {
        "speaker": "A",
        "text": "At home, my phone always wins. On the school bus, however, the signal disappears through two villages, so I open a book instead. The journey lasts about thirty-five minutes—long enough for a chapter, short enough that I rarely become tired of it. I keep a paperback in the front pocket of my bag and leave my textbooks elsewhere. Most of my voluntary reading now happens between my stop and the school gates.",
        "answer": "When travel to the school",
        "highlights": [
          "On the school bus",
          "journey lasts about thirty-five minutes",
          "between my stop and the school gates"
        ]
      },
      {
        "speaker": "B",
        "text": "Three unopened novels sit beside my bed, each bought with sincere plans. Then homework runs late, football practice moves to an extra evening, and my younger brother needs help. When I finally lie down, reading two pages feels impossible. Weekends are filled with family errands and friends. I still like books and keep collecting recommendations; what I lack is a free, awake hour in which to enjoy them.",
        "answer": "Don't have time to read",
        "highlights": [
          "unopened novels sit",
          "homework runs late",
          "reading two pages feels impossible",
          "lack is a free, awake hour"
        ]
      },
      {
        "speaker": "C",
        "text": "Reading on transport makes me dizzy, and the living room television interrupts every sentence. My bed solves both problems. I prop up the pillows, use a small lamp, and read until my eyes begin closing. Sometimes that is ten minutes; on holidays it can be two hours. The routine also helps me stop looking at screens before sleep. My bedroom is not the most imaginative location, but it is where books actually get finished.",
        "answer": "On their beds",
        "highlights": [
          "My bed solves both problems",
          "prop up the pillows",
          "before sleep",
          "My bedroom"
        ]
      },
      {
        "speaker": "D",
        "text": "I understand why people love novels, and I enjoy a good story when a teacher assigns one. Free time is different. I would rather meet friends for basketball, repair my bike, or watch a match. Reading asks me to sit still after a whole day at a desk, which feels like more school. Books are not unpleasant; they simply lose whenever I can choose an activity with movement and other people.",
        "answer": "Prefer another activity",
        "highlights": [
          "rather meet friends for basketball",
          "repair my bike",
          "watch a match",
          "choose an activity with movement and other people"
        ]
      }
    ],
    "distractors": [
      "Enjoyed the rise of technology",
      "Got lost during the visit"
    ]
  }
];
