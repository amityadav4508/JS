console.log("Javascript is running");

$ (document).ready(function() {

    var form = document.querySelector("form");
    if (!form) return;

    var questions = form.querySelectorAll('.question');
    var qTextCount = form.querySelectorAll('.question-text');
    var instructionCount = form.querySelectorAll('.instruction-text'); 
    var surveyQDataInputs = $ ('.surveyQDataInput textarea');
    var qHtml = form.querySelectorAll('.html');

    surveyQDataInputs.hide();

    var stored = sessionStorage.getItem("surveyQData");
    var allQuestionsData = stored ? JSON.parse(stored) : [];

    // ---------- READ PHASE ----------
    questions.forEach(function(question, index) {

        var qid = question.id;
        var totalWords = 0;

        if (qTextCount[index]) {
            var text = qTextCount[index].textContent.trim();
            if (text) totalWords += text.split(/\s+/).filter(Boolean).length;
        }

        var answerContainer = question.querySelectorAll('.answers-list, .answers-table, [class*="answer"]');

        if (answerContainer.length > 0) {
            var ansText = "";
            answerContainer.forEach(function(el){
                ansText += " " + el.textContent.trim();
            });

            if (ansText) {
                totalWords += ansText.split(/\s+/).filter(Boolean).length;
            }
        }

        if (instructionCount[index]) {
            var instText = instructionCount[index].textContent.trim(); 
            if (instText) totalWords += instText.split(/\s+/).filter(Boolean).length;
        }

        if (totalWords === 0) {
            var fullText = question.textContent.trim();
            if (fullText) totalWords += fullText.split(/\s+/).filter(Boolean).length;
        }

        var exists = allQuestionsData.some(item => item.id === qid);
        if (!exists) {
            allQuestionsData.push({ id: qid, totalWords });
        }
    });

    // ---------- HTML BLOCK ----------
    qHtml.forEach(function(htmlBlock) {

        var htmlId = htmlBlock.id;
        var totalWords = 0;

        var commentText = htmlBlock.querySelector('.comment-text');

        if (commentText) {
            var text = commentText.textContent.trim(); // 
            if (text) totalWords += text.split(/\s+/).filter(Boolean).length;
        }

        var exists = allQuestionsData.some(item => item.id === htmlId);
        if (!exists) {
            allQuestionsData.push({ id: htmlId, totalWords });
        }
    });

    sessionStorage.setItem("surveyQData", JSON.stringify(allQuestionsData));

    var formattedData = allQuestionsData.map(item => item.id + " : " + item.totalWords).join('\n');

    surveyQDataInputs.each(function () {
        $ (this).val(formattedData).trigger("change");
    });

    // ---------- WRITE PHASE (separate) ----------
    var allThs = form.querySelectorAll('.VarInnerText th');
    var allInputs = form.querySelectorAll('.VarInnerText td input');

    allThs.forEach(function(th, index) {
        if (allQuestionsData[index]) {
            th.textContent = allQuestionsData[index].id; 
        }
    });

    allInputs.forEach(function(input, index) {
        if (allQuestionsData[index]) {
            input.value = allQuestionsData[index].totalWords;
        }
    });

});


// <text 
//   label="TotalWordsVar"
//   size="25"
//   ss:listDisplay="0"
//   ss:questionClassNames="VarInnerText">
//   <title>Hiddn to captured order of the block</title>
//   <exec>

// roww = collectDataInput.val
// lines = roww.split('\n') if roww else []

// for idx, line in enumerate(lines):
//     if idx &gt;= len(TotalWordsVar.rows):
//         break

//     if ':' not in line:
//         continue

//     value = line.split(':', 1)[1].strip()
//     r = TotalWordsVar.rows[idx]

//     TotalWordsVar.attr(r.label).val = value
//   </exec>

//   <row label="r0">0</row>
//   <row label="r1">1</row>
// </text>

// <suspend/>

