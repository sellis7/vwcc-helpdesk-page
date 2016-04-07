function generatePassword() {

    var length = 9,
            charset = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));

        var phonVal = '';
        for (i = 0; i < retVal.length; i++) {
            var character = retVal.charAt(i);
            switch (character) {
                case 'a':
                    phonVal += " alpha ";
                    break;
                case 'b':
                    phonVal += " bravo ";
                    break;
                case 'c':
                    phonVal += " charlie ";
                    break;
                case 'd':
                    phonVal += " delta ";
                    break;
                case 'e':
                    phonVal += " echo ";
                    break;
                case 'f':
                    phonVal += " foxtrot ";
                    break;
                case 'g':
                    phonVal += " golf ";
                    break;
                case 'h':
                    phonVal += " hotel ";
                    break;
                case 'i':
                    phonVal += " india ";
                    break;
                case 'j':
                    phonVal += " juliet ";
                    break;
                case 'k':
                    phonVal += " kilo ";
                    break;
                case 'l':
                    phonVal += " lima ";
                    break;
                case 'm':
                    phonVal += " mike ";
                    break;
                case 'n':
                    phonVal += " november ";
                    break;
                case 'o':
                    phonVal += " oscar ";
                    break;
                case 'p':
                    phonVal += " papa ";
                    break;
                case 'q':
                    phonVal += " quebec ";
                    break;
                case 'r':
                    phonVal += " romeo ";
                    break;
                case 's':
                    phonVal += " sierra ";
                    break;
                case 't':
                    phonVal += " tango ";
                    break;
                case 'u':
                    phonVal += " uniform ";
                    break;
                case 'v':
                    phonVal += " victor ";
                    break;
                case 'w':
                    phonVal += " whiskey ";
                    break;
                case 'x':
                    phonVal += " xray ";
                    break;
                case 'y':
                    phonVal += " yankee ";
                    break;
                case 'z':
                    phonVal += " zulu ";
                    break;
                case 'A':
                    phonVal += " ALPHA ";
                    break;
                case 'B':
                    phonVal += " BRAVO ";
                    break;
                case 'C':
                    phonVal += " CHARLIE ";
                    break;
                case 'D':
                    phonVal += " DELTA ";
                    break;
                case 'E':
                    phonVal += " ECHO ";
                    break;
                case 'F':
                    phonVal += " FOXTROT ";
                    break;
                case 'G':
                    phonVal += " GOLF ";
                    break;
                case 'H':
                    phonVal += " HOTEL ";
                    break;
                case 'I':
                    phonVal += " INDIA ";
                    break;
                case 'J':
                    phonVal += " JULIET ";
                    break;
                case 'K':
                    phonVal += " KILO ";
                    break;
                case 'L':
                    phonVal += " LIMA ";
                    break;
                case 'M':
                    phonVal += " MIKE ";
                    break;
                case 'N':
                    phonVal += " NOVEMBER ";
                    break;
                case 'O':
                    phonVal += " OSCAR ";
                    break;
                case 'P':
                    phonVal += " PAPA ";
                    break;
                case 'Q':
                    phonVal += " QUEBEC ";
                    break;
                case 'R':
                    phonVal += " ROMEO ";
                    break;
                case 'S':
                    phonVal += " SIERRA ";
                    break;
                case 'T':
                    phonVal += " TANGO ";
                    break;
                case 'U':
                    phonVal += " UNIFORM ";
                    break;
                case 'V':
                    phonVal += " VICTOR ";
                    break;
                case 'W':
                    phonVal += " WHISKEY ";
                    break;
                case 'X':
                    phonVal += " XRAY ";
                    break;
                case 'Y':
                    phonVal += " YANKEE ";
                    break;
                case 'Z':
                    phonVal += " ZULU ";
                    break;
                case '1':
                    phonVal += " 1 ";
                    break;
                case '2':
                    phonVal += " 2 ";
                    break;
                case '3':
                    phonVal += " 3 ";
                    break;
                case '4':
                    phonVal += " 4 ";
                    break;
                case '5':
                    phonVal += " 5 ";
                    break;
                case '6':
                    phonVal += " 6 ";
                    break;
                case '7':
                    phonVal += " 7 ";
                    break;
                case '8':
                    phonVal += " 8 ";
                    break;
                case '9':
                    phonVal += " 9 ";
                    break;
                case '0':
                    phonVal += " 0 ";
                    break;
                default:
                    phonVal += character + ' ';
            }
        }

        document.getElementById('NATO').value = phonVal;


    }
    var containsDigits = /[0-9]/.test(retVal);
    var containsUpper = /[A-Z]/.test(retVal);
    var containsLower = /[a-z]/.test(retVal);

    if (containsDigits && containsUpper && containsLower)
    {
        document.getElementById('password').value = retVal;
    }
    else
        generatePassword();

    return false;
}


function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = generatePassword;
} // End of init() function.

window.onload = init;