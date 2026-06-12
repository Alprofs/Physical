const allLecturesData = {
    id: "All_Lectures",
    title: {
        ar: "مراجعة الفاينال: جميع المحاضرات",
        en: "Final Revision: All Lectures"
    },
    quiz: [
        // ==========================================
        // Lecture 1: Branches of Psychology (Scientific Terms) - 15 Questions
        // ==========================================
        {
            q: { 
                ar: "هو الدراسة العلمية لـ *العقل والسلوك*:", 
                en: "The scientific study of the *mind and behavior* is:" 
            },
            opts: {
                ar: ["علم الاجتماع", "علم النفس", "الفلسفة", "علم وظائف الأعضاء"],
                en: ["Sociology", "Psychology", "Philosophy", "Physiology"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "فرع يدرس *السلوك غير الطبيعي* والأمراض النفسية:", 
                en: "Looks at psychopathology and *abnormal behavior*:" 
            },
            opts: {
                ar: ["علم النفس السلوكي", "علم النفس الإكلينيكي", "علم النفس غير الطبيعي", "علم النفس المعرفي"],
                en: ["Behavioral Psychology", "Clinical Psychology", "Abnormal Psychology", "Cognitive Psychology"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "نظرية تقترح أن جميع السلوكيات تُكتسب من خلال *الاشتراط والتعلم*:", 
                en: "Theory based on the idea that all behaviors are acquired through *conditioning*:" 
            },
            opts: {
                ar: ["السلوكية", "البنيوية", "التحليل النفسي", "الجشطالت"],
                en: ["Behavioral Psychology", "Structuralism", "Psychoanalysis", "Gestalt"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "فرع يركز على كيف يؤثر *المخ والخلايا العصبية* على الأفكار والمشاعر:", 
                en: "Focused on how the *brain, neurons, and nervous system* influence thoughts:" 
            },
            opts: {
                ar: ["علم النفس الحيوي", "علم النفس المقارن", "علم النفس المعرفي", "علم النفس التنموي"],
                en: ["Biopsychology", "Comparative Psychology", "Cognitive Psychology", "Developmental Psychology"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "فرع معني بتقييم وعلاج *الأمراض العقلية* والاضطرابات النفسية:", 
                en: "Concerned with the assessment and treatment of *mental illness* and psychiatric disorders:" 
            },
            opts: {
                ar: ["علم النفس الإرشادي", "علم النفس الإكلينيكي", "علم النفس الشرعي", "علم نفس الشخصية"],
                en: ["Counseling Psychology", "Clinical Psychology", "Forensic Psychology", "Personality Psychology"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "يركز على *الحالات العقلية الداخلية* مثل التفكير، التعلم، والتذكر:", 
                en: "Focuses on *internal mental states* like how people think, learn, and remember:" 
            },
            opts: {
                ar: ["علم النفس المعرفي", "علم النفس التربوي", "علم النفس التجريبي", "علم النفس الاجتماعي"],
                en: ["Cognitive Psychology", "Educational Psychology", "Experimental Psychology", "Social Psychology"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "فرع يهتم بدراسة *سلوك الحيوان*:", 
                en: "Concerned with the study of *animal behavior*:" 
            },
            opts: {
                ar: ["علم النفس التطوري", "علم النفس الحيوي", "علم النفس المقارن", "علم النفس السلوكي"],
                en: ["Evolutionary Psychology", "Biopsychology", "Comparative Psychology", "Behavioral Psychology"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "يركز على علاج العملاء الذين يعانون من *ضائقة نفسية*:", 
                en: "Centered on treating clients in *mental distress*:" 
            },
            opts: {
                ar: ["علم النفس الإكلينيكي", "علم النفس الإرشادي", "علم النفس التربوي", "علم النفس غير الطبيعي"],
                en: ["Clinical Psychology", "Counseling Psychology", "Educational Psychology", "Abnormal Psychology"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "يركز على كيف *يتغير وينمو* الناس طوال الحياة:", 
                en: "Focuses on how people *change and grow* throughout life:" 
            },
            opts: {
                ar: ["علم النفس الاجتماعي", "علم نفس الشخصية", "علم النفس التنموي", "علم النفس المعرفي"],
                en: ["Social Psychology", "Personality Psychology", "Developmental Psychology", "Cognitive Psychology"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "فرع معني بـ *المدارس، قضايا التعليم* ومخاوف الطلاب:", 
                en: "Concerned with *schools, teaching psychology*, and student concerns:" 
            },
            opts: {
                ar: ["علم النفس التربوي", "علم النفس الإرشادي", "علم النفس التجريبي", "علم النفس التنموي"],
                en: ["Educational Psychology", "Counseling Psychology", "Experimental Psychology", "Developmental Psychology"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "يستخدم *الطرق العلمية* للبحث في المخ والسلوك:", 
                en: "Utilizes *scientific methods* to research the brain and behavior:" 
            },
            opts: {
                ar: ["علم النفس الإكلينيكي", "علم النفس التجريبي", "علم النفس المقارن", "علم النفس الحيوي"],
                en: ["Clinical Psychology", "Experimental Psychology", "Comparative Psychology", "Biopsychology"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "يتعامل مع القضايا المتعلقة بعلم النفس و *القانون*:", 
                en: "Deals with issues related to psychology and *the law*:" 
            },
            opts: {
                ar: ["علم النفس الاجتماعي", "علم النفس الشرعي", "علم النفس السلوكي", "علم النفس المعرفي"],
                en: ["Social Psychology", "Forensic Psychology", "Behavioral Psychology", "Cognitive Psychology"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "يدرس أنماط التفكير والمشاعر التي تجعل كل فرد *فريداً*:", 
                en: "Study of thought patterns, feelings, and behaviors that make each individual *unique*:" 
            },
            opts: {
                ar: ["علم النفس التنموي", "علم نفس الشخصية", "علم النفس غير الطبيعي", "علم النفس التربوي"],
                en: ["Developmental Psychology", "Personality Psychology", "Abnormal Psychology", "Educational Psychology"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "يسعى لفهم وتفسير *السلوك الاجتماعي* وتأثير المجموعات:", 
                en: "Seeks to understand and explain *social behavior*:" 
            },
            opts: {
                ar: ["علم النفس التجريبي", "علم النفس الاجتماعي", "علم النفس الإرشادي", "علم النفس المقارن"],
                en: ["Experimental Psychology", "Social Psychology", "Counseling Psychology", "Comparative Psychology"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "صح أم خطأ: عدد تخصصات علم النفس ينمو باستمرار لأن *السلوك البشري متنوع جداً*.", 
                en: "True/False: Subfields in psychology are constantly growing because *human behavior is so varied*." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },

        // ==========================================
        // Lectures 9&10: Personality - 15 Questions
        // ==========================================
        {
            q: { 
                ar: "اختلافات فردية مستقرة في التفكير والشعور والسلوك هي تعريف *...*:", 
                en: "Stable individual differences in thinking, feeling, and behaving is the definition of *...*:" 
            },
            opts: {
                ar: ["الشخصية", "الإدراك", "العاطفة", "الذكاء"],
                en: ["Personality", "Cognition", "Emotion", "Intelligence"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "من أبعاد الشخصية الخمسة، أن تكون منطلقاً واجتماعياً يعبر عن *...*:", 
                en: "From the Big Five, being outgoing and sociable is *...*:" 
            },
            opts: {
                ar: ["القبول", "الانفتاح", "الضمير", "الاستقرار العاطفي"],
                en: ["Agreeableness", "Extraversion", "Conscientiousness", "Emotional stability"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "تبني *توقعات إيجابية* للمستقبل يشير إلى:", 
                en: "Adopting *positive expectations* about the future refers to:" 
            },
            opts: {
                ar: ["التشاؤم", "مركز السيطرة", "التفاؤل", "الانبساط"],
                en: ["Pessimism", "Locus of Control", "Optimism", "Extraversion"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "الأفراد ذوو *مركز السيطرة الداخلي* لديهم احتمالية أقل للإصابة بالاكتئاب.", 
                en: "Individuals with an *internal locus of control* have decreased incidence of depression." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "اضطراب شخصية (المجموعة A) يتميز بأنه *شكاك في الجميع* ولكنه ليس ذهانياً:", 
                en: "A cluster A personality disorder characterized by being *mistrustful of everyone*, but not psychotic:" 
            },
            opts: {
                ar: ["الشخصية الفصامية", "الشخصية الزورانية (Paranoid)", "الشخصية المعادية للمجتمع", "الشخصية النرجسية"],
                en: ["Schizoid", "Paranoid", "Antisocial", "Narcissistic"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "اضطراب شخصية يفتقر للعلاقات الحميمة و*يخاف من التقارب*:", 
                en: "Personality disorder that lacks intimate relationships and is *frightened by closeness*:" 
            },
            opts: {
                ar: ["الشخصية التجنبية", "الشخصية الاعتمادية", "الشخصية الفصامية (Schizoid)", "الشخصية الحدية"],
                en: ["Avoidant", "Dependent", "Schizoid", "Borderline"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "شخصية *تنتهك القوانين* (سايكوبات) وغير مهتمة بتأثيرها على الآخرين:", 
                en: "The psychopath who *violates laws* and is unconcerned about his effect on others:" 
            },
            opts: {
                ar: ["الشخصية المعادية للمجتمع (Antisocial)", "الشخصية النرجسية", "الشخصية الهستيرية", "الشخصية الحدية"],
                en: ["Antisocial", "Narcissistic", "Histrionic", "Borderline"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "شخصية تحتاج للاهتمام، تفتقر للتعاطف، ولديها إحساس مبالغ فيه بـ *أهمية الذات*:", 
                en: "Grandiose, needs attention, lack of empathy, exaggerated sense of *self importance*:" 
            },
            opts: {
                ar: ["الشخصية الهستيرية", "الشخصية النرجسية (Narcissistic)", "الشخصية الاعتمادية", "الشخصية الحدية"],
                en: ["Histrionic", "Narcissistic", "Dependent", "Borderline"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "شخصية عاطفتها غير مستقرة، تندفع في سلوكياتها، وتعاني من *فراغ داخلي*:", 
                en: "Emotionally intense and unstable, impulsive behavior, inner *emptiness*:" 
            },
            opts: {
                ar: ["الشخصية الحدية (Borderline)", "الشخصية التجنبية", "الشخصية الزورانية", "الشخصية الوسواسية"],
                en: ["Borderline", "Avoidant", "Paranoid", "Obsessive-compulsive"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "شخصية درامية، تسعى لجذب الانتباه (كاريكاتير الأنوثة أو الذكورة):", 
                en: "Dramatic, *attention-seeking behavior*, caricature of femininity or masculinity:" 
            },
            opts: {
                ar: ["الشخصية الحدية", "الشخصية النرجسية", "الشخصية الهستيرية (Histrionic)", "الشخصية الاعتمادية"],
                en: ["Borderline", "Narcissistic", "Histrionic", "Dependent"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "يتجنب المواقف الاجتماعية بسبب *الخوف من الرفض* والنقد:", 
                en: "Avoids social situations because of *fears of rejection* or criticism:" 
            },
            opts: {
                ar: ["الشخصية الفصامية", "الشخصية التجنبية (Avoidant)", "الشخصية الوسواسية", "الشخصية الاعتمادية"],
                en: ["Schizoid", "Avoidant", "Obsessive-compulsive", "Dependent"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "شخصية *تتشبث بشخص أقوى* وتطلب المساعدة باستمرار:", 
                en: "Clings to a stronger person, seeks help and advice, *anxious to make independent decisions*:" 
            },
            opts: {
                ar: ["الشخصية الاعتمادية (Dependent)", "الشخصية التجنبية", "الشخصية الحدية", "الشخصية الهستيرية"],
                en: ["Dependent", "Avoidant", "Borderline", "Histrionic"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "انشغال دائم بـ *النظام والمثالية* على حساب المرونة:", 
                en: "Preoccupation with *orderliness and perfectionism* at the expense of flexibility:" 
            },
            opts: {
                ar: ["الشخصية الزورانية", "الشخصية النرجسية", "الشخصية الوسواسية (Obsessive-compulsive)", "الشخصية الاعتمادية"],
                en: ["Paranoid", "Narcissistic", "Obsessive-compulsive", "Dependent"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "صح أم خطأ: قد تؤثر الشخصية على مقدار *الدعم الاجتماعي* الذي يتلقاه الفرد.", 
                en: "True/False: Personality may influence the amount of *social support*." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "التفاؤل قد يقلل من مستويات الألم ويحسن الرفاهية النفسية.", 
                en: "Optimism may *predict lower levels of pain* and better well-being." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },

        // ==========================================
        // Lecture 5: Biopsychosocial Model - 10 Questions
        // ==========================================
        {
            q: { 
                ar: "الصحة هي نتاج التفاعلات بين علم الأحياء والسلوك والعوامل *الاجتماعية*.", 
                en: "Health is a product of interactions between biology, behavior, and *social* environments." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "يركز *النموذج الطبي الحيوي التقليدي* على الفيزيولوجيا المرضية والأسباب البيولوجية فقط.", 
                en: "The *traditional biomedical model* focuses on pathophysiology and biological approaches." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "تم تطوير *النموذج البيولوجي النفسي الاجتماعي* بواسطة العالم:", 
                en: "The *bio-psychosocial model* was developed by:" 
            },
            opts: {
                ar: ["فرويد", "إنجل (Engel)", "ماسلو", "بافلوف"],
                en: ["Freud", "Engel", "Maslow", "Pavlov"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "الجينات، الفيروسات، والبكتيريا تُعتبر عوامل *...* في الصحة:", 
                en: "Genetics, viruses, and bacteria are considered *...* factors:" 
            },
            opts: {
                ar: ["بيولوجية (Bio)", "نفسية (Psycho)", "اجتماعية (Social)", "بيئية"],
                en: ["Bio", "Psycho", "Social", "Environmental"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "المعتقدات، العواطف (مثل الخوف)، والسلوكيات تُصنف كعوامل *...*:", 
                en: "Cognitions, emotions (like fear), and behaviors are *...* factors:" 
            },
            opts: {
                ar: ["بيولوجية", "نفسية (Psycho)", "اجتماعية", "وراثية"],
                en: ["Bio", "Psycho", "Social", "Genetic"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "الطبقة الاجتماعية، العرق، وضغوط الأقران تُعتبر عوامل *...*:", 
                en: "Social class, ethnicity, and peer pressure are *...* factors:" 
            },
            opts: {
                ar: ["بيولوجية", "نفسية", "اجتماعية (Social)", "طبية"],
                en: ["Bio", "Psycho", "Social", "Medical"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "العيش في *حي مزدحم* مليء بالنزاعات هو مثال على تأثير العوامل:", 
                en: "Living in a *crowded neighborhood* with disputes is an example of:" 
            },
            opts: {
                ar: ["البيولوجية", "النفسية", "الاجتماعية", "الوراثية"],
                en: ["Biological", "Psychological", "Social", "Genetic"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "وجود شخصية طموحة ومستعجلة دائماً يُعد عاملاً *نفسياً* في الإصابة بالأمراض.", 
                en: "An ambitious personality always in a hurry is a *psychological* factor." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "المسار غير المباشر في علم نفس الصحة يدرس كيف نضر بصحتنا عبر السلوكيات الخاطئة كالتدخين.", 
                en: "The *indirect pathway* studies harming health by adopting unhealthy lifestyle behaviors like smoking." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "مشاعر *الخوف والغضب* مرتبطة بنشاط أجزاء معينة في الدماغ (الجهاز الحوفي).", 
                en: "Emotions of *fear and anger* are attributed to the activity of the limbic system." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },

        // ==========================================
        // Lecture 2: Schools of Psychology - 10 Questions
        // ==========================================
        {
            q: { 
                ar: "أول مدرسة تأسست في معمل بألمانيا على يد *فيلهلم فوندت*:", 
                en: "First school created in a Germany lab by *Wilhelm Wundt*:" 
            },
            opts: {
                ar: ["الوظيفية", "البنيوية (Structuralism)", "السلوكية", "التحليل النفسي"],
                en: ["Functionalism", "Structuralism", "Behaviorism", "Psychoanalysis"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "مدرسة ركزت على تقسيم العمليات العقلية إلى *مكوناتها الأساسية*:", 
                en: "Focused on breaking down mental processes into *basic components*:" 
            },
            opts: {
                ar: ["البنيوية", "الجشطالت", "السلوكية", "الوظيفية"],
                en: ["Structuralism", "Gestalt", "Behaviorism", "Functionalism"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "مدرسة تأثرت بويليام جيمس وركزت على *الغرض التكيفي* للعقل والسلوك:", 
                en: "Influenced by William James, concerned with the *adaptive purpose* of mind:" 
            },
            opts: {
                ar: ["البنيوية", "الوظيفية (Functionalism)", "الجشطالت", "التحليل النفسي"],
                en: ["Structuralism", "Functionalism", "Gestalt", "Psychoanalysis"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "مدرسة تعتقد أن الناس يختبرون الأشياء كـ *كل موحد* (الكل أكبر من مجموع أجزائه):", 
                en: "Believed that people experience things as *unified wholes*:" 
            },
            opts: {
                ar: ["السلوكية", "الوظيفية", "الجشطالت (Gestalt)", "التحليل النفسي"],
                en: ["Behaviorism", "Functionalism", "Gestalt", "Psychoanalysis"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "تركز على *السلوك الملحوظ* وأن السلوك يفسر بأسباب بيئية:", 
                en: "Focused on *observable behavior* and environmental causes:" 
            },
            opts: {
                ar: ["السلوكية (Behaviorist)", "البنيوية", "الجشطالت", "التحليل النفسي"],
                en: ["Behaviorist", "Structuralism", "Gestalt", "Psychoanalysis"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "نوع من التعلم يربط بين *مثير محايد* ومثير طبيعي (مثل صوت الجرس والطعام):", 
                en: "Learning that involves associating a *neutral stimulus* with a natural one:" 
            },
            opts: {
                ar: ["الاشتراط الإجرائي", "الاشتراط الكلاسيكي (Classical conditioning)", "التعلم المعرفي", "التحليل النفسي"],
                en: ["Operant conditioning", "Classical conditioning", "Cognitive learning", "Psychoanalysis"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "يستخدم *المكافآت والعقوبات* لخلق ارتباط بين السلوك ونتيجته:", 
                en: "Involves using *rewards and punishments* to create an association:" 
            },
            opts: {
                ar: ["الاشتراط الإجرائي (Operant conditioning)", "الاشتراط الكلاسيكي", "البنيوية", "الجشطالت"],
                en: ["Operant conditioning", "Classical conditioning", "Structuralism", "Gestalt"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "مدرسة أسسها *سيجموند فرويد* وركزت على العقل الباطن:", 
                en: "Founded by *Sigmund Freud*, emphasized the unconscious mind:" 
            },
            opts: {
                ar: ["الوظيفية", "السلوكية", "التحليل النفسي (Psychoanalytic)", "البنيوية"],
                en: ["Functionalism", "Behaviorism", "Psychoanalytic", "Structuralism"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "اعتقد فرويد أن العقل يتكون من ثلاثة عناصر: الهو، الأنا، و *الأنا العليا*.", 
                en: "Freud believed the mind was composed of the id, ego, and *superego*." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "في التحليل النفسي، *الأنا (Ego)* هي المكون المسؤول عن التعامل مع الواقع.", 
                en: "In Psychoanalysis, the *Ego* is charged with dealing with reality." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },

        // ==========================================
        // Other Lectures (Needs, Stress, Theories, Stages) - 10 Questions
        // ==========================================
        {
            q: { 
                ar: "نقص في شيء مطلوب أو مرغوب يُعرف بأنه *...*:", 
                en: "A lack of something required or desired is a *...*:" 
            },
            opts: {
                ar: ["دافع", "حاجة (Need)", "سلوك", "عاطفة"],
                en: ["Motivation", "Need", "Behavior", "Emotion"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "يتكون هرم ماسلو للاحتياجات من *خمسة مستويات*.", 
                en: "Maslow's hierarchy comprises a *five-tier model* of human needs." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "أدنى مستوى في هرم ماسلو يجب إشباعه أولاً هو الاحتياجات *...*:", 
                en: "The lowest level in Maslow's hierarchy is *...* needs:" 
            },
            opts: {
                ar: ["الفسيولوجية (Physiological)", "الأمان", "الاحترام", "تحقيق الذات"],
                en: ["Physiological", "Safety", "Esteem", "Self-actualization"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "تجربة عاطفية سلبية تنتج عن عدم التطابق بين الضغط والقدرة على التعامل معه:", 
                en: "Negative emotional experience resulting from mismatch between stressor and ability to cope:" 
            },
            opts: {
                ar: ["القلق", "الاكتئاب", "الضغط النفسي (Stress)", "الغضب"],
                en: ["Anxiety", "Depression", "Stress", "Anger"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "المرحلة الأولى من متلازمة التكيف العام (GAS) هي مرحلة *...*:", 
                en: "The first stage of General Adaptation Syndrome (GAS) is the *...* stage:" 
            },
            opts: {
                ar: ["المقاومة", "رد فعل الإنذار (Alarm reaction)", "الإنهاك", "التعافي"],
                en: ["Resistance", "Alarm reaction", "Exhaustion", "Recovery"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "إذا استمر الضغط لفترة طويلة، يدخل الجسم في مرحلة *الإنهاك (Exhaustion)*.", 
                en: "If stress continues for a long time, the body enters the *exhaustion stage*." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "وفقاً لإريك إريكسون، الثقة مقابل عدم الثقة (Trust vs. Mistrust) تحدث في الفئة العمرية:", 
                en: "According to Erikson, Trust vs. Mistrust occurs at age:" 
            },
            opts: {
                ar: ["0-1.5 سنة", "3-5 سنوات", "12-18 سنة", "40-65 سنة"],
                en: ["0-1.5Y", "3-5Y", "12-18Y", "40-65Y"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "النظريات التي تفسر نموذجاً أساسياً للسلوك البشري وتوفر معلومات واسعة تسمى *النظريات الكبرى*.", 
                en: "*Grand theories* address a basic model of understanding human behavior." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "أعراض الضغط النفسي الجسدية (Body) تشمل الصداع، شد العضلات، ومشاكل النوم.", 
                en: "Common effects of stress on your *body* include Headache, muscle tension, and sleep problems." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "في مرحلة المراهقة (12-18 سنة)، الأزمة النفسية الاجتماعية هي *الهوية مقابل ارتباك الدور*.", 
                en: "In teens (12-18Y), the psychosocial crisis is *Identity vs. Confusion*." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        }
    ]
};


if (typeof allLectures !== 'undefined') {
    allLectures.push(allLecturesData);
} else {
    var allLectures = [allLecturesData];
}
