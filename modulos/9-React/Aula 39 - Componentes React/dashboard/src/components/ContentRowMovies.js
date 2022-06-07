import SmallCard from "./SmallCard"

export default function ContentRowMovies(props) {
  const smallCardProperties = [
    { title: "Movies in Database", color: "primary", ammount: 21, icon: "fa-film" },
    { title: "Total Awards", color: "success", ammount: 79, icon: "fa-award" },
    { title: "Actors Quantity", color: "warning", ammount: 49, icon: "fa-user-check" },
    {}
  ]

  return (
    <div className="row">
      {smallCardProperties.map(
        (properties, index) => <SmallCard key={index} {...properties} />
      )}
    </div>
  )
}