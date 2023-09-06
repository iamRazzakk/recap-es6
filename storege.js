const addMeOnLocalStorage = () => {
    const keyField = document.getElementById("key-field")
    const valueField = document.getElementById("value-field")
    const key = keyField.value;
    const value = valueField.value
    if (key && value) {
        localStorage.setItem(key, value)
    }
    keyField.value = ""
    valueField.value = ""
}
