allLectures.push({
    id: 'lec7',
    title: {
        ar: "المحاضرة 7: علم الجريان (Rheology)",
        en: "Lecture 7: Rheology"
    },
    revision: [
        {
            title: { ar: "مقدمة وأنواع التشوه (Deformation)", en: "Introduction & Deformation" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "أنواع الـ Deformation", en: "Types of Deformation" },
                    content: {
                        ar: "1- <b>التشوه المرن (Elastic Deformation):</b> تشوه تلقائي وقابل للعكس (Reversible)، ويحدث في الأجسام المرنة.<br>2- <b>التشوه اللدن (Plastic Deformation):</b> تشوه دائم وغير قابل للعكس (Irreversible)، ويحدث في الأجسام اللزجة (Viscous bodies).",
                        en: "1- <b>Elastic Deformation:</b> Spontaneous and reversible deformation. Exhibited by elastic bodies.<br>2- <b>Plastic Deformation:</b> Permanent or irreversible deformation. Exhibited by viscous bodies."
                    }
                }
            ]
        },
        {
            title: { ar: "أنظمة التدفق (Flow Systems) - المنحنيات والأمثلة مهمة جداً", en: "Flow Systems (Curves & Examples)" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "1- النظام النيوتوني (Newtonian)", en: "1- Newtonian Flow" },
                    content: {
                        ar: "<b>المنحنى (Curve):</b> خط مستقيم يمر بنقطة الأصل (Origin). اللزوجة ثابتة لا تتأثر بمعدل القص (Shear rate).<br><b>الأمثلة (Examples):</b> الماء، السوائل العضوية البسيطة، المحاليل الحقيقية، والمعلقات والمستحلبات المخففة.",
                        en: "<b>Curve:</b> Straight line passing through the origin. Viscosity is constant.<br><b>Examples:</b> Water, simple organic liquids, true solutions, and dilute suspensions/emulsions."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "2- النظام البلاستيكي (Plastic / Bingham bodies)", en: "2- Plastic Flow" },
                    content: {
                        ar: "<b>المنحنى (Curve):</b> لا يمر بنقطة الأصل، بل يقطع محور (Shear stress) عند نقطة تسمى <b>(Yield value)</b>. السائل لا يتدفق إلا بعد تجاوز هذه القيمة.<br><b>الأمثلة (Examples):</b> الجزيئات المتجمعة (Flocculated particles) في المعلقات المركزة، معجون الأسنان، الكريمات والمراهم.",
                        en: "<b>Curve:</b> Does NOT pass through origin. Intersects the shear stress axis at a point called <b>Yield value</b>. Does not flow until this value is reached.<br><b>Examples:</b> Flocculated particles in concentrated suspensions, toothpaste, creams & ointments."
                    }
                },
                {
                    type: 'key',
                    nodeTitle: { ar: "3- النظام السودوبلاستيك (Pseudoplastic / Shear-thinning)", en: "3- Pseudoplastic Flow" },
                    content: {
                        ar: "<b>المنحنى (Curve):</b> يبدأ من نقطة الأصل (لا يوجد Yield value)، ولا يوجد جزء مستقيم. اللزوجة <b>تقل</b> مع زيادة معدل القص (Shear-thinning).<br><b>الأمثلة (Examples):</b> البوليمرات في المحاليل (Polymers in solution) مثل الصموغ الطبيعية والصناعية (Tragacanth, Sodium alginate, Methyl cellulose)، والكاتشب.",
                        en: "<b>Curve:</b> Begins at the origin (No yield value), no linear part. Viscosity <b>decreases</b> with increasing shear rate (Shear-thinning).<br><b>Examples:</b> Polymers in solution (natural & synthetic gums like Tragacanth, Sodium alginate, Methyl cellulose), and Ketchup."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "4- النظام التمددي (Dilatant / Shear-thickening)", en: "4- Dilatant Flow" },
                    content: {
                        ar: "<b>المنحنى (Curve):</b> عكس السودوبلاستيك. اللزوجة <b>تزيد</b> مع زيادة معدل القص (Shear-thickening)، ويزداد الحجم.<br><b>الأمثلة (Examples):</b> المعلقات التي تحتوي على تركيز عالي (> 50%) من جزيئات صغيرة غير متجمعة (Deflocculated particles) مثل: نشا الذرة مع الماء (Cornflour and water).",
                        en: "<b>Curve:</b> Reverse of pseudoplastic. Viscosity <b>increases</b> with increasing shear rate (Shear-thickening), and volume increases.<br><b>Examples:</b> Suspensions containing high concentration (> 50%) of small, deflocculated particles. Example: Cornflour and water."
                    }
                }
            ]
        },
        {
            title: { ar: "السلوك المعتمد على الزمن (Time-Dependent Behavior)", en: "Time-Dependent Behavior" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "الرسم البياني وحلقة التلاكؤ (Hysteresis Loop)", en: "Hysteresis Loop" },
                    content: {
                        ar: "عند زيادة (Shear rate) ثم تقليله، لا ينطبق المنحنى النازل (Down-curve) على المنحنى الصاعد (Up-curve)، بل ينزاح لليسار مكوناً مساحة مغلقة تسمى <b>(Hysteresis loop)</b>. وجود هذه الحلقة يدل على سلوك معتمد على الزمن (Time dependent).",
                        en: "When shear rate is increased then decreased, the down-curve does not superimpose on the up-curve, forming an enclosed area called a <b>Hysteresis loop</b>. This loop indicates a time-dependent behavior."
                    }
                },
                {
                    type: 'origin',
                    nodeTitle: { ar: "التعريفات الهامة", en: "Important Definitions" },
                    content: {
                        ar: "1- <b>Thixotropy:</b> استعادة بطيئة للقوام (Consistency) الذي فُقد بسبب القص (Shearing). يحدث في الأنظمة التي يقل سمكها بالقص (Plastic & Pseudoplastic).<br>2- <b>Antithixotropy:</b> فقدان بطيء للقوام الذي تم اكتسابه بالقص. يرتبط بالأنظمة التمددية (Dilatant).",
                        en: "1- <b>Thixotropy:</b> An isothermal and slow-recovery of a consistency lost through shearing. Applied to shear-thinning systems (Plastic & Pseudoplastic).<br>2- <b>Antithixotropy:</b> Slow loss of consistency that was gained by shearing. Associated with dilatant systems."
                    }
                }
            ]
        },
        {
            title: { ar: "أهمية الـ Rheology في الصيدلة", en: "Importance of Rheology in Pharmacy" },
            branches: [
                {
                    type: 'key',
                    nodeTitle: { ar: "أهم التطبيقات الصيدلانية", en: "Pharmaceutical Applications" },
                    content: {
                        ar: "1- <b>التصنيع:</b> الخلط، التعبئة، والتغليف.<br>2- <b>الاستخراج من العبوة:</b> الصب من الزجاجة، العصر من الأنبوبة (المرهم)، الرش من البخاخات، والمرور عبر إبرة الحقنة.<br>3- <b>الاستخدام الموضعي:</b> دهن المنتج على الجلد.<br>4- <b>الثبات الفيزيائي:</b> للمعلقات والمستحلبات والمراهم.<br>5- <b>التوافر الحيوي (Bioavailability):</b> اللزوجة تؤثر على معدل امتصاص الدواء.<br>6- <b>تحرر الدواء:</b> خروج الدواء من الشكل الصيدلاني.",
                        en: "1- <b>Processing:</b> Mixing, filling & packaging.<br>2- <b>Removal from package:</b> Pouring, extrusion from a tube, spraying, and passage from syringe needle.<br>3- <b>Topical application:</b> Onto skin.<br>4- <b>Physical stability:</b> Of suspensions, emulsions, and semisolids.<br>5- <b>Bioavailability:</b> Viscosity affects absorption rate.<br>6- <b>Drug Release:</b> From dosage forms."
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: {
                ar: "أي نوع من التشوه (Deformation) يُعتبر دائماً وغير قابل للعكس (Irreversible) ويحدث في الأجسام اللزجة؟",
                en: "Which type of deformation is considered permanent and irreversible, exhibited by viscous bodies?"
            },
            opts: {
                ar: ["التشوه المرن (Elastic Deformation)", "التشوه اللدن (Plastic Deformation)", "التشوه الحجمي", "التشوه الحراري"],
                en: ["Elastic Deformation", "Plastic Deformation", "Volumetric Deformation", "Thermal Deformation"]
            },
            correct: 1
        },
        {
            q: {
                ar: "في أي نظام من أنظمة التدفق يكون المنحنى عبارة عن خط مستقيم يمر بنقطة الأصل (Origin)؟",
                en: "In which flow system is the curve a straight line passing through the origin?"
            },
            opts: {
                ar: ["Plastic flow", "Pseudoplastic flow", "Dilatant flow", "Newtonian flow"],
                en: ["Plastic flow", "Pseudoplastic flow", "Dilatant flow", "Newtonian flow"]
            },
            correct: 3
        },
        {
            q: {
                ar: "النظام الذي لا يتدفق فيه السائل إلا بعد تطبيق قوة تتجاوز قيمة معينة تسمى (Yield value) هو:",
                en: "The system in which the liquid does not flow until a force exceeding a certain value called (Yield value) is applied is:"
            },
            opts: {
                ar: ["Newtonian", "Dilatant", "Plastic (Bingham bodies)", "Pseudoplastic"],
                en: ["Newtonian", "Dilatant", "Plastic (Bingham bodies)", "Pseudoplastic"]
            },
            correct: 2
        },
        {
            q: {
                ar: "معجون الأسنان والكريمات والمراهم التي تحتوي على جزيئات متجمعة (Flocculated) هي أمثلة على:",
                en: "Toothpaste, creams, and ointments containing flocculated particles are examples of:"
            },
            opts: {
                ar: ["Pseudoplastic flow", "Plastic flow", "Newtonian flow", "Dilatant flow"],
                en: ["Pseudoplastic flow", "Plastic flow", "Newtonian flow", "Dilatant flow"]
            },
            correct: 1
        },
        {
            q: {
                ar: "محاليل البوليمرات مثل الصموغ (Tragacanth) والكاتشب تعتبر أمثلة على أي نظام، حيث تقل اللزوجة بزيادة القص؟",
                en: "Polymer solutions like gums (Tragacanth) and Ketchup are examples of which system, where viscosity decreases with shear?"
            },
            opts: {
                ar: ["Newtonian", "Plastic", "Dilatant", "Pseudoplastic (Shear-thinning)"],
                en: ["Newtonian", "Plastic", "Dilatant", "Pseudoplastic (Shear-thinning)"]
            },
            correct: 3
        },
        {
            q: {
                ar: "في النظام التمددي (Dilatant flow)، ماذا يحدث للزوجة السائل عند زيادة معدل القص (Shear rate)؟",
                en: "In Dilatant flow, what happens to the viscosity of the liquid when the shear rate increases?"
            },
            opts: {
                ar: ["تقل اللزوجة", "تظل ثابتة", "تزداد اللزوجة (Shear-thickening)", "ينعدم التدفق تماماً"],
                en: ["Viscosity decreases", "Remains constant", "Viscosity increases (Shear-thickening)", "Flow stops completely"]
            },
            correct: 2
        },
        {
            q: {
                ar: "أي من التالي يعتبر مثالاً تقليدياً على النظام التمددي (Dilatant)؟",
                en: "Which of the following is a classic example of a Dilatant system?"
            },
            opts: {
                ar: ["الماء المقطر", "نشا الذرة مع الماء بتركيز عالي (> 50%)", "الكاتشب", "معجون الأسنان"],
                en: ["Distilled water", "Cornflour and water at high concentration (> 50%)", "Ketchup", "Toothpaste"]
            },
            correct: 1
        },
        {
            q: {
                ar: "ظهور حلقة مغلقة (Hysteresis loop) في الرسم البياني للـ Rheology يدل على:",
                en: "The appearance of an enclosed area (Hysteresis loop) in a rheogram indicates:"
            },
            opts: {
                ar: ["سلوك مستقل عن الزمن (Time-independent)", "سلوك معتمد على الزمن (Time-dependent behavior)", "نظام نيوتوني مثالي", "وجود شوائب في السائل"],
                en: ["Time-independent behavior", "Time-dependent behavior", "Ideal Newtonian system", "Presence of impurities in the liquid"]
            },
            correct: 1
        },
        {
            q: {
                ar: "ما هو المصطلح الذي يعبر عن الاستعادة البطيئة للقوام الذي فُقد بسبب عملية القص (Shearing)؟",
                en: "What is the term for the slow recovery of a consistency that was lost through shearing?"
            },
            opts: {
                ar: ["Antithixotropy", "Newtonian flow", "Thixotropy", "Elasticity"],
                en: ["Antithixotropy", "Newtonian flow", "Thixotropy", "Elasticity"]
            },
            correct: 2
        },
        {
            q: {
                ar: "كل ما يلي يعتبر من أهمية دراسة الـ Rheology في الصيدلة، مــــا عــــدا:",
                en: "All of the following are important applications of Rheology in pharmacy EXCEPT:"
            },
            opts: {
                ar: ["الثبات الفيزيائي للمعلقات والمستحلبات", "معدل تحرر الدواء وامتصاصه", "الصب من الزجاجة والمرور عبر إبرة الحقنة", "تحديد اللون والطعم للمستحضرات"],
                en: ["Physical stability of suspensions and emulsions", "Drug release and absorption rate", "Pouring from a bottle and passage through a syringe needle", "Determining the color and taste of products"]
            },
            correct: 3
        }
    ]
});