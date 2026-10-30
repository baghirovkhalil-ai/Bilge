/* Fizika, Kimya, Biologiya, Coğrafiya */
(function (A) {
  let s = "fizika";
  A(s, 6, { t: "Fiziki kəmiyyətlər və ölçmə", L: { p: "Fizika təbiət hadisələrini öyrənir. Hər hadisəni kəmiyyətlərlə ölçür və vahidlərlə ifadə edir.", k: ["Beynəlxalq vahidlər sistemi (BS): uzunluq — metr, kütlə — kiloqram, zaman — saniyə.", "1 km = 1000 m, 1 m = 100 sm, 1 sm = 10 mm.", "Ölçmə cihazları: xətkeş, tərəzi, saat, termometr."], x: "Sinif otağının uzunluğu 8 m = 800 sm.", r: "Kəmiyyəti yazanda həmişə vahidi də göstər: 5 m, 2 kq." }, Q: [
    [1, "Beynəlxalq sistemdə uzunluğun vahidi nədir?", ["metr", "kiloqram", "saniyə", "litr"], "Uzunluq metrlə ölçülür."],
    [1, "Kütləni hansı cihazla ölçürük?", ["tərəzi", "termometr", "xətkeş", "saat"], "Kütlə tərəzi ilə ölçülür."],
    [1, "1 km neçə metrdir?", ["1000 m", "100 m", "10 m", "10 000 m"], "Kilo — 1000 deməkdir."],
    [2, "Temperaturu hansı cihaz ölçür?", ["termometr", "barometr", "dinamometr", "ampermetr"], "Termometr temperaturu ölçür."],
    [2, "2,5 m neçə santimetrdir?", ["250 sm", "25 sm", "2500 sm", "0,25 sm"], "1 m = 100 sm, 2,5 × 100 = 250."],
    [3, "Hansı fiziki kəmiyyət deyil?", ["gözəllik", "kütlə", "temperatur", "zaman"], "Gözəllik ölçülə bilən fiziki kəmiyyət deyil."],
    [3, "BS-də zamanın vahidi hansıdır?", ["saniyə", "dəqiqə", "saat", "gün"], "Əsas vahid — saniyə (s)."] ] });
  A(s, 7, { t: "Mexaniki hərəkət və sürət", L: { p: "Cismin vaxt keçdikcə başqa cisimlərə nəzərən yerini dəyişməsi mexaniki hərəkətdir.", k: ["Sürət: v = s / t (yol / zaman).", "Sürətin vahidi: m/s və ya km/saat.", "36 km/saat = 10 m/s (km/saatı 3,6-ya bölürük)."], x: "Avtobus 2 saatda 120 km yol getdi: v = 120 : 2 = 60 km/saat.", r: "Yol: s = v · t, zaman: t = s / v." }, Q: [
    [1, "Sürətin düsturu hansıdır?", ["v = s / t", "v = s · t", "v = t / s", "v = m · g"], "Sürət = yol / zaman."],
    [1, "Maşın 3 saatda 180 km getdi. Sürəti neçədir?", ["60 km/saat", "540 km/saat", "90 km/saat", "30 km/saat"], "180 : 3 = 60."],
    [1, "Sürətin BS-də vahidi hansıdır?", ["m/s", "km", "kq", "N"], "Metr / saniyə."],
    [2, "72 km/saat neçə m/s-dir?", ["20 m/s", "72 m/s", "7,2 m/s", "36 m/s"], "72 : 3,6 = 20 m/s."],
    [2, "Velosipedçi 5 m/s sürətlə 10 s hərəkət etdi. Yolu neçədir?", ["50 m", "2 m", "15 m", "500 m"], "s = v · t = 5 · 10 = 50 m."],
    [3, "Qatar 90 km/saat sürətlə 270 km yolu neçə saata gedər?", ["3 saat", "2 saat", "4 saat", "27 saat"], "t = s / v = 270 / 90 = 3."],
    [3, "Hansı hərəkət bərabərsürətli sayılır?", ["Bərabər zamanlarda bərabər yollar gedilir", "Sürət daim artır", "Cisim dayanıb", "Cisim dairə üzrə sürətlənir"], "Bərabərsürətli hərəkətdə sürət sabitdir."] ] });
  A(s, 8, { t: "Qüvvə və Nyuton qanunları", L: { p: "Qüvvə cisimlərin qarşılıqlı təsirinin ölçüsüdür, nyutonla (N) ölçülür.", k: ["Nyutonun II qanunu: F = m · a.", "Ağırlıq qüvvəsi: F = m · g, g ≈ 9,8 m/s² (məsələlərdə çox vaxt 10 götürülür).", "III qanun: təsir əks-təsirə bərabərdir."], x: "Kütləsi 2 kq olan cismə ağırlıq qüvvəsi: 2 · 10 = 20 N.", r: "Qüvvə dinamometrlə ölçülür." }, Q: [
    [1, "Qüvvənin vahidi nədir?", ["Nyuton (N)", "Coul (C)", "Vatt (Vt)", "Paskal (Pa)"], "Qüvvə nyutonla ölçülür."],
    [1, "Qüvvəni ölçən cihaz hansıdır?", ["dinamometr", "termometr", "barometr", "voltmetr"], "Dinamometr."],
    [1, "Nyutonun II qanununun düsturu:", ["F = m · a", "F = m / a", "E = mc²", "P = F / S"], "Qüvvə = kütlə × təcil."],
    [2, "5 kq cismə 2 m/s² təcil vermək üçün nə qədər qüvvə lazımdır?", ["10 N", "2,5 N", "7 N", "3 N"], "F = 5 · 2 = 10 N."],
    [2, "Kütləsi 3 kq olan cismin ağırlıq qüvvəsi (g = 10 m/s²)?", ["30 N", "3 N", "13 N", "0,3 N"], "F = m · g = 3 · 10 = 30 N."],
    [3, "Nyutonun III qanunu nəyi ifadə edir?", ["Təsir əks-təsirə bərabərdir", "Cisim ətalətlə hərəkət edir", "F = ma", "Enerji saxlanır"], "Qüvvələr cüt-cüt yaranır."],
    [3, "20 N qüvvə 4 kq cismə hansı təcili verir?", ["5 m/s²", "80 m/s²", "16 m/s²", "0,2 m/s²"], "a = F / m = 20 / 4 = 5."] ] });
  A(s, 9, { t: "Elektrik cərəyanı və Om qanunu", L: { p: "Elektrik cərəyanı yüklü hissəciklərin nizamlı hərəkətidir.", k: ["Cərəyan şiddəti (I) — amper (A), gərginlik (U) — volt (V), müqavimət (R) — om (Ω).", "Om qanunu: I = U / R.", "Ampermetr dövrəyə ardıcıl, voltmetr paralel qoşulur."], x: "U = 12 V, R = 4 Ω → I = 3 A.", r: "Ev şəbəkəsində gərginlik 220 V-dur." }, Q: [
    [1, "Cərəyan şiddətinin vahidi nədir?", ["Amper", "Volt", "Om", "Vatt"], "I — amperlə ölçülür."],
    [1, "Gərginliyi hansı cihaz ölçür?", ["voltmetr", "ampermetr", "dinamometr", "termometr"], "Voltmetr."],
    [1, "Om qanunu hansıdır?", ["I = U / R", "I = U · R", "U = I / R", "R = U · I"], "Cərəyan = gərginlik / müqavimət."],
    [2, "U = 220 V, R = 110 Ω. I = ?", ["2 A", "0,5 A", "330 A", "24 200 A"], "220 / 110 = 2 A."],
    [2, "Müqavimətin vahidi nədir?", ["Om", "Amper", "Coul", "Nyuton"], "R — om (Ω)."],
    [3, "I = 0,5 A, R = 20 Ω. Gərginlik neçədir?", ["10 V", "40 V", "20,5 V", "0,025 V"], "U = I · R = 0,5 · 20 = 10 V."],
    [3, "Ampermetr dövrəyə necə qoşulur?", ["Ardıcıl", "Paralel", "Qısaqapanma ilə", "Qoşulmur"], "Bütün cərəyan ondan keçməlidir."] ] });
  A(s, 10, { t: "İş, güc və enerji", L: { p: "Qüvvə cismi yerdəyişməyə məcbur edəndə iş görülür. Enerji iş görmə qabiliyyətidir.", k: ["Mexaniki iş: A = F · s, vahidi coul (C).", "Kinetik enerji: Eₖ = mv² / 2; potensial enerji: Eₚ = mgh.", "Güc: N = A / t, vahidi vatt (Vt)."], x: "10 N qüvvə cismi 5 m apardı: A = 50 C.", r: "Enerji yox olmur, bir növdən başqasına keçir." }, Q: [
    [1, "İşin vahidi nədir?", ["Coul", "Vatt", "Nyuton", "Amper"], "A — coulla ölçülür."],
    [1, "Gücün vahidi nədir?", ["Vatt", "Coul", "Paskal", "Om"], "N — vatt."],
    [1, "Mexaniki işin düsturu:", ["A = F · s", "A = F / s", "A = m · g", "A = U · I · R"], "Qüvvə × yol."],
    [2, "2 kq cisim 5 m/s sürətlə hərəkət edir. Kinetik enerjisi?", ["25 C", "10 C", "50 C", "5 C"], "Eₖ = 2 · 25 / 2 = 25 C."],
    [2, "1 kq cisim 10 m hündürlükdədir (g = 10). Potensial enerjisi?", ["100 C", "10 C", "1000 C", "20 C"], "Eₚ = 1 · 10 · 10 = 100 C."],
    [3, "Mühərrik 10 s-də 2000 C iş görür. Gücü?", ["200 Vt", "20 000 Vt", "2010 Vt", "20 Vt"], "N = 2000 / 10 = 200 Vt."],
    [3, "Enerjinin saxlanma qanunu nə deyir?", ["Enerji yox olmur, bir növdən digərinə keçir", "Enerji həmişə artır", "Enerji yalnız istilikdir", "Enerji kütlədən asılı deyil"], "Qapalı sistemdə tam enerji sabitdir."] ] });
  A(s, 11, { t: "İşıq və optika", L: { p: "İşıq elektromaqnit dalğasıdır. Vakuumda sürəti təxminən 300 000 km/s-dir.", k: ["Qayıtma qanunu: düşmə bucağı qayıtma bucağına bərabərdir.", "Sınma: işıq bir mühitdən digərinə keçəndə istiqamətini dəyişir.", "Toplayıcı linza şüaları fokusda toplayır, səpici linza dağıdır."], x: "Günəşdən gələn işıq Yerə təxminən 8 dəqiqəyə çatır.", r: "Ağ işıq prizmada 7 rəngə ayrılır." }, Q: [
    [1, "İşığın vakuumda sürəti təxminən nə qədərdir?", ["300 000 km/s", "300 km/s", "3000 km/s", "340 m/s"], "c ≈ 3·10⁸ m/s."],
    [1, "Düşmə bucağı 30° olarsa, qayıtma bucağı neçədir?", ["30°", "60°", "90°", "15°"], "Qayıtma qanunu: bucaqlar bərabərdir."],
    [1, "Ağ işıq prizmadan keçəndə neçə rəngə ayrılır?", ["7", "3", "5", "12"], "Göy qurşağının 7 rəngi."],
    [2, "Şüaları bir nöqtədə toplayan linza hansıdır?", ["Toplayıcı linza", "Səpici linza", "Müstəvi güzgü", "Prizma"], "Fokusda toplayır."],
    [2, "İşığın sınması nə vaxt baş verir?", ["Bir mühitdən digərinə keçəndə", "Yalnız güzgüdə", "Qaranlıqda", "Vakuumda"], "Mühitlər sərhədində istiqamət dəyişir."],
    [3, "Günəş işığı Yerə təxminən neçə dəqiqəyə çatır?", ["8", "1", "30", "60"], "Təxminən 8 dəqiqə 20 saniyə."],
    [3, "Səs vakuumda yayılırmı?", ["Yayılmır", "Yayılır, işıqdan sürətli", "Yayılır, işıq qədər sürətli", "Yalnız gecə yayılır"], "Səs üçün mühit lazımdır, işıq isə vakuumda yayılır."] ] });

  s = "kimya";
  A(s, 7, { t: "Maddə və kimyəvi element", L: { p: "Kimya maddələri, onların tərkibini və çevrilmələrini öyrənir. Kimyəvi element eyni növ atomların toplusudur.", k: ["Elementlərin simvolları: H — hidrogen, O — oksigen, C — karbon, Fe — dəmir, Na — natrium.", "Sadə maddə bir elementdən (O₂), mürəkkəb maddə bir neçə elementdən ibarətdir (H₂O).", "Fiziki hadisədə maddə dəyişmir, kimyəvi hadisədə yeni maddə yaranır."], x: "Suyun formulu H₂O: 2 hidrogen, 1 oksigen atomu.", r: "Dəmirin paslanması kimyəvi, buzun əriməsi fiziki hadisədir." }, Q: [
    [1, "Suyun kimyəvi formulu hansıdır?", ["H₂O", "CO₂", "O₂", "NaCl"], "2 hidrogen + 1 oksigen."],
    [1, "“O” simvolu hansı elementdir?", ["Oksigen", "Qızıl", "Osmium", "Ozon"], "O — oksigen."],
    [1, "“Fe” hansı elementdir?", ["Dəmir", "Flüor", "Fosfor", "Fransium"], "Fe — dəmir (ferrum)."],
    [2, "Hansı kimyəvi hadisədir?", ["Dəmirin paslanması", "Buzun əriməsi", "Suyun qaynaması", "Şüşənin sınması"], "Yeni maddə — pas yaranır."],
    [2, "Hansı sadə maddədir?", ["O₂", "H₂O", "CO₂", "NaCl"], "Bir elementdən ibarətdir."],
    [3, "“Na” simvolu hansı elementə aiddir?", ["Natrium", "Azot", "Neon", "Nikel"], "Na — natrium."],
    [3, "CO₂ molekulunda neçə atom var?", ["3", "2", "4", "1"], "1 karbon + 2 oksigen."] ] });
  A(s, 8, { t: "Atomun quruluşu və dövri sistem", L: { p: "Atom müsbət yüklü nüvədən və onun ətrafında hərəkət edən elektronlardan ibarətdir.", k: ["Proton (+), neytron (yüksüz) nüvədə, elektron (−) nüvənin ətrafındadır.", "Elementin sıra nömrəsi = protonların sayı = elektronların sayı.", "Dövri sistemi D.İ. Mendeleyev 1869-cu ildə yaradıb."], x: "Oksigenin sıra nömrəsi 8: 8 proton, 8 elektron.", r: "Neytron sayı = nisbi atom kütləsi − proton sayı." }, Q: [
    [1, "Elektronun yükü necədir?", ["Mənfi", "Müsbət", "Yüksüz", "Dəyişkən"], "Elektron (−)."],
    [1, "Dövri sistemi kim yaradıb?", ["Mendeleyev", "Nyuton", "Eynşteyn", "Darvin"], "1869, D.İ. Mendeleyev."],
    [1, "Atomun nüvəsində hansı hissəciklər var?", ["Proton və neytron", "Yalnız elektron", "Elektron və proton", "Foton"], "Elektronlar nüvənin ətrafındadır."],
    [2, "Sıra nömrəsi 11 olan atomda neçə proton var?", ["11", "22", "12", "1"], "Proton sayı = sıra nömrəsi."],
    [2, "Neytronun yükü necədir?", ["Yüksüz", "Mənfi", "Müsbət", "+2"], "Neytron elektrik yükü daşımır."],
    [3, "Karbonun sıra nömrəsi 6, nisbi kütləsi 12. Neytron sayı?", ["6", "12", "18", "2"], "12 − 6 = 6."],
    [3, "Dövri sistem neçənci ildə yaradılıb?", ["1869", "1905", "1789", "1950"], "1869-cu il."] ] });
  A(s, 9, { t: "Kimyəvi reaksiyalar", L: { p: "Kimyəvi reaksiyada başlanğıc maddələr yeni maddələrə çevrilir. Tənlikdə atomların sayı hər iki tərəfdə eyni olmalıdır.", k: ["Kütlənin saxlanma qanunu: reaksiyadan əvvəl və sonra kütlə eynidir.", "Birləşmə: 2H₂ + O₂ → 2H₂O.", "Parçalanma: 2H₂O → 2H₂ + O₂ (elektroliz)."], x: "C + O₂ → CO₂ — kömürün yanması.", r: "Əmsalları formulun önünə yazırıq, indeksləri dəyişmirik." }, Q: [
    [1, "Kütlənin saxlanma qanununa görə reaksiyada kütlə…", ["dəyişmir", "artır", "azalır", "iki dəfə artır"], "Atomlar yox olmur, yenidən qruplaşır."],
    [1, "C + O₂ → CO₂ hansı reaksiyadır?", ["Birləşmə (yanma)", "Parçalanma", "Əvəzetmə", "Mübadilə"], "İki maddədən biri yaranır."],
    [1, "Reaksiya tənliyində ox (→) nəyi bildirir?", ["Yeni maddələrin yaranmasını", "Bərabərliyi", "Toplamanı", "Temperaturu"], "Başlanğıc maddələr → məhsullar."],
    [2, "2H₂ + O₂ → 2H₂O tənliyində sağ tərəfdə neçə hidrogen atomu var?", ["4", "2", "6", "1"], "2 · 2 = 4."],
    [2, "Hansı reaksiya parçalanmadır?", ["2H₂O → 2H₂ + O₂", "C + O₂ → CO₂", "Fe + S → FeS", "2Na + Cl₂ → 2NaCl"], "Bir maddədən bir neçə maddə yaranır."],
    [3, "__H₂ + O₂ → 2H₂O. Boşluğa hansı əmsal yazılmalıdır?", ["2", "1", "3", "4"], "Sağda 4 H var, solda 2H₂ lazımdır."],
    [3, "Reaksiya zamanı istilik ayrılırsa, belə reaksiya necə adlanır?", ["Ekzotermik", "Endotermik", "Katalitik", "Dönən"], "Ekzotermik — istilik ayrılır."] ] });
  A(s, 10, { t: "Turşular, əsaslar, duzlar", L: { p: "Maddələrin mühiti pH şkalası ilə ölçülür: 0-dan 14-ə qədər.", k: ["pH < 7 — turş, pH = 7 — neytral, pH > 7 — qələvi mühit.", "Turşular: HCl (xlorid), H₂SO₄ (sulfat); əsaslar: NaOH.", "Turşu + əsas → duz + su (neytrallaşma)."], x: "HCl + NaOH → NaCl + H₂O. NaCl — xörək duzudur.", r: "Lakmus turşuda qırmızı, qələvidə göy olur." }, Q: [
    [1, "Xalis suyun pH-ı neçədir?", ["7", "1", "14", "0"], "Neytral mühit."],
    [1, "Xörək duzunun formulu:", ["NaCl", "HCl", "NaOH", "H₂SO₄"], "Natrium xlorid."],
    [1, "pH < 7 olan mühit necədir?", ["Turş", "Qələvi", "Neytral", "Duzlu"], "7-dən kiçik — turş."],
    [2, "Turşu ilə əsasın reaksiyası necə adlanır?", ["Neytrallaşma", "Yanma", "Elektroliz", "Polimerləşmə"], "Duz və su yaranır."],
    [2, "Hansı maddə əsasdır?", ["NaOH", "HCl", "NaCl", "CO₂"], "Natrium hidroksid — qələvi."],
    [3, "HCl + NaOH → ? + H₂O", ["NaCl", "NaH", "Cl₂", "HNa"], "Neytrallaşma: natrium xlorid."],
    [3, "Lakmus qələvi mühitdə hansı rəngə boyanır?", ["Göy", "Qırmızı", "Sarı", "Rəngsiz qalır"], "Qələvidə göy, turşuda qırmızı."] ] });
  A(s, 11, { t: "Üzvi kimya əsasları", L: { p: "Üzvi kimya karbon birləşmələrini öyrənir. Ən sadə üzvi maddələr karbohidrogenlərdir.", k: ["Metan — CH₄, təbii qazın əsas hissəsi.", "Etilen — C₂H₄, etanol (spirt) — C₂H₅OH.", "Neft karbohidrogenlər qarışığıdır; Azərbaycan qədim neft ölkəsidir."], x: "Metanın yanması: CH₄ + 2O₂ → CO₂ + 2H₂O.", r: "Üzvi maddələrin əsasını karbon atomları təşkil edir." }, Q: [
    [1, "Üzvi kimya hansı elementin birləşmələrini öyrənir?", ["Karbon", "Dəmir", "Natrium", "Helium"], "Karbon birləşmələri."],
    [1, "Təbii qazın əsas tərkib hissəsi:", ["Metan", "Oksigen", "Azot", "Xlor"], "CH₄."],
    [1, "Metanın formulu:", ["CH₄", "C₂H₆", "CO₂", "H₂O"], "1 karbon, 4 hidrogen."],
    [2, "Etanolun formulu:", ["C₂H₅OH", "CH₃COOH", "C₆H₁₂O₆", "CH₄"], "Etil spirti."],
    [2, "Neft nədir?", ["Karbohidrogenlər qarışığı", "Sadə maddə", "Metal", "Duz məhlulu"], "Müxtəlif karbohidrogenlərin qarışığı."],
    [3, "CH₄ + 2O₂ → CO₂ + 2H₂O reaksiyası nəyi göstərir?", ["Metanın yanmasını", "Suyun parçalanmasını", "Fotosintezi", "Neytrallaşmanı"], "Metan yanaraq CO₂ və su əmələ gətirir."],
    [3, "Etilenin formulu hansıdır?", ["C₂H₄", "C₂H₂", "C₂H₆", "C₃H₈"], "Etilen — C₂H₄."] ] });

  s = "biologiya";
  A(s, 6, { t: "Hüceyrə", L: { p: "Hüceyrə bütün canlıların quruluş və həyat vahididir.", k: ["Əsas hissələri: hüceyrə membranı, sitoplazma, nüvə.", "Nüvədə irsi məlumat saxlanılır.", "Bitki hüceyrəsində hüceyrə divarı və xloroplast var, heyvan hüceyrəsində yoxdur."], x: "Soğan qabığının hüceyrələrini mikroskopla görmək olar.", r: "Mikroskop hüceyrələri böyüdərək göstərir." }, Q: [
    [1, "Canlıların quruluş vahidi nədir?", ["Hüceyrə", "Atom", "Orqan", "Toxuma"], "Hər canlı hüceyrələrdən ibarətdir."],
    [1, "Hüceyrəni görmək üçün hansı cihazdan istifadə olunur?", ["Mikroskop", "Teleskop", "Termometr", "Barometr"], "Mikroskop böyüdür."],
    [1, "İrsi məlumat hüceyrənin hansı hissəsindədir?", ["Nüvə", "Membran", "Sitoplazma", "Vakuol"], "Nüvədə."],
    [2, "Xloroplast hansı hüceyrələrdə olur?", ["Bitki", "Heyvan", "İnsan qanı", "Göbələk"], "Fotosintez xloroplastlarda gedir."],
    [2, "Hüceyrəni xaricdən əhatə edən nazik təbəqə:", ["Membran", "Nüvə", "Sitoplazma", "Xromosom"], "Hüceyrə membranı."],
    [3, "Bitki hüceyrəsini heyvan hüceyrəsindən fərqləndirən əlamət:", ["Hüceyrə divarı", "Nüvə", "Sitoplazma", "Membran"], "Bitkilərdə möhkəm hüceyrə divarı var."],
    [3, "Hüceyrənin daxilini dolduran yarımmaye mühit:", ["Sitoplazma", "Nüvə", "Divar", "Xloroplast"], "Sitoplazma."] ] });
  A(s, 7, { t: "Bitkilər və fotosintez", L: { p: "Yaşıl bitkilər günəş işığında öz qidasını özü hazırlayır. Bu prosesə fotosintez deyilir.", k: ["Fotosintez: karbon qazı + su + işıq → qlükoza + oksigen.", "Yaşıl rəng xlorofildən gəlir.", "Bitkinin orqanları: kök, gövdə, yarpaq, çiçək, meyvə, toxum."], x: "Meşələr atmosferə oksigen verir.", r: "Kök suyu və mineral maddələri torpaqdan sorur." }, Q: [
    [1, "Fotosintez zamanı bitki havaya hansı qazı verir?", ["Oksigen", "Karbon qazı", "Azot", "Hidrogen"], "Fotosintezin məhsulu oksigendir."],
    [1, "Bitkiyə yaşıl rəng verən maddə:", ["Xlorofil", "Hemoqlobin", "Melanin", "Nişasta"], "Xlorofil."],
    [1, "Torpaqdan suyu hansı orqan sorur?", ["Kök", "Yarpaq", "Çiçək", "Meyvə"], "Kök."],
    [2, "Fotosintez üçün nə lazım deyil?", ["Qaranlıq", "İşıq", "Su", "Karbon qazı"], "İşıq mütləqdir."],
    [2, "Fotosintez əsasən bitkinin hansı orqanında gedir?", ["Yarpaq", "Kök", "Toxum", "Gövdənin qabığı"], "Yarpaqlarda xloroplastlar çoxdur."],
    [3, "Fotosintez zamanı hansı üzvi maddə yaranır?", ["Qlükoza", "Zülal", "Yağ", "Duz"], "CO₂ + H₂O → C₆H₁₂O₆ + O₂."],
    [3, "Toxum bitkinin hansı orqanının içində yetişir?", ["Meyvə", "Kök", "Yarpaq", "Gövdə"], "Toxum meyvədə olur."] ] });
  A(s, 8, { t: "Heyvanlar aləmi", L: { p: "Heyvanlar onurğalı və onurğasız olmaqla iki böyük qrupa bölünür.", k: ["Onurğalıların sinifləri: balıqlar, suda-quruda yaşayanlar, sürünənlər, quşlar, məməlilər.", "Məməlilər balalarını südlə bəsləyir.", "Onurğasızlar: həşəratlar, molyusklar, qurdlar."], x: "Qurbağa suda-quruda yaşayan, ilan sürünən, delfin məməlidir.", r: "Balina balıq deyil, məməlidir." }, Q: [
    [1, "Balalarını südlə bəsləyən heyvanlar:", ["Məməlilər", "Quşlar", "Balıqlar", "Sürünənlər"], "Məməlilər."],
    [1, "Qurbağa hansı sinfə aiddir?", ["Suda-quruda yaşayanlar", "Sürünənlər", "Balıqlar", "Məməlilər"], "Həm suda, həm quruda yaşayır."],
    [1, "Hansı heyvan onurğasızdır?", ["Kəpənək", "Pişik", "Qartal", "Balıq"], "Həşəratlar onurğasızdır."],
    [2, "Delfin hansı sinfə aiddir?", ["Məməlilər", "Balıqlar", "Sürünənlər", "Suda-quruda yaşayanlar"], "Ağciyərlə nəfəs alır, balasını südlə bəsləyir."],
    [2, "Tısbağa hansı sinfə aiddir?", ["Sürünənlər", "Suda-quruda yaşayanlar", "Məməlilər", "Balıqlar"], "Sürünəndir."],
    [3, "Həşəratların neçə cüt ayağı var?", ["3", "4", "2", "5"], "6 ayaq — 3 cüt."],
    [3, "Balıqlar nə ilə nəfəs alır?", ["Qəlsəmə", "Ağciyər", "Dəri", "Traxeya"], "Qəlsəmələrlə suda həll olmuş oksigeni alır."] ] });
  A(s, 9, { t: "İnsan orqanizmi", L: { p: "İnsan orqanizmi bir-biri ilə əlaqəli orqan sistemlərindən ibarətdir.", k: ["Ürək 4 kameralıdır: 2 qulaqcıq, 2 mədəcik.", "Yetkin insanın skeletində təxminən 206 sümük var.", "Ağciyərlərdə qan oksigenlə zənginləşir."], x: "Qan damarları: arteriyalar qanı ürəkdən aparır, venalar ürəyə gətirir.", r: "Sağlam həyat: idman, yuxu, düzgün qidalanma." }, Q: [
    [1, "İnsan ürəyi neçə kameralıdır?", ["4", "2", "3", "6"], "2 qulaqcıq + 2 mədəcik."],
    [1, "Nəfəs alma orqanı hansıdır?", ["Ağciyər", "Mədə", "Qaraciyər", "Böyrək"], "Ağciyər."],
    [1, "Qanı bədənə vuran orqan:", ["Ürək", "Beyin", "Mədə", "Dəri"], "Ürək nasos rolunu oynayır."],
    [2, "Yetkin insanın skeletində təxminən neçə sümük var?", ["206", "106", "306", "56"], "Təxminən 206."],
    [2, "Qanı ürəkdən aparan damarlar:", ["Arteriyalar", "Venalar", "Limfa", "Sinirlər"], "Arteriyalar."],
    [3, "Qanda oksigeni daşıyan maddə:", ["Hemoqlobin", "Xlorofil", "İnsulin", "Ferment"], "Eritrositlərdəki hemoqlobin."],
    [3, "Qanı süzən və sidik əmələ gətirən orqan:", ["Böyrək", "Ağciyər", "Ürək", "Dalaq"], "Böyrəklər."] ] });
  A(s, 10, { t: "Genetika əsasları", L: { p: "Genetika irsiyyəti və dəyişkənliyi öyrənir. İrsi məlumat DNT-də yazılıb.", k: ["Gen — DNT-nin müəyyən əlaməti təyin edən hissəsi.", "İnsanın somatik hüceyrəsində 46 xromosom (23 cüt) var.", "Genetikanın banisi Qreqor Mendeldir (noxud üzərində təcrübələr)."], x: "Göz rəngi, qan qrupu irsən keçən əlamətlərdir.", r: "Dominant əlamət resessivi üstələyir." }, Q: [
    [1, "İrsi məlumat hansı molekulda saxlanılır?", ["DNT", "Su", "Qlükoza", "Yağ"], "DNT."],
    [1, "Genetikanın banisi kimdir?", ["Qreqor Mendel", "Çarlz Darvin", "Lui Paster", "İsaak Nyuton"], "Mendel, noxud təcrübələri."],
    [1, "Genetika nəyi öyrənir?", ["İrsiyyət və dəyişkənliyi", "Ulduzları", "Mineralları", "Hava şəraitini"], "İrsiyyət elmi."],
    [2, "İnsanın somatik hüceyrəsində neçə xromosom var?", ["46", "23", "48", "92"], "23 cüt — 46."],
    [2, "Mendel təcrübələrini hansı bitki üzərində aparmışdır?", ["Noxud", "Buğda", "Qarğıdalı", "Pomidor"], "Noxud."],
    [3, "Cinsi hüceyrələrdə (qametlərdə) neçə xromosom olur?", ["23", "46", "12", "92"], "Somatik hüceyrənin yarısı."],
    [3, "Başqa əlaməti üstələyən əlamət necə adlanır?", ["Dominant", "Resessiv", "Mutasiya", "Modifikasiya"], "Dominant əlamət özünü göstərir."] ] });
  A(s, 11, { t: "Ekologiya", L: { p: "Ekologiya canlıların bir-biri və mühitlə əlaqəsini öyrənir.", k: ["Qida zənciri: istehsalçılar (bitkilər) → istehlakçılar (heyvanlar) → parçalayıcılar (bakteriya, göbələk).", "Ekosistem: canlılar və onların yaşadığı mühit birlikdə.", "“Qırmızı kitab” nəsli kəsilmək təhlükəsində olan növləri qeyd edir."], x: "Ot → dovşan → tülkü — sadə qida zənciri.", r: "Azərbaycanda Hirkan və Göygöl milli parkları qorunan ərazilərdir." }, Q: [
    [1, "Qida zəncirində istehsalçılar kimlərdir?", ["Yaşıl bitkilər", "Yırtıcılar", "Bakteriyalar", "Göbələklər"], "Bitkilər qidanı özləri hazırlayır."],
    [1, "Ekologiya nəyi öyrənir?", ["Canlıların mühitlə əlaqəsini", "Ulduzları", "Sümükləri", "Kimyəvi elementləri"], "Canlı və mühit əlaqəsi."],
    [1, "Nəsli kəsilməkdə olan növlər hansı kitaba yazılır?", ["Qırmızı kitab", "Yaşıl kitab", "Qara kitab", "Ağ kitab"], "Qırmızı kitab."],
    [2, "“Ot → dovşan → tülkü” zəncirində tülkü kimdir?", ["İkinci dərəcəli istehlakçı", "İstehsalçı", "Parçalayıcı", "Birinci dərəcəli istehlakçı"], "Dovşanla qidalanan yırtıcı."],
    [2, "Parçalayıcılar hansılardır?", ["Bakteriya və göbələklər", "Ağaclar", "Quşlar", "Balıqlar"], "Ölü qalıqları parçalayırlar."],
    [3, "Ekosistemə nə daxildir?", ["Canlılar və onların yaşadığı mühit", "Yalnız heyvanlar", "Yalnız bitkilər", "Yalnız torpaq"], "Canlı və cansız komponentlər birlikdə."],
    [3, "Azərbaycanda qorunan milli park hansıdır?", ["Hirkan", "Yellowstone", "Serengeti", "Banff"], "Hirkan milli parkı Lənkəran-Astara bölgəsindədir."] ] });

  s = "cografiya";
  A(s, 6, { t: "Yer kürəsi və xəritə", L: { p: "Yer kürəsinin səthinin çox hissəsini su tutur. Xəritə yer səthinin kiçildilmiş təsviridir.", k: ["Materiklər: Avrasiya, Afrika, Şimali Amerika, Cənubi Amerika, Avstraliya, Antarktida.", "Ən böyük okean — Sakit okean.", "Ekvator Yeri Şimal və Cənub yarımkürələrinə ayırır."], x: "Azərbaycan Şimal yarımkürəsində, Avrasiya materikindədir.", r: "Miqyas xəritədəki məsafənin real məsafədən neçə dəfə kiçik olduğunu göstərir." }, Q: [
    [1, "Ən böyük okean hansıdır?", ["Sakit okean", "Atlantik okean", "Hind okeanı", "Şimal Buzlu okean"], "Sakit okean."],
    [1, "Yer kürəsində neçə materik var?", ["6", "5", "7", "4"], "Altı materik."],
    [1, "Azərbaycan hansı materikdə yerləşir?", ["Avrasiya", "Afrika", "Avstraliya", "Şimali Amerika"], "Avrasiya."],
    [2, "Yeri Şimal və Cənub yarımkürələrinə ayıran xətt:", ["Ekvator", "Baş meridian", "Tropik", "Qütb dairəsi"], "Ekvator."],
    [2, "Ən soyuq materik hansıdır?", ["Antarktida", "Avrasiya", "Afrika", "Avstraliya"], "Antarktida buzla örtülüdür."],
    [3, "Yer səthinin təxminən neçə faizini su tutur?", ["71%", "50%", "29%", "90%"], "Təxminən 71%."],
    [3, "Xəritədə istiqaməti göstərən cihaz:", ["Kompas", "Barometr", "Termometr", "Hiqrometr"], "Kompas şimalı göstərir."] ] });
  A(s, 7, { t: "Materiklər və okeanlar", L: { p: "Hər materikin özünəməxsus relyefi, iqlimi və təbiəti var.", k: ["Ən böyük materik Avrasiya, ən kiçik Avstraliyadır.", "Ən böyük səhra Saxara Afrikadadır.", "Nil və Amazon dünyanın ən uzun çaylarıdır; Amazon ən sulu çaydır."], x: "Dünyanın ən hündür zirvəsi Comolunqma (Everest) — 8848 m, Himalay dağlarında.", r: "Ən dərin nöqtə — Sakit okeandakı Mariana çökəkliyi." }, Q: [
    [1, "Ən böyük materik hansıdır?", ["Avrasiya", "Afrika", "Antarktida", "Cənubi Amerika"], "Avrasiya."],
    [1, "Saxara səhrası hansı materikdədir?", ["Afrika", "Avrasiya", "Avstraliya", "Şimali Amerika"], "Afrikanın şimalında."],
    [1, "Ən kiçik materik hansıdır?", ["Avstraliya", "Antarktida", "Avrasiya", "Afrika"], "Avstraliya."],
    [2, "Dünyanın ən hündür zirvəsi hansıdır?", ["Comolunqma (Everest)", "Elbrus", "Kilimancaro", "Bazardüzü"], "8848 m."],
    [2, "Ən sulu çay hansıdır?", ["Amazon", "Nil", "Volqa", "Dunay"], "Amazon."],
    [3, "Mariana çökəkliyi hansı okeandadır?", ["Sakit", "Atlantik", "Hind", "Şimal Buzlu"], "Ən dərin nöqtə."],
    [3, "Kilimancaro hansı materikdədir?", ["Afrika", "Cənubi Amerika", "Avrasiya", "Avstraliya"], "Afrikanın ən hündür zirvəsi."] ] });
  A(s, 8, { t: "Atmosfer və iqlim", L: { p: "Atmosfer Yeri əhatə edən hava təbəqəsidir. İqlim bir ərazidə çoxillik hava rejimidir.", k: ["Havanın təxminən 78%-i azot, 21%-i oksigendir.", "Ən aşağı təbəqə troposferdir, hava hadisələri orada baş verir.", "Atmosfer təzyiqi barometrlə ölçülür."], x: "Yüksəklik artdıqca hava soyuyur: hər 1 km-də təxminən 6 °C.", r: "Ozon qatı Günəşin zərərli ultrabənövşəyi şüalarından qoruyur." }, Q: [
    [1, "Havanın tərkibində ən çox hansı qaz var?", ["Azot", "Oksigen", "Karbon qazı", "Hidrogen"], "Təxminən 78%."],
    [1, "Atmosfer təzyiqini ölçən cihaz:", ["Barometr", "Termometr", "Kompas", "Anemometr"], "Barometr."],
    [1, "Hava hadisələri atmosferin hansı təbəqəsində baş verir?", ["Troposfer", "Stratosfer", "Mezosfer", "Termosfer"], "Troposfer."],
    [2, "Havada oksigen təxminən neçə faizdir?", ["21%", "78%", "1%", "50%"], "21%."],
    [2, "Ultrabənövşəyi şüalardan qoruyan təbəqə:", ["Ozon qatı", "Bulud qatı", "Troposfer", "İonosfer"], "Ozon qatı."],
    [3, "Yüksəklik 1 km artdıqda temperatur təxminən necə dəyişir?", ["6 °C azalır", "6 °C artır", "Dəyişmir", "20 °C azalır"], "Təxminən 6 °C soyuyur."],
    [3, "Küləyin sürətini ölçən cihaz:", ["Anemometr", "Barometr", "Hiqrometr", "Seysmoqraf"], "Anemometr."] ] });
  A(s, 9, { t: "Azərbaycanın təbiəti", L: { p: "Azərbaycan Cənubi Qafqazda, Xəzər dənizinin qərb sahilində yerləşir. Ərazisi təxminən 86,6 min km²-dir.", k: ["Ən hündür zirvə — Bazardüzü (4466 m).", "Ən uzun çay — Kür.", "Xəzər dənizi dünyanın ən böyük qapalı su hövzəsidir (gölüdür)."], x: "Böyük Qafqaz, Kiçik Qafqaz və Talış dağları ölkənin əsas dağ sistemləridir.", r: "Dünyadakı 11 iqlim tipindən 9-u Azərbaycanda müşahidə olunur." }, Q: [
    [1, "Azərbaycanın ən hündür zirvəsi:", ["Bazardüzü", "Şahdağ", "Tufandağ", "Kəpəz"], "4466 m."],
    [1, "Azərbaycanın ən uzun çayı:", ["Kür", "Araz", "Samur", "Tərtər"], "Kür."],
    [1, "Azərbaycan hansı dənizin sahilindədir?", ["Xəzər", "Qara", "Aralıq", "Qırmızı"], "Xəzər dənizi."],
    [2, "Bazardüzü zirvəsinin hündürlüyü:", ["4466 m", "3629 m", "5642 m", "8848 m"], "4466 m."],
    [2, "Xəzər dənizi əslində nədir?", ["Dünyanın ən böyük gölü", "Okean körfəzi", "Çay deltası", "Su anbarı"], "Qapalı su hövzəsi, ən böyük göl."],
    [3, "Azərbaycanın ərazisi təxminən nə qədərdir?", ["86,6 min km²", "33,6 min km²", "186 min km²", "8,6 min km²"], "86,6 min km²."],
    [3, "Lənkəran ovalığının cənubundakı dağlar:", ["Talış dağları", "Böyük Qafqaz", "Kiçik Qafqaz", "Zəngəzur"], "Talış dağları."] ] });
  A(s, 10, { t: "Azərbaycanın iqtisadiyyatı", L: { p: "Azərbaycan iqtisadiyyatının əsas sahələri neft-qaz, kənd təsərrüfatı, nəqliyyat və turizmdir.", k: ["Neft hasilatının mərkəzi Abşeron yarımadası və Xəzərin dəniz yataqlarıdır.", "Bakı–Tbilisi–Ceyhan neft kəməri 2006-cı ildə istifadəyə verilib.", "2021-ci ildən ölkədə 14 iqtisadi rayon var."], x: "Gəncə, Sumqayıt, Mingəçevir — mühüm sənaye mərkəzləri.", r: "Mingəçevir su elektrik stansiyası Kür çayı üzərindədir." }, Q: [
    [1, "Azərbaycanın əsas ixrac məhsulu:", ["Neft və qaz", "Qəhvə", "Banan", "Kömür"], "Neft-qaz sektoru əsasdır."],
    [1, "Azərbaycanın paytaxtı:", ["Bakı", "Gəncə", "Sumqayıt", "Şəki"], "Bakı."],
    [1, "Neft hasilatının əsas mərkəzi:", ["Abşeron və Xəzər", "Şəki-Zaqatala", "Naxçıvan", "Lənkəran"], "Abşeron yarımadası və dəniz yataqları."],
    [2, "BTC neft kəməri hansı şəhərləri birləşdirir?", ["Bakı–Tbilisi–Ceyhan", "Bakı–Tehran–Ceyhan", "Batumi–Tbilisi–Ceyhan", "Bakı–Moskva–Ceyhan"], "Bakı–Tbilisi–Ceyhan."],
    [2, "BTC kəməri neçənci ildə istifadəyə verilib?", ["2006", "1996", "2016", "2001"], "2006-cı il."],
    [3, "2021-ci ildən Azərbaycanda neçə iqtisadi rayon var?", ["14", "10", "11", "9"], "14 iqtisadi rayon."],
    [3, "Mingəçevir SES hansı çay üzərindədir?", ["Kür", "Araz", "Samur", "Qanıx"], "Kür çayı."] ] });
  A(s, 11, { t: "Dünya əhalisi və qlobal problemlər", L: { p: "Dünya əhalisi 8 milyardı keçib və artmaqda davam edir. Bəşəriyyət ümumi problemlərlə üzləşir.", k: ["Əhalisi ən çox olan ölkələr: Hindistan və Çin.", "Qlobal problemlər: iqlim dəyişmələri, su çatışmazlığı, çirklənmə, aclıq.", "Urbanizasiya — şəhər əhalisinin payının artması."], x: "Qlobal istiləşmə buzlaqların əriməsinə və dəniz səviyyəsinin qalxmasına səbəb olur.", r: "BMT — 1945-ci ildə yaradılıb, dünya problemlərinin həllində iştirak edir." }, Q: [
    [1, "Dünya əhalisi təxminən nə qədərdir?", ["8 milyarddan çox", "2 milyard", "500 milyon", "20 milyard"], "8 milyardı keçib."],
    [1, "Hansı qlobal problemdir?", ["İqlim dəyişmələri", "Ev tapşırığı", "Futbol çempionatı", "Yeni telefon"], "Bütün bəşəriyyətə aiddir."],
    [1, "Şəhər əhalisinin artması necə adlanır?", ["Urbanizasiya", "Miqrasiya", "Demoqrafiya", "Qloballaşma"], "Urbanizasiya."],
    [2, "2023-cü ildən əhalisinə görə dünyada birinci ölkə:", ["Hindistan", "Çin", "ABŞ", "İndoneziya"], "Hindistan Çini ötüb."],
    [2, "BMT neçənci ildə yaradılıb?", ["1945", "1918", "1991", "1955"], "1945-ci il."],
    [3, "Qlobal istiləşmənin əsas səbəblərindən biri:", ["İstixana qazlarının artması", "Ay tutulması", "Zəlzələlər", "Okean axınları"], "CO₂ və digər qazlar istiliyi saxlayır."],
    [3, "Qlobal istiləşmənin nəticələrindən biri:", ["Dəniz səviyyəsinin qalxması", "Okeanların quruması", "Günəşin soyuması", "Yerin fırlanmasının dayanması"], "Buzlaqlar əriyir."] ] });
})(B.add);
