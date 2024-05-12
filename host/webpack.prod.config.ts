import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  remotes: [
    ['shop', 'http://localhost:3000/shop'],
    ['cart', 'http://localhost:3000/cart'],
    ['about', 'http://localhost:3000/about'],
  ],
});
