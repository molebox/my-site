import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

export const ROOT = process.cwd();
export const POSTS_PATH = path.join(process.cwd(), "src/content/posts");
export const ARCHIVE_PATH = path.join(process.cwd(), "src/content/archive");
export const SHORT_STORIES_PATH = path.join(process.cwd(), "src/content/short-stories");

export type Frontmatter = {
    slug: string;
    title: string;
    category: string;
    description: string;
    published: boolean
}

export function getFileContent(contentPath: string, filename: string) {
    return fs.readFileSync(path.join(contentPath, filename), "utf8");
};

const getCompiledMDX = async (content: string) => {
    if (process.platform === "win32") {
        process.env.ESBUILD_BINARY_PATH = path.join(
            ROOT,
            "node_modules",
            "esbuild",
            "esbuild.exe"
        );
    } else {
        process.env.ESBUILD_BINARY_PATH = path.join(
            ROOT,
            "node_modules",
            "esbuild",
            "bin",
            "esbuild"
        );
    }
    // Add your remark and rehype plugins here
    const remarkPlugins = [];
    const rehypePlugins = [];

    try {
        return await bundleMDX(content, {
            xdmOptions(options) {
                options.remarkPlugins = [
                    ...(options.remarkPlugins ?? []),
                    ...remarkPlugins,
                ];
                options.rehypePlugins = [
                    ...(options.rehypePlugins ?? []),
                    ...rehypePlugins,
                ];

                return options;
            },
        });
    } catch (error) {
        throw new Error(error);
    }
};

export const getSingleArticle = async (contentPath: string, slug: string) => {
    const source = getFileContent(contentPath, `${slug}.mdx`);
    const allArticles = getAllArticles(contentPath);
    const articleIndex = allArticles.findIndex(article => article.slug === slug);
    const previousArticle = allArticles[articleIndex - 1];
    const nextArticle = allArticles[articleIndex + 1];

    const { code, frontmatter } = await getCompiledMDX(source);

    return {
        frontmatter,
        code,
        previousArticle: previousArticle || null,
        nextArticle: nextArticle || null,
    };
};

export const getAllArticles = (contentPath: string) => {
    return fs
        .readdirSync(POSTS_PATH)
        .filter((path) => /\.mdx?$/.test(path))
        .map((fileName) => {
            const source = getFileContent(contentPath, fileName);
            const slug = fileName.replace(/\.mdx?$/, "");
            const { data } = matter(source);

            return {
                frontmatter: data,
                slug: slug,
            };
        });
};