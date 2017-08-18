const xhr = new XMLHttpRequest();

export function makeAjax(url, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 400) {
                    reject();
                } else {
                    resolve(JSON.parse(xhr.responseText));
                }
            }
        };
        xhr.open(method, url, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(data));
    });
}