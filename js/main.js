/**
 * Created by admin on 01.02.2017.
 */
var usersTable = document.getElementById("users-table");

var xhr = new XMLHttpRequest();
xhr.open("GET", "/user");


xhr.addEventListener("readystatechange", function () {
    if (this.readyState !== 4) {
        return;
    }

    var pars = JSON.parse(this.responseText);

    for (i = 0; i < pars.length; i++) {
        var newTr = document.createElement("tr");
        usersTable.appendChild(newTr);

        var tdFullname = document.createElement("td");
        tdFullname.innerText = pars[i].fullName;
        newTr.appendChild(tdFullname);


        var tdProfession = document.createElement("td");
        tdProfession.innerText = pars[i].profession;
        newTr.appendChild(tdProfession);

        var tdShortinfo = document.createElement("td");
        tdShortinfo.innerText = pars[i].shortInfo;
        newTr.appendChild(tdShortinfo);

        var newTdcheck = document.createElement("td");
        newTdcheck.innerHTML = '<input type="checkbox">';
        newTr.appendChild(newTdcheck);

        var newTd = document.createElement("td");
        newTr.appendChild(newTd);

            var btnRemove = document.createElement("button");
            newTd.appendChild(btnRemove);
            var textRemove = document.createTextNode("Remove");
            btnRemove.appendChild(textRemove);

            var btnEdit = document.createElement("button");
            newTd.appendChild(btnEdit);
            var textEdit = document.createTextNode("Edit");
            btnEdit.appendChild(textEdit);

        btnRemove.addEventListener("click", function () {
            var remove = new XMLHttpRequest();
            remove.open("DELETE", "/user?id=");
            remove.addEventListener("readystatechange", function () {
                if (remove.readyState !== 4) {
                    return;
                }
            });

            var checks =  document.querySelectorAll('input:checked');
            for (var i = 0, check; check = checks[i]; i++) {
                var newTr = check.parentNode.parentNode;
                var parent = newTr.parentNode;
                parent.removeChild(newTr);
            }

        });
    }

});
xhr.send();


