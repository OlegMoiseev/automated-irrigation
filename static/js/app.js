function getState() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.0.84/state", true);

    xhr.onload = function () {
        var text = xhr.responseText;
        sensorsInfo = JSON.parse(text);
        console.log(sensorsInfo);
        document.getElementById("moisture").innerHTML = sensorsInfo.soil;
        document.getElementById("temperature").innerHTML = sensorsInfo.temperature;
        document.getElementById("humidity").innerHTML = sensorsInfo.humidity;
    };

    xhr.send();
}

function toggleCheckbox(element) {
    var xhr = new XMLHttpRequest();
    if(element.checked){
        xhr.open("GET", "http://192.168.0.84/LED/ON", true);
    }
    else{
        xhr.open("GET", "http://192.168.0.84/LED/OFF", true);
    };

    xhr.onload = function () {
        var text = xhr.responseText;
        console.log(text);
    };

    xhr.send();
}

<!--        setInterval(function () {-->
<!--            var xhttp = new XMLHttpRequest();-->
<!--            xhttp.onreadystatechange = function() {-->
<!--                if (this.readyState == 4 && this.status == 200) {-->
<!--                    var inputChecked;-->
<!--                    var outputStateM;-->
<!--                    if(this.responseText == 1){-->
<!--                        inputChecked = true;-->
<!--                        outputStateM = "On";-->
<!--                    }-->
<!--                    else{-->
<!--                        inputChecked = false;-->
<!--                        outputStateM = "Off";-->
<!--                    }-->
<!--                    document.getElementById("output").checked = inputChecked;-->
<!--                    document.getElementById("outputState").innerHTML = outputStateM;-->

<!--                    document.getElementById("moisture").innerHTML = outputStateM;-->
<!--                    document.getElementById("temperature").innerHTML = outputStateM;-->
<!--                    document.getElementById("humidity").innerHTML = outputStateM;-->
<!--                }-->
<!--            };-->
<!--            xhttp.open("GET", "/state", true);-->
<!--            xhttp.send();-->
<!--        }, 1000 ) ;-->
