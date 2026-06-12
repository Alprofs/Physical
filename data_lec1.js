const allLectures = [
    {
        id: 'lec1',
        title: {
            ar: "المحاضرة 1: حالات المادة (States of Matter)",
            en: "Lecture 1: States of Matter"
        },
        revision: [
            {
                title: { ar: "حالات المادة والتحويلات", en: "States of Matter & Interconversions" },
                branches: [
                    {
                        type: 'key',
                        nodeTitle: { ar: "تعريف المادة", en: "Definition of Matter" },
                        content: {
                            ar: "المادة هي أي شيء له كتلة ويشغل حيزاً من الفراغ. وتوجد في 3 حالات: صلبة، سائلة، غازية.",
                            en: "Matter is anything that has mass and occupies space. It exists as gas, liquid or solid."
                        }
                    },
                    {
                        type: 'origin',
                        nodeTitle: { ar: "تحويلات المادة", en: "Interconversions" },
                        content: {
                            ar: "*التسامي (Sublimation)*: من صلب لغاز.<br>*الترسيب (Deposition)*: من غاز لصلب.<br>*الانصهار (Melting)*: من صلب لسائل.<br>*التجمد (Freezing)*: من سائل لصلب.<br>*التبخر (Evaporation)*: من سائل لغاز.<br>*التكثف (Condensation)*: من غاز لسائل.",
                            en: "*Sublimation*: Solid to Gas.<br>*Deposition*: Gas to Solid.<br>*Melting*: Solid to Liquid.<br>*Freezing*: Liquid to Solid.<br>*Evaporation*: Liquid to Gas.<br>*Condensation*: Gas to Liquid."
                        }
                    },
                    {
                        type: 'key',
                        nodeTitle: { ar: "مقارنة بين حالات المادة", en: "Comparison Table" },
                        content: {
                            ar: `<table>
                                    <tr><th>الخاصية</th><th>صلب (Solid)</th><th>سائل (Liquid)</th><th>غاز (Gas)</th></tr>
                                    <tr><td>الشكل (Shape)</td><td>ثابت</td><td>غير ثابت</td><td>غير ثابت</td></tr>
                                    <tr><td>الحجم (Volume)</td><td>ثابت</td><td>ثابت</td><td>غير ثابت</td></tr>
                                    <tr><td>الصلابة (Rigidity)</td><td>صلب</td><td>غير صلب</td><td>غير صلب</td></tr>
                                    <tr><td>القوى الجزيئية</td><td>أقصى ما يمكن</td><td>أقل من الصلب</td><td>ضعيفة جداً</td></tr>
                                    <tr><td>المسافات الجزيئية</td><td>قليلة جداً</td><td>أكبر من الصلب</td><td>أقصى ما يمكن</td></tr>
                                    <tr><td>الانضغاطية</td><td>مهملة</td><td>قابل للانضغاط</td><td>عالي الانضغاطية</td></tr>
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
                title: { ar: "مخطط الطور للماء (Phase Diagram of Water)", en: "Phase Diagram of Water" },
                branches: [
                    {
                        type: 'key',
                        nodeTitle: { ar: "النقاط والمنحنيات الهامة", en: "Important Points & Curves" },
                        content: {
                            ar: "المنحنى a: *منحنى التسامي*.<br>المنحنى b: *منحنى الانصهار/التجمد*.<br>المنحنى c: *منحنى الغليان*.<br><br><b>النقطة الثلاثية (Triple Point - TP):</b> تتواجد الحالات الثلاث في اتزان، عند حرارة $0.01^{\\circ}C$ وضغط $0.611 \\text{ kPa}$.<br><b>النقطة الحرجة (Critical Point - CP):</b> يتكون مائع فوق حرج (SCF) عند حرارة $374^{\\circ}C$ وضغط $22100 \\text{ kPa}$.<br><b>الغليان والانصهار الطبيعي:</b> عند ضغط $101.3 \\text{ kPa}$، يغلي الماء عند $100^{\\circ}C$ وينصهر عند $0^{\\circ}C$.",
                            en: "Curve a: *Sublimation curve*.<br>Curve b: *Melting/Freezing curve*.<br>Curve c: *Boiling curve*.<br><br><b>Triple Point (TP):</b> All 3 states coexist in equilibrium at $0.01^{\\circ}C$ and $0.611 \\text{ kPa}$.<br><b>Critical Point (CP):</b> Supercritical fluid (SCF) is formed at $374^{\\circ}C$ and $22100 \\text{ kPa}$.<br><b>Normal BP & MP:</b> At $101.3 \\text{ kPa}$, water boils at $100^{\\circ}C$ and melts at $0^{\\circ}C$."
                        }
                    }
                ]
            },
            {
                title: { ar: "قوانين الغازات (Gas Laws)", en: "Gas Laws" },
                branches: [
                    {
                        type: 'origin',
                        nodeTitle: { ar: "ملخص القوانين", en: "Laws Summary" },
                        content: {
                            ar: `<table>
                                    <tr><th>القانون</th><th>المعادلة</th></tr>
                                    <tr><td>قانون بويل (Boyle's)</td><td>$V \\propto \\frac{1}{P}$<br>أو $P_{1}V_{1} = P_{2}V_{2}$</td></tr>
                                    <tr><td>قانون شارل (Charles')</td><td>$V \\propto T$<br>أو $\\frac{V_{1}}{T_{1}} = \\frac{V_{2}}{T_{2}}$</td></tr>
                                    <tr><td>قانون أفوجادرو (Avogadro's)</td><td>$V \\propto n$<br>أو $\\frac{V_{1}}{n_{1}} = \\frac{V_{2}}{n_{2}}$</td></tr>
                                    <tr><td>الغاز المثالي (Ideal gas)</td><td>$$PV = nRT$$ حيث R هو ثابت الغاز</td></tr>
                                 </table>`,
                            en: `<table>
                                    <tr><th>Law</th><th>Equation</th></tr>
                                    <tr><td>Boyle's Law</td><td>$V \\propto \\frac{1}{P}$<br>or $P_{1}V_{1} = P_{2}V_{2}$</td></tr>
                                    <tr><td>Charles' Law</td><td>$V \\propto T$<br>or $\\frac{V_{1}}{T_{1}} = \\frac{V_{2}}{T_{2}}$</td></tr>
                                    <tr><td>Avogadro's Law</td><td>$V \\propto n$<br>or $\\frac{V_{1}}{n_{1}} = \\frac{V_{2}}{n_{2}}$</td></tr>
                                    <tr><td>Ideal gas law</td><td>$$PV = nRT$$ (R: gas constant)</td></tr>
                                 </table>`
                        }
                    }
                ]
            },
            {
                title: { ar: "المواد الصلبة المتبلورة (Crystalline Solids)", en: "Crystalline Solids" },
                branches: [
                    {
                        type: 'key',
                        nodeTitle: { ar: "التعريف والشبكة البلورية", en: "Definition & Crystal Lattice" },
                        content: {
                            ar: "الجزيئات مرتبة بنظام محدد. درجة الحرارة التي تنكسر عندها الشبكة البلورية هي *درجة الانصهار*.<br><b>الشبكة البلورية:</b> ترتيب ثلاثي الأبعاد متماثل للذرات داخل البلورة.",
                            en: "Molecules are packed in a definite order. The temperature at which lattice breaks is the *melting point*.<br><b>Crystal lattice:</b> Symmetrical 3D arrangement of atoms inside a crystal."
                        }
                    },
                    {
                        type: 'origin',
                        nodeTitle: { ar: "أنواع المواد المتبلورة", en: "Types of Crystalline Solids" },
                        content: {
                            ar: `<table>
                                    <tr><th>النوع</th><th>الروابط</th><th>الخصائص</th><th>أمثلة</th></tr>
                                    <tr><td>جزيئية (Molecular)</td><td>فان دير فال / هيدروجينية</td><td>لينة، درجة انصهار منخفضة</td><td>الثلج، اليود</td></tr>
                                    <tr><td>أيونية (Ionic)</td><td>إلكتروستاتيكية قوية</td><td>صلبة وهشة، درجة انصهار عالية</td><td>NaCl</td></tr>
                                    <tr><td>تساهمية (Covalent)</td><td>روابط تساهمية</td><td>صلبة جداً، درجة انصهار عالية جداً</td><td>الماس، الكوارتز</td></tr>
                                    <tr><td>معدنية (Metallic)</td><td>روابط معدنية</td><td>لامعة، قابلة للطرق، انصهار متغير</td><td>النحاس، النيكل</td></tr>
                                 </table>`,
                            en: `<table>
                                    <tr><th>Type</th><th>Bonds</th><th>Properties</th><th>Examples</th></tr>
                                    <tr><td>Molecular</td><td>Van der Waals / H-bond</td><td>Soft, Low MP</td><td>Ice, Iodine</td></tr>
                                    <tr><td>Ionic</td><td>Electrostatic forces</td><td>Hard & brittle, High MP</td><td>NaCl</td></tr>
                                    <tr><td>Covalent</td><td>Covalent bonds</td><td>Hard, Very High MP</td><td>Diamond, quartz</td></tr>
                                    <tr><td>Metallic</td><td>Metallic bonds</td><td>Luster, Malleable, Variable MP</td><td>Copper, Nickel</td></tr>
                                 </table>`
                        }
                    }
                ]
            },
            {
                title: { ar: "تعدد الأشكال والبلورات المتعددة", en: "Polymorphism & Multicomponent Crystals" },
                branches: [
                    {
                        type: 'key',
                        nodeTitle: { ar: "تعدد الأشكال (Polymorphism)", en: "Polymorphism" },
                        content: {
                            ar: "قدرة المركب على التبلور في أكثر من شكل بشبكات داخلية مختلفة. وتختلف في: الذوبانية، درجة الانصهار، الاستقرار، وحيود الأشعة السينية (X-ray).",
                            en: "Ability of a compound to crystallize as more than one crystalline species with different internal lattices. They differ in: MP, solubilities, X-ray diffraction, and stability."
                        }
                    },
                    {
                        type: 'other',
                        nodeTitle: { ar: "أمثلة على تعدد الأشكال", en: "Examples" },
                        content: {
                            ar: "1- *Chloramphenicol palmitate*: الشكل B أكثر ذوبانية.<br>2- *زبدة الكاكاو*: لها 4 أشكال، والشكل المستقر هو بيتا (ينصهر عند $34.5^{\\circ}C$).<br>3- الكربون: يوجد في شكل *جرافيت* و *ماس*.",
                            en: "1- *Chloramphenicol palmitate*: Form B is more soluble.<br>2- *Cacao butter*: 4 forms, the stable one is beta form (MP $34.5^{\\circ}C$).<br>3- Carbon: exists as *graphite* and *diamond*."
                        }
                    },
                    {
                        type: 'origin',
                        nodeTitle: { ar: "المذيبات، الأملاح، والبلورات المشتركة", en: "Solvates, Salts & Cocrystals" },
                        content: {
                            ar: "*Solvate*: دمج المذيب في الشبكة البلورية.<br>*Hydrate*: دمج الماء في الشبكة (المركب بدون ماء يسمى Anhydrous).<br>*Salt*: دمج حمض أو قاعدة.<br>*Cocrystal*: دمج مكونات بنسب ثابتة باستخدام قوى بين جزيئية.",
                            en: "*Solvate*: solvent incorporated into lattice.<br>*Hydrate*: water incorporated (Compound without water is Anhydrous).<br>*Salt*: acid or base incorporated.<br>*Cocrystal*: different components held in stoichiometric ratio by intermolecular forces."
                        }
                    }
                ]
            },
            {
                title: { ar: "إسالة الغازات (Liquefaction of Gases)", en: "Liquefaction of Gases" },
                branches: [
                    {
                        type: 'key',
                        nodeTitle: { ar: "التعريفات الحرجة", en: "Critical Definitions" },
                        content: {
                            ar: "*درجة الحرارة الحرجة*: أعلى حرارة يمكن عندها تحويل الغاز لسائل.<br>*الضغط الحرج*: أقل ضغط مطلوب لإسالة الغاز عند درجة حرارته الحرجة.<br>*الحجم الحرج*: الحجم الذي يشغله مول واحد من الغاز عند الحرارة والضغط الحرجين.",
                            en: "*Critical temperature*: highest temperature at which liquefaction occurs.<br>*Critical pressure*: minimum pressure required to liquefy gas at critical temp.<br>*Critical volume*: volume occupied by a mole of gas at critical temp and pressure."
                        }
                    }
                ]
            }
        ],
        quiz: [
            {
                q: {
                    ar: "ما هي العملية التي يتحول فيها الغاز مباشرة إلى مادة صلبة؟",
                    en: "What is the process by which a gas changes directly into a solid?"
                },
                opts: {
                    ar: ["الترسيب (Deposition)", "التسامي (Sublimation)", "التكثف (Condensation)", "التجمد (Freezing)"],
                    en: ["Deposition", "Sublimation", "Condensation", "Freezing"]
                },
                correct: 0
            },
            {
                q: {
                    ar: "في أي حالة من حالات المادة تكون الانضغاطية (Compressibility) أقصى ما يمكن؟",
                    en: "In which state of matter is compressibility the highest?"
                },
                opts: {
                    ar: ["الحالة الغازية", "الحالة السائلة", "الحالة الصلبة", "البلازما"],
                    en: ["Gas state", "Liquid state", "Solid state", "Plasma"]
                },
                correct: 0
            },
            {
                q: {
                    ar: "عند أي حرارة وضغط تتواجد النقطة الثلاثية (Triple Point) للماء؟",
                    en: "At what temperature and pressure does the Triple Point (TP) of water exist?"
                },
                opts: {
                    ar: ["$0.01^{\\circ}C$ و $0.611 \\text{ kPa}$", "$100^{\\circ}C$ و $101.3 \\text{ kPa}$", "$374^{\\circ}C$ و $22100 \\text{ kPa}$", "$0^{\\circ}C$ و $101.3 \\text{ kPa}$"],
                    en: ["$0.01^{\\circ}C$ and $0.611 \\text{ kPa}$", "$100^{\\circ}C$ and $101.3 \\text{ kPa}$", "$374^{\\circ}C$ and $22100 \\text{ kPa}$", "$0^{\\circ}C$ and $101.3 \\text{ kPa}$"]
                },
                correct: 0
            },
            {
                q: {
                    ar: "أي من المعادلات التالية تعبر عن قانون بويل (Boyle's Law)؟",
                    en: "Which of the following equations represents Boyle's Law?"
                },
                opts: {
                    ar: ["$P_{1}V_{1} = P_{2}V_{2}$", "$\\frac{V_{1}}{T_{1}} = \\frac{V_{2}}{T_{2}}$", "$\\frac{V_{1}}{n_{1}} = \\frac{V_{2}}{n_{2}}$", "$PV = nRT$"],
                    en: ["$P_{1}V_{1} = P_{2}V_{2}$", "$\\frac{V_{1}}{T_{1}} = \\frac{V_{2}}{T_{2}}$", "$\\frac{V_{1}}{n_{1}} = \\frac{V_{2}}{n_{2}}$", "$PV = nRT$"]
                },
                correct: 0
            },
            {
                q: {
                    ar: "الماس والكوارتز هما أمثلة على أي نوع من البلورات؟",
                    en: "Diamond and quartz are examples of which type of crystals?"
                },
                opts: {
                    ar: ["تساهمية (Covalent)", "أيونية (Ionic)", "جزيئية (Molecular)", "معدنية (Metallic)"],
                    en: ["Covalent", "Ionic", "Molecular", "Metallic"]
                },
                correct: 0
            },
            {
                q: {
                    ar: "عند وجود تعدد أشكال (Polymorphism) لمركب ما، فإن الأشكال المختلفة تمتلك نفس درجة الانصهار والذوبانية.",
                    en: "When polymorphism exists for a compound, the different forms have the same melting point and solubility."
                },
                opts: {
                    ar: ["خطأ", "صح", "لا توجد علاقة", "أحياناً صح"],
                    en: ["False", "True", "No relation", "Sometimes true"]
                },
                correct: 0
            },
            {
                q: {
                    ar: "ما هو الشكل الأكثر استقراراً في زبدة الكاكاو (Cacao butter) والذي ينصهر عند $34.5^{\\circ}C$؟",
                    en: "What is the most stable form of Cacao butter, which melts at $34.5^{\\circ}C$?"
                },
                opts: {
                    ar: ["شكل بيتا (Beta)", "شكل ألفا (Alpha)", "شكل جاما (Gamma)", "شكل بيتا برايم (Beta prime)"],
                    en: ["Beta form", "Alpha form", "Gamma form", "Beta prime form"]
                },
                correct: 0
            },
            {
                q: {
                    ar: "ماذا يسمى المركب الذي لا يحتوي على أي جزيئات ماء داخل شبكته البلورية؟",
                    en: "What is a compound that does not contain any water within its crystal lattice called?"
                },
                opts: {
                    ar: ["Anhydrous", "Hydrate", "Solvate", "Cocrystal"],
                    en: ["Anhydrous", "Hydrate", "Solvate", "Cocrystal"]
                },
                correct: 0
            },
            {
                q: {
                    ar: "ما هي درجة الحرارة الحرجة (Critical temperature)؟",
                    en: "What is the Critical temperature?"
                },
                opts: {
                    ar: ["أعلى درجة حرارة يمكن عندها تحويل الغاز لسائل", "أقل ضغط مطلوب لإسالة الغاز", "درجة الحرارة التي تغلي عندها المادة", "النقطة التي يتساوى عندها الضغط مع الحجم"],
                    en: ["The highest temperature at which liquefaction of gas occurs", "The minimum pressure required to liquefy the gas", "The temperature at which the substance boils", "The point where pressure equals volume"]
                },
                correct: 0
            },
            {
                q: {
                    ar: "في مخطط طور الماء، ماذا يمثل المنحنى c؟",
                    en: "In the water phase diagram, what does curve c represent?"
                },
                opts: {
                    ar: ["منحنى الغليان/التكثف", "منحنى الانصهار/التجمد", "منحنى التسامي", "النقطة الحرجة"],
                    en: ["Boiling (or condensation) curve", "Melting (or freezing) curve", "Sublimation curve", "Critical point"]
                },
                correct: 0
            }
        ]
    }
];
