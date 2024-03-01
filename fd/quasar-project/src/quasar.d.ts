/* eslint-disable */

// Forces TS to apply `@quasar/app-vite` augmentations of `quasar` package
// Removing this would break `quasar/wrappers` imports as those typings are declared
//  into `@quasar/app-vite`
// As a side effect, since `@quasar/app-vite` reference `quasar` to augment it,
//  this declaration also apply `quasar` own
//  augmentations (eg. adds `$q` into Vue component context)
/// <reference types="@quasar/app-vite" />

declare module 'quasar' {
    import { DefineComponent } from 'vue';
  
    // Declare types for Quasar components
    export const QCard: DefineComponent;
    export const QCardSection: DefineComponent;
    export const QCardTitle: DefineComponent;
    export const QCardText: DefineComponent;
    export const QImg: DefineComponent;
  export const QBtn: DefineComponent;
  export const QCardActions: DefineComponent;
  export const QCardGroup: DefineComponent;
    // Add more components as needed
  
    // Declare types for Quasar plugins
    // For example:
    // export const QDialog: DefineComponent;
  }