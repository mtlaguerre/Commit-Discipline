export default function Form() {

    return (
        <>
            <form id="satisfactionForm">
                <div>
                    <label>Name:</label>
                    <input type="text" id="nameTxtField" />

                    <label>Profession:</label>
                    <input type="text" id="professionTxtField" />
                </div>

                <div>
                    <input type="radio" name="rating"/>1
                    <input type="radio" name="rating"/>2
                    <input type="radio" name="rating"/>3
                    <input type="radio" name="rating"/>4
                    <input type="radio" name="rating"/>5
                </div>

                <button type="submit" id="submitBtn">Submit</button>
            </form>
        </>
    )
}