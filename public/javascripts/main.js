const formEl = document.querySelector('.mainform');
const statusEl = document.querySelector('.status');


formEl.addEventListener('submit', ev => {
    ev.preventDefault();
    const params = new FormData(formEl);
    axios.post('/upload', params)
    .then((r) => {
        statusEl.innerHTML = r.data.reduce((str, el) => {
            return `${str}<img src="/img/${el}">`;
        }, '')
        
    });
});

