console.log('Hello World!');
// نموونەی خەزنکردنی داتاکان لە مۆبایل
function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}
