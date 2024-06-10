// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  usingZeus: [
    'about-zeus',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'for-users/getting-started/before-using-zeus',
        'for-users/getting-started/remote-or-embedded',
        'for-users/getting-started/tips',
      ],
    },
    {
      type: 'category',
      label: 'Embedded Node',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'for-users/embedded-node/backup-and-recovery',
        'for-users/embedded-node/lightning-onboarding',
        'for-users/embedded-node/privacy',
        'for-users/embedded-node/open-channel-to-embedded-node',
        'for-users/embedded-node/trusted-funding',
        'for-users/embedded-node/faq'
      ],
    },
    {
      type: 'category',
      label: 'Remote connections',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'for-users/remote-connections/umbrel',
        'for-users/remote-connections/citadel',
        'for-users/remote-connections/raspiblitz',
        'for-users/remote-connections/mynode',
        'for-users/remote-connections/startos',
        'for-users/remote-connections/nodl',
        'for-users/remote-connections/btcpay',
        'for-users/remote-connections/lndhub',
      ],
    },
    {
      type: 'category',
      label: 'Using ZEUS',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'for-users/using-zeus/overview','for-users/using-zeus/home', 'for-users/using-zeus/accounts', 'for-users/using-zeus/profiles',
        'for-users/using-zeus/channels',
      ],
    }
  ],
  lsp: [
    'lsp/intro',
    'lsp/wrapped-invoices',
    'lsp/fees',
    {
      type: 'category',
      label: 'APIs',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
         'lsp/api/flow',
         'lsp/api/lsps1'
      ],
    },
  ],
  lightningAddress: [
    'lightning-address/intro',
    'lightning-address/fees',
  ],
  pos: [
    'pos/overview',
    'pos/setup',
    'pos/checkout',
  ],
  contribute: [
    'contribute/how-you-can-contribute', 'contribute/code', 'contribute/design', 'contribute/write', 'contribute/translate',
    'contribute/donate', 'contribute/other',

  ],

};

module.exports = sidebars;
