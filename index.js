var dataobject = [["asep", "085798753827", "asep@gmail.com"]];

function showobject() {
    var listobject = document.getElementById("list-data");
    // clear list object
    listobject.innerHTML = "";

    // make object
    for (let i = 0; i < dataobject.length; i++) {
        var btnEdit = "<a href='#' onclick='editobject(" + i + ")'>Edit</a>";
        var btnDelete = "<a href='#' onclick='deleteobject(" + i + ")'>Delete</a>";

        listobject.innerHTML +=
            " <li> " +
            dataobject[i][0] +
            "  -  " +
            dataobject[i][1] +
            "  -  " +
            dataobject[i][2] +
            " [ " +
            btnEdit +
            " | " +
            btnDelete +
            " ]</li> ";
    }
}

function add() {
    var inputName = document.querySelector("input[name=contact]");
    var inputPhone = document.querySelector("input[name=phone]");
    var inputEmail = document.querySelector("input[name=email]");

    // Periksa apakah inputan nama , nomor telepon dan email tidak kosong
    if (inputName.value.trim() !== "" && inputPhone.value.trim() !== "" && inputEmail.value.trim() !== "") {
        // Tambahkan pasangan nama dan nomor telepon ke dataobject
        dataobject.push([inputName.value, inputPhone.value, inputEmail.value]);

        // Bersihkan nilai inputan
        inputName.value = "";
        inputPhone.value = "";
        inputEmail.value = "";

        // Perbarui tampilan daftar kontak
        showobject();
    } else {
        alert("Please enter both name, phone number, and email.");
    }
}

function editobject(id) {
    var newName = prompt("Enter New Name", dataobject[id][0]);
    var newPhone = prompt("Enter New Phone Number", dataobject[id][1]);
    var newEmail = prompt("Enter New Email", dataobject[id][2]);

    // Periksa apakah pengguna membatalkan inputan
    if (newName !== null && newPhone !== null && newEmail !== null) {
        // Perbarui dataobject dengan nilai yang baru
        dataobject[id] = [newName, newPhone, newEmail];

        // Perbarui tampilan daftar kontak
        showobject();
    }
}

function deleteobject(id) {
    // Hapus item dari dataobject sesuai dengan id
    dataobject.splice(id, 2);

    // Perbarui tampilan daftar kontak
    showobject();
}

showobject();