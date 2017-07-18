import DependencyContainer from './dependency-container';
import PlayerFacade from './player-facade';

import defaultModules from './default-modules';


export const container = DependencyContainer.createContainer();
container.register(defaultModules);

const additionalModules = {};


export function registerModule(id, config) {
  additionalModules[id] = config;
}

export default function create(params) {
  const scope = container.createScope();

  const additionalModuleNames = Object.keys(additionalModules);

  if (additionalModuleNames.length) {
    additionalModuleNames.forEach(moduleName => scope.registerClass(moduleName, additionalModules[moduleName]));
  }

  const rootNode = document.createElement('div');

  return new PlayerFacade(rootNode, params, scope, additionalModuleNames);
}