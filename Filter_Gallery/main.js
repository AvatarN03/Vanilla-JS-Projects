(function(){
    const buttons = document.querySelectorAll('.btn')
    const storeImages = document.querySelectorAll('.store_item');

    buttons.forEach((button)=>{
        button.addEventListener('click',(e)=>{
                e.preventDefault()
                console.log(e.target);
                const filter = e.target.dataset.filter;
                console.log(filter);

                storeImages.forEach((item)=>{
                    if(filter === 'all')
                    {
                        item.style.display = 'block'
                    }
                    else{
                        if(item.classList.contains(filter)){
                            item.style.display = 'block';
                        }
                        else{
                            item.style.display = 'none';
                        }
                    }
                })

                buttons.forEach(btn => {
                    btn.style.color = '';
                });
                button.style.color = '#d661de';
        })
    })
})();