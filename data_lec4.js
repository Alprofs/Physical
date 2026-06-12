allLectures.push({
    id: 'lec4',
    title: {
        ar: "المحاضرة 4: خصائص المحاليل والمنظمات (Solutions & Buffers)",
        en: "Lecture 4: Solutions Properties & Buffers"
    },
    revision: [
        {
            title: { ar: "تصنيف المحاليل (Classification of Solutions)", en: "Classification of Solutions" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "التصنيف حسب حجم الجسيمات", en: "Based on Particle Size" },
                    content: {
                        ar: `<table>
                                <tr><th>النوع</th><th>حجم الجسيمات</th><th>المظهر والملاحظات</th></tr>
                                <tr><td>True solution</td><td>أقل من 1 nm</td><td>شفاف (Clear)، نظام متجانس</td></tr>
                                <tr><td>Colloidal dispersion</td><td>من 1 إلى 1000 nm</td><td>شفاف أو عكر (وسط بين الإثنين)</td></tr>
                                <tr><td>Coarse dispersion</td><td>أكبر من 1000 nm</td><td>عكر (Turbid)، الجسيمات تترسب (Settle down)</td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Type</th><th>Particle Size</th><th>Appearance & Notes</th></tr>
                                <tr><td>True solution</td><td>< 1 nm</td><td>Clear, Homogeneous system</td></tr>
                                <tr><td>Colloidal dispersion</td><td>1 - 1000 nm (1 μm)</td><td>Clear or turbid (Intermediate)</td></tr>
                                <tr><td>Coarse dispersion</td><td>> 1000 nm</td><td>Turbid, particles settle down</td></tr>
                             </table>`
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "التصنيف حسب نوع المذاب", en: "Based on Type of Solute" },
                    content: {
                        ar: "1. <b>Non-electrolytes:</b> لا تتأين ولا توصل الكهرباء (مثل السكروز والجلسرين).<br>2. <b>Strong electrolytes:</b> تتأين كلياً وتوصل الكهرباء (مثل NaCl, HCl).<br>3. <b>Weak electrolytes:</b> تتأين جزئياً (مثل حمض الأسيتيك).",
                        en: "1. <b>Non-electrolytes:</b> Do not ionize, no conduction (e.g., Sucrose, Glycerin).<br>2. <b>Strong electrolytes:</b> Completely ionized, conduct electricity (e.g., NaCl, HCl).<br>3. <b>Weak electrolytes:</b> Partially ionized (e.g., Acetic acid)."
                    }
                }
            ]
        },
        {
            title: { ar: "الخصائص التجميعية (Colligative Properties)", en: "Colligative Properties" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "التعريف والأنواع الأربعة", en: "Definition & Four Types" },
                    content: {
                        ar: "هي خصائص تعتمد <b>فقط على عدد جسيمات المذاب</b> (التركيز) وليس على طبيعته الكيميائية. الأنواع الأربعة هي:<br>1- انخفاض الضغط البخاري (Vapor pressure lowering).<br>2- انخفاض درجة التجمد (Freezing point depression).<br>3- ارتفاع درجة الغليان (Boiling point elevation).<br>4- الضغط الأسموزي (Osmotic pressure).",
                        en: "Properties that depend <b>only on the number of solute particles</b> (concentration), not their nature. The four types are:<br>1- Vapor pressure lowering.<br>2- Freezing point depression.<br>3- Boiling point elevation.<br>4- Osmotic pressure."
                    }
                }
            ]
        },
        {
            title: { ar: "المحاليل المنظمة (Buffers)", en: "Buffers" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "التعريف وميكانيكية العمل", en: "Definition & Mechanism" },
                    content: {
                        ar: "<b>التعريف:</b> محاليل تقاوم التغير في الـ pH عند إضافة كميات صغيرة من حمض أو قاعدة قوية. تتكون من (حمض ضعيف وملحه) أو (قاعدة ضعيفة وملحها).<br><b>الميكانيكية:</b> عند إضافة حمض أو قاعدة قوية، يتفاعل الـ Buffer لتحييد (Neutralize) أيونات $H^+$ أو $OH^-$ المضافة، فلا يتغير الـ pH بشكل ملحوظ.",
                        en: "<b>Definition:</b> Solutions that resist changes in pH upon the addition of small quantities of acid or base. Made of (weak acid + its salt) or (weak base + its salt).<br><b>Mechanism:</b> When a strong acid or base is added, the Buffer neutralizes the added $H^+$ or $OH^-$ ions, so pH does not change significantly."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "معادلات وتطبيقات البافر", en: "Buffer Equations & Uses" },
                    content: {
                        ar: "<b>حمض ضعيف وملحه:</b> $$pH = pK_a + \\log\\frac{[Salt]}{[Acid]}$$<br><b>قاعدة ضعيفة وملحها:</b> $$pH = pK_w - pK_b + \\log\\frac{[Base]}{[Salt]}$$<br><b>استخداماتها الصيدلانية:</b> ضبط الـ pH في التحليل، الحفاظ على استقرار الأدوية، دراسة ذوبانية الأدوية وتأثرها بالـ pH، ومعايرة أجهزة الـ pH.",
                        en: "<b>Weak acid & its salt:</b> $$pH = pK_a + \\log\\frac{[Salt]}{[Acid]}$$<br><b>Weak base & its salt:</b> $$pH = pK_w - pK_b + \\log\\frac{[Base]}{[Salt]}$$<br><b>Pharmaceutical Uses:</b> Adjust pH in analysis, maintain drug stability, study pH dependence of drug solubility, and calibrate pH meters."
                    }
                }
            ]
        },
        {
            title: { ar: "الضغط الأسموزي وتأثيراته (Osmotic Pressure)", en: "Osmotic Pressure & Effects" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "التعريف وأنواع المحاليل", en: "Definition & Types" },
                    content: {
                        ar: "<b>الضغط الأسموزي:</b> هو الضغط المسئول عن مرور المذيب عبر غشاء شبه منفذ من المحلول المخفف إلى المركز.<br>1. <b>Isotonic:</b> ضغط أسموزي مساوي لدم الإنسان. كرات الدم تحتفظ بشكلها.<br>2. <b>Hypotonic:</b> ضغط أقل. يدخل الماء لكرات الدم فتنتفخ وتنفجر (Haemolysis) وهو تلف غير قابل للعكس.<br>3. <b>Hypertonic:</b> ضغط أعلى. يخرج الماء من كرات الدم فتنكمش (Crenation) وهو تلف مؤقت.",
                        en: "<b>Osmotic Pressure:</b> Pressure responsible for passage of solvent through semi-permeable membrane from dilute to concentrated solution.<br>1. <b>Isotonic:</b> Same osmotic pressure as blood. Cells retain tone.<br>2. <b>Hypotonic:</b> Lower pressure. Water enters cells causing swelling & rupture (Haemolysis - Irreversible).<br>3. <b>Hypertonic:</b> Higher pressure. Water leaves cells causing shrinkage (Crenation - Reversible temporarily)."
                    }
                }
            ]
        },
        {
            title: { ar: "حسابات الـ Isotonicity", en: "Isotonicity Calculations" },
            branches: [
                {
                    type: 'origin',
                    nodeTitle: { ar: "Sodium Chloride Equivalent Method", en: "NaCl Equivalent Method" },
                    content: {
                        ar: "<b>التعريف:</b> كمية الـ NaCl المكافئة أسموزياً لجرام واحد من الدواء.<br><b>خطوات الحساب:</b><br>1- حساب الـ NaCl الكلي المطلوب (0.9 جرام لكل 100 مل).<br>2- حساب الـ NaCl المكافئ للدواء الموجود (كمية الدواء × NaCl eq).<br>3- الـ NaCl المطلوب إضافته = الخطوة 1 ناقص الخطوة 2.<br><b>بدائل في حالة التعارض:</b> إذا كان الـ NaCl غير متوافق، نستخدم Boric acid, Potassium Nitrate, أو Mannitol.",
                        en: "<b>Definition:</b> Amount of NaCl that is osmotically equivalent to 1 gram of the drug.<br><b>Steps:</b><br>1- Calculate total NaCl needed (0.9 g per 100 ml).<br>2- Calculate NaCl represented by drug (Drug amount × NaCl eq).<br>3- NaCl to be added = Step 1 - Step 2.<br><b>Alternatives:</b> If NaCl is incompatible, use Boric acid, Potassium Nitrate, or Mannitol."
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: {
                ar: "أي من المحاليل التالية يكون حجم جسيماته أقل من 1 نانومتر ويكون نظامه متجانساً (Homogeneous)؟",
                en: "Which of the following solutions has a particle size less than 1 nm and is a homogeneous system?"
            },
            opts: {
                ar: ["Colloidal dispersion", "Coarse dispersion", "True solution", "Emulsion"],
                en: ["Colloidal dispersion", "Coarse dispersion", "True solution", "Emulsion"]
            },
            correct: 2
        },
        {
            q: {
                ar: "الخصائص التجميعية (Colligative properties) للمحاليل تعتمد على:",
                en: "Colligative properties of solutions depend on:"
            },
            opts: {
                ar: ["التركيب الكيميائي للمذاب", "عدد جسيمات المذاب (التركيز)", "طبيعة المذيب فقط", "درجة حموضة المحلول"],
                en: ["Chemical nature of the solute", "Number of solute particles (concentration)", "Nature of solvent only", "pH of the solution"]
            },
            correct: 1
        },
        {
            q: {
                ar: "أي من الخصائص التالية لا يعتبر من الخصائص التجميعية الأربعة (Colligative properties)؟",
                en: "Which of the following is NOT one of the four colligative properties?"
            },
            opts: {
                ar: ["ارتفاع درجة الغليان (Boiling point elevation)", "الضغط الأسموزي (Osmotic pressure)", "انخفاض درجة التجمد (Freezing point depression)", "التوتر السطحي (Surface tension)"],
                en: ["Boiling point elevation", "Osmotic pressure", "Freezing point depression", "Surface tension"]
            },
            correct: 3
        },
        {
            q: {
                ar: "كيف يعمل المحلول المنظم (Buffer) عند إضافة حمض أو قاعدة قوية؟",
                en: "How does a Buffer act upon the addition of a strong acid or base?"
            },
            opts: {
                ar: ["يقوم بتحييد (Neutralize) الأيونات المضافة ليمنع تغير الـ pH", "يغير الـ pH بشكل جذري فوراً", "يتحول إلى راسب", "يزيد من تأين الحمض المضاف"],
                en: ["It neutralizes the added ions to prevent pH change", "It drastically changes the pH immediately", "It turns into a precipitate", "It increases the ionization of the added acid"]
            },
            correct: 0
        },
        {
            q: {
                ar: "في معادلات البافر، ما هي معادلة (Henderson-Hasselbalch) لحمض ضعيف وملحه؟",
                en: "In buffer equations, what is the Henderson-Hasselbalch equation for a weak acid and its salt?"
            },
            opts: {
                ar: ["$pH = pK_a + \\log\\frac{[Acid]}{[Salt]}$", "$pH = pK_a - \\log\\frac{[Salt]}{[Acid]}$", "$pH = pK_a + \\log\\frac{[Salt]}{[Acid]}$", "$pH = pK_w - pK_b + \\log\\frac{[Base]}{[Salt]}$"],
                en: ["$pH = pK_a + \\log\\frac{[Acid]}{[Salt]}$", "$pH = pK_a - \\log\\frac{[Salt]}{[Acid]}$", "$pH = pK_a + \\log\\frac{[Salt]}{[Acid]}$", "$pH = pK_w - pK_b + \\log\\frac{[Base]}{[Salt]}$"]
            },
            correct: 2
        },
        {
            q: {
                ar: "ماذا يحدث لكرات الدم الحمراء عند وضعها في محلول Hypotonic؟",
                en: "What happens to red blood cells when placed in a Hypotonic solution?"
            },
            opts: {
                ar: ["تنكمش بشكل مؤقت (Crenation)", "يخرج منها الماء", "تنتفخ وتنفجر بشكل غير قابل للعكس (Haemolysis)", "تحتفظ بشكلها وحجمها الطبيعي"],
                en: ["Shrink temporarily (Crenation)", "Water passes outward", "Swell and rupture irreversibly (Haemolysis)", "Retain their normal shape and tone"]
            },
            correct: 2
        },
        {
            q: {
                ar: "الضرر الذي يحدث لكرات الدم الحمراء في المحلول الـ Hypertonic (Crenation) يعتبر:",
                en: "The damage that occurs to red blood cells in a Hypertonic solution (Crenation) is considered:"
            },
            opts: {
                ar: ["غير قابل للعكس (Irreversible)", "قابل للعكس ومؤقت (Reversible temporarily)", "مميت فوري للخلية", "يؤدي لانفجار الخلية"],
                en: ["Irreversible", "Reversible temporarily", "Immediately fatal to the cell", "Leads to cell rupture"]
            },
            correct: 1
        },
        {
            q: {
                ar: "في حسابات الـ Isotonicity، ما هي النسبة المئوية للـ NaCl التي تجعل المحلول متعادل الضغط الأسموزي (Isotonic) مع الدم؟",
                en: "In Isotonicity calculations, what is the percentage of NaCl that makes the solution Isotonic with blood?"
            },
            opts: {
                ar: ["0.9%", "9.0%", "0.09%", "1.9%"],
                en: ["0.9%", "9.0%", "0.09%", "1.9%"]
            },
            correct: 0
        },
        {
            q: {
                ar: "ما هو المكافئ الأسموزي لكلوريد الصوديوم (NaCl equivalent)؟",
                en: "What is the Sodium Chloride equivalent?"
            },
            opts: {
                ar: ["كمية الدواء التي تكافئ 1 جرام من NaCl", "كمية الـ NaCl المكافئة أسموزياً لـ 1 جرام من الدواء", "نسبة ذوبان الدواء في الماء", "الوزن الجزيئي للملح"],
                en: ["Amount of drug equivalent to 1 gram of NaCl", "Amount of NaCl that is osmotically equivalent to 1 gram of the drug", "Ratio of drug solubility in water", "Molecular weight of the salt"]
            },
            correct: 1
        },
        {
            q: {
                ar: "في حالة وجود تعارض كيميائي (Incompatibility) يمنع استخدام NaCl لضبط الـ Isotonicity، أي من المواد التالية يمكن استخدامه كبديل؟",
                en: "In case of chemical incompatibility preventing the use of NaCl for adjusting Isotonicity, which of the following can be used as an alternative?"
            },
            opts: {
                ar: ["حمض الهيدروكلوريك (HCl)", "هيدروكسيد الصوديوم (NaOH)", "حمض البوريك (Boric acid) أو المانيتول (Mannitol)", "حمض الأسيتيك (Acetic acid)"],
                en: ["Hydrochloric acid (HCl)", "Sodium hydroxide (NaOH)", "Boric acid or Mannitol", "Acetic acid"]
            },
            correct: 2
        }
    ]
});