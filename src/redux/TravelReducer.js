const initialState = {
  place: [
    {
      name: "Datanla Waterfall Dalat",
      video: "../assets/videos/Datanla.mp4",
      img: "../assets/images/datanla_waterfall.jpg",
      offset: 0.5,
      description:
        "If you are looking for a beautiful waterfall located right in the city, then come to Datanla waterfall, which has the longest forest skating system in Southeast Asia and other exciting games. Datanla waterfall is located in the middle of Prenn pass, has a height of more than 20m, and is located upstream of the stream, so the water flow is always stable and smooth.Coming to Datanla waterfall tourist area, you can participate in the experience of games from light to adventurous. In particular, you should try the only game in Da Lat full of charm. In addition, you can participate in activities, or to challenge your bravery. Of course, Datanla is indispensable for boating and taking the cable car to see the nature of the mountains and forests of Da Lat.",
    },
    {
      name: "Langbiang Mountain Da Lat",
      video: "../assets/videos/LangBiang.mp4",
      img: "../assets/images/LangBiang.jpg",
      offset: 1,
      description:
        "Like the heart of Da Lat, Langbiang mountain is famous for its type of picnic, nature discovery, attracting young people who love backpacking and adventurers. This place is the common home of many herbs, herbs, and precious birds. In , the usual activity is sightseeing. In addition, you can try your hand at climbing, paragliding, conquering the top of the mountain.Radar hill area is also the choice of many visitors, you can rent a jeep or walk to the top of the hill. On the Radar hill, there are many entertainment spots such as: flower garden, bonsai, coffee shop, binoculars area, horseback riding, etc. In addition, you can explore Ong and Ba hills by walking through the pine forest. This way of moving is a bit risky but will definitely bring you many unforgettable memories.",
    },
    {
      name: "Lumiere Light Garden Dalat",
      video: "../assets/videos/Lumiere.mp4",
      img: "../assets/images/Lumiere.jpg",
      offset: 1.95,
      description:
        "If you are familiar with an ancient Da Lat, you will surely be interested in the Garden of Light - Lumiere Da Lat, a new place that opened in Da Lat and is taking the social network by storm today. Garden of Light is an artistic lighting exhibition space, bringing the application of Vietnam's most advanced technology into extremely impressive displays. Lumiere Da Lat conquers visitors with its creativity, combination of installation art and modern technology. Lumiere has a total of 9 galleries with different themes and spaces. You can freely record movies, take photos in bright shimmering lights, save artistic impressions with the most sublime emotions at this brand new 'virtual life coordinate'.",
    },
    {
      name: "Tuyen Lam Lake Dalat",
      video: "../assets/videos/TuyenLamLake.mp4",
      img: "../assets/images/TuyenLamLake.jpg",
      offset: 2,
      description:
        "Tuyen Lam Lake Dalat is one of the most beautiful lakes in Dalat. Along with Xuan Huong lake, Tuyen Lam lake is the green lung of the city - where you can let your soul in the wind, water, clouds, and beautiful pine forest. Coming to Tuyen Lam Lake Tourist Area, in addition to delighting in sightseeing and sightseeing, you can also participate in canoeing. On the way, you can stop at beautiful places to take pictures with the reed lawn, or visit the strawberry garden and the maple leaf forest.",
    },
    {
      name: "Fairytale Land",
      video: "../assets/videos/FairytaleLand.mp4",
      img: "../assets/images/FairytaleLand.jpg",
      offset: 2.75,
      description:
        "Fairytale Land - Vinh Tien wine cellar Dalat is a 'virtual living mecca' causing fever in recent times. This resort is inspired by the Hobbit fairy village in northern New Zealand to create a world of dwarves, a cute fairyland, along with colorful and vibrant flower gardens in the garden. sunny. After visiting the hobbit kingdom, you can stop at Vinh Tien wine cellar, a luxurious and cozy space with 15,000 bottles of assorted wines. In particular, when buying an entrance ticket, you will be given a cool bottle of Vinh Tien artichoke. In addition, this place also has a guide to take you to visit all the places in the tourist area dedicated and attentive.",
    },
    {
      name: "Puppy Farm",
      video: "../assets/videos/PuppyFarm.mp4",
      img: "../assets/images/PuppyFarm.jpg",
      offset: 3,
      description:
        "Puppy Farm is a place that is loved by many people, because it is the common home of more than 150 'faint' dogs. When you come here, you not only play with cute dogs, but also walk around the beautiful flower fields, or the agricultural garden planted with modern technology. At the farm, there is always a team of staff to guide and support you when you need it. It's hard to miss such a lovely place during your trip to Dalat, isn't it!",
    },
    {
      name: "Bali Green Hills Heaven Gate Dalat",
      video: "../assets/videos/HeavenGateDalat.mp4",
      img: "../assets/images/Gate.jpg",
      offset: 4,
      description:
        "Located inside the Greenland 2 resort, Bali Da Lat Heaven Gate, also known as Green Hills Dalat is one of the most popular attractions for young people in Da Lat. Dalat Heaven Gate is the Vietnamese version of Bali Heaven Gate at Pura Lempuyang Luhur temple, Indonesia. Bali Green Hills is located between the vast green pine forest and the typical hills of Da Lat. To get magical photos, you should come here in the early morning or late afternoon, to capture the beautiful moments of nature.",
    },
    {
      name: "Me Linh Coffee",
      video: "../assets/videos/COFFEE.mp4",
      img: "../assets/images/COFFEE.jpg",
      offset: 4.75,
      description:
        "Me Linh Coffee Garden, commonly known as Me Linh coffee plantation, is a cafe with an airy and quiet space. With a coffee garden stretching on the hillside, and sunflowers, hydrangeas, and wild sunflowers in the distance, this place is considered a small plantation in the countryside. Coming here, in addition to enjoying coffee, you can also visit and learn about the process of growing, harvesting, and processing coffee, especially weasel coffee. Me Linh Plantation also serves fresh lam rice and grilled meat, sure to satisfy the most discerning diners.",
    },
    {
      name: "Xuan Huong Lake",
      video: "../assets/videos/XuanHuongLake.mp4",
      img: "../assets/images/XuanHuongLake.jpg",
      offset: 5,
      description:
        "Anyone coming to the center of Da Lat is also amazed by the beauty of Xuan Huong Lake - the green pearl of the city - with pine trees, flower clusters, green lawn, helping to embellish the romantic look of Da Lat. this place. In particular, in spring, near Xuan Huong lake, there are cherry apricots blooming gently in the sun. Here, you can roam around Xuan Huong Lake on double bicycles, stop at Thuy Ta or Bich Cau to enjoy a hot cup of coffee amidst the beautiful natural scenery. Early in the morning, you should go to Xuan Huong Lake to feel the breath of the city while still in the night mist. At night, this place is quite bustling with restaurants, spoiled for you to enjoy typical local snacks.",
    },
    {
      name: "Cathedral",
      video: "../assets/videos/Cathedral.mp4",
      img: "../assets/images/Cathedral.jpg",
      offset: 5.95,
      description:
        "The Chicken Church in Da Lat is located on Tran Phu Street, also known as the Cathedral Church. This place concentrates many famous hotels such as Novotel, Sammy…Chicken Church is one of the typical ancient architecture left from the French colonial period. This is one of the biggest churches of Dalat. The reason why the church is called a chicken is because on the top of the bell tower there is a statue of a big chicken",
    },
    {
      name: "Love Valley",
      video: "../assets/videos/LoveValley.mp4",
      img: "../assets/images/LoveValley.jpg",
      offset: 6,
      description:
        "Dalat Love Valley is one of the places. Not to be missed for tourists when they have set foot in Da Lat. This place is known as the paradise of tourists. A place to cultivate love for couples. An extremely ideal tourist destination for family and friends. When coming to the valley of love in Da Lat, visitors are spoiled for choice. Take yourself the best photos here. See the flowers or birds only in Da Lat. Coming here, visitors seem to be immersed in the nature of the mountains. Get rid of the fatigue and worries in life. What are you waiting for, come here quickly.",
    },
    {
      name: "King Palace",
      video: "../assets/videos/KingPalace.mp4",
      img: "../assets/images/KingPlace.jpg",
      offset: 6.95,
      description:
        "Palace 1 Dalat is a famous work built by the French in Da Lat with typical architectural features of France. The mansion is associated with the name of the last feudal king in Vietnam - King Bao Dai. Up to now, this work is one of the tourist attractions in Da Lat that is loved by many tourists. The palace is located at 1 Tran Quang Dieu, on a hill about 1,550 meters high, among the vast, poetic pine forests, in the territory of Ward 10 and about 4 km from the center of Da Lat city to the East - South. So coming here, you can rent a hotel in Da Lat city for convenient travel. Palace 1 has a total area of ​​​​about 60 hectares, one of the most massive works of that time, built by Robert Clément Bourgery - a millionaire and an official in the French colonial government, since 1929.",
    },
    {
      name: "Goft Đồi Cù",
      video: "../assets/videos/goft.mp4",
      img: "../assets/images/goft.jpg",
      offset: 7,
      description:
        "Dalat Palace golf course is the oldest golf course in Vietnam associated with many events of the country. One of the beautiful tourist destinations not to be missed in Da Lat. Where does the name Cu Hill come from? Doi Cu Golf Course has witnessed many ups and downs of history. A building is not only an entertainment place but also a space containing many meaningful things for generations of people in Da Lat. The name Doi Cu sounds very strange and people here do not know when and why it has such a name. Some people say that looking down from above, the hills are undulating like sheep's backs, so they call it the tickling hill. Some people say that because people go to the hill to play golf or call it Cu, they call it Cu hill.",
    },
  ],
};

const TravelReducer = (state = initialState, action) => {
  switch (action.type) {
    case 1:
      return { ...state };

    default:
      return state;
  }
};

export default TravelReducer;
