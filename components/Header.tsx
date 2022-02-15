

function Header() {
    return (
        <>
            <div className="container flex m-4 justify-between">
                <h1>Budget</h1>
                <div className="flex m-2">
                    <button type="button" className="bg-violet-500 px-4 py-2 m-2 rounded-full">Add Budget</button>
                    <button type="button" className="bg-violet-300 px-4 py-2 m-2 rounded-full">Add Expense</button>
                </div>
            </div>
        </>
    )
}

export default Header;