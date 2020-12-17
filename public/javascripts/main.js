const formEl = document.querySelector('.mainform');
const statusEl = document.querySelector('.status');


formEl.addEventListener('submit', ev => {
    ev.preventDefault();
    const params = new FormData(formEl);
    axios.post('/upload', params)
    .then((r) => {
        statusEl.innerHTML = `<img src="/img/${r.data}">`;
    });
});

