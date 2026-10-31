/* Riyaziyyat test generatorları: hər çağırış yeni sual yaradır, cavab kodla hesablanır.
   gen(level) → { q, o:[4 variant], a: düzgün indeks, e: izah }  level: 1 başlanğıc, 2 orta, 3 çətin */
(function () {
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const fmt = n => (Math.round(n * 1000) / 1000).toString().replace(".", ",").replace(/^-/, "−");
  const P = n => n < 0 ? `(${fmt(n)})` : fmt(n);
  function mc(ans, wrong, show = fmt) {
    const set = [ans], key = v => String(show(v));
    for (const w of wrong) if (set.length < 4 && !set.some(s => key(s) === key(w))) set.push(w);
    let k = 1; while (set.length < 4 && k < 60) { const w = typeof ans === "number" ? ans + k * (k % 2 ? 1 : -1) * (Math.abs(ans) > 20 ? 10 : 1) : (/\d/.test(String(ans)) ? String(ans).replace(/\d+/, m => +m + k) : String(ans) + k); if (!set.some(s => key(s) === key(w))) set.push(w); k++ }
    const o = set.map(show).map(String); // qarışdırma app.js-də
    return { o, a: 0 };
  }
  const shuffleA = a => a.slice().sort(() => Math.random() - .5);
  const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
  const frac = (n, d) => { const g = gcd(n, d) || 1; n /= g; d /= g; if (d < 0) { n = -n; d = -d } return d === 1 ? String(n) : `${n}/${d}` };

  const G = {
    add20(l) { const M = [10, 20, 100][l - 1], a = R(1, M - 1), b = R(1, M - a), sub = Math.random() < .5;
      if (sub) { const x = a + b; return { q: `${x} − ${b} = ?`, ...mc(a, [a + 1, a - 1, x + b]), e: `${x} − ${b} = ${a}. Çıxmanı yoxlamaq üçün toplayırıq: ${a} + ${b} = ${x}.` } }
      return { q: `${a} + ${b} = ?`, ...mc(a + b, [a + b + 1, a + b - 1, a + b + 10]), e: `${a} + ${b} = ${a + b}.` } },
    cmp(l) { const M = [20, 100, 1000][l - 1]; let a = R(1, M), b = R(1, M); if (a === b) b++;
      const s = a > b ? ">" : "<"; return { q: `Boş yerə hansı işarə uyğundur?  ${a} … ${b}`, o: [s, s === ">" ? "<" : ">", "=", "+"], a: 0, e: `${a} ${s} ${b}, çünki ${Math.max(a, b)} ədədi daha böyükdür.` } },
    add100(l) { const M = [50, 100, 1000][l - 1], a = R(10, M - 10), b = R(5, M - a);
      if (Math.random() < .5) { const x = a + b; return { q: `${x} − ${a} = ?`, ...mc(b, [b + 10, b - 10, b + 1]), e: `${x} − ${a} = ${b}.` } }
      return { q: `${a} + ${b} = ?`, ...mc(a + b, [a + b + 10, a + b - 10, a + b + 1]), e: `Əvvəl təkliklər, sonra onluqlar toplanır: ${a} + ${b} = ${a + b}.` } },
    mul5(l) { const a = R(2, [5, 5, 9][l - 1]), b = R(1, [5, 10, 10][l - 1]);
      return { q: `${a} × ${b} = ?`, ...mc(a * b, [a * b + a, a * b - a, a + b]), e: `${a} × ${b} — ${a} ədədini ${b} dəfə toplamaq deməkdir: ${a * b}.` } },
    muldiv(l) { const a = R(2, 9), b = R(2, [5, 9, 12][l - 1]), p = a * b;
      if (Math.random() < .5) return { q: `${p} : ${a} = ?`, ...mc(b, [b + 1, b - 1, a]), e: `${a} × ${b} = ${p}, deməli ${p} : ${a} = ${b}.` };
      return { q: `${a} × ${b} = ?`, ...mc(p, [p + a, p - b, p + 1]), e: `${a} × ${b} = ${p}.` } },
    perim(l) { if (l === 1) { const a = R(2, 9); return { q: `Tərəfi ${a} sm olan kvadratın perimetri neçə sm-dir?`, ...mc(4 * a, [a * a, 2 * a, 3 * a]), e: `Kvadratın 4 bərabər tərəfi var: P = 4 × ${a} = ${4 * a} sm.` } }
      const a = R(3, 15 * l), b = R(2, 10 * l); return { q: `Tərəfləri ${a} sm və ${b} sm olan düzbucaqlının perimetri neçə sm-dir?`, ...mc(2 * (a + b), [a * b, a + b, 2 * a + b]), e: `P = 2 × (${a} + ${b}) = ${2 * (a + b)} sm.` } },
    multi(l) { if (l === 3) { const a = R(120, 999), b = R(12, 48); return { q: `${a} × ${b} = ?`, ...mc(a * b, [a * b + 10 * b, a * b - a, a * b + a]), e: `Sütunla vururuq: ${a} × ${b} = ${a * b}.` } }
      const a = R(1000, l === 1 ? 5000 : 9999), b = R(100, l === 1 ? 999 : 4999), s = Math.random() < .5;
      return s ? { q: `${a} + ${b} = ?`, ...mc(a + b, [a + b + 100, a + b - 10, a + b + 1000]), e: `Mərtəbə-mərtəbə toplayırıq: ${a + b}.` } : { q: `${a + b} − ${b} = ?`, ...mc(a, [a + 100, a - 10, a + 1000]), e: `${a + b} − ${b} = ${a}.` } },
    area(l) { if (l === 3) { const a = R(4, 20), h = R(2, 12) * 2; return { q: `Oturacağı ${a} sm, hündürlüyü ${h} sm olan üçbucağın sahəsi neçə sm²-dir?`, ...mc(a * h / 2, [a * h, a + h, a * h / 4]), e: `S = (a × h) : 2 = (${a} × ${h}) : 2 = ${a * h / 2} sm².` } }
      const a = R(2, 10 * l), b = R(2, 9 * l); return { q: `Tərəfləri ${a} sm və ${b} sm olan düzbucaqlının sahəsi neçə sm²-dir?`, ...mc(a * b, [2 * (a + b), a + b, a * b + a]), e: `S = a × b = ${a} × ${b} = ${a * b} sm².` } },
    frac(l) { const d = pick([2, 3, 4, 5, 6, 8, 10]);
      if (l === 1) { const a = R(1, d - 1), b = R(1, d - a); return { q: `${a}/${d} + ${b}/${d} = ?`, ...mc(frac(a + b, d), [frac(a + b, 2 * d), `${a + b}/${2 * d}`, frac(Math.abs(a - b) || 1, d)], x => x), e: `Məxrəclər eynidirsə, surətlər toplanır: ${a + b}/${d}${frac(a + b, d) !== `${a + b}/${d}` ? " = " + frac(a + b, d) : ""}.` } }
      if (l === 2) { const d2 = pick([2, 3, 4, 5].filter(x => x !== d)), a = R(1, d - 1), b = R(1, d2 - 1); return { q: `${a}/${d} + ${b}/${d2} = ?`, ...mc(frac(a * d2 + b * d, d * d2), [frac(a + b, d + d2), frac(a * b, d * d2), frac(a * d2 + b * d + 1, d * d2)], x => x), e: `Ortaq məxrəc ${d * d2}: ${a * d2}/${d * d2} + ${b * d}/${d * d2} = ${frac(a * d2 + b * d, d * d2)}.` } }
      const a = R(1, 5), b = R(2, 7), c = R(1, 5), e = R(2, 7); return { q: `(${a}/${b}) × (${c}/${e}) = ?`, ...mc(frac(a * c, b * e), [frac(a + c, b + e), frac(a * e, b * c), frac(a * c + 1, b * e)], x => x), e: `Surət surətə, məxrəc məxrəcə vurulur: ${a * c}/${b * e}${frac(a * c, b * e) !== `${a * c}/${b * e}` ? " = " + frac(a * c, b * e) : ""}.` } },
    dec(l) { const a = R(1, 99) / 10 * (l > 1 ? 1.1 : 1), b = R(1, 99) / 10; const A = Math.round(a * 10) / 10;
      if (l === 3) { const x = R(2, 9) / 10, y = R(2, 9); return { q: `${fmt(x)} × ${y} = ?`, ...mc(Math.round(x * y * 10) / 10, [x * y * 10, x + y, Math.round(x * y * 100) / 1000]), e: `${fmt(x * 10)} × ${y} = ${fmt(x * 10 * y)}, sonra vergülü bir rəqəm sola keçiririk: ${fmt(x * y)}.` } }
      return { q: `${fmt(A)} + ${fmt(b)} = ?`, ...mc(Math.round((A + b) * 10) / 10, [Math.round((A + b + 1) * 10) / 10, Math.round((A + b - .1) * 10) / 10, Math.round((A + b) * 100) / 1000]), e: `Vergülü vergülün altına yazıb toplayırıq: ${fmt(A + b)}.` } },
    pct(l) { const p = pick(l === 1 ? [10, 50, 25] : [5, 15, 20, 30, 40, 75]), n = R(2, 20) * (l === 3 ? 40 : 20);
      if (l === 3) { const r = n * (1 + p / 100); return { q: `Malın qiyməti ${n} AZN idi, ${p}% bahalaşdı. Yeni qiymət neçə AZN-dir?`, ...mc(r, [n * p / 100, n + p, n - n * p / 100]), e: `${n}-in ${p}%-i = ${n * p / 100}. Yeni qiymət: ${n} + ${n * p / 100} = ${r} AZN.` } }
      return { q: `${n}-in ${p}%-i neçədir?`, ...mc(n * p / 100, [n * p / 10, n / p, n - n * p / 100]), e: `${n} × ${p} : 100 = ${n * p / 100}.` } },
    neg(l) { const a = R(-15 * l, 15 * l), b = R(-15 * l, 15 * l), op = l === 3 ? "×" : pick(["+", "−"]);
      const v = op === "+" ? a + b : op === "−" ? a - b : a * b, sh = x => x < 0 ? `(${x})` : x;
      return { q: `${sh(a)} ${op} ${sh(b)} = ?`, ...mc(v, [-v, v + 2, op === "×" ? a + b : a * b]), e: op === "×" ? `Eyni işarəli ədədlərin hasili müsbət, müxtəlif işarəlilərin hasili mənfidir: ${v}.` : `Nəticə: ${v}. Mənfi ədədi çıxmaq, müsbət ədədi toplamaq deməkdir.` } },
    lin(l) { const x = R(-9, 12), a = l === 1 ? 1 : R(2, 9), b = R(-20, 20), c = a * x + b;
      const lhs = (a === 1 ? "x" : a + "x") + (b ? (b > 0 ? " + " + b : " − " + -b) : "");
      if (l === 3) { const d = R(1, a - 1 || 1), k = c + d * x; const L2 = `${a}x${b ? (b > 0 ? " + " + b : " − " + -b) : ""} = ${d === 1 ? "" : d}x + ${k - d * x}`; return { q: `Tənliyi həll edin: ${L2}`, ...mc(x, [-x, x + 1, x * 2]), e: `x-li hədləri bir tərəfə keçiririk: ${a - d}x = ${(a - d) * x}, x = ${x}.` } }
      return { q: `Tənliyi həll edin: ${lhs} = ${c}`, ...mc(x, [-x, x + 1, c - b]), e: `${a === 1 ? "x" : a + "x"} = ${c} ${b >= 0 ? "−" : "+"} ${Math.abs(b)} = ${a * x}${a === 1 ? "" : `, x = ${a * x} : ${a} = ${x}`}.` } },
    pow(l) { const b = R(2, l === 1 ? 5 : 9), n = R(2, l === 1 ? 3 : 4);
      if (l === 3) { const m = R(2, 5), k = R(2, 5); return { q: `a${sup(m)} · a${sup(k)} = ?`, ...mc(`a${sup(m + k)}`, [`a${sup(m * k)}`, `a${sup(Math.abs(m - k) || 1)}`, `${m + k}a`], x => x), e: `Eyni əsaslı qüvvətlər vurulanda üstlər toplanır: a${sup(m)}·a${sup(k)} = a${sup(m + k)}.` } }
      return { q: `${b}${sup(n)} = ?`, ...mc(b ** n, [b * n, b ** (n - 1), b ** n + b]), e: `${b}${sup(n)} — ${b} ədədinin ${n} dəfə özünə vurulması: ${b ** n}.` } },
    sqrt(l) { const n = R(2, l === 1 ? 12 : 25); if (l === 3) { const a = R(2, 6), k = pick([2, 3, 5]); return { q: `√${a * a * k} ifadəsini sadələşdirin`, ...mc(`${a}√${k}`, [`${k}√${a}`, `${a * k}`, `${a * a}√${k}`], x => x), e: `√${a * a * k} = √(${a * a}·${k}) = ${a}√${k}.` } }
      return { q: `√${n * n} = ?`, ...mc(n, [n * 2, n * n / 2, n + 1]), e: `${n} × ${n} = ${n * n}, deməli √${n * n} = ${n}.` } },
    pyth(l) { const T = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17], [7, 24, 25]], [a, b, c] = pick(l === 1 ? T.slice(0, 2) : T);
      if (l >= 2 && Math.random() < .5) return { q: `Düzbucaqlı üçbucağın hipotenuzu ${c}, bir kateti ${a}-dır. Digər kateti tapın.`, ...mc(b, [c - a, c + a, b + 1]), e: `b = √(${c}² − ${a}²) = √(${c * c} − ${a * a}) = √${b * b} = ${b}.` };
      return { q: `Katetləri ${a} və ${b} olan düzbucaqlı üçbucağın hipotenuzu neçədir?`, ...mc(c, [a + b, c + 1, b + 1]), e: `c² = ${a}² + ${b}² = ${a * a + b * b}, c = ${c}.` } },
    quad(l) { const x1 = R(-6, 6), x2 = R(-6, 6), b = -(x1 + x2), c = x1 * x2;
      const eq = `x²${b ? (b > 0 ? " + " + (b === 1 ? "" : b) + "x" : " − " + (b === -1 ? "" : -b) + "x") : ""}${c ? (c > 0 ? " + " + c : " − " + -c) : ""} = 0`;
      if (l === 1) return { q: `${eq} tənliyinin köklərinin cəmi neçədir?`, ...mc(-b, [b, c, -c]), e: `Viyet teoremi: x₁ + x₂ = −b = ${-b}.` };
      if (l === 2) return { q: `${eq} tənliyinin köklərinin hasili neçədir?`, ...mc(c, [-c, b, -b]), e: `Viyet teoremi: x₁ · x₂ = c = ${c}.` };
      const S = [x1, x2].sort((p, q) => p - q), s = S[0] === S[1] ? `${S[0]}` : `${S[0]}; ${S[1]}`;
      return { q: `Tənliyi həll edin: ${eq}`, ...mc(s, [`${-S[1]}; ${-S[0]}`, `${S[0]}; ${S[1] + 1}`, `${S[0] - 1}; ${S[1]}`], x => x), e: `D = b² − 4c = ${b * b - 4 * c}. Köklər: ${s}. Yoxlama: cəm ${-b}, hasil ${c}.` } },
    arith(l) { const a = R(-10, 20), d = R(l === 1 ? 1 : -6, 9) || 3, n = R(5, l === 3 ? 30 : 12);
      if (l === 3) { const S = n * (2 * a + (n - 1) * d) / 2; return { q: `a₁ = ${a}, d = ${d}. İlk ${n} həddin cəmi neçədir?`, ...mc(S, [S + d * n, n * (a + d), S - a]), e: `Sₙ = (2a₁ + (n−1)d)·n/2 = (${fmt(2 * a)} + ${P((n - 1) * d)})·${n}/2 = ${fmt(S)}.` } }
      return { q: `Ədədi silsilə: a₁ = ${a}, d = ${d}. a${n} = ?`.replace(/a(\d+) =/, (m, k) => `a${toSub(k)} =`), ...mc(a + (n - 1) * d, [a + n * d, a * n, a + (n - 2) * d]), e: `aₙ = a₁ + (n−1)d = ${fmt(a)} + ${n - 1}·${P(d)} = ${fmt(a + (n - 1) * d)}.` } },
    trig(l) { const T = [["sin 30°", "1/2"], ["cos 60°", "1/2"], ["sin 90°", "1"], ["cos 0°", "1"], ["tg 45°", "1"], ["sin 45°", "√2/2"], ["cos 30°", "√3/2"], ["sin 60°", "√3/2"], ["cos 90°", "0"], ["tg 60°", "√3"], ["ctg 45°", "1"], ["tg 30°", "√3/3"]];
      if (l === 3) { const a = pick([30, 45, 60]); return { q: `sin²${a}° + cos²${a}° = ?`, o: ["1", "0", "2", "1/2"], a: 0, e: `Əsas triqonometrik eynilik: sin²α + cos²α = 1 (istənilən α üçün).` } }
      const [k, v] = pick(l === 1 ? T.slice(0, 5) : T), all = ["0", "1", "1/2", "√2/2", "√3/2", "√3", "√3/3", "2"].filter(x => x !== v);
      return { q: `${k} = ?`, o: [v, ...all.sort(() => Math.random() - .5).slice(0, 3)], a: 0, e: `Cədvəl qiyməti: ${k} = ${v}.` } },
    log(l) { const b = pick([2, 3, 5, 10]), n = R(1, l === 1 ? 3 : 4);
      if (l === 3) { const x = R(2, 5), y = R(2, 5); return { q: `log₂${2 ** x} + log₂${2 ** y} = ?`, ...mc(x + y, [x * y, 2 ** (x + y), x + y + 1]), e: `log₂${2 ** x} = ${x}, log₂${2 ** y} = ${y}. Cəm: ${x + y}.` } }
      return { q: `log${toSub(b)} ${b ** n} = ?`, ...mc(n, [b ** n / b, n + 1, b]), e: `${b}^${n} = ${b ** n}, deməli log${toSub(b)} ${b ** n} = ${n}.` } },
    deriv(l) { const a = R(2, 9), n = R(2, l === 1 ? 3 : 6), c = R(1, 9);
      if (l === 3) { const x0 = R(1, 3); return { q: `f(x) = ${a}x² + ${c}x funksiyasının x = ${x0} nöqtəsində törəməsi neçədir?`, ...mc(2 * a * x0 + c, [a * x0 * x0 + c * x0, 2 * a + c, a * x0 + c]), e: `f′(x) = ${2 * a}x + ${c}. f′(${x0}) = ${2 * a * x0} + ${c} = ${2 * a * x0 + c}.` } }
      return { q: `f(x) = ${a}x${sup(n)} funksiyasının törəməsi hansıdır?`, ...mc(`${a * n}x${sup(n - 1)}`, [`${a}x${sup(n - 1)}`, `${a * n}x${sup(n)}`, `${n}x${sup(n - 1)}`], x => x.replace(/x¹$/, "x")), e: `(xⁿ)′ = n·xⁿ⁻¹: (${a}x${sup(n)})′ = ${a * n}x${sup(n - 1)}.`.replace(/x¹\./, "x.") } },
    geom(l) { const b = R(1, 5), q = pick(l === 1 ? [2, 3] : [2, 3, -2]), n = R(3, l === 3 ? 6 : 5);
      if (l === 3) { const S = b * (q ** n - 1) / (q - 1); return { q: `b₁ = ${b}, q = ${q}. İlk ${n} həddin cəmi neçədir?`, ...mc(S, [b * q ** n, S + b, b * n * q]), e: `Sₙ = b₁(qⁿ − 1)/(q − 1) = ${b}(${q ** n} − 1)/${q - 1} = ${S}.` } }
      return { q: `Həndəsi silsilə: b₁ = ${b}, q = ${q}. b${toSub(n)} = ?`, ...mc(b * q ** (n - 1), [b * q ** n, b * q * (n - 1), b + q * (n - 1)]), e: `bₙ = b₁·qⁿ⁻¹ = ${b}·${P(q)}${sup(n - 1)} = ${fmt(b * q ** (n - 1))}.` } },

    seq1(l) { const st = [1, 2, 5][l - 1] * R(1, l === 3 ? 3 : 2), a = R(0, 20 * l), n = [a, a + st, a + 2 * st, a + 3 * st];
      return { q: `Ardıcıllığı davam etdirin: ${n.join(", ")}, …`, ...mc(a + 4 * st, [a + 4 * st + 1, a + 3 * st + 1, a + 5 * st]), e: `Hər ədəd əvvəlkindən ${st} çoxdur: ${a + 3 * st} + ${st} = ${a + 4 * st}.` } },
    money(l) { if (l === 1) { const m = R(1, 9); return { q: `${m} manat neçə qəpikdir?`, ...mc(m * 100, [m * 10, m * 1000, m * 100 + 10]), e: `1 manat = 100 qəpik, ${m} × 100 = ${m * 100}.` } }
      if (l === 2) { const h = R(1, 5); return { q: `${h} saat neçə dəqiqədir?`, ...mc(h * 60, [h * 100, h * 30, h * 60 + 10]), e: `1 saat = 60 dəqiqə, ${h} × 60 = ${h * 60}.` } }
      const a = R(2, 9), b = R(10, 90), c = R(1, 9); return { q: `Dəftər ${a} manat ${b} qəpik, qələm ${c} manatdır. Cəmi neçə qəpik?`, ...mc(a * 100 + b + c * 100, [a + b + c, (a + c) * 100, a * 100 + b + c * 10]), e: `${a * 100 + b} + ${c * 100} = ${a * 100 + b + c * 100} qəpik.` } },
    units(l) { const T = [["km", "m", 1000], ["m", "sm", 100], ["sm", "mm", 10], ["kq", "q", 1000], ["t", "kq", 1000], ["l", "ml", 1000]], [a, b, k] = pick(l === 1 ? T.slice(0, 3) : T), n = l === 3 ? R(2, 9) + R(1, 9) / 10 : R(2, 12);
      return { q: `${fmt(n)} ${a} neçə ${b}-dir?`, ...mc(Math.round(n * k), [Math.round(n * k / 10), Math.round(n * k * 10), Math.round(n * k) + k]), e: `1 ${a} = ${k} ${b}, ${fmt(n)} × ${k} = ${Math.round(n * k)}.` } },
    divrem(l) { const d = R(2, l === 1 ? 5 : 9), q = R(2, l === 3 ? 30 : 9), r = R(1, d - 1), n = d * q + r;
      if (Math.random() < .5) return { q: `${n} : ${d} bölməsində qalıq neçədir?`, ...mc(r, [r + 1, d - r, q]), e: `${d} × ${q} = ${d * q}, ${n} − ${d * q} = ${r}.` };
      return { q: `${n} : ${d} = ? (qalıqla)`, ...mc(`${q} (qalıq ${r})`, [`${q + 1} (qalıq ${r})`, `${q} (qalıq ${r + 1 >= d ? r - 1 || d - 1 : r + 1})`, `${q - 1} (qalıq ${r})`], x => x), e: `${d} × ${q} + ${r} = ${n}.` } },
    gcdlcm(l) { const g = pick([2, 3, 4, 5, 6]), a = g * R(2, 5), b = g * R(2, 7); let A = a, Bb = b === a ? b + g : b; const G = gcd(A, Bb), L = A * Bb / G;
      if (l === 1) { const n = pick([12, 18, 20, 24, 30]); const dv = [...Array(n).keys()].slice(1).filter(x => n % x === 0 && x > 1 && x < n), no = [7, 9, 11, 13].filter(x => n % x); return { q: `Hansı ədəd ${n}-in bölənidir?`, o: [String(pick(dv)), ...shuffleA(no).slice(0, 3).map(String)], a: 0, e: `${n} bu ədədə qalıqsız bölünür.` } }
      if (l === 2) return { q: `ƏBOB(${A}, ${Bb}) = ?`, ...mc(G, [G * 2, L, Math.min(A, Bb)]), e: `Hər iki ədədi qalıqsız bölən ən böyük ədəd: ${G}.` };
      return { q: `ƏKOB(${A}, ${Bb}) = ?`, ...mc(L, [A * Bb, G, L / 2]), e: `ƏKOB = a·b / ƏBOB = ${A * Bb} / ${G} = ${L}.` } },
    ratio(l) { const a = R(2, 9), b = R(2, 9), k = R(2, l === 3 ? 12 : 6);
      if (l === 1) return { q: `${a * k} : ${b * k} nisbətini sadələşdirin`, ...mc(`${a / gcd(a, b)} : ${b / gcd(a, b)}`, [`${b} : ${a}`, `${a * k} : ${b}`, `${a + 1} : ${b}`], x => x), e: `Hər iki ədədi ${k * gcd(a, b)}-ə bölürük.` };
      return { q: `Tənasübdən x-i tapın: ${a} / ${b} = ${a * k} / x`, ...mc(b * k, [a * k, b + k, b * k + 1]), e: `x = ${b} · ${a * k} / ${a} = ${b * k}.` } },
    poly(l) { const a = R(2, 9), b = R(-9, 9) || 2, c = R(1, 9);
      if (l === 1) return { q: `Oxşar hədləri islah edin: ${a}x + ${c}x`, ...mc(`${a + c}x`, [`${a * c}x`, `${a + c}x²`, `${a}x${c}`], x => x), e: `${a}x + ${c}x = (${a} + ${c})x = ${a + c}x.` };
      if (l === 2) return { q: `(x + ${c})² ifadəsini açın`, ...mc(`x² + ${2 * c}x + ${c * c}`, [`x² + ${c * c}`, `x² + ${c}x + ${c * c}`, `x² + ${2 * c}x + ${2 * c}`], x => x), e: `(a + b)² = a² + 2ab + b²: x² + ${2 * c}x + ${c * c}.` };
      const p = R(1, 7), q = R(1, 7); return { q: `(x + ${p})(x + ${q}) hasilində x-in əmsalı neçədir?`, ...mc(p + q, [p * q, p + q + 1, Math.abs(p - q) || 2]), e: `x² + (${p} + ${q})x + ${p * q}: əmsal ${p + q}.` } },
    ineq(l) { const a = l === 1 ? 1 : R(2, 6), x = R(-5, 9), b = R(-10, 10), c = a * x + b, sg = pick([">", "<"]);
      const lhs = (a === 1 ? "x" : a + "x") + (b ? (b > 0 ? " + " + b : " − " + -b) : ""), rev = sg === ">" ? "<" : ">";
      return { q: `Bərabərsizliyi həll edin: ${lhs} ${sg} ${c}`, ...mc(`x ${sg} ${x}`, [`x ${rev} ${x}`, `x ${sg} ${-x}`, `x ${sg} ${x + 1}`], x => x), e: `${a === 1 ? "x" : a + "x"} ${sg} ${c - b}${a === 1 ? "" : `, hər iki tərəfi ${a}-ə bölürük`} → x ${sg} ${x}.` } },
    linf(l) { const k = R(-5, 6) || 2, b = R(-9, 9), x = R(-4, 6);
      if (l === 1) return { q: `y = ${k}x ${b >= 0 ? "+ " + b : "− " + -b}. x = ${x} olanda y = ?`, ...mc(k * x + b, [k * x - b, k + x + b, k * (x + b)]), e: `y = ${k}·${x < 0 ? "(" + x + ")" : x} ${b >= 0 ? "+" : "−"} ${Math.abs(b)} = ${k * x + b}.` };
      if (l === 2) { const x1 = R(-3, 2), x2 = x1 + R(1, 4); return { q: `Düz xətt (${x1}; ${k * x1 + b}) və (${x2}; ${k * x2 + b}) nöqtələrindən keçir. Bucaq əmsalı k = ?`, ...mc(k, [-k, k + 1, b]), e: `k = (y₂ − y₁)/(x₂ − x₁) = ${k * (x2 - x1)}/${x2 - x1} = ${k}.` } }
      return { q: `y = ${k}x ${b >= 0 ? "+ " + b : "− " + -b} qrafiki Oy oxunu hansı nöqtədə kəsir?`, ...mc(`(0; ${b})`, [`(${b}; 0)`, `(0; ${k})`, `(0; ${-b})`], x => x), e: `x = 0 olanda y = b = ${b}.` } },
    prob(l) { if (l === 1) { const s = R(1, 6); return { q: `Zər atılır. ${s} xalının düşmə ehtimalı neçədir?`, o: ["1/6", "1/2", "1/3", "6/1"], a: 0, e: `6 bərabər mümkün haldan 1-i əlverişlidir: 1/6.` } }
      if (l === 2) { const r = R(2, 8), w = R(2, 8); return { q: `Qutuda ${r} qırmızı və ${w} ağ kürə var. Təsadüfi götürülən kürənin qırmızı olma ehtimalı?`, ...mc(frac(r, r + w), [frac(w, r + w), frac(r, w), frac(1, r + w)], x => x), e: `P = ${r} / ${r + w}${frac(r, r + w) !== `${r}/${r + w}` ? " = " + frac(r, r + w) : ""}.` } }
      return { q: `İki sikkə atılır. Hər ikisinin “gerb” düşmə ehtimalı?`, o: ["1/4", "1/2", "3/4", "1/3"], a: 0, e: `4 hal: GG, GR, RG, RR. Əlverişli 1: P = 1/4.` } },
    integ(l) { const a = R(2, 9), n = R(1, l === 1 ? 2 : 4);
      if (l === 3) { const k = R(1, 6), A = R(1, 4); return { q: `∫₀^${A} ${2 * k}x dx = ?`, ...mc(k * A * A, [2 * k * A, k * A, 2 * k * A * A]), e: `İbtidai: ${k}x². ${k}·${A}² − 0 = ${k * A * A}.` } }
      return { q: `∫ ${a * (n + 1)}x${sup(n)} dx = ?`.replace("x¹ ", "x "), ...mc(`${a}x${sup(n + 1)} + C`, [`${a * (n + 1) * n}x${sup(n - 1)} + C`, `${a * (n + 1)}x${sup(n + 1)} + C`, `${a}x${sup(n)} + C`], x => x.replace(/x¹ /, "x ").replace(/x⁰ /, "")), e: `∫xⁿdx = xⁿ⁺¹/(n+1) + C: ${a * (n + 1)}/${n + 1} = ${a}.` } },
  };

  /* Ekspert (4-cü səviyyə): buraxılış / olimpiada tipli çoxaddımlı məsələlər */
  const G4 = {
    pct() { const p = pick([10, 20, 25, 30, 50]), n = R(2, 20) * 100, r = n * (1 + p / 100) * (1 - p / 100);
      return { q: `Malın qiyməti ${n} AZN idi. Əvvəl ${p}% bahalaşdı, sonra yeni qiymət ${p}% ucuzlaşdı. Son qiymət?`, ...mc(r, [n, n * (1 + p / 100), n * (1 - p / 100)]), e: `${n} · ${fmt(1 + p / 100)} · ${fmt(1 - p / 100)} = ${fmt(r)}. Eyni faiz geri qaytarmır — ilkin qiymətdən ${fmt(n * p * p / 10000)} AZN az alınır.` } },
    frac() { const b = pick([2, 3, 4, 5]), d = pick([3, 4, 6].filter(x => x !== b)), a = R(1, b - 1), c = R(1, d - 1), e = R(1, 4), f = pick([3, 5, 7]);
      const N = (a * d + c * b) * f, D = b * d * e;
      return { q: `(${a}/${b} + ${c}/${d}) : ${e}/${f} = ?`, ...mc(frac(N, D), [frac(a + c, b + d), frac((a * d + c * b) * e, b * d * f), frac(N + D, D)], x => x), e: `Mötərizə: ${frac(a * d + c * b, b * d)}. Kəsrə bölmək = tərsinə vurmaq: × ${f}/${e} = ${frac(N, D)}.` } },
    lin() { const x = R(-6, 9), a = R(2, 7), c = pick([1, 2, 3, 4, 5, 6, 8, 9].filter(k => k !== a)), b = R(1, 6), d = R(1, 6), e = a * (x - b) - c * (x + d);
      return { q: `Tənliyi həll edin: ${a}(x − ${b}) − ${c}(x + ${d}) = ${e}`, ...mc(x, [-x, x + 1, x - 2]), e: `${a}x − ${a * b} − ${c}x − ${c * d} = ${e} → ${a - c}x = ${e + a * b + c * d} → x = ${x}.` } },
    quad() { const x1 = R(-6, 6), x2 = R(-6, 6), S = x1 + x2, P = x1 * x2, b = -S, c = P;
      const eq = `x²${b ? (b > 0 ? " + " + (b === 1 ? "" : b) + "x" : " − " + (b === -1 ? "" : -b) + "x") : ""}${c ? (c > 0 ? " + " + c : " − " + -c) : ""} = 0`;
      return { q: `${eq} tənliyinin kökləri x₁ və x₂-dir. x₁² + x₂² = ?`, ...mc(S * S - 2 * P, [S * S + 2 * P, S * S, S * S - P]), e: `Viyet: x₁ + x₂ = ${S}, x₁x₂ = ${P}. x₁² + x₂² = (x₁ + x₂)² − 2x₁x₂ = ${S * S} − ${2 * P} = ${S * S - 2 * P}.` } },
    ineq() { const a = R(-6, 4), b = a + R(1, 7), s = -(a + b), p = a * b;
      const ex = `x²${s ? (s > 0 ? " + " + (s === 1 ? "" : s) + "x" : " − " + (s === -1 ? "" : -s) + "x") : ""}${p ? (p > 0 ? " + " + p : " − " + -p) : ""}`;
      return { q: `Bərabərsizliyin tam həllərinin sayı: ${ex} < 0`, ...mc(b - a - 1, [b - a + 1, b - a, Math.max(0, b - a - 2)]), e: `Köklər ${a} və ${b}; parabolanın qolları yuxarıdır → ${a} < x < ${b}. Tam ədədlər: ${b - a - 1}.` } },
    pyth() { const T = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17]], [a, b, c] = pick(T);
      return { q: `Rombun diaqonalları ${2 * a} və ${2 * b}-dir. Rombun perimetri neçədir?`, ...mc(4 * c, [2 * (a + b) * 2, 4 * (a + b), c * c]), e: `Diaqonallar perpendikulyar və yarıya bölünür: tərəf = √(${a}² + ${b}²) = ${c}. P = 4 · ${c} = ${4 * c}.` } },
    arith() { const a = R(-10, 15), d = R(-5, 7) || 3, m = R(2, 6), k = m + R(3, 8);
      const am = a + (m - 1) * d, ak = a + (k - 1) * d;
      return { q: `Ədədi silsilədə a${toSub(m)} = ${am}, a${toSub(k)} = ${ak}. a₁ = ?`, ...mc(a, [d, am - d, a + d]), e: `d = (${ak} − ${am}) / (${k} − ${m}) = ${d}. a₁ = a${toSub(m)} − ${m - 1}d = ${a}.` } },
    geom() { const b = R(1, 5), q = pick([2, 3]);
      return { q: `Həndəsi silsilədə b₂ = ${b * q}, b₄ = ${b * q ** 3}, q > 0. Silsilənin ilk 4 həddinin cəmi?`, ...mc(b * (q ** 4 - 1) / (q - 1), [b * q ** 4, b * q * 4, b * (q ** 3 - 1) / (q - 1)]), e: `q² = b₄/b₂ = ${q * q} → q = ${q}, b₁ = ${b}. S₄ = ${b}(${q}⁴ − 1)/(${q} − 1) = ${b * (q ** 4 - 1) / (q - 1)}.` } },
    pow() { const x = R(1, 6), k = pick([1, 2, 3]), V = (2 ** k + 1) * 2 ** x;
      return { q: `Tənliyi həll edin: 2ˣ⁺${sup(k)} + 2ˣ = ${V}`, ...mc(x, [x + 1, x - 1, x + k]), e: `2ˣ(2${sup(k)} + 1) = ${V} → 2ˣ = ${2 ** x} → x = ${x}.` } },
    log() { const n = R(2, 5), a = R(-3, 6), x = 2 ** n + a;
      return { q: `Tənliyi həll edin: log₂(x ${a >= 0 ? "− " + a : "+ " + -a}) = ${n}`, ...mc(x, [2 ** n, 2 * n + a, x + 1]), e: `x ${a >= 0 ? "− " + a : "+ " + -a} = 2${sup(n)} = ${2 ** n} → x = ${x}. Yoxlama: ifadə müsbətdir.` } },
    sqrt() { const a = R(5, 40), b = R(2, a - 1);
      return { q: `(√${a} + √${b})(√${a} − √${b}) = ?`, ...mc(a - b, [a + b, Math.round(Math.sqrt(a - b) * 100) / 100, (a - b) * 2]), e: `Kvadratlar fərqi: (√${a})² − (√${b})² = ${a} − ${b} = ${a - b}.` } },
    deriv() { const k = R(-5, 6), c = R(-10, 20);
      return { q: `f(x) = x² ${k > 0 ? "− " + 2 * k : "+ " + -2 * k}x ${c >= 0 ? "+ " + c : "− " + -c} funksiyasının ən kiçik qiyməti?`.replace(" + 0x", "").replace(" − 0x", ""), ...mc(c - k * k, [c, c + k * k, -k]), e: `f′(x) = 2x − ${2 * k} = 0 → x = ${k}. f(${k}) = ${k * k} − ${2 * k * k} + ${c} = ${c - k * k}.` } },
    integ() { const a = pick([3, 6]);
      return { q: `y = x² parabolası, Ox oxu və x = ${a} düz xətti ilə hüdudlanan fiqurun sahəsi?`, ...mc(a ** 3 / 3, [a ** 3, a * a, a ** 3 / 2]), e: `S = ∫₀^${a} x² dx = ${a}³/3 = ${a ** 3 / 3}.` } },
    trig() { const [a, b, c] = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]]);
      return { q: `sin α = ${a}/${c}, α — I rüb bucağıdır. tg α = ?`, ...mc(frac(a, b), [frac(b, a), frac(a, c), frac(b, c)], x => x), e: `cos α = √(1 − ${a * a}/${c * c}) = ${b}/${c}. tg α = sin/cos = ${a}/${b}.` } },
    prob() { const s = R(4, 10), w = [...Array(6)].flatMap((_, i) => [...Array(6)].map((_, j) => i + j + 2)).filter(x => x === s).length;
      return { q: `İki zər atılır. Xalların cəminin ${s} olma ehtimalı?`, ...mc(frac(w, 36), [frac(1, 6), frac(w, 12), frac(1, s)], x => x), e: `Bütün hallar 36; əlverişli: ${w}. P = ${w}/36 = ${frac(w, 36)}.` } },
    gcdlcm() { const a = pick([12, 15, 18, 20]), b = pick([8, 9, 10, 24, 30].filter(x => x !== a)), L = a * b / gcd(a, b);
      return { q: `Bir avtobus hər ${a} dəqiqədən, digəri hər ${b} dəqiqədən bir dayanacaqdan çıxır. 8:00-da birlikdə çıxdılar. Növbəti dəfə neçə dəqiqə sonra birlikdə çıxacaqlar?`, ...mc(L, [a * b, a + b, gcd(a, b)]), e: `ƏKOB(${a}, ${b}) = ${L} dəqiqə.` } },
    ratio() { const a = R(1, 4), b = R(2, 5), c = R(3, 7), k = R(2, 9) * 10, T = (a + b + c) * k;
      return { q: `${T} AZN ${a} : ${b} : ${c} nisbətində bölündü. Ən böyük pay?`, ...mc(Math.max(a, b, c) * k, [Math.round(T / 3), Math.min(a, b, c) * k, T - Math.max(a, b, c) * k]), e: `1 hissə = ${T} / ${a + b + c} = ${k}. Ən böyük: ${Math.max(a, b, c)} · ${k} = ${Math.max(a, b, c) * k}.` } },
    poly() { const a = R(2, 9), b = R(1, a - 1);
      return { q: `a + b = ${a + b}, ab = ${a * b}. a² + b² = ?`, ...mc(a * a + b * b, [(a + b) ** 2, (a + b) ** 2 + 2 * a * b, a * b * 2]), e: `a² + b² = (a + b)² − 2ab = ${(a + b) ** 2} − ${2 * a * b} = ${a * a + b * b}.` } },
    linf() { const x = R(-4, 5), k1 = R(1, 4), k2 = -R(1, 4), b1 = R(-6, 6), y = k1 * x + b1, b2 = y - k2 * x;
      const ln = (k, b) => `y = ${k === 1 ? "" : k === -1 ? "−" : k}x ${b >= 0 ? "+ " + b : "− " + -b}`;
      return { q: `${ln(k1, b1)} və ${ln(k2, b2)} düz xətlərinin kəsişmə nöqtəsi?`, ...mc(`(${x}; ${y})`, [`(${y}; ${x})`, `(${-x}; ${y})`, `(${x}; ${-y})`], v => v), e: `${k1}x + ${b1} = ${k2}x + ${b2} → x = ${x}, y = ${y}.` } },
  };
  function toSub(n) { return String(n).replace(/\d/g, d => "₀₁₂₃₄₅₆₇₈₉"[d]) }
  function sup(n) { return String(n).replace(/\d/g, d => "⁰¹²³⁴⁵⁶⁷⁸⁹"[d]) }
  window.GEN = G; window.GEN4 = G4;
})();
