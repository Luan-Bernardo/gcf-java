Integrantes:

- Artur Rosa Correia - RA - 824135943
- Gustavo Silveira Benicio - RA - 824134160
- Luan Bernardo Alves - RA 824134204
- Victor Hugo Santos Nunes - RA - 825163477

🏆 Sistema de Gerenciamento de Times de Futebol

Este projeto foi desenvolvido como parte da A3 da disciplina de Gestão e Qualidade de Software, com o objetivo de aplicar conceitos práticos de engenharia de software em um sistema funcional.

A aplicação permite gerenciar times, campeonatos, jogos e classificações automaticamente.

⚙️ Observação: Esta é a primeira versão funcional do sistema — o foco inicial foi garantir o funcionamento completo das principais funcionalidades, com uma estrutura e códigos sem princípios de boas práticas.
Em versões futuras, o projeto será refatorado aplicando princípios de Clean Code, boas práticas de arquitetura testes automatizados para melhorar a qualidade e a manutenibilidade do código.

🚀 Requisitos

- Java 17 ou superior
- Maven 3.6 ou superior
- MySQL 8.0 ou superior

⚙️ Configuração

Clone o repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

Configure o banco de dados:

Crie uma cópia do arquivo src/main/resources/application.properties.example como application.properties

Edite o arquivo com suas credenciais:
spring.datasource.url=jdbc:mysql://seu-host:porta/seu-banco-de-dados
spring.datasource.username=seu-usuario
spring.datasource.password=sua-senha

Execute a aplicação:

- mvnw spring-boot:run
- Acesse no navegador: http://localhost:8080

⚽ Funcionalidades

- Gerenciamento de Times: cadastro, edição e exclusão de times de futebol.
- Gerenciamento de Campeonatos: criação e gerenciamento de campeonatos.
- Gerenciamento de Jogos: registro de partidas, resultados e placares.
- Classificação automática: cálculo da tabela de classificação com base nos resultados.
- Organização por Rodadas: separação dos jogos por rodadas dentro de cada campeonato.

🧩 Tecnologias Utilizadas

- Spring Boot
- Spring Data JPA
- MySQL
- HTML, CSS e JavaScript puro (sem frameworks front-end)

