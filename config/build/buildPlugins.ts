import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildPaths } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins(
    { htmlPath }: BuildPaths,
    isDev: boolean
): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: htmlPath,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
