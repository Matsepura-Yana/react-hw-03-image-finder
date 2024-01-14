export const Searchbar = onSubmit1 => {
    return (
        <header className="searchbar">
            <form className="form">
                <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit" className="button" onSubmit={onSubmit1}>
                    <span className="button-label">Search</span>
                </button>
            </form>
        </header>
    )
}
