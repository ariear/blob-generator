let kotak = document.querySelector('.kotak')
let displayed = document.querySelector('#displayed')
let setradius = document.querySelectorAll('.set-radius')
let info = document.querySelector('.info')

setradius.forEach(input => input.addEventListener('input', (event) => {
    const range1 = document.querySelector('#range1').value
    const range2 = document.querySelector('#range2').value
    const range3 = document.querySelector('#range3').value
    const range4 = document.querySelector('#range4').value

    displayed.value = `border-radius : ${range1}% ${100 - range1}% ${100 - range2}% ${range2}% / ${100 - range3}% ${range3}% ${range4}% ${100 - range4}%;`
    kotak.style.borderRadius = `${range1}% ${100 - range1}% ${100 - range2}% ${range2}% / ${100 - range3}% ${range3}% ${range4}% ${100 - range4}%`
}))

displayed.addEventListener('click', (value) => {
    if (value.target.value != '') {  
        navigator.clipboard.writeText(value.target.value)          
        Swal.fire(
        'Good job!',
        'Blob copied succesfully',
        'success'
        )
    }
})

info.addEventListener('click' , () => {
    Swal.fire({
        title: 'Blob Generator',
        icon: 'info',
        html:
          'Website ini berguna untuk anda yang ingin membuat sebuah blob , disini kamu tinggal geser-geser saja gak usah bikin manual!! , <p>Salin kode blob yang berbentuk CSS di bawah</p>',
        showCloseButton: true
      })
})