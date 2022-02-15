import Button from "./Button"

function Header() {
    return (
        <>
            <div className="container flex m-4 justify-between items-center">
            <h1 className="text-3xl font-bold">Budget</h1>
                <div className="flex m-2">
                    <Button primary>Add Budget</Button>
                    <Button>Add Expense</Button>
                </div>
            </div>
        </>
    )
}

export default Header;