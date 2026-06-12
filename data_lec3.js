allLectures.push({
    id: 'lec3',
    title: {
        ar: "المحاضرة 3: الذوبانية والانتشار (Solubility & Diffusion)",
        en: "Lecture 3: Solubility & Diffusion"
    },
    revision: [
        {
            title: { ar: "الذوبانية وأنواع المحاليل", en: "Solubility & Types of Solutions" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "تعريفات أساسية", en: "Basic Definitions" },
                    content: {
                        ar: "المحلول (Solution): مزيج متجانس فيزيائياً وكيميائياً من المكونات.<br>المذاب (Solute): المادة التي يتم إذابتها.<br>المذيب (Solvent): الوسط الذي تذوب فيه المواد.<br>الذوبانية (Solubility): خاصية فيزيائية تشير إلى قدرة المذاب على الذوبان في المذيب.",
                        en: "Solution: A physically and chemically homogeneous mixture of components.<br>Solute: The dissolved agent.<br>Solvent: The medium in which solutes are dissolved.<br>Solubility: A physical property indicating the ability of a solute to dissolve in a solvent."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "أنواع المحاليل (حسب التشبع)", en: "Types of Solutions" },
                    content: {
                        ar: "<table><tr><th>النوع</th><th>الوصف</th></tr><tr><td>غير مشبع (Unsaturated)</td><td>يحتوي على مذاب أقل من المطلوب للتشبع الكامل، ويمكنه إذابة المزيد.</td></tr><tr><td>مشبع (Saturated)</td><td>يحتوي على أقصى عدد من المذابات ولا يمكنه إذابة المزيد.</td></tr><tr><td>فوق مشبع (Supersaturated)</td><td>يحتوي على مذاب أكثر من المطلوب للتشبع (غير مستقر وتتكون فيه بلورات).</td></tr></table>",
                        en: "<table><tr><th>Type</th><th>Description</th></tr><tr><td>Unsaturated</td><td>Contains solute less than required for complete saturation; more solute dissolves.</td></tr><tr><td>Saturated</td><td>Contains maximum number of solutes; no more solute dissolves.</td></tr><tr><td>Supersaturated</td><td>Contains solutes more than required for complete saturation (unstable, crystals form).</td></tr></table>"
                    }
                }
            ]
        },
        {
            title: { ar: "التعبير عن الذوبانية والعوامل المؤثرة", en: "Solubility Expressions & Factors" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "مصطلحات الذوبانية (مهم جداً)", en: "Descriptive Terms" },
                    content: {
                        ar: "يتم التعبير عنها بأجزاء المذيب المطلوبة لإذابة جزء واحد من المذاب:<br>* شديد الذوبان (Very soluble): أقل من 1.<br>* حر الذوبان (Freely soluble): من 1 إلى 10.<br>* قابل للذوبان (Soluble): من 10 إلى 30.<br>* شحيح الذوبان (Sparingly soluble): من 30 إلى 100.<br><b>ملاحظة:</b> يُعبر عن الذوبانية كمياً بوحدات مثل Molarity و Molality و النسب المئوية.",
                        en: "Expressed as parts of solvent required to dissolve 1 part of solute:<br>* Very soluble: < 1.<br>* Freely soluble: 1-10.<br>* Soluble: 10-30.<br>* Sparingly soluble: 30-100.<br><b>Note:</b> Quantitatively expressed in Molarity, molality, and percentages."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "أهم العوامل المؤثرة", en: "Important Factors" },
                    content: {
                        ar: "<b>Cosolvency:</b> يكون المذاب أكثر ذوباناً في مزيج من المذيبات (Cosolvents) مقارنة بمذيب واحد.<br><b>الشكل البلوري (Crystal structure):</b> الأشكال غير المتبلورة (Amorphous) تذوب أسرع من الأشكال المتبلورة.",
                        en: "<b>Cosolvency:</b> A solute is more soluble in a mixture of solvents (Cosolvents) than in 1 solvent.<br><b>Crystal structure:</b> Amorphous forms dissolve faster than crystalline forms."
                    }
                }
            ]
        },
        {
            title: { ar: "معادلة هندرسون-هاسلبالخ (Henderson-Hasselbalch)", en: "Henderson-Hasselbalch Equation" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "قوانين الأحماض والقواعد الضعيفة", en: "Weak Acids & Bases Laws" },
                    content: {
                        ar: "<b>للأحماض الضعيفة (Weak acids):</b><br>$$pH_p = pK_a + \\log\\frac{S - S_0}{S_0}$$<br><b>للقواعد الضعيفة (Weak bases):</b><br>$$pH_p = pK_w - pK_b + \\log\\frac{S_0}{S - S_0}$$<br>حيث $S_0$ هي الذوبانية الذاتية (الجزء غير المتأين) و $S$ هي الذوبانية الكلية.",
                        en: "<b>For weak acids:</b><br>$$pH_p = pK_a + \\log\\frac{S - S_0}{S_0}$$<br><b>For weak bases:</b><br>$$pH_p = pK_w - pK_b + \\log\\frac{S_0}{S - S_0}$$<br>Where $S_0$ is the intrinsic solubility (unionized form) and $S$ is the total solubility."
                    }
                }
            ]
        },
        {
            title: { ar: "الامتزاج والذوبان (Miscibility & Dissolution)", en: "Miscibility & Dissolution" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "أنواع الامتزاج (Miscibility)", en: "Types of Miscibility" },
                    content: {
                        ar: "1. <b>امتزاج كامل (Complete miscibility):</b> قوى التلاصق (Adhesive) بين الجزيئات المختلفة أكبر بكثير من قوى التماسك (Cohesive) بين الجزيئات المتشابهة.<br>2. <b>امتزاج جزئي (Partial miscibility):</b> قوى التماسك تختلف، مثل خلط الفينول والماء (تتكون طبقتان).<br>3. <b>عدم امتزاج كامل (Complete immiscibility):</b> قوى التماسك أكبر بكثير من قوى التلاصق، مثل الزئبق والماء.",
                        en: "1. <b>Complete miscibility:</b> Adhesive forces between different molecules >> cohesive forces between like molecules.<br>2. <b>Partial miscibility:</b> Cohesive forces are different, e.g., phenol & water (2 layers formed).<br>3. <b>Complete immiscibility:</b> Cohesive forces >> adhesive forces, e.g., Mercury & water."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "معدل الذوبان (Dissolution Rate)", en: "Dissolution Rate (Noyes-Whitney)" },
                    content: {
                        ar: "<b>قانون (Noyes and Whitney / Nernst and Brunner):</b><br>$$\\frac{dC}{dt} = \\frac{DS(C_s - C_b)}{Vh}$$<br>القوة الدافعة للذوبان هي تدرج التركيز (Concentration gradient).",
                        en: "<b>Noyes and Whitney / Nernst and Brunner equation:</b><br>$$\\frac{dC}{dt} = \\frac{DS(C_s - C_b)}{Vh}$$<br>The driving force for dissolution is the concentration gradient."
                    }
                }
            ]
        },
        {
            title: { ar: "الانتشار (Diffusion)", en: "Diffusion" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "التعريف والقياس", en: "Definition & Measurement" },
                    content: {
                        ar: "هو حركة جزيئات المذاب بسبب الحركة العشوائية (Brownian motion) من التركيز العالي للمنخفض.<br><b>القياس:</b> يتم قياسه باستخدام خلية فرانز (Franz diffusion cell) التي تتكون من غرفة مانحة، غرفة مستقبلة، وغشاء بينهما.",
                        en: "Movement of solute molecules because of random motion (Brownian motion) from high to low concentration.<br><b>Measurement:</b> Measured by Franz diffusion cell, which consists of a donor chamber, a receptor chamber, and a membrane."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "قوانين الانتشار (Fick's Laws)", en: "Laws of Diffusion" },
                    content: {
                        ar: "<b>قانون فيك الأول (Fick's First Law):</b><br>التدفق (Flux) يتناسب مع تدرج التركيز.<br>$$J = -D\\frac{dC}{dx}$$<br><b>قانون فيك الثاني (Fick's Second Law):</b><br>تغير التركيز بمرور الوقت يتناسب مع التغير في تدرج التركيز.<br>$$\\frac{dC}{dt} = -D\\frac{d^2C}{dx^2}$$",
                        en: "<b>Fick's First Law:</b><br>Flux (J) is proportional to the concentration gradient.<br>$$J = -D\\frac{dC}{dx}$$<br><b>Fick's Second Law:</b><br>Change in concentration with time is proportional to change in concentration gradient.<br>$$\\frac{dC}{dt} = -D\\frac{d^2C}{dx^2}$$"
                    }
                },
                {
                    type: 'other',
                    nodeTitle: { ar: "أنواع الانتشار", en: "Types of Diffusion" },
                    content: {
                        ar: "<b>نقل سلبي (Passive Transport):</b> مع تدرج التركيز، لا يحتاج طاقة (مثل Simple Diffusion و Facilitated Diffusion).<br><b>نقل نشط (Active Transport):</b> ضد تدرج التركيز، ويحتاج طاقة (ATP) وناقل (Carrier).",
                        en: "<b>Passive Transport:</b> Down concentration gradient, no energy required (e.g., Simple & Facilitated Diffusion).<br><b>Active Transport:</b> Against concentration gradient, requires cellular energy (ATP) and a carrier."
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: {
                ar: "وفقاً للتعريفات الأساسية، ماذا يطلق على الوسط الذي تذوب فيه المواد؟",
                en: "According to basic definitions, what is the medium in which solutes are dissolved called?"
            },
            opts: {
                ar: ["المذاب (Solute)", "المذيب (Solvent)", "المحلول (Solution)", "المعلق (Suspension)"],
                en: ["Solute", "Solvent", "Solution", "Suspension"]
            },
            correct: 1
        },
        {
            q: {
                ar: "أي من المحاليل التالية يعتبر غير مستقر وتتكون فيه البلورات بمجرد تحفيزه؟",
                en: "Which of the following solutions becomes unstable and crystals form?"
            },
            opts: {
                ar: ["المحلول غير المشبع (Unsaturated)", "المحلول المشبع (Saturated)", "المحلول فوق المشبع (Supersaturated)", "المحلول المخفف (Diluted)"],
                en: ["Unsaturated solution", "Saturated solution", "Supersaturated solution", "Diluted solution"]
            },
            correct: 2
        },
        {
            q: {
                ar: "مصطلح (Freely soluble) يشير إلى أن جزءاً واحداً من المذاب يحتاج إلى كم جزء من المذيب لإذابته؟",
                en: "The term (Freely soluble) indicates that 1 part of solute requires how many parts of solvent to dissolve?"
            },
            opts: {
                ar: ["أقل من 1", "من 1 إلى 10", "من 30 إلى 100", "أكثر من 10000"],
                en: ["< 1", "1 to 10", "30 to 100", "> 10,000"]
            },
            correct: 1
        },
        {
            q: {
                ar: "كيف يؤثر الشكل البلوري (Crystal structure) على سرعة الذوبان؟",
                en: "How does the crystal structure affect the dissolution rate?"
            },
            opts: {
                ar: ["الأشكال المتبلورة تذوب أسرع", "الأشكال غير المتبلورة (Amorphous) تذوب أسرع", "لا يوجد تأثير للشكل البلوري", "كلاهما يذوب بنفس السرعة"],
                en: ["Crystalline forms dissolve faster", "Amorphous forms dissolve faster", "No effect on dissolution", "Both dissolve at the same rate"]
            },
            correct: 1
        },
        {
            q: {
                ar: "في حالة الامتزاج الكامل (Complete miscibility)، ما هي العلاقة بين القوى الجزيئية؟",
                en: "In the case of complete miscibility, what is the relationship between molecular forces?"
            },
            opts: {
                ar: ["قوى التماسك أكبر من التلاصق", "قوى التلاصق (Adhesive) أكبر بكثير من التماسك (Cohesive)", "القوتان متساويتان تماماً", "تعتمد على الضغط فقط"],
                en: ["Cohesive forces >> Adhesive forces", "Adhesive forces >> Cohesive forces", "Both forces are exactly equal", "Depends only on pressure"]
            },
            correct: 1
        },
        {
            q: {
                ar: "تكون طبقتين عند خلط الفينول والماء هو مثال على أي نوع من الامتزاج؟",
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
                ar: "حسب قانون (Noyes-Whitney)، ما هي القوة الدافعة (Driving force) لعملية الذوبان؟",
                en: "According to the Noyes-Whitney equation, what is the driving force for dissolution?"
            },
            opts: {
                ar: ["حجم الجسيمات", "الضغط الجوي", "درجة الحرارة", "تدرج التركيز (Concentration gradient)"],
                en: ["Particle size", "Atmospheric pressure", "Temperature", "Concentration gradient"]
            },
            correct: 3
        },
        {
            q: {
                ar: "ما هو الجهاز المستخدم في الصيدلة لقياس الانتشار (Diffusion)؟",
                en: "What is the device used in pharmacy to measure diffusion?"
            },
            opts: {
                ar: ["Coulter counter", "Franz diffusion cell", "Sedimentation balance", "Spectrophotometer"],
                en: ["Coulter counter", "Franz diffusion cell", "Sedimentation balance", "Spectrophotometer"]
            },
            correct: 1
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
                ar: "وفقاً لقانون فيك الأول (Fick's First Law)، التدفق (Flux) يتناسب طردياً مع:",
                en: "According to Fick's First Law, Flux (J) is proportional to:"
            },
            opts: {
                ar: ["تدرج التركيز (Concentration gradient)", "الزمن فقط", "حجم السائل فقط", "الضغط الخارجي"],
                en: ["Concentration gradient", "Time only", "Volume of liquid only", "External pressure"]
            },
            correct: 0
        }
    ]
});