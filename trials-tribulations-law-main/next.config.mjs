import withMDX from '@next/mdx';

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Custom webpack config to support video files (mp4, webm)
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
};

export default withMDXConfig(nextConfig);
