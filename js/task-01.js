const allCategories = document.querySelectorAll('.item')
console.log(`Number of categories:${allCategories.length}`)

const result = [...allCategories].forEach((category) => {
  console.log(`Category:  ${category.children[0].textContent} Elements: ${category.children[1].children.length}`)
  
});

