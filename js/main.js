productsHTML(products);
cartIcon.onclick = () => {
    cart.classList.add('active');
};
closeCart.onclick = () => {
    cart.classList.remove('active');
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})

const btnScrollToTop = document.getElementById('btnScrollToTop');
btnScrollToTop.addEventListener('click', function() {
  const productSection = document.getElementById('product');
  productSection.scrollIntoView({ behavior: 'smooth' });
}); 