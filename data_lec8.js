allLectures.push({
    id: 'lec8',
    title: {
        ar: "المحاضرة 8: الاستقرار الفيزيائي للمعلقات",
        en: "Lecture 8: Physical Stability of Suspension"
    },
    revision: [
        {
            title: { ar: "أساسيات المعلقات", en: "Suspension Basics" },
            branches: [
                {
                    type: 'flip',
                    nodeTitle: { ar: "اضغط لتعرف: ما هو المعلق (Suspension)؟", en: "Tap: What is a Suspension?" },
                    content: {
                        ar: "هو نظام غير متجانس (Heterogeneous) يتكون من طورين، حيث تتوزع الجزيئات الصلبة (الطور الداخلي) بانتظام خلال سائل (الطور الخارجي) بمساعدة عامل تعليق.",
                        en: "Heterogeneous 2-phase system where solid particles (internal phase) are dispersed uniformly throughout a liquid (external phase) using a suspending agent."
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "التصنيف حسب الطبيعة الكهربائية (مهم)", en: "Electrokinetic Classification (Important)" },
                    content: {
                        ar: "تُصنف المعلقات بناءً على الطبيعة الكهربائية الحركية للجسيمات الصلبة إلى:<br>1. <b>Flocculated suspensions</b> (معلقات متندفة).<br>2. <b>Deflocculated suspensions</b> (معلقات غير متندفة).",
                        en: "Classified based on Electrokinetic nature of solid particles into:<br>1. <b>Flocculated</b> suspensions.<br>2. <b>Deflocculated</b> suspensions."
                    }
                },
                {
                    type: 'table',
                    nodeTitle: { ar: "المميزات والعيوب", en: "Advantages & Disadvantages" },
                    content: {
                        ar: `<table>
                                <tr><th>المميزات (Advantages)</th><th>العيوب (Disadvantages)</th></tr>
                                <tr><td>مناسب للأدوية غير القابلة للذوبان.</td><td>الاستقرار الفيزيائي والترسيب (Sedimentation).</td></tr>
                                <tr><td>يحسن ثبات بعض الأدوية (مثال: Procaine penicillin G أفضل من Penicillin G).</td><td>دقة الجرعة (Dose accuracy) غير مضمونة.</td></tr>
                                <tr><td>يخفي الطعم السيء (مثال: Chloramphenicol palmitate).</td><td>النمو الميكروبي (لأنه شكل صيدلاني سائل).</td></tr>
                                <tr><td>إطالة تحرر الدواء (Depot system / Slow release).</td><td></td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Advantages</th><th>Disadvantages</th></tr>
                                <tr><td>For insoluble drugs.</td><td>Physical stability and sedimentation.</td></tr>
                                <tr><td>Improve stability (e.g., Procaine penicillin G over Penicillin G).</td><td>Dose accuracy issues.</td></tr>
                                <tr><td>Mask unpleasant taste (e.g., Chloramphenicol palmitate).</td><td>Microbial growth.</td></tr>
                                <tr><td>Prolong drug release (Depot system).</td><td></td></tr>
                             </table>`
                    }
                }
            ]
        },
        {
            title: { ar: "تأثير الإلكتروليتات والترسيب", en: "Electrolytes & Sedimentation" },
            branches: [
                {
                    type: 'table',
                    nodeTitle: { ar: "تركيز الإلكتروليتات (مهم جداً)", en: "Electrolyte Concentration (Very Important)" },
                    content: {
                        ar: `<table>
                                <tr><th>التركيز</th><th>القوى السائدة</th><th>النتيجة (النظام)</th></tr>
                                <tr><td>منخفض (Low)</td><td>قوى التنافر (Repulsive forces)</td><td>الجزيئات مستقلة <b>(Deflocculated)</b>، وتكون راسب صلب (Cake).</td></tr>
                                <tr><td>عالي (High)</td><td>تجاذب فان دير فال (Attractive van der Waals)</td><td>الجزيئات تتجمع <b>(Flocculated)</b>، وتكون تجمعات هشة (Flocs).</td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Concentration</th><th>Forces Predominate</th><th>System Result</th></tr>
                                <tr><td>Low</td><td>Repulsive forces</td><td>Independent particles <b>(Deflocculated)</b>, forms a hard cake.</td></tr>
                                <tr><td>High</td><td>Attractive van der Waals</td><td>Particles form aggregates <b>(Flocculated)</b>.</td></tr>
                             </table>`
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "قانون ستوكس (Stoke's Law)", en: "Stoke's Law" },
                    content: {
                        ar: "<b>الترسيب:</b> استقرار الجزيئات تحت تأثير الجاذبية الأرضية.<br>القانون:<br>$$v = \\frac{d^{2}(\\rho_{s}-\\rho_{o})g}{18\\eta}$$<br><i>* يطبق بشكل عام على المعلقات المخففة (0.5 - 2 جم / 100 مل).</i><br><i>* المعلقات المركزة يحدث بها إعاقة للترسيب (Hindered settling) بسبب تصادم الجزيئات.</i>",
                        en: "<b>Sedimentation:</b> Settling of particles under gravity.<br>Equation:<br>$$v = \\frac{d^{2}(\\rho_{s}-\\rho_{o})g}{18\\eta}$$<br><i>* Applicable to dilute suspensions (0.5 - 2 g / 100 mL).</i><br><i>* Concentrated suspensions have Hindered settling due to collisions.</i>"
                    }
                },
                {
                    type: 'flip',
                    nodeTitle: { ar: "كيف نقلل معدل الترسيب بناءً على القانون؟ (علاقات عكسية وطردية)", en: "How to reduce sedimentation rate based on the law?" },
                    content: {
                        ar: "1- <b>تقليل</b> حجم الجسيمات (علاقة طردية).<br>2- <b>إضافة</b> عوامل تعليق لزيادة لزوجة الوسط $\\eta$ (علاقة عكسية).",
                        en: "1- <b>Decreasing</b> particle size.<br>2- <b>Adding</b> thickening/suspending agents to increase viscosity $\\eta$ (inverse relationship)."
                    }
                }
            ]
        },
        {
            title: { ar: "معاملات الاستقرار الفيزيائي", en: "Physical Stability Parameters" },
            branches: [
                {
                    type: 'info',
                    nodeTitle: { ar: "1- حجم الترسيب (Sedimentation Volume - F)", en: "1- Sedimentation Volume (F)" },
                    content: {
                        ar: "هو النسبة بين الحجم النهائي للراسب ($V_u$) إلى الحجم الأصلي للمعلق ($V_0$).<br>$$F = \\frac{V_u}{V_0}$$<br><b>القاعدة الذهبية:</b> كلما زادت هذه النسبة، زادت قابلية التعليق واستقرار الدواء (The larger this fraction, the better the suspendability).",
                        en: "Ratio of ultimate volume of sediment ($V_u$) to initial volume ($V_0$).<br>$$F = \\frac{V_u}{V_0}$$<br><b>Golden Rule:</b> The larger this fraction, the better the suspendability (stability)."
                    }
                },
                {
                    type: 'table',
                    nodeTitle: { ar: "دلالات قيم F", en: "Values of F" },
                    content: {
                        ar: `<table>
                                <tr><th>القيمة</th><th>المعنى</th></tr>
                                <tr><td><b>F = 1</b></td><td>اتزان تندفي (Flocculated equilibrium). لا يوجد ترسيب واضح ولا سائل صافي.</td></tr>
                                <tr><td><b>F < 1</b></td><td>حجم الراسب أقل من الحجم الكلي (مثلاً F=0.5 يعني الراسب يشغل 50%).</td></tr>
                                <tr><td><b>F > 1</b></td><td>حجم الراسب أكبر من الأصلي! بسبب تكون Flocs مسامية ومنتفشة.</td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Value</th><th>Meaning</th></tr>
                                <tr><td><b>F = 1</b></td><td>Flocculated equilibrium. No clear supernatant.</td></tr>
                                <tr><td><b>F < 1</b></td><td>Sediment occupies less volume (e.g., F=0.5 means 50% sediment).</td></tr>
                                <tr><td><b>F > 1</b></td><td>Sediment volume > original volume! Due to loose and fluffy flocs.</td></tr>
                             </table>`
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "2- درجة التندف (Degree of Flocculation - β)", en: "2- Degree of Flocculation (β)" },
                    content: {
                        ar: "النسبة بين حجم الترسيب للمعلق المتندف ($F$) إلى المعلق غير المتندف ($F_\\infty$).<br>$$\\beta = \\frac{F}{F_\\infty}$$<br><b>القاعدة الذهبية:</b> يُفضل أن تكون درجة الـ Flocculation عالية (Higher $\\beta$ = Better stability).<br>إذا كانت $\\beta = 1$ فهذا هو الحد الأدنى.",
                        en: "Ratio of sedimentation volume of flocculated (F) to deflocculated ($F_\\infty$).<br>$$\\beta = \\frac{F}{F_\\infty}$$<br><b>Golden Rule:</b> Higher degree of flocculation is preferred (Higher $\\beta$ = Better stability)."
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: { ar: "كيف يُعرف المعلق (Suspension) صيدلانياً؟", en: "How is a Suspension defined pharmaceutically?" },
            opts: {
                ar: ["نظام متجانس من الجزيئات المذابة", "نظام تتوزع فيه جزيئات صلبة غير ذائبة في سائل خارجي", "مزيج من غاز وسائل", "سائلان غير ممتزجان"],
                en: ["Homogeneous system of dissolved molecules", "System where insoluble solid particles are dispersed in an external liquid", "Mixture of gas and liquid", "Two immiscible liquids"]
            },
            correct: 1
        },
        {
            q: { ar: "أي من التالي يُعتبر من عيوب (Disadvantages) المعلقات؟", en: "Which of the following is considered a Disadvantage of suspensions?" },
            opts: {
                ar: ["الاستقرار الفيزيائي وانفصال النظام (الترسيب)", "إخفاء الطعم السيء", "إطالة تحرر الدواء", "مناسبتها للأدوية غير القابلة للذوبان"],
                en: ["Physical stability and system separation (sedimentation)", "Masking unpleasant taste", "Prolonging drug release", "Suitability for insoluble drugs"]
            },
            correct: 0
        },
        {
            q: { ar: "استخدام Procaine penicillin G بدلاً من Penicillin G في المعلقات هو مثال على:", en: "Using Procaine penicillin G instead of Penicillin G in suspensions is an example of:" },
            opts: {
                ar: ["إخفاء الطعم السيء", "تحسين الثبات للأدوية غير المستقرة في صورة سائلة", "إطالة فترة التحرر", "تحسين لون الدواء"],
                en: ["Masking unpleasant taste", "Improving stability for drugs unstable in soluble form", "Prolonging release time", "Improving drug color"]
            },
            correct: 1
        },
        {
            q: { ar: "استخدام Chloramphenicol palmitate بدلاً من Chloramphenicol يهدف إلى:", en: "Using Chloramphenicol palmitate over Chloramphenicol aims to:" },
            opts: {
                ar: ["إخفاء الطعم السيء (Mask unpleasant taste)", "زيادة الترسيب", "تكوين Cake صلب", "تقليل لزوجة الوسط"],
                en: ["Mask unpleasant taste", "Increase sedimentation", "Form a hard cake", "Decrease medium viscosity"]
            },
            correct: 0
        },
        {
            q: { ar: "بناءً على الطبيعة الكهربائية الحركية (Electrokinetic nature)، تُصنف المعلقات إلى:", en: "Based on Electrokinetic nature, suspensions are classified into:" },
            opts: {
                ar: ["صلبة وسائلة", "فموية وموضعية", "متندفة وغير متندفة (Flocculated & Deflocculated)", "مخففة ومركزة"],
                en: ["Solid and liquid", "Oral and topical", "Flocculated & Deflocculated", "Dilute and concentrated"]
            },
            correct: 2
        },
        {
            q: { ar: "ماذا يحدث عند وجود تركيز منخفض للإلكتروليتات (Low electrolyte concentration)؟", en: "What happens at Low electrolyte concentration?" },
            opts: {
                ar: ["تنتصر قوى التنافر ويتكون نظام Deflocculated (ينتج عنه Cake صلب)", "تنتصر قوى التجاذب ويتكون نظام Flocculated", "يزداد معدل الترسيب فجأة", "يصبح المعلق شفافاً"],
                en: ["Repulsive forces predominate forming a Deflocculated system (forms hard Cake)", "Attractive forces predominate forming a Flocculated system", "Sedimentation rate suddenly increases", "Suspension becomes clear"]
            },
            correct: 0
        },
        {
            q: { ar: "في نظام المعلقات، متى تتكون التجمعات الهشة (Floccules)؟", en: "In suspension systems, when do loose aggregates (Floccules) form?" },
            opts: {
                ar: ["عندما تكون قوى التنافر هي السائدة", "عند تركيز عالي للإلكتروليتات حيث تسود قوى الجذب (Van der Waals)", "عندما تقل لزوجة السائل", "عند زيادة حجم الجسيمات بشكل مفرط"],
                en: ["When repulsive forces predominate", "At high electrolyte concentration where attractive forces (Van der Waals) predominate", "When liquid viscosity decreases", "When particle size excessively increases"]
            },
            correct: 1
        },
        {
            q: { ar: "ما هو تأثير الحركة البراونية (Brownian motion) على الترسيب؟", en: "What is the effect of Brownian motion on sedimentation?" },
            opts: {
                ar: ["تزيد من معدل الترسيب", "تمنع الترسيب، وتصبح أقل أهمية كلما زاد حجم الجسيمات", "تحول المعلق إلى محلول حقيقي", "ليس لها أي تأثير"],
                en: ["Increases sedimentation rate", "Prevents sedimentation, and becomes less important as particle size increases", "Converts suspension to a true solution", "Has no effect"]
            },
            correct: 1
        },
        {
            q: { ar: "الترسيب (Sedimentation) يُعرف بأنه:", en: "Sedimentation is defined as:" },
            opts: {
                ar: ["تطاير الجزيئات", "استقرار أو هبوط الجزيئات تحت تأثير الجاذبية الأرضية", "ذوبان الجزيئات الصلبة في السائل", "تفاعل الجزيئات مع بعضها كيميائياً"],
                en: ["Volatilization of particles", "Settling of particles under gravity", "Dissolution of solid particles in liquid", "Chemical interaction of particles"]
            },
            correct: 1
        },
        {
            q: { ar: "في قانون ستوكس، ما هي العلاقة بين معدل الترسيب ($v$) ولزوجة الوسط ($\\eta$)؟", en: "In Stoke's Law, what is the relationship between sedimentation rate ($v$) and medium viscosity ($\\eta$)?" },
            opts: {
                ar: ["علاقة طردية", "علاقة عكسية (معدل الترسيب يقل بزيادة اللزوجة)", "لا توجد علاقة", "علاقة أسية مساوية لمربع اللزوجة"],
                en: ["Direct relationship", "Inverse relationship (sedimentation rate decreases as viscosity increases)", "No relationship", "Exponential relationship equal to square of viscosity"]
            },
            correct: 1
        },
        {
            q: { ar: "حسب قانون ستوكس، كيف يمكن تقليل معدل الترسيب (Reduce sedimentation rate) لزيادة استقرار المعلق؟", en: "According to Stoke's law, how to reduce sedimentation rate to increase suspension stability?" },
            opts: {
                ar: ["زيادة حجم الجسيمات", "تقليل لزوجة الوسط", "تقليل حجم الجسيمات وإضافة عوامل تزيد اللزوجة", "زيادة الكثافة وتقليل اللزوجة"],
                en: ["Increase particle size", "Decrease medium viscosity", "Decrease particle size and add viscosity-increasing agents", "Increase density and decrease viscosity"]
            },
            correct: 2
        },
        {
            q: { ar: "إلى أي نوع من المعلقات يطبق قانون ستوكس بشكل عام؟", en: "To which type of suspensions is Stoke's law generally applicable?" },
            opts: {
                ar: ["المعلقات المركزة جداً", "المعلقات المخففة (Dilute suspensions) التي تحتوي على 0.5-2 جم/100 مل", "المعلقات التي لا تحتوي على ماء", "الأنظمة الغازية فقط"],
                en: ["Highly concentrated suspensions", "Dilute suspensions containing 0.5-2 g/100 mL", "Non-aqueous suspensions", "Gaseous systems only"]
            },
            correct: 1
        },
        {
            q: { ar: "ماذا يحدث للترسيب في المعلقات المركزة (Concentrated suspensions)؟", en: "What happens to sedimentation in Concentrated suspensions?" },
            opts: {
                ar: ["يزداد بشكل لا نهائي", "يحدث إعاقة للترسيب (Hindered settling) بسبب تصادم الجزيئات", "ينعدم الترسيب تماماً", "تطفو الجزيئات على السطح"],
                en: ["Increases infinitely", "Hindered settling occurs due to particle collisions", "Sedimentation stops completely", "Particles float to the surface"]
            },
            correct: 1
        },
        {
            q: { ar: "حجم الترسيب (Sedimentation Volume - $F$) يعبر عن:", en: "Sedimentation Volume ($F$) represents:" },
            opts: {
                ar: ["النسبة بين وزن الراسب إلى وزن السائل", "النسبة بين الحجم النهائي للراسب ($V_u$) إلى الحجم الأصلي للمعلق ($V_0$)", "حاصل ضرب الحجم في اللزوجة", "حجم الغاز المتصاعد من المعلق"],
                en: ["Ratio of sediment weight to liquid weight", "Ratio of ultimate sediment volume ($V_u$) to initial suspension volume ($V_0$)", "Product of volume and viscosity", "Volume of gas released from suspension"]
            },
            correct: 1
        },
        {
            q: { ar: "ما هي القاعدة الذهبية الخاصة بحجم الترسيب (F) للحكم على استقرار المعلق؟", en: "What is the golden rule regarding Sedimentation Volume (F) for suspension stability?" },
            opts: {
                ar: ["كلما قلت قيمة F زاد الاستقرار", "كلما زادت هذه النسبة (The larger this fraction), زادت قابلية التعليق والاستقرار", "يجب أن تكون F مساوية للصفر دائماً", "لا تعبر F عن الاستقرار"],
                en: ["The smaller F, the higher stability", "The larger this fraction, the better the suspendability (stability)", "F must always be zero", "F does not indicate stability"]
            },
            correct: 1
        },
        {
            q: { ar: "ماذا تعني القيمة $F = 1$ في المعلقات؟", en: "What does the value $F = 1$ mean in suspensions?" },
            opts: {
                ar: ["راسب صلب غير قابل لإعادة التعليق", "المعلق في حالة اتزان تندفي (Flocculated equilibrium) ولا يوجد سائل صافي", "نصف المعلق قد ترسب", "تحلل المادة الفعالة"],
                en: ["Hard non-resuspendable cake", "Flocculated equilibrium with no clear supernatant", "Half of the suspension has settled", "Degradation of active ingredient"]
            },
            correct: 1
        },
        {
            q: { ar: "هل يمكن أن تكون قيمة حجم الترسيب $F > 1$؟ ولماذا؟", en: "Can the sedimentation volume value be $F > 1$? Why?" },
            opts: {
                ar: ["مستحيل فيزيائياً", "نعم، بسبب خطأ في القياس", "نعم، لأن تكون الـ Flocs يجعل الراسب منتفشاً ومسامياً فيأخذ حجماً أكبر من الحجم الأصلي", "لا، أقصى قيمة هي 1"],
                en: ["Physically impossible", "Yes, due to a measurement error", "Yes, because flocs formation makes the sediment fluffy and porous, taking more volume than original", "No, maximum value is 1"]
            },
            correct: 2
        },
        {
            q: { ar: "كيف يتم تعريف درجة التندف (Degree of Flocculation - $\\beta$)؟", en: "How is the Degree of Flocculation ($\\beta$) defined?" },
            opts: {
                ar: ["النسبة بين حجم الترسيب للمعلق المتندف ($F$) إلى المعلق غير المتندف ($F_\\infty$)", "النسبة بين اللزوجة والكثافة", "الفرق بين الحجم الأصلي والنهائي", "حجم الراسب مقسوماً على وزن الجزيئات"],
                en: ["Ratio of sedimentation volume of flocculated ($F$) to deflocculated ($F_\\infty$) suspension", "Ratio of viscosity to density", "Difference between original and final volume", "Sediment volume divided by particle weight"]
            },
            correct: 0
        },
        {
            q: { ar: "إذا كانت أحجام الترسيب للنظام المتندف وغير المتندف متساوية، فما هي قيمة $\\beta$؟", en: "If sedimentation volumes for flocculated and deflocculated systems are equal, what is the value of $\\beta$?" },
            opts: {
                ar: ["0", "0.5", "1 (وهو الحد الأدنى Minimum)", "2"],
                en: ["0", "0.5", "1 (Which is the minimum)", "2"]
            },
            correct: 2
        },
        {
            q: { ar: "للحصول على أفضل استقرار للمعلق (Better suspendability)، أيهما نفضل بالنسبة لدرجة التندف $\\beta$؟", en: "For the best suspension stability (Better suspendability), what is preferred regarding the degree of flocculation $\\beta$?" },
            opts: {
                ar: ["درجة تندف منخفضة جداً", "درجة تندف عالية (Higher $\\beta$ = Better stability)", "أن تكون سالبة", "لا يهم قيمة $\\beta$"],
                en: ["Very low degree of flocculation", "Higher degree of flocculation (Higher $\\beta$ = Better stability)", "To be negative", "The value of $\\beta$ doesn't matter"]
            },
            correct: 1
        }
    ]
});