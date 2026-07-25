/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  
  vite: {
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/scss/mixin" as *;
            @use "@/scss/variable" as *;
            @use "@/scss/typography" as *;
            @use "@/scss/hover" as *;
            @use "@/scss/link" as *;
            @use "@/scss/icons" as *;
          `,
        },
      },
    },
    resolve: {
      alias: {
        '@/': `${resolve(__dirname, 'src')}/`,
      },
    },
  },
};

export default nextConfig;
