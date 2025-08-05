// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
$xl: 87.5em;
$lg: 60em;
$md: 40em; 
$sm: 28em;
$xs: 20em; 
$primary-color: #2b2b2b;
$secondary-color: #fffcf4;
$third-color: #ff9d41;
  `,
  },
};

export default nextConfig;
