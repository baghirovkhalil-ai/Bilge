/* İxtisaslar: səviyyə 1 Başlanğıc, 2 Orta, 3 Peşəkar */
(function (A) {
  let s = "muhasibat";
  A(s, 1, { t: "Mühasibatlığın əsasları və balans", L: { p: "Mühasibat uçotu müəssisənin əmlakını, borclarını və əməliyyatlarını pul ifadəsində qeyd edir.", k: ["Əsas tənlik: Aktivlər = Öhdəliklər + Kapital.", "Aktivlər — müəssisənin əmlakı: pul, mallar, avadanlıq, debitor borcları.", "Öhdəliklər — borclar: bank krediti, təchizatçıya borc, vergi borcu."], x: "Aktivlər 50 000 AZN, öhdəliklər 20 000 AZN-dirsə, kapital 30 000 AZN-dir.", r: "Balansın aktiv və passiv tərəfləri həmişə bərabərdir." }, Q: [
    [1, "Mühasibatlığın əsas tənliyi:", ["Aktivlər = Öhdəliklər + Kapital", "Aktivlər = Gəlir − Xərc", "Kapital = Aktivlər + Öhdəliklər", "Öhdəliklər = Aktivlər + Kapital"], "Balans tənliyi."],
    [1, "Hansı aktivdir?", ["Kassadakı pul", "Bank krediti", "Vergi borcu", "Təchizatçıya borc"], "Pul vəsaiti — aktiv."],
    [1, "Hansı öhdəlikdir?", ["Bank krediti", "Anbardakı mal", "Avadanlıq", "Bina"], "Borc — öhdəlik."],
    [2, "Aktivlər 80 000, öhdəliklər 30 000 AZN. Kapital?", ["50 000 AZN", "110 000 AZN", "30 000 AZN", "80 000 AZN"], "80 000 − 30 000 = 50 000."],
    [2, "Debitor borcu nədir?", ["Bizə başqalarının borcu", "Bizim başqalarına borcumuz", "Vergi növü", "Əmək haqqı fondu"], "Debitor — bizə borclu olan."],
    [3, "Kapital 40 000, öhdəliklər 25 000 AZN. Aktivlər?", ["65 000 AZN", "15 000 AZN", "40 000 AZN", "25 000 AZN"], "A = Ö + K = 65 000."],
    [3, "Balansın aktiv və passiv tərəfləri…", ["həmişə bərabərdir", "heç vaxt bərabər deyil", "yalnız ilin sonunda bərabərdir", "vergidən asılıdır"], "Balans — tarazlıq."] ] });
  A(s, 2, { t: "İkili yazılış: debet və kredit", L: { p: "Hər əməliyyat ən azı iki hesabda eyni məbləğdə əks olunur: bir hesabın debetində, digərinin kreditində.", k: ["Aktiv hesabların artımı debetdə, azalması kreditdə yazılır.", "Öhdəlik və kapital hesablarının artımı kreditdə, azalması debetdə.", "Debet dövriyyəsi cəmi = kredit dövriyyəsi cəmi."], x: "Bankdan kassaya 1 000 AZN gətirildi: Dt Kassa 1 000 — Kt Bank 1 000.", r: "Debet — sol tərəf, kredit — sağ tərəf." }, Q: [
    [1, "İkili yazılış nə deməkdir?", ["Əməliyyat iki hesabda eyni məbləğdə əks olunur", "Hər şey iki dəfə yazılır ki, itməsin", "İki mühasib işləyir", "Hesabat ildə iki dəfə verilir"], "Debet və kredit."],
    [1, "Aktiv hesabın artımı harada yazılır?", ["Debetdə", "Kreditdə", "Heç yerdə", "Balansdan kənar"], "Aktivlərin artımı — debet."],
    [1, "Debet hesabın hansı tərəfidir?", ["Sol", "Sağ", "Yuxarı", "Aşağı"], "Debet — sol."],
    [2, "Bankdan kassaya nağd pul gətirildi. Yazılış:", ["Dt Kassa — Kt Bank", "Dt Bank — Kt Kassa", "Dt Kapital — Kt Kassa", "Dt Kassa — Kt Kapital"], "Kassa artır, bank azalır."],
    [2, "Bank krediti alındı (pul hesaba daxil oldu). Kreditlənən hesab:", ["Bank kreditləri (öhdəlik)", "Bank hesabı", "Mallar", "Əsas vəsaitlər"], "Öhdəlik artır — kredit."],
    [3, "Təchizatçıya borc bankdan ödənildi. Yazılış:", ["Dt Təchizatçılar — Kt Bank", "Dt Bank — Kt Təchizatçılar", "Dt Kassa — Kt Bank", "Dt Mallar — Kt Kapital"], "Öhdəlik azalır (Dt), bank azalır (Kt)."],
    [3, "Debet dövriyyəsinin cəmi kredit dövriyyəsinin cəminə…", ["bərabərdir", "iki dəfə çoxdur", "həmişə azdır", "aid deyil"], "İkili yazılışın nəticəsi."] ] });
  A(s, 3, { t: "Vergilər və amortizasiya", L: { p: "Azərbaycanda əsas vergilər Vergi Məcəlləsi ilə tənzimlənir. Əsas vəsaitlərin dəyəri amortizasiya ilə xərcə silinir.", k: ["Əlavə dəyər vergisi (ƏDV) dərəcəsi — 18%.", "Hüquqi şəxslərin mənfəət vergisi — 20%.", "Düzxətli amortizasiya: (ilkin dəyər − ləğv dəyəri) / faydalı istifadə müddəti."], x: "Avadanlıq 12 000 AZN, ləğv dəyəri 2 000, müddət 5 il: illik amortizasiya 2 000 AZN.", r: "ƏDV-li qiymət = ƏDV-siz qiymət × 1,18." }, Q: [
    [1, "Azərbaycanda ƏDV dərəcəsi:", ["18%", "20%", "10%", "5%"], "18%."],
    [1, "Mənfəət vergisinin dərəcəsi (hüquqi şəxslər):", ["20%", "18%", "14%", "30%"], "20%."],
    [1, "Amortizasiya nədir?", ["Əsas vəsaitin dəyərinin tədricən xərcə silinməsi", "Vergi cəriməsi", "Kredit faizi", "Əmək haqqı"], "Köhnəlmənin uçotu."],
    [2, "ƏDV-siz qiymət 1 000 AZN. ƏDV məbləği?", ["180 AZN", "200 AZN", "118 AZN", "1 180 AZN"], "1 000 × 18% = 180."],
    [2, "Mənfəət 50 000 AZN. Mənfəət vergisi?", ["10 000 AZN", "9 000 AZN", "5 000 AZN", "20 000 AZN"], "50 000 × 20% = 10 000."],
    [3, "Avadanlıq 20 000 AZN, ləğv dəyəri 0, müddət 4 il. İllik düzxətli amortizasiya?", ["5 000 AZN", "4 000 AZN", "20 000 AZN", "80 000 AZN"], "20 000 / 4 = 5 000."],
    [3, "ƏDV daxil qiymət 2 360 AZN. ƏDV-siz qiymət?", ["2 000 AZN", "1 935 AZN", "2 342 AZN", "2 182 AZN"], "2 360 / 1,18 = 2 000."] ] });

  s = "marketinq";
  A(s, 1, { t: "Marketinqin əsasları", L: { p: "Marketinq müştərinin ehtiyacını tapıb ona dəyər təklif etmək və bunu satışa çevirmək prosesidir.", k: ["4P: məhsul (Product), qiymət (Price), yer (Place), təşviq (Promotion).", "Hədəf auditoriya: məhsulun ən çox lazım olduğu insanlar qrupu.", "SMM — sosial şəbəkələrdə marketinq: Instagram, Facebook, TikTok."], x: "Uşaq geyim mağazasının hədəf auditoriyası: 25–40 yaşlı valideynlər.", r: "Hamıya satmağa çalışan heç kimə sata bilmir." }, Q: [
    [1, "4P modelində “Price” nədir?", ["Qiymət", "Məhsul", "Yer", "Təşviq"], "Price — qiymət."],
    [1, "SMM nə deməkdir?", ["Sosial media marketinqi", "Satış meneceri", "Sadə marketinq modeli", "Sayt monitorinqi"], "Social Media Marketing."],
    [1, "Hədəf auditoriya kimdir?", ["Məhsula ən çox ehtiyacı olan qrup", "Bütün insanlar", "Yalnız rəqiblər", "Şirkət işçiləri"], "Konkret seqment."],
    [2, "4P-də “Promotion” nəyi əhatə edir?", ["Reklam və təşviq", "Anbar yerini", "Məhsulun rəngini", "Vergini"], "Kommunikasiya, reklam."],
    [2, "Brend nədir?", ["Məhsulun adı, imici və onunla bağlı təəssürat", "Yalnız loqo", "Qiymət siyahısı", "Anbar"], "Brend — təəssürat və etibar."],
    [3, "USP (unikal satış təklifi) nədir?", ["Məhsulu rəqiblərdən fərqləndirən əsas üstünlük", "Endirim kuponu", "Satış planı", "Vergi növü"], "Unique Selling Proposition."],
    [3, "Seqmentasiya nədir?", ["Bazarın oxşar ehtiyaclı qruplara bölünməsi", "Reklamın dayandırılması", "Qiymətin endirilməsi", "Məhsulun qablaşdırılması"], "Auditoriyanın qruplara ayrılması."] ] });
  A(s, 2, { t: "Rəqəmsal reklam metrikləri", L: { p: "Rəqəmsal reklamın effektivliyi rəqəmlərlə ölçülür.", k: ["CTR = kliklər / göstərişlər × 100%.", "CPC = xərc / kliklər (klikin qiyməti).", "CPM = 1000 göstərişə xərc; konversiya — istədiyimiz hərəkət (alış, müraciət)."], x: "10 000 göstəriş, 200 klik: CTR = 2%. Xərc 100 AZN: CPC = 0,5 AZN.", r: "Yüksək CTR reklamın auditoriyaya maraqlı olduğunu göstərir." }, Q: [
    [1, "CTR nəyi göstərir?", ["Klik faizini", "Klikin qiymətini", "Satış sayını", "Bütçəni"], "Click-through rate."],
    [1, "CPC nədir?", ["Bir klikin orta qiyməti", "1000 göstərişin qiyməti", "Satış faizi", "Reklamın uzunluğu"], "Cost per click."],
    [1, "Konversiya nədir?", ["İstədiyimiz hərəkətin baş verməsi", "Reklamın göstərilməsi", "Saytın açılması", "Şəklin yüklənməsi"], "Alış, müraciət, qeydiyyat."],
    [2, "5 000 göstəriş, 100 klik. CTR?", ["2%", "5%", "0,2%", "20%"], "100 / 5 000 × 100 = 2%."],
    [2, "Xərc 60 AZN, 120 klik. CPC?", ["0,5 AZN", "2 AZN", "60 AZN", "7 200 AZN"], "60 / 120 = 0,5."],
    [3, "Xərc 30 AZN, 15 000 göstəriş. CPM?", ["2 AZN", "0,002 AZN", "20 AZN", "500 AZN"], "30 / 15 000 × 1000 = 2."],
    [3, "200 klikdən 10 alış oldu. Konversiya faizi?", ["5%", "10%", "2%", "20%"], "10 / 200 × 100 = 5%."] ] });
  A(s, 3, { t: "Analitika və strategiya", L: { p: "Peşəkar marketoloq reklamın gəlirliliyini hesablayır və satış hunisini idarə edir.", k: ["ROAS = reklamdan gələn gəlir / reklam xərci.", "CAC — bir müştəri cəlb etməyin dəyəri; LTV — müştərinin bütün dövr ərzində gətirdiyi gəlir.", "Satış hunisi: məlumatlılıq → maraq → qərar → alış."], x: "Reklama 500 AZN xərcləndi, 2 000 AZN satış oldu: ROAS = 4.", r: "Sağlam biznesdə LTV CAC-dan xeyli çox olmalıdır." }, Q: [
    [1, "ROAS nəyi ölçür?", ["Reklam xərcinin neçə qat gəlir gətirdiyini", "Kliklərin sayını", "İzləyici artımını", "Saytın sürətini"], "Return on ad spend."],
    [1, "A/B test nədir?", ["İki variantı müqayisə edib yaxşısını seçmək", "Reklamı dayandırmaq", "Qiyməti iki dəfə artırmaq", "İki şirkətin birləşməsi"], "Split test."],
    [1, "Satış hunisinin ilk mərhələsi:", ["Məlumatlılıq", "Alış", "Təkrar alış", "Qərar"], "Awareness."],
    [2, "Xərc 400 AZN, gəlir 1 600 AZN. ROAS?", ["4", "0,25", "1 200", "2"], "1 600 / 400 = 4."],
    [2, "CAC nədir?", ["Bir müştəri cəlb etməyin dəyəri", "Müştərinin ömürlük gəliri", "Klikin qiyməti", "Kampaniya müddəti"], "Customer acquisition cost."],
    [3, "Reklama 1 000 AZN xərcləndi, 50 yeni müştəri gəldi. CAC?", ["20 AZN", "50 AZN", "0,05 AZN", "1 050 AZN"], "1 000 / 50 = 20."],
    [3, "Hansı vəziyyət biznes üçün sağlamdır?", ["LTV CAC-dan xeyli çoxdur", "CAC LTV-dən çoxdur", "LTV = 0", "CAC hesablanmır"], "Müştəri gətirdiyindən baha başa gəlməməlidir."] ] });

  s = "proqram";
  A(s, 1, { t: "Python: dəyişənlər və tiplər", L: { p: "Python oxunaqlı və öyrənməsi asan proqramlaşdırma dilidir.", k: ["Tiplər: int (tam ədəd), float (onluq), str (mətn), bool (True/False).", "Dəyişən: ad = \"Aysel\", yas = 20.", "type() dəyişənin tipini göstərir."], x: "print(\"Salam,\", ad) → Salam, Aysel", r: "Mətn dırnaq içində yazılır." }, Q: [
    [1, "Mətn tipi Python-da necə adlanır?", ["str", "int", "float", "bool"], "string — str."],
    [1, "5 ədədinin tipi:", ["int", "str", "float", "list"], "Tam ədəd — int."],
    [1, "Ekrana çıxarma funksiyası:", ["print()", "input()", "type()", "range()"], "print."],
    [2, "3.14 dəyərinin tipi:", ["float", "int", "str", "bool"], "Onluq ədəd — float."],
    [2, "type(True) nə qaytarır?", ["bool", "str", "int", "True"], "Məntiqi tip."],
    [3, "print(\"3\" + \"4\") nəticəsi:", ["34", "7", "Xəta", "3 4"], "Mətnlər birləşir."],
    [3, "print(int(\"5\") + 2) nəticəsi:", ["7", "52", "Xəta", "5 2"], "int(\"5\") = 5, 5 + 2 = 7."] ] });
  A(s, 2, { t: "Şərtlər, dövrlər, siyahılar", L: { p: "Proqram şərtlərlə qərar verir, dövrlərlə təkrarlayır, siyahılarla çox məlumat saxlayır.", k: ["if / elif / else — şərt.", "for x in siyahı: — siyahını gəzmək; while — şərt doğru olduqca təkrar.", "Siyahı: ededler = [3, 5, 8]; indeks 0-dan başlayır."], x: "for e in [1, 2, 3]: print(e * 2) → 2, 4, 6", r: "len(siyahı) elementlərin sayını verir." }, Q: [
    [1, "Python-da siyahının ilk elementinin indeksi:", ["0", "1", "-1", "10"], "İndeks 0-dan başlayır."],
    [1, "Şərt operatoru:", ["if", "for", "def", "import"], "if."],
    [1, "len([4, 7, 9]) nə qaytarır?", ["3", "20", "9", "4"], "3 element."],
    [2, "a = [10, 20, 30]; print(a[1]) nəticəsi:", ["20", "10", "30", "Xəta"], "İndeks 1 — ikinci element."],
    [2, "for i in range(1, 4): print(i) — neçə ədəd çap olunur?", ["3", "4", "1", "5"], "1, 2, 3."],
    [3, "x = 7; if x % 2 == 0: print(\"cüt\") else: print(\"tək\") — nəticə:", ["tək", "cüt", "7", "Xəta"], "7 % 2 = 1."],
    [3, "s = 0; for i in [1, 2, 3, 4]: s += i; print(s) — nəticə:", ["10", "4", "1234", "24"], "1 + 2 + 3 + 4 = 10."] ] });
  A(s, 3, { t: "Funksiyalar və lüğətlər", L: { p: "Funksiya təkrar istifadə olunan kod blokudur. Lüğət (dict) açar-dəyər cütlərini saxlayır.", k: ["def cem(a, b): return a + b", "Lüğət: telebe = {\"ad\": \"Murad\", \"bal\": 95}; telebe[\"bal\"] → 95.", "List comprehension: [x * x for x in range(4)] → [0, 1, 4, 9]."], x: "def salam(ad): return \"Salam, \" + ad", r: "return funksiyanın nəticəsini qaytarır." }, Q: [
    [1, "Funksiya hansı açar sözlə yaradılır?", ["def", "func", "function", "fn"], "def."],
    [1, "Funksiyadan nəticə qaytarmaq üçün:", ["return", "print", "break", "yield only"], "return."],
    [1, "Lüğət hansı mötərizə ilə yazılır?", ["{ }", "[ ]", "( )", "< >"], "Fiqurlu mötərizə."],
    [2, "def f(x): return x * 3; print(f(4)) nəticəsi:", ["12", "7", "43", "x*3"], "4 × 3 = 12."],
    [2, "d = {\"a\": 1, \"b\": 2}; print(d[\"b\"]) nəticəsi:", ["2", "1", "b", "Xəta"], "Açar “b” → 2."],
    [3, "[x * 2 for x in range(3)] nəticəsi:", ["[0, 2, 4]", "[2, 4, 6]", "[0, 1, 2]", "[1, 2, 3]"], "0, 1, 2 hərəsi 2-yə vurulur."],
    [3, "len({\"x\": 1, \"y\": 2, \"z\": 3}) nəticəsi:", ["3", "6", "2", "1"], "3 açar."] ] });

  s = "iqtisad";
  A(s, 1, { t: "Tələb və təklif", L: { p: "Bazarda qiymət tələb və təklifin qarşılıqlı təsiri ilə formalaşır.", k: ["Tələb qanunu: qiymət artdıqca tələb olunan miqdar azalır.", "Təklif qanunu: qiymət artdıqca təklif olunan miqdar artır.", "Tarazlıq qiyməti — tələb və təklifin bərabər olduğu qiymət."], x: "Yayda qarpızın təklifi artır, qiyməti düşür.", r: "Defisit — tələb təklifdən çox olanda yaranır." }, Q: [
    [1, "Qiymət artanda tələb olunan miqdar adətən…", ["azalır", "artır", "dəyişmir", "sıfır olur"], "Tələb qanunu."],
    [1, "Qiymət artanda təklif olunan miqdar…", ["artır", "azalır", "dəyişmir", "yox olur"], "Təklif qanunu."],
    [1, "Tələb və təklifin bərabər olduğu qiymət:", ["Tarazlıq qiyməti", "Minimum əmək haqqı", "Vergi dərəcəsi", "Endirim"], "Tarazlıq."],
    [2, "Tələb təklifdən çox olanda nə yaranır?", ["Defisit (qıtlıq)", "Artıqlıq", "Deflyasiya", "Tarazlıq"], "Mal çatmır."],
    [2, "Təklif tələbdən çox olanda qiymət adətən…", ["düşür", "qalxır", "dəyişmir", "ikiqat artır"], "Satıcılar qiyməti endirir."],
    [3, "Mövsüm sonu meyvənin ucuzlaşmasının səbəbi:", ["Təklifin artması", "Tələbin kəskin artması", "Vergilərin artması", "İnflyasiya"], "Təklif artır."],
    [3, "Bir malın qiyməti artdıqda onun əvəzedicisinə tələb…", ["artır", "azalır", "dəyişmir", "sıfırlanır"], "Məsələn, çay bahalaşanda qəhvəyə tələb artır."] ] });
  A(s, 2, { t: "İnflyasiya, ÜDM və pul", L: { p: "Makroiqtisadiyyat bütöv ölkə iqtisadiyyatını öyrənir.", k: ["ÜDM — ölkədə bir ildə istehsal olunan son mal və xidmətlərin dəyəri.", "İnflyasiya — qiymətlərin ümumi səviyyəsinin artması.", "Azərbaycanın milli valyutası manat (AZN), pul siyasətini Mərkəzi Bank aparır."], x: "İnflyasiya 5% olarsa, 100 AZN-lik səbət il sonra təxminən 105 AZN olur.", r: "Mərkəzi Bank uçot dərəcəsi ilə inflyasiyaya təsir edir." }, Q: [
    [1, "İnflyasiya nədir?", ["Qiymətlərin ümumi artımı", "Qiymətlərin düşməsi", "Əmək haqqının artımı", "İxracın artımı"], "Pulun alıcılıq qabiliyyəti düşür."],
    [1, "Azərbaycanın milli valyutası:", ["Manat", "Lirə", "Rubl", "Dollar"], "AZN — manat."],
    [1, "ÜDM nəyi ölçür?", ["Ölkədə istehsal olunan son mal və xidmətlərin dəyərini", "Əhalinin sayını", "Ərazini", "Dövlət borcunu"], "Ümumi daxili məhsul."],
    [2, "Pul siyasətini həyata keçirən qurum:", ["Mərkəzi Bank", "Vergi orqanı", "Statistika komitəsi", "Nazirlər Kabineti binası"], "Mərkəzi Bank."],
    [2, "İnflyasiya 10%-dir. 200 AZN-lik məhsul il sonra təxminən…", ["220 AZN", "180 AZN", "210 AZN", "200 AZN"], "200 × 1,10 = 220."],
    [3, "Qiymətlərin ümumi səviyyəsinin düşməsi necə adlanır?", ["Deflyasiya", "İnflyasiya", "Devalvasiya", "Stagnasiya"], "Deflyasiya."],
    [3, "Mərkəzi Bank inflyasiyanı azaltmaq üçün uçot dərəcəsini adətən…", ["artırır", "sıfıra endirir", "dəyişmir", "ləğv edir"], "Kredit bahalaşır, tələb soyuyur."] ] });
  A(s, 3, { t: "Faiz hesabları və şəxsi maliyyə", L: { p: "Əmanət və kreditlərdə faiz sadə və ya mürəkkəb hesablanır.", k: ["Sadə faiz: gəlir = məbləğ × dərəcə × il.", "Mürəkkəb faiz: S = P · (1 + r)ⁿ — faiz faizə gəlir.", "Real gəlir ≈ nominal faiz − inflyasiya."], x: "1 000 AZN, illik 10%, 2 il mürəkkəb: 1 000 · 1,1² = 1 210 AZN.", r: "Qızıl qayda: gəlirin bir hissəsini ehtiyat fonduna ayır." }, Q: [
    [1, "1 000 AZN illik 10% sadə faizlə 1 ildə nə qədər gəlir gətirir?", ["100 AZN", "10 AZN", "1 100 AZN", "1 000 AZN"], "1 000 × 0,10 = 100."],
    [1, "Mürəkkəb faizin əsas xüsusiyyəti:", ["Faiz faizə gəlir", "Faiz hər il azalır", "Faiz hesablanmır", "Yalnız ilk il faiz verilir"], "Kapitallaşma."],
    [1, "Ehtiyat fondu nə üçündür?", ["Gözlənilməz xərclər üçün", "Lotereya üçün", "Vergi ödəməmək üçün", "Krediti artırmaq üçün"], "Maliyyə təhlükəsizliyi."],
    [2, "2 000 AZN, illik 5% sadə faiz, 3 il. Gəlir?", ["300 AZN", "315,25 AZN", "100 AZN", "30 AZN"], "2 000 × 0,05 × 3 = 300."],
    [2, "Nominal faiz 12%, inflyasiya 8%. Real gəlir təxminən:", ["4%", "20%", "12%", "8%"], "12 − 8 = 4%."],
    [3, "1 000 AZN, illik 10% mürəkkəb, 2 il. Yekun məbləğ?", ["1 210 AZN", "1 200 AZN", "1 100 AZN", "1 020 AZN"], "1 000 · 1,21 = 1 210."],
    [3, "“72 qaydası”na görə illik 8% gəlirlə pul təxminən neçə ilə ikiqat artır?", ["9", "8", "12", "72"], "72 / 8 = 9."] ] });

  s = "excel";
  A(s, 1, { t: "Excel-ə giriş", L: { p: "Excel cədvəllərlə işləmək, hesablamaq və hesabat hazırlamaq üçün proqramdır.", k: ["Xana sütun və sətrin kəsişməsidir: C5.", "Düstur “=” ilə başlayır.", "Avtodoldurma: xananın sağ aşağı küncündən dartaraq ardıcıllığı davam etdirmək."], x: "=B2*C2 — miqdar × qiymət.", r: "Ctrl + Z — geri qaytar, Ctrl + S — saxla." }, Q: [
    [1, "Düstur nə ilə başlayır?", ["=", "#", "&", "$"], "Bərabərlik işarəsi."],
    [1, "D sütunu və 4-cü sətrin xanası:", ["D4", "4D", "D-4", "DD4"], "Sütun + sətir."],
    [1, "Cəmləmə funksiyası:", ["SUM", "COUNT", "MAX", "LEN"], "SUM."],
    [2, "=SUM(A1:A3), A1=2, A2=3, A3=5 olarsa?", ["10", "5", "30", "235"], "2 + 3 + 5 = 10."],
    [2, "Ən böyük qiyməti tapan funksiya:", ["MAX", "MIN", "SUM", "AVERAGE"], "MAX."],
    [3, "=AVERAGE(4, 6, 8) nəticəsi:", ["6", "18", "8", "4"], "18 / 3 = 6."],
    [3, "Ardıcıllığı tez davam etdirmək üsulu:", ["Avtodoldurma", "Şərti formatlama", "Filtr", "Pivot cədvəl"], "Doldurma markerini dartmaq."] ] });
  A(s, 2, { t: "Funksiyalar və ünvanlar", L: { p: "İş zamanı ən çox IF, COUNTIF, ROUND kimi funksiyalar və mütləq ünvanlar lazım olur.", k: ["=IF(B2>=50; \"Keçdi\"; \"Kəsildi\") — şərtə görə nəticə.", "=COUNTIF(A:A; \"Bakı\") — şərtə uyğun xanaları sayır.", "$A$1 — mütləq ünvan, düsturu köçürəndə dəyişmir."], x: "Endirimli qiymət: =B2*(1-$E$1), E1-də endirim faizi.", r: "F4 düyməsi ünvanı mütləqə çevirir." }, Q: [
    [1, "Şərt funksiyası:", ["IF", "SUM", "LEN", "NOW"], "IF."],
    [1, "Mütləq ünvan hansıdır?", ["$A$1", "A1", "A$", "1A"], "Dollar işarələri ilə."],
    [1, "Şərtə uyğun xanaları sayan funksiya:", ["COUNTIF", "SUMIF", "IF", "ROUND"], "COUNTIF."],
    [2, "=IF(70>50; \"Bəli\"; \"Xeyr\") nəticəsi:", ["Bəli", "Xeyr", "70", "Xəta"], "Şərt doğrudur."],
    [2, "=ROUND(3,456; 1) nəticəsi:", ["3,5", "3,4", "3", "3,46"], "1 onluq rəqəmə yuvarlaq."],
    [3, "Ünvanı mütləqə çevirən düymə:", ["F4", "F2", "F9", "F12"], "F4."],
    [3, "=SUMIF(A1:A4; \">5\") — A: 3, 6, 8, 2. Nəticə?", ["14", "19", "2", "6"], "6 + 8 = 14."] ] });
  A(s, 3, { t: "Analitik alətlər", L: { p: "Peşəkar istifadəçi məlumatı axtarır, birləşdirir və vizual hesabata çevirir.", k: ["VLOOKUP / XLOOKUP — cədvəldə dəyəri axtarıb uyğun məlumatı qaytarır.", "Pivot cədvəl (PivotTable) — böyük məlumatı tez qruplaşdırıb yekunlaşdırır.", "Şərti formatlama — şərtə görə xanaları rəngləyir."], x: "=VLOOKUP(\"A102\"; A2:D100; 3; FALSE) — A102 kodlu məhsulun 3-cü sütundakı qiyməti.", r: "VLOOKUP-da FALSE — dəqiq uyğunluq." }, Q: [
    [1, "Cədvəldə dəyər axtaran funksiya:", ["VLOOKUP", "SUM", "ROUND", "TODAY"], "VLOOKUP."],
    [1, "Böyük məlumatı qruplaşdırıb yekunlaşdıran alət:", ["Pivot cədvəl", "Şrift", "Çap önizləmə", "Haşiyə"], "PivotTable."],
    [1, "Xanaları şərtə görə rəngləyən alət:", ["Şərti formatlama", "Avtodoldurma", "Birləşdirmə", "Dondurma"], "Conditional formatting."],
    [2, "VLOOKUP-da son arqument FALSE nə deməkdir?", ["Dəqiq uyğunluq", "Təxmini uyğunluq", "Xətanı gizlət", "Sütunu sil"], "Exact match."],
    [2, "VLOOKUP axtarılan dəyəri cədvəlin hansı sütununda axtarır?", ["Birinci", "Sonuncu", "İstənilən", "İkinci"], "Diapazonun ilk sütununda."],
    [3, "XLOOKUP-un VLOOKUP-dan üstünlüyü:", ["Sola da axtara bilir", "Yalnız rəqəmlə işləyir", "Düstursuz işləyir", "Faylı şifrələyir"], "İstənilən istiqamətdə axtarır."],
    [3, "=VLOOKUP(x; A2:D50; 4; FALSE) hansı sütundan qaytarır?", ["D", "A", "B", "4-cü sətir"], "Diapazonun 4-cü sütunu — D."] ] });
})(B.add);
