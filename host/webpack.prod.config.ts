import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  remotes: [
    ['shop', 'https://apaul4ariqt.github.io/angularpages/shop'],
    ['cart', 'https://apaul4ariqt.github.io/angularpages/cart'],
    ['about', 'https://apaul4ariqt.github.io/angularpages/about'],
  ],
});
