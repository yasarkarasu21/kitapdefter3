// creating an array and passing the number, questions, options, and answers
let questions = [
    {   
    numb: 1,
    question: "Aşağıdakilerden hangisinde niteleme sıfatı kullanılmamıştır?",
    answer: "Hangi kahramanlığından dolayı resmini bastılar acaba onun?",
    options: [
      "Kara cahilinden bilginine her insanın bir tarihi görüşü vardır.",
      "Bu küçücük kuşları yakalamak günahtır, demediler mi sana?",
      " Hangi kahramanlığından dolayı resmini bastılar acaba onun?",
      "Çok tutumlu bir insandı, ama evin içinde bolluk olsun isterdi.",
      "Oldukça kalın bir kitaptı Oğuz Atay’ın Tutunamayanlar’ı."
    ]
  },
    {
    numb: 2,
    question: "Aşağıdakilerden hangisinde bir ad, birden çok sıfat almıştır?",
    answer: "Parlak, renkli renkli yanıp sönen havai fişeklerin altında büyülenmiştik.",
    options: [
      "Temiz hava, kendisini toparlayıp yürüyüşe çıkma isteği uyandırdı.",
      "Kıvırcık saçlarının lüleleri o yürüdükçe sallanıyor, uçuyordu.",
      "Parlak, renkli renkli yanıp sönen havai fişeklerin altında büyülenmiştik.",
      "Ağaçların yeşil yaprakları kuru dallarına canlılık vermiş gibiydi.",
      "İnsanın bilmediği yollardan akşam vaktinde geçmesi ürkütücüdür."
    ]
  },
    {
    numb: 3,
    question: "Aşağıdaki atasözlerinin hangisinde adlaşmış sıfat yoktur?",
    answer: "Öfkeli bir adamı susturmak istiyorsanız, önce siz susunuz.",
    options: [
      "Küçük insanların gururu büyük olur.",
      "Öfkeli bir adamı susturmak istiyorsanız, önce siz susunuz.",
      "Kırkına kadar sevilmeyen, kırkından sonra hiç sevilmez.",
      "İhtiyar bir kralda kınanan şey, sıradan bir gençte hoş görülebilir.",
      "Kibir ve gurur ile başkalarını incitme."
    ]
  },
    {
    numb: 4,
    question: "Aşağıdakilerden hangisinde pekiştirme sıfat görevinde kullanılmıştır?",
    answer: "Yapayalnız bir türkü kokuyordu adamın dingin sözleri.",
    options: [
      "Dümdüz görünen deniz, rüzgarın çıkmasıyla dalgalanmaya başladı.",
      "Tertemiz akan suyun berraklığından kendini izliyordu Narsis.",
      "Gökyüzünden apaçık görünüyordu egzotik ormanın gizemi.",
      "Fırtınada uçmamak için şemsiyesine sımsıkı sarılan biriydi.",
      "Yapayalnız bir türkü kokuyordu adamın dingin sözleri."
    ]
  },
    {
    numb: 5,
    question: "Aşağıdakilerden hangisinde işaret sıfatı yoktur?",
    answer: "Şu benim en sevdiğim arkadaşlarımdan biridir.",
    options: [
      "Yine gelebilecek miydik bu yerlere bir gün?",
      "O tür anlayışlar, kişinin dar görüşlülüğünü yansıtır.",
      "Sizden şu türküyü de dinlemeyi çok isterdik.",
      "Şu benim en sevdiğim arkadaşlarımdan biridir.",
      "Dışarıda bu işlerle uğraşan yüzlerce insan var."
    ]
  },
    {
    numb: 6,
    question: "Aşağıdakilerden hangisinde “bir” sözcüğü asıl sayı sıfatıdır?",
    answer: "Sözcükler önemlidir; bazen bir sözcük bile şiirin bütün güzelliğini suya düşürebilir.",
    options: [
      "Bir ilkbahar sabahında denizden yansıyan yakamozu izliyorduk birlikte.",
      "Yazık ki, görgülü bir insanın yapacağı şeyler değildi onun bu yaptıkları.",
      "Niçin gelişmiş bir şehir merkezine atanmak istemiyordu acaba, diye düşündüm.",
      "Sözcükler önemlidir; bazen bir sözcük bile şiirin bütün güzelliğini suya düşürebilir.",
      "Kısa bir cümlenin, upuzun cümlelerin bile anlatamayacağı şeyleri anlatabileceği doğrudur."
    ]
  },
    {
    numb: 7,
    question: "Aşağıdaki cümlelerde renk bildiren sözcüklerden hangisi sıfat değildir?",
    answer: "Memleket isterim gök mavi, tarla sarı olsun.",
    options: [
      "Kırmızı koltukta oturan yazarla söyleşilecekti.",
      "Memleket isterim gök mavi, tarla sarı olsun.",
      "Kara Yılan Kalesi’nin fotoğrafları çekildi.",
      "Kuş, yeşilimsi, geniş kanatlarını çırpıyordu.",
      "Kızıl ateşlerde yanan ağaçlardan eser kalmadı."
    ]
  },
    {
    numb: 8,
    question: "Aşağıdakilerden hangisinde adlaşmış sıfat yoktur?",
    answer: "Fuzuli’dir aşkın yanan ateşi.",
    options: [
      "Dadaloğlu’dur sürülenlerin sözcüsü.",
      "Karacaoğlan’dır güzellerin sevgilisi.",
      "Köroğlu’dur yiğidin haykıran sesi.",
      "Yunus’tur iyilerin dünyayı algılayışı.",
      "Fuzuli’dir aşkın yanan ateşi."
    ]
  },
    {
    numb: 9,
    question: "Aşağıdakilerden hangisinde soru anlamı bir sıfatla sağlanmamıştır?",
    answer: "Bu konuda bana ne kadar yardım edebilirsiniz?",
    options: [
      "Bu konuda bana ne kadar yardım edebilirsiniz?",
      "Bir dostuyla oturup ona içini dökmeyeli ne kadar yıl oldu?",
      "Ne kadar zamanda bitirebilirsiniz bu işleri?",
      "İş dünyasında hangi sorunlarla karşılaşacağız?",
      "Nasıl bir gün geçirmek istiyorsun?” diye sordu."
    ]
  },
    {
    numb: 10,
    question: "Aşağıdakilerden hangisinde belgisiz sıfat kullanılmıştır?",
    answer: "Yorgun bir kalabalık geçiyordu caddeden.",
    options: [
      "Tecrübeli elemanlara duyulan ihtiyaç artmakta.",
      "Yalnız bir soru sormanıza izin verebilirim.",
      "İyi yazarlar, zamanın aşındıramayacaklarıdır.",
      "Pişkin suratıyla etrafta kartal gibi dolanıyor.",
      "Yorgun bir kalabalık geçiyordu caddeden."
    ]
  },

  
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];