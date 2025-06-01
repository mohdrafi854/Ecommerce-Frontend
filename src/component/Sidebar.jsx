const Sidebar = ({handleMenCategory, handleRating, handleClear, handleSort}) => {
    return(
        <aside className="col-md-3 sidebar">
            <div className="sidebar-wrapper">
            <div className="d-flex mb-3">
                <h6>Filter</h6>
                <button type="button" className="ms-auto btn p-0" style={{lineHeight:"1"}} onClick={handleClear}>Clear</button>
            </div>
            <div className="mb-4">
                <h6>Price</h6>
                <input type="range" name="" id="" />
            </div>
            <div className="mb-4">
                <h6>Category</h6>
                <label htmlFor="menCat">
                    <input type="checkbox" id="menCat" value={"Men"} className="me-1" onChange={handleMenCategory} />
                    Men Clothing
                </label> <br />
                <label htmlFor="menTwoCat">
                    <input type="checkbox" id="menTwoCat" value={"Men"} className="me-1" onChange={handleMenCategory} />
                    Men Clothing
                </label>
            </div>
            <div className="mb-4">
                <h6>Rating</h6>
                <label htmlFor="starFour">
                    <input type="radio" value={"4"} name="rating" id="starFour" className="me-1" onChange={handleRating} />
                    4 Star &amp; above
                </label><br />
                <label htmlFor="starthree">
                    <input type="radio" value={"3"} name="rating" id="starthree" className="me-1" onChange={handleRating} />
                    3 Star &amp; above
                </label><br />
                <label htmlFor="startwo">
                    <input type="radio" value={"2"} name="rating" id="startwo" className="me-1" onChange={handleRating} />
                    2 Star &amp; above
                </label><br />
                <label htmlFor="starOne">
                    <input type="radio" value={"1"} name="rating" id="starOne" className="me-1" onChange={handleRating} />
                    1 Star &amp; above
                </label>
            </div>
            <div>
                <h6>Sort by</h6>
                <label htmlFor="sortBylow">
                    <input type="radio" value={"lowtohigh"} name="sortByPrice" id="sortBylow" className="me-1" onChange={handleSort} />
                    Price - Low to High
                </label><br />
                <label htmlFor="sortByHigh">
                    <input type="radio" value={"hightolow"} name="sortByPrice" id="sortByHigh" className="me-1" onChange={handleSort} />
                    Price - High to Low
                </label>
            </div>
            </div>
        </aside>
    )
}

export default Sidebar