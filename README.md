Projeto Final Node.js com GitHub
Colaboradores: Italo Gabriel Duarte Nobre - Kaio Cesar Alves Da Silva

Projeto desenvolvido como trabalho final da unidade curricular: Executar os processos de codificação, manutenção e documentação de aplicativos computacionais para internet.

O projeto foi desenvolvido utilizando o Visual Studio Code, com Node.js. Foram aplicados diversos conceitos da linguagem JavaScript, como variáveis e constantes, listas, estruturas de decisão, estruturas de repetição, classes, atributos e métodos. O controle de versão foi feito utilizando Git e GitHub.

Tecnologias Utilizadas
Visual Studio Code
Linguagem JavaScript
Node.js
Git e GitHub
prompt-sync (para entrada de dados no terminal)
Funcionalidades
Cadastro de produtos
Listagem de produtos cadastrados
Busca de produtos pelo código
Modificação do preço de um produto
Exclusão de produto da lista
Validação para não permitir códigos duplicados
Como executar o projeto
Acesse a pasta do projeto:
cd nome-do-repositorio
Instale a dependência prompt-sync:
npm install prompt-sync
Execute o projeto:
node atividade_FInal.js
Funcionamento do sistema
Após executar o código, o sistema exibirá o seguinte menu:

===== MENU =====
1 - Visualizar todos os produtos
2 - Buscar produto pelo código
3 - Adicionar novo produto
4 - Alterar preço de um produto
5 - Excluir produto
0 - Sair
Escolha uma opção:
Exemplos de uso
Visualizar todos os produtos
Opção 1:

--- Produtos Cadastrados ---

Código: 1
Produto: Notebook
Preço: R$3500.00

Código: 2
Produto: Placa de Vídeo
Preço: R$1500.00
Buscar produto
Opção 2:

Digite o código do produto: 1

Código: 1
Produto: Notebook
Preço: R$3500.00
Adicionar produto
Opção 3:

Digite o código do novo produto: 6
Digite o nome do produto: Teclado
Digite o preço do produto: 120
Produto adicionado com sucesso!
Alterar preço
Opção 4:

Digite o código do produto: 2
Deseja (a)umentar ou (d)iminuir o preço? a
Digite o valor: 100
Preço atualizado! Novo valor de Placa de Vídeo: R$1600.00
Excluir produto
Opção 5:

Digite o código do produto a excluir: 4
Produto excluído com sucesso!
Sair
Opção 0:

Saindo...
