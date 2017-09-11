import {AuthGuard} from "./security/auth.guard";
import {Permission} from "../class/permission";
import {StorageService} from "./storage.service"


export const PAGES_MENU = [
  {
    path: 'pages',
    children: [

      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'merchant',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Merchant', // menu title
            icon: 'ion-android-people', // menu icon
            selected: false,
            expanded: false,
            order: 50
          }
        },
        children: [
          {
            path: 'detail',
            data: {
              menu: {
                title: 'Detail',
                icon: 'ion-arrow-up-a', // menu icon
                hidden: false,
              }
            },

          },
          {
            path: 'register',
            data: {
              menu: {
                title: 'Register',
                icon: 'ion-arrow-up-a', // menu icon
                hidden: false,
              }
            },

          },
          {
            path: 'list',
            data: {
              menu: {
                title: 'List',
                icon: 'ion-ios-list', // menu icon
              }
            }
          }

        ]
      },
      {
        path: 'user',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'User', // menu title
            icon: 'ion-android-person', // menu icon
            selected: false,
            expanded: false,
            order: 55
          }
        },
        children: [
          {
            path: 'detail',
            data: {
              menu: {
                title: 'Detail',
                icon: 'ion-arrow-up-a', // menu icon
                hidden: false,
              }
            }

          },
          {
            path: 'list',
            data: {
              menu: {
                title: 'List',
                icon: 'ion-ios-list', // menu icon
                hidden: false,
              }
            }
          }

        ]
      },
      {
        path: 'transaction',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Transactions', // menu title
            icon: 'ion-arrow-swap', // menu icon
            selected: false,
            expanded: false,
            order: 75
          }
        },
        children: [
          {
            path: 'all',
            data: {
              menu: {
                title: 'All',
                icon: 'ion-ios-list', // menu icon
              }
            }
          }

        ]
      },
      {
        path: 'report',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Reports', // menu title
            icon: 'ion-arrow-graph-up-right', // menu icon
            selected: false,
            expanded: false,
            order: 100
          }
        },
        children: [
          {
            path: 'agent',
            data: {
              menu: {
                title: 'AgentReport',
                icon: 'ion-briefcase', // menu icon
              }
            }
          },
          {
            path: 'user',
            data: {
              menu: {
                title: 'UserReport',
                icon: 'ion-person', // menu icon
              }
            }
          },
        ]
      },
      {
        path: 'setting',
        data: {
          menu: {
            title: 'Setting',
            icon: 'ion-android-settings',
            selected: false,
            expanded: false,
            order: 0,
            hidden: false,
          }
        },
        children: [
          {
            path: 'permission',
            data: {
              menu: {
                title: 'Permission',
                icon: 'ion-checkmark', // menu icon
              }
            }
          },
        ]
      },
     /* {
        path: 'editors',
        data: {
          menu: {
            title: 'general.menu.editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'general.menu.ck_editor',
              }
            }
          }
        ]
      },
      {
        path: 'components',
        data: {
          menu: {
            title: 'general.menu.components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'general.menu.tree_view',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'general.menu.charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'general.menu.chartist_js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'general.menu.ui_features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'general.menu.typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'general.menu.buttons',
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'general.menu.icons',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'general.menu.modals',
              }
            }
          },
          {
            path: 'slim',
            data: {
              menu: {
                title: 'Slim loading bar',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'general.menu.grid',
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'general.menu.form_elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'general.menu.form_inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'general.menu.form_layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'general.menu.tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'general.menu.basic_tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'general.menu.smart_tables',
              }
            }
          },
          {
            path: 'datatables',
            data: {
              menu: {
                title: 'Data Tables',
              }
            }
          },
           {
             path: 'hottables',
             data: {
               menu: {
                 title: 'Hot Tables',
               }
             }
           }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'general.menu.maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'general.menu.google_maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'general.menu.leaflet_maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'general.menu.bubble_maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'general.menu.line_maps',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'general.menu.login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'general.menu.register'
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.menu_level_1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'general.menu.menu_level_1_2_1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.external_link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }*/
    ]
  }
];
