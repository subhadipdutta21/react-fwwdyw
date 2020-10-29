export const QueryBuilder = (data, query) => {

    console.log(data, query)

    // Specifed which column names support which all operations
    let columnNamesWithSupportedOperations = {
        name: ['CONTAINS', 'EQ'],
        screen_name: ['CONTAINS', 'EQ'],
        followers_count: ['GTE', 'LTE', 'EQ'],
        following_count: ['GTE', 'LTE', 'EQ'],
        location: ['CONTAINS', 'EQ'],
        verified: ['EQUALS', 'CONTAINS']
    }

    let temp = []

    query.map(queryItm => {

        if (queryItm.value !== "" && columnNamesWithSupportedOperations?.[queryItm.id]?.includes(queryItm?.operator)) {
            console.log('operation supported!', queryItm)
            if (queryItm.operator === 'EQ' || queryItm.operator === 'CONTAINS') {
                temp = data.filter(dataItm => dataItm?.[queryItm.id]?.toLowerCase()?.startsWith(queryItm?.value?.toLowerCase()))
                console.log('result__', temp)
            } else if (queryItm.operator === 'GTE') {
                temp.length > 0 ? temp = temp.filter(itm => itm.followingCount >= parseInt(queryItm?.value))
                    : temp = data.filter(itm => itm.followingCount >= parseInt(queryItm?.value))
            } else if (queryItm.operator === 'LTE') {
                temp.length > 0 ? temp = temp.filter(itm => itm.followingCount <= parseInt(queryItm?.value))
                    : temp = data.filter(itm => itm.followingCount <= parseInt(queryItm?.value))
            }

        } else { console.log('unsupportd operation') }
    })
    console.log('temp before sending__', temp)

    if (temp.length > 0) return temp
    else return data
}

