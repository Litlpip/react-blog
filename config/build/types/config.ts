export type BuildMode = 'development'|'production'

export type BuildPaths = {
    entry: string
    buildPath: string
    htmlPath: string
}

export type BuildEnv = {
    mode: BuildMode
    port: number
}

export type BuildOptions = {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
}