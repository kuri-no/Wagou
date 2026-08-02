/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,

  sassOptions: {
    additionalData: `
      @use "@/scss/mixin" as *;
      @use "@/scss/variable" as *;
      @use "@/scss/typography" as *;
      @use "@/scss/hover" as *;
      @use "@/scss/icons" as *;
    `,
  },
};

export default nextConfig;
