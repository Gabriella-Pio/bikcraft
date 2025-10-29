// ativar itens do menu
const links = document.querySelectorAll('.header-menu a');

// exemplo de funcionamento do includes
console.log('javascript'.includes('java'));

function ativarLinks(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}

links.forEach(ativarLinks);

// ativar itens do orçamento
const parametros = new URLSearchParams(location.search); // search = propriedade de busca da URL

function ativarProduto(parametro) {
  console.log("param: " + parametro);
  const elemento = document.getElementById(parametro);
  console.log("elem: " + elemento);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);
