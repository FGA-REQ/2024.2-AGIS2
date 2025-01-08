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
    component: ComponentCreator('/2024.2-AGIS2/docs', 'e4b'),
    routes: [
      {
        path: '/2024.2-AGIS2/docs',
        component: ComponentCreator('/2024.2-AGIS2/docs', '52e'),
        routes: [
          {
            path: '/2024.2-AGIS2/docs',
            component: ComponentCreator('/2024.2-AGIS2/docs', '820'),
            routes: [
              {
                path: '/2024.2-AGIS2/docs/category/sobre-o-agis',
                component: ComponentCreator('/2024.2-AGIS2/docs/category/sobre-o-agis', 'e13'),
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
                path: '/2024.2-AGIS2/docs/sobre-o-agis/equipe',
                component: ComponentCreator('/2024.2-AGIS2/docs/sobre-o-agis/equipe', '818'),
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
