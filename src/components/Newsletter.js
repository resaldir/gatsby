import React, { Component } from 'react'
import NewsletterForm from './NewsletterForm'

class Newsletter extends Component {
  render() {
    return (
      <>
        <h1>Stay in touch</h1>
        <p>Like the posts you see here? Sign up to get notified about new ones.</p>
        <NewsletterForm />
        <p>
          For anything else, email me at <a href="mailto:resaldi97@outlook.com">resaldi97@outlook.com</a>.
        </p>
      </>
    )
  }
}

export default Newsletter
