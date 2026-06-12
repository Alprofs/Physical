let currentLang = 'en'; // اللغة الافتراضية
let currentLecData = null; // المحاضرة المفتوحة حالياً


function formatText(str) {
    if(!str) return '';
    return str.replace(/\*(.*?)\*/g, '<span class="highlight">$1</span>');
}


// --- إعدادات اللغة والزر العائم ---
const uiStrings = {
    ar: { revBtn: "مراجعة", quizBtn: "أسئلة", revTitle: "المراجعة", round: "الجولة", prev: "السابق", next: "التالي", finish: "إنهاء الجولة", winMsg: "تم إنهاء الأسئلة بنجاح.", home: "الرئيسية" },
    en: { revBtn: "Revision", quizBtn: "Quiz", revTitle: "Mind Map", round: "Round", prev: "Prev", next: "Next", finish: "Finish Round", winMsg: "All questions answered successfully.", home: "Home" }
};

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.getElementById('html-root').dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('lang-fab').innerText = currentLang === 'ar' ? 'EN' : 'AR';
    
    // إعادة رسم الشاشة المفتوحة حالياً لتطبيق الترجمة
    if (document.getElementById('home-screen').classList.contains('active')) renderHome();
    else if (document.getElementById('revision-screen').classList.contains('active')) renderRevision();
    else if (document.getElementById('quiz-screen').classList.contains('active')) {
        updateQuizUI();
        loadQuestion();
    }
}

// --- شاشة الرئيسية ---
function renderHome() {
    const list = document.getElementById('lectures-list');
    list.innerHTML = '';
    
    allLectures.forEach(lec => {
        const card = document.createElement('div');
        card.className = 'lec-card';
        card.innerHTML = `
            <div class="lec-title">${lec.title[currentLang]}</div>
            <div class="lec-actions">
                <button class="btn-action btn-rev" onclick="openRevision('${lec.id}')">${uiStrings[currentLang].revBtn}</button>
                <button class="btn-action btn-quiz" onclick="initQuiz('${lec.id}')">${uiStrings[currentLang].quizBtn}</button>
            </div>
        `;
        list.appendChild(card);
    });
}

function goHome() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('home-screen').classList.add('active');
    renderHome();
}

// --- شاشة المراجعة ---
function openRevision(lecId) {
    currentLecData = allLectures.find(l => l.id === lecId);
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('revision-screen').classList.add('active');
    renderRevision();
}

function renderRevision() {
    if (!currentLecData) return;
    document.getElementById('rev-title').innerText = uiStrings[currentLang].revTitle;
    const board = document.getElementById('mindmap-board');
    board.innerHTML = '';

    currentLecData.revision.forEach(node => {
        let branchesHTML = '';
        node.branches.forEach(b => {
            branchesHTML += `
                <div class="branch ${b.type}">
                    <div class="node-title">${b.nodeTitle[currentLang]}</div>
                    <div class="node-content">${formatText(b.content[currentLang])}</div>

                </div>`;
        });

        board.innerHTML += `
            <div class="mindmap-node">
                <div class="mindmap-title">${node.title[currentLang]}</div>
                <div class="branch-grid">${branchesHTML}</div>
            </div>`;
    });
    if (window.MathJax) { MathJax.typesetPromise(); }

}

// --- شاشة الكويز ---
let currentRoundQuestions = [];
let currentIndex = 0;
let currentRound = 1;

function initQuiz(lecId) {
    currentLecData = allLectures.find(l => l.id === lecId);
    if(!currentLecData || currentLecData.quiz.length === 0) {
        alert("لا توجد أسئلة لهذه المحاضرة بعد.");
        return;
    }
    
    currentRound = 1;
    prepareRound([...currentLecData.quiz]);
    
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('quiz-screen').classList.add('active');
    updateQuizUI();
    loadQuestion();
}

function updateQuizUI() {
    document.getElementById('prev-btn').innerText = uiStrings[currentLang].prev;
    document.getElementById('round-info').innerText = `${uiStrings[currentLang].round} (${currentRound})`;
    document.getElementById('win-msg').innerText = uiStrings[currentLang].winMsg;
    document.getElementById('home-btn').innerText = uiStrings[currentLang].home;
}

function prepareRound(questionsArray) {
    currentRoundQuestions = questionsArray.map(q => {
        let newQ = JSON.parse(JSON.stringify(q));
        newQ.shuffledIndices = [0, 1, 2, 3].filter(i => newQ.opts.en[i] !== undefined).sort(() => Math.random() - 0.5);
        newQ.userAnswerIndex = null;
        return newQ;
    });
    currentIndex = 0;
}

function loadQuestion() {
    const qData = currentRoundQuestions[currentIndex];
    const total = currentRoundQuestions.length;
    
    document.getElementById('counter').innerText = `${currentIndex + 1} / ${total}`;
    document.getElementById('bar').style.width = `${((currentIndex + 1) / total) * 100}%`;
    
    document.getElementById('q-txt').innerHTML = formatText(qData.q[currentLang]);
    
    const box = document.getElementById('opt-box');
    box.innerHTML = '';

    qData.shuffledIndices.forEach(originalIdx => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.innerHTML = formatText(qData.opts[currentLang][originalIdx]);

        if (qData.userAnswerIndex === null) {
            btn.classList.add('active-click');
            btn.onclick = () => selectOption(btn, originalIdx, qData);
        } else {
            btn.classList.add('locked');
            if (originalIdx === qData.correct) btn.classList.add('correct');
            else if (originalIdx === qData.userAnswerIndex) btn.classList.add('wrong');
        }
        box.appendChild(btn);
    });

    document.getElementById('prev-btn').disabled = (currentIndex === 0);
    
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = (qData.userAnswerIndex === null);
    nextBtn.innerText = (currentIndex === total - 1 && qData.userAnswerIndex !== null) 
                        ? uiStrings[currentLang].finish : uiStrings[currentLang].next;
    if (window.MathJax) { MathJax.typesetPromise(); }

}

function selectOption(selectedBtn, originalIdx, qData) {
    qData.userAnswerIndex = originalIdx;
    
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('active-click');
        btn.classList.add('locked');
        btn.onclick = null;
    });

    // Re-render choices to show correct/wrong colors
    loadQuestion(); 
}

function goPrev() { if (currentIndex > 0) { currentIndex--; loadQuestion(); } }
function goNext() {
    if (currentIndex < currentRoundQuestions.length - 1) { currentIndex++; loadQuestion(); }
    else evaluateRoundEnd();
}

function evaluateRoundEnd() {
    let failedQuestions = currentRoundQuestions.filter(q => q.userAnswerIndex !== q.correct);
    if (failedQuestions.length > 0) {
        currentRound++;
        prepareRound(failedQuestions.map(q => ({ q: q.q, opts: q.opts, correct: q.correct })));
        document.getElementById('round-info').innerText = `${uiStrings[currentLang].round} (${currentRound})`;
        loadQuestion();
    } else {
        document.getElementById('win-overlay').style.display = 'flex';
        confetti({ particleCount: 300, spread: 100, origin: { y: 0.6 } });
    }
}

// تشغيل الرئيسية عند التحميل
window.onload = renderHome;
