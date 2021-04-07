function findMatching(drivers, string) {
    let names = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return names
}

function fuzzyMatch(drivers, string) {
    let names = drivers.filter(driver => driver.startsWith(string))
    return names
}

function matchName(drivers, string) {
    let names = drivers.filter(driver => driver.name === string)
    return names
}