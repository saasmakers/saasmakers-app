// NODE
import fs from "fs";
import path from "path";

// NPM
import merge from "lodash/merge";
import { defineNuxtConfig } from "nuxt/config";

// CONFIGURATION
import * as configCommon from "./config/common.json";
import * as configProduction from "./config/production.json";
import * as configDevelopment from "./config/development.json";

// PACKAGE
import * as projectPackage from "./package.json";

/**************************************************************************
 * CONFIGURATION
 * ************************************************************************* */

const CONFIG = (function () {
  const _config = {};

  // Load common configuration
  merge(_config, configCommon);

  // Load configuration for environment
  if (process.env.NODE_ENV === "production") {
    merge(_config, configProduction);
  } else {
    merge(_config, configDevelopment);

    if (fs.existsSync(path.join(__dirname, "/config/local.json")) === true) {
      merge(_config, require("./config/local.json"));
    }
  }

  return _config;
})();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // https://github.com/nuxt/telemetry
  telemetry: false,

  srcDir: "src/",

  app: {
    head: {
      title: "SaaS Makers",

      htmlAttrs: {
        lang: "en"
      },

      meta: [
        {
          charset: "utf-8"
        },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },

        {
          name: "format-detection",
          content: "telephone=no"
        },

        {
          hid: "description",
          name: "description",
          content:
            "Chaque mois, nous parlons d’un sujet SaaS avec un expert du domaine."
        }
      ],

      link: [
        {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        },

        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png"
        },

        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/favicons/favicon-512x512.png"
        },

        {
          rel: "icon",
          type: "image/png",
          sizes: "256x256",
          href: "/favicons/favicon-256x256.png"
        },

        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/favicons/favicon-192x192.png"
        },

        {
          rel: "icon",
          type: "image/png",
          sizes: "144x144",
          href: "/favicons/favicon-144x144.png"
        },

        {
          rel: "icon",
          type: "image/png",
          sizes: "128x128",
          href: "/favicons/favicon-128x128.png"
        },

        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicons/favicon-32x32.png"
        }
      ]
    }
  },

  modules: [
    "nuxt-svgo",
    "nuxt-lodash",
    "@nuxtjs/sitemap",
    // '@nuxtjs/robots',
    "@nuxtjs/eslint-module"
  ],

  // (Module)
  svgo: {
    svgo: true,
    defaultImport: "component",
    autoImportPath: false,
    svgoConfig: {
      multipass: true,
      removeViewBox: false
    }
  },

  // (Module) Sitemap: https://nuxtseo.com/sitemap/getting-started/installation
  site: {
    url: CONFIG.url.saasmakers_web
  },

  // (Module) Robots: https://nuxt.com/modules/robots
  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: `${CONFIG.url.saasmakers_web}/sitemap.xml`
  },

  runtimeConfig: {
    public: {
      baseURL: "/jellow",
      URL: CONFIG.url,
      PLATFORMS: CONFIG.platforms,
      AUTHOR: projectPackage.author
    }
  },

  // extract CSS
  // https://github.com/nuxt/nuxt/pull/21573
  experimental: {
    inlineSSRStyles: false
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./assets/stylesheets/all.scss" as *;'
        }
      }
    }
  }
});
