function checkRegister(register){
    if (register == "$t0"){
        return "01000";
    }
    else if (register == "$t1"){
        return "01001";
    }
    else if (register == "$t2"){
        return "01010";
    }
    else if (register == "$t3"){
        return "01011";
    }
    else if (register == "$t4"){
        return "01100";
    }
    else if (register == "$t5"){
        return "01101";
    }
    else if (register == "$t6"){
        return "01110";
    }
    else if (register == "$t7"){
        return "01111";
    }
    else if (register == "$s0"){
        return "10000";
    }
    else if (register == "$s1"){
        return "10001";
    }
    else if (register == "$s2"){
        return "10010";
    }
    else if (register == "$s3"){
        return "10011";
    }
    else if (register == "$s4"){
        return "10100";
    }
    else if (register == "$s5"){
        return "10101";
    }
    else if (register == "$s6"){
        return "10110";
    }
    else if (register == "$s7"){
        return "10111";
    }
    else{
        console.log("Unknown Type. Error");
    }
}