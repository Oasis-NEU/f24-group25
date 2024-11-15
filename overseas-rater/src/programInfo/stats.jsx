// not sure how to derive stats, but just wanted something for myself to remember to code this

function Stats() {
  return (
    // star rating, figure out how to derive from database.
    <div className="rating">
      <input type="radio" name="rating-1" className="mask mask-star" />
      <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
      <input type="radio" name="rating-1" className="mask mask-star" />
      <input type="radio" name="rating-1" className="mask mask-star" />
      <input type="radio" name="rating-1" className="mask mask-star" />
    </div>
    // num reviews
    // breakdown of reviews? (% 5 stars, % 4 stars, ...)
  )
}