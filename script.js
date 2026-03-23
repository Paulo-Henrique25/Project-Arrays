const button = document.getElementById('show-list');
const list = document.getElementById('menu-list');

button.addEventListener('click', () => {

    list.innerHTML = '';

    menuOptions.forEach(item => {

        const li = document.createElement('li')

        const img = document.createElement('img')
        img.src = item.src

        const name = document.createElement('p')
        name.textContent = item.name

        const price = document.createElement('p')
        price.classList.add('item-price')
        price.textContent = `R$  ${item.price.toFixed(2)}`

        li.appendChild(img)
        li.appendChild(name)
        li.appendChild(price)

        list.appendChild(li)

    })

})


const mapButton = document.getElementById('map-all');

mapButton.addEventListener('click', () => {

    const newMenu = menuOptions.map(item => {

        return {

            src: item.src,
            name: item.name,
            price: item.price * 0.9,


        }
    })

    list.innerHTML = '';
    newMenu.forEach(item => {

        const li = document.createElement('li')

        const name = document.createElement('p')
        name.textContent = item.name

        const img = document.createElement('img')
        img.src = item.src


        const price = document.createElement('p')
        price.classList.add('item-price')
        price.textContent = `R$  ${item.price.toFixed(2)}`
        li.appendChild(img)
        li.appendChild(name)
        li.appendChild(price)

        list.appendChild(li)

    })

})

const reduceButton = document.getElementById('reduce-all');

reduceButton.addEventListener('click', () => {

    const totalPrice = menuOptions.reduce((acc, item) => acc + item.price, 0);

    list.innerHTML = '';

    menuOptions.forEach(item => {

        const li = document.createElement('li')

        const img = document.createElement('img')
        img.src = item.src

        const name = document.createElement('p')
        name.textContent = item.name

        const price = document.createElement('p')
        price.classList.add('item-price')
        price.textContent = `R$ ${item.price.toFixed(2)}`

        li.appendChild(img)
        li.appendChild(name)
        li.appendChild(price)

        list.appendChild(li)

    })



    const totalLi = document.createElement('li')
    totalLi.style.gridColumn = "span 3"
    totalLi.style.textAlign = "center"

    totalLi.innerHTML = `<h2 style="color:white;">Total: R$ ${totalPrice.toFixed(2)}</h2>`

    list.appendChild(totalLi)


});

const filterButton = document.getElementById('filter-all');

filterButton.addEventListener('click', () => {

    const veganOptions = menuOptions.filter(item => {
        return item.vegan;

    })

    list.innerHTML = '';

    veganOptions.forEach(item => {

        const li = document.createElement('li')

        const img = document.createElement('img')
        img.src = item.src

        const name = document.createElement('p')
        name.textContent = item.name

        const price = document.createElement('p')
        price.classList.add('item-price')
        price.textContent = `R$ ${item.price.toFixed(2)}`

        li.appendChild(img)
        li.appendChild(name)
        li.appendChild(price)

        list.appendChild(li)
    })

})