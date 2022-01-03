export const Sec3 = ({ e }) => {
    if (e) {
        return <div>
            <h1>Information</h1>
            <div>
                <div>
                    <h2 id="title" >{e.title}</h2>
                    <h3>Ingredients : {e.ingredients}</h3>
                    <h3>Time : {e.time}</h3>
                    <h3><h3 id="ind">Instructions</h3> {e.instructions}</h3>
                </div>
                <div>
                    <img src={e.image} alt="image" />
                </div>
            </div>
        </div>
    }
    return <></>
}