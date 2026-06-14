allLectures.push({
    id: 'lec7',
    title: {
        ar: "المحاضرة 7: علم الجريان (Rheology)",
        en: "Lecture 7: Rheology"
    },
    revision: [
        {
            title: { ar: "أساسيات Rheology وأنواع التشوه (Deformation)", en: "Basics & Deformation Types" },
            branches: [
                {
                    type: 'info',
                    nodeTitle: { ar: "تعريف اللزوجة (Viscosity)", en: "Viscosity Definition" },
                    content: {
                        ar: "هي مقدار مقاومة السائل للتدفق. كلما زادت اللزوجة، زادت المقاومة.<br>الوحدة الأساسية: <b>Poise</b> أو (dyne.sec.cm^-2).<br>الوحدة الحركية (Kinematic Viscosity): <b>Stoke</b> وتساوي (اللزوجة / الكثافة).",
                        en: "Resistance of a fluid to flow. Higher viscosity = greater resistance.<br>Unit: <b>Poise</b> or (dyne.sec.cm^-2).<br>Kinematic Viscosity Unit: <b>Stoke</b> (Viscosity / Density)."
                    }
                },
                {
                    type: 'compare',
                    val1Title: { ar: "التشوه المرن (Elastic)", en: "Elastic Deformation" },
                    val1: { ar: "تشوه *تلقائي وقابل للعكس* (Reversible).<br>يحدث في الأجسام المرنة.", en: "Spontaneous and *reversible*.<br>Exhibited by elastic bodies." },
                    val2Title: { ar: "التشوه اللدن (Plastic)", en: "Plastic Deformation" },
                    val2: { ar: "تشوه *دائم وغير قابل للعكس* (Irreversible).<br>يحدث في الأجسام اللزجة.", en: "*Permanent or irreversible*.<br>Exhibited by viscous bodies." }
                }
            ]
        },
        {
            title: { ar: "الأنظمة النيوتونية وغير النيوتونية (هام جداً للفاينال)", en: "Newtonian & Non-Newtonian Systems" },
            branches: [
                {
                    type: 'info',
                    nodeTitle: { ar: "رسم النظام النيوتوني (Newtonian Rheogram)", en: "Newtonian Rheogram" },
                    content: {
                        ar: `<div style="text-align: center; margin: 15px 0; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                <h4 style="margin-top:0; color:#1f77b4;">Newtonian Flow</h4>
                                <svg viewBox="0 0 400 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                            <path d="M0,0 L0,6 L9,3 z" fill="black" />
                                        </marker>
                                    </defs>
                                    <line x1="50" y1="250" x2="380" y2="250" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <line x1="50" y1="250" x2="50" y2="20" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <text x="215" y="285" text-anchor="middle" font-size="15" font-weight="bold">Shear stress (F)</text>
                                    <text x="25" y="135" text-anchor="middle" font-size="15" font-weight="bold" transform="rotate(-90 25 135)">Rate of shear (G)</text>
                                    <text x="35" y="265" font-size="14">0</text>
                                    <line x1="50" y1="250" x2="320" y2="50" stroke="#1f77b4" stroke-width="3" />
                                </svg>
                             </div>`,
                        en: `<div style="text-align: center; margin: 15px 0; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                <h4 style="margin-top:0; color:#1f77b4;">Newtonian Flow</h4>
                                <svg viewBox="0 0 400 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                            <path d="M0,0 L0,6 L9,3 z" fill="black" />
                                        </marker>
                                    </defs>
                                    <line x1="50" y1="250" x2="380" y2="250" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <line x1="50" y1="250" x2="50" y2="20" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <text x="215" y="285" text-anchor="middle" font-size="15" font-weight="bold">Shear stress (F)</text>
                                    <text x="25" y="135" text-anchor="middle" font-size="15" font-weight="bold" transform="rotate(-90 25 135)">Rate of shear (G)</text>
                                    <text x="35" y="265" font-size="14">0</text>
                                    <line x1="50" y1="250" x2="320" y2="50" stroke="#1f77b4" stroke-width="3" />
                                </svg>
                             </div>`
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "معلومات وأمثلة النيوتوني", en: "Newtonian Info & Examples" },
                    content: {
                        ar: "<b>المنحنى:</b> خط مستقيم يمر بنقطة الأصل. اللزوجة ثابتة لا تتأثر بمعدل القص.<br><b>الأمثلة:</b> الماء، المحاليل الحقيقية، السوائل العضوية البسيطة، والمعلقات والمستحلبات المخففة.",
                        en: "<b>Curve:</b> Straight line passing through the origin. Constant viscosity unaffected by shear rate.<br><b>Examples:</b> Water, true solutions, simple organic liquids, dilute suspensions & emulsions."
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "رسم النظام البلاستيكي (Plastic Rheogram)", en: "Plastic Rheogram" },
                    content: {
                        ar: `<div style="text-align: center; margin: 15px 0; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                <h4 style="margin-top:0; color:#d62728;">Plastic Flow (Bingham)</h4>
                                <svg viewBox="0 0 400 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                            <path d="M0,0 L0,6 L9,3 z" fill="black" />
                                        </marker>
                                    </defs>
                                    <line x1="50" y1="250" x2="380" y2="250" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <line x1="50" y1="250" x2="50" y2="20" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <text x="215" y="285" text-anchor="middle" font-size="15" font-weight="bold">Shear stress (F)</text>
                                    <text x="25" y="135" text-anchor="middle" font-size="15" font-weight="bold" transform="rotate(-90 25 135)">Rate of shear (G)</text>
                                    <text x="35" y="265" font-size="14">0</text>
                                    <line x1="160" y1="250" x2="330" y2="50" stroke="#d62728" stroke-width="3" />
                                    <line x1="160" y1="250" x2="117" y2="300" stroke="#d62728" stroke-width="2" stroke-dasharray="6,4" />
                                    <text x="160" y="242" font-size="18" font-weight="bold" fill="#d62728">f</text>
                                    <text x="180" y="268" font-size="12" fill="#d62728">Yield value</text>
                                </svg>
                             </div>`,
                        en: `<div style="text-align: center; margin: 15px 0; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                <h4 style="margin-top:0; color:#d62728;">Plastic Flow (Bingham)</h4>
                                <svg viewBox="0 0 400 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                            <path d="M0,0 L0,6 L9,3 z" fill="black" />
                                        </marker>
                                    </defs>
                                    <line x1="50" y1="250" x2="380" y2="250" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <line x1="50" y1="250" x2="50" y2="20" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <text x="215" y="285" text-anchor="middle" font-size="15" font-weight="bold">Shear stress (F)</text>
                                    <text x="25" y="135" text-anchor="middle" font-size="15" font-weight="bold" transform="rotate(-90 25 135)">Rate of shear (G)</text>
                                    <text x="35" y="265" font-size="14">0</text>
                                    <line x1="160" y1="250" x2="330" y2="50" stroke="#d62728" stroke-width="3" />
                                    <line x1="160" y1="250" x2="117" y2="300" stroke="#d62728" stroke-width="2" stroke-dasharray="6,4" />
                                    <text x="160" y="242" font-size="18" font-weight="bold" fill="#d62728">f</text>
                                    <text x="180" y="268" font-size="12" fill="#d62728">Yield value</text>
                                </svg>
                             </div>`
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "معلومات وأمثلة البلاستيكي", en: "Plastic Info & Examples" },
                    content: {
                        ar: "<b>المنحنى:</b> لا يمر بنقطة الأصل، يقطع محور الشغل عند نقطة تسمى <b>Yield value (f)</b>. لا يتدفق السائل إلا بعد كسر قوى van der Waals بين الجزيئات المتجمعة.<br><b>الأمثلة:</b> معجون الأسنان، الكريمات، والمراهم (Flocculated suspensions).",
                        en: "<b>Curve:</b> Does NOT pass through origin. Intersects the stress axis at <b>Yield value (f)</b>. Does not flow until van der Waals forces between particles are broken.<br><b>Examples:</b> Toothpaste, creams & ointments (Concentrated flocculated suspensions)."
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "رسم النظام شبه البلاستيكي (Pseudoplastic)", en: "Pseudoplastic Rheogram" },
                    content: {
                        ar: `<div style="text-align: center; margin: 15px 0; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                <h4 style="margin-top:0; color:#2ca02c;">Pseudoplastic Flow (Shear-thinning)</h4>
                                <svg viewBox="0 0 400 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                            <path d="M0,0 L0,6 L9,3 z" fill="black" />
                                        </marker>
                                    </defs>
                                    <line x1="50" y1="250" x2="380" y2="250" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <line x1="50" y1="250" x2="50" y2="20" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <text x="215" y="285" text-anchor="middle" font-size="15" font-weight="bold">Shear stress (F)</text>
                                    <text x="25" y="135" text-anchor="middle" font-size="15" font-weight="bold" transform="rotate(-90 25 135)">Rate of shear (G)</text>
                                    <text x="35" y="265" font-size="14">0</text>
                                    <path d="M 50 250 Q 280 230 350 40" fill="none" stroke="#2ca02c" stroke-width="3" />
                                </svg>
                             </div>`,
                        en: `<div style="text-align: center; margin: 15px 0; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                <h4 style="margin-top:0; color:#2ca02c;">Pseudoplastic Flow (Shear-thinning)</h4>
                                <svg viewBox="0 0 400 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                            <path d="M0,0 L0,6 L9,3 z" fill="black" />
                                        </marker>
                                    </defs>
                                    <line x1="50" y1="250" x2="380" y2="250" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <line x1="50" y1="250" x2="50" y2="20" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <text x="215" y="285" text-anchor="middle" font-size="15" font-weight="bold">Shear stress (F)</text>
                                    <text x="25" y="135" text-anchor="middle" font-size="15" font-weight="bold" transform="rotate(-90 25 135)">Rate of shear (G)</text>
                                    <text x="35" y="265" font-size="14">0</text>
                                    <path d="M 50 250 Q 280 230 350 40" fill="none" stroke="#2ca02c" stroke-width="3" />
                                </svg>
                             </div>`
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "رسم النظام التمددي (Dilatant)", en: "Dilatant Rheogram" },
                    content: {
                        ar: `<div style="text-align: center; margin: 15px 0; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                <h4 style="margin-top:0; color:#ff7f0e;">Dilatant Flow (Shear-thickening)</h4>
                                <svg viewBox="0 0 400 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                            <path d="M0,0 L0,6 L9,3 z" fill="black" />
                                        </marker>
                                    </defs>
                                    <line x1="50" y1="250" x2="380" y2="250" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <line x1="50" y1="250" x2="50" y2="20" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <text x="215" y="285" text-anchor="middle" font-size="15" font-weight="bold">Shear stress (F)</text>
                                    <text x="25" y="135" text-anchor="middle" font-size="15" font-weight="bold" transform="rotate(-90 25 135)">Rate of shear (G)</text>
                                    <text x="35" y="265" font-size="14">0</text>
                                    <path d="M 50 250 Q 100 50 350 30" fill="none" stroke="#ff7f0e" stroke-width="3" />
                                </svg>
                             </div>`,
                        en: `<div style="text-align: center; margin: 15px 0; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                <h4 style="margin-top:0; color:#ff7f0e;">Dilatant Flow (Shear-thickening)</h4>
                                <svg viewBox="0 0 400 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                            <path d="M0,0 L0,6 L9,3 z" fill="black" />
                                        </marker>
                                    </defs>
                                    <line x1="50" y1="250" x2="380" y2="250" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <line x1="50" y1="250" x2="50" y2="20" stroke="black" stroke-width="2" marker-end="url(#arrowHead)" />
                                    <text x="215" y="285" text-anchor="middle" font-size="15" font-weight="bold">Shear stress (F)</text>
                                    <text x="25" y="135" text-anchor="middle" font-size="15" font-weight="bold" transform="rotate(-90 25 135)">Rate of shear (G)</text>
                                    <text x="35" y="265" font-size="14">0</text>
                                    <path d="M 50 250 Q 100 50 350 30" fill="none" stroke="#ff7f0e" stroke-width="3" />
                                </svg>
                             </div>`
                    }
                },
                {
                    type: 'compare',
                    val1Title: { ar: "Pseudoplastic (Shear-thinning)", en: "Pseudoplastic" },
                    val1: { ar: "تقل المقاومة وتتناقص اللزوجة بزيادة القص بسبب اصطفاف الجزيئات الطويلة للبوليمرات مع اتجاه التدفق.<br><b>الأمثلة:</b> البوليمرات في المحاليل، الصموغ (Tragacanth, Na alginate, MC, Na-CMC)، والكاتشب.", en: "Viscosity decreases with increasing shear rate as long polymer molecules align in flow direction.<br><b>Examples:</b> Polymers in solution, synthetic/natural gums, and Ketchup." },
                    val2Title: { ar: "Dilatant (Shear-thickening)", en: "Dilatant" },
                    val2: { ar: "تزداد اللزوجة والمقاومة بزيادة القص (يتسع حجم الفراغات بين الجزيئات فلا يكفي السائل لترطيبها).<br><b>الأمثلة:</b> معلقات مركزة جداً (≥ 50%) من جزيئات غير متجمعة (Deflocculated) مثل نشا الذرة في الماء.", en: "Viscosity increases with increasing shear rate as particles take open packing and expand in volume.<br><b>Examples:</b> High concentration (about 50% or greater) deflocculated suspensions (e.g., Cornflour & water)." }
                }
            ]
        },
        {
            title: { ar: "السلوك المعتمد على الزمن وأهمية الريولوجي", en: "Time-Dependent Behavior & Importance" },
            branches: [
                {
                    type: 'flip',
                    nodeTitle: { ar: "اضغط لتعرف: ما هي حلقة التلاكؤ (Hysteresis Loop)؟", en: "Tap: What is Hysteresis Loop?" },
                    content: { ar: "الحلقة الناتجة عن عدم تطابق منحنى الصعود (Up-curve) مع منحنى الهبوط (Down-curve)، والمساحة داخلها تعبر عن مدى تأثر السائل بالزمن (Thixotropic breakdown).", en: "The loop formed when up- and down-curves do not superimpose. The enclosed area measures thixotropic breakdown." }
                },
                {
                    type: 'flip',
                    nodeTitle: { ar: "اضغط لتعرف: Thixotropy", en: "Tap: Thixotropy Definition" },
                    content: { ar: "استعادة بطيئة -عند السكون وثبات الحرارة- للقوام واللزوجة التي فُقدت أثناء عملية القص. تنطبق فقط على الأنظمة التي تقل لزوجتها بالقص (Plastic & Pseudoplastic).", en: "An isothermal and comparatively slow recovery, on standing of a material, of a consistency lost through shearing. Only applies to shear-thinning systems." }
                },
                {
                    type: 'flip',
                    nodeTitle: { ar: "اضغط لتعرف: Antithixotropy", en: "Tap: Antithixotropy Definition" },
                    content: { ar: "فقدان بطيء للقوام واللزوجة العالية التي تم اكتسابها أثناء عملية القص عند ترك السائل ليرتاح. مرتبط بالأنظمة التمددية (Dilatant).", en: "The slow loss of consistency that was gained by shearing. It is associated with dilatant systems." }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "أهمية الـ Rheology في الصيدلة", en: "Importance of Rheology" },
                    content: {
                        ar: "1- عمليات التصنيع: كالخلط، التعبئة، والتغليف.<br>2- إخراج المنتج من العبوة: كالصب من الزجاجة، العصر من الأنبوب، والتعقيم والضخ بالحقن.<br>3- التطبيق الموضعي للمنتجات على الجلد.<br>4- الثبات الفيزيائي للمعلقات والمستحلبات والأنظمة شبه الصلبة.<br>5- التوافر الحيوي: اللزوجة تؤثر بشكل مباشر على معدل امتصاص الدواء وتحرره.",
                        en: "1- Pharmaceutical processing: Mixing of materials, filling & packaging.<br>2- Removal from package: Pouring from a bottle, extrusion from a tube, spraying, and passage from syringe needle.<br>3- Topical application of product onto skin.<br>4- Physical stability of suspensions, emulsions, and semisolids.<br>5- Bioavailability & Drug Release: Viscosity affects the absorption rate of drugs."
                    }
                }
            ]
        },
        {
            title: { ar: "قياس اللزوجة (Viscometers)", en: "Measurement of Viscosity" },
            branches: [
                {
                    type: 'table',
                    nodeTitle: { ar: "أنواع أجهزة القياس وملاءمتها", en: "Types of Instruments & Suitability" },
                    content: {
                        ar: `<table>
                                <tr><th>نوع الجهاز (Instrument)</th><th>ملاءمة السوائل (Suitability)</th><th>أمثلة (Examples)</th></tr>
                                <tr><td><b>One-point instruments</b></td><td>تعطي نقطة واحدة وتصلح فقط للسوائل النيوتونية (Newtonian)</td><td>Ostwald viscometer, Höppler "falling sphere" viscometer</td></tr>
                                <tr><td><b>Multipoint instruments</b></td><td>تعطي منحنى كامل وتصلح للأنظمة غير النيوتونية والنيوتونية أيضاً</td><td>Cup & bob viscometer, Cone & plate viscometer</td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Instrument Type</th><th>Suitability</th><th>Examples</th></tr>
                                <tr><td><b>One-point instruments</b></td><td>Provide a single point on rheogram. Suitable ONLY for Newtonian fluids</td><td>Ostwald Viscometer, Höppler "falling sphere" Viscometer</td></tr>
                                <tr><td><b>Multipoint instruments</b></td><td>Complete rheogram can be obtained. Suitable for Non-Newtonian & Newtonian systems</td><td>Cup & bob viscometer, Cone & plate viscometer</td></tr>
                             </table>`
                    }
                },
                {
                    type: 'info',
                    nodeTitle: { ar: "مبادئ عمل الأجهزة وأمثلة المغيرات", en: "Principles of Instruments & Viscosity Modifiers" },
                    content: {
                        ar: "<b>مبادئ العمل:</b><br>- Capillary (مثل Ostwald): يعتمد على معدل تدفق السائل عبر أنبوبة شعرية دقيقة.<br>- Density-dependent (مثل Höppler): يعتمد على سرعة سقوط جسم (كرة) عبر السائل تحت تأثير الجاذبية.<br>- Rotational (مثل Cup & bob / Cone & plate): يعتمد على مقاومة عنصر دوار مغمور في السائل.<br><b>مغيرات ومحسنات اللزوجة (Modifiers):</b> مشتقات السميليولوز (HPMC, MC, HEC)، الصموغ (Acacia, Xanthan)، ومادة PVP.",
                        en: "<b>Principles of Measurement:</b><br>- Capillary (e.g., Ostwald): Based on rate of liquid flow through a fine capillary.<br>- Density-dependent (e.g., Höppler): Based on velocity of a falling object through a liquid under gravity.<br>- Rotational (e.g., Cup & Bob): Based on resistance of a rotating element immersed in the liquid.<br><b>Viscosity Modifiers:</b> Cellulose derivatives (HPMC, MC, HEC), Gums (Acacia, xanthan), and PVP."
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: { ar: "أي نوع من التشوه (Deformation) يُعتبر دائم وغير قابل للعكس (Irreversible) ويحدث في الأجسام اللزجة؟", en: "Which type of deformation is considered permanent and irreversible, exhibited by viscous bodies?" },
            opts: { ar: ["التشوه المرن (Elastic Deformation)", "التشوه اللدن (Plastic Deformation)", "التشوه الحجمي", "التشوه الحراري"], en: ["Elastic Deformation", "Plastic Deformation", "Volumetric Deformation", "Thermal Deformation"] },
            correct: 1
        },
        {
            q: { ar: "ما هي الوحدة الأساسية المستخدمة لقياس اللزوجة (Viscosity)؟", en: "What is the primary unit used to measure Viscosity?" },
            opts: { ar: ["Stoke", "Newton", "Poise", "Joule"], en: ["Stoke", "Newton", "Poise", "Joule"] },
            correct: 2
        },
        {
            q: { ar: "في أي نظام من أنظمة التدفق يكون المنحنى عبارة عن خط مستقيم يمر بنقطة الأصل (Origin)؟", en: "In which flow system is the curve a straight line passing through the origin?" },
            opts: { ar: ["Plastic flow", "Pseudoplastic flow", "Dilatant flow", "Newtonian flow"], en: ["Plastic flow", "Pseudoplastic flow", "Dilatant flow", "Newtonian flow"] },
            correct: 3
        },
        {
            q: { ar: "النظام الذي لا يتدفق فيه السائل إلا بعد تطبيق قوة تتجاوز قيمة معينة تسمى (Yield value) هو:", en: "The system in which the liquid does not flow until a force exceeding a certain value called (Yield value) is applied is:" },
            opts: { ar: ["Newtonian", "Dilatant", "Plastic (Bingham bodies)", "Pseudoplastic"], en: ["Newtonian", "Dilatant", "Plastic (Bingham bodies)", "Pseudoplastic"] },
            correct: 2
        },
        {
            q: { ar: "معجون الأسنان والكريمات والمراهم التي تحتوي على جزيئات متجمعة (Flocculated) هي أمثلة على:", en: "Toothpaste, creams, and ointments containing flocculated particles are examples of:" },
            opts: { ar: ["Pseudoplastic flow", "Plastic flow", "Newtonian flow", "Dilatant flow"], en: ["Pseudoplastic flow", "Plastic flow", "Newtonian flow", "Dilatant flow"] },
            correct: 1
        },
        {
            q: { ar: "محاليل البوليمرات مثل الصموغ والكاتشب تعتبر أمثلة على نظام تقل فيه اللزوجة بزيادة القص، وهو:", en: "Polymer solutions like gums and Ketchup are examples of a system where viscosity decreases with shear, which is:" },
            opts: { ar: ["Newtonian", "Plastic", "Dilatant", "Pseudoplastic (Shear-thinning)"], en: ["Newtonian", "Plastic", "Dilatant", "Pseudoplastic (Shear-thinning)"] },
            correct: 3
        },
        {
            q: { ar: "في النظام التمددي (Dilatant flow)، ماذا يحدث لزوجة السائل عند زيادة معدل القص؟", en: "In Dilatant flow, what happens to the viscosity of the liquid when the shear rate increases?" },
            opts: { ar: ["تقل اللزوجة", "تظل ثابتة", "تزداد اللزوجة (Shear-thickening)", "ينعدم التدفق"], en: ["Viscosity decreases", "Remains constant", "Viscosity increases (Shear-thickening)", "Flow stops"] },
            correct: 2
        },
        {
            q: { ar: "أي من التالي يعتبر مثالاً كلاسيكياً على النظام التمددي (Dilatant) الذي يحتوي على تركيز عالي من الجزيئات غير المتجمعة؟", en: "Which of the following is a classic example of a Dilatant system containing a high concentration of deflocculated particles?" },
            opts: { ar: ["الماء المقطر", "نشا الذرة مع الماء بتركيز عالي", "الكاتشب", "الكريمات والمراهم"], en: ["Distilled water", "Cornflour and water at high concentration", "Ketchup", "Creams and ointments"] },
            correct: 1
        },
        {
            q: { ar: "ظهور المساحة المغلقة (Hysteresis loop) في الرسم البياني للريولوجي يدل على أن السلوك:", en: "The appearance of an enclosed area (Hysteresis loop) in a rheogram indicates that the behavior is:" },
            opts: { ar: ["مستقل عن الزمن (Time-independent)", "معتمد على الزمن (Time-dependent)", "نيوتوني مثالي", "غير قابل للقياس"], en: ["Time-independent behavior", "Time-dependent behavior", "Ideal Newtonian", "Unmeasurable"] },
            correct: 1
        },
        {
            q: { ar: "ما هو المصطلح الذي يعبر عن الاستعادة البطيئة للقوام الذي فُقد بسبب عملية القص؟", en: "What is the term for the slow recovery of a consistency that was lost through shearing?" },
            opts: { ar: ["Antithixotropy", "Newtonian flow", "Thixotropy", "Elasticity"], en: ["Antithixotropy", "Newtonian flow", "Thixotropy", "Elasticity"] },
            correct: 2
        },
        {
            q: { ar: "فقدان القوام بشكل بطيء بعد أن تم اكتسابه بواسطة القص، ويرتبط بالأنظمة التمددية يُعرف بـ:", en: "The slow loss of consistency that was gained by shearing, associated with dilatant systems, is known as:" },
            opts: { ar: ["Thixotropy", "Antithixotropy", "Yield value", "Fluidity"], en: ["Thixotropy", "Antithixotropy", "Yield value", "Fluidity"] },
            correct: 1
        },
        {
            q: { ar: "كل ما يلي يعتبر من أهمية دراسة الـ Rheology في الصيدلة، مــــا عــــدا:", en: "All of the following are important applications of Rheology in pharmacy EXCEPT:" },
            opts: { ar: ["الثبات الفيزيائي للمعلقات", "تحديد اللون والطعم للمستحضرات", "معدل تحرر الدواء وامتصاصه", "مرور الدواء عبر إبرة الحقنة"], en: ["Physical stability of suspensions", "Determining the color and taste", "Drug release and absorption rate", "Passage through a syringe needle"] },
            correct: 1
        },
        {
            q: { ar: "أجهزة القياس ذات النقطة الواحدة (One-point instruments) مثل Ostwald viscometer مناسبة لقياس سوائل من نوع:", en: "One-point instruments like the Ostwald viscometer are suitable ONLY for measuring:" },
            opts: { ar: ["Pseudoplastic fluids", "Dilatant fluids", "Newtonian fluids", "Plastic fluids"], en: ["Pseudoplastic fluids", "Dilatant fluids", "Newtonian fluids", "Plastic fluids"] },
            correct: 2
        },
        {
            q: { ar: "إذا أردت رسم منحنى كامل (Complete rheogram) لسائل غير نيوتوني (Non-Newtonian)، يجب عليك استخدام:", en: "If you want to obtain a complete rheogram for a Non-Newtonian fluid, you MUST use:" },
            opts: { ar: ["One-point instrument", "Multipoint instrument (مثل Cup & bob)", "Ostwald viscometer", "Hoppler viscometer"], en: ["One-point instrument", "Multipoint instrument (e.g., Cup & bob)", "Ostwald viscometer", "Hoppler viscometer"] },
            correct: 1
        },
        {
            q: { ar: "يعتمد جهاز Ostwald (Capillary viscometer) في عمله على مقارنة زمن تدفق السائل المجهول بزمن تدفق:", en: "The Ostwald (Capillary viscometer) works by comparing the flow time of the unknown liquid with the flow time of:" },
            opts: { ar: ["الزيت", "الكحول", "الجلسرين", "الماء (كمرجع قياسي)"], en: ["Oil", "Alcohol", "Glycerin", "Water (as a standard reference)"] },
            correct: 3
        },
        {
            q: { ar: "تُحسب اللزوجة الحركية (Kinematic viscosity) عن طريق قسمة اللزوجة المطلقة على:", en: "Kinematic viscosity is calculated by dividing the absolute viscosity by:" },
            opts: { ar: ["الضغط (Pressure)", "الحرارة (Temperature)", "الكثافة (Density)", "الحجم (Volume)"], en: ["Pressure", "Temperature", "Density", "Volume"] },
            correct: 2
        },
        {
            q: { ar: "معظم السوائل تقل لزوجتها بشكل سريع عند:", en: "Most liquids experience a rapid decrease in viscosity when:" },
            opts: { ar: ["زيادة الضغط", "زيادة درجة الحرارة", "نقصان درجة الحرارة", "التبريد السريع"], en: ["Pressure increases", "Temperature increases", "Temperature decreases", "Rapid cooling"] },
            correct: 1
        },
        {
            q: { ar: "يعتمد جهاز Hoppler viscometer في مبدأ عمله على:", en: "The underlying principle of the Hoppler viscometer is based on:" },
            opts: { ar: ["التدفق عبر أنبوبة شعرية", "سرعة سقوط جسم (كرة) في السائل", "مقاومة عنصر دوار", "التوتر السطحي"], en: ["Flow through a fine capillary", "Velocity of a falling object (sphere) in a liquid", "Resistance of a rotating element", "Surface tension"] },
            correct: 1
        },
        {
            q: { ar: "مقلوب قابلية الحركة (Mobility) في نظام Bingham يُعرف بـ:", en: "The reciprocal of mobility in a Bingham system is known as:" },
            opts: { ar: ["Plastic viscosity (U)", "Kinematic viscosity", "Relative viscosity", "Fluidity"], en: ["Plastic viscosity (U)", "Kinematic viscosity", "Relative viscosity", "Fluidity"] },
            correct: 0
        },
        {
            q: { ar: "السبب في أن البوليمرات تُظهر سلوك Pseudoplastic هو أنه بزيادة قوة القص (Shearing stress) فإن جزيئاتها المبعثرة:", en: "Polymers exhibit pseudoplastic behavior because, as shearing stress increases, their normally-disarranged molecules:" },
            opts: { ar: ["تتكسر إلى أجزاء صغيرة", "تتجمع لتكون كتلة صلبة", "تتبخر", "تصطف بمحاورها الطويلة في اتجاه التدفق"], en: ["Break into small pieces", "Aggregate to form a solid mass", "Evaporate", "Align their long axes in the direction of flow"] },
            correct: 3
        }
    ]
});
