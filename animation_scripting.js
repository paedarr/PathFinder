function showInstructionBlocks(){
    var opBlock = document.getElementById("opcode_block");
    var rsBlock = document.getElementById("rs_block");
    var rtBlock = document.getElementById("rt_block");
    var rdBlock = document.getElementById("rd_block");
    var shamtBlock = document.getElementById("shamt_block");
    var funcBlock = document.getElementById("func_block");
    opBlock.style.display = "block";
    rsBlock.style.display = "block";
    rtBlock.style.display = "block";
    rdBlock.style.display = "block";
    shamtBlock.style.display = "block";
    funcBlock.style.display = "block";
    opBlock.style.animation = "item_show_opacity 1s ease-in-out forwards";
    rsBlock.style.animation = "item_show_opacity 1s ease-in-out forwards";
    rtBlock.style.animation = "item_show_opacity 1s ease-in-out forwards";
    rdBlock.style.animation = "item_show_opacity 1s ease-in-out forwards";
    shamtBlock.style.animation = "item_show_opacity 1s ease-in-out forwards";
    funcBlock.style.animation = "item_show_opacity 1s ease-in-out forwards";
}

function moveBlocks_initial_rtype(){
    var opBlock = document.getElementById("opcode_block");
    var rsBlock = document.getElementById("rs_block");
    var rtBlock = document.getElementById("rt_block");
    var rdBlock = document.getElementById("rd_block");
    var shamtBlock = document.getElementById("shamt_block");
    var funcBlock = document.getElementById("func_block");
    opBlock.style.animation = "moveOpcode_ini 2s ease-in-out forwards";
    rsBlock.style.animation = "moveRS_ini 2s ease-in-out forwards";
    rtBlock.style.animation = "moveRT_ini 2s ease-in-out forwards";
    rdBlock.style.animation = "moveRD_ini 2s ease-in-out forwards";
    shamtBlock.style.animation = "moveShamt_ini 2s ease-in-out forwards";
    funcBlock.style.animation = "moveFunc_ini 2s ease-in-out forwards";
}