// import React from "react";
// import fs from "fs";

// const Sitemap = () => {};

// export const getServerSideProps = ({ res }) => {
//   const baseUrl = {
//     development: "http://localhost:3000",
//     production: "https://ungarmichael.com",
//   }[process.env.NODE_ENV];

//   const staticPages = fs
//     .readdirSync("pages")
//     .filter((staticPage) => {
//       return ![
//         "_app.js",
//         "_document.js",
//         "404.jsx",
//         "sitemap.xml.js",
//       ].includes(staticPage);
//     })
//     .map((staticPagePath) => {
//       return `${baseUrl}/${staticPagePath}`;
//     });

//     const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       ${staticPages
//         .map((url) => {
//           return `
//             <url>
//               <loc>${url}</loc>
//               <lastmod>${new Date().toISOString()}</lastmod>
//               <changefreq>daily</changefreq>
//               <priority>1.0</priority>
//             </url>
//           `;
//         })
//         .join("")}
//     </urlset>
//   `;

//   res.setHeader("Content-Type", "text/xml");
//   res.write(sitemap);
//   res.end();

//   return {
//     props: {},
//   };
// };

// export default Sitemap;

import React from "react";
import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://ungarmichael.com",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "404.jsx",
        "sitemap.xml.js",
        "content",
        "index.jsx",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath.split('.').slice(0, -1).join('.')}`;
    });

  console.log(staticPages);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
