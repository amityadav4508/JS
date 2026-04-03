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

    var stored = sessionStorage.getItem("surveyQData");
    var allQuestionsData = stored ? JSON.parse(stored) : [];

    // ===== HELPERS =====
    function getWordCount(text) {
        return text ? text.trim().split(/\s+/).length : 0;
    }

    function isExists(id) {
        return allQuestionsData.some(function (item) {
            return item.id === id;
        });
    }

    // ================= LOOP QUESTIONS =================
    questions.forEach(function (question) {

        var qid = question.id;
        var totalWords = 0;
        var qType = "Unknown";
        var gridRows = 0;
        var gridCols = 0;

        // ===== CACHE SELECTORS =====
        var cardSort = question.querySelector('.sq-cardsort-body');
        var answersTable = question.querySelector('.answers-table');
        var gridWrapper = question.querySelector('.grid.grid-table-mode');

        var radios = question.querySelectorAll('input[type="radio"]');
        var checkboxes = question.querySelectorAll('input[type="checkbox"]');
        var textarea = question.querySelector('textarea');
        var numberInput = question.querySelector('.number input');
        var textInput = question.querySelector('input[type="text"]');
        var hasCellWrapper = question.querySelector('.answers-list .cell-sub-wrapper');

        // ================= TYPE DETECTION =================

        // ===== PRIORITY 1: CardSort + Table =====
        if (cardSort && answersTable) {
            qType = "Grid";

            // ✅ SAFE FIX HERE
            var rows = (answersTable && answersTable.rows) ? answersTable.rows : [];
            gridRows = rows.length > 0 ? rows.length - 1 : 0;

            if (rows.length && rows[0] && rows[0].cells) {
                var cols = rows[0].cells;
                gridCols = cols.length > 0 ? cols.length - 1 : 0;
            }
        }

        // ===== PRIORITY 2: NORMAL GRID =====
        else if (gridWrapper) {
            qType = "Grid";
            gridRows = gridWrapper.querySelectorAll('.row-legend').length;
            gridCols = gridWrapper.querySelectorAll('.col-legend').length;
        }

        // ===== PRIORITY 3: CARD SORT ONLY =====
        else if (cardSort) {
            qType = "Grid";

            var items = cardSort.querySelectorAll('li');
            gridRows = items.length;

            var columns = question.querySelectorAll(
                '.sq-cardsort-column, .card-sort-target, .bucket, .cs-target'
            );

            gridCols = columns.length > 0 ? columns.length : 1;
        }

        // ===== PRIORITY 4: NUMBER WITH EXCLUSIVE =====
        else if (numberInput && hasCellWrapper) {
            qType = "Open End Number with exclusive";
        }

        // ===== PRIORITY 5: MOBILE GRID DETECTION =====
        else if (radios.length > 1) {

            var radioGroups = {};

            radios.forEach(function (radio) {
                radioGroups[radio.name] = (radioGroups[radio.name] || 0) + 1;
            });

            var groupKeys = Object.keys(radioGroups);

            if (groupKeys.length > 1) {
                qType = "Grid";
                gridRows = groupKeys.length;

                var maxCols = 0;
                groupKeys.forEach(function (key) {
                    if (radioGroups[key] > maxCols) {
                        maxCols = radioGroups[key];
                    }
                });

                gridCols = maxCols;
            } else {
                qType = "Single Select";
            }
        }

        // ===== SINGLE SELECT =====
        else if (radios.length) {
            qType = "Single Select";
        }

        // ===== MULTI SELECT =====
        else if (checkboxes.length) {
            qType = "Multi Select";
        }

        // ===== TEXTAREA =====
        else if (textarea) {
            qType = "Open End Textarea";
        }

        // ===== NUMBER =====
        else if (numberInput) {
            qType = "Open End Number";
        }

        // ===== TEXT INPUT =====
        else if (textInput) {
            qType = "Open End Text";
        }

        // ================= WORD COUNT =================

        var qTextEl = question.querySelector('.question-text');
        var instEl = question.querySelector('.instruction-text');

        if (qTextEl) totalWords += getWordCount(qTextEl.textContent);
        if (instEl) totalWords += getWordCount(instEl.textContent);

        // ===== CARD SORT TEXT =====
        if (cardSort) {
            var liItems = cardSort.querySelectorAll('li');
            var textArr = [];

            liItems.forEach(function (li) {
                if (li.textContent) textArr.push(li.textContent.trim());
            });

            totalWords += getWordCount(textArr.join(" "));
        }

        // ===== ANSWERS =====
        if (!cardSort) {
            var answerContainer = question.querySelectorAll(
                '.answers-list, .answers-table, [class*="answer"]'
            );

            if (answerContainer.length) {
                var textArr = [];

                answerContainer.forEach(function (el) {
                    if (el.textContent) textArr.push(el.textContent.trim());
                });

                totalWords += getWordCount(textArr.join(" "));
            }
        }

        // ===== FALLBACK =====
        if (totalWords === 0) {
            totalWords = getWordCount(question.textContent);
        }

        // ================= STORE =================
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
        var commentText = htmlBlock.querySelector('.comment-text');
        var totalWords = getWordCount(commentText && commentText.textContent);

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

    sessionStorage.setItem("surveyQData", JSON.stringify(allQuestionsData));

    var formattedData = allQuestionsData.map(function (item) {
        return item.type === "Grid"
            ? item.id + " | " + item.type + " Rows:" + item.rows + ", Cols:" + item.cols + " : " + item.totalWords
            : item.id + " | " + item.type + " : " + item.totalWords;
    }).join('\n');

    surveyQDataInputs.each(function () {
        $ (this).val(formattedData).trigger("change");
    });

    console.log("Formatted Data:", formattedData);

    // ================= TABLE HEADER =================
    var allThs = form.querySelectorAll('.VarInnerText th');

    allThs.forEach(function (th, index) {
        if (allQuestionsData[index]) {
            th.textContent = allQuestionsData[index].id;
        }
    });

});