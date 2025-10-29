const links = document.querySelectorAll('.header-menu a');

// exemplo de funcionamento do includes
console.log("javascript".includes("java"));

function ativarLinks(link) {
  const url = location.href;
  const href = link.href;

  // if(url === href) {
    //   console.log(link);
    // }
    
    if (url.includes(href)) {
      console.log(link);
    }
  }
  
  links.forEach(ativarLinks);