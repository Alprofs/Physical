allLectures.push({
    id: 'lec8',
    title: {
        ar: "المحاضرة 8: الاستقرار الفيزيائي للمعلقات (Suspension Stability)",
        en: "Lecture 8: Physical Stability of Suspension"
    },
    revision: [
        {
            title: { ar: "تعريف المعلقات وتصنيفها", en: "Definition & Classification" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "التعريف (Definition)", en: "Definition" },
                    content: {
                        ar: "<b>المعلق (Suspension):</b> هو نوع من التشتت (Dispersion) حيث تتوزع الجزيئات الصلبة غير الذائبة (الطور الداخلي - Internal phase) بانتظام خلال السائل (الطور الخارجي - External phase) بمساعدة عامل تعليق (Suspending agent).",
                        en: "<b>Suspension:</b> It is a type of dispersion in which solid particles (internal phase) is dispersed uniformly throughout the liquid (external phase) with the aid of suspending agent."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "التصنيف حسب الطبيعة الكهربائية", en: "Electrokinetic Classification" },
                    content: {
                        ar: "تُصنف المعلقات بناءً على الطبيعة الكهربائية الحركية للجسيمات الصلبة (Electrokinetic nature) إلى:<br>1- معلقات متندفة (Flocculated suspensions).<br>2- معلقات غير متندفة (Deflocculated suspensions).",
                        en: "Suspensions are classified based on the Electrokinetic nature of solid particles into:<br>1- Flocculated suspensions.<br>2- Deflocculated suspensions."
                    }
                }
            ]
        },
        {
            title: { ar: "مميزات وعيوب المعلقات", en: "Advantages & Disadvantages" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "المقارنة", en: "Comparison" },
                    content: {
                        ar: `<table>
                                <tr><th>المميزات (Advantages)</th><th>العيوب (Disadvantages)</th></tr>
                                <tr><td>- مناسب للأدوية غير القابلة للذوبان.</td><td>- الاستقرار الفيزيائي والترسيب (انفصال النظام).</td></tr>
                                <tr><td>- يحسن ثبات بعض الأدوية (مثل Procaine penicillin G أفضل من Penicillin G).</td><td>- دقة الجرعة (Dose accuracy) غير مضمونة دائماً.</td></tr>
                                <tr><td>- يخفي الطعم السيء (مثل Chloramphenicol palmitate).</td><td>- النمو الميكروبي (لأنه شكل صيدلاني سائل).</td></tr>
                                <tr><td>- إطالة تحرر الدواء (Prolong drug release).</td><td></td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Advantages</th><th>Disadvantages</th></tr>
                                <tr><td>- For insoluble drugs.</td><td>- Physical stability and sedimentation (separation).</td></tr>
                                <tr><td>- Improve stability of some drugs (e.g., procaine penicillin G over penicillin G).</td><td>- Dose accuracy issues.</td></tr>
                                <tr><td>- Mask unpleasant taste (e.g., Chloramphenicol palmitate).</td><td>- Microbial growth (liquid dosage form).</td></tr>
                                <tr><td>- Prolong drug release (Depot system).</td><td></td></tr>
                             </table>`
                    }
                }
            ]
        },
        {
            title: { ar: "تأثير الإلكتروليتات على المعلقات", en: "Effect of Electrolytes" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "Deflocculated vs Flocculated", en: "System Comparison" },
                    content: {
                        ar: `<table>
                                <tr><th>التركيز (Concentration)</th><th>القوى السائدة (Forces)</th><th>النتيجة (System)</th></tr>
                                <tr><td>تركيز منخفض للإلكتروليتات (Low electrolyte)</td><td>قوى التنافر هي السائدة (Repulsive forces predominate)</td><td>الجزيئات مستقلة <b>(Deflocculated)</b>، وتكون راسب صلب (Cake).</td></tr>
                                <tr><td>تركيز عالي للإلكتروليتات (High electrolyte)</td><td>قوى التجاذب هي السائدة (Attractive van der Waals predominate)</td><td>الجزيئات تتجمع <b>(Flocculated)</b>، وتكون تجمعات هشة (Flocs).</td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Concentration</th><th>Forces</th><th>System</th></tr>
                                <tr><td>Low electrolyte concentration</td><td>Repulsive forces predominate</td><td>Particles independent <b>(Deflocculated)</b>, forming a hard cake.</td></tr>
                                <tr><td>High electrolyte concentration</td><td>Attractive van der Waals forces predominate</td><td>Particles form aggregates <b>(Flocculated)</b>, forming flocs.</td></tr>
                             </table>`
                    }
                }
            ]
        },
        {
            title: { ar: "الترسيب وقانون ستوكس", en: "Sedimentation & Stoke's Law" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "تعريف الترسيب والقانون", en: "Definition & Equation" },
                    content: {
                        ar: "<b>الترسيب (Sedimentation):</b> هو استقرار أو هبوط الجزيئات تحت تأثير الجاذبية الأرضية في المستحضرات السائلة.<br><b>قانون ستوكس (Stoke's law):</b><br>$$v = \\frac{d^{2}(\\rho_{s}-\\rho_{o})g}{18\\eta}$$",
                        en: "<b>Sedimentation:</b> It is the settling of particles under gravity in liquid preparations.<br><b>Stoke's law:</b><br>$$v = \\frac{d^{2}(\\rho_{s}-\\rho_{o})g}{18\\eta}$$"
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "العلاقات (مهم جداً)", en: "Relationships (Very Important)" },
                    content: {
                        ar: "بناءً على القانون، يمكن <b>تقليل معدل الترسيب</b> (زيادة الاستقرار) عن طريق:<br>1- <b>تقليل</b> حجم الجسيمات (علاقة طردية مع المربع).<br>2- <b>إضافة</b> عوامل تغليظ أو تعليق لزيادة لزوجة الوسط $\\eta$ (علاقة عكسية).",
                        en: "Based on the equation, the rate of sedimentation can be <b>reduced</b> by:<br>1- <b>Decreasing</b> particle size.<br>2- <b>Adding</b> thickening or suspending agents to increase viscosity $\\eta$ (inverse relationship)."
                    }
                }
            ]
        },
        {
            title: { ar: "معاملات استقرار المعلق (F & β)", en: "Stability Parameters (F & β)" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "1- حجم الترسيب (F)", en: "1- Sedimentation Volume (F)" },
                    content: {
                        ar: "<b>القاعدة الذهبية:</b> كلما زادت هذه النسبة، زادت قابلية التعليق واستقرار الدواء.<br><b>The larger this fraction, the better the suspendability (stability).</b>",
                        en: "<b>Golden Rule:</b> <b>The larger this fraction, the better the suspendability (stability).</b>"
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "2- درجة التندف (β)", en: "2- Degree of Flocculation (β)" },
                    content: {
                        ar: "<b>التعريف:</b> هي النسبة بين حجم الترسيب للمعلق المتندف (F) إلى حجم الترسيب للمعلق غير المتندف ($F_{\\infty}$).<br>$$\\beta = \\frac{F}{F_{\\infty}}$$<br><b>القاعدة الذهبية:</b> يُفضل أن تكون درجة الـ Flocculation عالية، لأنه كلما زادت قيمة $\\beta$ كان استقرار المعلق أفضل (Higher $\\beta$ = Better suspendability).",
                        en: "<b>Definition:</b> Ratio of sedimentation volume of flocculated suspension (F) to the sedimentation volume of deflocculated suspension ($F_{\\infty}$).<br>$$\\beta = \\frac{F}{F_{\\infty}}$$<br><b>Golden Rule:</b> Higher degree of flocculation is preferred. Higher $\\beta$ = Better suspendability (stability)."
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: {
                ar: "كيف يُعرف المعلق (Suspension) صيدلانياً؟",
                en: "How is a Suspension defined pharmaceutically?"
            },
            opts: {
                ar: ["سائلان غير ممتزجان", "نظام متجانس من الجزيئات المذابة", "نظام تتوزع فيه جزيئات صلبة في سائل خارجي بمساعدة عامل تعليق", "غاز مذاب في سائل"],
                en: ["Two immiscible liquids", "Homogeneous system of dissolved molecules", "System where solid particles are dispersed in an external liquid with a suspending agent", "Gas dissolved in a liquid"]
            },
            correct: 2
        },
        {
            q: {
                ar: "أي من التالي يُعتبر من عيوب (Disadvantages) المعلقات؟",
                en: "Which of the following is considered a Disadvantage of suspensions?"
            },
            opts: {
                ar: ["إخفاء الطعم السيء", "الاستقرار الفيزيائي وانفصال النظام (الترسيب)", "إطالة تحرر الدواء", "تحسين ثبات الأدوية"],
                en: ["Masking unpleasant taste", "Physical stability and system separation (sedimentation)", "Prolonging drug release", "Improving drug stability"]
            },
            correct: 1
        },
        {
            q: {
                ar: "استخدام Procaine penicillin G بدلاً من Penicillin G في المعلقات يهدف إلى:",
                en: "Using Procaine penicillin G instead of Penicillin G in suspensions aims to:"
            },
            opts: {
                ar: ["إخفاء الطعم السيء", "تحسين الثبات الكيميائي (Improve stability)", "زيادة الترسيب", "تغيير لون المعلق"],
                en: ["Mask unpleasant taste", "Improve stability", "Increase sedimentation", "Change suspension color"]
            },
            correct: 1
        },
        {
            q: {
                ar: "بناءً على الطبيعة الكهربائية (Electrokinetic nature)، تُصنف المعلقات إلى:",
                en: "Based on Electrokinetic nature, suspensions are classified into:"
            },
            opts: {
                ar: ["صلبة وسائلة", "فموية وموضعية", "متندفة وغير متندفة (Flocculated & Deflocculated)", "شفافة ومعتمة"],
                en: ["Solid and liquid", "Oral and topical", "Flocculated & Deflocculated", "Clear and opaque"]
            },
            correct: 2
        },
        {
            q: {
                ar: "ماذا يحدث للنظام عند وجود تركيز منخفض من الإلكتروليتات (Low electrolyte concentration)؟",
                en: "What happens to the system at Low electrolyte concentration?"
            },
            opts: {
                ar: ["تنتصر قوى التنافر ويتكون نظام Deflocculated (ينتج عنه Cake)", "تنتصر قوى التجاذب ويتكون نظام Flocculated", "ينفجر المحلول", "يذوب الدواء تماماً"],
                en: ["Repulsive forces predominate forming a Deflocculated system (forms Cake)", "Attractive forces predominate forming a Flocculated system", "The solution explodes", "The drug dissolves completely"]
            },
            correct: 0
        },
        {
            q: {
                ar: "أي من التالي يمثل تعريف الترسيب (Sedimentation)؟",
                en: "Which of the following represents the definition of Sedimentation?"
            },
            opts: {
                ar: ["تطاير الجزيئات في الهواء", "استقرار أو هبوط الجزيئات تحت تأثير الجاذبية الأرضية", "ذوبان الجزيئات الصلبة في السائل", "تفاعل الجزيئات مع الضوء"],
                en: ["Volatilization of particles in air", "Settling of particles under gravity", "Dissolution of solid particles in liquid", "Interaction of particles with light"]
            },
            correct: 1
        },
        {
            q: {
                ar: "حسب قانون ستوكس، كيف يمكن تقليل معدل الترسيب (Reduce sedimentation rate)؟",
                en: "According to Stoke's law, how can the sedimentation rate be reduced?"
            },
            opts: {
                ar: ["عن طريق زيادة حجم الجسيمات", "عن طريق تقليل لزوجة الوسط", "عن طريق تقليل حجم الجسيمات وإضافة عوامل تزيد اللزوجة", "عن طريق زيادة الجاذبية"],
                en: ["By increasing particle size", "By decreasing medium viscosity", "By decreasing particle size and adding viscosity-increasing agents", "By increasing gravity"]
            },
            correct: 2
        },
        {
            q: {
                ar: "ما هي القاعدة الخاصة بحجم الترسيب (Sedimentation Volume - F) بالنسبة للاستقرار؟",
                en: "What is the rule regarding Sedimentation Volume (F) relative to stability?"
            },
            opts: {
                ar: ["كلما قلت قيمة F زاد الاستقرار", "كلما زادت قيمة F كان الاستقرار أسوأ", "الاستقرار لا يتأثر بقيمة F", "كلما زادت هذه النسبة (The larger this fraction)، زادت قابلية التعليق والاستقرار"],
                en: ["The smaller F, the higher stability", "The larger F, the worse stability", "Stability is unaffected by F", "The larger this fraction, the better the suspendability (stability)"]
            },
            correct: 3
        },
        {
            q: {
                ar: "كيف يتم تعريف درجة التندف (Degree of Flocculation - $\\beta$)؟",
                en: "How is the Degree of Flocculation ($\\beta$) defined?"
            },
            opts: {
                ar: ["نسبة حجم الترسيب للمعلق المتندف (F) إلى حجم الترسيب للمعلق غير المتندف ($F_{\\infty}$)", "حاصل ضرب اللزوجة في الكثافة", "الفرق بين وزن الجزيئات وحجمها", "نسبة الجزيئات الذائبة إلى غير الذائبة"],
                en: ["Ratio of sedimentation volume of flocculated suspension (F) to deflocculated suspension ($F_{\\infty}$)", "Product of viscosity and density", "Difference between particle weight and volume", "Ratio of dissolved to undissolved particles"]
            },
            correct: 0
        },
        {
            q: {
                ar: "أيهما يُفضل لضمان استقرار المعلق بالنسبة لدرجة التندف ($\\beta$)؟",
                en: "Which is preferred to ensure suspension stability regarding the degree of flocculation ($\\beta$)?"
            },
            opts: {
                ar: ["أن تكون قيمة $\\beta$ سالبة", "أن تكون درجة التندف منخفضة جداً", "أن تكون درجة التندف عالية (Higher $\\beta$ = Better stability)", "أن تكون $\\beta$ مساوية للصفر"],
                en: ["$\\beta$ to be negative", "Very low degree of flocculation", "Higher degree of flocculation (Higher $\\beta$ = Better stability)", "$\\beta$ equal to zero"]
            },
            correct: 2
        }
    ]
});