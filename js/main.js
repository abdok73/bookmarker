var siteName = document.getElementById('siteName')
var siteUrl = document.getElementById('siteUrl')
var mainArray = [1,]
if (localStorage.getItem('storageKey') != null) {
  mainArray = JSON.parse(localStorage.getItem('storageKey'))
}
showInTable()

function addSite() {
  var siteObj = {
    name: siteName.value,
    url: siteUrl.value
  }
  mainArray.push(siteObj)
  localStorage.setItem("storageKey", JSON.stringify(mainArray))
  showInTable()
  clearInputs()
}

function showInTable() {
  var cartona = ``
  for (var i = 1; i < mainArray.length; i++) {
    cartona += `
            <tr>
            <th id="tableTxt">${i}</th>
            <td id="tableTxt">${mainArray[i].name}</td>
            <td>
              <a target="_blank" href="https://${mainArray[i].url}/"><button class="btn btn-success"><i class="fa-solid fa-eye"></i>Visit</button></a>
            </td>
            <td>
              <button class="btn btn-danger" onclick="deleteItem(${i})"><i class="fa-solid fa-trash-can"></i>Delete</button>
            </td>
          </tr>
  `
  }
  document.getElementById('demo').innerHTML = cartona
}

function clearInputs() {
  var siteName = document.getElementById('siteName').value = ""
  var siteUrl = document.getElementById('siteUrl').value = ""
}


function deleteItem(index) {
  mainArray.splice(index, 1)
  localStorage.setItem("storageKey", JSON.stringify(mainArray))
  showInTable()
}



// var urlR = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?:: (\d +))?(?: \/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
// var url = content.match(urlR);


