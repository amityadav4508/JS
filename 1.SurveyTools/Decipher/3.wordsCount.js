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

    function getWordCount(text) {
        return text ? text.trim().split(/\s+/).filter(Boolean).length : 0;
    }

    function isExists(id) {
        return allQuestionsData.some(function (item) {
            return item.id === id;
        });
    }

    questions.forEach(function (question) {

        var qid = question.id;
        var totalWords = 0;
        var qType = "Unknown";
        var gridRows = 0;
        var gridCols = 0;

        // ================= ELEMENTS =================
        var cardSort = question.querySelector('.sq-cardsort-body');
        var answersTable = question.querySelector('.answers-table');
        var gridWrapper = question.querySelector('.grid.grid-table-mode');

        var rankSort =
            question.querySelector('.sq-ranksort-container') ||
            question.querySelector('.sq-ranksort') ||
            question.querySelector('.sq-ranksort-cards') ||
            question.querySelector('.sq-ranksort-buckets-container') ||
            question.querySelector('.sq-ranksort-answers-container') ||
            question.querySelector('.sq-ranksort-numbers') ||
            question.querySelector('.answers-table select');

        var answersUl = question.querySelector('.sq-ranksort-cards');
        var rankWrapperUl = question.querySelector('.sq-ranksort-noanswers');

        console.log("QID:", qid, "| RankSort detected?", !!rankSort);

        var radios = question.querySelectorAll('input[type="radio"]');
        var checkboxes = question.querySelectorAll('input[type="checkbox"]');
        var textarea = question.querySelector('textarea');
        var numberInput = question.querySelector('.number input');
        var textInput = question.querySelector('input[type="text"]');

        // ================= RANK SORT =================
        if (rankSort) {

            qType = "Rank Sort";
            var rowElements = question.querySelectorAll('.sq-ranksort-answers-container li');

            gridRows = rowElements.length || 1;
            console.log("Rows:", gridRows);

            // ===== COLS =====
            gridCols = 0;

            var firstSelect = question.querySelector('.answers-table select');

            if (firstSelect) {
                var options = firstSelect.querySelectorAll('option');

                var validOptions = options.length - 1;

                if (options.length > 0 && options[0].value === "") {
                    validOptions = options.length - 1;
                }

                gridCols = validOptions;
            }

            console.log(" FINAL Rank Sort -> Rows:", gridRows, "Cols:", gridCols);
        }

        // ================= GRID =================
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
        else if (cardSort) {
            qType = "Grid";

            gridRows = cardSort.querySelectorAll('li').length;

            var columns = question.querySelectorAll('.sq-cardsort-column, .bucket, .cs-target');
            gridCols = columns.length || 1;
        }

        // ================= SLIDER =================
        else if (
            question.querySelector('.sq-sliderpoints') ||
            question.querySelector('.sq-slider') ||
            $ (question).find('[class*="slider"]').length
        ) {
            qType = "Slider";

            var rowElements = question.querySelectorAll('.sq-sliderpoints-row-legend');
            gridRows = rowElements.length || 1;

            gridCols = 0;

            var allSliderContainers = question.querySelectorAll('.answers');

            allSliderContainers.forEach(function(container) {
                var sliderChildcols = container.querySelectorAll('.sliderpoints-legenditem');
                gridCols += sliderChildcols.length;
            });

            if (gridCols === 0) gridCols = 1;

            console.log("Slider -> Rows:", gridRows, "Cols:", gridCols);
        }

        else if (radios.length) qType = "Single Select";
        else if (checkboxes.length) qType = "Multi Select";
        else if (textarea) qType = "Open End Textarea";
        else if (numberInput) qType = "Open End Number";
        else if (textInput) qType = "Open End Text";

        // ================= WORD COUNT (UPDATED) =================
        var qTextEl = question.querySelector('.question-text');
        if (qTextEl) totalWords += getWordCount(qTextEl.innerText);

        var instEl = question.querySelector('.instruction-text');
        if (instEl) totalWords += getWordCount(instEl.innerText);

        var ansText = "";

         if (rankSort) {

            var rankItems = question.querySelectorAll('.sq-ranksort-answers-container li');

            rankItems.forEach(function (el) {
                ansText += " " + (el.innerText || "").trim();
            });

            // ===== BUCKET TEXT (DESKTOP FIX) =====
            var bucketContainer = question.querySelector('.sq-ranksort-buckets-container');

            if (bucketContainer) {
                var buckets = bucketContainer.querySelectorAll('*');

                buckets.forEach(function (el) {
                    var text = (el.innerText || "").trim().split(/\s+/).filter(Boolean);
                    if (text && text.length > 1) {
                        ansText += " " + text;
                    }
                });

                console.log(" Bucket text included for:", qid);
            }

        } else if (!cardSort) {
            question.querySelectorAll('[class*="answer"]').forEach(function (el) {
                ansText += " " + (el.innerText || "").trim();
            });
        }

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
        var text = htmlBlock.innerText || "";
        var totalWords = getWordCount(text);

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
        return (item.type === "Grid" || item.type === "Slider" || item.type === "Rank Sort")
            ? item.id + " | " + item.type + " Rows:" + item.rows + ", Cols:" + item.cols + " : " + item.totalWords
            : item.id + " | " + item.type + " : " + item.totalWords;
    }).join('\n');

    surveyQDataInputs.each(function () {
        $ (this).val(formattedData).trigger("change");
    });

    console.log("FINAL OUTPUT:", formattedData);
    
    
     var allThs = form.querySelectorAll('.VarInnerText th');

    allThs.forEach(function (th, index) {
        if (allQuestionsData[index]) {
           th.innerText = allQuestionsData[index].id;
       }
    });  
    
});