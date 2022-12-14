import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Prop {
  article: Post
}

const Article = ({ article }: Prop) => {
  return (
    <article key={article.id}>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <p>{article.body}</p>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
