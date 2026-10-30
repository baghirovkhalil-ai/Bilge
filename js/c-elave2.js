/* Əlavə mövzular — 2: Fizika, Kimya, Biologiya, Coğrafiya, Azərbaycan tarixi */
(function (A) {
  let s = "fizika";
  A(s, 6, { t: "Maddənin halları və sıxlıq", L: { p: "Maddə bərk, maye və qaz halında olur. Sıxlıq maddənin vahid həcminin kütləsidir.", k: ["Bərk cisim forma və həcmini saxlayır, maye həcmini saxlayır, qaz qabı tam doldurur.", "Sıxlıq: ρ = m / V, vahidi kq/m³.", "Suyun sıxlığı 1000 kq/m³ (1 q/sm³)."], x: "Kütləsi 2 kq, həcmi 0,002 m³ olan suyun sıxlığı 1000 kq/m³-dir.", r: "Sıxlığı sudan kiçik olan cisimlər suda batmır." }, Q: [
    [1, "Qabı tamamilə dolduran hal:", ["Qaz", "Bərk", "Maye", "Heç biri"], "Qazın öz forması və həcmi yoxdur."],
    [1, "Sıxlığın düsturu:", ["ρ = m / V", "ρ = V / m", "ρ = m · V", "ρ = F / S"], "Kütlə / həcm."],
    [2, "Suyun sıxlığı nə qədərdir?", ["1000 kq/m³", "100 kq/m³", "10 kq/m³", "1 kq/m³"], "1000 kq/m³."],
    [2, "Hansı cisim suda batmır?", ["Sıxlığı sudan kiçik olan", "Sıxlığı sudan böyük olan", "Ağır olan", "Metal olan"], "Məsələn, taxta."],
    [3, "Kütləsi 4 kq, həcmi 0,002 m³. Sıxlıq?", ["2000 kq/m³", "8 kq/m³", "500 kq/m³", "0,008 kq/m³"], "4 / 0,002 = 2000."],
    [3, "Buzun suda üzməsinin səbəbi:", ["Buzun sıxlığı sudan kiçikdir", "Buz yüngül rəngdədir", "Buz soyuqdur", "Su buzu itələmir"], "Buzun sıxlığı ~900 kq/m³."] ] });
  A(s, 7, { t: "Təzyiq", L: { p: "Təzyiq səthə perpendikulyar təsir edən qüvvənin sahəyə nisbətidir.", k: ["p = F / S, vahidi paskal (Pa).", "Sahə kiçildikcə təzyiq artır: iti bıçaq yaxşı kəsir.", "Normal atmosfer təzyiqi ≈ 101 325 Pa ≈ 760 mm civə sütunu."], x: "100 N qüvvə 0,5 m² sahəyə: p = 200 Pa.", r: "Dərinliyə getdikcə suyun təzyiqi artır." }, Q: [
    [1, "Təzyiqin vahidi:", ["Paskal", "Nyuton", "Coul", "Vatt"], "Pa."],
    [1, "Təzyiqin düsturu:", ["p = F / S", "p = F · S", "p = m / V", "p = A / t"], "Qüvvə / sahə."],
    [2, "60 N qüvvə 3 m² sahəyə təsir edir. p = ?", ["20 Pa", "180 Pa", "63 Pa", "0,05 Pa"], "60 / 3 = 20."],
    [2, "Bıçağı itiləyəndə təzyiq necə dəyişir?", ["Artır", "Azalır", "Dəyişmir", "Sıfır olur"], "Sahə kiçilir."],
    [3, "Normal atmosfer təzyiqi neçə mm civə sütunudur?", ["760", "100", "1000", "76"], "760 mm."],
    [3, "Suyun dərinliyi artdıqca təzyiq:", ["artır", "azalır", "dəyişmir", "yox olur"], "p = ρgh."] ] });
  A(s, 8, { t: "İstilik hadisələri", L: { p: "Temperatur cismin istilik dərəcəsini göstərir. İstilik bir cisimdən digərinə üç yolla ötürülür.", k: ["İstilik ötürülmə növləri: istilikkeçirmə, konveksiya, şüalanma.", "Su dəniz səviyyəsində 100 °C-də qaynayır, 0 °C-də donur.", "Metallar istiliyi yaxşı, hava və yun pis keçirir."], x: "Batareyanın yanındakı isti hava yuxarı qalxır — konveksiya.", r: "Günəşin istiliyi Yerə şüalanma ilə çatır." }, Q: [
    [1, "Su neçə dərəcədə qaynayır (dəniz səviyyəsində)?", ["100 °C", "0 °C", "50 °C", "212 °C"], "100 °C."],
    [1, "Temperaturu ölçən cihaz:", ["Termometr", "Barometr", "Ampermetr", "Dinamometr"], "Termometr."],
    [2, "Günəşin istiliyi Yerə hansı yolla çatır?", ["Şüalanma", "Konveksiya", "İstilikkeçirmə", "Buxarlanma"], "Vakuumda yalnız şüalanma."],
    [2, "İstiliyi yaxşı keçirən maddə:", ["Mis", "Yun", "Hava", "Taxta"], "Metallar."],
    [3, "İsti havanın yuxarı qalxması hansı hadisədir?", ["Konveksiya", "Şüalanma", "İstilikkeçirmə", "Kondensasiya"], "Maye və qazlarda axınla ötürülmə."],
    [3, "Qışda pəncərələrə qoşa şüşə qoyulmasının səbəbi:", ["Aradakı hava istiliyi pis keçirir", "Daha gözəl görünür", "İşığı artırır", "Səsi artırır"], "Hava təbəqəsi istilik izolyatorudur."] ] });
  A(s, 9, { t: "Maqnetizm", L: { p: "Maqnitin iki qütbü var: şimal (N) və cənub (S). Yer kürəsi də böyük maqnitdir.", k: ["Eyni adlı qütblər itələyir, müxtəlif adlılar cəzb edir.", "Kompasın oxu Yerin maqnit sahəsinə görə şimalı göstərir.", "Elektrik cərəyanı maqnit sahəsi yaradır — elektromaqnit."], x: "Elektromaqnitlər kranlarda dəmir yükü qaldırmaq üçün işlədilir.", r: "Maqnit dəmiri cəzb edir, alüminium və misi cəzb etmir." }, Q: [
    [1, "Maqnitin neçə qütbü var?", ["2", "1", "3", "4"], "N və S."],
    [1, "Eyni adlı qütblər:", ["itələyir", "cəzb edir", "təsir etmir", "birləşir"], "N–N itələyir."],
    [2, "Kompasın oxu nəyə görə istiqamətlənir?", ["Yerin maqnit sahəsi", "Günəş", "Külək", "Ay"], "Yer — böyük maqnit."],
    [2, "Maqnit hansı metalı cəzb edir?", ["Dəmir", "Mis", "Alüminium", "Qızıl"], "Dəmir."],
    [3, "Cərəyan keçən sarğac necə adlanır?", ["Elektromaqnit", "Kondensator", "Rezistor", "Akkumulyator"], "Cərəyan maqnit sahəsi yaradır."],
    [3, "Müxtəlif adlı qütblər:", ["cəzb edir", "itələyir", "təsirsizdir", "qızır"], "N–S cəzb edir."] ] });
  A(s, 10, { t: "Rəqslər və dalğalar", L: { p: "Rəqs təkrarlanan hərəkətdir. Dalğa rəqsin mühitdə yayılmasıdır.", k: ["Tezlik (ν) — 1 saniyədəki rəqslərin sayı, vahidi hers (Hs).", "Period: T = 1 / ν.", "Səsin havada sürəti təxminən 340 m/s-dir."], x: "Tezlik 50 Hs olarsa, period 0,02 s-dir.", r: "İnsan qulağı təxminən 20–20 000 Hs səsləri eşidir." }, Q: [
    [1, "Tezliyin vahidi:", ["Hers", "Nyuton", "Paskal", "Om"], "Hs."],
    [1, "Səsin havada sürəti təxminən:", ["340 m/s", "3·10⁸ m/s", "34 m/s", "3400 km/s"], "≈ 340 m/s."],
    [2, "ν = 10 Hs. Period T = ?", ["0,1 s", "10 s", "1 s", "100 s"], "T = 1 / 10."],
    [2, "Səs vakuumda yayılırmı?", ["Xeyr", "Bəli", "Yalnız gecə", "Yalnız soyuqda"], "Mühit lazımdır."],
    [3, "İnsan qulağının eşitdiyi diapazon təxminən:", ["20–20 000 Hs", "1–10 Hs", "50 000–100 000 Hs", "0–5 Hs"], "20 Hs – 20 kHs."],
    [3, "Şimşək çaxandan 3 s sonra göy gurultusu eşidildi. Məsafə təxminən:", ["1020 m", "340 m", "113 m", "3 km"], "340 · 3 = 1020 m."] ] });
  A(s, 11, { t: "Atom və nüvə fizikası", L: { p: "Atom nüvəsi proton və neytronlardan ibarətdir. Bəzi nüvələr özbaşına parçalanır — radioaktivlik.", k: ["Radioaktiv şüalanma növləri: alfa (α), beta (β), qamma (γ).", "Yarımparçalanma dövrü — nüvələrin yarısının parçalandığı müddət.", "Eynşteyn düsturu: E = mc² — kütlə və enerjinin əlaqəsi."], x: "Yarımparçalanma dövrü 10 il olan maddənin 20 ildən sonra dörddə biri qalır.", r: "Radioaktivliyi Bekkerel (1896) kəşf edib, Kürilər tədqiq ediblər." }, Q: [
    [1, "Atom nüvəsində hansı hissəciklər var?", ["Proton və neytron", "Elektron", "Foton", "Yalnız proton"], "Nuklonlar."],
    [1, "E = mc² düsturunun müəllifi:", ["Eynşteyn", "Nyuton", "Om", "Paskal"], "Albert Eynşteyn."],
    [2, "Radioaktiv şüalanma növlərinə aid deyil:", ["Ultrasəs", "Alfa", "Beta", "Qamma"], "Ultrasəs mexaniki dalğadır."],
    [2, "Radioaktivliyi kim kəşf edib?", ["Bekkerel", "Faradey", "Edison", "Tesla"], "1896, Bekkerel."],
    [3, "Yarımparçalanma dövrü 5 gün. 15 gündən sonra ilkin miqdarın nə qədəri qalır?", ["1/8", "1/3", "1/4", "1/2"], "3 dövr: 1/2³ = 1/8."],
    [3, "Ən böyük nüfuzetmə qabiliyyətinə malik şüalanma:", ["Qamma", "Alfa", "Beta", "İnfraqırmızı"], "γ-şüalar ən dərinə keçir."] ] });

  s = "kimya";
  A(s, 7, { t: "Qarışıqlar və ayırma üsulları", L: { p: "Təbiətdə maddələr çox vaxt qarışıq halında olur. Onları fiziki üsullarla ayırmaq olar.", k: ["Süzmə — bərk hissəcikləri mayedən ayırır (qum + su).", "Buxarlandırma — həll olmuş maddəni ayırır (duzlu su → duz).", "Maqnitlə dəmir ovuntusunu kükürddən ayırmaq olar; distillə ilə təmiz su alınır."], x: "Dəniz suyundan buxarlandırma ilə duz alınır.", r: "Qarışıqda maddələr öz xassələrini saxlayır." }, Q: [
    [1, "Qumu sudan necə ayırmaq olar?", ["Süzmə ilə", "Maqnitlə", "Yandırmaqla", "Qarışdırmaqla"], "Süzgəcdən keçirmək."],
    [1, "Duzlu sudan duz necə alınır?", ["Buxarlandırma", "Süzmə", "Maqnit", "Dondurma"], "Su buxarlanır, duz qalır."],
    [2, "Dəmir ovuntusunu kükürddən ayırmaq üçün:", ["Maqnit", "Su", "Süzgəc", "Termometr"], "Dəmir maqnitə çəkilir."],
    [2, "Distillə nə üçündür?", ["Təmiz su almaq", "Duzu artırmaq", "Rəngləmək", "Qızdırmaq"], "Buxarı soyudub təmiz su alınır."],
    [3, "Hansı qarışıqdır?", ["Hava", "Su (H₂O)", "Oksigen", "Dəmir"], "Hava qazlar qarışığıdır."],
    [3, "Qarışığın tərkib hissələri öz xassələrini:", ["saxlayır", "itirir", "dəyişir", "yeni maddəyə çevrilir"], "Fiziki qarışıq."] ] });
  A(s, 8, { t: "Valentlik və nisbi molekul kütləsi", L: { p: "Valentlik atomun digər atomlarla əmələ gətirdiyi rabitələrin sayıdır.", k: ["Hidrogen I valentli, oksigen II valentlidir.", "Nisbi molekul kütləsi (Mr) atom kütlələrinin cəmidir.", "Ar(H) = 1, Ar(O) = 16, Ar(C) = 12."], x: "Mr(H₂O) = 2·1 + 16 = 18; Mr(CO₂) = 12 + 2·16 = 44.", r: "Formul yazanda valentliklərin hasili bərabərləşdirilir." }, Q: [
    [1, "Hidrogenin valentliyi:", ["I", "II", "III", "IV"], "Hidrogen — I."],
    [1, "Oksigenin valentliyi (adətən):", ["II", "I", "III", "VI"], "O — II."],
    [2, "Mr(H₂O) = ?", ["18", "17", "16", "20"], "2 + 16 = 18."],
    [2, "Mr(CO₂) = ?", ["44", "28", "32", "40"], "12 + 32 = 44."],
    [3, "Karbon IV valentlidir. Metanın formulu:", ["CH₄", "CH₂", "C₂H", "CH"], "C — 4 hidrogenlə."],
    [3, "Mr(O₂) = ?", ["32", "16", "8", "64"], "2 · 16 = 32."] ] });
  A(s, 9, { t: "Metallar", L: { p: "Metallar parlaq, elektrik və istiliyi yaxşı keçirən, döyülə bilən maddələrdir.", k: ["Civə otaq temperaturunda maye olan yeganə metaldır.", "Ən aktiv metallar qələvi metallardır: litium, natrium, kalium.", "Dəmirin paslanması korroziyadır."], x: "Mis elektrik naqillərində işlədilir, çünki cərəyanı yaxşı keçirir.", r: "Qızıl və platin korroziyaya çox davamlıdır." }, Q: [
    [1, "Otaq temperaturunda maye olan metal:", ["Civə", "Dəmir", "Mis", "Qızıl"], "Civə (Hg)."],
    [1, "Elektrik naqillərində çox işlədilən metal:", ["Mis", "Qurğuşun", "Civə", "Natrium"], "Mis."],
    [2, "Dəmirin paslanması necə adlanır?", ["Korroziya", "Elektroliz", "Distillə", "Oksidləşmə deyil"], "Korroziya."],
    [2, "Hansı qələvi metaldır?", ["Natrium", "Dəmir", "Alüminium", "Mis"], "Na — qələvi metal."],
    [3, "Korroziyaya ən davamlı metal:", ["Qızıl", "Dəmir", "Natrium", "Kalium"], "Qızıl paslanmır."],
    [3, "Metallar üçün xarakterik olmayan xassə:", ["Elektriki keçirməmək", "Parlaqlıq", "Döyülmək", "İstilikkeçirmə"], "Metallar keçiricidir."] ] });
  A(s, 10, { t: "Məhlullar", L: { p: "Məhlul həlledici və həll olan maddədən ibarət bircinsli qarışıqdır.", k: ["Ən geniş yayılmış həlledici sudur.", "Kütlə payı: ω = m(maddə) / m(məhlul) · 100%.", "Temperatur artdıqca bərk maddələrin həllolması adətən artır."], x: "20 q duz + 80 q su = 100 q məhlul, ω = 20%.", r: "m(məhlul) = m(maddə) + m(həlledici)." }, Q: [
    [1, "Ən geniş yayılmış həlledici:", ["Su", "Benzin", "Spirt", "Neft"], "Su."],
    [1, "Şəkərin suda həll olması nəyi yaradır?", ["Məhlul", "Suspenziya", "Element", "Metal"], "Bircinsli məhlul."],
    [2, "10 q duz 90 q suda həll edildi. ω = ?", ["10%", "11%", "90%", "9%"], "10 / 100 · 100% = 10%."],
    [2, "Məhlulun kütləsi necə tapılır?", ["Maddə + həlledici", "Maddə − həlledici", "Həlledici / maddə", "Yalnız maddə"], "Cəm."],
    [3, "200 q 15%-li məhlulda neçə qram maddə var?", ["30 q", "15 q", "170 q", "45 q"], "200 · 0,15 = 30."],
    [3, "Temperatur artanda əksər bərk maddələrin həllolması:", ["artır", "azalır", "dəyişmir", "sıfırlanır"], "İsti suda şəkər tez həll olur."] ] });
  A(s, 11, { t: "Həyatda kimya: polimerlər və qida maddələri", L: { p: "Polimerlər çoxlu təkrarlanan halqalardan ibarət böyük molekullardır. Qida maddələri də üzvi birləşmələrdir.", k: ["Polietilen — etilen molekullarından alınan polimer.", "Zülallar aminturşulardan, nişasta qlükozadan əmələ gəlir.", "Qida maddələri: zülallar, yağlar, karbohidratlar."], x: "Plastik paketlər polietilendən hazırlanır və təbiətdə çox gec parçalanır.", r: "Zülallar orqanizmin “tikinti materialı”dır." }, Q: [
    [1, "Plastik paketlər hansı polimerdən hazırlanır?", ["Polietilen", "Nişasta", "Zülal", "Sellüloza"], "Polietilen."],
    [1, "Zülallar nədən əmələ gəlir?", ["Aminturşulardan", "Qlükozadan", "Yağ turşularından", "Duzlardan"], "Aminturşular."],
    [2, "Nişasta hansı monomerdən təşkil olunub?", ["Qlükoza", "Etilen", "Aminturşu", "Metan"], "Qlükoza."],
    [2, "Orqanizmin əsas enerji mənbəyi:", ["Karbohidratlar", "Su", "Duz", "Vitaminlər"], "Karbohidratlar."],
    [3, "Polimer nədir?", ["Təkrarlanan halqalardan ibarət böyük molekul", "Tək atom", "Duz məhlulu", "Metal ərintisi"], "Makromolekul."],
    [3, "Plastikin ekoloji problemi:", ["Təbiətdə çox gec parçalanır", "Tez əriyir", "Zəhərsizdir", "Çox ağırdır"], "Yüz illərlə qalır."] ] });

  s = "biologiya";
  A(s, 6, { t: "Canlıların əlamətləri", L: { p: "Canlılar cansızlardan bir sıra əlamətlərlə fərqlənir.", k: ["Canlıların əlamətləri: qidalanma, tənəffüs, böyümə, çoxalma, qıcıqlanma.", "Canlılar aləmləri: bitkilər, heyvanlar, göbələklər, bakteriyalar.", "Bütün canlılar hüceyrələrdən ibarətdir."], x: "Günəbaxanın günəşə dönməsi qıcıqlanmaya nümunədir.", r: "Daş böyümür, çoxalmır — cansızdır." }, Q: [
    [1, "Hansı canlıların əlaməti deyil?", ["Paslanmaq", "Qidalanmaq", "Böyümək", "Çoxalmaq"], "Paslanma cansızlarda olur."],
    [1, "Hansı canlıdır?", ["Göbələk", "Daş", "Su", "Qum"], "Göbələk canlıdır."],
    [2, "Canlılar neçə əsas aləmə bölünür (dərslikdə)?", ["4", "2", "6", "10"], "Bitkilər, heyvanlar, göbələklər, bakteriyalar."],
    [2, "Günəbaxanın günəşə dönməsi:", ["Qıcıqlanma", "Çoxalma", "Tənəffüs", "Qidalanma"], "Xarici təsirə cavab."],
    [3, "Bütün canlılar nədən ibarətdir?", ["Hüceyrələrdən", "Atomlardan yalnız", "Sümüklərdən", "Yarpaqlardan"], "Hüceyrə nəzəriyyəsi."],
    [3, "Hansı aləm nümayəndəsi deyil?", ["Minerallar", "Bitkilər", "Göbələklər", "Bakteriyalar"], "Minerallar cansızdır."] ] });
  A(s, 7, { t: "Göbələklər və bakteriyalar", L: { p: "Göbələklər ayrıca aləmdir. Bakteriyalar nüvəsi olmayan ən sadə canlılardır.", k: ["Maya göbələyi çörəyin acımasında istifadə olunur.", "Penisillini 1928-ci ildə Aleksandr Fleminq kəşf edib.", "Bakteriyaların formalaşmış nüvəsi yoxdur (prokariotlar)."], x: "Qatıq süd turşusu bakteriyaları ilə hazırlanır.", r: "Zəhərli göbələkləri yığmaq təhlükəlidir." }, Q: [
    [1, "Çörəyin acıması üçün hansı göbələk işlədilir?", ["Maya", "Milçəkqıran", "Kif", "Qov"], "Maya göbələyi."],
    [1, "Qatıq hansı canlıların köməyi ilə hazırlanır?", ["Bakteriyalar", "Viruslar", "Qurdlar", "Həşəratlar"], "Süd turşusu bakteriyaları."],
    [2, "Penisillini kim kəşf edib?", ["Fleminq", "Paster", "Mendel", "Darvin"], "1928, Fleminq."],
    [2, "Bakteriyaların hüceyrəsində nə yoxdur?", ["Formalaşmış nüvə", "Membran", "Sitoplazma", "Ribosom"], "Prokariotlar."],
    [3, "Penisillin hansı göbələkdən alınır?", ["Kif göbələyi", "Maya", "Ağ göbələk", "Milçəkqıran"], "Penicillium kifi."],
    [3, "Göbələklər qidalanma tipinə görə:", ["Hazır üzvi maddə ilə qidalanır", "Fotosintez edir", "Daş yeyir", "Qidalanmır"], "Heterotrofdur."] ] });
  A(s, 8, { t: "Həşəratlar", L: { p: "Həşəratlar ən çox növü olan heyvan qrupudur.", k: ["Bədəni üç hissədən ibarətdir: baş, döş, qarın.", "Üç cüt ayağı var.", "Kəpənək tam çevrilmə ilə inkişaf edir: yumurta → tırtıl → pup → kəpənək."], x: "Arılar bal verir və bitkiləri tozlandırır.", r: "Hörümçək həşərat deyil — onun 4 cüt ayağı var." }, Q: [
    [1, "Həşəratın bədəni neçə hissədən ibarətdir?", ["3", "2", "4", "5"], "Baş, döş, qarın."],
    [1, "Bal verən həşərat:", ["Arı", "Milçək", "Ağcaqanad", "Qarışqa"], "Bal arısı."],
    [2, "Kəpənəyin inkişafında tırtıldan sonra hansı mərhələ gəlir?", ["Pup", "Yumurta", "Kəpənək", "Sürfə yox"], "Yumurta → tırtıl → pup → kəpənək."],
    [2, "Hörümçəyin neçə cüt ayağı var?", ["4", "3", "2", "5"], "Hörümçək — həşərat deyil."],
    [3, "Arıların bitkilər üçün əsas faydası:", ["Tozlandırma", "Yarpaqları yemək", "Kökü qorumaq", "Suvarmaq"], "Çiçəkləri tozlandırırlar."],
    [3, "Tam çevrilmə ilə inkişaf edən həşərat:", ["Kəpənək", "Çəyirtkə", "Tarakan", "Cırcırama"], "Pup mərhələsi var."] ] });
  A(s, 9, { t: "Həzm sistemi və vitaminlər", L: { p: "Həzm sistemi qidanı orqanizmin mənimsəyə biləcəyi maddələrə parçalayır.", k: ["Yolu: ağız → udlaq → qida borusu → mədə → nazik bağırsaq → yoğun bağırsaq.", "Qaraciyər öd ifraz edir, yağların həzminə kömək edir.", "C vitamini sitrus meyvələrində, D vitamini günəş şüası ilə dəridə əmələ gəlir."], x: "Qida maddələri əsasən nazik bağırsaqda qana sorulur.", r: "C vitamini çatışmazlığı sinqa xəstəliyinə səbəb olur." }, Q: [
    [1, "Həzm hansı orqanda başlayır?", ["Ağız boşluğu", "Mədə", "Bağırsaq", "Qaraciyər"], "Tüpürcəklə başlayır."],
    [1, "C vitamini çox olan qida:", ["Limon", "Duz", "Şəkər", "Yağ"], "Sitrus meyvələri."],
    [2, "Öd hansı orqanda yaranır?", ["Qaraciyər", "Mədə", "Böyrək", "Ürək"], "Qaraciyər."],
    [2, "Qida maddələri əsasən harada qana sorulur?", ["Nazik bağırsaq", "Mədə", "Qida borusu", "Ağız"], "Nazik bağırsaq."],
    [3, "Günəş şüası ilə dəridə əmələ gələn vitamin:", ["D", "C", "A", "B₁₂"], "D vitamini."],
    [3, "C vitamini çatışmazlığı hansı xəstəliyə səbəb olur?", ["Sinqa", "Raxit", "Diabet", "Qrip"], "Sinqa."] ] });
  A(s, 10, { t: "Təkamül", L: { p: "Təkamül canlıların uzun müddət ərzində tədricən dəyişməsidir.", k: ["Çarlz Darvin 1859-cu ildə “Növlərin mənşəyi” əsərini nəşr etdi.", "Təbii seçmə: mühitə yaxşı uyğunlaşanlar sağ qalır və çoxalır.", "Fosillər qədim canlılar haqqında məlumat verir."], x: "Qalapaqos adalarındakı ispinozların dimdikləri qidaya görə fərqlənir.", r: "Uyğunlaşma — mühitə görə əlamətlərin formalaşması." }, Q: [
    [1, "Təkamül nəzəriyyəsinin müəllifi:", ["Çarlz Darvin", "Mendel", "Paster", "Nyuton"], "Darvin."],
    [1, "Darvinin əsas əsəri:", ["Növlərin mənşəyi", "Riyaziyyatın əsasları", "Kosmos", "Atom"], "1859."],
    [2, "Təbii seçmənin mahiyyəti:", ["Mühitə uyğunlaşanlar sağ qalır", "Hamı eyni yaşayır", "Ən zəiflər çoxalır", "Heç nə dəyişmir"], "Survival of the fittest."],
    [2, "Qədim canlıların daşlaşmış qalıqları:", ["Fosillər", "Minerallar", "Kristallar", "Meteoritlər"], "Fosillər."],
    [3, "“Növlərin mənşəyi” neçənci ildə nəşr olunub?", ["1859", "1900", "1799", "1953"], "1859."],
    [3, "Ispinozların dimdik fərqi nəyə misaldır?", ["Uyğunlaşmaya", "Mutasiyasızlığa", "Fotosintezə", "Tənəffüsə"], "Qidaya uyğunlaşma."] ] });
  A(s, 11, { t: "İmmunitet və sağlamlıq", L: { p: "İmmunitet orqanizmin xəstəlik törədicilərinə qarşı müdafiə qabiliyyətidir.", k: ["Leykositlər (ağ qan cisimcikləri) orqanizmi qoruyur.", "Peyvənd süni immunitet yaradır; ilk peyvəndi Edvard Cenner (çiçək xəstəliyinə qarşı) tətbiq edib.", "Antibiotiklər bakteriyalara təsir edir, viruslara təsir etmir."], x: "Qripə qarşı antibiotik içmək faydasızdır, çünki qrip virusdur.", r: "Əl yumaq infeksiyaların qarşısını almağın ən sadə yoludur." }, Q: [
    [1, "Orqanizmi mikroblardan qoruyan qan hüceyrələri:", ["Leykositlər", "Eritrositlər", "Trombositlər", "Neyronlar"], "Ağ qan cisimcikləri."],
    [1, "Peyvənd nə yaradır?", ["İmmunitet", "Xəstəlik", "Allergiya", "Vitamin"], "Süni immunitet."],
    [2, "Antibiotiklər kimə qarşı təsirlidir?", ["Bakteriyalara", "Viruslara", "Göbələklərə hamısına", "Hamısına"], "Bakteriyalara."],
    [2, "İlk peyvəndi kim tətbiq edib?", ["Edvard Cenner", "Fleminq", "Darvin", "Mendel"], "Çiçək xəstəliyinə qarşı."],
    [3, "Qrip nə törədir?", ["Virus", "Bakteriya", "Göbələk", "Qurd"], "Qrip virusu."],
    [3, "Qanın laxtalanmasını təmin edən hüceyrələr:", ["Trombositlər", "Leykositlər", "Eritrositlər", "Limfositlər"], "Trombositlər."] ] });

  s = "cografiya";
  A(s, 6, { t: "Yerin hərəkətləri", L: { p: "Yer öz oxu ətrafında və Günəş ətrafında hərəkət edir.", k: ["Öz oxu ətrafında bir dövrə ≈ 24 saat — gecə və gündüz.", "Günəş ətrafında bir dövrə ≈ 365 gün — il və fəsillər.", "Ay Yerin təbii peykidir."], x: "Yer oxunun mailliyi fəsillərin dəyişməsinə səbəb olur.", r: "Hər 4 ildən bir il 366 gün olur — uzun il." }, Q: [
    [1, "Gecə və gündüz nəyə görə əvəzlənir?", ["Yerin öz oxu ətrafında fırlanması", "Ayın hərəkəti", "Buludlar", "Küləklər"], "24 saatlıq fırlanma."],
    [1, "Yerin təbii peyki:", ["Ay", "Günəş", "Mars", "Venera"], "Ay."],
    [2, "Yer Günəş ətrafında neçə günə bir dövrə vurur?", ["≈ 365", "≈ 30", "≈ 24", "≈ 100"], "Bir il."],
    [2, "Fəsillərin dəyişməsinin səbəbi:", ["Yer oxunun mailliyi", "Ayın fazaları", "Okean axınları", "Küləklər"], "Mailliyə görə günəş şüaları fərqli düşür."],
    [3, "Uzun ildə neçə gün var?", ["366", "365", "360", "364"], "Fevral 29 gün."],
    [3, "Yer öz oxu ətrafında hansı istiqamətdə fırlanır?", ["Qərbdən şərqə", "Şərqdən qərbə", "Şimaldan cənuba", "Fırlanmır"], "Günəş şərqdən doğur."] ] });
  A(s, 7, { t: "Litosfer: vulkan və zəlzələ", L: { p: "Litosfer Yerin bərk xarici təbəqəsidir. Yerin daxili qüvvələri vulkan və zəlzələlər yaradır.", k: ["Yerin quruluşu: yer qabığı, mantiya, nüvə.", "Zəlzələni seysmoqraf qeydə alır.", "Azərbaycanda palçıq vulkanları çoxdur, Qobustan ərazisində geniş yayılıb."], x: "Vulkan püskürəndə maqma lava kimi səthə çıxır.", r: "Dünyadakı palçıq vulkanlarının təxminən yarısı Azərbaycandadır." }, Q: [
    [1, "Zəlzələni qeydə alan cihaz:", ["Seysmoqraf", "Barometr", "Termometr", "Kompas"], "Seysmoqraf."],
    [1, "Yerin mərkəzi hissəsi:", ["Nüvə", "Mantiya", "Yer qabığı", "Atmosfer"], "Nüvə."],
    [2, "Səthə çıxan maqma necə adlanır?", ["Lava", "Qranit", "Kül", "Buzlaq"], "Lava."],
    [2, "Azərbaycanda geniş yayılan vulkan növü:", ["Palçıq vulkanı", "Buz vulkanı", "Sualtı vulkan", "Aktiv lava vulkanı"], "Palçıq vulkanları."],
    [3, "Yer qabığı ilə nüvə arasındakı təbəqə:", ["Mantiya", "Atmosfer", "Hidrosfer", "Biosfer"], "Mantiya."],
    [3, "Dünya palçıq vulkanlarının təxminən nə qədəri Azərbaycandadır?", ["Yarısı", "Onda biri", "Hamısı", "Heç biri"], "Təxminən yarısı."] ] });
  A(s, 8, { t: "Hidrosfer", L: { p: "Hidrosfer Yerin su təbəqəsidir: okeanlar, dənizlər, çaylar, göllər, buzlaqlar və yeraltı sular.", k: ["Yer üzündəki suyun böyük hissəsi okeanlardadır və duzludur.", "Ən dərin göl — Baykal.", "Okean suyunun orta duzluluğu təxminən 35 ‰-dir (35 q/l)."], x: "Çay mənbədən başlayır və mənsəblə bitir.", r: "Şirin suyun əsas hissəsi buzlaqlardadır." }, Q: [
    [1, "Hidrosferə nə aid deyil?", ["Dağlar", "Okeanlar", "Çaylar", "Buzlaqlar"], "Dağlar litosferdir."],
    [1, "Dünyanın ən dərin gölü:", ["Baykal", "Xəzər", "Viktoriya", "Göygöl"], "Baykal."],
    [2, "Çayın başladığı yer:", ["Mənbə", "Mənsəb", "Delta", "Hövzə"], "Mənbə."],
    [2, "Okean suyunun orta duzluluğu:", ["≈ 35 ‰", "≈ 1 ‰", "≈ 100 ‰", "≈ 5 ‰"], "≈ 35 q/l."],
    [3, "Şirin suyun ən böyük ehtiyatı harada saxlanılır?", ["Buzlaqlarda", "Çaylarda", "Göllərdə", "Atmosferdə"], "Antarktida və Qrenlandiya buzlaqlarında."],
    [3, "Çayın dənizə töküldüyü yer:", ["Mənsəb", "Mənbə", "Qolu", "Şəlalə"], "Mənsəb."] ] });
  A(s, 9, { t: "Azərbaycanın sərhədləri və bölgüsü", L: { p: "Azərbaycan 5 dövlətlə həmsərhəddir və Xəzər dənizinə çıxışı var.", k: ["Qonşular: Rusiya, Gürcüstan, Ermənistan, İran, Türkiyə.", "Türkiyə ilə sərhəd Naxçıvan Muxtar Respublikası vasitəsilədir.", "Naxçıvan MR-in mərkəzi Naxçıvan şəhəridir."], x: "Ən uzun quru sərhəd Ermənistan və İranla keçir.", r: "Azərbaycanın dəniz sərhədi Xəzər dənizindədir." }, Q: [
    [1, "Azərbaycan neçə dövlətlə həmsərhəddir?", ["5", "3", "4", "7"], "5 dövlət."],
    [1, "Azərbaycanın şimal qonşusu:", ["Rusiya", "İran", "Türkiyə", "Ermənistan"], "Rusiya (Dağıstan)."],
    [2, "Türkiyə ilə sərhəd hansı ərazi vasitəsilədir?", ["Naxçıvan MR", "Lənkəran", "Quba", "Şəki"], "Naxçıvan MR."],
    [2, "Azərbaycanın cənub qonşusu:", ["İran", "Gürcüstan", "Rusiya", "Türkmənistan"], "İran."],
    [3, "Naxçıvan MR-in mərkəzi:", ["Naxçıvan", "Ordubad", "Culfa", "Şərur"], "Naxçıvan şəhəri."],
    [3, "Hansı ölkə Azərbaycanla həmsərhəd deyil?", ["Qazaxıstan", "Gürcüstan", "İran", "Rusiya"], "Qazaxıstanla dəniz vasitəsilə qonşudur, quru sərhəd yoxdur."] ] });
  A(s, 10, { t: "Dünya ölkələri", L: { p: "Dünyada 190-dan çox müstəqil dövlət var. Ərazi və əhaliyə görə fərqlənirlər.", k: ["Ərazisinə görə ən böyük ölkə — Rusiya.", "Ən kiçik ölkə — Vatikan.", "Avstraliya həm materik, həm də dövlətdir."], x: "Kanada ərazisinə görə ikinci ən böyük ölkədir.", r: "BMT-nin 193 üzv dövləti var." }, Q: [
    [1, "Ərazisinə görə ən böyük ölkə:", ["Rusiya", "Çin", "ABŞ", "Braziliya"], "Rusiya."],
    [1, "Ən kiçik ölkə:", ["Vatikan", "Monako", "Malta", "Lüksemburq"], "Vatikan."],
    [2, "Həm materik, həm dövlət olan:", ["Avstraliya", "Afrika", "Avropa", "Asiya"], "Avstraliya."],
    [2, "Ərazisinə görə ikinci ən böyük ölkə:", ["Kanada", "Hindistan", "Avstraliya", "Qazaxıstan"], "Kanada."],
    [3, "BMT-nin neçə üzv dövləti var?", ["193", "150", "200", "51"], "193."],
    [3, "Yaponiyanın paytaxtı:", ["Tokio", "Kioto", "Osaka", "Seul"], "Tokio."] ] });
  A(s, 11, { t: "Nəqliyyat və dünya təsərrüfatı", L: { p: "Nəqliyyat ölkələri və bazarları birləşdirir. Kanallar dəniz yollarını qısaldır.", k: ["Süveyş kanalı Aralıq dənizini Qırmızı dənizlə birləşdirir.", "Panama kanalı Atlantik və Sakit okeanları birləşdirir.", "Bakı–Tbilisi–Qars dəmir yolu 2017-ci ildə istifadəyə verilib."], x: "Azərbaycan Şərq–Qərb və Şimal–Cənub nəqliyyat dəhlizlərində yerləşir.", r: "OPEC — neft ixrac edən ölkələr təşkilatı." }, Q: [
    [1, "Süveyş kanalı hansı dənizləri birləşdirir?", ["Aralıq və Qırmızı", "Qara və Xəzər", "Baltik və Şimal", "Ərəb və Qırmızı"], "Aralıq və Qırmızı dənizlər."],
    [1, "Panama kanalı hansı okeanları birləşdirir?", ["Atlantik və Sakit", "Hind və Sakit", "Atlantik və Hind", "Şimal Buzlu və Atlantik"], "Atlantik və Sakit."],
    [2, "BTQ dəmir yolu hansı şəhərləri birləşdirir?", ["Bakı–Tbilisi–Qars", "Bakı–Tehran–Qars", "Batumi–Tbilisi–Qars", "Bakı–Moskva–Qars"], "Bakı–Tbilisi–Qars."],
    [2, "OPEC nədir?", ["Neft ixrac edən ölkələr təşkilatı", "İdman təşkilatı", "Hərbi blok", "Bank"], "OPEC."],
    [3, "BTQ dəmir yolu neçənci ildə açılıb?", ["2017", "2006", "2010", "2020"], "2017."],
    [3, "Azərbaycandan keçən beynəlxalq dəhliz:", ["Şərq–Qərb", "Arktik", "Trans-Sahara", "Pan-Amerikan"], "Şərq–Qərb (Orta Dəhliz)."] ] });

  s = "tarix";
  A(s, 6, { t: "Qafqaz Albaniyası", L: { p: "Qafqaz Albaniyası Şimali Azərbaycan ərazisində mövcud olmuş qədim dövlətdir.", k: ["Paytaxt əvvəlcə Qəbələ, sonra (V əsrdə) Bərdə oldu.", "IV əsrdə xristianlıq dövlət dini kimi qəbul edildi.", "Şəkidəki Kiş məbədi alban memarlığı abidəsidir."], x: "Alban hökmdarı III Mömin Vaçaqan qanunlar məcəlləsi qəbul etdirib.", r: "Albanların öz əlifbası olub." }, Q: [
    [1, "Albaniyanın ilk paytaxtı:", ["Qəbələ", "Bakı", "Gəncə", "Şamaxı"], "Qəbələ."],
    [1, "Kiş məbədi hansı rayondadır?", ["Şəki", "Quba", "Lənkəran", "Füzuli"], "Şəki."],
    [2, "V əsrdə Albaniyanın paytaxtı hara köçürüldü?", ["Bərdə", "Təbriz", "Naxçıvan", "Şuşa"], "Bərdə."],
    [2, "Albaniyada xristianlıq neçənci əsrdə qəbul olundu?", ["IV", "I", "VII", "X"], "IV əsr."],
    [3, "Albaniyada qanunlar məcəlləsi qəbul etdirən hökmdar:", ["III Mömin Vaçaqan", "Babək", "Şah İsmayıl", "Uzun Həsən"], "Vaçaqan."],
    [3, "Albanların öz əlifbası olubmu?", ["Olub", "Olmayıb", "Yalnız rəqəmləri", "Yalnız heca işarələri"], "Alban əlifbası mövcud olub."] ] });
  A(s, 7, { t: "Babək hərəkatı", L: { p: "IX əsrdə Azərbaycanda Ərəb xilafətinə qarşı Babəkin rəhbərliyi ilə xürrəmilər hərəkatı baş verdi.", k: ["Hərəkat 816–837-ci illərdə davam etdi.", "Mərkəzi Bəzz qalası idi.", "Babək ərəb ordularına qarşı uzun illər mübarizə apardı."], x: "Bəzz qalası Kəleybər yaxınlığında, dağlıq ərazidə yerləşirdi.", r: "Babək azadlıq mübarizəsinin rəmzidir." }, Q: [
    [1, "Babək kimə qarşı mübarizə aparırdı?", ["Ərəb xilafəti", "Monqollar", "Ruslar", "Səfəvilər"], "Ərəb xilafətinə qarşı."],
    [1, "Babək hərəkatının mərkəzi:", ["Bəzz qalası", "Qız qalası", "Şuşa qalası", "Gülüstan qalası"], "Bəzz."],
    [2, "Babək hərəkatının iştirakçıları necə adlanırdı?", ["Xürrəmilər", "Qızılbaşlar", "Səlcuqlar", "Hürufilər"], "Xürrəmilər."],
    [2, "Hərəkat neçənci ildə başladı?", ["816", "1501", "1918", "651"], "816."],
    [3, "Hərəkat neçənci ildə sona çatdı?", ["837", "816", "900", "1000"], "837."],
    [3, "Hərəkat hansı əsrə aiddir?", ["IX", "VII", "XII", "XV"], "IX əsr."] ] });
  A(s, 8, { t: "Qaraqoyunlu və Ağqoyunlu", L: { p: "XV əsrdə Azərbaycanda Qaraqoyunlu və Ağqoyunlu dövlətləri mövcud idi.", k: ["Qaraqoyunlu dövlətinin banisi Qara Yusif, ən qüdrətli hökmdarı Cahanşah idi.", "Ağqoyunlu dövlətinin ən qüdrətli hökmdarı Uzun Həsən idi.", "Hər iki dövlətin paytaxtı Təbriz olub."], x: "Uzun Həsən 1467-ci ildə Cahanşahı məğlub etdi.", r: "Ağqoyunlulardan sonra Səfəvilər hakimiyyətə gəldi." }, Q: [
    [1, "Ağqoyunlu dövlətinin ən qüdrətli hökmdarı:", ["Uzun Həsən", "Cahanşah", "Şah İsmayıl", "Nadir şah"], "Uzun Həsən."],
    [1, "Qaraqoyunlu dövlətinin banisi:", ["Qara Yusif", "Uzun Həsən", "Babək", "Pənahəli xan"], "Qara Yusif."],
    [2, "Hər iki dövlətin paytaxtı:", ["Təbriz", "Bakı", "Bərdə", "Şamaxı"], "Təbriz."],
    [2, "Qaraqoyunluların ən qüdrətli hökmdarı:", ["Cahanşah", "Qara Yusif", "Uzun Həsən", "Sultan Yaqub"], "Cahanşah."],
    [3, "Uzun Həsən Cahanşahı neçənci ildə məğlub etdi?", ["1467", "1501", "1405", "1514"], "1467."],
    [3, "Ağqoyunlulardan sonra hakimiyyətə gələn sülalə:", ["Səfəvilər", "Qacarlar", "Əfşarlar", "Şirvanşahlar"], "Səfəvilər."] ] });
  A(s, 9, { t: "Neft sənayesi və XIX əsr Bakısı", L: { p: "XIX əsrdə Bakı dünyanın əsas neft mərkəzlərindən birinə çevrildi.", k: ["1846-cı ildə Bibiheybətdə dünyada ilk mexaniki üsulla neft quyusu qazıldı.", "Nobel qardaşları Bakıda neft şirkəti qurdular, 1878-ci ildə ilk neft tankeri “Zoroastr” Xəzərə buraxıldı.", "H.Z. Tağıyev 1901-ci ildə Bakıda qızlar məktəbi açdı."], x: "Bakı milyonçuları teatr, məktəb və su kəməri tikintisinə vəsait ayırırdılar.", r: "Şollar su kəməri Bakıya içməli su gətirdi (1917)." }, Q: [
    [1, "Dünyada ilk mexaniki neft quyusu harada qazılıb?", ["Bibiheybət", "Texas", "Gəncə", "Ərəbistan"], "Bibiheybət, 1846."],
    [1, "Qızlar məktəbini açan xeyriyyəçi:", ["H.Z. Tağıyev", "Nobel", "Rəsulzadə", "Axundzadə"], "Tağıyev."],
    [2, "İlk neft quyusu neçənci ildə qazılıb?", ["1846", "1901", "1878", "1918"], "1846."],
    [2, "Bakıda neft şirkəti quran məşhur qardaşlar:", ["Nobellər", "Rayt", "Lümyer", "Qrimm"], "Nobel qardaşları."],
    [3, "İlk neft tankerinin adı:", ["Zoroastr", "Titanik", "Bakı", "Xəzər"], "Zoroastr, 1878."],
    [3, "Tağıyevin qızlar məktəbi neçənci ildə açılıb?", ["1901", "1846", "1918", "1880"], "1901."] ] });
  A(s, 10, { t: "1918-ci ilin hadisələri", L: { p: "1918-ci il Azərbaycan tarixində həm faciə, həm də qurtuluş ilidir.", k: ["31 mart 1918 — azərbaycanlıların soyqırımı; 31 Mart Soyqırımı Günü kimi qeyd olunur.", "15 sentyabr 1918 — Qafqaz İslam Ordusu Bakını azad etdi.", "1919-cu ildə Bakı Dövlət Universiteti təsis edildi."], x: "Qafqaz İslam Ordusu Türkiyə və Azərbaycan hərbçilərindən ibarət idi.", r: "15 Sentyabr — Bakının azad edilməsi günüdür." }, Q: [
    [1, "Azərbaycanlıların Soyqırımı Günü:", ["31 Mart", "28 May", "15 Sentyabr", "9 Noyabr"], "31 Mart."],
    [1, "Bakını 1918-ci ildə azad edən ordu:", ["Qafqaz İslam Ordusu", "Qırmızı Ordu", "İngilis ordusu", "Fransız ordusu"], "Qafqaz İslam Ordusu."],
    [2, "Bakı neçə sentyabrda azad edildi?", ["15", "28", "1", "31"], "15 sentyabr 1918."],
    [2, "Bakı Dövlət Universiteti neçənci ildə təsis edilib?", ["1919", "1918", "1920", "1991"], "1919."],
    [3, "Qafqaz İslam Ordusu kimlərdən ibarət idi?", ["Türk və Azərbaycan hərbçiləri", "Rus və gürcü", "İngilis", "Fransız"], "Türk-Azərbaycan birliyi."],
    [3, "Mart soyqırımı neçənci ildə baş verib?", ["1918", "1905", "1920", "1937"], "1918."] ] });
  A(s, 11, { t: "Müstəqillik illərinin nailiyyətləri", L: { p: "Müstəqillik illərində Azərbaycan iqtisadi və beynəlxalq nüfuzunu artırdı.", k: ["20 sentyabr 1994 — “Əsrin müqaviləsi” imzalandı.", "2012-ci ildə Bakıda “Avroviziya” mahnı müsabiqəsi keçirildi.", "2015-ci ildə Bakıda I Avropa Oyunları təşkil olundu."], x: "“Əsrin müqaviləsi” Xəzərin neft yataqlarının birgə işlənməsi haqqındadır.", r: "20 Sentyabr Azərbaycanda Neftçilər Günüdür." }, Q: [
    [1, "“Əsrin müqaviləsi” nə ilə bağlıdır?", ["Neft yataqları", "Futbol", "Kino", "Kənd təsərrüfatı"], "Xəzər neft yataqları."],
    [1, "I Avropa Oyunları hansı şəhərdə keçirilib?", ["Bakı", "Paris", "Minsk", "London"], "Bakı, 2015."],
    [2, "“Əsrin müqaviləsi” neçənci ildə imzalanıb?", ["1994", "1991", "2000", "1998"], "20 sentyabr 1994."],
    [2, "Bakıda “Avroviziya” neçənci ildə keçirilib?", ["2012", "2011", "2015", "2016"], "2012."],
    [3, "Neftçilər Günü:", ["20 Sentyabr", "28 May", "18 Oktyabr", "12 Noyabr"], "20 Sentyabr."],
    [3, "I Avropa Oyunları neçənci ildə keçirilib?", ["2015", "2012", "2019", "2017"], "2015."] ] });
})(B.add);
