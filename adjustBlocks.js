function rtypeIni(opcode, rs, rt, rd, shamt, func){
    var opBlock = document.getElementById("opcode_block");
    var rsBlock = document.getElementById("rs_block");
    var rtBlock = document.getElementById("rt_block");
    var rdBlock = document.getElementById("rd_block");
    var shamtBlock = document.getElementById("shamt_block");
    var funcBlock = document.getElementById("func_block");
    opBlock.textContent = opcode;
    rsBlock.textContent = rs;
    rtBlock.textContent = rt;
    rdBlock.textContent = rd;
    shamtBlock.textContent = shamt;
    funcBlock.textContent = func;
}