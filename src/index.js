module.exports = (arr, condition) => {
    arr.filter((item) => {
        return item.search.includes(condition+'')
    })
}