allLectures.push({
    id: 'lec5',
    title: {
        ar: "المحاضرة 5: التوتر السطحي (Surface Tension)",
        en: "Lecture 5: Surface Tension"
    },
    revision: [
        {
            title: { ar: "القوى والتوتر السطحي والبيني", en: "Forces, Surface & Interfacial Tension" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "أنواع القوى (Types of Forces)", en: "Types of Forces" },
                    content: {
                        ar: "1. <b>قوى التماسك (Cohesive forces):</b> قوى التجاذب بين الجزيئات المتشابهة (Like molecules).<br>2. <b>قوى التلاصق (Adhesive forces):</b> قوى التجاذب بين الجزيئات المختلفة (Unlike molecules).",
                        en: "1. <b>Cohesive forces:</b> Intermolecular attractions between like molecules.<br>2. <b>Adhesive forces:</b> Intermolecular attractions between unlike molecules."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "مقارنة بين التوتر السطحي والبيني", en: "Surface vs Interfacial Tension" },
                    content: {
                        ar: `<table>
                                <tr><th>وجه المقارنة</th><th>التوتر السطحي (Surface Tension)</th><th>التوتر البيني (Interfacial Tension)</th></tr>
                                <tr><td>الأطوار (Phases)</td><td>بين سائل وهواء (Liquid & Air)</td><td>بين سائلين غير ممتزجين (2 immiscible liquids)</td></tr>
                                <tr><td>التعريف</td><td>القوة لكل وحدة طول الموازية للسطح لمعادلة الجذب للداخل.</td><td>القوة لكل وحدة طول عند الحد الفاصل لمعادلة الجذب للداخل.</td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Comparison</th><th>Surface Tension</th><th>Interfacial Tension</th></tr>
                                <tr><td>Phases</td><td>Liquid & Air</td><td>2 immiscible liquids</td></tr>
                                <tr><td>Definition</td><td>Force per unit length parallel to the surface to counterbalance inward pull.</td><td>Force per unit length at the interface to counterbalance inward pull.</td></tr>
                             </table>`
                    }
                },
                {
                    type: 'other',
                    nodeTitle: { ar: "تطبيقات التوتر السطحي والبيني", en: "Applications" },
                    content: {
                        ar: "1. امتزاز الأدوية على الجزيئات الصلبة.<br>2. اختراق الجزيئات للأغشية (Membranes).<br>3. استحلاب الزيوت (Emulsions).<br>4. تشتيت الجزيئات غير الذائبة في السوائل (Suspensions).",
                        en: "1. Adsorption of drugs on solid particles.<br>2. Penetration of molecules through membranes.<br>3. Emulsification of oils (Emulsions).<br>4. Dispersion of insoluble particles in liquid (Suspensions)."
                    }
                }
            ]
        },
        {
            title: { ar: "قياس التوتر السطحي", en: "Measurement of Surface Tension" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "طريقة عد القطرات (Stalagmometric method)", en: "Drop Count Method" },
                    content: {
                        ar: "تعتمد على عد القطرات. القطرة تنفصل عندما يتساوى وزنها مع التوتر السطحي. العلاقة بين التوتر السطحي وعدد القطرات عكسية.<br><b>القانون:</b><br>$$\\frac{\\gamma_1}{\\gamma_2} = \\frac{n_2}{n_1}$$<br>حيث $n$ هو عدد القطرات و $\\gamma$ هو التوتر السطحي.<br><b>ثابت مهم:</b> التوتر السطحي للماء $\\gamma_{water} = 72.8 \\text{ dyne/cm}$.",
                        en: "Based on counting drops. A drop detaches when its weight equals surface tension. The relationship between surface tension and drop count is inversely proportional.<br><b>Law:</b><br>$$\\frac{\\gamma_1}{\\gamma_2} = \\frac{n_2}{n_1}$$<br>Where $n$ is drop count and $\\gamma$ is surface tension.<br><b>Important Constant:</b> Surface tension of water $\\gamma_{water} = 72.8 \\text{ dyne/cm}$."
                    }
                }
            ]
        },
        {
            title: { ar: "المواد ذات النشاط السطحي (Surfactants)", en: "Surfactants" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "أهم أنواع الـ Surfactants", en: "Main Types of Surfactants" },
                    content: {
                        ar: `<table>
                                <tr><th>النوع</th><th>الشحنة</th><th>ملاحظات هامة</th></tr>
                                <tr><td>Anionic</td><td>سالبة (-)</td><td>غير مناسب للاستخدام الداخلي (طعم سيء ومهيج)، مثل: Sodium lauryl sulphate.</td></tr>
                                <tr><td>Cationic</td><td>موجبة (+)</td><td>له تأثير قاتل للبكتيريا (Preservatives)، مثل: Cetrimide و Benzalkonium chloride.</td></tr>
                                <tr><td><b>Nonionic (الأهم)</b></td><td><b>بدون شحنة</b></td><td><b>مفيد ومناسب جداً للتركيبات الفموية والحقن لأن سميته وتهيجه منخفضة (مثل Spans و Tweens).</b></td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Type</th><th>Charge</th><th>Important Notes</th></tr>
                                <tr><td>Anionic</td><td>Negative (-)</td><td>Not suitable for internal use (unpleasant taste, irritant). Ex: Sodium lauryl sulphate.</td></tr>
                                <tr><td>Cationic</td><td>Positive (+)</td><td>Has bactericidal action (Preservatives). Ex: Cetrimide, Benzalkonium chloride.</td></tr>
                                <tr><td><b>Nonionic (Most Important)</b></td><td><b>No charge</b></td><td><b>Useful for oral and parenteral formulations because of low irritation and toxicity (Ex: Spans, Tweens).</b></td></tr>
                             </table>`
                    }
                }
            ]
        },
        {
            title: { ar: "ميزان الجذب للماء والدهون (HLB) والمذيلات", en: "HLB Scale & Micelles" },
            branches: [
                {
                    type: 'origin',
                    nodeTitle: { ar: "نظام الـ HLB", en: "HLB Scale" },
                    content: {
                        ar: "مقياس من 1 إلى 20 يوضح نسبة الأجزاء المحبة للماء والمحبة للدهون.<br><b>القاعدة الأساسية:</b><br>- كلما زاد الرقم (The higher HLB)، زادت القابلية للذوبان في الماء (Hydrophilic) مثل Tweens.<br>- كلما قل الرقم (The lower HLB)، زادت القابلية للذوبان في الدهون (Lipophilic) مثل Spans.",
                        en: "A scale (1-20) representing proportions of lipophilic and hydrophilic parts.<br><b>Main Rule:</b><br>- The higher the HLB number, the more Hydrophilic (water soluble) e.g., Tweens.<br>- The lower the HLB number, the more Lipophilic (oil soluble) e.g., Spans."
                    }
                },
                {
                    type: 'key',
                    nodeTitle: { ar: "المذيلات (Micelles) و (CMC)", en: "Micelles & CMC" },
                    content: {
                        ar: "<b>Micelles:</b> هي تجمعات (Aggregates) من جزيئات الـ Surfactants تتكون عند زيادة تركيزها.<br><b>CMC (Critical Micelle Concentration):</b> هو تركيز الـ Surfactant الذي تبدأ عنده المذيلات في التكون.<br><b>أنواع المذيلات:</b><br>1- <b>Normal Micelle (O/W):</b> الذيول (الكارهة للماء) للداخل، والرؤوس (المحبة للماء) للخارج تجاه الماء.<br>2- <b>Reverse Micelle (W/O):</b> الرؤوس للداخل، والذيول للخارج تجاه الزيت.",
                        en: "<b>Micelles:</b> Aggregates of surfactants that occur as concentration increases.<br><b>CMC (Critical Micelle Concentration):</b> The concentration at which micelles form.<br><b>Types:</b><br>1- <b>Normal Micelle (O/W):</b> Tails at the center, Heads extending out to water.<br>2- <b>Reverse Micelle (W/O):</b> Heads at the center, Tails extending out to oil."
                    }
                }
            ]
        },
        {
            title: { ar: "تطبيقات الـ Surfactants الطبية والصيدلانية", en: "Applications of Surfactants" },
            branches: [
                {
                    type: 'other',
                    nodeTitle: { ar: "الاستخدامات الطبية (Medicinal)", en: "Medicinal Applications" },
                    content: {
                        ar: "1. <b>مضادات الميكروبات (Antimicrobials):</b> مثل الـ Cationic surfactants التي ترتبط بسطح البكتيريا وتدمره (مثل Benzalkonium chloride).<br>2. <b>طارد للبلغم (Expectorants):</b> يقلل التصاق البلغم ليسهل خروجه.",
                        en: "1. <b>Antimicrobials:</b> Cationic surfactants adsorb on bacteria surface and change permeability causing death (e.g., Benzalkonium chloride).<br>2. <b>Expectorants:</b> Loosen mucus resulting in easy removal."
                    }
                },
                {
                    type: 'key',
                    nodeTitle: { ar: "الاستخدامات الصيدلانية حسب الـ HLB", en: "Pharmaceutical Uses (By HLB)" },
                    content: {
                        ar: `<table>
                                <tr><th>قيمة HLB</th><th>الاستخدام الصيدلاني</th></tr>
                                <tr><td>1 - 3</td><td>Antifoaming agents (مضادات الرغوة)</td></tr>
                                <tr><td>3 - 6</td><td>W/O emulsifier (عوامل استحلاب ماء/زيت مثل Span)</td></tr>
                                <tr><td>7 - 9</td><td>Wetting agents (عوامل ترطيب)</td></tr>
                                <tr><td>8 - 16</td><td>O/W emulsifier (عوامل استحلاب زيت/ماء مثل Tween)</td></tr>
                                <tr><td>13 - 15</td><td>Detergents (منظفات)</td></tr>
                                <tr><td>15 - 18</td><td>Solubilizing agents (عوامل إذابة)</td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>HLB Value</th><th>Pharmaceutical Use</th></tr>
                                <tr><td>1 - 3</td><td>Antifoaming agents</td></tr>
                                <tr><td>3 - 6</td><td>W/O emulsifier (e.g., Span)</td></tr>
                                <tr><td>7 - 9</td><td>Wetting agents</td></tr>
                                <tr><td>8 - 16</td><td>O/W emulsifier (e.g., Tween)</td></tr>
                                <tr><td>13 - 15</td><td>Detergents</td></tr>
                                <tr><td>15 - 18</td><td>Solubilizing agents</td></tr>
                             </table>`
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: {
                ar: "كيف تُعرف قوى التماسك (Cohesive forces)؟",
                en: "How are Cohesive forces defined?"
            },
            opts: {
                ar: ["قوى التجاذب بين الجزيئات المختلفة", "قوى التجاذب بين الجزيئات المتشابهة", "قوى التنافر داخل النواة", "قوى الجاذبية الأرضية"],
                en: ["Intermolecular attractions between unlike molecules", "Intermolecular attractions between like molecules", "Repulsive forces inside the nucleus", "Gravitational forces"]
            },
            correct: 1
        },
        {
            q: {
                ar: "أين يتواجد التوتر البيني (Interfacial Tension)؟",
                en: "Where does Interfacial Tension exist?"
            },
            opts: {
                ar: ["بين سائل وهواء", "داخل الفراغ", "بين سائلين غير ممتزجين (2 immiscible liquids)", "بين غازين متجانسين"],
                en: ["Between a liquid and air", "In a vacuum", "Between 2 immiscible liquids", "Between two homogeneous gases"]
            },
            correct: 2
        },
        {
            q: {
                ar: "في طريقة عد القطرات (Drop count method)، ما هي العلاقة بين التوتر السطحي وعدد القطرات؟",
                en: "In the Drop count method, what is the relationship between surface tension and the number of drops?"
            },
            opts: {
                ar: ["علاقة طردية", "علاقة عكسية ($\\frac{\\gamma_1}{\\gamma_2} = \\frac{n_2}{n_1}$)", "لا توجد علاقة ثابتة", "متساويان دائماً"],
                en: ["Direct proportional", "Inversely proportional ($\\frac{\\gamma_1}{\\gamma_2} = \\frac{n_2}{n_1}$)", "No constant relationship", "Always equal"]
            },
            correct: 1
        },
        {
            q: {
                ar: "ما هي القيمة الثابتة للتوتر السطحي للماء عند القياس بهذه الطرق؟",
                en: "What is the constant value of the surface tension of water when measured by these methods?"
            },
            opts: {
                ar: ["72.8 dyne/cm", "100 dyne/cm", "34.5 dyne/cm", "1.2 dyne/cm"],
                en: ["72.8 dyne/cm", "100 dyne/cm", "34.5 dyne/cm", "1.2 dyne/cm"]
            },
            correct: 0
        },
        {
            q: {
                ar: "أي نوع من الـ Surfactants يعتبر الأفضل للتركيبات الفموية (oral formulations) لأنه لا يحمل شحنة وسميته منخفضة؟",
                en: "Which type of Surfactant is considered best for oral formulations because it carries no charge and has low toxicity?"
            },
            opts: {
                ar: ["Anionic", "Cationic", "Nonionic", "Polymeric"],
                en: ["Anionic", "Cationic", "Nonionic", "Polymeric"]
            },
            correct: 2
        },
        {
            q: {
                ar: "طبقاً لقاعدة الـ HLB، كلما زاد الرقم (The higher HLB number)، فإن المادة تصبح:",
                en: "According to the HLB rule, the higher the HLB number, the substance becomes:"
            },
            opts: {
                ar: ["محبة للدهون بشكل أكبر (Lipophilic)", "لا تذوب إطلاقاً", "محبة للماء بشكل أكبر (Hydrophilic)", "متطايرة بسرعة"],
                en: ["More Lipophilic", "Completely insoluble", "More Hydrophilic", "Highly volatile"]
            },
            correct: 2
        },
        {
            q: {
                ar: "ما هو الـ CMC (Critical Micelle Concentration)؟",
                en: "What is the CMC (Critical Micelle Concentration)?"
            },
            opts: {
                ar: ["التركيز الذي ينفصل عنده الزيت عن الماء", "تركيز المادة الفعالة داخل القرص", "التركيز الذي تبدأ عنده تجمعات المذيلات (Micelles) في التكون", "درجة الحرارة التي يغلي عندها المحلول"],
                en: ["The concentration at which oil separates from water", "Concentration of active ingredient in a tablet", "The concentration of surfactant at which micelles form", "The temperature at which the solution boils"]
            },
            correct: 2
        },
        {
            q: {
                ar: "في المذيلة العكسية (Reverse Micelle - W/O)، كيف تترتب جزيئات الـ Surfactant؟",
                en: "In a Reverse Micelle (W/O), how do the surfactant molecules arrange themselves?"
            },
            opts: {
                ar: ["ذيولها (Tails) في المنتصف والرؤوس للخارج", "الرؤوس (Heads) في المنتصف والذيول تمتد للخارج تجاه الزيت", "تترتب بشكل عشوائي دون نظام", "تظل على هيئة طبقة مسطحة فقط"],
                en: ["Tails at the center and heads extending out", "Heads at the center, tails extending out to oil", "Arranged randomly without order", "Remain as a flat layer only"]
            },
            correct: 1
        },
        {
            q: {
                ar: "وفقاً لجدول الـ HLB، المواد التي تتراوح قيمة HLB لها بين (3 إلى 6) تُستخدم كـ:",
                en: "According to the HLB table, substances with an HLB value between (3 to 6) are used as:"
            },
            opts: {
                ar: ["O/W emulsifiers", "Wetting agents", "Solubilizing agents", "W/O emulsifiers"],
                en: ["O/W emulsifiers", "Wetting agents", "Solubilizing agents", "W/O emulsifiers"]
            },
            correct: 3
        },
        {
            q: {
                ar: "أي من الـ Surfactants التالية يُستخدم كمضاد للميكروبات (Antimicrobials) لقدرته على تدمير غشاء الخلية البكتيرية؟",
                en: "Which of the following surfactants is used as Antimicrobials due to its ability to destroy the bacterial cell membrane?"
            },
            opts: {
                ar: ["Cationic surfactants", "Nonionic surfactants", "Anionic surfactants", "Amphoteric surfactants"],
                en: ["Cationic surfactants", "Nonionic surfactants", "Anionic surfactants", "Amphoteric surfactants"]
            },
            correct: 0
        }
    ]
});