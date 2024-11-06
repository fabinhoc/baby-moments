import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';

export type MessageLanguages = keyof typeof messages;
// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = (typeof messages)['en-US'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-interface */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-interface */

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'pt-BR',
    legacy: false,
    messages,
    datetimeFormats: {
      'en-US': {
        short: {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        },
        long: {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        },
        extended: {
          day: '2-digit',
          month: 'long',
        },
      } as const,
      'pt-BR': {
        short: {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        },
        long: {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        },
        extended: {
          day: '2-digit',
          month: 'long',
        },
      } as const,
    },
  });

  // Set i18n instance on app
  app.use(i18n);
});
