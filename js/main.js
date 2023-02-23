let inputP = document.querySelector("#input-p");
let inputGba = document.querySelector("#input-gba");

let btnOne = document.querySelector("#btn-1");
let btnTwo = document.querySelector("#btn-2");

let span = document.querySelector("#span");
let spanColor = document.querySelector("#spanColor");

let notes = document.querySelector("#notes");
let notesCss = document.querySelector(".notes");

inputP.onfocus = function () {
    inputGba.blur();
    inputGba.value = "";
}
inputGba.onfocus = function () {
    inputP.blur();
    inputP.value = "";
}

// First Field 
btnOne.onclick = function () {
    if ( inputP.value >= 0 && inputP.value <= 100 ) {
        if ( inputP.value >= 90) { // A+
            span.innerHTML = "أمتياز مرتفع"
            notes.innerHTML = "جمدان"
            notesCss.style.setProperty('--icon','"\\f25b"');
            notesCss.style.setProperty('--color','#009688');
            spanColor.style.backgroundColor = "#009688"
        } else if (inputP.value >= 85 && inputP.value < 90 ) { // A
            span.innerHTML = "أمتياز"
            notes.innerHTML = "عاش يانجم"
            notesCss.style.setProperty('--icon','"\\f164"');
            notesCss.style.setProperty('--color','#009688');
            spanColor.style.backgroundColor = "#009688"
        } else if (inputP.value >= 80 && inputP.value < 85 ) { // B+
            span.innerHTML = "جيد جداً مرتفع"
            notes.innerHTML = "اشطا عليك"
            notesCss.style.setProperty('--icon','"\\f2b5"');
            notesCss.style.setProperty('--color','#009688');
            spanColor.style.backgroundColor = "#009688"
        } else if (inputP.value >= 75 && inputP.value < 80 ) { // B
            span.innerHTML = "جيد جداً"
            notes.innerHTML = "مبروك ياغالي"
            notesCss.style.setProperty('--icon','"\\f584"');
            notesCss.style.setProperty('--color','#4caf50');
            spanColor.style.backgroundColor = "#4caf50"
        } else if (inputP.value >= 70 && inputP.value < 75 ) { // C+
            span.innerHTML = "جيد مرتفع"
            notes.innerHTML = "جامد"
            notesCss.style.setProperty('--icon','"\\f714"');
            notesCss.style.setProperty('--color','#8bc34a');
            spanColor.style.backgroundColor = "#8bc34a"
        } else if (inputP.value >= 65 && inputP.value < 70 ) { // C
            span.innerHTML = "جيد"
            notes.innerHTML = "حلو يابرو"
            notesCss.style.setProperty('--icon','"\\e2cd"');
            notesCss.style.setProperty('--color','#cddc39');
            spanColor.style.backgroundColor = "#cddc39"
        } else if (inputP.value >= 60 && inputP.value < 65 ) { // D+
            span.innerHTML = "مقبول مرتفع"
            notes.innerHTML = "بطل دح بقى"
            notesCss.style.setProperty('--icon','"\\f118"');
            notesCss.style.setProperty('--color','#07ff2f');
            spanColor.style.backgroundColor = "#ffc107"
        } else if (inputP.value >= 50 && inputP.value < 60 ) { // D
            span.innerHTML = "مقبول "
            notes.innerHTML = "خاف من الحسد بقى"
            notesCss.style.setProperty('--icon','"\\f4da"');
            notesCss.style.setProperty('--color','#ff9800');
            spanColor.style.backgroundColor = "#ff9800"
        }else if (inputP.value >= 0 && inputP.value < 50 && inputP.value !== "" ) { // F
            span.innerHTML = "راسب"
            notes.innerHTML = "ولا يهمك اخرتها متر ف متر"
            notesCss.style.setProperty('--color','black');
            spanColor.style.backgroundColor = "red";
        } 
    } else if (inputGba.value < 0) {
        notesCss.style.setProperty('--icon','"\\f118"');
        notesCss.style.setProperty('--color','green');
        notes.innerHTML = "دي درجة حرارة ياغالي"
    }
};

// Second Field
btnTwo.onclick = function () {
    if (inputGba.value >= 0 && inputGba.value <= 4 ) {
        if (inputGba.value >= 4) { // A+
            span.innerHTML = "أمتياز مرتفع"
            notes.innerHTML = "جمدان"
            notesCss.style.setProperty('--icon','"\\f25b"');
            notesCss.style.setProperty('--color','#009688');
            spanColor.style.backgroundColor = "#009688"
        } else if (inputGba.value >= 3.7 && inputGba.value < 4 ) { // A
            span.innerHTML = "أمتياز"
            notes.innerHTML = "عاش يانجم"
            notesCss.style.setProperty('--icon','"\\f164"');
            notesCss.style.setProperty('--color','#009688');
            spanColor.style.backgroundColor = "#009688"
        } else if (inputGba.value >= 3.3 && inputGba.value < 3.7 ) { // B+
            span.innerHTML = "جيد جداً مرتفع"
            notes.innerHTML = "اشطا عليك"
            notesCss.style.setProperty('--icon','"\\f2b5"');
            notesCss.style.setProperty('--color','#009688');
            spanColor.style.backgroundColor = "#009688"
        } else if (inputGba.value >= 3 && inputGba.value < 3.3 ) { // B
            span.innerHTML = "جيد جداً"
            notes.innerHTML = "مبروك ياغالي"
            notesCss.style.setProperty('--icon','"\\f584"');
            notesCss.style.setProperty('--color','#4caf50');
            spanColor.style.backgroundColor = "#4caf50"
        } else if (inputGba.value >= 2.7 && inputGba.value < 3 ) { // C+
            span.innerHTML = "جيد مرتفع"
            notesCss.style.setProperty('--icon','"\\f714"');
            notesCss.style.setProperty('--color','#8bc34a');
            spanColor.style.backgroundColor = "#8bc34a"
        } else if (inputGba.value >= 2.4 && inputGba.value < 2.7 ) { // C
            span.innerHTML = "جيد"
            notes.innerHTML = "حلو يابرو"
            notesCss.style.setProperty('--icon','"\\e2cd"');
            notesCss.style.setProperty('--color','#cddc39');
            spanColor.style.backgroundColor = "#cddc39"
        } else if (inputGba.value >= 2.2 && inputGba.value < 2.4 ) { // D+
            span.innerHTML = "مقبول مرتفع"
            notes.innerHTML = "بطل دح بقى"
            notesCss.style.setProperty('--icon','"\\f118"');
            notesCss.style.setProperty('--color','#07ff2f');
            spanColor.style.backgroundColor = "#ffc107"
        } else if (inputGba.value >= 2 && inputGba.value < 2.2 ) { // D
            span.innerHTML = "مقبول "
            notes.innerHTML = "خاف من الحسد بقى"
            notesCss.style.setProperty('--icon','"\\f4da"');
            notesCss.style.setProperty('--color','#ff9800');
            spanColor.style.backgroundColor = "#ff9800"
        }else if (inputGba.value >= 0 && inputGba.value < 2 && inputP.value !== "" ) { // F
            span.innerHTML = "راسب"
            notes.innerHTML = "ولا يهمك اخرتها متر ف متر"
            notesCss.style.setProperty('--color','black');
            spanColor.style.backgroundColor = "red";
            spanColor.style.backgroundColor = "red"
        } 
    } else if (inputGba.value < 0) {
        notesCss.style.setProperty('--icon','"\\f118"');
        notesCss.style.setProperty('--color','green');
        notes.innerHTML = "دي درجة حرارة ياغالي"
    }
}
