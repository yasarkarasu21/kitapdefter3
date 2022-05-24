// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Aşağıdakilerden hangisi tarihin konusu içerisine girmez?",
    answer: "Depremlerin oluşması",
    options: [
      "Depremlerin oluşması",
      "Teokratik yönetimlerin oluşturulması",
      "Truva savaşlarının yapılması",
      "Güneş yılı esaslı takvimin yapılması",
      "Şehir devletlerinin kurulması"
    ]
  },
    {
    numb: 2,
    question: "Tarih araştırmalarında deney ve gözlem meto­dunun kullanılmamasında tarih biliminin aşa­ğıdaki özelliklerinden hangisinin etkili olduğu söylenebilir?",
    answer: "Tarihi olayların tekrarlanmaması",
    options: [
      "Tarih araştırmalarında sınıflandırılmanın yapılması",
      "Objektifliğin sağlanmasının amaçlanması",
      "Tarihi olayların neden-sonuç ilişkisinde ortaya çıkması",
      "Tarih biliminin belgelere dayanması",
      "Tarihi olayların tekrarlanmaması"
    ]
  },
    {
    numb: 3,
    question: 'Bir olayın evrensel olmasında; <br>I.tarihi çağların içinde olması, <br>II.bir çok toplum üzerinde etkisinin olması, <br>III.deney ve gözlem metodunun uygulanması; verilenlerden hangisine uygun olmasının ge­rekli olduğu söylenebilir? ',
    answer: "Yalnız II",
    options: [
      "Yalnız I",
      "Yalnız II",
      "Yalnız III",
      "I ve II",
      "II ve III"
    ]
  },
    {
    numb: 4,
    question: 'Konya Çatalhöyük’te kazılarda ortaya çıkan; <br>I.orak, saban ve tahıl öğütme taşları, <br> II.orak, saban ve tahıl öğütme taşları, <br> III.tahıl saklama kapları; buluntulardan hangilerinin “ilk üretim merkezi’’ sayılmasında etkili olduğu savunulabilir?',
    answer: "I ve II",
    options: [
        "Yalnız I",
        "Yalnız II",
        "Yalnız III",
        "I ve II",
        "I,II ve III"
    ]
  },
    {
    numb: 5,
    question: 'Yapılan bir araştırmada MÖ 3500 yıllarında ya­şayan iki kavimden birinin Cilalı Taş devrini ya­şarken diğerinin Demir devrini yaşadığı görül­müştür. Bu durum; <br>I.toplumsal etkileşimin oldukça fazla olması, <br>II.aynı anda aynı dönemin yaşanmaması,<br> III.Tarih Öncesi dönemin sırasıyla yaşanması; sonuçlarından hangilerini doğrular nitelikte­dir? ',
    answer: "Yalnız II",
    options: [
      "Yalnız I",
      "Yalnız II",
      "Yalnız III",
      "I ve II",
      "II ve III."
    ]
  },

  {
    numb: 6,
    question: 'Tarih ve dil çalışmalarına önem veren Atatürk "Tarih yazmak, tarih yapmaktan daha zordur. Ya­zan yapana sadık kalmazsa değişmeyen gerçek­ler, insanlığı şaşırtıcı bir nitelik kazanır." diyerek tarihi araştırmalarda; <br>I.belgelere bağlı kalmanın gerekliliği<br> II.objektif olunması, <br>III.doğru bilgiye ulaşabilmek için yazılı yazısız kaynaklardan yararlanma; durumlarından hangilerinin önemini vurgu­lanmıştır? ',
    answer: "I,II ve III",
    options: [
      "Yalnız I",
      "Yalnız II",
      "Yalnız III",
      "I ve III",
      "I,II ve III"
    ]
  },

  {
    numb: 7,
    question: "Paleolitik dönemde insanlar; göçebe yaşamışlardır, tüketicilerdir, mağara duvarlarına resimler yapılmıştır. Bu bilgilere göre aşağıdakilerden hangisi ile ilgili bir gelişme olduğu söylenemez?",
    answer: "Ticari faaliyetleri",
    options: [
      "Sanat anlayışı",
      "Ticari faaliyetleri",
      "Yaşam tarzları",
      "Geçim kaynakları",
      "Barınma şartları"
    ]
  },

  {
    numb: 8,
    question: 'Tarih Öncesi devirleri kronolojik sürece uy­gun olarak yaşayan bir yerleşim merkezinde yapılan kazılarda; <br>I.Cilalı taş devrinde tarımsal üretime geçildiği, <br>II.İlk işlenen madenin demir olduğu, <br>III.Dışardan fazla göçler almadığı; bulgularından hangilerine ulaşılabilir?',
    answer: "I ve III",
    options: [
      "Yalnız I",
      "Yalnız II",
      "Yalnız III",
      "I ve II",
      "I ve III"
    ]
  },

  {
    numb: 9,
    question: "Tarihite meydana gelen bir olay hakkında doğru bilgilere ulaşmak için aşağıdaki kural­lardan hangisine bağlı kalınmasına gerek ol­duğu söylenemez?",
    answer: "Tarihçiler tarafından yazılmalıdır.",
    options: [
      "Belgelerin doğruluğu araştırılmalıdır.",
      "Yer ve zaman olgularının bilinmesi gereklidir.",
      "Nesnel kaynaklara dayanarak açıklanmalıdır.",
      "Önceki ve sonraki olaylarla ilişkisi belirtilmelidir.",
      "Tarihçiler tarafından yazılmalıdır."
    ]
  },

  {
    numb: 10,
    question: "Neolitik devirde, havaların iyileşmesiyle insanlar mağaralardan çıkıp su kenarlarına ve vadilere yerleşmişlerdir. Buna göre, aşağıdakilerden hangisi söylene­bilir?",
    answer: "Coğrafi şartlar insan yaşantısına etki etmemiştir.",
    options: [
      "Coğrafi şartlar insan yaşantısına etki etmemiştir.",
      "Sanatsal faaliyetler başlamıştır.",
      "Tarihi çağlar başlamıştır.",
      "Bilimsel çalışmalar yapılmıştır.",
      "Göçebe hayat tarzı benimsenmiştir."
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