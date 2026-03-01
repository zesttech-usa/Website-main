import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type, image, url, schema, noindex }) => {
    const siteTitle = title ? `${title} | Zest Technologies` : 'Zest Technologies | Premium IT Solutions';
    const siteDescription = description || 'Zest Technologies provides premium IT solutions, staffing, and technical expertise.';
    const siteUrl = url ? `https://zesttech.com${url}` : 'https://zesttech.com';

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            {noindex && <meta name="robots" content="noindex, nofollow" />}
            <link rel="canonical" href={siteUrl} />

            {/* OpenGraph tags */}
            <meta property="og:type" content={type || 'website'} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:url" content={siteUrl} />
            {(image || name) && <meta property="og:site_name" content={name || 'Zest Technologies'} />}
            {image && <meta property="og:image" content={image} />}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name || 'Zest Technologies'} />
            <meta name="twitter:card" content={type === 'article' ? 'summary_large_image' : 'summary'} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            {image && <meta name="twitter:image" content={image} />}

            {/* JSON-LD Schema */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
