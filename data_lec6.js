allLectures.push({
    id: 'lec6',
    title: {
        ar: "المحاضرة 6: التراكب والارتباط البروتيني (Complexation & Protein Binding)",
        en: "Lecture 6: Complexation & Protein Binding"
    },
    revision: [
        {
            title: { ar: "مقدمة وتطبيقات الـ Complexation", en: "Introduction & Applications" },
            branches: [
                {
                    type: 'info',
                    nodeTitle: { ar: "التعريف والتطبيقات", en: "Definition & Applications" },
                    content: {
                        ar: "<b>التعريف:</b> طريقة لتحسين الخصائص الفيزيائية والكيميائية للمركبات الصيدلانية.<br><br><b>أهم التطبيقات:</b><br>1. <b>تحسين الذوبانية (Solubility):</b> مثل (PABA + Caffeine).<br>2. <b>تحسين الثبات (Stability):</b> مثل (Benzocaine + Caffeine).<br>3. <b>كمضادات للسموم (Antidotes):</b> استخدام الـ Chelating agents مثل (Dimercaprol) لتسمم الزئبق، و (EDTA) لتسمم الرصاص.",
                        en: "<b>Definition:</b> A way to enhance physicochemical properties of pharmaceutical compounds.<br><br><b>Main Applications:</b><br>1. <b>Improve Solubility:</b> e.g. (PABA + Caffeine).<br>2. <b>Improve Stability:</b> e.g. (Benzocaine + Caffeine).<br>3. <b>As Antidotes:</b> e.g. Dimercaprol for mercury poisoning, and EDTA for lead poisoning."
                    }
                }
            ]
        },
        {
            title: { ar: "التراكبات المعدنية والمخلبية (Metal Complexes & Chelates)", en: "Metal Complexes & Chelates" },
            branches: [
                {
                    type: 'origin',
                    nodeTitle: { ar: "تعريف الـ Metal Complex", en: "Metal Complex Definition" },
                    content: {
                        ar: "يتكون من ذرة مركزية (Metal ion) ترتبط بـ Ligands. يشبه تفاعل لويس (Lewis acid-base reaction):<br>- <b>المعدن (Metal):</b> مستقبل للإلكترونات (Lewis Acid).<br>- <b>الرابط (Ligand):</b> مانح لزوج الإلكترونات (Lewis Base).",
                        en: "Consists of a Central atom (Metal ion) linked with one or more Ligands. Resembles Lewis acid-base reaction:<br>- <b>Metal:</b> Electron acceptor (Lewis Acid).<br>- <b>Ligand:</b> Electron pair donor (Lewis Base)."
                    }
                },
                {
                    type: 'table',
                    nodeTitle: { ar: "أنواع الـ Ligands", en: "Ligands Types" },
                    content: {
                        ar: `<table>
                                <tr><th>النوع (Type)</th><th>عدد أزواج الإلكترونات الممنوحة</th><th>مثال (Example)</th></tr>
                                <tr><td>Unidentate</td><td>زوج واحد (Single pair)</td><td>$NH_3$</td></tr>
                                <tr><td>Bidentate</td><td>مجموعتين (2 donor groups)</td><td>Ethylenediamine</td></tr>
                                <tr><td>Tridentate</td><td>3 مجموعات (3 donor groups)</td><td>Diethylenetriamine</td></tr>
                                <tr><td><b>Hexadentate</b></td><td><b>6 مجموعات (6 donor groups)</b></td><td><b>EDTA</b></td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Type</th><th>Pairs of electrons</th><th>Example</th></tr>
                                <tr><td>Unidentate</td><td>Single pair</td><td>$NH_3$</td></tr>
                                <tr><td>Bidentate</td><td>2 donor groups</td><td>Ethylenediamine</td></tr>
                                <tr><td>Tridentate</td><td>3 donor groups</td><td>Diethylenetriamine</td></tr>
                                <tr><td><b>Hexadentate</b></td><td><b>6 donor groups</b></td><td><b>EDTA</b></td></tr>
                             </table>`
                    }
                },
                {
                    type: 'flip',
                    nodeTitle: { ar: "اضغط لتعرف: ما هي تطبيقات الـ Chelates الحيوية؟", en: "Tap: Biological Applications of Chelates?" },
                    content: {
                        ar: "1. <b>الهيموجلوبين (Haemoglobins):</b> مركب للحديد (Iron) لنقل الأكسجين.<br>2. <b>فيتامين B12:</b> مركب للكوبالت (Cobalt).",
                        en: "1. <b>Haemoglobins:</b> Iron complexes for O2 transport.<br>2. <b>Vitamin B12:</b> Cobalt complex."
                    }
                }
            ]
        },
        {
            title: { ar: "التراكبات العضوية والبوليمرية", en: "Organic & Polymeric Complexes" },
            branches: [
                {
                    type: 'info',
                    nodeTitle: { ar: "تعريف الـ Organic Complexes", en: "Organic Molecular Complexes" },
                    content: {
                        ar: "تتكون بسبب تفاعلات <b>غير تساهمية (Noncovalent interactions)</b> بين الرابط والمادة الأساسية، مثل القوى الكهروستاتيكية، الروابط الهيدروجينية، والتأثيرات الكارهة للماء.",
                        en: "Formed because of <b>noncovalent interactions</b> between ligand & substrate, such as electrostatic forces, hydrogen bonding, or hydrophobic effects."
                    }
                },
                {
                    type: 'key',
                    nodeTitle: { ar: "الـ Polymeric Complex", en: "Polymeric Complex" },
                    content: {
                        ar: "ارتباط بوليمر (مثل PVP) مع مادة فعالة.<br><b>مثال هام:</b> (Iodine + PVP) لتكوين <b>Povidone-iodine</b>، والذي يتميز بنشاط مضاد للبكتيريا، ذوبانية أعلى، وثبات أفضل (يقلل تطاير اليود).",
                        en: "Interaction of a polymer (like PVP) with a drug.<br><b>Important Example:</b> (Iodine + PVP) forms <b>Povidone-iodine</b>, which has antibacterial activity, enhanced solubility, and improved stability."
                    }
                }
            ]
        },
        {
            title: { ar: "مركبات الإدراج (Inclusion Compounds)", en: "Inclusion Compounds" },
            branches: [
                {
                    type: 'origin',
                    nodeTitle: { ar: "التعريف الأساسي", en: "Basic Definition" },
                    content: {
                        ar: "<b>التعريف:</b> مركب يقوم فيه الـ (Host) بتكوين تجويف (Cavity) تُحتجز فيه جزيئات الـ (Guest). يعتمد على <b>شكل الجزيئات (architecture)</b> وليس تقاربها الكيميائي.",
                        en: "<b>Definition:</b> Complex in which 'host' forms a cavity where 'guest' molecules are entrapped. Depends on <b>molecule architecture</b>, not chemical affinity."
                    }
                },
                {
                    type: 'compare',
                    val1Title: { ar: "Monomolecular Inclusion", en: "Monomolecular Inclusion" },
                    val1: { ar: "احتجاز جزيء ضيف واحد داخل تجويف جزيء مضيف واحد. (مثل Cyclodextrins).", en: "Entrapment of single guest inside a single host. (e.g. Cyclodextrins)." },
                    val2Title: { ar: "تركيب Cyclodextrins", en: "Cyclodextrins Structure" },
                    val2: { ar: "<b>الداخل (Interior):</b> كاره للماء (Hydrophobic).<br><b>الخارج (Exterior):</b> محب للماء (Hydrophilic).", en: "<b>Interior:</b> Hydrophobic.<br><b>Exterior:</b> Hydrophilic." }
                }
            ]
        },
        {
            title: { ar: "التحليل ومنحنى الذوبانية", en: "Analysis & Solubility Curve" },
            branches: [
                {
                    type: 'info',
                    nodeTitle: { ar: "ثابت الاستقرار (Stability Constant)", en: "Stability Constant" },
                    content: {
                        ar: "يتم تحليل التراكبات لتحديد النسبة وثابت الاستقرار.<br><b>القانون:</b> $$K = \\frac{[MAn]}{[M][A]^n}$$<br>حيث [MAn] تركيز المركب، [M] تركيز المعدن الحر، [A] تركيز الـ Ligand.",
                        en: "Analyzed to determine ratio and stability.<br><b>Law:</b> $$K = \\frac{[MAn]}{[M][A]^n}$$<br>Where [MAn] is complex conc, [M] is free metal conc, [A] is free ligand conc."
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "منحنى الذوبانية (Phase Solubility Diagram)", en: "Phase Solubility Diagram" },
                    content: {
                        ar: `<div style="text-align: center; margin: 15px 0; background: white; padding: 10px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                <svg viewBox="0 0 600 400" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="font-family: Arial, sans-serif;">
                                    <defs>
                                        <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
                                          <path d="M0,0 L0,8 L8,4 z" fill="black" />
                                        </marker>
                                    </defs>
                                    
                                    <rect x="70" y="40" width="500" height="300" fill="none" stroke="black" stroke-width="1.5" />

                                    <line x1="70" y1="80" x2="65" y2="80" stroke="black" stroke-width="1.5" />
                                    <line x1="70" y1="120" x2="65" y2="120" stroke="black" stroke-width="1.5" />
                                    <line x1="70" y1="160" x2="65" y2="160" stroke="black" stroke-width="1.5" />
                                    <line x1="70" y1="200" x2="65" y2="200" stroke="black" stroke-width="1.5" />
                                    <line x1="70" y1="240" x2="65" y2="240" stroke="black" stroke-width="1.5" />
                                    <line x1="70" y1="280" x2="65" y2="280" stroke="black" stroke-width="1.5" />
                                    <line x1="70" y1="320" x2="65" y2="320" stroke="black" stroke-width="1.5" />

                                    <line x1="100" y1="340" x2="100" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="140" y1="340" x2="140" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="180" y1="340" x2="180" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="220" y1="340" x2="220" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="260" y1="340" x2="260" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="300" y1="340" x2="300" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="340" y1="340" x2="340" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="380" y1="340" x2="380" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="420" y1="340" x2="420" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="460" y1="340" x2="460" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="500" y1="340" x2="500" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="540" y1="340" x2="540" y2="345" stroke="black" stroke-width="1.5" />

                                    <path d="M 70 200 L 120 100 L 180 100 C 182 140, 195 165, 230 180 Q 360 220 480 250" fill="none" stroke="#000080" stroke-width="2.5" />

                                    <text x="120" y="230" font-size="14" font-weight="bold" fill="#D32F2F" text-anchor="middle">Point A</text>
                                    <text x="120" y="255" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">Solubility of</text>
                                    <text x="120" y="275" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">the Drug</text>
                                    <path d="M 90 225 Q 75 220 72 205" fill="none" stroke="black" stroke-width="1.2" marker-end="url(#arrowHead)" />

                                    <text x="160" y="25" font-size="14" font-weight="bold" fill="#D32F2F" text-anchor="middle">Point B</text>
                                    <text x="160" y="45" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">Saturation of the Drug-Ligand</text>
                                    <text x="160" y="65" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">(solubility limit)</text>
                                    <path d="M 120 70 Q 115 85 119 96" fill="none" stroke="black" stroke-width="1.2" marker-end="url(#arrowHead)" />

                                    <text x="270" y="65" font-size="14" font-weight="bold" fill="#D32F2F" text-anchor="middle">Point C</text>
                                    <path d="M 235 60 Q 195 65 185 96" fill="none" stroke="black" stroke-width="1.2" marker-end="url(#arrowHead)" />
                                    
                                    <text x="310" y="90" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">All excess solid</text>
                                    <text x="310" y="110" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">Drug converted to</text>
                                    <text x="310" y="130" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">Drug-Ligand</text>
                                    <text x="310" y="150" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">complex</text>

                                    <text x="35" y="190" text-anchor="middle" font-size="15" font-weight="bold" fill="#000080" transform="rotate(-90 35 190)">Molar Concentration of the Drug</text>
                                    <text x="320" y="380" text-anchor="middle" font-size="15" font-weight="bold" fill="#000080">Molar Concentration of the Ligand</text>
                                </svg>
                             </div>`,
                        en: `<div style="text-align: center; margin: 15px 0; background: white; padding: 10px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                <svg viewBox="0 0 600 400" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="font-family: Arial, sans-serif;">
                                    <defs>
                                        <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
                                          <path d="M0,0 L0,8 L8,4 z" fill="black" />
                                        </marker>
                                    </defs>
                                    
                                    <rect x="70" y="40" width="500" height="300" fill="none" stroke="black" stroke-width="1.5" />

                                    <line x1="70" y1="80" x2="65" y2="80" stroke="black" stroke-width="1.5" />
                                    <line x1="70" y1="120" x2="65" y2="120" stroke="black" stroke-width="1.5" />
                                    <line x1="70" y1="160" x2="65" y2="160" stroke="black" stroke-width="1.5" />
                                    <line x1="70" y1="200" x2="65" y2="200" stroke="black" stroke-width="1.5" />
                                    <line x1="70" y1="240" x2="65" y2="240" stroke="black" stroke-width="1.5" />
                                    <line x1="70" y1="280" x2="65" y2="280" stroke="black" stroke-width="1.5" />
                                    <line x1="70" y1="320" x2="65" y2="320" stroke="black" stroke-width="1.5" />

                                    <line x1="100" y1="340" x2="100" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="140" y1="340" x2="140" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="180" y1="340" x2="180" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="220" y1="340" x2="220" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="260" y1="340" x2="260" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="300" y1="340" x2="300" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="340" y1="340" x2="340" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="380" y1="340" x2="380" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="420" y1="340" x2="420" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="460" y1="340" x2="460" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="500" y1="340" x2="500" y2="345" stroke="black" stroke-width="1.5" />
                                    <line x1="540" y1="340" x2="540" y2="345" stroke="black" stroke-width="1.5" />

                                    <path d="M 70 200 L 120 100 L 180 100 C 182 140, 195 165, 230 180 Q 360 220 480 250" fill="none" stroke="#000080" stroke-width="2.5" />

                                    <text x="120" y="230" font-size="14" font-weight="bold" fill="#D32F2F" text-anchor="middle">Point A</text>
                                    <text x="120" y="255" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">Solubility of</text>
                                    <text x="120" y="275" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">the Drug</text>
                                    <path d="M 90 225 Q 75 220 72 205" fill="none" stroke="black" stroke-width="1.2" marker-end="url(#arrowHead)" />

                                    <text x="160" y="25" font-size="14" font-weight="bold" fill="#D32F2F" text-anchor="middle">Point B</text>
                                    <text x="160" y="45" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">Saturation of the Drug-Ligand</text>
                                    <text x="160" y="65" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">(solubility limit)</text>
                                    <path d="M 120 70 Q 115 85 119 96" fill="none" stroke="black" stroke-width="1.2" marker-end="url(#arrowHead)" />

                                    <text x="270" y="65" font-size="14" font-weight="bold" fill="#D32F2F" text-anchor="middle">Point C</text>
                                    <path d="M 235 60 Q 195 65 185 96" fill="none" stroke="black" stroke-width="1.2" marker-end="url(#arrowHead)" />
                                    
                                    <text x="310" y="90" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">All excess solid</text>
                                    <text x="310" y="110" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">Drug converted to</text>
                                    <text x="310" y="130" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">Drug-Ligand</text>
                                    <text x="310" y="150" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">complex</text>

                                    <text x="35" y="190" text-anchor="middle" font-size="15" font-weight="bold" fill="#000080" transform="rotate(-90 35 190)">Molar Concentration of the Drug</text>
                                    <text x="320" y="380" text-anchor="middle" font-size="15" font-weight="bold" fill="#000080">Molar Concentration of the Ligand</text>
                                </svg>
                             </div>`
                    }
                }
            ]
        },
        {
            title: { ar: "ارتباط البروتين (Protein Binding)", en: "Protein Binding" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "أهمية ارتباط الأدوية بالبروتين", en: "Significance of Protein Binding" },
                    content: {
                        ar: "1. يؤثر على توزيع الدواء في أنسجة الجسم (Distribution).<br>5. يطيل من مدة تأثير الدواء (Prolongs duration of action).<br>6. <b>التفاعل الدوائي الخطير:</b> عند إعطاء دواءين، أحدهما يزيح الآخر (Displacement)، مما <b>يزيد من سمية الدواء الحر (Increase free drug toxicity).</b>",
                        en: "1. Influences drug distribution into tissues.<br>5. Prolongs drug duration of action.<br>6. <b>Dangerous Interaction:</b> Co-administration causes displacement of the first bound drug, leading to <b>increased free drug toxicity.</b>"
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "ميكانيزم الارتباط", en: "Mechanism of Binding" },
                    content: {
                        ar: "ارتباط الأدوية بالبروتينات يكون غالباً <b>عكسياً (Reversible)</b> باستخدام <b>روابط كيميائية ضعيفة</b> مثل:<br>- الروابط الهيدروجينية.<br>- الروابط الكارهة للماء.<br>- الروابط الأيونية.<br>- قوى فان دير فال.",
                        en: "Drug-protein binding is mainly <b>reversible</b> using <b>weak chemical bonds</b> such as:<br>- Hydrogen bonds.<br>- Hydrophobic bonds.<br>- Ionic bonds.<br>- Van der Waals forces."
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: { ar: "كيف يُصنف المعدن (Metal ion) في الـ Metal Complex وفقاً لنظرية لويس؟", en: "How is the Metal ion in a Metal Complex classified according to Lewis theory?" },
            opts: {
                ar: ["كقاعدة لويس (مانح للإلكترونات)", "كحمض لويس (مستقبل للإلكترونات)", "كمركب متعادل", "كعامل مؤكسد فقط"],
                en: ["Lewis Base (Electron pair donor)", "Lewis Acid (Electron acceptor)", "Neutral compound", "Oxidizing agent only"]
            },
            correct: 1
        },
        {
            q: { ar: "ما هو تصنيف الـ EDTA كـ Ligand؟", en: "What is the classification of EDTA as a Ligand?" },
            opts: { ar: ["Unidentate", "Bidentate", "Tridentate", "Hexadentate"], en: ["Unidentate", "Bidentate", "Tridentate", "Hexadentate"] },
            correct: 3
        },
        {
            q: { ar: "ما هو الاستخدام الطبي لمركب (CaNa2EDTA)؟", en: "What is the medical application of (CaNa2EDTA)?" },
            opts: {
                ar: ["تحسين ذوبانية الكافيين", "كمضاد (Antidote) في حالات التسمم بالرصاص", "مضاد حيوي واسع المجال", "كمادة حافظة للقطرات"],
                en: ["Improving caffeine solubility", "As an Antidote in lead poisoning cases", "Broad-spectrum antibiotic", "As a preservative for eye drops"]
            },
            correct: 1
        },
        {
            q: { ar: "أي من الروابط التالية هي المسئولة عن تكوين التراكبات العضوية (Organic complexes)؟", en: "Which bonds are responsible for forming Organic complexes?" },
            opts: {
                ar: ["روابط تساهمية قوية (Covalent)", "تفاعلات غير تساهمية (Noncovalent)", "روابط معدنية", "جميع ما سبق"],
                en: ["Strong Covalent bonds", "Noncovalent interactions", "Metallic bonds", "All of the above"]
            },
            correct: 1
        },
        {
            q: { ar: "مركب الـ Povidone-iodine هو مثال على أي نوع من التراكبات؟", en: "Povidone-iodine is an example of which type of complexes?" },
            opts: { ar: ["Inorganic complex", "Chelates", "Polymeric complex", "Monomolecular inclusion"], en: ["Inorganic complex", "Chelates", "Polymeric complex", "Monomolecular inclusion"] },
            correct: 2
        },
        {
            q: { ar: "تعتبر (Cyclodextrins) مثالاً على:", en: "(Cyclodextrins) are an example of:" },
            opts: { ar: ["Monomolecular inclusion compounds", "Channel lattice complexes", "Layer-type complexes", "Metal complexes"], en: ["Monomolecular inclusion compounds", "Channel lattice complexes", "Layer-type complexes", "Metal complexes"] },
            correct: 0
        },
        {
            q: { ar: "في منحنى الذوبانية لدواء PABA، ماذا تمثل النقطة (A)؟", en: "In the solubility graph of PABA, what does point (A) represent?" },
            opts: {
                ar: ["تحول الدواء الصلب لمركب", "بداية الترسيب", "حالة التشبع", "الذوبانية الذاتية للدواء في الماء (Intrinsic solubility)"],
                en: ["Conversion of solid drug to complex", "Start of precipitation", "Saturation state", "Intrinsic solubility of the drug in water"]
            },
            correct: 3
        },
        {
            q: { ar: "كيف يؤثر الارتباط بالبروتين (Protein Binding) على مدة تأثير الدواء؟", en: "How does Protein Binding affect the duration of action of a drug?" },
            opts: {
                ar: ["يقصر من مدة تأثيره جداً", "يطيل من مدة تأثير الدواء (Prolongs duration)", "لا يؤثر على الإطلاق", "يمنع امتصاصه بالكامل"],
                en: ["Shortens its duration very much", "Prolongs duration of action", "No effect at all", "Prevents its absorption completely"]
            },
            correct: 1
        },
        {
            q: { ar: "ماذا يحدث عند إعطاء دواءين يرتبطان بقوة ببروتينات البلازما معاً؟", en: "What happens when two highly protein-bound drugs are co-administered?" },
            opts: {
                ar: ["إزاحة (Displacement) مما يزيد من سمية الدواء الحر", "يرتبطان ببعضهما لتكوين مركب آمن", "تزيد سرعة إخراجهما", "يقل امتصاص الدواء الثاني"],
                en: ["Displacement occurs, increasing free drug toxicity", "Bind together forming safe complex", "Excretion rate increases", "Absorption of second drug decreases"]
            },
            correct: 0
        },
        {
            q: { ar: "ما هو نوع الروابط التي تربط الدواء ببروتينات البلازما غالباً؟", en: "What type of bonds mostly link a drug to plasma proteins?" },
            opts: {
                ar: ["روابط تساهمية قوية لا تنعكس", "روابط كيميائية ضعيفة عكسية (Hydrogen, Ionic...)", "روابط معدنية صلبة", "رابطة ببتيدية"],
                en: ["Strong irreversible covalent bonds", "Weak reversible chemical bonds (Hydrogen, Ionic...)", "Solid metallic bonds", "Peptide bond"]
            },
            correct: 1
        },
        {
            q: { ar: "الهيموجلوبين (Haemoglobin) المسئول عن نقل الأكسجين في الدم هو مركب (Complex) لأي معدن؟", en: "Haemoglobin, responsible for O2 transport, is a complex of which metal?" },
            opts: { ar: ["الكالسيوم (Calcium)", "الحديد (Iron)", "الكوبالت (Cobalt)", "الزئبق (Mercury)"], en: ["Calcium", "Iron", "Cobalt", "Mercury"] },
            correct: 1
        },
        {
            q: { ar: "فيتامين B12 هو مثال على مركب (Complex) يحتوي على ذرة مركزية من:", en: "Vitamin B12 is an example of a complex containing a central atom of:" },
            opts: { ar: ["الحديد (Iron)", "المغنيسيوم (Magnesium)", "الكوبالت (Cobalt)", "الفضة (Silver)"], en: ["Iron", "Magnesium", "Cobalt", "Silver"] },
            correct: 2
        },
        {
            q: { ar: "الـ Ethylenediamine يمتلك مجموعتين مانحتين للإلكترونات، لذلك يصنف كـ:", en: "Ethylenediamine has 2 donor groups, so it is classified as:" },
            opts: { ar: ["Unidentate", "Bidentate", "Tridentate", "Hexadentate"], en: ["Unidentate", "Bidentate", "Tridentate", "Hexadentate"] },
            correct: 1
        },
        {
            q: { ar: "يستخدم (Dimercaprol) كمضاد (Antidote) في حالات التسمم بـ:", en: "(Dimercaprol) is used as an antidote in cases of poisoning by:" },
            opts: { ar: ["الرصاص (Lead)", "الزئبق (Mercury)", "الحديد (Iron)", "النحاس (Copper)"], en: ["Lead", "Mercury", "Iron", "Copper"] },
            correct: 1
        },
        {
            q: { ar: "ما هو الهدف من إضافة البوليمر (PVP) إلى اليود (Iodine)؟", en: "What is the purpose of adding polymer (PVP) to Iodine?" },
            opts: {
                ar: ["تقليل الذوبانية", "زيادة تطاير اليود (Volatility)", "تقليل تطاير اليود (Low iodine volatility) وعمل مطهر موضعي", "تغيير لونه فقط"],
                en: ["Decrease solubility", "Increase iodine volatility", "Low iodine volatility and act as topical antiseptic", "Change its color only"]
            },
            correct: 2
        },
        {
            q: { ar: "تكوين مركبات الـ Inclusion compounds يعتمد بشكل أساسي على:", en: "The formation of Inclusion compounds depends mainly on:" },
            opts: {
                ar: ["التقارب الكيميائي بين المادتين", "شكل وهيكل الجزيئات (Architecture of molecules)", "درجة حرارة التفاعل فقط", "الوزن الجزيئي للماء"],
                en: ["Chemical affinity between substances", "Architecture of molecules", "Reaction temperature only", "Molecular weight of water"]
            },
            correct: 1
        },
        {
            q: { ar: "ما هي طبيعة التجويف الداخلي (Interior cavity) للـ Cyclodextrins؟", en: "What is the nature of the interior cavity of Cyclodextrins?" },
            opts: {
                ar: ["محب للماء (Hydrophilic)", "كاره للماء (Hydrophobic)", "متعادل دائماً", "مشحون بشحنة موجبة قوية"],
                en: ["Hydrophilic", "Hydrophobic", "Always neutral", "Strongly positively charged"]
            },
            correct: 1
        },
        {
            q: { ar: "في معادلة ثابت الاستقرار $K = \\frac{[MAn]}{[M][A]^n}$، ماذا يمثل الرمز [M]؟", en: "In the stability constant equation, what does [M] represent?" },
            opts: {
                ar: ["تركيز المركب (Complex)", "تركيز الـ Ligand", "تركيز أيون المعدن الحر (Uncomplexed Metal ion)", "درجة الحرارة المئوية"],
                en: ["Concentration of the Complex", "Concentration of the Ligand", "Concentration of Uncomplexed Metal ion", "Temperature in Celsius"]
            },
            correct: 2
        },
        {
            q: { ar: "في منحنى الـ Solubility Method، ماذا تعني النقطة (C)؟", en: "In the Solubility Method curve, what does point (C) indicate?" },
            opts: {
                ar: ["الذوبانية الذاتية", "كل الدواء الصلب الزائد تحول إلى مركب (Complex)", "وصول المحلول لدرجة الغليان", "انفصال المركب إلى معدن و Ligand"],
                en: ["Intrinsic solubility", "All excess solid drug is converted to complex", "Solution reached boiling point", "Complex separated into metal and Ligand"]
            },
            correct: 1
        },
        {
            q: { ar: "أي من الأدوية التالية تم استخدام الـ Complexation معها لتقليل التحلل المائي (Hydrolysis) وتحسين الثبات؟", en: "Which drug used Complexation to reduce hydrolysis and improve stability?" },
            opts: {
                ar: ["PABA + Caffeine", "Benzocaine + Caffeine", "Aspirin + Cyclodextrin", "Dimercaprol"],
                en: ["PABA + Caffeine", "Benzocaine + Caffeine", "Aspirin + Cyclodextrin", "Dimercaprol"]
            },
            correct: 1
        }
    ]
});
