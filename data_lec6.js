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
                    type: 'key',
                    nodeTitle: { ar: "التعريف والتطبيقات", en: "Definition & Applications" },
                    content: {
                        ar: "<b>التعريف:</b> طريقة لتحسين الخصائص الفيزيائية والكيميائية للمركبات الصيدلانية.<br><b>أهم التطبيقات:</b><br>1. <b>تحسين الذوبانية (Solubility):</b> مثل (PABA + Caffeine).<br>2. <b>تحسين الثبات (Stability):</b> مثل (Benzocaine + Caffeine).<br>3. <b>كمضادات للسموم (Antidotes):</b> استخدام الـ Chelating agents مثل (Dimercaprol) لتسمم الزئبق، و (EDTA) لتسمم الرصاص.",
                        en: "<b>Definition:</b> A way to enhance physicochemical properties of pharmaceutical compounds.<br><b>Main Applications:</b><br>1. <b>Improve Solubility:</b> e.g. (PABA + Caffeine).<br>2. <b>Improve Stability:</b> e.g. (Benzocaine + Caffeine).<br>3. <b>As Antidotes (Chelating agents):</b> e.g. Dimercaprol for mercury poisoning, and EDTA for lead poisoning."
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
                    type: 'key',
                    nodeTitle: { ar: "أنواع الـ Ligands والـ Chelates", en: "Ligands Types & Chelates" },
                    content: {
                        ar: `<table>
                                <tr><th>النوع</th><th>عدد أزواج الإلكترونات</th><th>مثال</th></tr>
                                <tr><td>Unidentate</td><td>زوج واحد (Single pair)</td><td>$NH_3$</td></tr>
                                <tr><td>Bidentate</td><td>مجموعتين (2 donor groups)</td><td>Ethylenediamine</td></tr>
                                <tr><td>Tridentate</td><td>3 مجموعات (3 donor groups)</td><td>Diethylenetriamine</td></tr>
                                <tr><td><b>Hexadentate</b></td><td><b>6 مجموعات (6 donor groups)</b></td><td><b>EDTA</b></td></tr>
                             </table><br><b>الـ Chelates:</b> مركب تتعدد فيه روابط الـ Ligand (مثل EDTA) مع المعدن المركزي لتكوين مركب مستقر جداً.`,
                        en: `<table>
                                <tr><th>Type</th><th>Pairs of electrons</th><th>Example</th></tr>
                                <tr><td>Unidentate</td><td>Single pair</td><td>$NH_3$</td></tr>
                                <tr><td>Bidentate</td><td>2 donor groups</td><td>Ethylenediamine</td></tr>
                                <tr><td>Tridentate</td><td>3 donor groups</td><td>Diethylenetriamine</td></tr>
                                <tr><td><b>Hexadentate</b></td><td><b>6 donor groups</b></td><td><b>EDTA</b></td></tr>
                             </table><br><b>Chelates:</b> Multidentate ligand (like EDTA) coordinates with a central metal ion to form a very stable complex.`
                    }
                }
            ]
        },
        {
            title: { ar: "التراكبات العضوية والبوليمرية", en: "Organic & Polymeric Complexes" },
            branches: [
                {
                    type: 'origin',
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
                        ar: "ارتباط بوليمر (مثل PVP) مع مادة فعالة.<br><b>مثال هام:</b> (Iodine + PVP) لتكوين <b>Povidone-iodine</b>، والذي يتميز بنشاط مضاد للبكتيريا، ذوبانية أعلى، وثبات أفضل.",
                        en: "Interaction of a polymer (like PVP) with a drug.<br><b>Important Example:</b> (Iodine + PVP) forms <b>Povidone-iodine</b>, which has antibacterial activity, enhanced solubility, and improved stability."
                    }
                }
            ]
        },
        {
            title: { ar: "مركبات الإدراج والتضمين (Inclusion Compounds)", en: "Inclusion Compounds" },
            branches: [
                {
                    type: 'origin',
                    nodeTitle: { ar: "التعريف والـ Monomolecular", en: "Definition & Monomolecular" },
                    content: {
                        ar: "<b>التعريف:</b> مركب يقوم فيه الـ (Host) بتكوين تجويف (Cavity) تُحتجز فيه جزيئات الـ (Guest). يعتمد على شكل الجزيئات وليس تقاربها الكيميائي.<br><br><b>Monomolecular Inclusion:</b><br>احتجاز جزيء ضيف واحد داخل تجويف جزيء مضيف واحد.<br><b>المثال الأهم (Cyclodextrins):</b><br>- التجويف الداخلي كاره للماء (Hydrophobic).<br>- السطح الخارجي محب للماء (Hydrophilic).<br>يستخدم لتحسين الذوبانية (مثل الأسبرين) وإخفاء الطعم المر.",
                        en: "<b>Definition:</b> Complex in which 'host' forms a cavity where 'guest' molecules are entrapped. Depends on molecule architecture, not chemical affinity.<br><br><b>Monomolecular Inclusion:</b><br>Entrapment of single guest inside a single host.<br><b>Main Example (Cyclodextrins):</b><br>- Interior cavity is Hydrophobic.<br>- Exterior is Hydrophilic.<br>Used to improve solubility (e.g. aspirin) and mask bitter taste."
                    }
                }
            ]
        },
        {
            title: { ar: "التحليل ومنحنى الذوبانية", en: "Analysis & Solubility Curve" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "ثابت الاستقرار (Stability Constant)", en: "Stability Constant & Analysis" },
                    content: {
                        ar: "يتم تحليل التراكبات لتحديد: النسبة الكمية (Stoichiometric ratio) وثابت الاستقرار (Stability constant).<br><b>قانون ثابت الاستقرار (K):</b><br>$$K = \\frac{[MAn]}{[M][A]^n}$$<br>التركيز المولي للنواتج مقسوماً على التركيز المولي للمتفاعلات.",
                        en: "Complexes are analyzed for: Stoichiometric ratio and Stability constant.<br><b>Stability Constant Law (K):</b><br>$$K = \\frac{[MAn]}{[M][A]^n}$$<br>Molar conc of products divided by molar conc of reactants."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "منحنى الـ Solubility Method", en: "Solubility Method Graph" },
                    content: {
                        ar: "المنحنى يدرس تأثير المادة المكونة للمركب (مثل الكافيين) على ذوبانية الدواء (مثل PABA).<br>- <b>النقطة A:</b> الذوبانية الذاتية للدواء.<br>- <b>المنحنى الطالع (A إلى B):</b> تزداد الذوبانية لتكوين مركب قابل للذوبان.<br>- <b>النقطة B:</b> تشبع المحلول بالدواء والمركب (Solubility limit).<br>- <b>النقطة C:</b> تحول كل الدواء الصلب الزائد إلى Complex.",
                        en: "Graph studies effect of complexing agent (Caffeine) on drug solubility (PABA).<br>- <b>Point A:</b> Intrinsic solubility of drug.<br>- <b>Rising curve (A to B):</b> Solubility increases due to soluble complex formation.<br>- <b>Point B:</b> Saturation limit (Drug-Ligand).<br>- <b>Point C:</b> All excess solid drug is converted to complex."
                    }
                }
            ]
        },
        {
            title: { ar: "ارتباط البروتين (Protein Binding)", en: "Protein Binding Significance" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "أهمية ارتباط الأدوية بالبروتين", en: "Significance of Protein Binding" },
                    content: {
                        ar: "1. يؤثر على توزيع الدواء في أنسجة الجسم (Distribution).<br>5. يطيل من مدة تأثير الدواء (Prolongs duration of action).<br>6. <b>التفاعل الدوائي الخطير:</b> عند إعطاء دواءين يرتبطان ببروتينات البلازما، أحدهما يزيح الآخر (Displacement)، مما <b>يزيد من سمية الدواء الحر (Increase free drug toxicity).</b>",
                        en: "1. Influences drug distribution into tissues.<br>5. Prolongs drug duration of action.<br>6. <b>Dangerous Interaction:</b> Co-administration of different drugs that bind to plasma proteins causes displacement of the first bound drug, leading to <b>increased free drug toxicity.</b>"
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: {
                ar: "كيف يُصنف المعدن (Metal ion) في الـ Metal Complex وفقاً لنظرية لويس؟",
                en: "How is the Metal ion in a Metal Complex classified according to Lewis theory?"
            },
            opts: {
                ar: ["كقاعدة لويس (Lewis Base - مانح للإلكترونات)", "كحمض لويس (Lewis Acid - مستقبل للإلكترونات)", "كمركب متعادل", "كعامل مؤكسد فقط"],
                en: ["Lewis Base (Electron pair donor)", "Lewis Acid (Electron acceptor)", "Neutral compound", "Oxidizing agent only"]
            },
            correct: 1
        },
        {
            q: {
                ar: "ما هو تصنيف الـ EDTA كـ Ligand؟",
                en: "What is the classification of EDTA as a Ligand?"
            },
            opts: {
                ar: ["Unidentate", "Bidentate", "Tridentate", "Hexadentate"],
                en: ["Unidentate", "Bidentate", "Tridentate", "Hexadentate"]
            },
            correct: 3
        },
        {
            q: {
                ar: "ما هو الاستخدام الطبي لمركب (CaNa2EDTA)؟",
                en: "What is the medical application of (CaNa2EDTA)?"
            },
            opts: {
                ar: ["تحسين ذوبانية الكافيين", "كمضاد (Antidote) في حالات التسمم بالرصاص", "مضاد حيوي واسع المجال", "كمادة حافظة للقطرات"],
                en: ["Improving caffeine solubility", "As an Antidote in lead poisoning cases", "Broad-spectrum antibiotic", "As a preservative for eye drops"]
            },
            correct: 1
        },
        {
            q: {
                ar: "أي من الروابط التالية هي المسئولة عن تكوين التراكبات العضوية الجزيئية (Organic molecular complexes)؟",
                en: "Which of the following bonds are responsible for the formation of Organic molecular complexes?"
            },
            opts: {
                ar: ["روابط تساهمية قوية (Covalent bonds)", "تفاعلات غير تساهمية (Noncovalent interactions)", "روابط أيونية نقية", "روابط معدنية (Metallic bonds)"],
                en: ["Strong Covalent bonds", "Noncovalent interactions", "Pure ionic bonds", "Metallic bonds"]
            },
            correct: 1
        },
        {
            q: {
                ar: "مركب الـ Povidone-iodine هو مثال على أي نوع من التراكبات (Complexes)؟",
                en: "Povidone-iodine is an example of which type of complexes?"
            },
            opts: {
                ar: ["Inorganic complex", "Chelates", "Polymeric complex", "Monomolecular inclusion"],
                en: ["Inorganic complex", "Chelates", "Polymeric complex", "Monomolecular inclusion"]
            },
            correct: 2
        },
        {
            q: {
                ar: "تعتبر (Cyclodextrins) مثالاً على:",
                en: "(Cyclodextrins) are an example of:"
            },
            opts: {
                ar: ["Monomolecular inclusion compounds", "Channel lattice complexes", "Layer-type complexes", "Metal complexes"],
                en: ["Monomolecular inclusion compounds", "Channel lattice complexes", "Layer-type complexes", "Metal complexes"]
            },
            correct: 0
        },
        {
            q: {
                ar: "يتم تحليل الـ Complexes لتحديد:",
                en: "Complexes are analyzed to determine:"
            },
            opts: {
                ar: ["شكل البلورة فقط", "النسبة الكمية وثابت الاستقرار (Stoichiometric ratio & Stability constant)", "درجة الانصهار فقط", "سرعة الترسيب"],
                en: ["Crystal shape only", "Stoichiometric ratio & Stability constant", "Melting point only", "Sedimentation rate"]
            },
            correct: 1
        },
        {
            q: {
                ar: "في منحنى الذوبانية (Solubility Method)، ماذا تمثل النقطة (B)؟",
                en: "In the Solubility Method graph, what does point (B) represent?"
            },
            opts: {
                ar: ["الذوبانية الذاتية للدواء", "تحول كل الدواء إلى مركب", "بداية الترسيب الكلي", "حالة التشبع بالدواء والمركب (Saturation limit)"],
                en: ["Intrinsic solubility of the drug", "Conversion of all drug to complex", "Start of total precipitation", "Saturation limit of Drug-Ligand"]
            },
            correct: 3
        },
        {
            q: {
                ar: "كيف يؤثر الارتباط بالبروتين (Protein Binding) على مدة بقاء الدواء في الجسم؟",
                en: "How does Protein Binding affect the duration of action of a drug?"
            },
            opts: {
                ar: ["يقصر من مدة تأثيره جداً", "يطيل من مدة تأثير الدواء (Prolongs duration of action)", "لا يؤثر على الإطلاق", "يؤدي لطرده فوراً في البول"],
                en: ["Shortens its duration very much", "Prolongs duration of action", "No effect at all", "Causes immediate excretion in urine"]
            },
            correct: 1
        },
        {
            q: {
                ar: "ماذا يحدث عند إعطاء دواءين يرتبطان بقوة ببروتينات البلازما في نفس الوقت؟",
                en: "What happens when two highly protein-bound drugs are co-administered?"
            },
            opts: {
                ar: ["يحدث إزاحة (Displacement) مما قد يزيد من سمية الدواء الحر", "يرتبطان ببعضهما لتكوين مركب آمن", "تزيد سرعة إخراج الدواءين معاً", "يتوقف الكبد عن العمل تماماً"],
                en: ["Displacement occurs, potentially increasing free drug toxicity", "They bind together to form a safe complex", "Excretion rate of both increases", "The liver stops working completely"]
            },
            correct: 0
        }
    ]
});