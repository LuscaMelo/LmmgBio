
// Lógica do Menu (Mobile)
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('menu-overlay');
    const body = document.body;

    // Alterna as classes do menu e do overlay
    menu.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');

    // Desativa o scroll quando o menu está aberto
    if (!menu.classList.contains('-translate-x-full')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});


// Lógica do Accordion na opção "Vídeos"
document.getElementById('videos-toggle').addEventListener('click', function () {
    const submenu = document.getElementById('videos-submenu');
    const chevron = document.getElementById('chevron-icon');

    // Verifica se o submenu está expandido
    const isExpanded = submenu.style.maxHeight && submenu.style.maxHeight !== '0px';

    // Alterna a altura máxima para criar o efeito de deslizamento
    submenu.style.maxHeight = isExpanded ? '0px' : submenu.scrollHeight + 'px';

    // Altera a rotação do ícone
    chevron.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(90deg)';
});


// Lógica para alterar o Grid na página de Banco de Imagens
document.addEventListener("DOMContentLoaded", () => {
    const simpleView = document.getElementById("simple");
    const multipleView = document.getElementById("multiple");
    const gridContainer = document.querySelector(".grid");

    // Verifica se os elementos existem antes de adicionar os eventos
    if (simpleView && multipleView && gridContainer) {
        // Alterna o grid
        simpleView.addEventListener("click", () => {
            gridContainer.classList.remove("lg:grid-cols-5");
            gridContainer.classList.remove("md:grid-cols-3");
            gridContainer.classList.add("lg:grid-cols-3");
            gridContainer.classList.add("md:grid-cols-2");
        });

        multipleView.addEventListener("click", () => {
            gridContainer.classList.remove("lg:grid-cols-3");
            gridContainer.classList.add("lg:grid-cols-5");
            gridContainer.classList.remove("md:grid-cols-2");
            gridContainer.classList.add("md:grid-cols-3");
        });
    } else {
        console.error("Não foi possível encontrar os elementos necessários no DOM.");
    }
});

//Lógica do dropdown - Menu Lateral
document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Alterna a visibilidade do menu ao clicar no botão
    dropdownButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (event) => {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Atualiza o botão com o texto da opção selecionada
    dropdownMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            dropdownButton.querySelector('span').textContent = event.target.textContent;
            dropdownMenu.classList.remove('show');
        }
    });
});


//Lógica do dropdown 1 - Dual View
document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton1 = document.getElementById('dropdown-button1');
    const dropdownMenu1 = document.getElementById('dropdown-menu1');

    // Alterna a visibilidade do menu ao clicar no botão
    dropdownButton1.addEventListener('click', () => {
        dropdownMenu1.classList.toggle('show');
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (event) => {
        if (!dropdownButton1.contains(event.target) && !dropdownMenu1.contains(event.target)) {
            dropdownMenu1.classList.remove('show');
        }
    });

    // Atualiza o botão com o texto da opção selecionada
    dropdownMenu1.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            dropdownButton1.querySelector('span').textContent = event.target.textContent;
            dropdownMenu1.classList.remove('show');
        }
    });
});

//Lógica do dropdown 2 - Dual View
document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton2 = document.getElementById('dropdown-button2');
    const dropdownMenu2 = document.getElementById('dropdown-menu2');

    // Alterna a visibilidade do menu ao clicar no botão
    dropdownButton2.addEventListener('click', () => {
        dropdownMenu2.classList.toggle('show');
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (event) => {
        if (!dropdownButton2.contains(event.target) && !dropdownMenu2.contains(event.target)) {
            dropdownMenu2.classList.remove('show');
        }
    });

    // Atualiza o botão com o texto da opção selecionada
    dropdownMenu2.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            dropdownButton2.querySelector('span').textContent = event.target.textContent;
            dropdownMenu2.classList.remove('show');
        }
    });
});

//Lógica do dropdown 3 - Dual View
document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton3 = document.getElementById('dropdown-button3');
    const dropdownMenu3 = document.getElementById('dropdown-menu3');

    // Alterna a visibilidade do menu ao clicar no botão
    dropdownButton3.addEventListener('click', () => {
        dropdownMenu3.classList.toggle('show');
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (event) => {
        if (!dropdownButton3.contains(event.target) && !dropdownMenu3.contains(event.target)) {
            dropdownMenu3.classList.remove('show');
        }
    });

    // Atualiza o botão com o texto da opção selecionada
    dropdownMenu3.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            dropdownButton3.querySelector('span').textContent = event.target.textContent;
            dropdownMenu3.classList.remove('show');
        }
    });
});

//Lógica do dropdown 4
document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton4 = document.getElementById('dropdown-button4');
    const dropdownMenu4 = document.getElementById('dropdown-menu4');

    // Alterna a visibilidade do menu ao clicar no botão
    dropdownButton4.addEventListener('click', () => {
        dropdownMenu4.classList.toggle('show');
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (event) => {
        if (!dropdownButton4.contains(event.target) && !dropdownMenu4.contains(event.target)) {
            dropdownMenu4.classList.remove('show');
        }
    });

    // Atualiza o botão com o texto da opção selecionada
    dropdownMenu4.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            dropdownButton4.querySelector('span').textContent = event.target.textContent;
            dropdownMenu4.classList.remove('show');
        }
    });
});


//Lógica da Comaparação de Imagens - Dual View
document.addEventListener('DOMContentLoaded', () => {
    const comparator = document.getElementById('comparator');
    const slider = document.getElementById('slider');
    const afterImage = comparator.querySelector('.image-after');

    function moveSlider(e) {
        const rect = comparator.getBoundingClientRect();
        let x = e.clientX - rect.left;

        if (x < 0) x = 0; // Limite mínimo
        if (x > rect.width) x = rect.width; // Limite máximo

        const percentage = (x / rect.width) * 100;

        // Atualiza a posição da barra e o corte da imagem
        slider.style.left = `${percentage}%`;
        afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    }

    // Eventos de mouse
    slider.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', moveSlider);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', moveSlider);
        });
    });

    // Eventos para toque (mobile)
    slider.addEventListener('touchstart', () => {
        document.addEventListener('touchmove', (e) => {
            moveSlider(e.touches[0]);
        });
        document.addEventListener('touchend', () => {
            document.removeEventListener('touchmove', moveSlider);
        });
    });
});


// Lógica do Modal "Abrir Calendário"
document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.querySelector('#calendar-modal-trigger');
    const modal = document.querySelector('#calendar-modal');
    const closeModalButton = document.querySelector('#close-modal');
    const body = document.body;

    // Função para abrir o modal
    const openModal = () => {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        body.classList.add('no-scroll');
    };

    // Função para fechar o modal
    const closeModal = () => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        body.classList.remove('no-scroll');
    };

    // Abre o modal ao clicar no botão
    openModalButton.addEventListener('click', openModal);

    // Fecha o modal ao clicar no botão de fechar
    closeModalButton.addEventListener('click', closeModal);

    // Fecha o modal ao clicar fora dele
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});




