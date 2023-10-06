let products = [
  {
    title: 'Meksikanska piletina',
    desc:
      '8 komada. Zarolajte meksičku tortilju od sira sa svježim sirom, piletinom i kineskim' +
      ' kupusom. Začinjeno pikantnim umakom',
    price: 3,
    image: require('../images/r1.jpg'),
    class: 'Rols',
  },
  {
    title: 'Chicken Hot Cap',
    desc: '8 komada. Zapečena rolada sa piletinom prelivena mozzarella sirom, majonezom i šampinjonima',
    price: 3,
    image: require('../images/r2.jpg'),
    class: 'Rols',
  },
  {
    title: 'Origami',
    desc: '8 komada. Rolada sa lososom prženim u soja sosu, paprikom i Masago kavijarom',
    price: 3,
    image: require('../images/r3.jpg'),
    class: 'Rols',
  },
  {
    title: 'Vulkan sa snježnim rakom',
    desc: '8 komada. Zapečena rolada s krastavcem pod kapom od surimi mixa i pikantnog umaka',
    price: 3,
    image: require('../images/r4.jpg'),
    class: 'Rols',
  },
  {
    title: 'Aljaska',
    desc: '8 komada. Rolat sa krem ​​sirom, lososom i avokadom. Ukrašeno susamom',
    price: 3,
    image: require('../images/r5.jpg'),
    class: 'Rols',
  },
  {
    title: 'Pizza 4 sira',
    desc: 'Pizza umak, sir Mozzarella, pileći file, šunka, slanina, rajčica, umak od češnjaka.',
    price: 5,
    image: require('../images/p1.jpg'),
    class: 'Pizza',
  },
  {
    title: 'Havajska pizza',
    desc: 'Kombinacija slanine i ananasa s kremastim umakom prelivenim sirom Mozzarella.',
    price: 5,
    image: require('../images/p2.jpg'),
    class: 'Pizza',
  },
  {
    title: 'Pizza Carbonara',
    desc: 'Šunka, kriške rajčice i slatke paprike s Mozzarella sirom.',
    price: 5,
    image: require('../images/p3.jpg'),
    class: 'Pizza',
  },
  {
    title: 'Pizza Margherita',
    desc: 'Vječni klasici: kriške rajčice, sir Mozzarella, kolutovi crvenog luka.',
    price: 5,
    image: require('../images/p4.jpg'),
    class: 'Pizza',
  },
  {
    title: 'Morska pizza',
    desc: 'Morski koktel, rajčice i slatke paprike sa sirom Mozzarella.',
    price: 6,
    image: require('../images/p5.jpg'),
    class: 'Pizza',
  },
  {
    title: 'Snježni set',
    desc: '32 komada ukusnih nježnih rolica sa snježnim rakovima, povrćem, gljivama i raznim umacima',
    price: 5,
    image: require('../images/s1.jpg'),
    class: 'Set',
  },
  {
    title: 'postavi hijeroglif',
    desc: 'do 2 kg role. Angie i tofu rolice. Ukupno 9 vrsta 72 komada.',
    price: 9,
    image: require('../images/s2.jpg'),
    class: 'Set',
  },
  {
    title: 'Kremasti set',
    desc: '32 komada ukusnih nježnih rolica sa krem ​​sirom, povrćem, gljivama i raznim umacima',
    price: 7,
    image: require('../images/s3.jpg'),
    class: 'Set',
  },
  {
    title: 'Angien sushi set',
    desc: '. 5 vrsta zapečenih rolica, 5 različitih okusa! Rolice punjene rajčicom, šunkom, piletinom, terragrom, rakovima pod kapom umaka Unagi French i Masago.',
    price: 7,
    image: require('../images/s4.jpg'),
    class: 'Set',
  },
  {
    title: 'Postavi miks 2',
    desc: '5 slasnih kiflica! 1 kg! Philadelphia light s krastavcem, Bonito tori, Tomato maki, Krabi tempura, meksički grill',
    price: 6,
    image: require('../images/s5.jpg'),
    class: 'Set',
  },
  {
    title: 'Kineski rezanci s orasima',
    desc: 'Udon rezanci s piletinom, povrćem i kikirikijem kuhani na panazijski način',
    price: 3,
    image: require('../images/v1.jpg'),
    class: 'Prvo jelo',
  },
  {
    title: 'Tom yam',
    desc:
      'Ljuta i kiselkasta juha s tigrastim kozicama i piletinom u kokosovom mlijeku. Set' +
      ' tajlandskih biljaka, korijenja i začina - limunska trava, listovi kaffir limete, korijen galangala, sok limete, svježi čili, riblji umak, cherry rajčice i gljive. Poslužuje se s rižom',
    price: 3,
    image: require('../images/v2.jpg'),
    class: 'Prvo jelo',
  },
  {
    title: 'Kineski rezanci s morskim plodovima',
    desc: 'Udon rezanci s plodovima mora i povrćem kuhani na panazijski način',
    price: 3,
    image: require('../images/v3.jpg'),
    class: 'Prvo jelo',
  },
  {
    title: 'Kineski goveđi rezanci',
    desc: 'Udon rezanci s govedinom i povrćem, pripremljeni na panazijski način',
    price: 4,
    image: require('../images/v4.jpg'),
    class: 'Prvo jelo',
  },
  {
    title: 'WOK s lososom',
    desc: 'Udon rezanci s lososom i povrćem, kuhani na azijski način u WOK tavi',
    price: 3,
    image: require('../images/v5.jpg'),
    class: 'Prvo jelo',
  },
  {
    title: 'WOK s piletinom',
    desc: 'Udon rezanci s piletinom i povrćem, kuhani na azijski način u WOK tavi',
    price: 3,
    image: require('../images/v6.jpg'),
    class: 'Prvo jelo',
  },
  {
    title: 'pomfrit',
    desc: 'Popularna grickalica od prženih krumpirića. ',
    price: 1,
    image: require('../images/v7.jpg'),
    class: 'Prvo jelo',
  },
  {
    title: 'Krumpir kuglice',
    desc: 'Pržene kuglice od pire krumpira',
    price: 2,
    image: require('../images/v8.jpg'),
    class: 'Prvo jelo',
  },
  {
    title: 'Ringovi prženi lignje',
    desc: 'Prženi kolutići lignji u tijestu',
    price: 2,
    image: require('../images/v9.jpg'),
    class: 'Prvo jelo',
  },
  {
    title: 'Kolutići luka',
    desc: 'Kolutići luka u tijestu, duboko prženi',
    price: 1,
    image: require('../images/v10.jpg'),
    class: 'Prvo jelo',
  },
];

products = products.map(el => {
  return {
    ...el,
    added: false,
    count: 1,
    id: Math.random(),
  };
});

export default products;
