import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/2024.2-AGIS2/__docusaurus/debug',
    component: ComponentCreator('/2024.2-AGIS2/__docusaurus/debug', '612'),
    exact: true
  },
  {
    path: '/2024.2-AGIS2/__docusaurus/debug/config',
    component: ComponentCreator('/2024.2-AGIS2/__docusaurus/debug/config', '807'),
    exact: true
  },
  {
    path: '/2024.2-AGIS2/__docusaurus/debug/content',
    component: ComponentCreator('/2024.2-AGIS2/__docusaurus/debug/content', '4fc'),
    exact: true
  },
  {
    path: '/2024.2-AGIS2/__docusaurus/debug/globalData',
    component: ComponentCreator('/2024.2-AGIS2/__docusaurus/debug/globalData', '48a'),
    exact: true
  },
  {
    path: '/2024.2-AGIS2/__docusaurus/debug/metadata',
    component: ComponentCreator('/2024.2-AGIS2/__docusaurus/debug/metadata', 'b34'),
    exact: true
  },
  {
    path: '/2024.2-AGIS2/__docusaurus/debug/registry',
    component: ComponentCreator('/2024.2-AGIS2/__docusaurus/debug/registry', '0d1'),
    exact: true
  },
  {
    path: '/2024.2-AGIS2/__docusaurus/debug/routes',
    component: ComponentCreator('/2024.2-AGIS2/__docusaurus/debug/routes', '815'),
    exact: true
  },
  {
    path: '/2024.2-AGIS2/markdown-page',
    component: ComponentCreator('/2024.2-AGIS2/markdown-page', '3f3'),
    exact: true
  },
  {
    path: '/2024.2-AGIS2/docs',
    component: ComponentCreator('/2024.2-AGIS2/docs', '662'),
    routes: [
      {
        path: '/2024.2-AGIS2/docs',
        component: ComponentCreator('/2024.2-AGIS2/docs', '590'),
        routes: [
          {
            path: '/2024.2-AGIS2/docs',
            component: ComponentCreator('/2024.2-AGIS2/docs', '777'),
            routes: [
              {
                path: '/2024.2-AGIS2/docs/category/detalhamento-do-projeto',
                component: ComponentCreator('/2024.2-AGIS2/docs/category/detalhamento-do-projeto', '0f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/2024.2-AGIS2/docs/category/processo-de-desenvolvimento-de-software',
                component: ComponentCreator('/2024.2-AGIS2/docs/category/processo-de-desenvolvimento-de-software', 'ce9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/2024.2-AGIS2/docs/category/sobre-o-medmannager',
                component: ComponentCreator('/2024.2-AGIS2/docs/category/sobre-o-medmannager', '592'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/2024.2-AGIS2/docs/intro',
                component: ComponentCreator('/2024.2-AGIS2/docs/intro', '002'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/2024.2-AGIS2/docs/processo-de-desenvolvimento/modelagem_do_processo',
                component: ComponentCreator('/2024.2-AGIS2/docs/processo-de-desenvolvimento/modelagem_do_processo', '85e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/2024.2-AGIS2/docs/processo-de-desenvolvimento/processo_de_desenvolvimento',
                component: ComponentCreator('/2024.2-AGIS2/docs/processo-de-desenvolvimento/processo_de_desenvolvimento', 'b77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/2024.2-AGIS2/docs/sobre-o-medmannager/equipe',
                component: ComponentCreator('/2024.2-AGIS2/docs/sobre-o-medmannager/equipe', '02f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/2024.2-AGIS2/docs/sobre-o-projeto/arquitetura',
                component: ComponentCreator('/2024.2-AGIS2/docs/sobre-o-projeto/arquitetura', '41e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/2024.2-AGIS2/docs/sobre-o-projeto/backlog',
                component: ComponentCreator('/2024.2-AGIS2/docs/sobre-o-projeto/backlog', '934'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/2024.2-AGIS2/docs/sobre-o-projeto/lista_de_requisitos',
                component: ComponentCreator('/2024.2-AGIS2/docs/sobre-o-projeto/lista_de_requisitos', '261'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/2024.2-AGIS2/docs/sobre-o-projeto/processo_requisitos',
                component: ComponentCreator('/2024.2-AGIS2/docs/sobre-o-projeto/processo_requisitos', '2d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/2024.2-AGIS2/docs/sobre-o-projeto/regras_de_negocio',
                component: ComponentCreator('/2024.2-AGIS2/docs/sobre-o-projeto/regras_de_negocio', 'b86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/2024.2-AGIS2/docs/sobre-o-projeto/visao',
                component: ComponentCreator('/2024.2-AGIS2/docs/sobre-o-projeto/visao', 'aa5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/2024.2-AGIS2/',
    component: ComponentCreator('/2024.2-AGIS2/', '78f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
