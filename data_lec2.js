allLectures.push({
    id: 'lec2',
    title: {
        ar: "المحاضرة 2: علم الجسيمات (Micromeritics)",
        en: "Lecture 2: Micromeritics"
    },
    revision: [
        {
            title: { ar: "مقدمة وأهمية الـ Micromeritics", en: "Introduction & Importance" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "التعريف والخواص", en: "Definition & Properties" },
                    content: {
                        ar: "الـ Micromeritics هو علم دراسة سلوك وخصائص الجسيمات الصغيرة.<br><b>الخواص الأساسية:</b> حجم الجزيئات، حجمها، عددها، شكلها، ومساحة سطحها.<br><b>الخواص المشتقة (أهمها):</b> خصائص التدفق (Flow property).",
                        en: "Micromeritics is the science of the behavior and properties of small particles.<br><b>Fundamental properties:</b> Particle size, volume, number, shape, and surface area.<br><b>Derived properties (Most important):</b> Flow property."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "الأهمية الصيدلانية", en: "Pharmaceutical Importance" },
                    content: {
                        ar: "ترتبط بالخصائص الفيزيائية والكيميائية والدوائية وتؤثر على تحرر الدواء.<br>تمنع الانفصال في خلط المساحيق.<br>تؤثر على انسيابية الأقراص وانضغاطها.<br>تؤثر على سرعة الترسيب في المعلقات.<br>مساحة السطح تتناسب عكسياً مع حجم الجسيمات وتؤثر على معدل الامتصاص.",
                        en: "Relates to physical, chemical, and pharmacological properties and affects drug release.<br>Avoids segregation in powder mixing.<br>Affects flow properties and compressibility in tableting.<br>Affects sedimentation rate in suspensions.<br>Particle size is inversely proportional to surface area, affecting absorption."
                    }
                }
            ]
        },
        {
            title: { ar: "حجم الجسيمات (Particle Size)", en: "Particle Size" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "التعريف والأنواع", en: "Definition & Types" },
                    content: {
                        ar: "<b>التعريف:</b> هو قطر كرة مكافئة للجسيم في الوزن أو الحجم أو مساحة السطح أو سرعة الترسيب.<br><b>Surface diameter:</b> قطر كرة لها نفس مساحة سطح الجسيم.<br><b>Volume diameter:</b> قطر كرة لها نفس حجم الجسيم.<br><b>Stoke's diameter:</b> قطر كرة لها نفس سرعة الترسيب.",
                        en: "<b>Definition:</b> Diameter of a sphere equivalent to the particle in weight, volume, surface area, or sedimentation velocity.<br><b>Surface diameter:</b> Sphere having the same surface area.<br><b>Volume diameter:</b> Sphere having the same volume.<br><b>Stoke's diameter:</b> Sphere having the same sedimentation rate."
                    }
                },
                {
                    type: 'other',
                    nodeTitle: { ar: "طرق التحليل", en: "Methods of Analysis" },
                    content: {
                        ar: "يتم تحديد الحجم بناءً على الغرض والطريقة المستخدمة. الطرق تشمل:<br>المجهر (Optical أو Electron).<br>الترسيب (Sedimentation).<br>الطرق الإلكترونية (مثل Coulter counter).<br>النخل (Sieving).",
                        en: "Expression depends on the method and purpose. Methods include:<br>Microscopy (Optical or Electron).<br>Sedimentation.<br>Electronic (Coulter counter).<br>Sieving."
                    }
                }
            ]
        },
        {
            title: { ar: "تحليل النخل وتمثيل البيانات", en: "Sieving & Data Presentation" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "النخل (Sieving)", en: "Sieving Analysis" },
                    content: {
                        ar: "طريقة بسيطة وسريعة تعتمد على تصنيف الحجم ثم وزن كل جزء.<br>تستخدم 6-8 مناخل (Coarsest في الأعلى).<br><b>Mesh number:</b> عدد الفتحات في البوصة الطولية، ويتناسب عكسياً مع حجم الجسيمات.<br>التدرج في المناخل القياسية يعتمد على $\\sqrt{2}$.",
                        en: "Simple/quick technique using size classification followed by weighing.<br>Uses 6-8 sieves (Coarsest on top).<br><b>Mesh number:</b> Number of openings per linear inch, inversely proportional to particle size.<br>Progression is based on $\\sqrt{2}$."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "القانون والرسومات البيانية", en: "Equation & Graphs" },
                    content: {
                        ar: "<b>حساب القطر المتوسط:</b><br>$$D_{av} = \\frac{\\Sigma(average~particle~size \\times weight~\\%~retained)}{\\Sigma weight~retained}$$.<br><br><b>طرق الرسم:</b><br>1. المدرج التكراري (Histogram): فتحة المنخل مقابل نسبة الوزن.<br>2. منحنى التوزيع التكراري: متوسط الحجم مقابل نسبة الوزن.",
                        en: "<b>Average Diameter:</b><br>$$D_{av} = \\frac{\\Sigma(average~particle~size \\times weight~\\%~retained)}{\\Sigma weight~retained}$$.<br><br><b>Graph Forms:</b><br>1. Histogram: screen opening vs weight % retained.<br>2. Frequency curve: average particle size vs weight % retained."
                    }
                }
            ]
        },
        {
            title: { ar: "خصائص التدفق (Flow Properties)", en: "Flow Properties" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "العوامل وزاوية الاستقرار (Angle of Repose)", en: "Factors & Angle of Repose" },
                    content: {
                        ar: "يعتمد التدفق على الحجم، الشكل، الكثافة، الرطوبة، والشحنات.<br><b>Angle of Repose:</b> هي أقصى زاوية بين سطح الكومة والمستوى الأفقي. قانونها هو:<br>$$\\tan \\Theta = \\frac{2H}{D}$$.<br><b>تقييم الزاوية:</b><br>أقل من 25: ممتاز (Excellent).<br>25-30: جيد (Good).<br>30-40: مقبول (Passable).<br>أكبر من 40: ضعيف جداً (Very poor).",
                        en: "Flow depends on size, shape, density, moisture, and charge.<br><b>Angle of Repose:</b> Maximum angle between heap surface and horizontal plane. Equation:<br>$$\\tan \\Theta = \\frac{2H}{D}$$.<br><b>Angle Evaluation:</b><br>< 25: Excellent.<br>25-30: Good.<br>30-40: Passable.<br>> 40: Very poor."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "التقييمات والتحسين (Hausner & Carr's)", en: "Evaluation & Glidants" },
                    content: {
                        ar: "<b>Hausner factor:</b> أقل من 1.2 يعني تدفق جيد، أكبر من 1.6 يعني تدفق سيء متماسك.<br><b>Carr's index:</b> 5-15 ممتاز، 16-20 جيد، 21-30 مقبول، أكبر من 31 ضعيف.<br><b>الـ Glidants:</b> تحسن التدفق عن طريق جعل السطح ناعماً، وتقليل الشحنات والرطوبة.",
                        en: "<b>Hausner factor:</b> < 1.2 indicates good flow, > 1.6 indicates cohesive/bad flow.<br><b>Carr's index:</b> 5-15 Excellent, 16-20 Good, 21-30 Passable, > 31 poor.<br><b>Glidants:</b> Improve flow by smoothing surface, reducing electrostatic charge, and reducing moisture."
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: {
                ar: "أي من الخصائص التالية يعتبر من الخصائص الأساسية (Fundamental properties) للمساحيق؟",
                en: "Which of the following is considered a Fundamental property of powders?"
            },
            opts: {
                ar: ["خصائص التدفق (Flow property)", "مسامية المسحوق (Porosity)", "مساحة السطح (Surface area)", "الكثافة (Density)"],
                en: ["Flow property", "Porosity", "Surface area", "Density"]
            },
            correct: 2
        },
        {
            q: {
                ar: "كيف تتناسب مساحة السطح مع حجم الجسيمات؟",
                en: "How is surface area related to particle size?"
            },
            opts: {
                ar: ["تتناسب طردياً", "تتناسب عكسياً", "لا توجد علاقة", "تتساوى معها دائماً"],
                en: ["Directly proportional", "Inversely proportional", "No relationship", "Always equal"]
            },
            correct: 1
        },
        {
            q: {
                ar: "ما هو القطر الذي يعبر عن كرة لها نفس سرعة الترسيب الخاصة بالجسيم؟",
                en: "What is the diameter of a sphere having the same sedimentation rate as the particle?"
            },
            opts: {
                ar: ["Surface diameter", "Volume diameter", "Stoke's diameter", "Equivalent diameter"],
                en: ["Surface diameter", "Volume diameter", "Stoke's diameter", "Equivalent diameter"]
            },
            correct: 2
        },
        {
            q: {
                ar: "ما هي العلاقة بين رقم الـ Mesh وحجم الجسيمات المارة من المنخل؟",
                en: "What is the relationship between Mesh number and the size of particles that will pass?"
            },
            opts: {
                ar: ["تناسب طردي", "تناسب عكسي", "لا علاقة بينهما", "يحدد اللون فقط"],
                en: ["Directly proportional", "Inversely proportional", "No relationship", "Determines color only"]
            },
            correct: 1
        },
        {
            q: {
                ar: "في تحليل النخل، على أي أساس يتم التدرج بين أحجام فتحات المناخل القياسية؟",
                en: "In sieving analysis, on what basis is the progression of standard screen sizes made?"
            },
            opts: {
                ar: ["مضاعفات الرقم 10", "الجذر التربيعي لـ 2 ($\\sqrt{2}$)", "القسمة على 3", "رقم عشوائي"],
                en: ["Multiples of 10", "Square root of 2 ($\\sqrt{2}$)", "Division by 3", "Random number"]
            },
            correct: 1
        },
        {
            q: {
                ar: "أي رسم بياني يعتمد على رسم (Average particle size) مقابل (Weight % retained)؟",
                en: "Which graph is plotted by using (Average particle size) versus (Weight % retained)?"
            },
            opts: {
                ar: ["المدرج التكراري (Histogram)", "منحنى التوزيع التكراري (Frequency size distribution)", "المنحنى التراكمي (Cumulative oversize)", "المتجه الدائري (Pie chart)"],
                en: ["Histogram", "Frequency size distribution curve", "Cumulative oversize curve", "Pie chart"]
            },
            correct: 1
        },
        {
            q: {
                ar: "إذا كانت زاوية الاستقرار (Angle of Repose) لمسحوق تساوي 20 درجة، فكيف توصف انسيابيته؟",
                en: "If the Angle of Repose of a powder is 20 degrees, how is its flowability described?"
            },
            opts: {
                ar: ["ممتاز (Excellent)", "جيد (Good)", "مقبول (Passable)", "ضعيف جداً (Very poor)"],
                en: ["Excellent", "Good", "Passable", "Very poor"]
            },
            correct: 0
        },
        {
            q: {
                ar: "أي من القيم التالية لمعامل Hausner (Hausner factor) تدل على تدفق سيء ومتماسك؟",
                en: "Which of the following Hausner factor values indicates cohesive/bad flowability?"
            },
            opts: {
                ar: ["1.1", "1.0", "1.5", "1.8"],
                en: ["1.1", "1.0", "1.5", "1.8"]
            },
            correct: 3
        },
        {
            q: {
                ar: "إذا كان Carr's index لمسحوق يساوي 10%، فما هو تقييم التدفق؟",
                en: "If Carr's index of a powder is 10%, what is the flow evaluation?"
            },
            opts: {
                ar: ["ممتاز (Excellent)", "مقبول (Passable)", "ضعيف (Poor)", "جيد (Good)"],
                en: ["Excellent", "Passable", "Poor", "Good"]
            },
            correct: 0
        },
        {
            q: {
                ar: "واحدة من الآليات التالية لا تعبر عن طريقة عمل الـ Glidants لتحسين التدفق:",
                en: "One of the following is NOT a mechanism of Glidants to improve flow:"
            },
            opts: {
                ar: ["تنعيم سطح الجسيمات", "تقليل الشحنات الكهروستاتيكية", "زيادة رطوبة السطح", "تقليل الرطوبة الممتصة"],
                en: ["Smoothing particle surface", "Reducing electrostatic charge", "Increasing surface moisture", "Reducing adsorbed moisture"]
            },
            correct: 2
        }
    ]
});
