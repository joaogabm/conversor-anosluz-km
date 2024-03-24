CONVERSOR DE QUILÔMETROS PARA ANOS LUZ (e vice-versa)

- Este projeto permite converter distâncias entre quilômetros e anos luz. Ele é implementado em React JS e possui uma interface de usuário amigável.

BIBLIOTECAS UTILIZADAS

- npm i react-icons
- npm i styled-components
- npm i react-router-dom


---------- HEADER COMPONENT ----------

O arquivo "Header.jsx" contém a implementação principal do componente Header. Ele consiste em:

- Importações: Importa os componentes React necessários, como useState, Menu, Login, FaBars e FaUser, bem como o componente Sidebar e seus respectivos estilos;

- Função Header: Define o componente Header como uma função funcional. Ele contém o estado para controlar a visibilidade da barra lateral;

- Função showSidebar: Toggla a visibilidade da barra lateral ao ser chamada;

- Renderização: Renderiza a estrutura do componente, incluindo o menu de navegação com o ícone de menu, a barra lateral (se estiver visível) e a seção de login com o ícone de usuário.

O componente Sidebar.jsx é importado dentro do componente Header e é responsável por exibir um menu lateral quando acionado pelo usuário.


---------- SIDEBAR COMPONENT ----------

- O componente Sidebar é responsável por exibir um menu lateral na interface do usuário. Ele fornece acesso rápido a diferentes seções ou páginas do aplicativo.

ESTRUTURA DE ARQUIVOS

O arquivo "Sidebar.jsx" contém a implementação principal do componente Sidebar. Ele consiste em:

- Importações: Importa os componentes necessários, como Container, Content e SidebarItem. Também importa os ícones de fechar, página inicial e outras páginas (por exemplo, FaTimes, FaHome, BsFillQuestionSquareFill);

- Função Sidebar: Define o componente Sidebar como uma função que aceita uma prop active para determinar se a barra lateral está aberta ou fechada. Contém a lógica para fechar a barra lateral e renderiza os itens de menu;

- Renderização: Renderiza a estrutura do componente, incluindo o botão de fechar a barra lateral, os itens de menu e seus ícones.

O arquivo "SidebarItem.jsx" contém o componente "SidebarItem", que é responsável por renderizar cada item de menu na barra lateral. Ele consiste em:

- Importações: Importa o Container necessário para estilizar o item de menu;

- Componente SidebarItem: Define o componente SidebarItem como uma função que aceita props Icon e Text. Renderiza o ícone e o texto do item de menu dentro do Container.


---------- CONVERSOR COMPONENT ----------

- O componente Conversor é responsável por converter distâncias entre quilômetros e anos luz, exibindo os resultados na interface do usuário e mantendo um histórico das últimas conversões realizadas.

ESTRUTURA DE ARQUIVOS

O arquivo "Conversor.jsx" contém a implementação principal do componente Conversor. Ele consiste em:

- Importações: Importa os componentes React necessários, como useState, Historico e Conversor.css. Também importa o arquivo CSS para estilização;

- Função Conversor: Define o componente Conversor como uma função funcional. Ele contém o estado para os valores de entrada (anosLuz e quilometros), resultados das conversões (resultadoAnosLuzParaKm e resultadoKmParaAnosLuz) e o histórico de conversões;

- Funções de Conversão: Contém duas funções, ConverterAnosLuzParaKm e ConverterKmParaAnosLuz, para realizar as conversões entre quilômetros e anos luz. Cada função verifica a validade dos valores de entrada e realiza os cálculos necessários;

- Função adicionarAoHistorico: É responsável por exibir o histórico das 3 últimas conversões realizadas. Ele recebe o histórico como uma prop e renderiza uma tabela com os dados de cada conversão;

- Renderização: Renderiza a estrutura do componente, incluindo os campos de entrada para quilômetros e anos luz, botões de conversão, resultados das conversões e o componente de histórico.
