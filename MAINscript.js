var inputA, inputB, typeA, typeB, locRegister;

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.opacity = 0;
    popup.style.zIndex = -99;
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

function JInstruction() {

    var getType = document.getElementById("JtypeChoices");
    var chosenType = getType.value;

    console.log("Here is your J choice: " + chosenType);

    if (chosenType == "j") {

        var hidePrevTitle = document.getElementById("jtypeChoiceTitle");
        var hidePrevChoices = document.getElementById("JtypeChoices");
        var hideConfirmBox = document.getElementById("jtypeConfirm");
        hidePrevTitle.style.display = "none";
        hidePrevChoices.style.display = "none";
        hideConfirmBox.style.display = "none";

        var startBtn = document.getElementById("startSIM");
        var infoBubble1 = document.getElementById("infoBubble1");

        var currentAIcon = document.getElementById("currentAIcon");
        var currentBIcon = document.getElementById("currentBIcon");
        //'currentCIcon' takes the place of currentBIcon, when it goes to the ADD node to index to the next address in memory
        var currentCIcon = document.getElementById("currentCIcon");

        infoBubble1.textContent = "0x10000000";

        startBtn.addEventListener("click", function () {

            var previousTipsBox = document.getElementById("previousTipsBox");
            var placeholderTextContent = "..base..";

            infoBubble1.style.display = "block";
            startBtn.style.display = "none";
            var startBtnImg = document.getElementById("startBtnImg");
            startBtnImg.style.display = "none";

            infoBubble1.style.animation = "move_first_bubble 1s ease-in-out forwards";
            setTimeout(function () {
                currentAIcon.style.animation = "first_move 5s ease-in-out forwards";
                setTimeout(function () {
                    currentBIcon.style.display = "block";
                    currentBIcon.style.animation = "currentB_first 5s ease-in-out forwards";
                    var nextBtn1 = document.getElementById("nextSim");
                    setTimeout(function () {
                        var IMinfo = document.getElementById("IMbox");
                        IMinfo.style.animation = "IManimShow 0.5s ease-in-out forwards";
                        var IMboxTEXT = document.getElementById("IMboxTEXT");
                        var spanEleNew = document.createElement("span");
                        spanEleNew.style.fontSize = "0.6vw";
                        spanEleNew.style.color = "orangered";
                        spanEleNew.textContent = "000010" + "00000000000000000000000011";
                        IMboxTEXT.appendChild(document.createTextNode("The IM then takes the memory address, and retrieves the instruction stored within. In this case, that instruction is: "))
                        IMboxTEXT.appendChild(spanEleNew);
                        IMboxTEXT.style.animation = "IManimShowText 0.5s ease-in-out forwards";
                        placeholderTextContent = IMboxTEXT.textContent;
                        setTimeout(function () {
                            var nextSimImg = document.getElementById("nextSimImg");
                            nextSimImg.style.display = "block";
                            nextBtn1.style.display = "block";
                        }, 1000);
                    }, 5000);
                }, 2700);
            }, 1000);
            var nextBtn1 = document.getElementById("nextSim");
            nextBtn1.addEventListener("click", function () {
                previousTipsBox.textContent = placeholderTextContent;
                previousTipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                var tipsBox = document.getElementById("tipsBox");
                var IMboxTEXT = document.getElementById("IMboxTEXT");
                IMboxTEXT.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                nextBtn1.style.display = "none";
                var nextSimImg = document.getElementById("nextSimImg");
                nextSimImg.style.display = "none";
                //for now, j type instructions are static
                jtypeIni("000010", "00000000000000000000000011");
                showJInstructionBlocks(); // MAKE SURE TO GO BACK AND ALTER THE SIZING OF THE BLOCKS 
                tipsBox.textContent = "The IM then sends the instruction forward in the datapath to be evaluated by the Control, which will tell the rest of the program what kind of instruction is to be evaluated.";
                tipsBox.style.animation = "showTipsBox 0.5s ease-in-out forwards";
                placeholderTextContent = tipsBox.textContent;
                setTimeout(function () {
                    var IMinfo = document.getElementById("IMbox");
                    IMinfo.style.animation = "hide_opacity_fromhalf 0.5s ease-in-out forwards";
                    moveBlocks_initial_rtype();
                    //This Activated Text is for ADDU R type -----
                    var activatedText1 = activateText(document.getElementById("instr_32to26"));
                    var activatedText2 = activateText(document.getElementById("instr_25to0"));
                    //-----------------------------------
                    setTimeout(function () {
                        var sim_3 = document.getElementById("sim_3");
                        var sim3Img = document.getElementById("sim3Img");
                        sim_3.style.display = "block";
                        sim3Img.style.display = "block";
                    }, 3000);
                }, 2000);
            });
        });

    }

}

/*----------------------------------------*/

function Rinstruction() {
    //This is called upon clicking the confirm button, which also closes the popup
    // var popup = document.getElementById("popup");
    // popup.style.opacity = 0;

    var getType = document.getElementById("RtypeChoices");
    var chosenType = getType.value;

    /*++++++++++++++++++++++++++++++++++++++++++++*/

    if (chosenType == "add") {

        //MAKE SURE TO DIFFERENTIATE BETWEEN ADDU AND ADD, AND SUBU AND SUB

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
            if (isNaN(inputA)) {
                inputA = 6;
            }
            if (isNaN(inputB)) {
                inputB = 4;
            }
            var value_block_postRegister_1 = document.getElementById("value_block_postRegister_1");
            var value_block_postRegister_2 = document.getElementById("value_block_postRegister_2");
            value_block_postRegister_1.textContent = inputA;
            value_block_postRegister_2.textContent = inputB;

            console.log("type of A :", typeA);
            console.log("type of B :", typeB);
            console.log("Source Reg: ", locRegister);
            //Type A = RS, Type B = RT, LocReg = RD

            var startBtn = document.getElementById("startSIM");

            var infoBubble1 = document.getElementById("infoBubble1");

            var typeABin = checkRegister(typeA);
            var typeBBin = checkRegister(typeB);
            var typeDestBin = checkRegister(locRegister);

            var completeExpression = "000000" + typeABin + typeBBin + typeDestBin + "00000" + "100001";
            console.log("OPERATION:", completeExpression);


            var currentAIcon = document.getElementById("currentAIcon");
            var currentBIcon = document.getElementById("currentBIcon");
            //'currentCIcon' takes the place of currentBIcon, when it goes to the ADD node to index to the next address in memory
            var currentCIcon = document.getElementById("currentCIcon");

            infoBubble1.textContent = "0x10000000";

            startBtn.addEventListener("click", function () {

                var previousTipsBox = document.getElementById("previousTipsBox");
                var placeholderTextContent = "..base..";

                infoBubble1.style.display = "block";
                startBtn.style.display = "none";
                var startBtnImg = document.getElementById("startBtnImg");
                startBtnImg.style.display = "none";

                infoBubble1.style.animation = "move_first_bubble 1s ease-in-out forwards";
                setTimeout(function () {
                    currentAIcon.style.animation = "first_move 5s ease-in-out forwards";
                    setTimeout(function () {
                        currentBIcon.style.display = "block";
                        currentBIcon.style.animation = "currentB_first 5s ease-in-out forwards";
                        var nextBtn1 = document.getElementById("nextSim");
                        setTimeout(function () {
                            var IMinfo = document.getElementById("IMbox");
                            IMinfo.style.animation = "IManimShow 0.5s ease-in-out forwards";
                            var IMboxTEXT = document.getElementById("IMboxTEXT");
                            var spanEleNew = document.createElement("span");
                            spanEleNew.style.fontSize = "0.6vw";
                            spanEleNew.style.color = "orangered";
                            spanEleNew.textContent = completeExpression;
                            IMboxTEXT.appendChild(document.createTextNode("The IM then takes the memory address, and retrieves the instruction stored within. In this case, that instruction is: "))
                            IMboxTEXT.appendChild(spanEleNew);
                            IMboxTEXT.style.animation = "IManimShowText 0.5s ease-in-out forwards";
                            placeholderTextContent = IMboxTEXT.textContent;
                            setTimeout(function () {
                                var nextSimImg = document.getElementById("nextSimImg");
                                nextSimImg.style.display = "block";
                                nextBtn1.style.display = "block";
                            }, 1000);
                        }, 5000);
                    }, 2700);
                }, 1000);


                var nextBtn1 = document.getElementById("nextSim");
                nextBtn1.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    previousTipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                    var tipsBox = document.getElementById("tipsBox");
                    var IMboxTEXT = document.getElementById("IMboxTEXT");
                    IMboxTEXT.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                    nextBtn1.style.display = "none";
                    var nextSimImg = document.getElementById("nextSimImg");
                    nextSimImg.style.display = "none";
                    rtypeIni("000000", typeABin, typeBBin, typeDestBin, "00000", "100001");
                    showInstructionBlocks();
                    tipsBox.textContent = "The IM then sends the instruction forward in the datapath to be evaluated by the Control, which will tell the rest of the program what kind of instruction is to be evaluated.";
                    tipsBox.style.animation = "showTipsBox 0.5s ease-in-out forwards";
                    placeholderTextContent = tipsBox.textContent;
                    setTimeout(function () {
                        var IMinfo = document.getElementById("IMbox");
                        IMinfo.style.animation = "hide_opacity_fromhalf 0.5s ease-in-out forwards";
                        moveBlocks_initial_rtype();
                        //This Activated Text is for ADDU R type -----
                        var activatedText1 = activateText(document.getElementById("instr_32to26"));
                        var activatedText2 = activateText(document.getElementById("instr_25to21"));
                        var activatedText3 = activateText(document.getElementById("instr_20to16"));
                        var activatedText4 = activateText(document.getElementById("instr_15to11"));
                        var activatedText5 = activateText(document.getElementById("instr_15to0"));
                        var activatedText6 = activateText(document.getElementById("instr_5to0"));
                        //-----------------------------------
                        setTimeout(function () {
                            var sim_3 = document.getElementById("sim_3");
                            var sim3Img = document.getElementById("sim3Img");
                            sim_3.style.display = "block";
                            sim3Img.style.display = "block";
                        }, 3000);
                    }, 2000);
                });
                var sim_3 = document.getElementById("sim_3");
                sim_3.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_3.style.display = "none";
                    var sim3Img = document.getElementById("sim3Img");
                    sim3Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.style.animation = "item_show_opacity 1s ease-in-out forwards";
                        tipsBox.textContent = "The first six bits are sent to the Control unit, which then tells it which paths and operations to execute in the program. Remember, that all of these steps are happening concurrently in reality, and this is just a step-by-step visualization.";
                        placeholderTextContent = tipsBox.textContent;
                        var opBlock = document.getElementById("opcode_block");
                        opBlock.style.animation = "moveOpcode_second 3s ease-in-out forwards";
                        setTimeout(function () {
                            var ctrlTextBox = document.getElementById("CTRLboxTEXT");
                            ctrlTextBox.textContent = "The Control then tells the program what 'paths' need to be 'activated'."
                            ctrlTextBox.style.animation = "item_show_opacity 1s ease-in-out forwards";
                            setTimeout(function () {
                                var sim_4 = document.getElementById("sim_4");
                                sim_4.style.display = "block";
                                var sim4Img = document.getElementById("sim4Img");
                                sim4Img.style.display = "block";
                            }, 1500);
                        }, 3000);
                    }, 1000);
                });

                var sim_4 = document.getElementById("sim_4");
                sim_4.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_4.style.display = "none";
                    var sim4Img = document.getElementById("sim4Img");
                    sim4Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        var ctrlTextBox = document.getElementById("CTRLboxTEXT");
                        ctrlTextBox.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                        var regdest_textCT = activateControl_text(document.getElementById("regdest_textCT"));
                        var aluop_textCT = activateControl_text(document.getElementById("aluop_textCT"));
                        var regwrite_textCT = activateControl_text(document.getElementById("regwrite_textCT"));
                        tipsBox.textContent = "The Control has now told the program which 'paths' to use during execution, per the opcode.";
                        placeholderTextContent = tipsBox.textContent;
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        setTimeout(function () {
                            var sim_5 = document.getElementById("sim_5");
                            sim_5.style.display = "block";
                            var sim5Img = document.getElementById("sim5Img");
                            sim5Img.style.display = "block";
                        }, 2000);
                    }, 1000);
                });

                var sim_5 = document.getElementById("sim_5");
                sim_5.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_5.style.display = "none";
                    var sim5Img = document.getElementById("sim5Img");
                    sim5Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represent the reigster to read data from. In this case, the register is '" + typeABin + "', or " + typeA + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rs_block = document.getElementById("rs_block");
                        rs_block.style.animation = "moveRs_second 4s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                previousTipsBox.textContent = placeholderTextContent;
                                value_block_postRegister_1.style.display = "block";
                                value_block_postRegister_1.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                tipsBox.textContent = "The Register File then reads the data within " + typeA + " and sends this value forward to the ALU, which is " + inputA + ".";
                                placeholderTextContent = tipsBox.textContent;
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                value_block_postRegister_1.style.animation = "move_valueblock1_ini 4s ease-in-out forwards";
                                setTimeout(function () {
                                    var sim_6 = document.getElementById("sim_6");
                                    sim_6.style.display = "block";
                                    var sim6Img = document.getElementById("sim6Img");
                                    sim6Img.style.display = "block";
                                }, 4500);
                            }, 500);
                        }, 4000);
                    }, 500);
                });

                var sim_6 = document.getElementById("sim_6");
                sim_6.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_6.style.display = "none";
                    var sim6Img = document.getElementById("sim6Img");
                    sim6Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represent the next reigster to read data from. In this case, the register is '" + typeBBin + "', or " + typeB + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rt_block = document.getElementById("rt_block");
                        rt_block.style.animation = "moveRT_second 4s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                tipsBox.textContent = "The Register File then reads the data within " + typeB + " and sends this value forward to the ALU, which is " + inputB + ".";
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                previousTipsBox.textContent = placeholderTextContent;
                                value_block_postRegister_2.style.display = "block";
                                value_block_postRegister_2.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                value_block_postRegister_2.style.animation = "move_valueblock2_ini 4s ease-in-out forwards";
                                //logic for splitoff block + DM block info1
                                var value_block_postReg_2_SPLITOFF_toDM = document.getElementById("value_block_postReg_2_SPLITOFF_toDM");
                                value_block_postReg_2_SPLITOFF_toDM.textContent = value_block_postRegister_2.textContent;
                                value_block_postReg_2_SPLITOFF_toDM.style.display = "block";
                                value_block_postReg_2_SPLITOFF_toDM.style.animation = "move_splitoff_value2_block 4s ease-in-out forwards";
                                //end logic for splitoff block + DM block info1
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                setTimeout(function () {
                                    //start of dm box + text show
                                    var DMbox = document.getElementById("DMbox");
                                    var DMboxTEXT = document.getElementById("DMboxTEXT");
                                    DMboxTEXT.textContent = "Since neither 'MemWrite' nor the 'MemRead' lines are activated via the Control, the DM does not read/write anything. Also the MUX that the 'Read Data' line flows into is set to zero, as the Control didn't activate the 'MemToReg' path.";
                                    DMbox.style.animation = "highlight_DMbox 0.5s ease-in-out forwards";
                                    DMboxTEXT.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                    //end of dm box + text show
                                    var sim_7 = document.getElementById("sim_7");
                                    sim_7.style.display = "block";
                                    var sim7Img = document.getElementById("sim7Img");
                                    sim7Img.style.display = "block";
                                }, 4500);
                            }, 500);
                        }, 4000);
                    }, 500);
                });

                var sim_7 = document.getElementById("sim_7");
                sim_7.addEventListener("click", function () {
                    //dm box + text disappear start
                    var DMbox = document.getElementById("DMbox");
                    var DMboxTEXT = document.getElementById("DMboxTEXT");
                    DMbox.style.animation = "disappear_DMbox_highlight 0.5s ease-in-out forwards";
                    DMboxTEXT.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    //dm box + text disappear end
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_7.style.display = "none";
                    var sim7Img = document.getElementById("sim7Img");
                    sim7Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represent the destination reigster to write data to. In this case, the register is '" + typeDestBin + "', or " + locRegister + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rd_block = document.getElementById("rd_block");
                        rd_block.style.animation = "moveRD_second 6s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                previousTipsBox.textContent = placeholderTextContent;
                                tipsBox.textContent = "Since the Control had activated the 'RegDest' path, the MUX that the destination register goes through has been activated.";
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                setTimeout(function () {
                                    var sim_8 = document.getElementById("sim_8");
                                    sim_8.style.display = "block";
                                    var sim8Img = document.getElementById("sim8Img");
                                    sim8Img.style.display = "block";
                                }, 500);
                            }, 500);
                        }, 6000);
                    }, 500);
                });

                var sim_8 = document.getElementById("sim_8");
                sim_8.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_8.style.display = "none";
                    var sim8Img = document.getElementById("sim8Img");
                    sim8Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, bits 15-0 are sent forwards. However, 'shamt' is not used in this instruction, as it is typically used for shift instructions. So, only bits 5-0 are used, also known as the 'func'."
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var shamt_block = document.getElementById("shamt_block");
                        var func_block = document.getElementById("func_block");
                        setTimeout(function () {
                            shamt_block.style.animation = "moveShamt_second 8s ease-in-out forwards";
                            func_block.style.animation = "moveFunc_second 8s ease-in-out forwards";
                            var typeofoperation_ALUcontrol_block = document.getElementById("typeofoperation_ALUcontrol_block");
                            setTimeout(function () {
                                typeofoperation_ALUcontrol_block.style.display = "block";
                                typeofoperation_ALUcontrol_block.textContent = "+";
                                typeofoperation_ALUcontrol_block.style.animation = "moveTypeOfOperation_ini 4s ease-in-out forwards";
                                tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                setTimeout(function () {
                                    previousTipsBox.textContent = placeholderTextContent;
                                    tipsBox.textContent = "Now that the ALU knows what kind of operation to perform, it can execute the instruction on the provided values."
                                    tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                    placeholderTextContent = tipsBox.textContent;
                                    setTimeout(function () {
                                        value_block_postRegister_1.style.animation = "combine_num_1 1s ease-in-out forwards";
                                        value_block_postRegister_2.style.animation = "combine_num_2 1s ease-in-out forwards";
                                        setTimeout(function () {
                                            var value_block_totalval = document.getElementById("value_block_totalval");
                                            value_block_totalval.style.display = "block";
                                            value_block_totalval.textContent = inputA + inputB;
                                            value_block_totalval.style.animation = "moveTotal_num_forADDU 12s ease-in-out forwards";
                                            setTimeout(function () {
                                                var rd_block = document.getElementById("rd_block");
                                                rd_block.style.left = "48.7%";
                                                rd_block.style.top = "57%";
                                                rd_block.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                setTimeout(function () {
                                                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                                    setTimeout(function () {
                                                        previousTipsBox.textContent = placeholderTextContent;
                                                        tipsBox.textContent = "The total is now sent to the destination address, " + locRegister + ", which is represented as '" + typeDestBin + "'. The value is stored here and now the main operation is complete. However, the program isn't done and still needs to get ready for the next operation.";
                                                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                        value_block_totalval.style.left = "49.3%";
                                                        value_block_totalval.style.top = "59.3%";
                                                        rd_block.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                                                        value_block_totalval.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                                                        placeholderTextContent = tipsBox.textContent;
                                                        setTimeout(function () {
                                                            var sim_9 = document.getElementById("sim_9");
                                                            sim_9.style.display = "block";
                                                            var sim9Img = document.getElementById("sim9Img");
                                                            sim9Img.style.display = "block";
                                                        }, 1000);
                                                    }, 500);
                                                }, 500);
                                            }, 12000);
                                        }, 1000);
                                    }, 500);
                                }, 4000);
                            }, 8000);
                        }, 500);
                    }, 500);
                });

                var sim_9 = document.getElementById("sim_9");
                sim_9.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_9.style.display = "none";
                    var sim9Img = document.getElementById("sim9Img");
                    sim9Img.style.display = "none";
                    currentCIcon.style.display = "block";
                    currentCIcon.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        currentCIcon.style.animation = "move_currentC_icon_first 1.5s ease-in-out forwards";
                        setTimeout(function () {
                            var infoBubble2 = document.getElementById("infoBubble2");
                            infoBubble2.textContent = "0x10000000";
                            infoBubble2.style.display = "block";
                            infoBubble2.style.animation = "item_show_opacity 1s ease-in-out forwards";
                            var tipsBox = document.getElementById("tipsBox");
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                tipsBox.textContent = "The memory address from the start now needs to be incremented, by 4, so the program can execute the next step using the next address."
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                var incrementIcon = document.getElementById("incrementIcon");
                                incrementIcon.style.display = "block";
                                incrementIcon.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                setTimeout(function () {
                                    incrementIcon.style.animation = "move_incrementIcon 2.5s ease-in-out forwards";
                                    setTimeout(function () {
                                        infoBubble2.style.animation = "incremented_box_colorShift 2s ease-in-out";
                                        setTimeout(function () { infoBubble2.textContent = "0x10000004"; }, 500);
                                        setTimeout(function () {
                                            infoBubble2.style.animation = "shrink_infoBubble2 1.5s ease-in-out forwards";
                                            currentCIcon.style.left = "21%";
                                            currentCIcon.style.top = "19.5%";
                                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                            setTimeout(function () {
                                                tipsBox.textContent = "The ADDER then sends the new, incremented address back to the PC for the next operation to be executed. This operation is now complete.";
                                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                previousTipsBox.textContent = placeholderTextContent;
                                                currentCIcon.style.animation = "final_currentC_move 10s ease-in-out forwards";
                                            }, 1500);
                                        }, 2000);
                                    }, 2500);
                                }, 1000);
                            }, 1000);
                        }, 1500);
                    }, 500);
                });
            });
        });
    }

    /*++++++++++++++++++++++++++++++++++++++++++++*/

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
            if (isNaN(inputA)) {
                inputA = 6;
            }
            if (isNaN(inputB)) {
                inputB = 4;
            }
            var value_block_postRegister_1 = document.getElementById("value_block_postRegister_1");
            var value_block_postRegister_2 = document.getElementById("value_block_postRegister_2");
            value_block_postRegister_1.textContent = inputA;
            value_block_postRegister_2.textContent = inputB;

            console.log("type of A :", typeA);
            console.log("type of B :", typeB);
            console.log("Source Reg: ", locRegister);
            //Type A = RS, Type B = RT, LocReg = RD

            var startBtn = document.getElementById("startSIM");

            var infoBubble1 = document.getElementById("infoBubble1");

            var typeABin = checkRegister(typeA);
            var typeBBin = checkRegister(typeB);
            var typeDestBin = checkRegister(locRegister);

            var completeExpression = "000000" + typeABin + typeBBin + typeDestBin + "00000" + "100001";
            console.log("OPERATION:", completeExpression);


            var currentAIcon = document.getElementById("currentAIcon");
            var currentBIcon = document.getElementById("currentBIcon");
            //'currentCIcon' takes the place of currentBIcon, when it goes to the ADD node to index to the next address in memory
            var currentCIcon = document.getElementById("currentCIcon");

            infoBubble1.textContent = "0x10000000";

            startBtn.addEventListener("click", function () {

                var previousTipsBox = document.getElementById("previousTipsBox");
                var placeholderTextContent = "..base..";

                infoBubble1.style.display = "block";
                startBtn.style.display = "none";
                var startBtnImg = document.getElementById("startBtnImg");
                startBtnImg.style.display = "none";
                infoBubble1.style.animation = "move_first_bubble 1s ease-in-out forwards";
                setTimeout(function () {
                    currentAIcon.style.animation = "first_move 5s ease-in-out forwards";
                    setTimeout(function () {
                        currentBIcon.style.display = "block";
                        currentBIcon.style.animation = "currentB_first 5s ease-in-out forwards";
                        var nextBtn1 = document.getElementById("nextSim");
                        setTimeout(function () {
                            var IMinfo = document.getElementById("IMbox");
                            IMinfo.style.animation = "IManimShow 0.5s ease-in-out forwards";
                            var IMboxTEXT = document.getElementById("IMboxTEXT");
                            var spanEleNew = document.createElement("span");
                            spanEleNew.style.fontSize = "0.6vw";
                            spanEleNew.style.color = "orangered";
                            spanEleNew.textContent = completeExpression;
                            IMboxTEXT.appendChild(document.createTextNode("The IM then takes the memory address, and retrieves the instruction stored within. In this case, that instruction is: "))
                            IMboxTEXT.appendChild(spanEleNew);
                            IMboxTEXT.style.animation = "IManimShowText 0.5s ease-in-out forwards";
                            placeholderTextContent = IMboxTEXT.textContent;
                            setTimeout(function () {
                                var nextSimImg = document.getElementById("nextSimImg");
                                nextSimImg.style.display = "block";
                                nextBtn1.style.display = "block";
                            }, 1000);
                        }, 5000);
                    }, 2700);
                }, 1000);


                var nextBtn1 = document.getElementById("nextSim");
                nextBtn1.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    previousTipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                    var tipsBox = document.getElementById("tipsBox");
                    var IMboxTEXT = document.getElementById("IMboxTEXT");
                    IMboxTEXT.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                    nextBtn1.style.display = "none";
                    var nextSimImg = document.getElementById("nextSimImg");
                    nextSimImg.style.display = "none";
                    rtypeIni("000000", typeABin, typeBBin, typeDestBin, "00000", "100001");
                    showInstructionBlocks();
                    tipsBox.textContent = "The IM then sends the instruction forward in the datapath to be evaluated by the Control, which will tell the rest of the program what kind of instruction is to be evaluated.";
                    tipsBox.style.animation = "showTipsBox 0.5s ease-in-out forwards";
                    placeholderTextContent = tipsBox.textContent;
                    setTimeout(function () {
                        var IMinfo = document.getElementById("IMbox");
                        IMinfo.style.animation = "hide_opacity_fromhalf 0.5s ease-in-out forwards";
                        moveBlocks_initial_rtype();
                        //This Activated Text is for ADDU R type -----
                        var activatedText1 = activateText(document.getElementById("instr_32to26"));
                        var activatedText2 = activateText(document.getElementById("instr_25to21"));
                        var activatedText3 = activateText(document.getElementById("instr_20to16"));
                        var activatedText4 = activateText(document.getElementById("instr_15to11"));
                        var activatedText5 = activateText(document.getElementById("instr_15to0"));
                        var activatedText6 = activateText(document.getElementById("instr_5to0"));
                        //-----------------------------------
                        setTimeout(function () {
                            var sim_3 = document.getElementById("sim_3");
                            var sim3Img = document.getElementById("sim3Img");
                            sim_3.style.display = "block";
                            sim3Img.style.display = "block";
                        }, 3000);
                    }, 2000);
                });
                var sim_3 = document.getElementById("sim_3");
                sim_3.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_3.style.display = "none";
                    var sim3Img = document.getElementById("sim3Img");
                    sim3Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.style.animation = "item_show_opacity 1s ease-in-out forwards";
                        tipsBox.textContent = "The first six bits are sent to the Control unit, which then tells it which paths and operations to execute in the program. Remember, that all of these steps are happening concurrently in reality, and this is just a step-by-step visualization.";
                        placeholderTextContent = tipsBox.textContent;
                        var opBlock = document.getElementById("opcode_block");
                        opBlock.style.animation = "moveOpcode_second 3s ease-in-out forwards";
                        setTimeout(function () {
                            var ctrlTextBox = document.getElementById("CTRLboxTEXT");
                            ctrlTextBox.textContent = "The Control then tells the program what 'paths' need to be 'activated'."
                            ctrlTextBox.style.animation = "item_show_opacity 1s ease-in-out forwards";
                            setTimeout(function () {
                                var sim_4 = document.getElementById("sim_4");
                                sim_4.style.display = "block";
                                var sim4Img = document.getElementById("sim4Img");
                                sim4Img.style.display = "block";
                            }, 1500);
                        }, 3000);
                    }, 1000);
                });

                var sim_4 = document.getElementById("sim_4");
                sim_4.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_4.style.display = "none";
                    var sim4Img = document.getElementById("sim4Img");
                    sim4Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        var ctrlTextBox = document.getElementById("CTRLboxTEXT");
                        ctrlTextBox.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                        var regdest_textCT = activateControl_text(document.getElementById("regdest_textCT"));
                        var aluop_textCT = activateControl_text(document.getElementById("aluop_textCT"));
                        var regwrite_textCT = activateControl_text(document.getElementById("regwrite_textCT"));
                        tipsBox.textContent = "The Control has now told the program which 'paths' to use during execution, per the opcode.";
                        placeholderTextContent = tipsBox.textContent;
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        setTimeout(function () {
                            var sim_5 = document.getElementById("sim_5");
                            sim_5.style.display = "block";
                            var sim5Img = document.getElementById("sim5Img");
                            sim5Img.style.display = "block";
                        }, 2000);
                    }, 1000);
                });

                var sim_5 = document.getElementById("sim_5");
                sim_5.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_5.style.display = "none";
                    var sim5Img = document.getElementById("sim5Img");
                    sim5Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represent the reigster to read data from. In this case, the register is '" + typeABin + "', or " + typeA + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rs_block = document.getElementById("rs_block");
                        rs_block.style.animation = "moveRs_second 4s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                previousTipsBox.textContent = placeholderTextContent;
                                value_block_postRegister_1.style.display = "block";
                                value_block_postRegister_1.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                tipsBox.textContent = "The Register File then reads the data within " + typeA + " and sends this value forward to the ALU, which is " + inputA + ".";
                                placeholderTextContent = tipsBox.textContent;
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                value_block_postRegister_1.style.animation = "move_valueblock1_ini 4s ease-in-out forwards";
                                setTimeout(function () {
                                    var sim_6 = document.getElementById("sim_6");
                                    sim_6.style.display = "block";
                                    var sim6Img = document.getElementById("sim6Img");
                                    sim6Img.style.display = "block";
                                }, 4500);
                            }, 500);
                        }, 4000);
                    }, 500);
                });

                var sim_6 = document.getElementById("sim_6");
                sim_6.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_6.style.display = "none";
                    var sim6Img = document.getElementById("sim6Img");
                    sim6Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represent the next reigster to read data from. In this case, the register is '" + typeBBin + "', or " + typeB + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rt_block = document.getElementById("rt_block");
                        rt_block.style.animation = "moveRT_second 4s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                tipsBox.textContent = "The Register File then reads the data within " + typeB + " and sends this value forward to the ALU, which is " + inputB + ".";
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                previousTipsBox.textContent = placeholderTextContent;
                                value_block_postRegister_2.style.display = "block";
                                value_block_postRegister_2.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                value_block_postRegister_2.style.animation = "move_valueblock2_ini 4s ease-in-out forwards";
                                //logic for splitoff block + DM block info1
                                var value_block_postReg_2_SPLITOFF_toDM = document.getElementById("value_block_postReg_2_SPLITOFF_toDM");
                                value_block_postReg_2_SPLITOFF_toDM.textContent = value_block_postRegister_2.textContent;
                                value_block_postReg_2_SPLITOFF_toDM.style.display = "block";
                                value_block_postReg_2_SPLITOFF_toDM.style.animation = "move_splitoff_value2_block 4s ease-in-out forwards";
                                //end logic for splitoff block + DM block info1
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                setTimeout(function () {
                                    //start of dm box + text show
                                    var DMbox = document.getElementById("DMbox");
                                    var DMboxTEXT = document.getElementById("DMboxTEXT");
                                    DMboxTEXT.textContent = "Since neither 'MemWrite' nor the 'MemRead' lines are activated via the Control, the DM does not read/write anything. Also the MUX that the 'Read Data' line flows into is set to zero, as the Control didn't activate the 'MemToReg' path.";
                                    DMbox.style.animation = "highlight_DMbox 0.5s ease-in-out forwards";
                                    DMboxTEXT.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                    //end of dm box + text show
                                    var sim_7 = document.getElementById("sim_7");
                                    sim_7.style.display = "block";
                                    var sim7Img = document.getElementById("sim7Img");
                                    sim7Img.style.display = "block";
                                }, 4500);
                            }, 500);
                        }, 4000);
                    }, 500);
                });

                var sim_7 = document.getElementById("sim_7");
                sim_7.addEventListener("click", function () {
                    //dm box + text disappear start
                    var DMbox = document.getElementById("DMbox");
                    var DMboxTEXT = document.getElementById("DMboxTEXT");
                    DMbox.style.animation = "disappear_DMbox_highlight 0.5s ease-in-out forwards";
                    DMboxTEXT.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    //dm box + text disappear end
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_7.style.display = "none";
                    var sim7Img = document.getElementById("sim7Img");
                    sim7Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represent the destination reigster to write data to. In this case, the register is '" + typeDestBin + "', or " + locRegister + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rd_block = document.getElementById("rd_block");
                        rd_block.style.animation = "moveRD_second 6s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                previousTipsBox.textContent = placeholderTextContent;
                                tipsBox.textContent = "Since the Control had activated the 'RegDest' path, the MUX that the destination register goes through has been activated.";
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                setTimeout(function () {
                                    var sim_8 = document.getElementById("sim_8");
                                    sim_8.style.display = "block";
                                    var sim8Img = document.getElementById("sim8Img");
                                    sim8Img.style.display = "block";
                                }, 500);
                            }, 500);
                        }, 6000);
                    }, 500);
                });

                var sim_8 = document.getElementById("sim_8");
                sim_8.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_8.style.display = "none";
                    var sim8Img = document.getElementById("sim8Img");
                    sim8Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, bits 15-0 are sent forwards. However, 'shamt' is not used in this instruction, as it is typically used for shift instructions. So, only bits 5-0 are used, also known as the 'func'."
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var shamt_block = document.getElementById("shamt_block");
                        var func_block = document.getElementById("func_block");
                        setTimeout(function () {
                            shamt_block.style.animation = "moveShamt_second 8s ease-in-out forwards";
                            func_block.style.animation = "moveFunc_second 8s ease-in-out forwards";
                            var typeofoperation_ALUcontrol_block = document.getElementById("typeofoperation_ALUcontrol_block");
                            setTimeout(function () {
                                typeofoperation_ALUcontrol_block.style.display = "block";
                                typeofoperation_ALUcontrol_block.textContent = "+";
                                typeofoperation_ALUcontrol_block.style.animation = "moveTypeOfOperation_ini 4s ease-in-out forwards";
                                tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                setTimeout(function () {
                                    previousTipsBox.textContent = placeholderTextContent;
                                    tipsBox.textContent = "Now that the ALU knows what kind of operation to perform, it can execute the instruction on the provided values."
                                    tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                    placeholderTextContent = tipsBox.textContent;
                                    setTimeout(function () {
                                        value_block_postRegister_1.style.animation = "combine_num_1 1s ease-in-out forwards";
                                        value_block_postRegister_2.style.animation = "combine_num_2 1s ease-in-out forwards";
                                        setTimeout(function () {
                                            var value_block_totalval = document.getElementById("value_block_totalval");
                                            value_block_totalval.style.display = "block";
                                            value_block_totalval.textContent = inputA + inputB;
                                            value_block_totalval.style.animation = "moveTotal_num_forADDU 12s ease-in-out forwards";
                                            setTimeout(function () {
                                                var rd_block = document.getElementById("rd_block");
                                                rd_block.style.left = "48.7%";
                                                rd_block.style.top = "57%";
                                                rd_block.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                setTimeout(function () {
                                                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                                    setTimeout(function () {
                                                        previousTipsBox.textContent = placeholderTextContent;
                                                        tipsBox.textContent = "The total is now sent to the destination address, " + locRegister + ", which is represented as '" + typeDestBin + "'. The value is stored here and now the main operation is complete. However, the program isn't done and still needs to get ready for the next operation.";
                                                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                        value_block_totalval.style.left = "49.3%";
                                                        value_block_totalval.style.top = "59.3%";
                                                        rd_block.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                                                        value_block_totalval.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                                                        placeholderTextContent = tipsBox.textContent;
                                                        setTimeout(function () {
                                                            var sim_9 = document.getElementById("sim_9");
                                                            sim_9.style.display = "block";
                                                            var sim9Img = document.getElementById("sim9Img");
                                                            sim9Img.style.display = "block";
                                                        }, 1000);
                                                    }, 500);
                                                }, 500);
                                            }, 12000);
                                        }, 1000);
                                    }, 500);
                                }, 4000);
                            }, 8000);
                        }, 500);
                    }, 500);
                });

                var sim_9 = document.getElementById("sim_9");
                sim_9.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_9.style.display = "none";
                    var sim9Img = document.getElementById("sim9Img");
                    sim9Img.style.display = "none";
                    currentCIcon.style.display = "block";
                    currentCIcon.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        currentCIcon.style.animation = "move_currentC_icon_first 1.5s ease-in-out forwards";
                        setTimeout(function () {
                            var infoBubble2 = document.getElementById("infoBubble2");
                            infoBubble2.textContent = "0x10000000";
                            infoBubble2.style.display = "block";
                            infoBubble2.style.animation = "item_show_opacity 1s ease-in-out forwards";
                            var tipsBox = document.getElementById("tipsBox");
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                tipsBox.textContent = "The memory address from the start now needs to be incremented, by 4, so the program can execute the next step using the next address."
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                var incrementIcon = document.getElementById("incrementIcon");
                                incrementIcon.style.display = "block";
                                incrementIcon.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                setTimeout(function () {
                                    incrementIcon.style.animation = "move_incrementIcon 2.5s ease-in-out forwards";
                                    setTimeout(function () {
                                        infoBubble2.style.animation = "incremented_box_colorShift 2s ease-in-out";
                                        setTimeout(function () { infoBubble2.textContent = "0x10000004"; }, 500);
                                        setTimeout(function () {
                                            infoBubble2.style.animation = "shrink_infoBubble2 1.5s ease-in-out forwards";
                                            currentCIcon.style.left = "21%";
                                            currentCIcon.style.top = "19.5%";
                                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                            setTimeout(function () {
                                                tipsBox.textContent = "The ADDER then sends the new, incremented address back to the PC for the next operation to be executed. This operation is now complete.";
                                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                previousTipsBox.textContent = placeholderTextContent;
                                                currentCIcon.style.animation = "final_currentC_move 10s ease-in-out forwards";
                                            }, 1500);
                                        }, 2000);
                                    }, 2500);
                                }, 1000);
                            }, 1000);
                        }, 1500);
                    }, 500);
                });
            });
        });

        //--------------------------------------------------------


    }
    else if (chosenType == "sub") {

        //DIFFERENTIATE BETWEEN SUBU AND SUB

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
            if (isNaN(inputA)) {
                inputA = 6;
            }
            if (isNaN(inputB)) {
                inputB = 4;
            }
            var value_block_postRegister_1 = document.getElementById("value_block_postRegister_1");
            var value_block_postRegister_2 = document.getElementById("value_block_postRegister_2");
            value_block_postRegister_1.textContent = inputA;
            value_block_postRegister_2.textContent = inputB;

            console.log("type of A :", typeA);
            console.log("type of B :", typeB);
            console.log("Source Reg: ", locRegister);
            //Type A = RS, Type B = RT, LocReg = RD

            var startBtn = document.getElementById("startSIM");

            var infoBubble1 = document.getElementById("infoBubble1");

            var typeABin = checkRegister(typeA);
            var typeBBin = checkRegister(typeB);
            var typeDestBin = checkRegister(locRegister);

            var completeExpression = "000000" + typeABin + typeBBin + typeDestBin + "00000" + "100001";
            console.log("OPERATION:", completeExpression);


            var currentAIcon = document.getElementById("currentAIcon");
            var currentBIcon = document.getElementById("currentBIcon");
            //'currentCIcon' takes the place of currentBIcon, when it goes to the ADD node to index to the next address in memory
            var currentCIcon = document.getElementById("currentCIcon");

            infoBubble1.textContent = "0x10000000";

            startBtn.addEventListener("click", function () {

                var previousTipsBox = document.getElementById("previousTipsBox");
                var placeholderTextContent = "..base..";

                infoBubble1.style.display = "block";
                startBtn.style.display = "none";
                var startBtnImg = document.getElementById("startBtnImg");
                startBtnImg.style.display = "none";
                infoBubble1.style.animation = "move_first_bubble 1s ease-in-out forwards";
                setTimeout(function () {
                    currentAIcon.style.animation = "first_move 5s ease-in-out forwards";
                    setTimeout(function () {
                        currentBIcon.style.display = "block";
                        currentBIcon.style.animation = "currentB_first 5s ease-in-out forwards";
                        var nextBtn1 = document.getElementById("nextSim");
                        setTimeout(function () {
                            var IMinfo = document.getElementById("IMbox");
                            IMinfo.style.animation = "IManimShow 0.5s ease-in-out forwards";
                            var IMboxTEXT = document.getElementById("IMboxTEXT");
                            var spanEleNew = document.createElement("span");
                            spanEleNew.style.fontSize = "0.6vw";
                            spanEleNew.style.color = "orangered";
                            spanEleNew.textContent = completeExpression;
                            IMboxTEXT.appendChild(document.createTextNode("The IM then takes the memory address, and retrieves the instruction stored within. In this case, that instruction is: "))
                            IMboxTEXT.appendChild(spanEleNew);
                            IMboxTEXT.style.animation = "IManimShowText 0.5s ease-in-out forwards";
                            placeholderTextContent = IMboxTEXT.textContent;
                            setTimeout(function () {
                                var nextSimImg = document.getElementById("nextSimImg");
                                nextSimImg.style.display = "block";
                                nextBtn1.style.display = "block";
                            }, 1000);
                        }, 5000);
                    }, 2700);
                }, 1000);


                var nextBtn1 = document.getElementById("nextSim");
                nextBtn1.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    previousTipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                    var tipsBox = document.getElementById("tipsBox");
                    var IMboxTEXT = document.getElementById("IMboxTEXT");
                    IMboxTEXT.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                    nextBtn1.style.display = "none";
                    var nextSimImg = document.getElementById("nextSimImg");
                    nextSimImg.style.display = "none";
                    rtypeIni("000000", typeABin, typeBBin, typeDestBin, "00000", "100001");
                    showInstructionBlocks();
                    tipsBox.textContent = "The IM then sends the instruction forward in the datapath to be evaluated by the Control, which will tell the rest of the program what kind of instruction is to be evaluated.";
                    tipsBox.style.animation = "showTipsBox 0.5s ease-in-out forwards";
                    placeholderTextContent = tipsBox.textContent;
                    setTimeout(function () {
                        var IMinfo = document.getElementById("IMbox");
                        IMinfo.style.animation = "hide_opacity_fromhalf 0.5s ease-in-out forwards";
                        moveBlocks_initial_rtype();
                        //This Activated Text is for ADDU R type -----
                        var activatedText1 = activateText(document.getElementById("instr_32to26"));
                        var activatedText2 = activateText(document.getElementById("instr_25to21"));
                        var activatedText3 = activateText(document.getElementById("instr_20to16"));
                        var activatedText4 = activateText(document.getElementById("instr_15to11"));
                        var activatedText5 = activateText(document.getElementById("instr_15to0"));
                        var activatedText6 = activateText(document.getElementById("instr_5to0"));
                        //-----------------------------------
                        setTimeout(function () {
                            var sim_3 = document.getElementById("sim_3");
                            var sim3Img = document.getElementById("sim3Img");
                            sim_3.style.display = "block";
                            sim3Img.style.display = "block";
                        }, 3000);
                    }, 2000);
                });
                var sim_3 = document.getElementById("sim_3");
                sim_3.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_3.style.display = "none";
                    var sim3Img = document.getElementById("sim3Img");
                    sim3Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.style.animation = "item_show_opacity 1s ease-in-out forwards";
                        tipsBox.textContent = "The first six bits are sent to the Control unit, which then tells it which paths and operations to execute in the program. Remember, that all of these steps are happening concurrently in reality, and this is just a step-by-step visualization.";
                        placeholderTextContent = tipsBox.textContent;
                        var opBlock = document.getElementById("opcode_block");
                        opBlock.style.animation = "moveOpcode_second 3s ease-in-out forwards";
                        setTimeout(function () {
                            var ctrlTextBox = document.getElementById("CTRLboxTEXT");
                            ctrlTextBox.textContent = "The Control then tells the program what 'paths' need to be 'activated'."
                            ctrlTextBox.style.animation = "item_show_opacity 1s ease-in-out forwards";
                            setTimeout(function () {
                                var sim_4 = document.getElementById("sim_4");
                                sim_4.style.display = "block";
                                var sim4Img = document.getElementById("sim4Img");
                                sim4Img.style.display = "block";
                            }, 1500);
                        }, 3000);
                    }, 1000);
                });

                var sim_4 = document.getElementById("sim_4");
                sim_4.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_4.style.display = "none";
                    var sim4Img = document.getElementById("sim4Img");
                    sim4Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        var ctrlTextBox = document.getElementById("CTRLboxTEXT");
                        ctrlTextBox.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                        var regdest_textCT = activateControl_text(document.getElementById("regdest_textCT"));
                        var aluop_textCT = activateControl_text(document.getElementById("aluop_textCT"));
                        var regwrite_textCT = activateControl_text(document.getElementById("regwrite_textCT"));
                        tipsBox.textContent = "The Control has now told the program which 'paths' to use during execution, per the opcode.";
                        placeholderTextContent = tipsBox.textContent;
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        setTimeout(function () {
                            var sim_5 = document.getElementById("sim_5");
                            sim_5.style.display = "block";
                            var sim5Img = document.getElementById("sim5Img");
                            sim5Img.style.display = "block";
                        }, 2000);
                    }, 1000);
                });

                var sim_5 = document.getElementById("sim_5");
                sim_5.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_5.style.display = "none";
                    var sim5Img = document.getElementById("sim5Img");
                    sim5Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represent the reigster to read data from. In this case, the register is '" + typeABin + "', or " + typeA + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rs_block = document.getElementById("rs_block");
                        rs_block.style.animation = "moveRs_second 4s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                previousTipsBox.textContent = placeholderTextContent;
                                value_block_postRegister_1.style.display = "block";
                                value_block_postRegister_1.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                tipsBox.textContent = "The Register File then reads the data within " + typeA + " and sends this value forward to the ALU, which is " + inputA + ".";
                                placeholderTextContent = tipsBox.textContent;
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                value_block_postRegister_1.style.animation = "move_valueblock1_ini 4s ease-in-out forwards";
                                setTimeout(function () {
                                    var sim_6 = document.getElementById("sim_6");
                                    sim_6.style.display = "block";
                                    var sim6Img = document.getElementById("sim6Img");
                                    sim6Img.style.display = "block";
                                }, 4500);
                            }, 500);
                        }, 4000);
                    }, 500);
                });

                var sim_6 = document.getElementById("sim_6");
                sim_6.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_6.style.display = "none";
                    var sim6Img = document.getElementById("sim6Img");
                    sim6Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represent the next reigster to read data from. In this case, the register is '" + typeBBin + "', or " + typeB + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rt_block = document.getElementById("rt_block");
                        rt_block.style.animation = "moveRT_second 4s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                tipsBox.textContent = "The Register File then reads the data within " + typeB + " and sends this value forward to the ALU, which is " + inputB + ".";
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                previousTipsBox.textContent = placeholderTextContent;
                                value_block_postRegister_2.style.display = "block";
                                value_block_postRegister_2.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                value_block_postRegister_2.style.animation = "move_valueblock2_ini 4s ease-in-out forwards";
                                //logic for splitoff block + DM block info1
                                var value_block_postReg_2_SPLITOFF_toDM = document.getElementById("value_block_postReg_2_SPLITOFF_toDM");
                                value_block_postReg_2_SPLITOFF_toDM.textContent = value_block_postRegister_2.textContent;
                                value_block_postReg_2_SPLITOFF_toDM.style.display = "block";
                                value_block_postReg_2_SPLITOFF_toDM.style.animation = "move_splitoff_value2_block 4s ease-in-out forwards";
                                //end logic for splitoff block + DM block info1
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                setTimeout(function () {
                                    //start of dm box + text show
                                    var DMbox = document.getElementById("DMbox");
                                    var DMboxTEXT = document.getElementById("DMboxTEXT");
                                    DMboxTEXT.textContent = "Since neither 'MemWrite' nor the 'MemRead' lines are activated via the Control, the DM does not read/write anything. Also the MUX that the 'Read Data' line flows into is set to zero, as the Control didn't activate the 'MemToReg' path.";
                                    DMbox.style.animation = "highlight_DMbox 0.5s ease-in-out forwards";
                                    DMboxTEXT.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                    //end of dm box + text show
                                    var sim_7 = document.getElementById("sim_7");
                                    sim_7.style.display = "block";
                                    var sim7Img = document.getElementById("sim7Img");
                                    sim7Img.style.display = "block";
                                }, 4500);
                            }, 500);
                        }, 4000);
                    }, 500);
                });

                var sim_7 = document.getElementById("sim_7");
                sim_7.addEventListener("click", function () {
                    //dm box + text disappear start
                    var DMbox = document.getElementById("DMbox");
                    var DMboxTEXT = document.getElementById("DMboxTEXT");
                    DMbox.style.animation = "disappear_DMbox_highlight 0.5s ease-in-out forwards";
                    DMboxTEXT.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    //dm box + text disappear end
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_7.style.display = "none";
                    var sim7Img = document.getElementById("sim7Img");
                    sim7Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represent the destination reigster to write data to. In this case, the register is '" + typeDestBin + "', or " + locRegister + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rd_block = document.getElementById("rd_block");
                        rd_block.style.animation = "moveRD_second 6s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                previousTipsBox.textContent = placeholderTextContent;
                                tipsBox.textContent = "Since the Control had activated the 'RegDest' path, the MUX that the destination register goes through has been activated.";
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                setTimeout(function () {
                                    var sim_8 = document.getElementById("sim_8");
                                    sim_8.style.display = "block";
                                    var sim8Img = document.getElementById("sim8Img");
                                    sim8Img.style.display = "block";
                                }, 500);
                            }, 500);
                        }, 6000);
                    }, 500);
                });

                var sim_8 = document.getElementById("sim_8");
                sim_8.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_8.style.display = "none";
                    var sim8Img = document.getElementById("sim8Img");
                    sim8Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, bits 15-0 are sent forwards. However, 'shamt' is not used in this instruction, as it is typically used for shift instructions. So, only bits 5-0 are used, also known as the 'func'."
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var shamt_block = document.getElementById("shamt_block");
                        var func_block = document.getElementById("func_block");
                        setTimeout(function () {
                            shamt_block.style.animation = "moveShamt_second 8s ease-in-out forwards";
                            func_block.style.animation = "moveFunc_second 8s ease-in-out forwards";
                            var typeofoperation_ALUcontrol_block = document.getElementById("typeofoperation_ALUcontrol_block");
                            setTimeout(function () {
                                typeofoperation_ALUcontrol_block.style.display = "block";
                                typeofoperation_ALUcontrol_block.textContent = "-";
                                typeofoperation_ALUcontrol_block.style.animation = "moveTypeOfOperation_ini 4s ease-in-out forwards";
                                tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                setTimeout(function () {
                                    previousTipsBox.textContent = placeholderTextContent;
                                    tipsBox.textContent = "Now that the ALU knows what kind of operation to perform, it can execute the instruction on the provided values."
                                    tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                    placeholderTextContent = tipsBox.textContent;
                                    setTimeout(function () {
                                        value_block_postRegister_1.style.animation = "combine_num_1 1s ease-in-out forwards";
                                        value_block_postRegister_2.style.animation = "combine_num_2 1s ease-in-out forwards";
                                        setTimeout(function () {
                                            var value_block_totalval = document.getElementById("value_block_totalval");
                                            value_block_totalval.style.display = "block";
                                            value_block_totalval.textContent = inputA - inputB;
                                            value_block_totalval.style.animation = "moveTotal_num_forADDU 12s ease-in-out forwards";
                                            setTimeout(function () {
                                                var rd_block = document.getElementById("rd_block");
                                                rd_block.style.left = "48.7%";
                                                rd_block.style.top = "57%";
                                                rd_block.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                setTimeout(function () {
                                                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                                    setTimeout(function () {
                                                        previousTipsBox.textContent = placeholderTextContent;
                                                        tipsBox.textContent = "The total is now sent to the destination address, " + locRegister + ", which is represented as '" + typeDestBin + "'. The value is stored here and now the main operation is complete. However, the program isn't done and still needs to get ready for the next operation.";
                                                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                        value_block_totalval.style.left = "49.3%";
                                                        value_block_totalval.style.top = "59.3%";
                                                        rd_block.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                                                        value_block_totalval.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                                                        placeholderTextContent = tipsBox.textContent;
                                                        setTimeout(function () {
                                                            var sim_9 = document.getElementById("sim_9");
                                                            sim_9.style.display = "block";
                                                            var sim9Img = document.getElementById("sim9Img");
                                                            sim9Img.style.display = "block";
                                                        }, 1000);
                                                    }, 500);
                                                }, 500);
                                            }, 12000);
                                        }, 1000);
                                    }, 500);
                                }, 4000);
                            }, 8000);
                        }, 500);
                    }, 500);
                });

                var sim_9 = document.getElementById("sim_9");
                sim_9.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_9.style.display = "none";
                    var sim9Img = document.getElementById("sim9Img");
                    sim9Img.style.display = "none";
                    currentCIcon.style.display = "block";
                    currentCIcon.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        currentCIcon.style.animation = "move_currentC_icon_first 1.5s ease-in-out forwards";
                        setTimeout(function () {
                            var infoBubble2 = document.getElementById("infoBubble2");
                            infoBubble2.textContent = "0x10000000";
                            infoBubble2.style.display = "block";
                            infoBubble2.style.animation = "item_show_opacity 1s ease-in-out forwards";
                            var tipsBox = document.getElementById("tipsBox");
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                tipsBox.textContent = "The memory address from the start now needs to be incremented, by 4, so the program can execute the next step using the next address."
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                var incrementIcon = document.getElementById("incrementIcon");
                                incrementIcon.style.display = "block";
                                incrementIcon.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                setTimeout(function () {
                                    incrementIcon.style.animation = "move_incrementIcon 2.5s ease-in-out forwards";
                                    setTimeout(function () {
                                        infoBubble2.style.animation = "incremented_box_colorShift 2s ease-in-out";
                                        setTimeout(function () { infoBubble2.textContent = "0x10000004"; }, 500);
                                        setTimeout(function () {
                                            infoBubble2.style.animation = "shrink_infoBubble2 1.5s ease-in-out forwards";
                                            currentCIcon.style.left = "21%";
                                            currentCIcon.style.top = "19.5%";
                                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                            setTimeout(function () {
                                                tipsBox.textContent = "The ADDER then sends the new, incremented address back to the PC for the next operation to be executed. This operation is now complete.";
                                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                previousTipsBox.textContent = placeholderTextContent;
                                                currentCIcon.style.animation = "final_currentC_move 10s ease-in-out forwards";
                                            }, 1500);
                                        }, 2000);
                                    }, 2500);
                                }, 1000);
                            }, 1000);
                        }, 1500);
                    }, 500);
                });
            });
        });

    }
    else if (chosenType == "subu") {

        //DIFFERENTIATE BETWEEN SUBU AND SUB

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
            if (isNaN(inputA)) {
                inputA = 6;
            }
            if (isNaN(inputB)) {
                inputB = 4;
            }
            var value_block_postRegister_1 = document.getElementById("value_block_postRegister_1");
            var value_block_postRegister_2 = document.getElementById("value_block_postRegister_2");
            value_block_postRegister_1.textContent = inputA;
            value_block_postRegister_2.textContent = inputB;

            console.log("type of A :", typeA);
            console.log("type of B :", typeB);
            console.log("Source Reg: ", locRegister);
            //Type A = RS, Type B = RT, LocReg = RD

            var startBtn = document.getElementById("startSIM");

            var infoBubble1 = document.getElementById("infoBubble1");

            var typeABin = checkRegister(typeA);
            var typeBBin = checkRegister(typeB);
            var typeDestBin = checkRegister(locRegister);

            var completeExpression = "000000" + typeABin + typeBBin + typeDestBin + "00000" + "100001";
            console.log("OPERATION:", completeExpression);


            var currentAIcon = document.getElementById("currentAIcon");
            var currentBIcon = document.getElementById("currentBIcon");
            //'currentCIcon' takes the place of currentBIcon, when it goes to the ADD node to index to the next address in memory
            var currentCIcon = document.getElementById("currentCIcon");

            infoBubble1.textContent = "0x10000000";

            startBtn.addEventListener("click", function () {

                var previousTipsBox = document.getElementById("previousTipsBox");
                var placeholderTextContent = "..base..";

                infoBubble1.style.display = "block";
                startBtn.style.display = "none";
                var startBtnImg = document.getElementById("startBtnImg");
                startBtnImg.style.display = "none";
                infoBubble1.style.animation = "move_first_bubble 1s ease-in-out forwards";
                setTimeout(function () {
                    currentAIcon.style.animation = "first_move 5s ease-in-out forwards";
                    setTimeout(function () {
                        currentBIcon.style.display = "block";
                        currentBIcon.style.animation = "currentB_first 5s ease-in-out forwards";
                        var nextBtn1 = document.getElementById("nextSim");
                        setTimeout(function () {
                            var IMinfo = document.getElementById("IMbox");
                            IMinfo.style.animation = "IManimShow 0.5s ease-in-out forwards";
                            var IMboxTEXT = document.getElementById("IMboxTEXT");
                            var spanEleNew = document.createElement("span");
                            spanEleNew.style.fontSize = "0.6vw";
                            spanEleNew.style.color = "orangered";
                            spanEleNew.textContent = completeExpression;
                            IMboxTEXT.appendChild(document.createTextNode("The IM then takes the memory address, and retrieves the instruction stored within. In this case, that instruction is: "))
                            IMboxTEXT.appendChild(spanEleNew);
                            IMboxTEXT.style.animation = "IManimShowText 0.5s ease-in-out forwards";
                            placeholderTextContent = IMboxTEXT.textContent;
                            setTimeout(function () {
                                var nextSimImg = document.getElementById("nextSimImg");
                                nextSimImg.style.display = "block";
                                nextBtn1.style.display = "block";
                            }, 1000);
                        }, 5000);
                    }, 2700);
                }, 1000);


                var nextBtn1 = document.getElementById("nextSim");
                nextBtn1.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    previousTipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                    var tipsBox = document.getElementById("tipsBox");
                    var IMboxTEXT = document.getElementById("IMboxTEXT");
                    IMboxTEXT.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                    nextBtn1.style.display = "none";
                    var nextSimImg = document.getElementById("nextSimImg");
                    nextSimImg.style.display = "none";
                    rtypeIni("000000", typeABin, typeBBin, typeDestBin, "00000", "100001");
                    showInstructionBlocks();
                    tipsBox.textContent = "The IM then sends the instruction forward in the datapath to be evaluated by the Control, which will tell the rest of the program what kind of instruction is to be evaluated.";
                    tipsBox.style.animation = "showTipsBox 0.5s ease-in-out forwards";
                    placeholderTextContent = tipsBox.textContent;
                    setTimeout(function () {
                        var IMinfo = document.getElementById("IMbox");
                        IMinfo.style.animation = "hide_opacity_fromhalf 0.5s ease-in-out forwards";
                        moveBlocks_initial_rtype();
                        //This Activated Text is for ADDU R type -----
                        var activatedText1 = activateText(document.getElementById("instr_32to26"));
                        var activatedText2 = activateText(document.getElementById("instr_25to21"));
                        var activatedText3 = activateText(document.getElementById("instr_20to16"));
                        var activatedText4 = activateText(document.getElementById("instr_15to11"));
                        var activatedText5 = activateText(document.getElementById("instr_15to0"));
                        var activatedText6 = activateText(document.getElementById("instr_5to0"));
                        //-----------------------------------
                        setTimeout(function () {
                            var sim_3 = document.getElementById("sim_3");
                            var sim3Img = document.getElementById("sim3Img");
                            sim_3.style.display = "block";
                            sim3Img.style.display = "block";
                        }, 3000);
                    }, 2000);
                });
                var sim_3 = document.getElementById("sim_3");
                sim_3.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_3.style.display = "none";
                    var sim3Img = document.getElementById("sim3Img");
                    sim3Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.style.animation = "item_show_opacity 1s ease-in-out forwards";
                        tipsBox.textContent = "The first six bits are sent to the Control unit, which then tells it which paths and operations to execute in the program. Remember, that all of these steps are happening concurrently in reality, and this is just a step-by-step visualization.";
                        placeholderTextContent = tipsBox.textContent;
                        var opBlock = document.getElementById("opcode_block");
                        opBlock.style.animation = "moveOpcode_second 3s ease-in-out forwards";
                        setTimeout(function () {
                            var ctrlTextBox = document.getElementById("CTRLboxTEXT");
                            ctrlTextBox.textContent = "The Control then tells the program what 'paths' need to be 'activated'."
                            ctrlTextBox.style.animation = "item_show_opacity 1s ease-in-out forwards";
                            setTimeout(function () {
                                var sim_4 = document.getElementById("sim_4");
                                sim_4.style.display = "block";
                                var sim4Img = document.getElementById("sim4Img");
                                sim4Img.style.display = "block";
                            }, 1500);
                        }, 3000);
                    }, 1000);
                });

                var sim_4 = document.getElementById("sim_4");
                sim_4.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_4.style.display = "none";
                    var sim4Img = document.getElementById("sim4Img");
                    sim4Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        var ctrlTextBox = document.getElementById("CTRLboxTEXT");
                        ctrlTextBox.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                        var regdest_textCT = activateControl_text(document.getElementById("regdest_textCT"));
                        var aluop_textCT = activateControl_text(document.getElementById("aluop_textCT"));
                        var regwrite_textCT = activateControl_text(document.getElementById("regwrite_textCT"));
                        tipsBox.textContent = "The Control has now told the program which 'paths' to use during execution, per the opcode.";
                        placeholderTextContent = tipsBox.textContent;
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        setTimeout(function () {
                            var sim_5 = document.getElementById("sim_5");
                            sim_5.style.display = "block";
                            var sim5Img = document.getElementById("sim5Img");
                            sim5Img.style.display = "block";
                        }, 2000);
                    }, 1000);
                });

                var sim_5 = document.getElementById("sim_5");
                sim_5.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_5.style.display = "none";
                    var sim5Img = document.getElementById("sim5Img");
                    sim5Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represent the reigster to read data from. In this case, the register is '" + typeABin + "', or " + typeA + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rs_block = document.getElementById("rs_block");
                        rs_block.style.animation = "moveRs_second 4s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                previousTipsBox.textContent = placeholderTextContent;
                                value_block_postRegister_1.style.display = "block";
                                value_block_postRegister_1.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                tipsBox.textContent = "The Register File then reads the data within " + typeA + " and sends this value forward to the ALU, which is " + inputA + ".";
                                placeholderTextContent = tipsBox.textContent;
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                value_block_postRegister_1.style.animation = "move_valueblock1_ini 4s ease-in-out forwards";
                                setTimeout(function () {
                                    var sim_6 = document.getElementById("sim_6");
                                    sim_6.style.display = "block";
                                    var sim6Img = document.getElementById("sim6Img");
                                    sim6Img.style.display = "block";
                                }, 4500);
                            }, 500);
                        }, 4000);
                    }, 500);
                });

                var sim_6 = document.getElementById("sim_6");
                sim_6.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_6.style.display = "none";
                    var sim6Img = document.getElementById("sim6Img");
                    sim6Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represent the next reigster to read data from. In this case, the register is '" + typeBBin + "', or " + typeB + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rt_block = document.getElementById("rt_block");
                        rt_block.style.animation = "moveRT_second 4s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                tipsBox.textContent = "The Register File then reads the data within " + typeB + " and sends this value forward to the ALU, which is " + inputB + ".";
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                previousTipsBox.textContent = placeholderTextContent;
                                value_block_postRegister_2.style.display = "block";
                                value_block_postRegister_2.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                value_block_postRegister_2.style.animation = "move_valueblock2_ini 4s ease-in-out forwards";
                                //logic for splitoff block + DM block info1
                                var value_block_postReg_2_SPLITOFF_toDM = document.getElementById("value_block_postReg_2_SPLITOFF_toDM");
                                value_block_postReg_2_SPLITOFF_toDM.textContent = value_block_postRegister_2.textContent;
                                value_block_postReg_2_SPLITOFF_toDM.style.display = "block";
                                value_block_postReg_2_SPLITOFF_toDM.style.animation = "move_splitoff_value2_block 4s ease-in-out forwards";
                                //end logic for splitoff block + DM block info1
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                setTimeout(function () {
                                    //start of dm box + text show
                                    var DMbox = document.getElementById("DMbox");
                                    var DMboxTEXT = document.getElementById("DMboxTEXT");
                                    DMboxTEXT.textContent = "Since neither 'MemWrite' nor the 'MemRead' lines are activated via the Control, the DM does not read/write anything. Also the MUX that the 'Read Data' line flows into is set to zero, as the Control didn't activate the 'MemToReg' path.";
                                    DMbox.style.animation = "highlight_DMbox 0.5s ease-in-out forwards";
                                    DMboxTEXT.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                    //end of dm box + text show
                                    var sim_7 = document.getElementById("sim_7");
                                    sim_7.style.display = "block";
                                    var sim7Img = document.getElementById("sim7Img");
                                    sim7Img.style.display = "block";
                                }, 4500);
                            }, 500);
                        }, 4000);
                    }, 500);
                });

                var sim_7 = document.getElementById("sim_7");
                sim_7.addEventListener("click", function () {
                    //dm box + text disappear start
                    var DMbox = document.getElementById("DMbox");
                    var DMboxTEXT = document.getElementById("DMboxTEXT");
                    DMbox.style.animation = "disappear_DMbox_highlight 0.5s ease-in-out forwards";
                    DMboxTEXT.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    //dm box + text disappear end
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_7.style.display = "none";
                    var sim7Img = document.getElementById("sim7Img");
                    sim7Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represent the destination reigster to write data to. In this case, the register is '" + typeDestBin + "', or " + locRegister + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rd_block = document.getElementById("rd_block");
                        rd_block.style.animation = "moveRD_second 6s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                previousTipsBox.textContent = placeholderTextContent;
                                tipsBox.textContent = "Since the Control had activated the 'RegDest' path, the MUX that the destination register goes through has been activated.";
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                setTimeout(function () {
                                    var sim_8 = document.getElementById("sim_8");
                                    sim_8.style.display = "block";
                                    var sim8Img = document.getElementById("sim8Img");
                                    sim8Img.style.display = "block";
                                }, 500);
                            }, 500);
                        }, 6000);
                    }, 500);
                });

                var sim_8 = document.getElementById("sim_8");
                sim_8.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_8.style.display = "none";
                    var sim8Img = document.getElementById("sim8Img");
                    sim8Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, bits 15-0 are sent forwards. However, 'shamt' is not used in this instruction, as it is typically used for shift instructions. So, only bits 5-0 are used, also known as the 'func'."
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var shamt_block = document.getElementById("shamt_block");
                        var func_block = document.getElementById("func_block");
                        setTimeout(function () {
                            shamt_block.style.animation = "moveShamt_second 8s ease-in-out forwards";
                            func_block.style.animation = "moveFunc_second 8s ease-in-out forwards";
                            var typeofoperation_ALUcontrol_block = document.getElementById("typeofoperation_ALUcontrol_block");
                            setTimeout(function () {
                                typeofoperation_ALUcontrol_block.style.display = "block";
                                typeofoperation_ALUcontrol_block.textContent = "-";
                                typeofoperation_ALUcontrol_block.style.animation = "moveTypeOfOperation_ini 4s ease-in-out forwards";
                                tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                setTimeout(function () {
                                    previousTipsBox.textContent = placeholderTextContent;
                                    tipsBox.textContent = "Now that the ALU knows what kind of operation to perform, it can execute the instruction on the provided values."
                                    tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                    placeholderTextContent = tipsBox.textContent;
                                    setTimeout(function () {
                                        value_block_postRegister_1.style.animation = "combine_num_1 1s ease-in-out forwards";
                                        value_block_postRegister_2.style.animation = "combine_num_2 1s ease-in-out forwards";
                                        setTimeout(function () {
                                            var value_block_totalval = document.getElementById("value_block_totalval");
                                            value_block_totalval.style.display = "block";
                                            value_block_totalval.textContent = inputA - inputB;
                                            value_block_totalval.style.animation = "moveTotal_num_forADDU 12s ease-in-out forwards";
                                            setTimeout(function () {
                                                var rd_block = document.getElementById("rd_block");
                                                rd_block.style.left = "48.7%";
                                                rd_block.style.top = "57%";
                                                rd_block.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                setTimeout(function () {
                                                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                                    setTimeout(function () {
                                                        previousTipsBox.textContent = placeholderTextContent;
                                                        tipsBox.textContent = "The total is now sent to the destination address, " + locRegister + ", which is represented as '" + typeDestBin + "'. The value is stored here and now the main operation is complete. However, the program isn't done and still needs to get ready for the next operation.";
                                                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                        value_block_totalval.style.left = "49.3%";
                                                        value_block_totalval.style.top = "59.3%";
                                                        rd_block.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                                                        value_block_totalval.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                                                        placeholderTextContent = tipsBox.textContent;
                                                        setTimeout(function () {
                                                            var sim_9 = document.getElementById("sim_9");
                                                            sim_9.style.display = "block";
                                                            var sim9Img = document.getElementById("sim9Img");
                                                            sim9Img.style.display = "block";
                                                        }, 1000);
                                                    }, 500);
                                                }, 500);
                                            }, 12000);
                                        }, 1000);
                                    }, 500);
                                }, 4000);
                            }, 8000);
                        }, 500);
                    }, 500);
                });

                var sim_9 = document.getElementById("sim_9");
                sim_9.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_9.style.display = "none";
                    var sim9Img = document.getElementById("sim9Img");
                    sim9Img.style.display = "none";
                    currentCIcon.style.display = "block";
                    currentCIcon.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        currentCIcon.style.animation = "move_currentC_icon_first 1.5s ease-in-out forwards";
                        setTimeout(function () {
                            var infoBubble2 = document.getElementById("infoBubble2");
                            infoBubble2.textContent = "0x10000000";
                            infoBubble2.style.display = "block";
                            infoBubble2.style.animation = "item_show_opacity 1s ease-in-out forwards";
                            var tipsBox = document.getElementById("tipsBox");
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                tipsBox.textContent = "The memory address from the start now needs to be incremented, by 4, so the program can execute the next step using the next address."
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                var incrementIcon = document.getElementById("incrementIcon");
                                incrementIcon.style.display = "block";
                                incrementIcon.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                setTimeout(function () {
                                    incrementIcon.style.animation = "move_incrementIcon 2.5s ease-in-out forwards";
                                    setTimeout(function () {
                                        infoBubble2.style.animation = "incremented_box_colorShift 2s ease-in-out";
                                        setTimeout(function () { infoBubble2.textContent = "0x10000004"; }, 500);
                                        setTimeout(function () {
                                            infoBubble2.style.animation = "shrink_infoBubble2 1.5s ease-in-out forwards";
                                            currentCIcon.style.left = "21%";
                                            currentCIcon.style.top = "19.5%";
                                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                            setTimeout(function () {
                                                tipsBox.textContent = "The ADDER then sends the new, incremented address back to the PC for the next operation to be executed. This operation is now complete.";
                                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                previousTipsBox.textContent = placeholderTextContent;
                                                currentCIcon.style.animation = "final_currentC_move 10s ease-in-out forwards";
                                            }, 1500);
                                        }, 2000);
                                    }, 2500);
                                }, 1000);
                            }, 1000);
                        }, 1500);
                    }, 500);
                });
            });
        });
    }

    else if (chosenType == "div") {

    }
    else if (chosenType == "divu") {

    }
    else if (chosenType == "mult") {

    }
    else if (chosenType == "multu") {

    }
    else if (chosenType == "sllv") {

        /*SLLV and SLL need serious adjustments to the way they proess the shift. Currently, it works when it's within the bounds
        of the 32 bit number, but once outside and part of the number is outside of this bound, there are issues w/ the correctness of it*/
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

        //This instruction is: SLLV

        showAdduConfirmBtn.addEventListener("click", function () {
            inputA = parseInt(document.getElementById("adduInputA").value);
            inputB = parseInt(document.getElementById("adduInputB").value);
            typeA = document.getElementById("adduInputAregisters").value;
            typeB = document.getElementById("adduInputBregisters").value;
            locRegister = document.getElementById("adduSourceRegisters").value;
            console.log("A :", inputA);
            console.log("B :", inputB);
            if (isNaN(inputA)) {
                //value to be shifted
                inputA = 10;
            }
            if (isNaN(inputB)) {
                //how much to shift by
                inputB = 3;
            }

            inputA = inputA;
            inputB = inputB;

            var binaryResult;

            //STRING ISSUE HERE for SLLV
            //var totalInputResult = (inputA << input).toString(2).padStart(31, '0');
            if (inputB >= 32){
                binaryResult = "0".padStart(32, '0');
                console.log("Over 32 bin num:" + binaryResult);
            }
            else{
                var result_beforeAdjust = inputA << inputB;
                binaryResult = (result_beforeAdjust >>> 0).toString(2).padStart(32, '0');
                console.log("Binary Num:" + binaryResult);
            }

            //the zero present is bc it is 32 bits, but only 31 can be shifted

            var value_block_postRegister_1 = document.getElementById("value_block_postRegister_1");
            var value_block_postRegister_2 = document.getElementById("value_block_postRegister_2");
            value_block_postRegister_1.textContent = inputA;
            value_block_postRegister_2.textContent = inputB;

            console.log("type of A :", typeA);
            console.log("type of B :", typeB);
            console.log("Source Reg: ", locRegister);
            //Type A = RS, Type B = RT, LocReg = RD

            var startBtn = document.getElementById("startSIM");

            var infoBubble1 = document.getElementById("infoBubble1");

            var typeABin = checkRegister(typeA);
            var typeBBin = checkRegister(typeB);
            var typeDestBin = checkRegister(locRegister);

            var completeExpression = "000000" + typeABin + typeBBin + typeDestBin + "00000" + "000100";
            console.log("OPERATION:", completeExpression);


            var currentAIcon = document.getElementById("currentAIcon");
            var currentBIcon = document.getElementById("currentBIcon");
            //'currentCIcon' takes the place of currentBIcon, when it goes to the ADD node to index to the next address in memory
            var currentCIcon = document.getElementById("currentCIcon");

            infoBubble1.textContent = "0x10000000";

            startBtn.addEventListener("click", function () {

                var previousTipsBox = document.getElementById("previousTipsBox");
                var placeholderTextContent = "..base..";

                infoBubble1.style.display = "block";
                startBtn.style.display = "none";
                var startBtnImg = document.getElementById("startBtnImg");
                startBtnImg.style.display = "none";
                infoBubble1.style.animation = "move_first_bubble 1s ease-in-out forwards";
                setTimeout(function () {
                    currentAIcon.style.animation = "first_move 5s ease-in-out forwards";
                    setTimeout(function () {
                        currentBIcon.style.display = "block";
                        currentBIcon.style.animation = "currentB_first 5s ease-in-out forwards";
                        var nextBtn1 = document.getElementById("nextSim");
                        setTimeout(function () {
                            var IMinfo = document.getElementById("IMbox");
                            IMinfo.style.animation = "IManimShow 0.5s ease-in-out forwards";
                            var IMboxTEXT = document.getElementById("IMboxTEXT");
                            var spanEleNew = document.createElement("span");
                            spanEleNew.style.fontSize = "0.6vw";
                            spanEleNew.style.color = "orangered";
                            spanEleNew.textContent = completeExpression;
                            IMboxTEXT.appendChild(document.createTextNode("The IM then takes the memory address, and retrieves the instruction stored within. In this case, that instruction is: "))
                            IMboxTEXT.appendChild(spanEleNew);
                            IMboxTEXT.style.animation = "IManimShowText 0.5s ease-in-out forwards";
                            placeholderTextContent = IMboxTEXT.textContent;
                            setTimeout(function () {
                                var nextSimImg = document.getElementById("nextSimImg");
                                nextSimImg.style.display = "block";
                                nextBtn1.style.display = "block";
                            }, 1000);
                        }, 5000);
                    }, 2700);
                }, 1000);


                var nextBtn1 = document.getElementById("nextSim");
                nextBtn1.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    previousTipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                    var tipsBox = document.getElementById("tipsBox");
                    var IMboxTEXT = document.getElementById("IMboxTEXT");
                    IMboxTEXT.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                    nextBtn1.style.display = "none";
                    var nextSimImg = document.getElementById("nextSimImg");
                    nextSimImg.style.display = "none";
                    rtypeIni("000000", typeABin, typeBBin, typeDestBin, "00000", "000100");
                    showInstructionBlocks();
                    tipsBox.textContent = "The IM then sends the instruction forward in the datapath to be evaluated by the Control, which will tell the rest of the program what kind of instruction is to be evaluated.";
                    tipsBox.style.animation = "showTipsBox 0.5s ease-in-out forwards";
                    placeholderTextContent = tipsBox.textContent;
                    setTimeout(function () {
                        var IMinfo = document.getElementById("IMbox");
                        IMinfo.style.animation = "hide_opacity_fromhalf 0.5s ease-in-out forwards";
                        moveBlocks_initial_rtype();
                        //This Activated Text is for SLLV R type -----
                        var activatedText1 = activateText(document.getElementById("instr_32to26"));
                        var activatedText2 = activateText(document.getElementById("instr_25to21"));
                        var activatedText3 = activateText(document.getElementById("instr_20to16"));
                        var activatedText4 = activateText(document.getElementById("instr_15to11"));
                        var activatedText5 = activateText(document.getElementById("instr_15to0"));
                        var activatedText6 = activateText(document.getElementById("instr_5to0"));
                        //-----------------------------------
                        setTimeout(function () {
                            var sim_3 = document.getElementById("sim_3");
                            var sim3Img = document.getElementById("sim3Img");
                            sim_3.style.display = "block";
                            sim3Img.style.display = "block";
                        }, 3000);
                    }, 2000);
                });
                var sim_3 = document.getElementById("sim_3");
                sim_3.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_3.style.display = "none";
                    var sim3Img = document.getElementById("sim3Img");
                    sim3Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.style.animation = "item_show_opacity 1s ease-in-out forwards";
                        tipsBox.textContent = "The first six bits are sent to the Control unit, which then tells it which paths and operations to execute in the program. Remember, that all of these steps are happening concurrently in reality, and this is just a step-by-step visualization.";
                        placeholderTextContent = tipsBox.textContent;
                        var opBlock = document.getElementById("opcode_block");
                        opBlock.style.animation = "moveOpcode_second 3s ease-in-out forwards";
                        setTimeout(function () {
                            var ctrlTextBox = document.getElementById("CTRLboxTEXT");
                            ctrlTextBox.textContent = "The Control then tells the program what 'paths' need to be 'activated'."
                            ctrlTextBox.style.animation = "item_show_opacity 1s ease-in-out forwards";
                            setTimeout(function () {
                                var sim_4 = document.getElementById("sim_4");
                                sim_4.style.display = "block";
                                var sim4Img = document.getElementById("sim4Img");
                                sim4Img.style.display = "block";
                            }, 1500);
                        }, 3000);
                    }, 1000);
                });

                var sim_4 = document.getElementById("sim_4");
                sim_4.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_4.style.display = "none";
                    var sim4Img = document.getElementById("sim4Img");
                    sim4Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        var ctrlTextBox = document.getElementById("CTRLboxTEXT");
                        ctrlTextBox.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                        var regdest_textCT = activateControl_text(document.getElementById("regdest_textCT"));
                        var aluop_textCT = activateControl_text(document.getElementById("aluop_textCT"));
                        var regwrite_textCT = activateControl_text(document.getElementById("regwrite_textCT"));
                        tipsBox.textContent = "The Control has now told the program which 'paths' to use during execution, per the opcode.";
                        placeholderTextContent = tipsBox.textContent;
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        setTimeout(function () {
                            var sim_5 = document.getElementById("sim_5");
                            sim_5.style.display = "block";
                            var sim5Img = document.getElementById("sim5Img");
                            sim5Img.style.display = "block";
                        }, 2000);
                    }, 1000);
                });

                var sim_5 = document.getElementById("sim_5");
                sim_5.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_5.style.display = "none";
                    var sim5Img = document.getElementById("sim5Img");
                    sim5Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represent the reigster which contains the value to be shifted. In this case, the register is '" + typeABin + "', or " + typeA + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rs_block = document.getElementById("rs_block");
                        rs_block.style.animation = "moveRs_second 4s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                previousTipsBox.textContent = placeholderTextContent;
                                value_block_postRegister_1.style.display = "block";
                                value_block_postRegister_1.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                tipsBox.textContent = "The Register File then reads the data within " + typeA + " and sends this value forward to the ALU, which is " + inputA + ".";
                                placeholderTextContent = tipsBox.textContent;
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                value_block_postRegister_1.style.animation = "move_valueblock1_ini 4s ease-in-out forwards";
                                setTimeout(function () {
                                    var sim_6 = document.getElementById("sim_6");
                                    sim_6.style.display = "block";
                                    var sim6Img = document.getElementById("sim6Img");
                                    sim6Img.style.display = "block";
                                }, 4500);
                            }, 500);
                        }, 4000);
                    }, 500);
                });

                var sim_6 = document.getElementById("sim_6");
                sim_6.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_6.style.display = "none";
                    var sim6Img = document.getElementById("sim6Img");
                    sim6Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represents the reigster which contains the value to shift the first value by. In this case, the register is '" + typeBBin + "', or " + typeB + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rt_block = document.getElementById("rt_block");
                        rt_block.style.animation = "moveRT_second 4s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                tipsBox.textContent = "The Register File then reads the data within " + typeB + " and sends this value forward to the ALU, which is " + inputB + ".";
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                previousTipsBox.textContent = placeholderTextContent;
                                value_block_postRegister_2.style.display = "block";
                                value_block_postRegister_2.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                value_block_postRegister_2.style.animation = "move_valueblock2_ini 4s ease-in-out forwards";
                                //logic for splitoff block + DM block info1
                                var value_block_postReg_2_SPLITOFF_toDM = document.getElementById("value_block_postReg_2_SPLITOFF_toDM");
                                value_block_postReg_2_SPLITOFF_toDM.textContent = value_block_postRegister_2.textContent;
                                value_block_postReg_2_SPLITOFF_toDM.style.display = "block";
                                value_block_postReg_2_SPLITOFF_toDM.style.animation = "move_splitoff_value2_block 4s ease-in-out forwards";
                                //end logic for splitoff block + DM block info1
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                setTimeout(function () {
                                    //start of dm box + text show
                                    var DMbox = document.getElementById("DMbox");
                                    var DMboxTEXT = document.getElementById("DMboxTEXT");
                                    DMboxTEXT.textContent = "Since neither 'MemWrite' nor the 'MemRead' lines are activated via the Control, the DM does not read/write anything. Also the MUX that the 'Read Data' line flows into is set to zero, as the Control didn't activate the 'MemToReg' path.";
                                    DMbox.style.animation = "highlight_DMbox 0.5s ease-in-out forwards";
                                    DMboxTEXT.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                    //end of dm box + text show
                                    var sim_7 = document.getElementById("sim_7");
                                    sim_7.style.display = "block";
                                    var sim7Img = document.getElementById("sim7Img");
                                    sim7Img.style.display = "block";
                                }, 4500);
                            }, 500);
                        }, 4000);
                    }, 500);
                });

                var sim_7 = document.getElementById("sim_7");
                sim_7.addEventListener("click", function () {
                    //dm box + text disappear start
                    var DMbox = document.getElementById("DMbox");
                    var DMboxTEXT = document.getElementById("DMboxTEXT");
                    DMbox.style.animation = "disappear_DMbox_highlight 0.5s ease-in-out forwards";
                    DMboxTEXT.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    //dm box + text disappear end
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_7.style.display = "none";
                    var sim7Img = document.getElementById("sim7Img");
                    sim7Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, the next 5 bits are read, which represent the destination reigster to write data to. In this case, the register is '" + typeDestBin + "', or " + locRegister + ".";
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var rd_block = document.getElementById("rd_block");
                        rd_block.style.animation = "moveRD_second 6s ease-in-out forwards";
                        setTimeout(function () {
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                previousTipsBox.textContent = placeholderTextContent;
                                tipsBox.textContent = "Since the Control had activated the 'RegDest' path, the MUX that the destination register goes through has been activated.";
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                setTimeout(function () {
                                    var sim_8 = document.getElementById("sim_8");
                                    sim_8.style.display = "block";
                                    var sim8Img = document.getElementById("sim8Img");
                                    sim8Img.style.display = "block";
                                }, 500);
                            }, 500);
                        }, 6000);
                    }, 500);
                });

                var sim_8 = document.getElementById("sim_8");
                sim_8.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_8.style.display = "none";
                    var sim8Img = document.getElementById("sim8Img");
                    sim8Img.style.display = "none";
                    var tipsBox = document.getElementById("tipsBox");
                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        tipsBox.textContent = "Then, bits 15-0 are sent forwards. However, 'shamt' is not used in this instruction, as the shift amount is stored in '$rd', and the 'func' bits tell the program what operation it is. So, only bits 5-0 are used, also known as the 'func'."
                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                        placeholderTextContent = tipsBox.textContent;
                        var shamt_block = document.getElementById("shamt_block");
                        var func_block = document.getElementById("func_block");
                        setTimeout(function () {
                            shamt_block.style.animation = "moveShamt_second 8s ease-in-out forwards";
                            func_block.style.animation = "moveFunc_second 8s ease-in-out forwards";
                            var typeofoperation_ALUcontrol_block = document.getElementById("typeofoperation_ALUcontrol_block");
                            setTimeout(function () {
                                typeofoperation_ALUcontrol_block.style.display = "block";
                                typeofoperation_ALUcontrol_block.textContent = "<<";
                                typeofoperation_ALUcontrol_block.style.animation = "moveTypeOfOperation_ini 4s ease-in-out forwards";
                                tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                setTimeout(function () {
                                    previousTipsBox.textContent = placeholderTextContent;
                                    tipsBox.textContent = "Now that the ALU knows what kind of operation to perform, it can execute the instruction on the provided values. Since the result is in binary, it is too large to fit into the box. The number is represented by '~Bin'. The binary number after shifting is: '" + binaryResult + "'.";
                                    tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                    placeholderTextContent = tipsBox.textContent;
                                    setTimeout(function () {
                                        value_block_postRegister_1.style.animation = "combine_num_1 1s ease-in-out forwards";
                                        value_block_postRegister_2.style.animation = "combine_num_2 1s ease-in-out forwards";
                                        setTimeout(function () {
                                            var value_block_totalval = document.getElementById("value_block_totalval");
                                            value_block_totalval.style.display = "block";
                                            value_block_totalval.textContent = "~Bin";
                                            value_block_totalval.fontSize = "0.8vw";
                                            value_block_totalval.style.animation = "moveTotal_num_forADDU 12s ease-in-out forwards";
                                            setTimeout(function () {
                                                var rd_block = document.getElementById("rd_block");
                                                rd_block.style.left = "48.7%";
                                                rd_block.style.top = "57%";
                                                rd_block.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                setTimeout(function () {
                                                    tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                                    setTimeout(function () {
                                                        previousTipsBox.textContent = placeholderTextContent;
                                                        tipsBox.textContent = "The total is now sent to the destination address, " + locRegister + ", which is represented as '" + typeDestBin + "'. The value is stored here and now the main operation is complete. However, the program isn't done and still needs to get ready for the next operation.";
                                                        tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                        value_block_totalval.style.left = "49.3%";
                                                        value_block_totalval.style.top = "59.3%";
                                                        rd_block.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                                                        value_block_totalval.style.animation = "item_disappear_opacity 1s ease-in-out forwards";
                                                        placeholderTextContent = tipsBox.textContent;
                                                        setTimeout(function () {
                                                            var sim_9 = document.getElementById("sim_9");
                                                            sim_9.style.display = "block";
                                                            var sim9Img = document.getElementById("sim9Img");
                                                            sim9Img.style.display = "block";
                                                        }, 1000);
                                                    }, 500);
                                                }, 500);
                                            }, 12000);
                                        }, 1000);
                                    }, 500);
                                }, 4000);
                            }, 8000);
                        }, 500);
                    }, 500);
                });

                var sim_9 = document.getElementById("sim_9");
                sim_9.addEventListener("click", function () {
                    previousTipsBox.textContent = placeholderTextContent;
                    sim_9.style.display = "none";
                    var sim9Img = document.getElementById("sim9Img");
                    sim9Img.style.display = "none";
                    currentCIcon.style.display = "block";
                    currentCIcon.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                    setTimeout(function () {
                        currentCIcon.style.animation = "move_currentC_icon_first 1.5s ease-in-out forwards";
                        setTimeout(function () {
                            var infoBubble2 = document.getElementById("infoBubble2");
                            infoBubble2.textContent = "0x10000000";
                            infoBubble2.style.display = "block";
                            infoBubble2.style.animation = "item_show_opacity 1s ease-in-out forwards";
                            var tipsBox = document.getElementById("tipsBox");
                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                            setTimeout(function () {
                                tipsBox.textContent = "The memory address from the start now needs to be incremented, by 4, so the program can execute the next step using the next address."
                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                placeholderTextContent = tipsBox.textContent;
                                var incrementIcon = document.getElementById("incrementIcon");
                                incrementIcon.style.display = "block";
                                incrementIcon.style.animation = "item_show_opacity 1s ease-in-out forwards";
                                setTimeout(function () {
                                    incrementIcon.style.animation = "move_incrementIcon 2.5s ease-in-out forwards";
                                    setTimeout(function () {
                                        infoBubble2.style.animation = "incremented_box_colorShift 2s ease-in-out";
                                        setTimeout(function () { infoBubble2.textContent = "0x10000004"; }, 500);
                                        setTimeout(function () {
                                            infoBubble2.style.animation = "shrink_infoBubble2 1.5s ease-in-out forwards";
                                            currentCIcon.style.left = "21%";
                                            currentCIcon.style.top = "19.5%";
                                            tipsBox.style.animation = "item_disappear_opacity 0.5s ease-in-out forwards";
                                            setTimeout(function () {
                                                tipsBox.textContent = "The ADDER then sends the new, incremented address back to the PC for the next operation to be executed. This operation is now complete.";
                                                tipsBox.style.animation = "item_show_opacity 0.5s ease-in-out forwards";
                                                previousTipsBox.textContent = placeholderTextContent;
                                                currentCIcon.style.animation = "final_currentC_move 10s ease-in-out forwards";
                                            }, 1500);
                                        }, 2000);
                                    }, 2500);
                                }, 1000);
                            }, 1000);
                        }, 1500);
                    }, 500);
                });
            });
        });
    }
    else if (chosenType == "sll") {

    }
    else if (chosenType == "sllv") {

    }
    else if (chosenType == "srl") {

    }
    else if (chosenType == "srlv") {

    }
    else if (chosenType == "jr") {

    }

}