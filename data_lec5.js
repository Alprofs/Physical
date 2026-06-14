allLectures.push({
    id: 'lec5',
    title: {
        ar: "المحاضرة 5: الظواهر السطحية (Surface Phenomena)",
        en: "Lecture 5: Surface Phenomena"
    },
    revision: [
        {
            title: { ar: "القوى والتوتر السطحي والبيني", en: "Forces, Surface & Interfacial Tension" },
            branches: [
                {
                    type: 'flip',
                    nodeTitle: { ar: "اضغط لتعرف: أنواع القوى (Types of Forces)", en: "Tap: Types of Forces" },
                    content: {
                        ar: "1. <b>Cohesive forces:</b> تجاذب بين جزيئات متشابهة (Like molecules).<br>2. <b>Adhesive forces:</b> تجاذب بين جزيئات مختلفة (Unlike molecules).",
                        en: "1. <b>Cohesive forces:</b> Attractions between like molecules.<br>2. <b>Adhesive forces:</b> Attractions between unlike molecules."
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "شكل القطرة (Spherical Shape)", en: "Droplet Shape" },
                    content: {
                        ar: "لتقليل التوتر السطحي، تميل قطرات السائل لأخذ <b>شكل كروي (Spherical shape)</b> لأن هذا الشكل يعطي <b>أقل مساحة سطح (Smallest surface area)</b>.",
                        en: "To decrease tension, liquid droplets assume a <b>spherical shape</b> to have the <b>minimum surface area</b>."
                    }
                },
                {
                    type: 'compare',
                    val1Title: { ar: "التوتر السطحي (Surface Tension)", en: "Surface Tension" },
                    val1: { 
                        ar: "<b>الأطوار:</b> هواء وسائل (Air & Liquid)<br><br><b>التعريف:</b> القوة لكل وحدة طول <b>موازية للسطح</b> لمعادلة الجذب للداخل.", 
                        en: "<b>Phases:</b> Air & liquid<br><br><b>Def:</b> Force per unit length <b>parallel</b> to the surface to counterbalance inward pull." 
                    },
                    val2Title: { ar: "التوتر البيني (Interfacial Tension)", en: "Interfacial Tension" },
                    val2: { 
                        ar: "<b>الأطوار:</b> سائلين غير ممتزجين (2 immiscible liquids)<br><br><b>التعريف:</b> القوة لكل وحدة طول <b>عند الحد الفاصل</b> لمعادلة الجذب للداخل.", 
                        en: "<b>Phases:</b> 2 immiscible liquids<br><br><b>Def:</b> Force per unit length <b>at the interface</b> to counterbalance inward pull." 
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "ملاحظة هامة جداً", en: "Crucial Note" },
                    content: {
                        ar: "إذا كان السائلان ممتزجين تماماً (Completely miscible)، فإنه <b>لا يوجد توتر بيني (No interfacial tension)</b> بينهما.",
                        en: "If 2 liquids are completely miscible, <b>no interfacial tension</b> exists between them."
                    }
                }
            ]
        },
        {
            title: { ar: "قياس التوتر السطحي", en: "Measurement Methods" },
            branches: [
                {
                    type: 'info',
                    nodeTitle: { ar: "طريقة عد القطرات (Stalagmometric method)", en: "Drop Count Method" },
                    content: {
                        ar: "القطرة تنفصل عندما يتساوى وزنها مع التوتر السطحي. العلاقة بين التوتر السطحي وعدد القطرات <b>عكسية</b>.<br><br><b>القانون:</b> $\\frac{\\gamma_1}{\\gamma_2} = \\frac{n_2}{n_1}$<br><br><b>ثابت حفظ:</b> التوتر السطحي للماء $\\gamma_{water} = 72.8 \\text{ dyne/cm}$.",
                        en: "Drop detaches when its weight equals surface tension. Relationship is <b>inversely proportional</b>.<br><br><b>Law:</b> $\\frac{\\gamma_1}{\\gamma_2} = \\frac{n_2}{n_1}$<br><br><b>Constant:</b> $\\gamma_{water} = 72.8 \\text{ dyne/cm}$."
                    }
                }
            ]
        },
        {
            title: { ar: "المواد ذات النشاط السطحي (Surfactants)", en: "Surfactants" },
            branches: [
                {
                    type: 'table',
                    nodeTitle: { ar: "أهم أنواع الـ Surfactants (ركز على أول 3)", en: "Main Types of Surfactants" },
                    content: {
                        ar: `<table>
                                <tr><th>النوع (Type)</th><th>الشحنة</th><th>ملاحظات وأمثلة هامة</th></tr>
                                <tr><td><b>Anionic</b></td><td>سالبة (-)</td><td>غير مناسب للاستخدام الداخلي (طعم سيء).<br>مثل: <b>Sodium lauryl sulphate</b></td></tr>
                                <tr><td><b>Cationic</b></td><td>موجبة (+)</td><td>قاتل للبكتيريا (Bactericidal / Preservatives).<br>مثل: <b>Benzalkonium chloride</b></td></tr>
                                <tr><td style="background:#E8F5E9;"><b>Nonionic (الأهم)</b></td><td style="background:#E8F5E9;"><b>بدون شحنة</b></td><td style="background:#E8F5E9;"><b>الأفضل للتركيبات الفموية (oral) والحقن، سمية منخفضة.<br>مثل: Tweens و Spans</b></td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Type</th><th>Charge</th><th>Notes & Examples</th></tr>
                                <tr><td><b>Anionic</b></td><td>Negative (-)</td><td>Not suitable for internal use.<br>Ex: <b>Sodium lauryl sulphate</b></td></tr>
                                <tr><td><b>Cationic</b></td><td>Positive (+)</td><td>Bactericidal action (Preservatives).<br>Ex: <b>Benzalkonium chloride</b></td></tr>
                                <tr><td style="background:#E8F5E9;"><b>Nonionic (Most Imp)</b></td><td style="background:#E8F5E9;"><b>No charge</b></td><td style="background:#E8F5E9;"><b>Best for oral/parenteral, low toxicity.<br>Ex: Tweens & Spans</b></td></tr>
                             </table>`
                    }
                }
            ]
        },
        {
            title: { ar: "ميزان الجذب للماء والدهون (HLB) والمذيلات", en: "HLB Scale & Micelles" },
            branches: [
                {
                    type: 'info',
                    nodeTitle: { ar: "قاعدة الـ HLB", en: "The HLB Rule" },
                    content: {
                        ar: "<b>The higher HLB number:</b> المادة محبة للماء أكثر (More Hydrophilic) مثل Tweens.<br><b>The lower HLB number:</b> المادة محبة للدهون أكثر (More Lipophilic) مثل Spans.",
                        en: "<b>The higher HLB:</b> More Hydrophilic (e.g., Tweens).<br><b>The lower HLB:</b> More Lipophilic (e.g., Spans)."
                    }
                },
                {
                    type: 'flip',
                    nodeTitle: { ar: "اضغط لتعرف: ما هي الـ Micelles والـ CMC؟", en: "Tap: Micelles & CMC" },
                    content: {
                        ar: "<b>Micelles:</b> تجمعات (Aggregates) من الـ Surfactants تتكون عند زيادة التركيز.<br><b>CMC:</b> التركيز الذي تبدأ عنده هذه المذيلات في التكون.",
                        en: "<b>Micelles:</b> Aggregates of surfactants forming at higher conc.<br><b>CMC:</b> The concentration at which micelles form."
                    }
                },
                {
                    type: 'compare',
                    val1Title: { ar: "Normal Micelle (O/W)", en: "Normal Micelle (O/W)" },
                    val1: { 
                        ar: "الذيول (Tails) في المنتصف.<br>الرؤوس (Heads) ممتدة للخارج تجاه <b>الماء</b>.", 
                        en: "Tails at center.<br>Head groups extending out to <b>water</b>." 
                    },
                    val2Title: { ar: "Inverse Micelle (W/O)", en: "Inverse Micelle (W/O)" },
                    val2: { 
                        ar: "الرؤوس (Heads) في المنتصف.<br>الذيول (Tails) ممتدة للخارج تجاه <b>الزيت</b>.", 
                        en: "Heads at center.<br>Tails extending out to <b>oil</b>." 
                    }
                }
            ]
        },
        {
            title: { ar: "تطبيقات الـ Surfactants", en: "Applications" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "أهم التطبيقات (Medicinal & Pharma)", en: "Key Applications" },
                    content: {
                        ar: "1. <b>مضادات الميكروبات:</b> الـ Cationic تدمر غشاء البكتيريا.<br>2. <b>طارد للبلغم:</b> يسهل خروجه.<br>3. <b>Flocculating agents:</b> جزيئات تترسب لكن تتشتت بسهولة عند الرج (disperse on shaking).<br>4. <b>في الكريمات والمراهم:</b> تسرع معدل خروج الدواء (accelerate release rate).",
                        en: "1. <b>Antimicrobials:</b> Cationic destroys bacteria membrane.<br>2. <b>Expectorants:</b> Easy mucus removal.<br>3. <b>Flocculating agents:</b> Settle but easily disperse on shaking.<br>4. <b>Semisolids:</b> Accelerate the drug release rate."
                    }
                },
                {
                    type: 'table',
                    nodeTitle: { ar: "التطبيقات حسب قيمة الـ HLB", en: "Applications by HLB Value" },
                    content: {
                        ar: `<table>
                                <tr><th>قيمة HLB</th><th>الاستخدام الصيدلاني</th></tr>
                                <tr><td>1 - 3</td><td>Antifoaming agents (مضادات رغوة)</td></tr>
                                <tr><td>3 - 6</td><td><b>W/O emulsifier (مثل Spans)</b></td></tr>
                                <tr><td>7 - 9</td><td>Wetting agents (عوامل ترطيب)</td></tr>
                                <tr><td>8 - 16</td><td><b>O/W emulsifier (مثل Tweens)</b></td></tr>
                                <tr><td>13 - 15</td><td>Detergents (منظفات)</td></tr>
                                <tr><td>15 - 18</td><td><b>Solubilizing agents (عوامل إذابة)</b></td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>HLB Value</th><th>Pharmaceutical Use</th></tr>
                                <tr><td>1 - 3</td><td>Antifoaming agents</td></tr>
                                <tr><td>3 - 6</td><td><b>W/O emulsifier (e.g., Spans)</b></td></tr>
                                <tr><td>7 - 9</td><td>Wetting agents</td></tr>
                                <tr><td>8 - 16</td><td><b>O/W emulsifier (e.g., Tweens)</b></td></tr>
                                <tr><td>13 - 15</td><td>Detergents</td></tr>
                                <tr><td>15 - 18</td><td><b>Solubilizing agents</b></td></tr>
                             </table>`
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: { ar: "كيف تُعرف قوى التماسك (Cohesive forces)؟", en: "How are Cohesive forces defined?" },
            opts: {
                ar: ["قوى التجاذب بين الجزيئات المختلفة", "قوى التجاذب بين الجزيئات المتشابهة", "قوى التنافر", "قوى الجاذبية الأرضية"],
                en: ["Attractions between unlike molecules", "Attractions between like molecules", "Repulsive forces", "Gravitational forces"]
            },
            correct: 1
        },
        {
            q: { ar: "كيف تُعرف قوى التلاصق (Adhesive forces)؟", en: "How are Adhesive forces defined?" },
            opts: {
                ar: ["قوى التجاذب بين الجزيئات المختلفة (Unlike molecules)", "قوى التجاذب بين الجزيئات المتشابهة (Like molecules)", "قوى داخل النواة", "قوى الجاذبية"],
                en: ["Attractions between unlike molecules", "Attractions between like molecules", "Nuclear forces", "Gravity"]
            },
            correct: 0
        },
        {
            q: { ar: "لتقليل التوتر السطحي، تميل قطرات السائل لأخذ شكل كروي (Spherical shape) لكي:", en: "To decrease tension, droplets assume a spherical shape to:" },
            opts: {
                ar: ["تزيد من الحجم", "تمتلك أقل مساحة سطح (Smallest surface area)", "تطفو على الماء", "تتفاعل مع الهواء"],
                en: ["Increase volume", "Have the smallest surface area", "Float on water", "React with air"]
            },
            correct: 1
        },
        {
            q: { ar: "ما هو التوتر البيني (Interfacial tension) لـ سائلين ممتزجين تماماً (Completely miscible liquids)؟", en: "What is the interfacial tension of 2 completely miscible liquids?" },
            opts: {
                ar: ["72.8 dyne/cm", "مساوي للتوتر السطحي للماء", "لا يوجد توتر بيني (No interfacial tension)", "عالي جداً"],
                en: ["72.8 dyne/cm", "Equal to water surface tension", "No interfacial tension exists", "Very high"]
            },
            correct: 2
        },
        {
            q: { ar: "أين يتواجد التوتر البيني (Interfacial Tension) تحديداً؟", en: "Where does Interfacial Tension specifically exist?" },
            opts: {
                ar: ["بين سائل وهواء", "في الفراغ", "بين سائلين غير ممتزجين (2 immiscible liquids)", "بين غازين"],
                en: ["Between liquid and air", "In vacuum", "Between 2 immiscible liquids", "Between two gases"]
            },
            correct: 2
        },
        {
            q: { ar: "في طريقة (Drop count method)، ما هو القانون الصحيح الذي يربط التوتر السطحي بعدد القطرات؟", en: "In the Drop count method, what is the correct law relating surface tension and number of drops?" },
            opts: {
                ar: ["$\\frac{\\gamma_1}{\\gamma_2} = \\frac{n_1}{n_2}$", "$\\frac{\\gamma_1}{\\gamma_2} = \\frac{n_2}{n_1}$", "$\\gamma_1 \\times \\gamma_2 = n_1 \\times n_2$", "$\\gamma_1 + \\gamma_2 = n_1 + n_2$"],
                en: ["$\\frac{\\gamma_1}{\\gamma_2} = \\frac{n_1}{n_2}$", "$\\frac{\\gamma_1}{\\gamma_2} = \\frac{n_2}{n_1}$", "$\\gamma_1 \\times \\gamma_2 = n_1 \\times n_2$", "$\\gamma_1 + \\gamma_2 = n_1 + n_2$"]
            },
            correct: 1
        },
        {
            q: { ar: "ما هي القيمة الثابتة للتوتر السطحي للماء؟", en: "What is the constant value of the surface tension of water?" },
            opts: {
                ar: ["72.8 dyne/cm", "100 dyne/cm", "34.5 dyne/cm", "1 dyne/cm"],
                en: ["72.8 dyne/cm", "100 dyne/cm", "34.5 dyne/cm", "1 dyne/cm"]
            },
            correct: 0
        },
        {
            q: { ar: "أي نوع من الـ Surfactants يعتبر الأفضل للتركيبات الفموية (oral formulations) لأنه لا يحمل شحنة؟", en: "Which type of Surfactant is best for oral formulations because it carries no charge?" },
            opts: {
                ar: ["Anionic", "Cationic", "Nonionic", "Polymeric"],
                en: ["Anionic", "Cationic", "Nonionic", "Polymeric"]
            },
            correct: 2
        },
        {
            q: { ar: "مادة الـ Sodium lauryl sulphate تعتبر مثالاً على أي نوع من الـ Surfactants؟", en: "Sodium lauryl sulphate is an example of which type of Surfactants?" },
            opts: {
                ar: ["Anionic", "Cationic", "Nonionic", "Amphoteric"],
                en: ["Anionic", "Cationic", "Nonionic", "Amphoteric"]
            },
            correct: 0
        },
        {
            q: { ar: "أي من الـ Surfactants يمتلك خصائص قاتلة للبكتيريا (Bactericidal) ويستخدم كـ Preservative؟", en: "Which Surfactant has Bactericidal action and is used as a Preservative?" },
            opts: {
                ar: ["Nonionic", "Anionic", "Cationic (مثل Benzalkonium chloride)", "Polymeric"],
                en: ["Nonionic", "Anionic", "Cationic (e.g., Benzalkonium chloride)", "Polymeric"]
            },
            correct: 2
        },
        {
            q: { ar: "طبقاً لقاعدة الـ HLB، كلما زاد الرقم (The higher HLB)، فإن المادة تصبح:", en: "According to the HLB rule, the higher the HLB number, the substance becomes:" },
            opts: {
                ar: ["أكثر حباً للدهون (Lipophilic)", "أكثر حباً للماء (Hydrophilic)", "غير قابلة للذوبان", "صلبة جداً"],
                en: ["More Lipophilic", "More Hydrophilic", "Insoluble", "Very solid"]
            },
            correct: 1
        },
        {
            q: { ar: "المواد التي تمتلك HLB منخفض (Lower HLB) مثل الـ Spans تعتبر:", en: "Substances with lower HLB like Spans are considered:" },
            opts: {
                ar: ["Hydrophilic", "Lipophilic", "Amphoteric", "Gaseous"],
                en: ["Hydrophilic", "Lipophilic", "Amphoteric", "Gaseous"]
            },
            correct: 1
        },
        {
            q: { ar: "ما هو تعريف الـ CMC؟", en: "What is the definition of CMC?" },
            opts: {
                ar: ["التركيز الذي ينفصل عنده الزيت", "درجة غليان المحلول", "تركيز الـ Surfactant الذي تبدأ عنده المذيلات (Micelles) في التكون", "التركيز المميت للبكتيريا"],
                en: ["Concentration where oil separates", "Boiling point of solution", "Surfactant concentration at which micelles form", "Lethal concentration for bacteria"]
            },
            correct: 2
        },
        {
            q: { ar: "في المذيلة العادية (Normal Micelle - O/W)، أين تتواجد الذيول (Tails) الكارهة للماء؟", en: "In a Normal Micelle (O/W), where are the hydrophobic Tails located?" },
            opts: {
                ar: ["في المنتصف (At the center)", "ممتدة للخارج تجاه الماء", "على السطح الخارجي للوعاء", "تختفي تماماً"],
                en: ["At the center", "Extending out to water", "On the outer surface of the container", "Disappear completely"]
            },
            correct: 0
        },
        {
            q: { ar: "في المذيلة العكسية (Inverse Micelle - W/O)، كيف تترتب الجزيئات؟", en: "In an Inverse Micelle (W/O), how are the molecules arranged?" },
            opts: {
                ar: ["الذيول في المنتصف", "الرؤوس (Heads) في المنتصف، والذيول ممتدة للخارج تجاه الزيت", "بشكل عشوائي", "في طبقات متوازية فقط"],
                en: ["Tails at the center", "Heads at the center, tails extending out to oil", "Randomly", "In parallel layers only"]
            },
            correct: 1
        },
        {
            q: { ar: "وفقاً لجدول الـ HLB، المواد من (3 إلى 6) تُستخدم كـ:", en: "According to HLB values, substances from (3 to 6) are used as:" },
            opts: {
                ar: ["O/W emulsifier", "Solubilizing agents", "W/O emulsifier", "Detergents"],
                en: ["O/W emulsifier", "Solubilizing agents", "W/O emulsifier", "Detergents"]
            },
            correct: 2
        },
        {
            q: { ar: "المواد التي لها HLB من (8 إلى 16) تُستخدم كـ:", en: "Substances with HLB from (8 to 16) are used as:" },
            opts: {
                ar: ["W/O emulsifier", "O/W emulsifier (مثل Tweens)", "Antifoaming agents", "Wetting agents"],
                en: ["W/O emulsifier", "O/W emulsifier (e.g., Tweens)", "Antifoaming agents", "Wetting agents"]
            },
            correct: 1
        },
        {
            q: { ar: "ما هي وظيفة الـ Surfactants ذات الـ HLB من (15 إلى 18)؟", en: "What is the function of Surfactants with HLB (15 to 18)?" },
            opts: {
                ar: ["Solubilizing agents (عوامل إذابة)", "Wetting agents", "Detergents", "Antifoaming"],
                en: ["Solubilizing agents", "Wetting agents", "Detergents", "Antifoaming"]
            },
            correct: 0
        },
        {
            q: { ar: "عند استخدام الـ Surfactants كعوامل تنديف (Flocculating agents)، فإن الجزيئات تترسب ولكن:", en: "When using Surfactants as Flocculating agents, particles settle but:" },
            opts: {
                ar: ["تتحول لكتلة صلبة مستحيل كسرها", "تتشتت بسهولة عند الرج (easily disperse on shaking)", "تتبخر بسرعة", "يتغير لونها"],
                en: ["Form a hard cake", "Easily disperse on shaking", "Evaporate quickly", "Change color"]
            },
            correct: 1
        },
        {
            q: { ar: "لماذا تضاف الـ Surfactants إلى الكريمات والمراهم (Semisolid preparations)؟", en: "Why are Surfactants added to creams & ointments (Semisolid preparations)?" },
            opts: {
                ar: ["لإيقاف فعالية الدواء", "لتحويلها إلى سائل", "لتحسين دمج الماء وتسريع معدل خروج الدواء (accelerate release rate)", "لإعطائها لون مميز"],
                en: ["To stop drug efficacy", "To make it liquid", "Improve water incorporation & accelerate release rate", "To give it a distinct color"]
            },
            correct: 2
        }
    ]
});