// URL base da API
const API_BASE_URL = 'http://localhost:8080/api';

// Funções utilitárias comuns
const utils = {
    // Formatar data para exibição
    formatarData: (dateString) => {
        if (!dateString) return '';
        const data = new Date(dateString);
        return data.toLocaleDateString('pt-BR');
    },
    
    // Formatar data para o formato ISO (para inputs date)
    formatarDataISO: (dateString) => {
        if (!dateString) return '';
        const data = new Date(dateString);
        return data.toISOString().split('T')[0];
    },
    
    // Abrir modal
    abrirModal: (modalId) => {
        document.getElementById(modalId).style.display = 'block';
    },
    
    // Fechar modal
    fecharModal: (modalId) => {
        document.getElementById(modalId).style.display = 'none';
    },
    
    // Configurar abas
    configurarAbas: () => {
        document.querySelectorAll('.tab-link').forEach(tab => {
            tab.addEventListener('click', () => {
                // Remover classe active de todas as abas e conteúdos
                document.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
                
                // Adicionar classe active na aba clicada e no conteúdo correspondente
                tab.classList.add('active');
                document.getElementById(tab.dataset.tab).classList.add('active');
            });
        });
    },
    
    // Obter parâmetros da URL
    getUrlParams: () => {
        const params = {};
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        
        for (const [key, value] of urlParams.entries()) {
            params[key] = value;
        }
        
        return params;
    }
};

// Configurar fechamento de modais
document.addEventListener('DOMContentLoaded', () => {
    // Fechar modal ao clicar no X
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const modal = closeBtn.closest('.modal');
            modal.style.display = 'none';
        });
    });
    
    // Fechar modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        document.querySelectorAll('.modal').forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});