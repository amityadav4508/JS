// js code 

// decipher 

console.log("Javascript is running");
$ (document).ready(function () {

    var form = document.querySelector("form");
    if (!form) {
        console.log("Form not found, skipping script");
        return;
    }
    console.log("FINAL OUTPUT:", formattedData);
});





console.log("Javascript is running");

$ (document).ready(function () {

    var form = document.querySelector("form");
    if (!form) {
        console.log("Form not found, skipping script");
        return;
    }

    var questions = form.querySelectorAll('.question');
    var surveyQDataInputs = $ ('.surveyQDataInput textarea');
    var qHtml = form.querySelectorAll('.html');

    surveyQDataInputs.show();

    // ================= STORAGE =================
    var stored = sessionStorage.getItem("surveyQData");
    var allQuestionsData = stored ? JSON.parse(stored) : [];

    function getWordCount(text) {
        return text ? text.trim().split(/\s+/).filter(Boolean).length : 0;
    }

    function isExists(id) {
        return allQuestionsData.some(function (item) {
            return item.id === id;
        });
    }

    function formatItem(item) {
        return (item.type === "Grid" || item.type === "Slider" || item.type === "Rank Sort")
            ? item.id + " | " + item.type + " Rows:" + item.rows + ", Cols:" + item.cols + " : " + item.totalWords
            : item.id + " | " + item.type + " : " + item.totalWords;
    }

    // ================= PROCESS QUESTIONS =================
    questions.forEach(function (question) {

        var qid = question.id;
        var totalWords = 0;
        var qType = "Unknown";
        var gridRows = 0;
        var gridCols = 0;

        var cardSort = question.querySelector('.sq-cardsort-body');
        var answersTable = question.querySelector('.answers-table');
        var gridWrapper = question.querySelector('.grid.grid-table-mode');

        var rankSort =
            question.querySelector('.sq-ranksort-container') ||
            question.querySelector('.answers-table select');

        var radios = question.querySelectorAll('input[type="radio"]');
        var checkboxes = question.querySelectorAll('input[type="checkbox"]');
        var textarea = question.querySelector('textarea');
        var numberInput = question.querySelector('.number input');
        var textInput = question.querySelector('input[type="text"]');

        // ===== TYPE DETECTION =====
        if (rankSort) {
            qType = "Rank Sort";

            var rows = question.querySelectorAll('.sq-ranksort-answers-container li');
            gridRows = rows.length || 1;

            var firstSelect = question.querySelector('.answers-table select');
            if (firstSelect) {
                var options = firstSelect.querySelectorAll('option');
                gridCols = (options[0] && options[0].value === "") ? options.length - 1 : options.length;
            }
        }
        else if (cardSort && answersTable) {
            qType = "Grid";

            var rows = answersTable.querySelectorAll('tr');
            gridRows = rows.length > 0 ? rows.length - 1 : 0;

            var firstRow = answersTable.querySelector('tr');
            if (firstRow) {
                var cols = firstRow.querySelectorAll('th, td');
                gridCols = cols.length > 0 ? cols.length - 1 : 0;
            }
        }
        else if (gridWrapper) {
            qType = "Grid";
            gridRows = gridWrapper.querySelectorAll('.row-legend').length;
            gridCols = gridWrapper.querySelectorAll('.col-legend').length;
        }
        else if (
            question.querySelector('.sq-sliderpoints') ||
            question.querySelector('.sq-slider') ||
            $ (question).find('[class*="slider"]').length
        ) {
            qType = "Slider";

            gridRows = question.querySelectorAll('.sq-sliderpoints-row-legend').length || 1;

            question.querySelectorAll('.answers').forEach(function (container) {
                gridCols += container.querySelectorAll('.sliderpoints-legenditem').length;
            });

            if (gridCols === 0) gridCols = 1;
        }
        else if (radios.length) qType = "Single Select";
        else if (checkboxes.length) qType = "Multi Select";
        else if (textarea) qType = "Open End Textarea";
        else if (numberInput) qType = "Open End Number";
        else if (textInput) qType = "Open End Text";

        // ===== WORD COUNT =====
        var qTextEl = question.querySelector('.question-text');
        if (qTextEl) totalWords += getWordCount(qTextEl.innerText);

        var instEl = question.querySelector('.instruction-text');
        if (instEl) totalWords += getWordCount(instEl.innerText);

        var ansText = "";
        question.querySelectorAll('[class*="answer"]').forEach(function (el) {
            ansText += " " + (el.innerText || "").trim();
        });

        totalWords += getWordCount(ansText);

        if (totalWords === 0) {
            totalWords = getWordCount(question.innerText);
        }

        if (!isExists(qid)) {
            allQuestionsData.push({
                id: qid,
                totalWords: totalWords,
                type: qType,
                rows: gridRows,
                cols: gridCols
            });
        }
    });

    // ================= HTML BLOCK =================
    qHtml.forEach(function (htmlBlock) {
        var htmlId = htmlBlock.id;
        var totalWords = getWordCount(htmlBlock.innerText || "");

        if (!isExists(htmlId)) {
            allQuestionsData.push({
                id: htmlId,
                totalWords: totalWords,
                type: "Info Node",
                rows: 0,
                cols: 0
            });
        }
    });

    // ================= SAVE =================
    sessionStorage.setItem("surveyQData", JSON.stringify(allQuestionsData));

    var formattedData = allQuestionsData.map(formatItem).join('\n');

    surveyQDataInputs.each(function () {
        $ (this).val(formattedData).trigger("change");
    });

    console.log("FINAL OUTPUT:", formattedData);

    // ================= TD =================
    var allInputs = form.querySelectorAll('.VarInnerText td input');

    allInputs.forEach(function (input, index) {
        if (allQuestionsData[index]) {
            input.value = formatItem(allQuestionsData[index]);
        }
    });

    // ================= TH =================
    var allThs = form.querySelectorAll('.VarInnerText th');

    allThs.forEach(function (th, index) {
        if (allQuestionsData[index]) {
            th.innerText = allQuestionsData[index].id;
        }
    });

    // ================= DT (ID BASED) =================
    var dtdata = [];
    var qaBlocks = document.querySelectorAll('.qaInfo');

    qaBlocks.forEach(function (qa, index) {

        var dt = qa.querySelector('dt');
        var question = document.querySelectorAll('.question')[index];

        if (!dt || !question) return;

        var qid = question.id;

        var item = allQuestionsData.find(function (q) {
            return q.id === qid;
        });

        if (item) {
            var formattedValue = formatItem(item);
            dt.innerText = formattedValue;
            dtdata.push(formattedValue);
        }
    });

    console.log("Final dtdata:", dtdata);

    // =================  LABEL UPDATE =================
    questions.forEach(function (question) {
    
    console.log("qiddd", question.id);
    

        var qid = question.id;

        var item = allQuestionsData.find(function (q) {
            return q.id === qid;
        });

        if (item) {

            var formattedValue = formatItem(item);

            var label = question.querySelector('.question-text');

            if (label) {
                //  OPTION 1: Replace label
                label.innerText = formattedValue;

                //  OPTION 2 (better UX - use instead if needed)
                // label.innerText += " (" + formattedValue + ")";
                console.log(" Label updated:", qid, formattedValue);
            }
        }

    });

});
