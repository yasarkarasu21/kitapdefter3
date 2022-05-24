// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Aşağıdaki cümlelerin hangisinde bu sözcüğü diğerlerinden ayrı bir tür ve görevde kullanılmıştır?",
    answer: "Bu, bilimsel araştırma için sakıncalı bir durumdur.",
    options: [
      "Bu genel konuyu araştırmak, incelemek yıllar alır.",
      "Bu, bilimsel araştırma için sakıncalı bir durumdur.",
      "Bu konu, bir sınırlı konu çalışmasıyla yapılmalıdır.",
      "Belki de bu zamana, araştırıcının ömrü yetmez.",
      "Bu tür nedenlerle, hikâye gibi konu, çok genel olur."
    ]
  },
    {
    numb: 2,
    question: "Aşağıdaki cümlelerin hangisinde bir ad birden fazla sıfatla nitelenmiştir?",
    answer: "Gözlerime ince, altın levhalar örteceksin.",
    options: [
      "Gözlerime ince, altın levhalar örteceksin.",
      "Bir tek tasvirini görebilsem diyordum.",
      "Geldiğin kapının büyük hayalinden çık, git.",
      "Mor matem elbiselerini giymişti bütün halk",
      "Yollar, küçük hayallerle aşılırmış daima"
    ]
  },
    {
    numb: 3,
    question: "Aşağıdaki dizelerin hangisinde bir ad hem niteleme, hem belirtme sıfatı almıştır?",
    answer: "Işık onu her an büyük bir ağaç yapıyordu",
    options: [
      "Her şey zamanında güzeldi, aşk da",
      "Işık onu her an büyük bir ağaç yapıyordu",
      "Sonra bir güle döndü, mehtap oldu kız",
      "Biz kaybolduk mavi, derin sularda",
      "Feneri taşıyan küçük dallara dadandı pervaneler"
    ]
  },
    {
    numb: 4,
    question: "Aşağıdaki cümlelerin hangisinde kurallı birleşik sıfata yer verilmiştir?",
    answer: "Toprak altındakiler, nur yüzlü büyükbabam",
    options: [
      "Sizleri göreceğim geldi iyi insanlar",
      "Sizler ve çocuk kalbim ne kadar iyiydiniz.",
      "Toprak altındakiler, nur yüzlü büyükbabam",
      "Hür gemiciler geçer akşamlan Boğaz'dan",
      "İhtiyar gemiler salınır mavi sularında denizin"
    ]
  },
    {
    numb: 5,
    question: "Bir sıfat tamlamasının sonuna -lı eki getirilir ve meydana getirilen birlik bir adın sıfatı yapılır. Buna kurallı birleşik sıfat denir. Aşağıdaki cümlelerin hangisinde bu kurala örnek bir kullanım vardır?",
    answer: "Bu, uzun boylu, kırk yaşlarında esmer bir Kızılderili'ydi.",
    options: [
      "Adamın son derece güçlü ve sağlıklı bir görünümü vardı.",
      "Kot giymişti ve başında sarı bir kovboy şapkası vardı.",
      "Bu, uzun boylu, kırk yaşlarında esmer bir Kızılderili'ydi.",
      "Kendisinin en eski dostu olduğunu söylemişti bana.",
      "Evli erkeklerin arasında gençlerin bulunması yanlıştır."
    ]
  },

  {
    numb: 6,
    question: "Aşağıdaki dizelerin hangisinde soru anlamı bir soru sıfatıyla sağlanmıştır?",
    answer: "Hangi düş, hangi dua unutturabilir mezarları?",
    options: [
      "Hangi düş, hangi dua unutturabilir mezarları?",
      "Tazeyken yanık et kokusu çarpar mı insanı?",
      "Vahşet niçin vahşetle açıklanmalı hep?",
      "İnmedi mi beklediğin, son kara trenden?",
      "Kimdi sana el sallayan geçen akşam?"
    ]
  },

  {
    numb: 7,
    question: "Aşağıdaki dizelerin hangisinde ne sözcüğü tür ve görev bakımından diğerlerinden farklıdır?",
    answer: "Ne yanar söner uzaklarda bir fener?",
    options: [
      "Ne yana baksam uyuklayan bir göl görüyorum.",
      "Gök ne zaman iki kere güzel görünür?",
      "Ne zaman kalbimizde başkent Ankara",
      "Ne yanar söner uzaklarda bir fener?",
      "Ne gün kavuşacağım İstanbul bakışlı gözlerine?"
    ]
  },

  {
    numb: 8,
    question: "Niteleme sıfatları çekim eki aldığında adlaşmış sıfat olur ve adlaşmış sıfatlar da ad gibi tamlama kurabilir.Aşağıdaki cümlelerin hangisinde adlaşmış sıfat, bir ad tamlamasında tamlayan görevinde kullanılmıştır?",
    answer: "Yabancıların sesini duymadığımız vakitlerde yaşıyoruz.",
    options: [
      "Yabancıların sesini duymadığımız vakitlerde yaşıyoruz.",
      "İnsan, önünde durup uzun uzun çiçeklere bakmalı.",
      "Vakti saçlarından yakalayıp, günü gözlerinden öpmeli.",
      "Biri, yaşayabilmek için dövüşmek gerektiğini anlatmalı.",
      "Sesimiz bize hayatın güzelliklerini anlatmalı."
    ]
  },

  {
    numb: 9,
    question: "Aşağıdaki dizelerin hangisinde sıfat tamlaması nesne görevinde kullanılmıştır?",
    answer: "Vahşi hayvanları dünya dışına saldım",
    options: [
      "Pembe erguvanlar dökülür kaldırım taşlarına",
      "Deli rüzgârlar sürükler bahçelerde otları",
      "Dallarını umut ve çürük kiraz basmış",
      "Güneş, ıslak tütünlere vurur baharda",
      "Vahşi hayvanları dünya dışına saldım"
    ]
  },

  {
    numb: 10,
    question: "Aşağıdaki cümlelerin hangisinde vurgulanmış sözcük tür bakımından diğerlerinden farklıdır?",
    answer: "Kafasını kaldırıp gözlüklerinin üstünden ŞÖYLE bir baktı.",
    options: [
      "Ne yalan söyleyeyim ÇOK iyiliğini gördük.",
      "FUKARA bir köylü şehirde ne iş yapar?",
      "Kafasını kaldırıp gözlüklerinin üstünden ŞÖYLE bir baktı.",
      "Yine ÇIPLAK tepelere doğru koşar adım gidiyordu.",
      "Alnı akıtmalı bir DORU kısrak vardı."
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