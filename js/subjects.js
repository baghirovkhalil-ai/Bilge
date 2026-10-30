/* Fənlər, siniflər və məzmun reyestri.
   Sual formatı: [səviyyə 1|2|3, "sual", ["DÜZGÜN", "yanlış", "yanlış", "yanlış"], "izah"] — variantlar ekranda qarışdırılır. */
window.B = (function () {
  const SUBJECTS = [
    { id: "riyaziyyat", n: "Riyaziyyat", c: "#2F5BEA", g: [1, 11], grp: "school", ic: "math", d: "Ədədlərdən törəməyə qədər" },
    { id: "azdili", n: "Azərbaycan dili", c: "#D2453B", g: [1, 11], grp: "school", ic: "lang", d: "Səs, söz, cümlə, üslub" },
    { id: "edebiyyat", n: "Ədəbiyyat", c: "#9B4DCA", g: [5, 11], grp: "school", ic: "book", d: "Şairlər, əsərlər, janrlar" },
    { id: "ingilis", n: "İngilis dili", c: "#0E8C7F", g: [2, 11], grp: "school", ic: "globe", d: "Söz ehtiyatı və qrammatika" },
    { id: "heyat", n: "Həyat bilgisi", c: "#E0912B", g: [1, 4], grp: "school", ic: "leaf", d: "Təbiət, sağlamlıq, cəmiyyət" },
    { id: "informatika", n: "İnformatika", c: "#3C4A63", g: [1, 11], grp: "school", ic: "chip", d: "Kompüter, alqoritm, kod" },
    { id: "fizika", n: "Fizika", c: "#1F7AC2", g: [6, 11], grp: "school", ic: "atom", d: "Hərəkət, qüvvə, enerji" },
    { id: "kimya", n: "Kimya", c: "#C2417A", g: [7, 11], grp: "school", ic: "flask", d: "Maddə, element, reaksiya" },
    { id: "biologiya", n: "Biologiya", c: "#3D9A4A", g: [6, 11], grp: "school", ic: "dna", d: "Hüceyrədən ekosistemə" },
    { id: "cografiya", n: "Coğrafiya", c: "#B5762A", g: [6, 11], grp: "school", ic: "map", d: "Yer kürəsi və Azərbaycan" },
    { id: "tarix", n: "Azərbaycan tarixi", c: "#7A5230", g: [6, 11], grp: "school", ic: "column", d: "Qədim dövrdən müstəqilliyə" },
    { id: "muhasibat", n: "Mühasibatlıq", c: "#245C4F", g: [1, 3], grp: "pro", ic: "ledger", d: "Balans, debet-kredit, vergilər" },
    { id: "marketinq", n: "Rəqəmsal marketinq", c: "#D14B2A", g: [1, 3], grp: "pro", ic: "mega", d: "SMM, reklam, analitika" },
    { id: "proqram", n: "Proqramlaşdırma", c: "#4338CA", g: [1, 3], grp: "pro", ic: "code", d: "Python ilə ilk addımlar" },
    { id: "iqtisad", n: "İqtisadiyyat", c: "#8A6A12", g: [1, 3], grp: "pro", ic: "chart", d: "Bazar, qiymət, inflyasiya" },
    { id: "excel", n: "Excel və ofis", c: "#1D7044", g: [1, 3], grp: "pro", ic: "grid", d: "Düsturlar, cədvəllər, hesabat" },
  ];
  const LVL = { 1: "Başlanğıc", 2: "Orta", 3: "Çətin" };
  const PRO_LVL = { 1: "Başlanğıc", 2: "Orta", 3: "Peşəkar" };
  const T = {}; // T[subject][grade] = [topic]
  function add(s, g, topic) { ((T[s] = T[s] || {})[g] = T[s][g] || []).push(Object.assign({ id: s + "-" + g + "-" + ((T[s][g].length) + 1), s, g }, topic)) }
  return { SUBJECTS, LVL, PRO_LVL, T, add, sub: id => SUBJECTS.find(x => x.id === id) };
})();
