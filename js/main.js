function openModal(){
    const modal = document.querySelector('.modal')
    modal.style.display = 'flex'
}
function closeModal(event){
    const modal = document.querySelector('.modal')
    
    if(event === undefined)
        return modal.style.display = 'none'

    if(event.target.className === 'modal')
        return modal.style.display = 'none'
    
    
}

// Vai cair na prova!    
function handleSubmitAddTicker(event){
    
    event.preventDefault()
    
    const cardList = document.querySelector('#card-list')

    const urlLogo = event.target.urlLogo.value
    const nameCompanny = event.target.nameCompanny.value
    const ticker = event.target.ticker.value
    const quantity = event.target.quantity.value
    const closedValue = event.target.closedValue.value

    cardList.innerHTML += `<div class="card">
                    <header class="flex-bt">
                        <img src="${urlLogo}" alt="" style="width: 30px; height: 30px; margin-right: 5px;">
                        <h4>${nameCompanny}</h4>
                        <span>${ticker}</span>
                    </header>
                    <main class="flex-bt">
                        <p>Valor: <span style="color: #3fca08; font-size: 30px;">R$${closedValue}<span style="font-size: 15px;"> ▲</span></span></p>
                    </main>
                    <footer class="flex-bt">
                        <p>Quantidade: <span>${quantity}</span></p>
                        <p>Posição: <span>R$${+quantity * +closedValue}</span></p>
                    </footer>
                </div>`
    closeModal()
    
}