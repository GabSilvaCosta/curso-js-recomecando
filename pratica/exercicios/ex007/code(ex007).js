let container = document.getElementById('quadrado');
        container.addEventListener('mouseenter', entrou);
        container.addEventListener('mouseout', sair);
        container.addEventListener('click', clicou);

        function entrou() {
            container.style.backgroundColor = 'blue'
            container.innerHTML = 'Mouse entrou na DIV'
        }

        function sair() {
            container.style.backgroundColor = 'black'
            container.innerHTML = ''
        }

        function clicou() {
            container.style.backgroundColor = 'green'
            container.innerHTML = 'Você clicou na DIV'
        }