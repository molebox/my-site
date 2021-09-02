import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllArticles, getSingleArticle, SHORT_STORIES_PATH } from "utlis/mdx";
import { components } from "utlis/shortcodes";


const ShortStory = ({ code, frontmatter }) => {
    const Component = React.useMemo(() => getMDXComponent(code), [code]);

    return (
        <div>
            <Component components={components} />
        </div>
    );
};

// Rendered at build time (server-side) and passes the props
// through to the page
export const getStaticProps = async ({ params }) => {
    const post = await getSingleArticle(SHORT_STORIES_PATH, params.slug);
    return {
        props: { ...post },
    };
};

// Rendered at build time (server-side) Defines a list of dymanic paths to be rendered
// at build time
export const getStaticPaths = async () => {
    const paths = getAllArticles(SHORT_STORIES_PATH).map(({ slug }) => ({ params: { slug } }));
    return {
        paths,
        fallback: false,
    };
};

export default ShortStory;