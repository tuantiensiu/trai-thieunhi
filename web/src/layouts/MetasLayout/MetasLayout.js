import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const MetasLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.metas()} className="rw-link">
            Thông tin chi tiết
          </Link>
        </h1>
        {/* <Link to={routes.newMeta()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Meta
        </Link> */}
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default MetasLayout
