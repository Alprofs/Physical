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
                    type: 'table',
                    nodeTitle: { ar: "التصنيف حسب حجم الجسيمات", en: "Based on Particle Size" },
                    content: {
                        ar: `<table>
                                <tr><th>النوع</th><th>حجم الجسيمات</th><th>المظهر والملاحظات</th></tr>
                                <tr><td>True solution</td><td>أقل من 1 nm</td><td>شفاف (Clear)، يذوب كلياً</td></tr>
                                <tr><td>Colloidal dispersion</td><td>من 1 إلى 1000 nm</td><td>شفاف أو عكر، مثل: Acacia in water</td></tr>
                                <tr><td>Coarse dispersion</td><td>أكبر من 1000 nm</td><td>عكر (Turbid)، يترسب، مثل: المستحلب والمعلق</td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Type</th><th>Particle Size</th><th>Appearance & Notes</th></tr>
                                <tr><td>True solution</td><td>< 1 nm</td><td>Clear, completely dissolve</td></tr>
                                <tr><td>Colloidal dispersion</td><td>1 - 1000 nm</td><td>Clear/turbid, e.g., Acacia in water</td></tr>
                                <tr><td>Coarse dispersion</td><td>> 1000 nm</td><td>Turbid, settle down, e.g., Emulsions</td></tr>
                             </table>`
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "التصنيف حسب نوع المذاب", en: "Based on Type of Solute" },
                    content: {
                        ar: "1. <b>Nonelectrolytes:</b> لا تتأين ولا توصل الكهرباء (مثل السكروز والجلسرين).<br>2. <b>Strong electrolytes:</b> تتأين كلياً وتوصل الكهرباء (مثل NaCl, HCl).<br>3. <b>Weak electrolytes:</b> تتأين جزئياً (مثل حمض الأسيتيك Acetic acid).",
                        en: "1. <b>Nonelectrolytes:</b> Do not ionize, no conduction (e.g., Sucrose, Glycerin).<br>2. <b>Strong electrolytes:</b> Completely ionized, conduct electricity (e.g., NaCl, HCl).<br>3. <b>Weak electrolytes:</b> Partially ionized (e.g., Acetic acid)."
                    }
                }
            ]
        },
        {
            title: { ar: "خصائص المحاليل (Properties of Solutions)", en: "Properties of Solutions" },
            branches: [
                {
                    type: 'compare',
                    val1Title: { ar: "Colligative properties", en: "Colligative properties" },
                    val1: { ar: "تعتمد <b>فقط على العدد (التركيز)</b> لجسيمات المذاب، وليس على طبيعته الكيميائية.", en: "Depend on <b>number (concentration)</b> of dissolved solute, not on identity." },
                    val2Title: { ar: "Non-colligative properties", en: "Non-colligative properties" },
                    val2: { ar: "تعتمد على <b>طبيعة وهُوية (identity)</b> المذاب والمذيب.", en: "Depend on the <b>identity (nature)</b> of dissolved solute and solvent." }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "الخصائص التجميعية الأربعة (The Four Colligative Properties)", en: "The Four Colligative Properties" },
                    content: {
                        ar: "1- انخفاض الضغط البخاري (Vapor pressure lowering).<br>2- انخفاض درجة التجمد (Freezing point depression).<br>3- ارتفاع درجة الغليان (Boiling point elevation).<br>4- الضغط الأسموزي (Osmotic pressure).<br><br>*ملاحظة:* إضافة المذاب يقلل الضغط البخاري ويزيد درجة الغليان (> 100°C للماء).",
                        en: "1- Vapor pressure lowering.<br>2- Freezing point depression.<br>3- Boiling point elevation.<br>4- Osmotic pressure.<br><br>*Note:* Addition of solute decreases vapor pressure and increases boiling point."
                    }
                }
            ]
        },
        {
            title: { ar: "المحاليل المنظمة (Buffers)", en: "Buffers" },
            branches: [
                {
                    type: 'flip',
                    nodeTitle: { ar: "اضغط لتعرف: مم يتكون الـ Buffer؟", en: "Tap: What is a Buffer composed of?" },
                    content: {
                        ar: "يتكون من حمض ضعيف وقاعدته المرافقة (ملحه)، أو قاعدة ضعيفة وحمضها المرافق.",
                        en: "Weak acid and its conjugate base (salt), OR weak base and its conjugate acid."
                    }
                },
                {
                    type: 'compare',
                    val1Title: { ar: "إضافة حمض/قاعدة للماء", en: "Adding Acid/Base to Water" },
                    val1: { ar: "يتغير الـ pH بشكل ملحوظ (Considerably).<br><b>No buffer action</b>", en: "pH is altered considerably.<br><b>No buffer action</b>" },
                    val2Title: { ar: "إضافة حمض/قاعدة للـ Buffer", en: "Adding Acid/Base to Buffer" },
                    val2: { ar: "يقاوم التغير في الـ pH (No pH change).<br><b>Buffer Action</b>", en: "Resists changes in pH (No pH change).<br><b>Buffer Action</b>" }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "معادلات وتطبيقات البافر", en: "Buffer Equations & Uses" },
                    content: {
                        ar: "<b>حمض ضعيف وملحه:</b> $$pH = pK_a + \\log\\frac{[Salt]}{[Acid]}$$<br><b>قاعدة ضعيفة وملحها:</b> $$pH = pK_w - pK_b + \\log\\frac{[Base]}{[Salt]}$$<br><b>الاستخدامات:</b> ضبط الـ pH في التحليل، استقرار الأدوية (Stability)، دراسة ذوبانية الأدوية، ومعايرة أجهزة الـ pH.",
                        en: "<b>Weak acid:</b> $$pH = pK_a + \\log\\frac{[Salt]}{[Acid]}$$<br><b>Weak base:</b> $$pH = pK_w - pK_b + \\log\\frac{[Base]}{[Salt]}$$<br><b>Uses:</b> Adjust pH in analysis, drug stability, solubility studies, and pH meter calibration."
                    }
                }
            ]
        },
        {
            title: { ar: "الضغط الأسموزي وتأثيراته (Osmotic Pressure)", en: "Osmotic Pressure & Effects" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "مفاهيم هامة", en: "Important Concepts" },
                    content: {
                        ar: "<b>Osmotic Pressure:</b> الضغط المسئول عن مرور المذيب عبر غشاء شبه منفذ من المحلول المخفف للمركز.<br><b>Isosmotic:</b> محلولين لهما نفس الضغط الأسموزي (ونفس عدد جسيمات المذاب).",
                        en: "<b>Osmotic Pressure:</b> Pressure responsible for passage of solvent through semi-permeable membrane from dilute to conc.<br><b>Isosmotic:</b> 2 solutions having same osmotic pressure."
                    }
                },
                {
                    type: 'table',
                    nodeTitle: { ar: "تأثير المحاليل على كرات الدم الحمراء", en: "Effect of Solutions on RBCs" },
                    content: {
                        ar: `<table>
                                <tr><th>المحلول</th><th>حركة الماء</th><th>التأثير على الخلية</th></tr>
                                <tr><td>Isotonic</td><td>متزنة</td><td>تحتفظ بشكلها (Retain tone)</td></tr>
                                <tr><td>Hypotonic</td><td>يدخل للخلية (Inward)</td><td>تنتفخ وتنفجر (Haemolysis) - <b>تلف غير رجعي</b></td></tr>
                                <tr><td>Hypertonic</td><td>يخرج من الخلية (Outward)</td><td>تنكمش (Crenation) - <b>تلف مؤقت رجعي</b></td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Solution</th><th>Water Flow</th><th>Effect on RBCs</th></tr>
                                <tr><td>Isotonic</td><td>Balanced</td><td>Retain tone</td></tr>
                                <tr><td>Hypotonic</td><td>Passes inward</td><td>Swell & rupture (Haemolysis) - <b>Irreversible</b></td></tr>
                                <tr><td>Hypertonic</td><td>Passes outward</td><td>Shrinkage (Crenation) - <b>Reversible</b></td></tr>
                             </table>`
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
                        ar: "<b>التعريف:</b> كمية الـ NaCl المكافئة أسموزياً لجرام واحد من الدواء.<br><b>خطوات الحساب:</b><br>1- حساب الـ NaCl الكلي المطلوب للماء (0.9 جرام لكل 100 مل).<br>2- حساب الـ NaCl المكافئ للدواء الموجود (كمية الدواء × NaCl eq).<br>3- الـ NaCl المطلوب إضافته = الكلي - المكافئ للدواء.",
                        en: "<b>Definition:</b> Amount of NaCl that is osmotically equivalent to 1 gram of the drug.<br><b>Steps:</b><br>1- Total NaCl needed (0.9 g per 100 ml).<br>2- NaCl represented by drug (Drug amount × NaCl eq).<br>3- NaCl to be added = Total - Drug's eq."
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "المواد البديلة للـ NaCl", en: "Alternatives to NaCl" },
                    content: {
                        ar: "في حالة وجود تعارض (Incompatibility)، لا يمكن استخدام NaCl. نستخدم بدائل مثل:<br>Boric acid, Potassium Nitrate, Mannitol, Dextrose.<br><br><b>قانون الحساب للبديل:</b><br>كمية البديل = (كمية الـ NaCl المطلوبة) ÷ (المكافئ للبديل NaCl eq).",
                        en: "If incompatible, use alternatives: Boric acid, Potassium Nitrate, Mannitol, Dextrose.<br><br><b>Formula:</b><br>Amount of alternative = (Amount of NaCl needed) / (NaCl equivalent of alternative)."
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
                ar: ["التركيب الكيميائي (طبيعة) المذاب", "عدد جسيمات المذاب (التركيز)", "طبيعة المذيب فقط", "درجة حموضة المحلول"],
                en: ["Chemical nature (identity) of the solute", "Number of solute particles (concentration)", "Nature of solvent only", "pH of the solution"]
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
                ar: "الخصائص التي تعتمد على طبيعة (identity) المذاب والمذيب تُعرف بـ:",
                en: "Properties that depend on the identity (nature) of dissolved solute and solvent are called:"
            },
            opts: {
                ar: ["Colligative properties", "Non-colligative properties", "Thermodynamic properties", "Kinetic properties"],
                en: ["Colligative properties", "Non-colligative properties", "Thermodynamic properties", "Kinetic properties"]
            },
            correct: 1
        },
        {
            q: {
                ar: "وفقاً للتصنيف حسب نوع المذاب، يعتبر السكروز (Sucrose) والجلسرين (Glycerin) من:",
                en: "Based on the type of solute, Sucrose and Glycerin are considered:"
            },
            opts: {
                ar: ["Strong electrolytes", "Weak electrolytes", "Nonelectrolytes", "Colloids"],
                en: ["Strong electrolytes", "Weak electrolytes", "Nonelectrolytes", "Colloids"]
            },
            correct: 2
        },
        {
            q: {
                ar: "عند إضافة مذاب إلى المذيب، فإن درجة الغليان (Boiling point):",
                en: "When a solute is added to a solvent, the boiling point:"
            },
            opts: {
                ar: ["تنخفض", "ترتفع (Elevated)", "تبقى ثابتة", "تساوي صفر"],
                en: ["Decreases", "Increases (Elevated)", "Remains constant", "Equals zero"]
            },
            correct: 1
        },
        {
            q: {
                ar: "مم يتكون المحلول المنظم (Buffer)؟",
                en: "What is a buffer combination made of?"
            },
            opts: {
                ar: ["حمض قوي وملحه", "قاعدة قوية وملحها", "حمض ضعيف وملحه أو قاعدة ضعيفة وملحها", "حمض قوي وقاعدة قوية"],
                en: ["Strong acid and its salt", "Strong base and its salt", "Weak acid and its salt OR weak base and its salt", "Strong acid and strong base"]
            },
            correct: 2
        },
        {
            q: {
                ar: "ماذا يحدث للـ pH عند إضافة حمض قوي أو قاعدة قوية إلى الماء النقي (Water) مقارنة بالـ Buffer؟",
                en: "What happens to the pH when a strong acid or base is added to pure water compared to a Buffer?"
            },
            opts: {
                ar: ["لا يتغير في الحالتين", "يتغير بشدة في الماء، ولا يتغير تقريباً في البافر", "يتغير بشدة في البافر، ولا يتغير في الماء", "يرتفع دائماً في الحالتين"],
                en: ["Does not change in both", "Altered considerably in water, resists change in Buffer", "Altered considerably in Buffer, no change in water", "Always increases in both"]
            },
            correct: 1
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
                ar: "واحدة من الآتي **ليست** من الاستخدامات الصيدلانية للـ Buffers:",
                en: "Which of the following is **NOT** a pharmaceutical use of Buffers?"
            },
            opts: {
                ar: ["الحفاظ على استقرار الأدوية (Stability)", "معايرة أجهزة الـ pH", "زيادة التوتر السطحي للمحلول", "دراسة ذوبانية الأدوية وتأثرها بالـ pH"],
                en: ["Maintain stability of dosage forms", "Calibration of pH meters", "Increase surface tension of the solution", "Study pH dependence of drug solubility"]
            },
            correct: 2
        },
        {
            q: {
                ar: "انتقال المذيب (Solvent) عبر غشاء شبه منفذ من المحلول المخفف إلى المركز يُعرف بـ:",
                en: "The passage of solvent through a semi-permeable membrane from a dilute to a concentrated solution is known as:"
            },
            opts: {
                ar: ["Osmosis", "Diffusion", "Crenation", "Active transport"],
                en: ["Osmosis", "Diffusion", "Crenation", "Active transport"]
            },
            correct: 0
        },
        {
            q: {
                ar: "عندما يكون لمحلولين نفس الضغط الأسموزي ونفس عدد جسيمات المذاب، يطلق عليهما:",
                en: "When 2 solutions have the same osmotic pressure and exactly the same number of solute units, they are called:"
            },
            opts: {
                ar: ["Hypertonic", "Hypotonic", "Isosmotic", "Colloidal"],
                en: ["Hypertonic", "Hypotonic", "Isosmotic", "Colloidal"]
            },
            correct: 2
        },
        {
            q: {
                ar: "ماذا يحدث لكرات الدم الحمراء عند وضعها في محلول Hypotonic؟",
                en: "What happens to red blood cells when placed in a Hypotonic solution?"
            },
            opts: {
                ar: ["تنكمش بشكل مؤقت (Crenation)", "يخرج منها الماء", "تنتفخ وتنفجر (Haemolysis) بشكل غير قابل للعكس", "تحتفظ بشكلها وحجمها الطبيعي"],
                en: ["Shrink temporarily (Crenation)", "Water passes outward", "Swell and rupture (Haemolysis) irreversibly", "Retain their normal shape and tone"]
            },
            correct: 2
        },
        {
            q: {
                ar: "الضرر الذي يحدث لكرات الدم الحمراء في المحلول الـ Hypertonic (وهو الانكماش Crenation) يعتبر:",
                en: "The damage that occurs to red blood cells in a Hypertonic solution (Crenation) is considered:"
            },
            opts: {
                ar: ["غير قابل للعكس (Irreversible)", "قابل للعكس ومؤقت (Reversible temporarily)", "مميت فوري للخلية", "يؤدي لانفجار الخلية (Haemolysis)"],
                en: ["Irreversible", "Reversible-Temporarily damage", "Immediately fatal to the cell", "Leads to cell rupture (Haemolysis)"]
            },
            correct: 1
        },
        {
            q: {
                ar: "كم جرام من كلوريد الصوديوم (NaCl) نحتاجه لتحضير 100 مل من محلول Isotonic للعين؟",
                en: "How many grams of NaCl are required to prepare 100 ml of an isotonic solution?"
            },
            opts: {
                ar: ["9.0 جرام", "0.9 جرام", "0.09 جرام", "1.9 جرام"],
                en: ["9.0 gram", "0.9 gram", "0.09 gram", "1.9 gram"]
            },
            correct: 1
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
                ar: "في حسابات Isotonicity: إذا كان الـ NaCl المطلوب كلياً هو 0.27g، والـ NaCl المكافئ للدواء الموجود هو 0.069g. كم الـ NaCl الذي يجب إضافته؟",
                en: "In Isotonicity calculations: If total NaCl needed is 0.27g, and NaCl represented by the drug is 0.069g. How much NaCl should be added?"
            },
            opts: {
                ar: ["0.339g", "0.201g", "0.069g", "0.27g"],
                en: ["0.339g", "0.201g", "0.069g", "0.27g"]
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
        },
        {
            q: {
                ar: "لحساب كمية حمض البوريك (Boric acid) المطلوبة كبديل للـ NaCl لضبط الـ Isotonicity، نقوم بـ:",
                en: "To calculate the required amount of Boric acid as an alternative to NaCl for Isotonicity, we:"
            },
            opts: {
                ar: ["ضرب كمية الـ NaCl المطلوبة في المكافئ لحمض البوريك", "قسمة كمية الـ NaCl المطلوبة على المكافئ لحمض البوريك (NaCl eq of Boric)", "جمع كمية الـ NaCl المطلوبة مع وزن الدواء", "استخدام نفس كمية الـ NaCl بالجرام دون تغيير"],
                en: ["Multiply NaCl amount by Boric acid eq", "Divide NaCl amount by NaCl eq of Boric acid", "Add NaCl amount to drug weight", "Use the exact same NaCl amount in grams"]
            },
            correct: 1
        },
        {
            q: {
                ar: "محاليل Coarse dispersion تتميز بأنها:",
                en: "Coarse dispersion solutions are characterized by:"
            },
            opts: {
                ar: ["قطر جسيماتها أقل من 1 نانومتر وشفافة", "لا تترسب بالجاذبية (No effect of gravity)", "قطر جسيماتها أكبر من 1000 نانومتر، عكرة، وتترسب بمرور الوقت", "نظام ذو طور واحد متجانس (One-Phase system)"],
                en: ["Particle size < 1nm and clear", "Do not settle by gravity", "Particle size > 1000nm, turbid, and settle down", "Homogeneous One-Phase system"]
            },
            correct: 2
        }
    ]
});