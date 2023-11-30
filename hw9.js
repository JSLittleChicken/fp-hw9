switch (numOrStr) {
    case null:
        console.log('ви скасували');
        break
    default:
        switch (numOrStr.trim()) {
            case '':
                console.log('Empty String');
                break;
            default:
                switch (isNaN(+numOrStr)) {
                    case true:
                        console.log(' number is Ba_NaN');
                        break;
                    default:
                        console.log('OK!')
                }
        }
}