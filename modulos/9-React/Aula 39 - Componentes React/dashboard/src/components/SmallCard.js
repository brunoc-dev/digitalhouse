import PropTypes from "prop-types"

function SmallCard(props) {
  return (
    <article className="col-md-4 mb-4">
      <div className={'card border-left-' + props.color + ' shadow h-100 py-2'}>
        <section className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <header className={'text-xs font-weight-bold text-' + props.color + ' text-uppercase mb-1'}>
                {props.title}
              </header>

              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {props.ammount}
              </div>
            </div>

            <aside className="col-auto">
              <i className={'fas ' + props.icon + ' fa-2x text-gray-300'}></i>
            </aside>
          </div>
        </section>
      </div>
    </article>
  )
}

SmallCard.defaultProps = {
  title: 'No title',
  color: 'primary',
  ammount: 0,
  icon: 'fa-clipboard-list'
}

SmallCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  ammount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  icon: PropTypes.string.isRequired
}

export default SmallCard