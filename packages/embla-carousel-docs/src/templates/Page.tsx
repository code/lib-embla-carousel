import React, { PropsWithChildren, useMemo } from 'react'
import { graphql } from 'gatsby'
import { Seo } from 'components/Seo/Seo'
import maskable from 'assets/images/maskable.png'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import { EditPage } from 'components/Page/EditPage'
import { Pagination } from 'components/Page/Pagination'
import { Breadcrumbs } from 'components/Page/Breadcrumbs'
import { SKIP_TO_CONTENT_ID } from 'components/TabAccess/SkipToContent'
import { removeProtocol } from 'utils/removeProtocol'
import { Mdx } from 'components/Mdx/Mdx'
import {
  PageTemplatePropType,
  PageTemplateSeoPropType as HeadPropType,
} from 'consts/pageTemplates'

export const query = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      tableOfContents
      frontmatter {
        title
        description
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`

export const Head = (props: HeadPropType) => {
  const { data, pageContext } = props
  const { siteUrl, author } = useSiteMetadata()
  const { title, description, date } = data.mdx.frontmatter
  const dateToISOString = useMemo(
    () => new Date(`${date} UTC`).toISOString(),
    [date],
  )

  return (
    <Seo
      title={title}
      description={description}
      url={`${siteUrl}${pageContext.slug}`}
    >
      <script type="application/ld+json">
        {`
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "name": "${removeProtocol(siteUrl)}",
        "description": "${description}",
        "url": "${siteUrl}${pageContext.slug}",
        "headline": "${title}",
        "image": "${siteUrl}/share-image.png",
        "datePublished": "${dateToISOString}",
        "dateModified": "${dateToISOString}",
        "author": {
          "@type": "Person",
          "name": "${author}"
        },
        "publisher": {
          "@type": "Organization",
          "name": "${author}",
          "logo": {
            "@type": "ImageObject",
            "width": "512",
            "height": "512",
            "url": "${siteUrl}${maskable}"
          }
        }
      }
    `}
      </script>
    </Seo>
  )
}

export type PropType = PropsWithChildren<PageTemplatePropType>

const Page = (props: PropType) => {
  const { pageContext, children } = props
  const { next, previous, filePath, id } = pageContext

  return (
    <>
      <Breadcrumbs id={id} />
      <article id={SKIP_TO_CONTENT_ID}>
        <Mdx>{children}</Mdx>
      </article>
      <EditPage pageUrl={filePath} />
      <Pagination previous={previous} next={next} />
    </>
  )
}

export default Page
