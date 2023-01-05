const Pines=()=>{
    return (
        <>
            <div className="form-floating mb-3">
                <input required type="text" className="form-control" name='name' id="name" placeholder="3205415512"/>
                <label htmlFor="name">Nombre</label>
            </div>
            <div className="form-floating mb-3">
                <input required type="email" className="form-control" name="email" id="email" placeholder="3205415512"/>
                <label htmlFor="email">e-mail</label>
            </div>
            <div className="form-floating mb-3">
                <select className="form-select" id="pinEntnamead" name="entidad" aria-label="Floating label select example">
                    <option value="Netflix">Netflix</option>
                    <option value="HBO">HBO</option>
                    <option value="Disney">Disney</option>
                </select>
                <label htmlFor="pinEntnamead">Typo</label>
            </div>
        </>
    )
}
export default Pines