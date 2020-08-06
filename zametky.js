// localStorage.setItem('test', 1);
let size = localStorage.getItem('size');
 let count = JSON.parse(localStorage.getItem('count'));

function save(event) {
    let notice = JSON.parse(localStorage.getItem(event.currentTarget.id));

    notice.text = event.currentTarget.value;
    localStorage.setItem(event.currentTarget.id, JSON.stringify(notice));

}
function load() {
    if (count == null) {
        return
    }
    for (let i = 0; i <count.length; i++) {
       let notice = createNotice();
       let data = JSON.parse(localStorage.getItem('zametka'+(i+1)));

       notice.firstChild.lastChild.previousSibling.previousSibling.value = data.text;
       notice.style.backgroundColor = data.color;
       notice.firstChild.lastChild.previousSibling.previousSibling.id = count[i];
       notice.firstChild.firstChild.innerText = count[i];
    }
}
function createNotice() {
    let div = document.createElement('div');
    div.className = "info";
    document.getElementById("container").appendChild(div);
    let p = document.createElement('p');
    let strong = document.createElement('strong');
    let input = document.createElement('input');
    let minus = document.createElement('img');
    let inputColor = document.createElement('input')
    inputColor.type = 'color';
    inputColor.onchange = changeColor;
    minus.src = "img/minus.png";
    minus.onclick = deliteNotice;
    div.appendChild(p);
    p.appendChild(strong);
    p.appendChild(input);
    p.appendChild(minus);
    p.appendChild(inputColor);

    strong.innerText = 'zametka '+ size;
    input.id = "zametka"+ size;
    input.onkeypress = save;
    return div;
}
function newNotice() {
    size++;
    if (count == null)
        count = [];
    count.push("zametka"+size);
    localStorage.setItem('size',size);
    localStorage.setItem('count',JSON.stringify(count));
        notice = new Object();
        notice.text = '';
        notice.color = '';
        localStorage.setItem('zametka'+size,JSON.stringify(notice));
    createNotice();
}
function deliteNotice(event) {
    event.currentTarget.parentNode.parentNode.remove();
    localStorage.removeItem(event.currentTarget.previousSibling.id);

    size--;
    localStorage.setItem('size',size);


    for (let i = 0; i < size; i++) {
        if (event.currentTarget.previousSibling.id==count[i]){
            count.splice(i,1);
            break;
        }
    }
    localStorage.setItem('count',JSON.stringify(count));
}
function changeColor(event) {
event.currentTarget.parentNode.parentNode.style.backgroundColor = event.currentTarget.value;
let notice = JSON.parse(localStorage.getItem(event.currentTarget.previousSibling.previousSibling.id));
notice.color = event.currentTarget.value;
localStorage.setItem(event.currentTarget.previousSibling.previousSibling.id, JSON.stringify(notice));
}
function changeImg(img) {
    var origin = window.location.origin + "/Zametky/";
    if (img.src == origin + "img/view_list.svg") {
        img.src = origin + "img/view_stream.svg";
        viewStream();
    } else {
        img.src = origin + "img/view_list.svg";
        viewList();
    }
}
function viewList() {

}
function viewStream() {

}

