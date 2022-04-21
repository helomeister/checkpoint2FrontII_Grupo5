function mostrarSpinner() {
  
    const body = document.querySelector("body");
    
   
    const form = document.querySelector("form");

    const spinnerContainer = document.createElement("div");
    const spinner = document.createElement("div");
    
 
    spinnerContainer.setAttribute("id", "container-load");
    spinner.setAttribute("id", "load");
    
      form.classList.add("hidden");
  
    spinnerContainer.appendChild(spinner);
    body.appendChild(spinnerContainer);
    
    return;
   }

function ocultarSpinner() {
   
    const body = document.querySelector("body");
    
    const form = document.querySelector("form");
    
    const spinnerContainer = document.querySelector("#conteiner-load");
    
    body.removeChild(spinnerContainer);
    
    form.classList.remove("hidden");

    return;
}

function renderizarSkeletons(quantidade, conteiner) {
    // Selecionamos o conteiner
    const conteinerTarefas = document.querySelector(conteiner);
    
    // Criamos um array que terá um lenght igual ao número de
    //skeletons que queremos renderizar
    const skeletons = Array.from({ length: quantidade});
    
    // Iteramos sobre o array acessando cada elemento
    skeletons.forEach(() => {
      // Guardamos o HTML de cada skeleton. Adicionamos uma classe com o seletor do conteiner
      // Isso nos permitirá posteriormente eliminar os skeletons do referido conteiner
      const template = `
      <li class ="skeleton-conteiner ${conteiner.replace(" .",="" "")}-child"="">
        <div class="skeleton-card">
          <p class="skeleton-text"></p>
          <p class="skeleton-text"></p>
        </div>
      </li>
    `;
    
      // Inserimos o HTML dentro do conteiner
      conteinerTarefas.innerHTML += template;
    });
   }

   function removerSkeleton(conteiner) {
    
    const conteinerTarefas = document.querySelector(conteiner);
    
    
    const skeletons = document.querySelectorAll(`${conteiner}-child`);
    
        skeletons.forEach((skeleton) => conteinerTarefas.removeChild(skeleton));
   }

