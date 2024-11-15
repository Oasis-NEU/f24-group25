// not sure how to derive stats, but just wanted something for myself to remember to code this

export default function Stats() {
  return (
    <div className="card bg-base-100 shadow-x1">
      <div className="card-body font-body text-black">
        <h2 className="card-title font-body text-accent">Stats</h2>
        <div className="rating">
          <input type="radio" name="rating-1" className="mask mask-star bg-accent" />
          <input type="radio" name="rating-1" className="mask mask-star bg-accent" defaultChecked />
          <input type="radio" name="rating-1" className="mask mask-star bg-accent" />
          <input type="radio" name="rating-1" className="mask mask-star bg-accent" />
          <input type="radio" name="rating-1" className="mask mask-star bg-accent" />
        </div>
      </div>
    </div>
    // star rating, figure out how to derive from database.
    // num reviews
    // breakdown of reviews? (% 5 stars, % 4 stars, ...)
  )
}