import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Função que inicializa o Angular, ela recebe o componente principal e as configs globais
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
