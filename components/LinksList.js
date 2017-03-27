import Router from 'next/router'
import Pagination from 'rc-pagination'
import LinkCard from './LinkCard'
import PageInfo from './PageInfo'
import Footer from '../components/Footer'

export default (
  { data: { links, isLastPage, totalLinks, perPage, page }, url: { query } }
) => (
  <main>
    <PageInfo query={query} page={page} totalLinks={totalLinks} />
    <ul className='list'>
      {links.map(link => <LinkCard key={link._id} link={link} />)}
    </ul>
    <div className='pagination'>
      <Pagination
        total={totalLinks}
        pageSize={perPage}
        current={Number(page)}
        onChange={(current, pageSize) => {
          const start = query && query.start
          const end = query && query.end
          if (start && end) {
            Router.push(`/?start=${start}&end=${end}&page=${current}`)
              .then(() => window.scrollTo(0, 0))
              .catch(e => console.log(e))
          } else {
            Router.push(`/?page=${current}`)
              .then(() => window.scrollTo(0, 0))
              .catch(e => console.log(e))
          }
        }}
      />
    </div>
    <Footer />
    <style jsx>
      {
        `
          main {
            padding-top: 70px;
            margin-left: 200px;
          }
          .list {
            list-style-type: none;
            margin: 0 auto;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          .pagination{
            display: flex;
            justify-content: center;
          }
          @media(max-width: 720px) {
            main {
              margin: 0 20px;
            }
          }
          @media(max-width: 520px) {
            .info span {
              flex-wrap: wrap;
            }
            .filterDetails {
              margin-top: 10px;
            }
          }
        `
      }
    </style>
  </main>
)
