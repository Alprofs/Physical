const allLectures = [
    {
        id: 'lec1',
        title: {
            ar: "المحاضرة 1: Physical Pharmacy (States of Matter)",
            en: "Lecture 1: States of Matter"
        },
        revision: [
            {
                title: { ar: "حالات المادة (States of Matter)", en: "States of Matter" },
                branches: [
                    {
                        type: 'info',
                        nodeTitle: { ar: "تعريف المادة", en: "Definition of Matter" },
                        content: {
                            ar: "المادة هي أي شيء له *كتلة (Mass)* ويشغل *حيزاً من الفراغ (Space)*. وتوجد في 3 حالات: صلبة، سائلة، غازية. وكل حالة لها خصائص فيزيائية فريدة.",
                            en: "Matter is anything that has *mass* and occupies *space*. It exists as gas, liquid or solid."
                        }
                    },
                    {
                        type: 'table',
                        nodeTitle: { ar: "مقارنة بين حالات المادة", en: "Comparison Table" },
                        content: {
                            ar: `<table>
                                    <tr><th>الخاصية</th><th>صلب (Solid)</th><th>سائل (Liquid)</th><th>غاز (Gas)</th></tr>
                                    <tr><td>الشكل (Shape)</td><td>ثابت</td><td>غير ثابت</td><td>غير ثابت</td></tr>
                                    <tr><td>الحجم (Volume)</td><td>ثابت</td><td>ثابت</td><td>غير ثابت</td></tr>
                                    <tr><td>الصلابة (Rigidity)</td><td>صلب</td><td>غير صلب</td><td>غير صلب</td></tr>
                                    <tr><td>القوى الجزيئية</td><td>أقصى ما يمكن (Maximum)</td><td>أقل من الصلب</td><td>ضعيفة جداً (Very less)</td></tr>
                                    <tr><td>المسافات الجزيئية</td><td>قليلة جداً (Very less)</td><td>أكبر من الصلب</td><td>أقصى ما يمكن (Maximum)</td></tr>
                                    <tr><td>الانضغاطية (Compressibility)</td><td>مهملة (Negligible)</td><td>قابل للانضغاط</td><td>عالي الانضغاطية</td></tr>
                                 </table>`,
                            en: `<table>
                                    <tr><th>Feature</th><th>Solid</th><th>Liquid</th><th>Gas</th></tr>
                                    <tr><td>Shape</td><td>Fixed</td><td>No fixed shape</td><td>No fixed shape</td></tr>
                                    <tr><td>Volume</td><td>Fixed</td><td>Fixed</td><td>No fixed volume</td></tr>
                                    <tr><td>Rigidity</td><td>Rigid</td><td>Not rigid</td><td>Not rigid</td></tr>
                                    <tr><td>Intermolecular force</td><td>Maximum</td><td>Less than solids</td><td>Very less</td></tr>
                                    <tr><td>Intermolecular space</td><td>Very less</td><td>More than solids</td><td>Maximum</td></tr>
                                    <tr><td>Compressibility</td><td>Negligible</td><td>Compressible</td><td>Highly compressible</td></tr>
                                 </table>`
                        }
                    }
                ]
            },
            {
                title: { ar: "مخطط طور الماء وقوانين الغازات", en: "Phase Diagram & Gas Laws" },
                branches: [
                    {
                        type: 'info',
                        nodeTitle: { ar: "مخطط طور الماء (Phase Diagram of Water)", en: "Phase Diagram of Water" },
                        content: {
                            ar: `<div style="text-align: center; margin: 15px 0; background: white; padding: 10px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                    <svg viewBox="0 0 600 450" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="font-family: Arial, sans-serif;">
                                        <defs>
                                            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                              <path d="M0,0 L0,6 L9,3 z" fill="black" />
                                            </marker>
                                        </defs>
                                        <rect x="70" y="40" width="480" height="340" fill="none" stroke="black" stroke-width="1.5" />
                                        
                                        <rect x="475" y="40" width="75" height="25" fill="#8FAADC" stroke="black" stroke-width="1.5" />
                                        <text x="512" y="58" text-anchor="middle" font-size="14" font-weight="bold" fill="black">SCF</text>

                                        <line x1="70" y1="190" x2="550" y2="190" stroke="black" stroke-width="1.2" stroke-dasharray="6,4" />
                                        <line x1="150" y1="380" x2="150" y2="190" stroke="black" stroke-width="1.2" stroke-dasharray="6,4" />
                                        <line x1="400" y1="380" x2="400" y2="190" stroke="black" stroke-width="1.2" stroke-dasharray="6,4" />
                                        <line x1="475" y1="380" x2="475" y2="65" stroke="black" stroke-width="1.2" stroke-dasharray="6,4" />

                                        <line x1="70" y1="350" x2="190" y2="330" stroke="#1f497d" stroke-width="2.5" /> <line x1="190" y1="330" x2="150" y2="190" stroke="#1f497d" stroke-width="2.5" /> <line x1="150" y1="190" x2="105" y2="40" stroke="#1f497d" stroke-width="2.5" /> <path d="M 190 330 C 270 310, 340 260, 400 190 C 430 155, 455 110, 475 65" fill="none" stroke="#1f497d" stroke-width="2.5" /> <circle cx="70" cy="350" r="3.5" fill="black" />
                                        <circle cx="190" cy="330" r="3.5" fill="black" /> <circle cx="150" cy="190" r="3.5" fill="black" /> <circle cx="400" cy="190" r="3.5" fill="black" /> <circle cx="475" cy="65" r="3.5" fill="black" />  <text x="110" y="270" font-size="14" text-anchor="middle">Solid</text>
                                        <text x="110" y="288" font-size="14" text-anchor="middle">water</text>
                                        <text x="280" y="270" font-size="14" text-anchor="middle">Liquid</text>
                                        <text x="280" y="288" font-size="14" text-anchor="middle">water</text>
                                        <text x="460" y="260" font-size="14" text-anchor="middle">Water</text>
                                        <text x="460" y="278" font-size="14" text-anchor="middle">vapour</text>

                                        <text x="200" y="342" font-size="13">TP</text>
                                        <text x="445" y="60" font-size="13">CP</text>
                                        <text x="160" y="170" font-size="13">Normal</text>
                                        <text x="160" y="186" font-size="13">melting point</text>
                                        <text x="390" y="170" font-size="13" text-anchor="end">Normal</text>
                                        <text x="390" y="186" font-size="13" text-anchor="end">boiling point</text>

                                        <text x="120" y="325" font-size="15" font-weight="bold">a</text>
                                        <path d="M 130 330 Q 140 335 150 335" fill="none" stroke="black" stroke-width="1.2" marker-end="url(#arrow)" />
                                        
                                        <text x="195" y="245" font-size="15" font-weight="bold">b</text>
                                        <path d="M 185 240 Q 175 235 170 245" fill="none" stroke="black" stroke-width="1.2" marker-end="url(#arrow)" />

                                        <text x="390" y="295" font-size="15" font-weight="bold">c</text>
                                        <path d="M 380 290 Q 365 275 350 250" fill="none" stroke="black" stroke-width="1.2" marker-end="url(#arrow)" />

                                        <polygon points="275,150 268,160 282,160" fill="black" />
                                        <polygon points="340,210 333,220 347,220" fill="black" />

                                        <text x="310" y="420" text-anchor="middle" font-size="15" font-weight="bold">Temperature (°C)</text>
                                        <text x="70" y="398" font-size="13" text-anchor="middle">-79</text>
                                        <text x="150" y="398" font-size="13" text-anchor="middle">0</text>
                                        <text x="190" y="398" font-size="13" text-anchor="middle">0.01</text>
                                        <text x="400" y="398" font-size="13" text-anchor="middle">100</text>
                                        <text x="475" y="398" font-size="13" text-anchor="middle">374</text>

                                        <text x="30" y="210" text-anchor="middle" font-size="15" font-weight="bold" transform="rotate(-90 30 210)">Pressure (kPa)</text>
                                        <text x="60" y="385" font-size="13" text-anchor="end">0.13</text>
                                        <text x="60" y="355" font-size="13" text-anchor="end">0.611</text>
                                        <text x="60" y="195" font-size="13" text-anchor="end">101.3</text>
                                        <text x="60" y="55" font-size="13" text-anchor="end">22100</text>
                                    </svg>
                                 </div>`,
                            en: `<div style="text-align: center; margin: 15px 0; background: white; padding: 10px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                    <svg viewBox="0 0 600 450" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="font-family: Arial, sans-serif;">
                                        <defs>
                                            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                              <path d="M0,0 L0,6 L9,3 z" fill="black" />
                                            </marker>
                                        </defs>
                                        <rect x="70" y="40" width="480" height="340" fill="none" stroke="black" stroke-width="1.5" />
                                        <rect x="475" y="40" width="75" height="25" fill="#8FAADC" stroke="black" stroke-width="1.5" />
                                        <text x="512" y="58" text-anchor="middle" font-size="14" font-weight="bold" fill="black">SCF</text>
                                        <line x1="70" y1="190" x2="550" y2="190" stroke="black" stroke-width="1.2" stroke-dasharray="6,4" />
                                        <line x1="150" y1="380" x2="150" y2="190" stroke="black" stroke-width="1.2" stroke-dasharray="6,4" />
                                        <line x1="400" y1="380" x2="400" y2="190" stroke="black" stroke-width="1.2" stroke-dasharray="6,4" />
                                        <line x1="475" y1="380" x2="475" y2="65" stroke="black" stroke-width="1.2" stroke-dasharray="6,4" />
                                        <line x1="70" y1="350" x2="190" y2="330" stroke="#1f497d" stroke-width="2.5" />
                                        <line x1="190" y1="330" x2="150" y2="190" stroke="#1f497d" stroke-width="2.5" />
                                        <line x1="150" y1="190" x2="105" y2="40" stroke="#1f497d" stroke-width="2.5" />
                                        <path d="M 190 330 C 270 310, 340 260, 400 190 C 430 155, 455 110, 475 65" fill="none" stroke="#1f497d" stroke-width="2.5" />
                                        <circle cx="70" cy="350" r="3.5" fill="black" />
                                        <circle cx="190" cy="330" r="3.5" fill="black" />
                                        <circle cx="150" cy="190" r="3.5" fill="black" />
                                        <circle cx="400" cy="190" r="3.5" fill="black" />
                                        <circle cx="475" cy="65" r="3.5" fill="black" />
                                        <text x="110" y="270" font-size="14" text-anchor="middle">Solid</text>
                                        <text x="110" y="288" font-size="14" text-anchor="middle">water</text>
                                        <text x="280" y="270" font-size="14" text-anchor="middle">Liquid</text>
                                        <text x="280" y="288" font-size="14" text-anchor="middle">water</text>
                                        <text x="460" y="260" font-size="14" text-anchor="middle">Water</text>
                                        <text x="460" y="278" font-size="14" text-anchor="middle">vapour</text>
                                        <text x="200" y="342" font-size="13">TP</text>
                                        <text x="445" y="60" font-size="13">CP</text>
                                        <text x="160" y="170" font-size="13">Normal</text>
                                        <text x="160" y="186" font-size="13">melting point</text>
                                        <text x="390" y="170" font-size="13" text-anchor="end">Normal</text>
                                        <text x="390" y="186" font-size="13" text-anchor="end">boiling point</text>
                                        <text x="120" y="325" font-size="15" font-weight="bold">a</text>
                                        <path d="M 130 330 Q 140 335 150 335" fill="none" stroke="black" stroke-width="1.2" marker-end="url(#arrow)" />
                                        <text x="195" y="245" font-size="15" font-weight="bold">b</text>
                                        <path d="M 185 240 Q 175 235 170 245" fill="none" stroke="black" stroke-width="1.2" marker-end="url(#arrow)" />
                                        <text x="390" y="295" font-size="15" font-weight="bold">c</text>
                                        <path d="M 380 290 Q 365 275 350 250" fill="none" stroke="black" stroke-width="1.2" marker-end="url(#arrow)" />
                                        <polygon points="275,150 268,160 282,160" fill="black" />
                                        <polygon points="340,210 333,220 347,220" fill="black" />
                                        <text x="310" y="420" text-anchor="middle" font-size="15" font-weight="bold">Temperature (°C)</text>
                                        <text x="70" y="398" font-size="13" text-anchor="middle">-79</text>
                                        <text x="150" y="398" font-size="13" text-anchor="middle">0</text>
                                        <text x="190" y="398" font-size="13" text-anchor="middle">0.01</text>
                                        <text x="400" y="398" font-size="13" text-anchor="middle">100</text>
                                        <text x="475" y="398" font-size="13" text-anchor="middle">374</text>
                                        <text x="30" y="210" text-anchor="middle" font-size="15" font-weight="bold" transform="rotate(-90 30 210)">Pressure (kPa)</text>
                                        <text x="60" y="385" font-size="13" text-anchor="end">0.13</text>
                                        <text x="60" y="355" font-size="13" text-anchor="end">0.611</text>
                                        <text x="60" y="195" font-size="13" text-anchor="end">101.3</text>
                                        <text x="60" y="55" font-size="13" text-anchor="end">22100</text>
                                    </svg>
                                 </div>`
                        }
                    },
                    {
                        type: 'info',
                        nodeTitle: { ar: "النقاط الهامة في المنحنى", en: "Important Points" },
                        content: {
                            ar: "<b>النقطة الثلاثية (TP):</b> تتواجد الحالات الثلاث في اتزان ديناميكي عند $0.01^{\\circ}C$ وضغط $0.611 \\text{ kPa}$.<br><b>المائع فوق الحرج (SCF):</b> عند النقطة الحرجة (CP) تتساوى كثافة الغاز والسائل ويختفي الحد الفاصل بينهما.",
                            en: "<b>Triple Point (TP):</b> All 3 states coexist in dynamic equilibrium at $0.01^{\\circ}C$ and $0.611 \\text{ kPa}$.<br><b>Supercritical Fluid (SCF):</b> At Critical Point (CP), density of gas = liquid, phase boundary disappears."
                        }
                    },
                    {
                        type: 'table',
                        nodeTitle: { ar: "قوانين الغازات", en: "Gas Laws" },
                        content: {
                            ar: `<table>
                                    <tr><th>القانون</th><th>المعادلة</th></tr>
                                    <tr><td>قانون بويل (Boyle's)</td><td>$V \\propto \\frac{1}{P} \\Rightarrow P_{1}V_{1} = P_{2}V_{2}$</td></tr>
                                    <tr><td>قانون شارل (Charles')</td><td>$V \\propto T \\Rightarrow \\frac{V_{1}}{T_{1}} = \\frac{V_{2}}{T_{2}}$</td></tr>
                                    <tr><td>قانون أفوجادرو (Avogadro's)</td><td>$V \\propto n \\Rightarrow \\frac{V_{1}}{n_{1}} = \\frac{V_{2}}{n_{2}}$</td></tr>
                                    <tr><td>قانون الغاز المثالي</td><td>$$PV = nRT$$</td></tr>
                                 </table>`,
                            en: `<table>
                                    <tr><th>Law</th><th>Equation</th></tr>
                                    <tr><td>Boyle's Law</td><td>$V \\propto \\frac{1}{P} \\Rightarrow P_{1}V_{1} = P_{2}V_{2}$</td></tr>
                                    <tr><td>Charles' Law</td><td>$V \\propto T \\Rightarrow \\frac{V_{1}}{T_{1}} = \\frac{V_{2}}{T_{2}}$</td></tr>
                                    <tr><td>Avogadro's Law</td><td>$V \\propto n \\Rightarrow \\frac{V_{1}}{n_{1}} = \\frac{V_{2}}{n_{2}}$</td></tr>
                                    <tr><td>Ideal Gas Law</td><td>$$PV = nRT$$</td></tr>
                                 </table>`
                        }
                    }
                ]
            },
            {
                title: { ar: "المواد الصلبة المتبلورة (Crystalline Solids)", en: "Crystalline Solids" },
                branches: [
                    {
                        type: 'flip',
                        nodeTitle: { ar: "ما هي الشبكة البلورية (Crystal lattice)؟", en: "What is Crystal lattice?" },
                        content: {
                            ar: "ترتيب ثلاثي الأبعاد متماثل للذرات داخل البلورة. (Symmetrical 3D arrangement of atoms inside a crystal).",
                            en: "Symmetrical 3D arrangement of atoms inside a crystal."
                        }
                    },
                    {
                        type: 'table',
                        nodeTitle: { ar: "أنواع البلورات (Types of crystalline solids)", en: "Types of Crystals" },
                        content: {
                            ar: `<table>
                                    <tr><th>النوع</th><th>نوع الروابط</th><th>المظهر ودرجة الانصهار</th><th>أمثلة</th></tr>
                                    <tr><td>جزيئية (Molecular)</td><td>قوى ضعيفة (Van der Waals) / هيدروجينية</td><td>لينة، انصهار منخفض (Low)</td><td>الثلج الجاف، اليود</td></tr>
                                    <tr><td>أيونية (Ionic)</td><td>إلكتروستاتيكية قوية (أيونات + و -)</td><td>صلبة وهشة، انصهار عالي (High)</td><td>NaCl</td></tr>
                                    <tr><td>تساهمية (Covalent)</td><td>روابط تساهمية</td><td>صلبة جداً، انصهار عالي جداً</td><td>الماس، الكوارتز</td></tr>
                                    <tr><td>معدنية (Metallic)</td><td>روابط معدنية</td><td>لامعة، قابلة للطرق، انصهار متغير</td><td>النحاس، النيكل</td></tr>
                                 </table>`,
                            en: `<table>
                                    <tr><th>Type</th><th>Nature of bonds</th><th>Appearance & MP</th><th>Example</th></tr>
                                    <tr><td>Molecular</td><td>Weak (Van der Waals) / H-bond</td><td>Soft, Low MP</td><td>Dry ice, Iodine</td></tr>
                                    <tr><td>Ionic</td><td>Strong electrostatic (+ve & -ve)</td><td>Hard & brittle, High MP</td><td>NaCl</td></tr>
                                    <tr><td>Covalent</td><td>Covalent bonds</td><td>Hard, Very High MP</td><td>Diamond, quartz</td></tr>
                                    <tr><td>Metallic</td><td>Metallic bonds</td><td>Luster, Malleable, Variable MP</td><td>Copper, Nickel</td></tr>
                                 </table>`
                        }
                    }
                ]
            },
            {
                title: { ar: "تعدد الأشكال والأنظمة البلورية", en: "Polymorphism & Crystal Systems" },
                branches: [
                    {
                        type: 'info',
                        nodeTitle: { ar: "تعدد الأشكال (Polymorphism)", en: "Polymorphism" },
                        content: {
                            ar: "قدرة المركب على التبلور في أكثر من شكل. تختلف في: درجة الانصهار، الذوبانية، حيود X-ray، والاستقرار الكيميائي. وتؤثر جداً على الـ *Bioavailability* للدواء.",
                            en: "Ability to crystallize as more than one species. Differ in: MP, solubilities, X-ray, stability. Affects drug's bioavailability."
                        }
                    },
                    {
                        type: 'flip',
                        nodeTitle: { ar: "أمثلة هامة على تعدد الأشكال", en: "Polymorphism Examples" },
                        content: {
                            ar: "1- *Chloramphenicol palmitate*: الشكل B أكثر ذوباناً.<br>2- *زبدة الكاكاو*: الشكل المستقر هو $\\beta$ (ينصهر عند $34.5^{\\circ}C$).<br>3- *الكربون*: يتواجد كماس (Diamond) وجرافيت (Graphite).",
                            en: "1- Chloramphenicol palmitate: Form B is more soluble.<br>2- Cacao butter: Stable form is $\\beta$ (MP $34.5^{\\circ}C$).<br>3- Carbon: Diamond and graphite."
                        }
                    },
                    {
                        type: 'info',
                        nodeTitle: { ar: "المذيبات والأملاح", en: "Solvates & Salts" },
                        content: {
                            ar: "🔹 *Solvate*: دمج مذيب في البلورة.<br>🔹 *Hydrate*: دمج الماء في البلورة (مركب بدون ماء = Anhydrous).<br>🔹 *Salt*: دمج حمض أو قاعدة.<br>🔹 *Cocrystal*: مكونات مختلفة بنسب ثابتة ترتبط بقوى بين جزيئية.",
                            en: "🔹 *Solvate*: solvent incorporated.<br>🔹 *Hydrate*: water incorporated (without water = Anhydrous).<br>🔹 *Salt*: acid or base incorporated.<br>🔹 *Cocrystal*: components held in stoichiometric ratio by intermolecular forces."
                        }
                    }
                ]
            },
            {
                title: { ar: "إسالة الغازات (Liquefaction of Gases)", en: "Liquefaction of Gases" },
                branches: [
                    {
                        type: 'flip',
                        nodeTitle: { ar: "ما هي درجة الحرارة الحرجة؟", en: "Critical Temperature?" },
                        content: {
                            ar: "هي *أعلى* درجة حرارة يمكن عندها تحويل الغاز لسائل. (Highest temp at which liquefaction occurs).",
                            en: "Highest temperature at which liquefaction of gas occurs."
                        }
                    },
                    {
                        type: 'flip',
                        nodeTitle: { ar: "ما هو الضغط الحرج؟", en: "Critical Pressure?" },
                        content: {
                            ar: "هو *أقل* ضغط مطلوب لإسالة الغاز عند درجة حرارته الحرجة. (Minimum pressure required to liquefy the gas at critical temp).",
                            en: "Minimum pressure required to liquefy the gas at its critical temperature."
                        }
                    },
                    {
                        type: 'flip',
                        nodeTitle: { ar: "ما هو الحجم الحرج؟", en: "Critical Volume?" },
                        content: {
                            ar: "الحجم الذي يشغله *مول واحد* من الغاز عند الحرارة والضغط الحرجين.",
                            en: "Volume occupied by a mole of gas at critical temperature and pressure."
                        }
                    }
                ]
            }
        ],
        quiz: [
            {
                q: { ar: "ما هي العملية التي يتحول فيها الغاز مباشرة إلى مادة صلبة؟", en: "What is the process by which a gas changes directly into a solid?" },
                opts: { ar: ["الترسيب (Deposition)", "التسامي (Sublimation)", "التكثف (Condensation)", "التجمد (Freezing)"], en: ["Deposition", "Sublimation", "Condensation", "Freezing"] },
                correct: 0
            },
            {
                q: { ar: "في أي حالة من حالات المادة تكون الانضغاطية (Compressibility) أقصى ما يمكن؟", en: "In which state of matter is compressibility the highest?" },
                opts: { ar: ["الحالة الغازية", "الحالة السائلة", "الحالة الصلبة", "لا شيء مما سبق"], en: ["Gas state", "Liquid state", "Solid state", "None of the above"] },
                correct: 0
            },
            {
                q: { ar: "عند أي حرارة وضغط تتواجد النقطة الثلاثية (Triple Point) للماء؟", en: "At what temperature and pressure does the Triple Point (TP) of water exist?" },
                opts: { ar: ["$0.01^{\\circ}C$ و $0.611 \\text{ kPa}$", "$100^{\\circ}C$ و $101.3 \\text{ kPa}$", "$374^{\\circ}C$ و $22100 \\text{ kPa}$", "$0^{\\circ}C$ و $101.3 \\text{ kPa}$"], en: ["$0.01^{\\circ}C$ and $0.611 \\text{ kPa}$", "$100^{\\circ}C$ and $101.3 \\text{ kPa}$", "$374^{\\circ}C$ and $22100 \\text{ kPa}$", "$0^{\\circ}C$ and $101.3 \\text{ kPa}$"] },
                correct: 0
            },
            {
                q: { ar: "حالة المادة التي تمتلك حجماً ثابتاً ولكن شكلها غير ثابت هي:", en: "The state of matter that has a fixed volume but no fixed shape is:" },
                opts: { ar: ["السائلة (Liquid)", "الصلبة (Solid)", "الغازية (Gas)", "جميع ما سبق"], en: ["Liquid", "Solid", "Gas", "All of the above"] },
                correct: 0
            },
            {
                q: { ar: "في مخطط طور الماء، يمثل المنحنى (a) نقطة الاتزان بين أي حالتين؟", en: "In the water phase diagram, curve (a) represents the equilibrium between which two states?" },
                opts: { ar: ["الصلب والغاز (Sublimation)", "السائل والغاز (Boiling)", "الصلب والسائل (Melting)", "السائل والمائع فوق الحرج"], en: ["Solid and gas (Sublimation)", "Liquid and gas (Boiling)", "Solid and liquid (Melting)", "Liquid and SCF"] },
                correct: 0
            },
            {
                q: { ar: "أي من المعادلات التالية تعبر عن قانون شارل (Charles' Law)؟", en: "Which of the following equations represents Charles' Law?" },
                opts: { ar: ["$\\frac{V_{1}}{T_{1}} = \\frac{V_{2}}{T_{2}}$", "$P_{1}V_{1} = P_{2}V_{2}$", "$\\frac{V_{1}}{n_{1}} = \\frac{V_{2}}{n_{2}}$", "$PV = nRT$"], en: ["$\\frac{V_{1}}{T_{1}} = \\frac{V_{2}}{T_{2}}$", "$P_{1}V_{1} = P_{2}V_{2}$", "$\\frac{V_{1}}{n_{1}} = \\frac{V_{2}}{n_{2}}$", "$PV = nRT$"] },
                correct: 0
            },
            {
                q: { ar: "أي نوع من البلورات يتميز بوجود قوى (Van der Waals) ضعيفة ودرجة انصهار منخفضة؟", en: "Which type of crystals is characterized by weak Van der Waals forces and a low melting point?" },
                opts: { ar: ["جزيئية (Molecular)", "أيونية (Ionic)", "تساهمية (Covalent)", "معدنية (Metallic)"], en: ["Molecular", "Ionic", "Covalent", "Metallic"] },
                correct: 0
            },
            {
                q: { ar: "الماس والكوارتز هما أمثلة على البلورات:", en: "Diamond and quartz are examples of crystals:" },
                opts: { ar: ["التساهمية (Covalent)", "الجزيئية (Molecular)", "الأيونية (Ionic)", "المعدنية (Metallic)"], en: ["Covalent", "Molecular", "Ionic", "Metallic"] },
                correct: 0
            },
            {
                q: { ar: "أي نوع من الروابط يربط البلورات الأيونية مثل (NaCl) ويجعلها هشة وصلبة؟", en: "What type of bonds holds Ionic crystals like NaCl, making them hard and brittle?" },
                opts: { ar: ["قوى إلكتروستاتيكية قوية", "روابط تساهمية", "روابط معدنية", "روابط هيدروجينية"], en: ["Strong electrostatic forces", "Covalent bonds", "Metallic bonds", "Hydrogen bonds"] },
                correct: 0
            },
            {
                q: { ar: "عندما يتواجد المركب في أكثر من شكل بلوري داخلي مختلف، يسمى هذا بـ:", en: "When a compound crystallizes in more than one different internal lattice, this is called:" },
                opts: { ar: ["تعدد الأشكال (Polymorphism)", "التسامي (Sublimation)", "الموائع فوق الحرجة (SCF)", "الشبكة البلورية (Lattice)"], en: ["Polymorphism", "Sublimation", "SCF", "Crystal Lattice"] },
                correct: 0
            },
            {
                q: { ar: "هل تختلف الأشكال المتعددة (Polymorphs) لنفس الدواء في الذوبانية (Solubility) ودرجة الانصهار؟", en: "Do different polymorphs of the same drug differ in solubility and melting point?" },
                opts: { ar: ["نعم، تختلف وتؤثر على التوافر الحيوي", "لا، الخصائص الفيزيائية ثابتة", "تختلف في اللون فقط", "لا يمكن تحديد ذلك"], en: ["Yes, they differ and affect bioavailability", "No, physical properties are constant", "They differ only in color", "Cannot be determined"] },
                correct: 0
            },
            {
                q: { ar: "ما هو الشكل البلوري الأكثر استقراراً لزبدة الكاكاو (Cacao butter) والذي ينصهر عند $34.5^{\\circ}C$؟", en: "What is the most stable form of Cacao butter, melting at $34.5^{\\circ}C$?" },
                opts: { ar: ["شكل بيتا المستقر (Stable Beta)", "شكل جاما (Gamma)", "شكل ألفا (Alpha)", "شكل بيتا برايم (Beta prime)"], en: ["Stable Beta form", "Gamma form", "Alpha form", "Beta prime form"] },
                correct: 0
            },
            {
                q: { ar: "أي شكل من عقار (Chloramphenicol palmitate) يتمتع بذوبانية أعلى وتوافر حيوي أكبر؟", en: "Which form of Chloramphenicol palmitate has higher solubility and bioavailability?" },
                opts: { ar: ["الشكل B", "الشكل A", "الشكل C", "جميع الأشكال متساوية"], en: ["Form B", "Form A", "Form C", "All forms are equal"] },
                correct: 0
            },
            {
                q: { ar: "ماذا يسمى المركب البلوري الذي دمجت في شبكته جزيئات من المذيب (Solvent)؟", en: "What is a crystalline compound with solvent molecules incorporated into its lattice called?" },
                opts: { ar: ["Solvate", "Hydrate", "Anhydrous", "Salt"], en: ["Solvate", "Hydrate", "Anhydrous", "Salt"] },
                correct: 0
            },
            {
                q: { ar: "ما هو المركب الذي يُطلق عليه (Anhydrous)؟", en: "What is the compound termed 'Anhydrous'?" },
                opts: { ar: ["الذي لا يحتوي على أي ماء داخل بلوراته", "الذي يحتوي على جزيء ماء واحد", "الذي يحتوي على جزيئين ماء", "الذي يتم دمج حمض داخله"], en: ["Compound not containing any water", "Compound with 1 water molecule", "Compound with 2 water molecules", "Compound incorporating acid"] },
                correct: 0
            },
            {
                q: { ar: "بلورة تحتوي على مكونات مختلفة ترتبط بقوى بين جزيئية بنسب ثابتة (Stoichiometric ratio) تسمى:", en: "A crystal holding different components in stoichiometric ratio by intermolecular forces is called:" },
                opts: { ar: ["Cocrystal", "Salt", "Hydrate", "Solvate"], en: ["Cocrystal", "Salt", "Hydrate", "Solvate"] },
                correct: 0
            },
            {
                q: { ar: "ما هي درجة الحرارة الحرجة (Critical temperature)؟", en: "What is the Critical temperature?" },
                opts: { ar: ["أعلى درجة حرارة يمكن عندها تحويل الغاز لسائل", "أقل ضغط مطلوب لإسالة الغاز", "درجة الحرارة التي يغلي عندها الماء", "درجة انصهار المادة الصلبة"], en: ["Highest temperature to liquefy gas", "Minimum pressure to liquefy gas", "Temperature water boils", "Melting point of solid"] },
                correct: 0
            },
            {
                q: { ar: "الحد الأدنى من الضغط اللازم لإسالة الغاز عند درجة حرارته الحرجة يسمى:", en: "The minimum pressure required to liquefy a gas at its critical temperature is called:" },
                opts: { ar: ["الضغط الحرج (Critical pressure)", "الحجم الحرج (Critical volume)", "الضغط الجوي (Atmospheric pressure)", "نقطة التسامي (Sublimation point)"], en: ["Critical pressure", "Critical volume", "Atmospheric pressure", "Sublimation point"] },
                correct: 0
            },
            {
                q: { ar: "المائع فوق الحرج (Supercritical fluid) يمتلك خصائص:", en: "A Supercritical fluid (SCF) combines properties of:" },
                opts: { ar: ["لزوجة منخفضة (كالغاز) وقدرة إذابة عالية (كالسائل)", "لزوجة عالية وقدرة إذابة منخفضة", "صلابة ودرجة انصهار عالية", "جميع ما سبق"], en: ["Low viscosity (gas) & high dissolving capacity (liquid)", "High viscosity & low dissolving", "Rigidity & high MP", "All of the above"] },
                correct: 0
            },
            {
                q: { ar: "حسب قانون أفوجادرو، يتناسب حجم الغاز تناسباً طردياً مع:", en: "According to Avogadro's Law, gas volume is directly proportional to:" },
                opts: { ar: ["عدد المولات (Number of moles)", "الضغط (Pressure)", "درجة الحرارة (Temperature)", "ثابت الغاز (Gas constant)"], en: ["Number of moles", "Pressure", "Temperature", "Gas constant"] },
                correct: 0
            }
        ]
    }
];
