var inputA, inputB, typeA, typeB, locRegister;

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.opacity = 0;
}


function confirmFirstSelect() {
    var getEle = document.getElementById("userInitialSelection");
    var chosenOp = getEle.value;
    //chosenOp has user selection
    var hideIniChoices = document.getElementById("userInitialSelection");
    var hideIniButton = document.getElementById("confirmInitialChoice");
    var hideTitle = document.getElementById("UIS");
    hideTitle.style.display = "none";
    hideIniChoices.style.display = "none";
    hideIniButton.style.display = "none";
    if (chosenOp == "Rtype") {
        var showTitle = document.getElementById("rtypeChoiceTitle");
        var showChoices = document.getElementById("RtypeChoices");
        var showBtn = document.getElementById("rtypeConfirm");
        showTitle.style.display = "block";
        showChoices.style.display = "block";
        showBtn.style.display = "block";
    }
    else if (chosenOp == "Itype") {
        var showTitle = document.getElementById("itypeChoiceTitle");
        var showChoices = document.getElementById("ItypeChoices");
        var showBtn = document.getElementById("itypeConfirm");
        showTitle.style.display = "block";
        showChoices.style.display = "block";
        showBtn.style.display = "block";
    }
    else if (chosenOp == "Jtype") {
        var showTitle = document.getElementById("jtypeChoiceTitle");
        var showChoices = document.getElementById("JtypeChoices");
        var showBtn = document.getElementById("jtypeConfirm");
        showTitle.style.display = "block";
        showChoices.style.display = "block";
        showBtn.style.display = "block";
    }
}

/*----------------------------------------*/

function Rinstruction() {
    //This is called upon clicking the confirm button, which also closes the popup
    // var popup = document.getElementById("popup");
    // popup.style.opacity = 0;

    var getType = document.getElementById("RtypeChoices");
    var chosenType = getType.value;

    if (chosenType == "add") {

    }
    else if (chosenType == "addu") {
        /*  ADDU FORMAT
        Opcode RS RT RD SHAMT FUNC
        6      5  5  5   5     6
        --Total of 32 bits--    */

        //--------------------------------------------------------  

        var hidePrevTitle = document.getElementById("rtypeChoiceTitle");
        var hidePrevChoices = document.getElementById("RtypeChoices");
        var hideConfirmBox = document.getElementById("rtypeConfirm");
        hidePrevTitle.style.display = "none";
        hidePrevChoices.style.display = "none";
        hideConfirmBox.style.display = "none";


        var showAdduTitle = document.getElementById("adduInputTitle");
        var showAdduInputA = document.getElementById("adduInputA");
        var showAdduInputB = document.getElementById("adduInputB");
        var showAdduConfirmBtn = document.getElementById("adduConfirmBtn");
        var showAdduListA = document.getElementById("adduInputAregisters");
        var showAdduListB = document.getElementById("adduInputBregisters");
        var showSourceList = document.getElementById("adduSourceRegisters");
        showSourceList.style.display = "block";
        showAdduConfirmBtn.style.display = "block";
        showAdduTitle.style.display = "block";
        showAdduInputA.style.display = "block";
        showAdduInputB.style.display = "block";
        showAdduListA.style.display = "block";
        showAdduListB.style.display = "block";


        showAdduConfirmBtn.addEventListener("click", function () {
            inputA = parseInt(document.getElementById("adduInputA").value);
            inputB = parseInt(document.getElementById("adduInputB").value);
            typeA = document.getElementById("adduInputAregisters").value;
            typeB = document.getElementById("adduInputBregisters").value;
            locRegister = document.getElementById("adduSourceRegisters").value;
            console.log("A :", inputA);
            console.log("B :", inputB);
            console.log("type of A :", typeA);
            console.log("type of B :", typeB);
            console.log("Source Reg: ", locRegister);
            //Type A = RS, Type B = RT, LocReg = RD

            var startBtn = document.getElementById("startSIM");

            var infoBubble1 = document.getElementById("infoBubble1");
            var infoBubble2 = document.getElementById("infoBubble2");

            var typeABin = checkRegister(typeA);
            var typeBBin = checkRegister(typeB);
            var typeDestBin = checkRegister(locRegister);
            
            var completeExpression = "000000" + typeABin + typeBBin + typeDestBin + "00000" + "100001";
            console.log("OPERATION:", completeExpression);

            var currentAIcon = document.getElementById("currentAIcon");
            var currentBIcon = document.getElementById("currentBIcon");

            infoBubble1.textContent = completeExpression;
            infoBubble2.textContent = completeExpression;

            startBtn.addEventListener("click", function () {
                infoBubble1.style.display = "block";
                infoBubble2.style.display = "block";

                infoBubble1.style.animation = "move_first_bubble 4s ease-in-out forwards";
                currentAIcon.style.animation = "first_move 5s ease-in-out forwards";
                startBtn.style.display = "none";
                
                setTimeout(function() {
                    currentBIcon.style.display = "block";
                }, 2700);
                //this number represents 2.7 seconds of the animation, where the second current shows up

                currentBIcon.style.animation = "currentB_first 5s ease-in-out forwards";

                var nextBtn1 = document.getElementById("nextSim");
                nextBtn1.style.display = "block";
                nextBtn1.addEventListener("click", function () {

                });
            });
        });

        //--------------------------------------------------------


    }
    else if (chosenType == "sub") {

    }
    else if (chosenType == "subu") {

    }
}