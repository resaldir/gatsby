import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SimpleListing from '../components/SimpleListing'
import NewsletterForm from '../components/NewsletterForm'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'
import publications from '../../data/publications'
import speaking from '../../data/speaking'
import podcasts from '../../data/podcasts'

class Index extends Component {
  render() {
    const latestPostEdges = this.props.data.latest.edges
    const popularPostEdges = this.props.data.popular.edges
    const published = publications.filter((article, i) => i < 6)

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Developer, designer, writer`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <h1>
              Hi, I'm Saldi. I build <strong className="pink">website and mobile app</strong> but
              I currently <strong className="pink">lead the infrastructure team</strong>. Seems a bit weird, right?
            </h1>
            <p>
              Well, I'm also a <strong>developer, designer,</strong> and <strong>writer</strong>. I created
              this site to document everything I learn, and share a bit of myself with the world. 
              Building simple things for complex interfaces is what I enjoy most about my work. 
              I am also interested in exploring new worlds.
            </p>
            <Link className="button" to="/me" target="_blank">
              About me
            </Link>
            <a className="button" href="https://github.com/saldiwe" target="_blank">
              GitHub
            </a>
            <a className="button" href="https://twitter.com/saldiwe" target="_blank">
              Twitter
            </a>
            <a className="button" href="https://www.instagram.com/saldiwe/" target="_blank">
              Instagram
            </a>
            <a className="button" href="https://facebook.com/saldiwe" target="_blank">
              Facebook
            </a>
          </div>
        </div>

        <div className="container">
          <section className="section">
            <h2>Latest Articles</h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>Most Popular</h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>

          <section className="section">
            <h2>
              Published Articles{' '}
              <Link className="view-all" to="/publications">
                View all
              </Link>
            </h2>
            <SimpleListing simple data={published} />
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
