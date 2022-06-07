export default function DashboardTitle(props) {
  return (
    <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">{props.name}</h1>
    </div>
  )
}