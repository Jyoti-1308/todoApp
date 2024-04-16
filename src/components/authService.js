const keyName = "taskList";
function storeList(obj) {
    console.log(obj);
    let str = JSON.stringify(obj);
    localStorage.setItem(keyName, str);
}
function remList() {
    localStorage.removeItem(keyName);
}
function getList() {
    let str = localStorage.getItem(keyName);
    console.log(str);
    let obj = JSON.parse(str);
    console.log(obj)
    return obj;
}

export default {

    remList,
    storeList,
    getList
}