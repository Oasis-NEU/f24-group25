import { useNavigate } from "react-router-dom";

export default function DashboardElement({ image_base64, title, location, semesters }) {
  const programNavigate = useNavigate()
  return (

    <div className="card bg-base-100 w-96 shadow-xl">
      <figure
        style={{
          maxHeight: "200px",
          width: "100%",
          overflow: "clip"
        }}
      >
        <img
          src={`data:image/jpeg;base64,${image_base64}`}
          alt={location} 
          style={{
            width: "100%",
            height: "auto"
          }}/>
      </figure>

      <div className="card-body items-center text-center text-black">
        <h2 className="card-title cent">{title}</h2>
        <p>{location}</p>
        <p>Available: {semesters}</p>
        <div className="card-actions">
          <button onClick={() => programNavigate("/program-info")}  className="btn btn-accent text-white">Explore</button>
        </div>
      </div>


    </div >
  )
}