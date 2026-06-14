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
                    type: 'flip',
                    nodeTitle: { ar: "ما هو الـ Micromeritics؟ (اضغط للقلب)", en: "What is Micromeritics? (Tap)" },
                    content: {
                        ar: "هو علم دراسة سلوك وخصائص الجسيمات الصغيرة.",
                        en: "The science of the behavior and properties of small particles."
                    }
                },
                {
                    type: 'compare',
                    val1Title: { ar: "الخواص الأساسية (Fundamental)", en: "Fundamental Properties" },
                    val1: { ar: "حجم الجزيئات (Size)<br>الحجم (Volume)<br>العدد (Number)<br>الشكل (Shape)<br>مساحة السطح (Surface area)", en: "Size, Volume, Number, Shape, Surface area." },
                    val2Title: { ar: "الخواص المشتقة (Derived)", en: "Derived Properties" },
                    val2: { ar: "تعتمد على الأساسية وهي:<br>1. Packing geometry<br>2. المسامية (Porosity)<br>3. الكثافة (Density)<br>4. Bulkiness<br>5. خصائص التدفق (Flow property)", en: "Based on fundamental:<br>1. Packing geometry<br>2. Porosity<br>3. Density<br>4. Bulkiness<br>5. Flow property" }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "الأهمية الصيدلانية (الاستخدامات)", en: "Pharmaceutical Importance" },
                    content: {
                        ar: "💊 <b>تصنيع الأقراص:</b> تؤثر على الانسيابية والانضغاط.<br>🧪 <b>المعلقات (Suspensions):</b> تؤثر على سرعة الترسيب والاستقرار.<br>⚙️ <b>خلط المساحيق:</b> تمنع الانفصال (Segregation).<br>📉 <b>سرعة الامتصاص:</b> حجم الجسيمات يتناسب عكسياً مع مساحة السطح، مما يؤثر على الامتصاص.",
                        en: "💊 <b>Tableting:</b> Affects flow & compressibility.<br>🧪 <b>Suspensions:</b> Affects sedimentation rate.<br>⚙️ <b>Powder mixing:</b> Avoids segregation.<br>📉 <b>Absorption:</b> Size is inversely proportional to surface area, affecting absorption rate."
                    }
                }
            ]
        },
        {
            title: { ar: "حجم الجسيمات وطرق التحليل", en: "Particle Size & Analysis Methods" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "أنواع القطر المكافئ (Equivalent Diameter)", en: "Kinds of Particle Diameter" },
                    content: {
                        ar: "لأن الجسيمات غير منتظمة الشكل، نعتبرها كرة متكافئة:<br>📏 <b>Surface diameter:</b> كرة لها نفس مساحة سطح الجسيم.<br>🧊 <b>Volume diameter:</b> كرة لها نفس حجم الجسيم.<br>⏱️ <b>Stoke's diameter:</b> كرة لها نفس سرعة الترسيب.",
                        en: "Since particles are irregular, we approximate to a sphere:<br>📏 <b>Surface diameter:</b> Same surface area.<br>🧊 <b>Volume diameter:</b> Same volume.<br>⏱️ <b>Stoke's diameter:</b> Same sedimentation rate."
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "على أي أساس نختار نوع القطر؟", en: "How to choose diameter expression?" },
                    content: {
                        ar: "1. <b>الطريقة المستخدمة</b> في القياس.<br>2. <b>الغرض من المسحوق:</b><br>- في المعلقات (Suspensions) نستخدم <b>Stoke's diameter</b>.<br>- في الممتزات (Adsorbents) نستخدم <b>Surface diameter</b>.",
                        en: "1. <b>Method used.</b><br>2. <b>Purpose:</b><br>- Suspensions use <b>Stoke's diameter</b>.<br>- Adsorbents use <b>Surface diameter</b>."
                    }
                },
                {
                    type: 'table',
                    nodeTitle: { ar: "جدول طرق التحليل وحجم الجسيمات المقاسة", en: "Methods of Analysis & Size Ranges" },
                    content: {
                        ar: `<table>
                                <tr><th>الطريقة (Method)</th><th>الحجم (µm)</th></tr>
                                <tr><td>Electron microscopy</td><td>0.01 - 1.0</td></tr>
                                <tr><td>Optical microscope</td><td>0.5 - 100</td></tr>
                                <tr><td>Electronic / Sedimentation</td><td>0.5 - 500</td></tr>
                                <tr><td>Sieving (النخل)</td><td>50 - 10,000</td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Method</th><th>Size range (µm)</th></tr>
                                <tr><td>Electron microscopy</td><td>0.01 - 1.0</td></tr>
                                <tr><td>Optical microscope</td><td>0.5 - 100</td></tr>
                                <tr><td>Electronic / Sedimentation</td><td>0.5 - 500</td></tr>
                                <tr><td>Sieving</td><td>50 - 10,000</td></tr>
                             </table>`
                    }
                }
            ]
        },
        {
            title: { ar: "تحليل النخل وتمثيل البيانات", en: "Sieving & Data Presentation" },
            branches: [
                {
                    type: 'info',
                    nodeTitle: { ar: "النخل (Sieving)", en: "Sieving Analysis" },
                    content: {
                        ar: "طريقة بسيطة وسريعة.<br>نستخدم 6-8 مناخل (Coarsest في الأعلى).<br><b>Mesh number:</b> عدد الفتحات في البوصة الطولية، ويتناسب *عكسياً* مع حجم الجسيمات.<br>التدرج في المناخل القياسية يعتمد على $\\sqrt{2}$.",
                        en: "Simple/quick technique.<br>Uses 6-8 sieves (Coarsest on top).<br><b>Mesh number:</b> Number of openings per linear inch, *inversely* proportional to particle size.<br>Progression is based on $\\sqrt{2}$."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "طرق الرسم البياني", en: "Graph Forms" },
                    content: {
                        ar: "📊 <b>المدرج التكراري (Histogram):</b> نرسم فتحة المنخل (X) مقابل نسبة الوزن المحتجزة (Y).<br>📈 <b>منحنى التوزيع (Frequency Curve):</b> نرسم متوسط حجم الجسيم (X) مقابل نسبة الوزن المحتجزة (Y).",
                        en: "📊 <b>Histogram:</b> Screen opening (X) vs Weight % retained (Y).<br>📈 <b>Frequency Curve:</b> Average particle size (X) vs Weight % retained (Y)."
                    }
                }
            ]
        },
        {
            title: { ar: "خصائص التدفق (Flow Properties)", en: "Flow Properties" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "معايير التنبؤ بالتدفق", en: "Parameters for prediction" },
                    content: {
                        ar: "يمكن التنبؤ بانسيابية المسحوق بثلاث طرق غير مباشرة:<br>1. زاوية الاستقرار (Angle of repose).<br>2. معدل التدفق (Flow rate).<br>3. الكثافة الظاهرية (Bulk density).",
                        en: "Predicted indirectly by:<br>1. Angle of repose.<br>2. Flow rate.<br>3. Bulk density."
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "زاوية الاستقرار (Angle of Repose)", en: "Angle of Repose" },
                    content: {
                        ar: "تقيس قوى الاحتكاك التي تعيق التدفق. (كلما زادت الخشونة، زادت الزاوية، وساء التدفق).<br>القانون: $\\tan \\Theta = \\frac{2H}{D}$",
                        en: "Measures frictional forces opposing flow. (Rougher surface = higher angle = poor flow).<br>Equation: $\\tan \\Theta = \\frac{2H}{D}$"
                    }
                },
                {
                    type: 'compare',
                    val1Title: { ar: "Flow rate", en: "Flow rate" },
                    val1: { ar: "الوزن / الزمن بالثواني.<br>كلما <b>زادت</b> هذه القيمة، كان التدفق <b>أفضل</b>.", en: "Weight / time in sec.<br>The <b>larger</b> the value, the <b>better</b> the flowability." },
                    val2Title: { ar: "Bulk density", en: "Bulk density" },
                    val2: { ar: "الوزن / الحجم الكلي ($g/cm^3$).<br>مقياس للاحتكاك والالتصاق بين الجسيمات.", en: "Weight / Bulk volume ($g/cm^3$).<br>Measure of interparticle friction and adhesion." }
                },
                {
                    type: 'table',
                    nodeTitle: { ar: "جداول التقييم (مهمة جداً)", en: "Evaluation Tables (Very Important)" },
                    content: {
                        ar: `<table>
                                <tr><th>Flow Flowability</th><th>Angle of Repose</th><th>Carr's Index (%)</th></tr>
                                <tr><td>ممتاز (Excellent)</td><td>أقل من 25</td><td>5 - 15</td></tr>
                                <tr><td>جيد (Good)</td><td>25 - 30</td><td>16 - 20</td></tr>
                                <tr><td>مقبول (Passable)</td><td>30 - 40</td><td>21 - 30</td></tr>
                                <tr><td>سيء (Poor)</td><td>أكبر من 40</td><td>أكبر من 31</td></tr>
                             </table><br>
                             <b>ملاحظة لـ Hausner factor:</b><br>أقل من 1.2 = ممتاز | أكبر من 1.6 = متماسك/سيء.`,
                        en: `<table>
                                <tr><th>Flowability</th><th>Angle of Repose</th><th>Carr's Index (%)</th></tr>
                                <tr><td>Excellent</td><td>< 25</td><td>5 - 15</td></tr>
                                <tr><td>Good</td><td>25 - 30</td><td>16 - 20</td></tr>
                                <tr><td>Passable</td><td>30 - 40</td><td>21 - 30</td></tr>
                                <tr><td>Poor</td><td>> 40</td><td>> 31</td></tr>
                             </table><br>
                             <b>Hausner factor:</b><br>< 1.2 = Good | > 1.6 = Cohesive/Bad flow.`
                    }
                },
                {
                    type: 'flip',
                    nodeTitle: { ar: "قانون Carr's Index (اضغط للقلب)", en: "Carr's Index Equation (Tap)" },
                    content: {
                        ar: "$$ \\% Compressibility = \\frac{D_f - D_0}{D_f} \\times 100 $$",
                        en: "$$ \\% Compressibility = \\frac{D_f - D_0}{D_f} \\times 100 $$"
                    }
                },
                {
                    type: 'other',
                    nodeTitle: { ar: "تحسين انسيابية المسحوق (Glidants)", en: "Improvement of Flowability" },
                    content: {
                        ar: "يمكن إضافة الـ <b>Glidants</b> التي تعمل عن طريق:<br>1. جعل السطح ناعماً.<br>2. تقليل الشحنات الكهروستاتيكية.<br>3. تقليل الرطوبة الممتصة على السطح.",
                        en: "Add <b>Glidants</b> which work by:<br>1. Making surface smooth.<br>2. Reducing electrostatic charge.<br>3. Reducing adsorbed moisture."
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
                ar: "أي من التالي يُصنف كـ Derived Property (خاصية مشتقة)؟",
                en: "Which of the following is classified as a Derived Property?"
            },
            opts: {
                ar: ["حجم الجسيمات (Particle size)", "المسامية (Porosity)", "شكل الجسيمات (Particle shape)", "عدد الجسيمات (Particle number)"],
                en: ["Particle size", "Porosity", "Particle shape", "Particle number"]
            },
            correct: 1
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
                ar: "لأن شكل الجسيمات في الطبيعة غير منتظم، يتم تقريبها إلى شكل هندسي محدد لحساب الـ Equivalent diameter، ما هو؟",
                en: "Because particles are irregular, they are approximated to a specific geometric shape to determine Equivalent diameter. What is it?"
            },
            opts: {
                ar: ["مكعب (Cube)", "كرة (Sphere)", "أسطوانة (Cylinder)", "هرم (Pyramid)"],
                en: ["Cube", "Sphere", "Cylinder", "Pyramid"]
            },
            correct: 1
        },
        {
            q: {
                ar: "في المعلقات (Suspensions)، أي نوع من الأقطار يفضل استخدامه للتعبير عن حجم الجسيمات؟",
                en: "In suspensions, which type of diameter expression is preferred?"
            },
            opts: {
                ar: ["Surface diameter", "Volume diameter", "Stoke's diameter", "Equivalent diameter"],
                en: ["Surface diameter", "Volume diameter", "Stoke's diameter", "Equivalent diameter"]
            },
            correct: 2
        },
        {
            q: {
                ar: "بالنسبة للمواد الممتزة (Adsorbents)، أي نوع من الأقطار يعطي التعبير الأدق؟",
                en: "For adsorbents, which diameter expression is the most appropriate?"
            },
            opts: {
                ar: ["Surface diameter", "Volume diameter", "Stoke's diameter", "Sieving diameter"],
                en: ["Surface diameter", "Volume diameter", "Stoke's diameter", "Sieving diameter"]
            },
            correct: 0
        },
        {
            q: {
                ar: "أي طريقة لتحليل حجم الجسيمات يمكنها قياس الجسيمات في نطاق (50 إلى 10,000 µm)؟",
                en: "Which method of particle size analysis is used for the range (50 to 10,000 µm)?"
            },
            opts: {
                ar: ["الميكروسكوب الإلكتروني", "الميكروسكوب الضوئي", "النخل (Sieving)", "الترسيب (Sedimentation)"],
                en: ["Electron microscopy", "Optical microscope", "Sieving", "Sedimentation"]
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
                ar: "في تحليل النخل، التدرج بين أحجام فتحات المناخل القياسية يعتمد على ضرب الفتحة السابقة في كام؟",
                en: "In sieving analysis, the progression of standard screen sizes is based on what value?"
            },
            opts: {
                ar: ["الجذر التربيعي لـ 3", "الجذر التربيعي لـ 2 ($\\sqrt{2}$)", "القسمة على 2", "ضرب القيمة في 10"],
                en: ["Square root of 3", "Square root of 2 ($\\sqrt{2}$)", "Division by 2", "Multiplying by 10"]
            },
            correct: 1
        },
        {
            q: {
                ar: "أي رسم بياني يعتمد على رسم (Average particle size) مقابل (Weight % retained)؟",
                en: "Which graph is plotted by using (Average particle size) versus (Weight % retained)?"
            },
            opts: {
                ar: ["المدرج التكراري (Histogram)", "منحنى التوزيع التكراري (Frequency size distribution)", "المنحنى التراكمي (Cumulative oversize)", "المنحنى الطولي (Line graph)"],
                en: ["Histogram", "Frequency size distribution curve", "Cumulative oversize curve", "Line graph"]
            },
            correct: 1
        },
        {
            q: {
                ar: "يمكن استخدام عدة عوامل كمؤشر غير مباشر للتنبؤ بانسيابية المسحوق، عدا واحدة:",
                en: "Several indirect parameters can predict powder flowability EXCEPT one:"
            },
            opts: {
                ar: ["Angle of repose", "Flow rate", "Bulk density", "Optical microscopy"],
                en: ["Angle of repose", "Flow rate", "Bulk density", "Optical microscopy"]
            },
            correct: 3
        },
        {
            q: {
                ar: "كلما كان سطح الجسيمات خشناً وغير منتظم، ماذا يحدث لزاوية الاستقرار (Angle of Repose)؟",
                en: "The rougher and more irregular the surface granules are, what happens to the angle of repose?"
            },
            opts: {
                ar: ["تقل الزاوية", "تزيد الزاوية ويسوء التدفق", "تزيد الزاوية ويتحسن التدفق", "لا تتأثر"],
                en: ["Decreases", "Increases and flow becomes poor", "Increases and flow improves", "Not affected"]
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
                ar: "ما هي العلاقة بين معدل التدفق (Flow Rate) وانسيابية المسحوق؟",
                en: "What is the relationship between Flow Rate and powder flowability?"
            },
            opts: {
                ar: ["القيم الأكبر تدل على تدفق أفضل", "القيم الأكبر تدل على تدفق أسوأ", "القيم الأقل تدل على تدفق أفضل", "لا توجد علاقة رياضية"],
                en: ["Larger value = better flow", "Larger value = poor flow", "Smaller value = better flow", "No mathematical relation"]
            },
            correct: 0
        },
        {
            q: {
                ar: "يتم حساب الكثافة الظاهرية (Bulk density) عن طريق قسمة وزن المسحوق على:",
                en: "Bulk density is calculated by dividing the mass of a powder by:"
            },
            opts: {
                ar: ["سرعة الترسيب", "الحجم الكلي (Bulk volume)", "زاوية الاستقرار", "زمن التدفق"],
                en: ["Sedimentation velocity", "Bulk volume", "Angle of repose", "Flow time"]
            },
            correct: 1
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
                ar: "إذا كان Carr's index أكبر من 31، فهذا يعني أن التدفق:",
                en: "If Carr's index is greater than 31, this means the flow is:"
            },
            opts: {
                ar: ["ممتاز", "جيد", "مقبول", "ضعيف (Poor)"],
                en: ["Excellent", "Good", "Passable", "Poor"]
            },
            correct: 3
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
        },
        {
            q: {
                ar: "أي من الإجراءات التالية يعتبر تقنية لتحسين انسيابية المسحوق (Flowability)؟",
                en: "Which of the following is considered a technique to improve powder flowability?"
            },
            opts: {
                ar: ["إضافة الرطوبة", "تغيير الشحنات السطحية أو إضافة Glidants", "طحن المسحوق لأحجام عشوائية", "زيادة قوى الاحتكاك بين الجسيمات"],
                en: ["Adding moisture", "Alteration of surface charges or adding Glidants", "Milling powder to random sizes", "Increasing interparticle friction"]
            },
            correct: 1
        }
    ]
});