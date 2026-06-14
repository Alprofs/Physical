allLectures.push({
    id: 'lec3',
    title: {
        ar: "المحاضرة 3: الذوبانية والانتشار (Solubility & Diffusion)",
        en: "Lecture 3: Solubility & Diffusion"
    },
    revision: [
        {
            title: { ar: "أساسيات الذوبانية (الصفحات 1 و 2)", en: "Solubility Basics (Pages 1 & 2)" },
            branches: [
                {
                    type: 'info',
                    nodeTitle: { ar: "تعريفات هامة", en: "Important Definitions" },
                    content: {
                        ar: "<b>المحلول (Solution):</b> مزيج متجانس فيزيائياً وكيميائياً.<br><b>المذاب (Solute):</b> المادة التي يتم إذابتها.<br><b>المذيب (Solvent):</b> الوسط الذي تذوب فيه المواد.<br><b>الذوبانية (Solubility):</b> قدرة المذاب على الذوبان لتكوين تشتت جزيئي متجانس.",
                        en: "<b>Solution:</b> A physically and chemically homogeneous mixture.<br><b>Solute:</b> The dissolved agent.<br><b>Solvent:</b> The medium in which solutes are dissolved.<br><b>Solubility:</b> Ability of a solute to dissolve to form a homogeneous molecular dispersion."
                    }
                },
                {
                    type: 'table',
                    nodeTitle: { ar: "أنواع المحاليل", en: "Types of Solutions" },
                    content: {
                        ar: "<table><tr><th>غير مشبع (Unsaturated)</th><th>مشبع (Saturated)</th><th>فوق مشبع (Supersaturated)</th></tr><tr><td>المذاب أقل من المطلوب للتشبع (يذيب المزيد)</td><td>يحتوي على أقصى عدد من جزيئات المذاب</td><td>المذاب أكثر من المطلوب للتشبع (غير مستقر وتتكون بلورات)</td></tr></table>",
                        en: "<table><tr><th>Unsaturated</th><th>Saturated</th><th>Supersaturated</th></tr><tr><td>Contains solute less than required (dissolves more)</td><td>Contains maximum number of solutes</td><td>Contains solutes more than required (unstable, crystals form)</td></tr></table>"
                    }
                },
                {
                    type: 'flip',
                    nodeTitle: { ar: "سؤال امتحان: Molarity vs Molality", en: "Exam Q: Molarity vs Molality" },
                    content: {
                        ar: "<b>Molarity (M):</b> عدد المولات في 1 لتر من (المحلول).<br><b>Molality (m):</b> عدد المولات في 1 كجم من (المذيب).",
                        en: "<b>Molarity (M):</b> Moles of solute per 1 Liter of (Solution).<br><b>Molality (m):</b> Moles of solute per 1 Kg of (Solvent)."
                    }
                },
                {
                    type: 'table',
                    nodeTitle: { ar: "مصطلحات الذوبانية (مهم جداً)", en: "Descriptive Terms (Very Important)" },
                    content: {
                        ar: "<table><tr><th>المصطلح (Term)</th><th>أجزاء المذيب المطلوبة (Parts of solvent)</th></tr><tr><td>Very soluble</td><td>أقل من 1 ( < 1 )</td></tr><tr><td>Freely soluble</td><td>1 - 10</td></tr><tr><td>Soluble</td><td>10 - 30</td></tr><tr><td>Sparingly soluble</td><td>30 - 100</td></tr><tr><td>Slightly soluble</td><td>100 - 1000</td></tr><tr><td>Very slightly soluble</td><td>1000 - 10,000</td></tr><tr><td>Practically insoluble</td><td>أكثر من 10,000</td></tr></table>",
                        en: "<table><tr><th>Term</th><th>Parts of solvent required</th></tr><tr><td>Very soluble</td><td>< 1</td></tr><tr><td>Freely soluble</td><td>1 - 10</td></tr><tr><td>Soluble</td><td>10 - 30</td></tr><tr><td>Sparingly soluble</td><td>30 - 100</td></tr><tr><td>Slightly soluble</td><td>100 - 1000</td></tr><tr><td>Very slightly soluble</td><td>1000 - 10,000</td></tr><tr><td>Practically insoluble</td><td>> 10,000</td></tr></table>"
                    }
                }
            ]
        },
        {
            title: { ar: "العوامل المؤثرة ومعادلة هندرسون (الصفحات 3 و 4)", en: "Factors & Henderson Eq (Pages 3 & 4)" },
            branches: [
                {
                    type: 'info',
                    nodeTitle: { ar: "العوامل المؤثرة على الذوبانية", en: "Factors Affecting Solubility" },
                    content: {
                        ar: "<b>1- الحرارة:</b> التفاعل الماص للحرارة (Endothermic) تزيد ذوبانيته بالحرارة، والطارد (Exothermic) تقل.<br><b>2- المذيب:</b> الشبيه يذيب الشبيه (Like dissolves like).<br><b>3- Cosolvency:</b> الذوبان في خليط مذيبات أفضل من مذيب واحد.<br><b>4- الشكل البلوري:</b> غير المتبلور (Amorphous) يذوب أسرع من المتبلور (Crystalline).<br><b>5- الـ pH:</b> الأحماض الضعيفة تتأين وتذوب أكثر في الوسط القاعدي (High pH)، والقواعد الضعيفة تذوب أكثر في الوسط الحامضي (Low pH).",
                        en: "<b>1. Temp:</b> Endothermic (solubility increases with temp), Exothermic (decreases).<br><b>2. Solvent:</b> Like dissolves like.<br><b>3. Cosolvency:</b> Solute is more soluble in a mixture of solvents.<br><b>4. Crystal structure:</b> Amorphous forms dissolve faster than crystalline.<br><b>5. pH:</b> Weak acids ionize/dissolve more at high pH (base). Weak bases dissolve more at low pH (acid)."
                    }
                },
                {
                    type: 'compare',
                    val1Title: { ar: "هندرسون للأحماض الضعيفة", en: "Henderson for Weak Acids" },
                    val1: { 
                        ar: "$$pH_p = pK_a + \\log\\frac{S - S_0}{S_0}$$<br>الـ $pH$ الذي يبدأ تحته الدواء في الترسيب.", 
                        en: "$$pH_p = pK_a + \\log\\frac{S - S_0}{S_0}$$<br>pH below which drug begins to precipitate." 
                    },
                    val2Title: { ar: "هندرسون للقواعد الضعيفة", en: "Henderson for Weak Bases" },
                    val2: { 
                        ar: "$$pH_p = pK_w - pK_b + \\log\\frac{S_0}{S - S_0}$$<br>الـ $pH$ الذي يبدأ فوقه الدواء في الترسيب.", 
                        en: "$$pH_p = pK_w - pK_b + \\log\\frac{S_0}{S - S_0}$$<br>pH above which drug begins to precipitate." 
                    }
                },
                {
                    type: 'flip',
                    nodeTitle: { ar: "ما هي $S_0$ و $S$؟", en: "What are $S_0$ and $S$?" },
                    content: {
                        ar: "$S_0$: الذوبانية الذاتية (الجزء غير المتأين Unionized).<br>$S$: الذوبانية الكلية (الجزء المتأين + غير المتأين).",
                        en: "$S_0$: Intrinsic solubility (Unionized form).<br>$S$: Total solubility (Ionized & unionized)."
                    }
                }
            ]
        },
        {
            title: { ar: "الامتزاج والذوبان (الصفحات 5 و 6 و 8)", en: "Miscibility & Dissolution (Pages 5, 6 & 8)" },
            branches: [
                {
                    type: 'compare',
                    val1Title: { ar: "امتزاج كامل (Complete)", en: "Complete Miscibility" },
                    val1: { 
                        ar: "قوى التلاصق > قوى التماسك.<br>مثل: الكحول والماء (Polar).", 
                        en: "Adhesive forces >> Cohesive forces.<br>Example: Alcohol & water." 
                    },
                    val2Title: { ar: "عدم امتزاج كامل (Immiscibility)", en: "Complete Immiscibility" },
                    val2: { 
                        ar: "قوى التماسك > قوى التلاصق.<br>مثل: الزئبق والماء.", 
                        en: "Cohesive forces >> Adhesive forces.<br>Example: Mercury & water." 
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "الامتزاج الجزئي (Partial miscibility)", en: "Partial miscibility" },
                    content: {
                        ar: "قوى التماسك للمكونات مختلفة، تتكون طبقتان سائلتان. مثل: <b>الفينول والماء (Phenol & water)</b>. وتتأثر بدرجة الحرارة.",
                        en: "Cohesive forces of constituents are different, 2 liquid layers formed. Example: <b>Phenol & water</b>. Affected by temperature."
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "معدل الذوبان (Dissolution) - مهم جداً", en: "Dissolution Rate - Very Important" },
                    content: {
                        ar: "<b>نموذج طبقة الانتشار (Diffusion layer model):</b><br>تتكون طبقة راكدة (Stagnant film) سمكها $h$.<br><b>قانون (Noyes-Whitney / Nernst-Brunner):</b><br>$$\\frac{dC}{dt} = \\frac{DS(C_s - C_b)}{Vh}$$<br><b>القوة الدافعة:</b> هي تدرج التركيز (Concentration gradient).<br><b>أجهزة القياس:</b> Basket method, Paddle method, Flow-through cell.",
                        en: "<b>Diffusion layer model:</b><br>Stagnant film forms with thickness $h$.<br><b>Noyes-Whitney Equation:</b><br>$$\\frac{dC}{dt} = \\frac{DS(C_s - C_b)}{Vh}$$<br><b>Driving force:</b> Concentration gradient.<br><b>Testing models:</b> Basket method, Paddle method, Flow-through cell."
                    }
                }
            ]
        },
        {
            title: { ar: "الانتشار وقوانين فيك (الصفحات 10 و 11)", en: "Diffusion & Fick's Laws (Pages 10 & 11)" },
            branches: [
                {
                    type: 'info',
                    nodeTitle: { ar: "الانتشار (الأهم في المحاضرة)", en: "Diffusion (Most Important)" },
                    content: {
                        ar: "حركة الجزيئات بسبب الحركة العشوائية <b>(Brownian motion)</b>.<br>القوة الدافعة هي: تدرج التركيز.<br><b>القياس:</b> يتم بواسطة <b>(Franz diffusion cell)</b> والذي يتكون من غرفتين (Donor و Receptor) وبينهما غشاء (Membrane).",
                        en: "Movement of molecules due to random motion <b>(Brownian motion)</b>.<br>Driving force: Concentration gradient.<br><b>Measurement:</b> By <b>(Franz diffusion cell)</b> which consists of Donor chamber, Receptor chamber, and a Membrane."
                    }
                },
                {
                    type: 'compare',
                    val1Title: { ar: "قانون فيك الأول", en: "Fick's First Law" },
                    val1: { 
                        ar: "يصف حالة الاستقرار.<br>التدفق (Flux J) يتناسب مع تدرج التركيز.<br>$$J = -D\\frac{dC}{dx}$$", 
                        en: "Flux (J) is proportional to concentration gradient.<br>$$J = -D\\frac{dC}{dx}$$" 
                    },
                    val2Title: { ar: "قانون فيك الثاني", en: "Fick's Second Law" },
                    val2: { 
                        ar: "تغير التركيز بمرور الوقت يتناسب مع التغير في تدرج التركيز.<br>$$\\frac{dC}{dt} = -D\\frac{d^2C}{dx^2}$$", 
                        en: "Change in concentration with time is proportional to change in conc. gradient.<br>$$\\frac{dC}{dt} = -D\\frac{d^2C}{dx^2}$$" 
                    }
                },
                {
                    type: 'table',
                    nodeTitle: { ar: "أنواع النقل والانتشار", en: "Types of Transport" },
                    content: {
                        ar: "<table><tr><th>النوع</th><th>اتجاه التركيز</th><th>الطاقة (ATP)</th><th>أمثلة</th></tr><tr><td>Simple Diffusion</td><td>من العالي للمنخفض (مع التدرج)</td><td>لا يحتاج (No)</td><td>معظم الأدوية</td></tr><tr><td>Facilitated Diffusion</td><td>مع التدرج</td><td>لا يحتاج (No) ولكن يحتاج ناقل</td><td>عبر القنوات</td></tr><tr><td>Active Transport</td><td>من المنخفض للعالي (ضد التدرج)</td><td>يحتاج (Yes)</td><td>Pumps, Endocytosis</td></tr></table>",
                        en: "<table><tr><th>Type</th><th>Direction</th><th>Energy (ATP)</th><th>Examples</th></tr><tr><td>Simple Diffusion</td><td>Down gradient (High to Low)</td><td>No</td><td>Most drugs</td></tr><tr><td>Facilitated Diffusion</td><td>Down gradient</td><td>No (needs carrier)</td><td>Via cell channels</td></tr><tr><td>Active Transport</td><td>Against gradient (Low to High)</td><td>Yes</td><td>Pumps, Endocytosis</td></tr></table>"
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: {
                ar: "أثناء الامتحان، سُئلت عن الفرق بين وحدات القياس. أي مما يلي يمثل الـ (Molality)؟",
                en: "During the exam, you were asked about units. Which of the following represents (Molality)?"
            },
            opts: {
                ar: ["عدد المولات في 1 لتر من المحلول", "عدد المولات في 1 كيلو جرام من المذيب", "عدد الجرامات في 100 مل من المحلول", "النسبة المئوية الحجمية للمذاب"],
                en: ["Moles in 1 Liter of solution", "Moles in 1 Kg of solvent", "Grams in 100 ml of solution", "Volume percentage of solute"]
            },
            correct: 1
        },
        {
            q: {
                ar: "وفقاً لجدول مصطلحات الذوبانية، مصطلح (Sparingly soluble) يعني أن جزءاً واحداً من المذاب يحتاج كم جزء من المذيب؟",
                en: "According to the solubility expressions table, (Sparingly soluble) means 1 part of solute needs how many parts of solvent?"
            },
            opts: {
                ar: ["أقل من 1", "من 1 إلى 10", "من 30 إلى 100", "من 100 إلى 1000"],
                en: ["< 1", "1 - 10", "30 - 100", "100 - 1000"]
            },
            correct: 2
        },
        {
            q: {
                ar: "كيف يؤثر الشكل البلوري (Crystal structure) على سرعة الذوبان؟",
                en: "How does the crystal structure affect the dissolution rate?"
            },
            opts: {
                ar: ["الأشكال المتبلورة تذوب أسرع", "الأشكال غير المتبلورة (Amorphous) تذوب أسرع", "لا يوجد تأثير", "كلاهما يذوب بنفس السرعة"],
                en: ["Crystalline forms dissolve faster", "Amorphous forms dissolve faster", "No effect", "Both dissolve at the same rate"]
            },
            correct: 1
        },
        {
            q: {
                ar: "في حالة الأدوية التي تمثل أحماضاً ضعيفة (Weak acids)، كيف تزيد ذوبانيتها؟",
                en: "For drugs that are weak acids, how is their solubility increased?"
            },
            opts: {
                ar: ["في الأوساط ذات الـ pH المنخفض (الأحماض)", "في الأوساط ذات الـ pH العالي (القواعد)", "عند درجة حرارة الغرفة فقط", "بزيادة الضغط"],
                en: ["At low pH (acidic medium)", "At high pH (basic medium)", "At room temperature only", "By increasing pressure"]
            },
            correct: 1
        },
        {
            q: {
                ar: "في معادلة هندرسون-هاسلبالخ، ماذا يمثل الرمز $S_0$؟",
                en: "In the Henderson-Hasselbalch equation, what does $S_0$ represent?"
            },
            opts: {
                ar: ["الذوبانية الكلية (Total solubility)", "الذوبانية الذاتية للجزء غير المتأين (Intrinsic solubility)", "ثابت التفكك (Dissociation constant)", "الجزء المتأين فقط (Ionized form)"],
                en: ["Total solubility", "Intrinsic solubility (Unionized form)", "Dissociation constant", "Ionized form only"]
            },
            correct: 1
        },
        {
            q: {
                ar: "أي من المحاليل التالية يعتبر غير مستقر وتتكون فيه البلورات بمجرد تحفيزه؟",
                en: "Which of the following solutions becomes unstable and crystals form?"
            },
            opts: {
                ar: ["غير المشبع (Unsaturated)", "المشبع (Saturated)", "فوق المشبع (Supersaturated)", "المخفف (Diluted)"],
                en: ["Unsaturated", "Saturated", "Supersaturated", "Diluted"]
            },
            correct: 2
        },
        {
            q: {
                ar: "تكوّن طبقتين عند خلط الفينول والماء هو مثال على أي نوع من الامتزاج؟",
                en: "The formation of 2 layers when mixing phenol and water is an example of which type of miscibility?"
            },
            opts: {
                ar: ["امتزاج كامل (Complete miscibility)", "عدم امتزاج كامل (Complete immiscibility)", "امتزاج جزئي (Partial miscibility)", "الذوبان الكيميائي"],
                en: ["Complete miscibility", "Complete immiscibility", "Partial miscibility", "Chemical dissolution"]
            },
            correct: 2
        },
        {
            q: {
                ar: "في حالة الامتزاج الكامل (مثل الكحول والماء)، ما هي العلاقة بين القوى الجزيئية؟",
                en: "In Complete Miscibility (e.g., alcohol & water), what is the relationship between molecular forces?"
            },
            opts: {
                ar: ["قوى التماسك أكبر من التلاصق", "قوى التلاصق (Adhesive) أكبر بكثير من التماسك (Cohesive)", "القوتان متساويتان", "تعتمد على الضغط"],
                en: ["Cohesive >> Adhesive", "Adhesive >> Cohesive", "Both are equal", "Depends on pressure"]
            },
            correct: 1
        },
        {
            q: {
                ar: "حسب قانون (Noyes-Whitney)، ما هي القوة الدافعة (Driving force) لعملية الذوبان؟",
                en: "According to the Noyes-Whitney equation, what is the driving force for dissolution?"
            },
            opts: {
                ar: ["حجم الجسيمات (Particle size)", "الضغط الجوي", "سمك الطبقة الراكدة", "تدرج التركيز (Concentration gradient)"],
                en: ["Particle size", "Atmospheric pressure", "Stagnant layer thickness", "Concentration gradient"]
            },
            correct: 3
        },
        {
            q: {
                ar: "في نموذج طبقة الانتشار (Diffusion layer model)، ماذا يمثل الرمز $h$؟",
                en: "In the diffusion layer model, what does $h$ represent?"
            },
            opts: {
                ar: ["تركيز الدواء في السائل", "مساحة السطح", "سمك الطبقة الراكدة (Thickness of stagnant film)", "معامل الانتشار"],
                en: ["Drug concentration in bulk", "Surface area", "Thickness of stagnant film", "Diffusion coefficient"]
            },
            correct: 2
        },
        {
            q: {
                ar: "أي من الأجهزة التالية يُستخدم في مختبرات الصيدلة لاختبار معدل الذوبان (Dissolution testing) في المختبر؟",
                en: "Which of the following is used for in vitro Dissolution testing?"
            },
            opts: {
                ar: ["Franz cell", "Paddle method", "Sedimentation balance", "Coulter counter"],
                en: ["Franz cell", "Paddle method", "Sedimentation balance", "Coulter counter"]
            },
            correct: 1
        },
        {
            q: {
                ar: "ما هي الحركة المسؤولة بشكل أساسي عن انتشار جزيئات المذاب (Diffusion)؟",
                en: "What motion is primarily responsible for the diffusion of solute particles?"
            },
            opts: {
                ar: ["الحركة الدائرية", "الحركة العشوائية براونية (Brownian motion)", "الجاذبية الأرضية", "قوة الطرد المركزي"],
                en: ["Circular motion", "Random Brownian motion", "Gravity", "Centrifugal force"]
            },
            correct: 1
        },
        {
            q: {
                ar: "ما هو الجهاز المخصص لقياس عملية الانتشار (Measurement of diffusion) عبر الأغشية؟",
                en: "What device is specific for the Measurement of diffusion across membranes?"
            },
            opts: {
                ar: ["Basket method", "Franz diffusion cell", "Spectrophotometer", "pH meter"],
                en: ["Basket method", "Franz diffusion cell", "Spectrophotometer", "pH meter"]
            },
            correct: 1
        },
        {
            q: {
                ar: "وفقاً لقانون فيك الأول (Fick's First Law)، التدفق (Flux J) يتناسب مع:",
                en: "According to Fick's First Law, Flux (J) is proportional to:"
            },
            opts: {
                ar: ["تدرج التركيز (Concentration gradient)", "الزمن فقط", "الضغط الخارجي", "حجم المذيب"],
                en: ["Concentration gradient", "Time only", "External pressure", "Volume of solvent"]
            },
            correct: 0
        },
        {
            q: {
                ar: "أي القوانين التالية يصف (تغير التركيز بمرور الوقت) في منطقة معينة أثناء الانتشار؟",
                en: "Which law describes the (change in concentration with time) in a particular region during diffusion?"
            },
            opts: {
                ar: ["قانون بويل", "قانون نيرنست-برونر", "قانون فيك الأول (Fick's 1st Law)", "قانون فيك الثاني (Fick's 2nd Law)"],
                en: ["Boyle's Law", "Nernst-Brunner Law", "Fick's 1st Law", "Fick's 2nd Law"]
            },
            correct: 3
        },
        {
            q: {
                ar: "أي من أنواع النقل يتطلب طاقة خلوية (ATP) ويحدث ضد تدرج التركيز؟",
                en: "Which type of transport requires cellular energy (ATP) and occurs against the concentration gradient?"
            },
            opts: {
                ar: ["الانتشار البسيط (Simple Diffusion)", "الانتشار المسهل (Facilitated Diffusion)", "النقل النشط (Active transport)", "الخاصية الأسموزية (Osmosis)"],
                en: ["Simple Diffusion", "Facilitated Diffusion", "Active transport", "Osmosis"]
            },
            correct: 2
        },
        {
            q: {
                ar: "إذا كان تفاعل الذوبان طارداً للحرارة (Exothermic)، فكيف تتأثر الذوبانية بزيادة درجة الحرارة؟",
                en: "If the solution process is exothermic, how is solubility affected by increasing temperature?"
            },
            opts: {
                ar: ["تزيد الذوبانية", "تقل الذوبانية", "لا تتأثر الذوبانية", "يتبخر المذيب فوراً"],
                en: ["Solubility increases", "Solubility decreases", "Solubility is not affected", "Solvent evaporates immediately"]
            },
            correct: 1
        },
        {
            q: {
                ar: "الـ Cosolvency تعني أن المادة المذابة تكون أكثر ذوباناً في:",
                en: "Cosolvency means that a solute is more soluble in:"
            },
            opts: {
                ar: ["مذيب واحد نقي", "خليط من المذيبات (Mixture of solvents)", "الماء فقط", "المذيبات غير القطبية فقط"],
                en: ["A single pure solvent", "A mixture of solvents", "Water only", "Non-polar solvents only"]
            },
            correct: 1
        },
        {
            q: {
                ar: "ما هو الشرط لحدوث الانتشار المسهل (Facilitated Diffusion)؟",
                en: "What is the condition for Facilitated Diffusion to occur?"
            },
            opts: {
                ar: ["استهلاك طاقة (ATP)", "وجود ناقل (Carrier) مع تدرج التركيز", "التحرك ضد تدرج التركيز", "استخدام جهاز Franz cell"],
                en: ["Consumption of ATP", "Presence of a carrier down the conc. gradient", "Moving against conc. gradient", "Using a Franz cell"]
            },
            correct: 1
        },
        {
            q: {
                ar: "حسب قانون Partition law، تتوزع المادة المذابة بين مذيبين غير ممتزجين بناءً على:",
                en: "According to Partition law, a solute distributes between 2 immiscible solvents based on:"
            },
            opts: {
                ar: ["نسبة درجة حرارتهما", "نسبة ذوبانيتها في كل منهما (Ratio of its solubility)", "حجم المذيبين فقط", "سرعة الرج (Shake speed)"],
                en: ["Ratio of their temperatures", "Ratio of its solubility in each", "Volume of solvents only", "Shake speed"]
            },
            correct: 1
        }
    ]
});