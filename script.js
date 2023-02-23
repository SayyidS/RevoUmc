let ganti = prompt("Masukkan nama kamu");
    document.getElementById("nama").innerHTML = ganti;
    function validateForm(){
        const name1 = document.forms["message-form"]["full-name"].value;
        const birthdate = document.forms["message-form"]["birth-date"].value;
        const gender = document.forms["message-form"]["gender"].value;
        const messages = document.forms["message-form"]["messages"].value;

        if (name1 == "" || birthdate == "" || gender == "" || messages == "" ){
            alert('tidak boleh ada yang kosong');
            return false;
        }
        setSenderUI(name1, birthdate, gender, messages);
        return false;
    }
    function setSenderUI(name1, birthdate, gender, messages){
        document.getElementById("sender-name").innerHTML = name1;
        document.getElementById("sent-date").innerHTML = birthdate;
        document.getElementById("sender-gender").innerHTML = gender;
        document.getElementById("sender-messages").innerHTML = messages;
    }