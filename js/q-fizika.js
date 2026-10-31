/* Fizika — gücləndirilmiş sual bankı.
   Səviyyə 3 (Çətin): çoxaddımlı hesablama və anlayış. Səviyyə 4 (Ekspert): buraxılış / olimpiada tipli.
   B.more() köhnə "çətin" trivia suallarını avtomatik "orta"ya keçirir. */
(function (M) {
  const s = "fizika";
  M(s, "Fiziki kəmiyyətlər və ölçmə", [
    [3, "Xətkeşdə 0 sm ilə 1 sm arasında 10 bölgü var. Bölgü qiyməti nədir?", ["1 mm", "1 sm", "0,1 mm", "10 mm"], "(1 sm − 0) / 10 = 0,1 sm = 1 mm."],
    [3, "Kubun tili 2 sm-dir. Həcmi neçə sm³-dir?", ["8", "6", "4", "12"], "V = a³ = 2³ = 8 sm³."],
    [3, "0,5 t + 300 kq + 2000 q = ? kq", ["802 kq", "532 kq", "800,2 kq", "2800 kq"], "500 + 300 + 2 = 802 kq."],
    [4, "Menzurkada 60 ml su var idi. Eyni 5 kürəcik salındı, səviyyə 85 ml oldu. Bir kürəciyin həcmi?", ["5 sm³", "25 sm³", "17 sm³", "12 sm³"], "(85 − 60) / 5 = 5 ml = 5 sm³."],
    [4, "Otağın ölçüləri 5 m × 4 m × 3 m. İçindəki havanın həcmi neçə litrdir?", ["60 000 l", "60 l", "6000 l", "600 l"], "V = 60 m³, 1 m³ = 1000 l → 60 000 l."],
    [4, "1 m² neçə sm²-dir?", ["10 000 sm²", "100 sm²", "1000 sm²", "1 000 000 sm²"], "1 m² = 100 sm × 100 sm = 10 000 sm²."] ]);
  M(s, "Maddənin halları və sıxlıq", [
    [3, "Tili 10 sm olan alüminium kubun (ρ = 2700 kq/m³) kütləsi?", ["2,7 kq", "27 kq", "0,27 kq", "270 kq"], "V = 0,001 m³, m = ρV = 2,7 kq."],
    [3, "Eyni kütləli dəmir (7800 kq/m³) və alüminium (2700 kq/m³) kürələrdən hansının həcmi böyükdür?", ["Alüminiumun", "Dəmirin", "Bərabərdir", "Kütlədən asılıdır"], "V = m / ρ: sıxlıq kiçikdirsə, həcm böyükdür."],
    [3, "Qabda 2 l su var. Suyun kütləsi?", ["2 kq", "0,2 kq", "20 kq", "2000 kq"], "2 l = 0,002 m³ → m = 1000 · 0,002 = 2 kq."],
    [4, "Boş şüşə 200 q, su ilə dolu 700 q, naməlum maye ilə dolu 600 q gəlir. Mayenin sıxlığı?", ["800 kq/m³", "1200 kq/m³", "600 kq/m³", "1000 kq/m³"], "Su 500 q → V = 500 sm³. Maye 400 q → ρ = 400/500 = 0,8 q/sm³ = 800 kq/m³."],
    [4, "Kütləsi 1,56 kq olan dəmir parçasının (ρ = 7800 kq/m³) həcmi?", ["200 sm³", "2000 sm³", "20 sm³", "0,2 sm³"], "V = 1,56 / 7800 = 0,0002 m³ = 200 sm³."],
    [4, "Bərabər həcmdə su (1000 kq/m³) və spirt (800 kq/m³) qarışdırıldı. Qarışığın sıxlığı (həcm dəyişmirsə)?", ["900 kq/m³", "1800 kq/m³", "800 kq/m³", "1000 kq/m³"], "ρ = (ρ₁V + ρ₂V) / 2V = (1000 + 800) / 2 = 900."] ]);
  M(s, "Sadə mexanizmlər", [
    [3, "Lingin qolları 20 sm və 80 sm. Qısa qolda 400 N yük var. Tarazlıq üçün uzun qola qüvvə?", ["100 N", "1600 N", "400 N", "80 N"], "F₁l₁ = F₂l₂ → 400 · 20 / 80 = 100 N."],
    [3, "Tərpənən blokla 300 N yük qaldırılır (blokun çəkisi nəzərə alınmır). Lazım olan qüvvə?", ["150 N", "300 N", "600 N", "75 N"], "Tərpənən blok qüvvədə 2 dəfə qazandırır."],
    [3, "Lingin tarazlıq şərti:", ["F₁·l₁ = F₂·l₂", "F₁/l₁ = F₂·l₂", "F₁ + F₂ = l₁ + l₂", "F₁·F₂ = l₁·l₂"], "Qüvvə momentləri bərabərdir."],
    [4, "Maili müstəvinin uzunluğu 5 m, hündürlüyü 1 m. 500 N yükü sürtünməsiz qaldırmaq üçün qüvvə?", ["100 N", "500 N", "2500 N", "250 N"], "F·l = P·h → F = 500 · 1 / 5 = 100 N."],
    [4, "600 N yük maili müstəvi ilə 1,5 m hündürlüyə qaldırıldı: 250 N qüvvə ilə 4,5 m yol. FİƏ?", ["80%", "67%", "90%", "125%"], "Faydalı iş 900 C, tam iş 1125 C → 900/1125 = 80%."],
    [4, "Bir tərpənən blokla 800 N yük 2 m qaldırılır. İpi neçə metr çəkmək lazımdır?", ["4 m", "2 m", "1 m", "8 m"], "Qüvvədə 2 dəfə qazanc → yolda 2 dəfə itki (qızıl qayda)."] ]);
  M(s, "Mexaniki hərəkət və sürət", [
    [3, "72 km/saat neçə m/s-dir?", ["20 m/s", "72 m/s", "7,2 m/s", "259,2 m/s"], "72 / 3,6 = 20 m/s."],
    [3, "Velosipedçi 15 dəqiqədə 4,5 km getdi. Sürəti m/s ilə?", ["5 m/s", "0,3 m/s", "18 m/s", "300 m/s"], "4500 m / 900 s = 5 m/s."],
    [3, "Qatar 54 km/saat sürətlə 20 s hərəkət etdi. Getdiyi yol?", ["300 m", "1080 m", "2,7 m", "3 km"], "54 km/saat = 15 m/s; 15 · 20 = 300 m."],
    [4, "Avtomobil yolun birinci yarısını 60 km/saat, ikinci yarısını 40 km/saat sürətlə getdi. Orta sürət?", ["48 km/saat", "50 km/saat", "45 km/saat", "52 km/saat"], "v = 2v₁v₂ / (v₁ + v₂) = 4800 / 100 = 48. Orta sürət ədədi orta deyil!"],
    [4, "200 m uzunluqlu qatar 400 m-lik körpüdən 36 km/saat sürətlə tam keçir. Nə qədər vaxt?", ["60 s", "40 s", "20 s", "16,7 s"], "Yol = 400 + 200 = 600 m, v = 10 m/s → 60 s."],
    [4, "İki avtomobil eyni nöqtədən əks istiqamətdə 50 və 70 km/saat sürətlə çıxdı. 1,5 saat sonra aralarındakı məsafə?", ["180 km", "30 km", "120 km", "105 km"], "Uzaqlaşma sürəti 120 km/saat · 1,5 = 180 km."] ]);
  M(s, "Təzyiq", [
    [3, "60 kq-lıq oğlan iki ayaq üstə durur, hər ayaqqabının sahəsi 0,015 m². Təzyiq? (g = 10)", ["20 kPa", "40 kPa", "9 kPa", "4 kPa"], "p = 600 N / 0,03 m² = 20 000 Pa."],
    [3, "5 m dərinlikdə suyun hidrostatik təzyiqi? (ρ = 1000, g = 10)", ["50 kPa", "5 kPa", "500 kPa", "2 kPa"], "p = ρgh = 1000 · 10 · 5 = 50 000 Pa."],
    [3, "Hidravlik pressin porşenləri 10 sm² və 200 sm². Kiçiyə 50 N tətbiq olunur. Böyükdə qüvvə?", ["1000 N", "2,5 N", "250 N", "10 000 N"], "F₂ = F₁ · S₂/S₁ = 50 · 20 = 1000 N."],
    [4, "Kerosinli (800 kq/m³) qabın dibində təzyiq 4 kPa-dır. Kerosin sütununun hündürlüyü?", ["0,5 m", "5 m", "0,05 m", "2 m"], "h = p / (ρg) = 4000 / 8000 = 0,5 m."],
    [4, "Atmosfer təzyiqi 100 kPa-dır. Hansı dərinlikdə ümumi təzyiq 300 kPa olur?", ["20 m", "30 m", "10 m", "3 m"], "Hidrostatik hissə 200 kPa → h = 200 000 / 10 000 = 20 m."],
    [4, "Dəmir kubun (ρ = 7800) masaya təzyiqi 7,8 kPa-dır. Kubun tili?", ["10 sm", "1 sm", "1 m", "7,8 sm"], "Kub üçün p = ρga → a = 7800 / 78 000 = 0,1 m."] ]);
  M(s, "Arximed qüvvəsi", [
    [3, "Cisim havada 10 N, suda 6 N gəlir. Arximed qüvvəsi?", ["4 N", "16 N", "6 N", "10 N"], "F_A = 10 − 6 = 4 N."],
    [3, "Həcmi 200 sm³ olan cisim kerosinə (800 kq/m³) tam batırılıb. F_A? (g = 10)", ["1,6 N", "2 N", "16 N", "0,16 N"], "800 · 10 · 0,0002 = 1,6 N."],
    [3, "Cisim mayedə həcminin yarısı batmış halda üzür. Onun sıxlığı mayeninkinin:", ["yarısıdır", "2 qatıdır", "bərabəridir", "dörddə biridir"], "ρ_cisim / ρ_maye = batan hissə = 1/2."],
    [4, "Havada 10 N, suda 6 N gələn cismin sıxlığı?", ["2500 kq/m³", "1667 kq/m³", "4000 kq/m³", "600 kq/m³"], "V = 4 / 10 000 = 0,0004 m³, m = 1 kq → ρ = 2500."],
    [4, "Buz (900 kq/m³) suda üzür. Həcminin neçə faizi suyun üstündədir?", ["10%", "90%", "1%", "50%"], "Batan hissə 900/1000 = 90%, deməli 10% üstdədir."],
    [4, "Həcmi 0,5 m³, kütləsi 200 kq olan sal batmadan ən çox neçə kq yük götürər?", ["300 kq", "500 kq", "700 kq", "200 kq"], "Maks. F_A = 5000 N ≈ 500 kq; sal özü 200 → 300 kq."] ]);
  M(s, "Qüvvə və Nyuton qanunları", [
    [3, "2 kq-lıq cismə 10 N qüvvə təsir edir. Təcil?", ["5 m/s²", "20 m/s²", "0,2 m/s²", "12 m/s²"], "a = F/m = 5 m/s²."],
    [3, "Yay 50 N qüvvə ilə 2,5 sm uzanır. Sərtliyi?", ["2000 N/m", "20 N/m", "125 N/m", "200 N/m"], "k = F/x = 50 / 0,025 = 2000 N/m."],
    [3, "5 kq-lıq cismə 30 N və 40 N qüvvələr bir-birinə perpendikulyar təsir edir. Təcil?", ["10 m/s²", "14 m/s²", "2 m/s²", "70 m/s²"], "Əvəzləyici √(30² + 40²) = 50 N → a = 10."],
    [4, "10 kq-lıq qutu üfüqi səthdə 50 N qüvvə ilə dartılır, μ = 0,3 (g = 10). Təcil?", ["2 m/s²", "5 m/s²", "3 m/s²", "0,5 m/s²"], "Sürtünmə 30 N → a = (50 − 30)/10 = 2."],
    [4, "Liftdə 60 kq-lıq adam tərəzidə durur. Lift yuxarı 2 m/s² təcillə qalxır. Tərəzi nə göstərir?", ["720 N", "600 N", "480 N", "120 N"], "N = m(g + a) = 60 · 12 = 720 N."],
    [4, "İplə bağlı 2 kq və 3 kq cisimlər sürtünməsiz masada 3 kq-lıqdan 20 N ilə dartılır. İpdə gərilmə?", ["8 N", "12 N", "20 N", "4 N"], "a = 20/5 = 4 m/s², T = 2 · 4 = 8 N."] ]);
  M(s, "İstilik hadisələri", [
    [3, "2 kq suyu 20 °C-dən 70 °C-yə qızdırmaq üçün istilik? (c = 4200)", ["420 kC", "210 kC", "588 kC", "84 kC"], "Q = cmΔt = 4200 · 2 · 50 = 420 000 C."],
    [3, "100 °C-də 1 kq suyu buxara çevirmək üçün (L = 2,3 MC/kq):", ["2,3 MC", "230 kC", "23 MC", "0,23 MC"], "Q = Lm = 2,3 MC."],
    [3, "Eyni kütləli su və yağa eyni istilik verildi. Hansının temperaturu çox artar?", ["Yağın", "Suyun", "Bərabər artar", "Qabdan asılıdır"], "Suyun xüsusi istilik tutumu böyükdür — gec qızır."],
    [4, "1 kq 80 °C su ilə 3 kq 20 °C su qarışdırıldı. Son temperatur (itkisiz)?", ["35 °C", "50 °C", "40 °C", "30 °C"], "t = (1·80 + 3·20) / 4 = 35 °C."],
    [4, "0 °C-də 0,5 kq buzu əritmək üçün istilik (λ = 330 kC/kq)?", ["165 kC", "660 kC", "330 kC", "16,5 kC"], "Q = λm = 165 kC."],
    [4, "2 kq su 10 dəqiqədə 20 °C-dən 100 °C-yə qızdı. Qızdırıcının faydalı gücü?", ["1120 Vt", "672 Vt", "11,2 kVt", "560 Vt"], "Q = 4200 · 2 · 80 = 672 000 C; P = Q / 600 s = 1120 Vt."] ]);
  M(s, "Elektrik yükü", [
    [3, "Elektronun yükü:", ["−1,6·10⁻¹⁹ Kl", "+1,6·10⁻¹⁹ Kl", "−1 Kl", "9,1·10⁻³¹ Kl"], "Elementar yük e = 1,6·10⁻¹⁹ Kl, elektron mənfidir."],
    [3, "İki nöqtəvi yük arasındakı məsafə 2 dəfə artırıldı. Kulon qüvvəsi:", ["4 dəfə azalır", "2 dəfə azalır", "4 dəfə artır", "dəyişmir"], "F ~ 1/r²."],
    [3, "Yükləri +6q və −2q olan eyni kürəciklər toxundurulub ayrıldı. Hər birinin yükü:", ["+2q", "+4q", "−2q", "+3q"], "Cəm +4q bərabər bölünür."],
    [4, "Hər iki yük 3 dəfə, aralarındakı məsafə də 3 dəfə artırıldı. Qüvvə:", ["dəyişmir", "9 dəfə artır", "3 dəfə artır", "9 dəfə azalır"], "F ~ q₁q₂/r² → 9/9 = 1."],
    [4, "Cisimdən 10¹⁹ elektron götürüldü. Cismin yükü?", ["+1,6 Kl", "−1,6 Kl", "+16 Kl", "+0,16 Kl"], "q = Ne = 10¹⁹ · 1,6·10⁻¹⁹; elektron gedib → müsbət."],
    [4, "Vakuumda 3 m məsafədəki 1 mkKl və 1 mkKl yüklər arasında qüvvə? (k = 9·10⁹)", ["1 mN", "3 mN", "9 mN", "0,1 mN"], "F = 9·10⁹ · 10⁻¹² / 9 = 10⁻³ N."] ]);
  M(s, "Elektrik cərəyanı və Om qanunu", [
    [3, "Rezistorda gərginlik 12 V, cərəyan 0,5 A. Müqavimət?", ["24 Ω", "6 Ω", "12,5 Ω", "0,04 Ω"], "R = U/I = 24 Ω."],
    [3, "Naqildən 2 dəqiqədə 240 Kl yük keçdi. Cərəyan şiddəti?", ["2 A", "120 A", "480 A", "0,5 A"], "I = q/t = 240/120 = 2 A."],
    [3, "Naqilin uzunluğu 2 dəfə artırıldı, en kəsiyi 2 dəfə azaldıldı. Müqavimət:", ["4 dəfə artır", "dəyişmir", "2 dəfə artır", "4 dəfə azalır"], "R = ρl/S → 2 · 2 = 4."],
    [4, "Mis naqil: l = 100 m, S = 1,7 mm², ρ = 0,017 Ω·mm²/m. Müqavimət?", ["1 Ω", "10 Ω", "0,1 Ω", "2,89 Ω"], "R = 0,017 · 100 / 1,7 = 1 Ω."],
    [4, "Mənbənin EHQ-si 12 V, daxili müqaviməti 1 Ω, xarici müqavimət 5 Ω. Cərəyan?", ["2 A", "2,4 A", "12 A", "1,2 A"], "Tam dövrə üçün Om qanunu: I = ε/(R + r) = 12/6."],
    [4, "Həmin dövrədə (ε = 12 V, r = 1 Ω, R = 5 Ω) mənbənin sıxaclarındakı gərginlik?", ["10 V", "12 V", "2 V", "6 V"], "U = IR = 2 · 5 = 10 V (2 V daxildə itir)."] ]);
  M(s, "Maqnetizm", [
    [3, "Cərəyanlı düz naqilin maqnit sahəsinin istiqaməti hansı qayda ilə tapılır?", ["Burğu (sağ əl) qaydası", "Sol əl qaydası", "Lens qaydası", "Om qanunu"], "Burğu qaydası."],
    [3, "Maqnit sahəsində cərəyanlı naqilə təsir edən qüvvə:", ["Amper qüvvəsi", "Kulon qüvvəsi", "Arximed qüvvəsi", "Sürtünmə qüvvəsi"], "F = BIl sin α."],
    [3, "Elektromaqniti gücləndirmək üçün:", ["Sarğıların sayını artırmaq", "Cərəyanı azaltmaq", "Dəmir içliyi çıxarmaq", "Mis içlik qoymaq"], "Sarğı sayı, cərəyan və dəmir içlik sahəni gücləndirir."],
    [4, "B = 0,2 Tl sahəsinə perpendikulyar 0,5 m naqildən 4 A cərəyan keçir. Amper qüvvəsi?", ["0,4 N", "4 N", "1,6 N", "0,1 N"], "F = BIl = 0,2 · 4 · 0,5 = 0,4 N."],
    [4, "Maqnit sarğaca daxil ediləndə sarğacda cərəyan yaranır. Bu hadisə:", ["Elektromaqnit induksiyası", "Fotoeffekt", "Elektroliz", "Termoelektron emissiyası"], "Faradey kəşf edib."],
    [4, "Transformatorun 1-ci sarğısında 1000, 2-cidə 50 sarğı var. Girişdə 220 V. Çıxış?", ["11 V", "4400 V", "220 V", "22 V"], "U₂ = U₁ · N₂/N₁ = 220 / 20 = 11 V."] ]);
  M(s, "Ardıcıl və paralel birləşmə", [
    [3, "3 Ω və 6 Ω paralel birləşib. Ümumi müqavimət?", ["2 Ω", "9 Ω", "18 Ω", "4,5 Ω"], "R = 3·6 / (3 + 6) = 2 Ω."],
    [3, "Ardıcıl 2 Ω və 4 Ω rezistorlara 12 V verilir. 4 Ω-dakı gərginlik?", ["8 V", "4 V", "6 V", "12 V"], "I = 12/6 = 2 A → U = 2 · 4 = 8 V."],
    [3, "60 Vt-lıq lampa 5 saat yanır. Sərf olunan enerji?", ["0,3 kVt·saat", "300 kVt·saat", "12 kVt·saat", "3 kVt·saat"], "W = Pt = 60 · 5 = 300 Vt·saat."],
    [4, "4 Ω rezistor (3 Ω ∥ 6 Ω) cütünə ardıcıl qoşulub. Ümumi müqavimət?", ["6 Ω", "13 Ω", "4,5 Ω", "2 Ω"], "Paralel hissə 2 Ω + 4 Ω = 6 Ω."],
    [4, "Həmin dövrəyə 12 V verilir. 6 Ω-luq rezistordan keçən cərəyan?", ["2/3 A", "2 A", "1 A", "4/3 A"], "I = 2 A, paralel hissədə U = 4 V → 4/6 = 2/3 A."],
    [4, "220 V-luq şəbəkəyə qoşulan 1100 Vt-lıq çaydanın spiralının müqaviməti?", ["44 Ω", "5 Ω", "0,2 Ω", "242 Ω"], "R = U²/P = 48 400 / 1100 = 44 Ω."] ]);
  M(s, "İş, güc və enerji", [
    [3, "5 kq yük bərabər sürətlə 4 m qaldırıldı. Görülən iş? (g = 10)", ["200 C", "20 C", "50 C", "2000 C"], "A = mgh = 5 · 10 · 4 = 200 C."],
    [3, "Kütləsi 2 kq, sürəti 6 m/s olan cismin kinetik enerjisi?", ["36 C", "12 C", "72 C", "18 C"], "E = mv²/2 = 2 · 36 / 2 = 36 C."],
    [3, "Mühərrik 1 dəqiqədə 120 kC iş görür. Gücü?", ["2 kVt", "120 kVt", "7,2 MVt", "20 kVt"], "P = 120 000 / 60 = 2000 Vt."],
    [4, "5 m hündürlükdən sərbəst düşən cismin yerə çatma sürəti? (g = 10)", ["10 m/s", "50 m/s", "5 m/s", "25 m/s"], "mgh = mv²/2 → v = √(2gh) = √100."],
    [4, "Sürət 2 dəfə artanda kinetik enerji:", ["4 dəfə artır", "2 dəfə artır", "dəyişmir", "8 dəfə artır"], "E ~ v²."],
    [4, "Kran 1 t yükü 30 s-də 12 m qaldırır, FİƏ 80%. Mühərrikin gücü?", ["5 kVt", "4 kVt", "3,2 kVt", "40 kVt"], "Faydalı güc 120 000 / 30 = 4 kVt → 4 / 0,8 = 5 kVt."] ]);
  M(s, "Rəqslər və dalğalar", [
    [3, "Dalğanın tezliyi 170 Hs, sürəti 340 m/s. Dalğa uzunluğu?", ["2 m", "0,5 m", "57 800 m", "170 m"], "λ = v/ν = 2 m."],
    [3, "Riyazi rəqqasın uzunluğu 4 dəfə artırılsa, periodu:", ["2 dəfə artır", "4 dəfə artır", "2 dəfə azalır", "dəyişmir"], "T = 2π√(l/g) → √4 = 2."],
    [3, "Rəqqas 10 s-də 20 rəqs edir. Period?", ["0,5 s", "2 s", "200 s", "20 s"], "T = t/N = 0,5 s."],
    [4, "Riyazi rəqqasın uzunluğu 2,5 m (g = 10). Period?", ["≈ 3,14 s", "≈ 1,57 s", "≈ 6,28 s", "≈ 0,5 s"], "T = 2π√0,25 = π ≈ 3,14 s."],
    [4, "Yay rəqqası: m = 0,1 kq, k = 40 N/m. Period?", ["≈ 0,31 s", "≈ 3,14 s", "≈ 0,05 s", "≈ 1,26 s"], "T = 2π√(m/k) = 2π · 0,05 ≈ 0,31 s."],
    [4, "Exolotun siqnalı 0,4 s sonra qayıtdı, suda səs 1500 m/s. Dərinlik?", ["300 m", "600 m", "3750 m", "150 m"], "Səs gedib-qayıdır: h = 1500 · 0,4 / 2 = 300 m."] ]);
  M(s, "Günəş sistemi", [
    [3, "Günəş işığı Yerə təxminən nə qədər vaxta çatır?", ["≈ 8 dəqiqə", "≈ 1 saniyə", "≈ 1 saat", "≈ 1 gün"], "150 mln km / 300 000 km/s ≈ 500 s."],
    [3, "Astronomik vahid (a.v.) nədir?", ["Yerlə Günəş arasındakı orta məsafə", "İşığın 1 ildə getdiyi yol", "Yerin radiusu", "Ayla Yer arası məsafə"], "1 a.v. ≈ 150 mln km."],
    [3, "Keplerin I qanununa görə planetlərin orbiti:", ["Ellipsdir", "Düz xətdir", "Kvadratdır", "Spiraldır"], "Günəş ellipsin fokuslarından birindədir."],
    [4, "Planet Günəşdən 4 a.v. məsafədədir. Fırlanma periodu (Kepler III)?", ["8 il", "4 il", "16 il", "64 il"], "T² = a³ = 64 → T = 8 il."],
    [4, "Ayda g Yerdəkindən ≈ 6 dəfə azdır. Yerdə 60 kq olan kosmonavtın Ayda kütləsi:", ["60 kq", "10 kq", "360 kq", "6 kq"], "Kütlə dəyişmir, dəyişən çəkidir."],
    [4, "“İşıq ili” hansı kəmiyyətin vahididir?", ["Məsafənin", "Zamanın", "Sürətin", "Parlaqlığın"], "İşığın 1 ildə getdiyi yol ≈ 9,46·10¹⁵ m."] ]);
  M(s, "İşıq və optika", [
    [3, "Düşmə bucağı 30°-dir. Əks olunma bucağı?", ["30°", "60°", "90°", "15°"], "Düşmə bucağı = əks olunma bucağı."],
    [3, "Linzanın fokus məsafəsi 0,5 m-dir. Optik qüvvəsi?", ["2 dptr", "0,5 dptr", "5 dptr", "20 dptr"], "D = 1/F = 2 dptr."],
    [3, "İşığın vakuumdakı sürəti:", ["3·10⁸ m/s", "340 m/s", "3·10⁵ m/s", "3·10⁶ km/s"], "c ≈ 300 000 km/s."],
    [4, "Şüşənin sındırma əmsalı 1,5-dir. Şüşədə işığın sürəti?", ["2·10⁸ m/s", "4,5·10⁸ m/s", "1,5·10⁸ m/s", "3·10⁸ m/s"], "v = c/n = 3·10⁸ / 1,5."],
    [4, "Toplayıcı linza: F = 10 sm, cisim 30 sm-dədir. Xəyal hansı məsafədə alınır?", ["15 sm", "20 sm", "7,5 sm", "30 sm"], "1/f = 1/10 − 1/30 = 2/30 → f = 15 sm."],
    [4, "Adam müstəvi güzgüyə 2 m/s sürətlə yaxınlaşır. Öz xəyalına hansı sürətlə yaxınlaşır?", ["4 m/s", "2 m/s", "1 m/s", "0"], "Xəyal da güzgüyə 2 m/s yaxınlaşır: 2 + 2."] ]);
  M(s, "Atom və nüvə fizikası", [
    [3, "²³⁸₉₂U nüvəsində neçə neytron var?", ["146", "92", "238", "330"], "N = A − Z = 238 − 92."],
    [3, "Alfa hissəcik nədir?", ["Helium nüvəsi", "Elektron", "Foton", "Neytron"], "⁴₂He."],
    [3, "Yarımparçalanma dövrü 10 gündür. 40 gündən sonra ilkin miqdarın nə qədəri qalır?", ["1/16", "1/4", "1/8", "1/40"], "4 dövr: (1/2)⁴ = 1/16."],
    [4, "²²⁶₈₈Ra alfa-parçalanmadan sonra hansı nüvəyə çevrilir?", ["²²²₈₆Rn", "²²⁶₈₉Ac", "²²²₉₀Th", "²³⁰₉₀Th"], "A − 4, Z − 2: radon-222."],
    [4, "β⁻ parçalanmada nüvənin yük ədədi:", ["1 artır", "1 azalır", "2 azalır", "dəyişmir"], "Neytron protona çevrilir: Z + 1, A dəyişmir."],
    [4, "1 q kütlə tam enerjiyə çevrilsə (c = 3·10⁸ m/s):", ["9·10¹³ C", "9·10¹⁶ C", "3·10⁵ C", "9·10¹⁰ C"], "E = mc² = 10⁻³ · 9·10¹⁶."] ]);
  M(s, "Fotoeffekt və işığın kvant təbiəti", [
    [3, "Fotoeffektin baş verməsi üçün:", ["İşığın tezliyi qırmızı sərhəddən böyük olmalıdır", "İşıq çox parlaq olmalıdır", "Metal isti olmalıdır", "İşıq qırmızı olmalıdır"], "hν ≥ A çıxış işi."],
    [3, "Fotoelektronların maksimal kinetik enerjisi nədən asılıdır?", ["İşığın tezliyindən", "İşığın intensivliyindən", "Lövhənin ölçüsündən", "Şüalanma müddətindən"], "E_k = hν − A."],
    [3, "Hansı rəngin fotonunun enerjisi böyükdür?", ["Bənövşəyi", "Qırmızı", "Narıncı", "Sarı"], "Tezliyi ən böyükdür."],
    [4, "Foton enerjisi 5 eV, metalın çıxış işi 2 eV. Fotoelektronun maksimal kinetik enerjisi?", ["3 eV", "7 eV", "2,5 eV", "10 eV"], "hν = A + E_k → 5 − 2."],
    [4, "ν = 10¹⁵ Hs olan fotonun enerjisi (h = 6,6·10⁻³⁴ C·s)?", ["6,6·10⁻¹⁹ C", "6,6·10⁻⁴⁹ C", "6,6·10¹⁹ C", "1,5·10⁴⁸ C"], "E = hν."],
    [4, "Tezlik sabit, işığın intensivliyi 2 dəfə artırıldı. Nə dəyişir?", ["Fotoelektronların sayı 2 dəfə artır", "Kinetik enerji 2 dəfə artır", "Çıxış işi azalır", "Heç nə"], "Intensivlik fotonların sayını müəyyən edir."] ]);
})(B.more);
