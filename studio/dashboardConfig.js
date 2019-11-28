export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ddf46a9eb79c582b9e1851d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-irbp78m2',
                  apiId: 'f722b075-3e17-44a3-be51-c44d395246d8'
                },
                {
                  buildHookId: '5ddf46a99e61a5ab2d2072ac',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ogiiqa3y',
                  apiId: '057b4d10-0932-427c-9775-c93ce60b18e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wuichen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ogiiqa3y.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
