const items = Array.from(document.getElementsByClassName('item'));

items.forEach(item => {
    item.addEventListener('click', onItemClick);

})

function onItemClick(event) {
    const selectedAttribute = event.target.getAttribute('data');

    items.forEach(item => {
        const itemAttribute = item.getAttribute('data');
        if (itemAttribute === selectedAttribute) {
            item.classList.add('active');
        }else {
             item.classList.remove('active');
        }
       
    })
}
