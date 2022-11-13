const fs = require('node:fs')
const path = require('node:path')

console.log('[·] Starting RSS feed generation...')

const config = {
  title: 'maltemo.github.io',
  description: 'maltemo.github.io',
  link: 'https://maltemo.github.io',
  blogDirectoryUrl: 'https://maltemo.github.io/blog-posts',
  blogDirectoryPath: path.join(__dirname, 'blog-posts'),
  feedOutput: path.join(__dirname, 'feed.xml')
}

const createFeedTemplate = (
  posts = ``,
  now = new Date(),
  title = config.title,
  description = config.description,
  link = config.link
) => `
<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>
      <![CDATA[${title}]]>
    </title>
    <description>
      <![CDATA[${description}]]>
    </description>
    <link>${link}</link>
    <generator>RSS for Node</generator>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
    <atom:link href="${link}/feed.xml" rel="self" type="application/rss+xml" />
    ${posts}
  </channel>
</rss>
`

const createPostTemplate = (title, link, pubDate) => `
    <item>
      <title>
        <![CDATA[${title}]]>
      </title>
      <link>${link}</link>
      <pubDate>${pubDate}</pubDate>
    </item>
`

const tap = (x) => { console.log(x); return x }

fs.promises.readdir(config.blogDirectoryPath)
  .then(postFiles => (
    postFiles.map(file => ({
      fileName: file,
      metadata: fs.statSync(path.join(config.blogDirectoryPath, file))
    })))
  )
  // .then(tap)
  .then(async postFiles => {
    return createFeedTemplate(
    postFiles.map(post => createPostTemplate(
      post.fileName.split('.')[0],
      `${config.blogDirectoryUrl}/${post.fileName}`,
      (new Date(post.metadata.birthtime)).toUTCString())
    ))
  }
  )
  .then(feedTemplate => fs.promises.writeFile(config.feedOutput, feedTemplate))
  .then(_ => console.log(`[+] new feed created at ${config.feedOutput}`))
  .catch(e => console.error('[!] oupsi, something went wrong!', e))