document.addEventListener('DOMContentLoaded', () => {
    carregarTimes();
    configurarFormulario();
    configurarEventos();
});

// Função para carregar a lista de times
function carregarTimes() {
    fetch(`${API_BASE_URL}/times`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar times');
            }
            return response.json();
        })
        .then(times => {
            const listaTimes = document.getElementById('listaTimes');
            listaTimes.innerHTML = '';
            
            times.forEach(time => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${time.nome}</td>
                    <td>${time.cidade}</td>
                    <td class="actions">
                        <button class="btn btn-sm btn-edit" onclick="editarTime(${time.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-delete" onclick="excluirTime(${time.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                `;
                listaTimes.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao carregar os times.');
        });
}

// Configurar formulário de time
function configurarFormulario() {
    const formTime = document.getElementById('formTime');
    
    formTime.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const timeId = document.getElementById('timeId').value;
        const nome = document.getElementById('nomeTime').value;
        const cidade = document.getElementById('cidadeTime').value;
        const urlEscudo = document.getElementById('urlEscudo').value;
        
        const time = {
            nome,
            cidade,
            urlEscudo
        };
        
        const method = timeId ? 'PUT' : 'POST';
        const url = timeId ? `${API_BASE_URL}/times/${timeId}` : `${API_BASE_URL}/times`;
        
        if (timeId) {
            time.id = parseInt(timeId);
        }
        
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(time)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao salvar time');
            }
            return response.json();
        })
        .then(() => {
            utils.fecharModal('modalTime');
            carregarTimes();
            formTime.reset();
            document.getElementById('timeId').value = '';
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao salvar o time.');
        });
    });
}

// Configurar eventos
function configurarEventos() {
    const btnNovoTime = document.getElementById('btnNovoTime');
    
    btnNovoTime.addEventListener('click', () => {
        document.getElementById('modalTimeTitulo').textContent = 'Novo Time';
        document.getElementById('btnSalvarTime').textContent = 'Cadastrar';
        document.getElementById('formTime').reset();
        document.getElementById('timeId').value = '';
        utils.abrirModal('modalTime');
    });
}

// Função para editar time
function editarTime(id) {
    fetch(`${API_BASE_URL}/times/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar time');
            }
            return response.json();
        })
        .then(time => {
            document.getElementById('timeId').value = time.id;
            document.getElementById('nomeTime').value = time.nome;
            document.getElementById('cidadeTime').value = time.cidade;
            document.getElementById('urlEscudo').value = time.urlEscudo || '';
            
            document.getElementById('modalTimeTitulo').textContent = 'Editar Time';
            document.getElementById('btnSalvarTime').textContent = 'Salvar';
            utils.abrirModal('modalTime');
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao carregar os dados do time.');
        });
}

// Função para excluir time
function excluirTime(id) {
    if (!confirm('Deseja realmente excluir este time?')) {
        return;
    }
    
    fetch(`${API_BASE_URL}/times/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao excluir time');
        }
        carregarTimes();
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao excluir o time.');
    });
}