import assember from "mipsAssemblerFiles/mips-assembler-2.0.1/dist/js/src/assembler.js";

//this is for grabbing from mipsassem.d.ts and passing to customProgram.html
 var editor_text = document.getElementById("editor");
 
 var editor_assembled_text = assemble(editor_text);
 console.log(editor_assembled_text);