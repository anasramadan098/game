const excersices =  {
    'طرق الإتصال بالإنترنت' : [
            {
                Question : 'يستخدم "DSL" خط الهاتف للاتصال بالانترنت والاتصال الصوتي معاا ',
                answers : ["صح","خطأ"],
                correctAnswer : 'صح'
            },
            {
                Question : 'يستخدم العديد من الاجهزه المحموله المحموله تقنيه الاتصال بالانترنت والتواصل بينهم عن طريق البلوتوث ',
                answers : ["صح","خطأ"],
                correctAnswer : 'خطأ'
            },
            {
                Question : 'عندما يتوفر اكتر من خط فالهاتف تكون خاصيه الطلب الهاتفي تسمع للاتصال الصوتي والانترنت معاا ',
                answers : ["صح","خطأ"],
                correctAnswer : 'خطأ'
            },
            {
                Question : 'يجعل خدمه "DSL" اسرع لانها تستخدم اتصال ضيق النطاق ',
                answers : ["صح","خطأ"],
                correctAnswer : 'حطأ'
            },
            {
                Question : 'يجعل خدمه "DSL" اسرع لانها تستخدم اتصال ضيق النطاق ',
                answers : ["صح","خطأ"],
                correctAnswer : 'حطأ'
            },
            {
                Question : 'خاصيه DSL تكون مطابقه للطلب الهاتفي ',
                answers : ["صح","خطأ"],
                correctAnswer : 'حطأ'
            },
            {
                Question : 'يجعل خدمه "DSL" اسرع لانها تستخدم اتصال ضيق النطاق ',
                answers : ["صح","خطأ"],
                correctAnswer : 'حطأ'
            },
            {
                Question : 'الاقمار الصناعيه تتصل بالانترنت عبر الاقمار الصناعيه التي تدور حول الارض سلكيا',
                answers : ["صح","خطأ"],
                correctAnswer : 'حطأ'
            },
            {
                Question : 'لايتطلب وجود كابل او خطوط هاتف ',
                answers : ["الاقمار الصناعيه" ,"DSl","الطلب الهاتفي" ],
                correctAnswer : 'الاقمار الصناعيه'
            },
            {
                Question : 'هي الخدمه حيث يربط الانترنت لاسلكيا من خلال شبكه مشغل الخدمه ',
                answers : ["الجيل الثالث","الجيل الخامس","الطلب الهاتفي"],
                correctAnswer : "الجيل الثالث"
            },
            {
                Question : 'يجب تجنبه ان لم يكن هو الخدمه الوحيده فالمنطقه',
                answers : ["الطلب الهاتفي","دي اس ال","الاقمار الصناعيه"],
                correctAnswer : 'الطلب الهاتفي'
            },
            {
                Question : 'تستخدم خدمه DSL اتصال ٠٠٠٠٠٠ النطاق',
                answers : ["واسع"," ضيق "],
                correctAnswer : 'واسع'
            },
            {
                Question : 'يمكن استخدام الانترنت وخط الهاتف في نفس الوقت',
                answers : ["DSL","Dail Up","sate llite"],
                correctAnswer : 'DSL'
            },
            {
                Question : 'يستخدم الاتصال ذات النطاق العريض ولا يتطلب وجود كابل',
                answers : ["الاقمار الصناعيه","دي اس ال","الجيل الثالث"],
                correctAnswer : 'الاقمار الصناعيه'
            },
            {
                Question : 'هي الخدمه الاكتر شيوعا مع الهواتف النقاله',
                answers : ["الجيل الثالث والرابع","الطلب الهاتفي","دي اس ال"],
                correctAnswer : 'الجيل الثالث والرابع'
            }
    ]
}

showExcersiceOf('طرق الإتصال بالإنترنت');
function showExcersiceOf(lesson) {

    // Create Degree List 
    const name = prompt('ما هو اسمك؟');

    // Create Result Div
    const resultDiv = document.createElement('div');
    resultDiv.className = "result";
    
    // Create Title
    const title = document.createElement("H3");
    title.innerText = `درجة امتحانك يا ${name}`;
    resultDiv.appendChild(title);

    // Create Span Degree
    const spanDegree = document.createElement('span');
    // spanDegree.innerHTML = `${personDegree} / ${excersices[lesson].length}`;
    resultDiv.appendChild(spanDegree);

    // // Create Close Button
    // const closeBtn = document.createElement('button');
    // closeBtn.className = 'close-btn';
    // closeBtn.innerHTML = 'Close';
    // closeBtn.addEventListener('click',function () {
    //     resultDiv.remove();
    // })
    // resultDiv.appendChild(closeBtn);

    // Create Degree's List
    const degreeDiv = document.createElement('div');
    degreeDiv.className = 'degree-div';
    resultDiv.appendChild(degreeDiv);

// If The Lesson Have Excersice
if (excersices[lesson.trim()] != undefined) {
// Set The Degree
let personDegree = 0;

// Create Excersice Div
const excersiceDiv = document.createElement('div');
excersiceDiv.className = 'excersice-step';

// Create Title OF The Step
const h2 = document.createElement('h2');
h2.innerHTML =  'امتحان ' + lesson;

excersiceDiv.appendChild(h2);

// Loop On All Questions
excersices[lesson.trim()].forEach((test,testIndex) => {
    
    
    // Create Test Div
    const testDiv = document.createElement('div');
    testDiv.className = 'test';

    // Create Question E
    const h3 = document.createElement('h3');
    h3.innerHTML = test.Question;
    testDiv.appendChild(h3);
    const degreeP = document.createElement('p');
    degreeP.innerHTML = `${test.Question} <span>=></span> ${test.correctAnswer}`;
    degreeP.className = 'false';
    degreeDiv.appendChild(degreeP);

    // Create Answers Div
    const answersDiv = document.createElement('div');
    answersDiv.className = 'answersDiv';
    // Loop On Each Answer And Add Radio Buttons
    test.answers.forEach(answer => {

        const answerDiv = document.createElement('div');


        const answerInput = document.createElement('input');
        answerInput.value = answer;
        answerInput.id = answer + testIndex;
        answerInput.type = 'radio';
        answerInput.name = 'answer-' + testIndex;

        answerInput.addEventListener('input',()=> {
            let correctAnswer = test.correctAnswer
            if (answerInput.value == correctAnswer) {
                    personDegree++
                    degreeP.classList.remove('false');
                    degreeP.classList.toggle('true');
            } else {
                if (personDegree != 0) {
                    personDegree--
                    degreeP.classList.add('false');
                }
            }
        })


        // Create Label
        const label = document.createElement('label');
        label.innerHTML = answer;
        label.setAttribute('for',answer + testIndex);

        answerDiv.appendChild(answerInput);
        answerDiv.appendChild(label);

        answersDiv.appendChild(answerDiv);
    })

    // Append Answers Div To The Test Div
    testDiv.appendChild(answersDiv);


    // Append Test Div TO Excersice Div
    excersiceDiv.appendChild(testDiv);
})


// Create Check Button
const checkButton = document.createElement('button');
checkButton.innerHTML = 'Check';
checkButton.className = 'check-btn'
checkButton.addEventListener('click',function() {
    // Show Result Div
    // spanDegree.innerHTML = `${personDegree} / ${excersices[lesson].length}`;
    document.body.appendChild(resultDiv);
})
excersiceDiv.appendChild(checkButton);

document.body.appendChild(excersiceDiv);
}

}