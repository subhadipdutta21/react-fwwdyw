
export const QueryBuilder = (data, query) => {

    // Specifed which column names support which all operations
    let columnNamesWithSupportedOperations = {
        name: ['CONTAINS', 'EQ'],
        screenName: ['CONTAINS', 'EQ'],
        followersCount: ['GTE', 'LTE', 'EQ'],
        followingCount: ['GTE', 'LTE', 'EQ'],
        location: ['CONTAINS', 'EQ'],
        verified: ['EQ', 'CONTAINS']
    }

    let temp = []

    // query filter
    query.map(queryItm => {

        if (queryItm.value !== "" && columnNamesWithSupportedOperations?.[queryItm.id]?.includes(queryItm?.operator)) {
            if (queryItm.operator === 'EQ' || queryItm.operator === 'CONTAINS') {
                queryItm.id.toLowerCase().search('count') >= 0 ?
                    temp = temp.length > 0 ? temp.filter(dataItm => dataItm?.[queryItm.id] === parseInt(queryItm?.value))
                        : data.filter(dataItm => dataItm?.[queryItm.id] === parseInt(queryItm?.value))
                    :
                    temp = temp.length > 0 ? temp.filter(dataItm => dataItm?.[queryItm.id]?.toLowerCase()?.startsWith(queryItm?.value?.toLowerCase()))
                        : data.filter(dataItm => dataItm?.[queryItm.id]?.toLowerCase()?.startsWith(queryItm?.value?.toLowerCase()))

            } else if (queryItm.operator === 'GTE') {
                temp.length > 0 ? temp = temp.filter(itm => itm[queryItm.id] >= parseInt(queryItm?.value))
                    : temp = data.filter(itm => itm.followingCount >= parseInt(queryItm?.value))
            } else if (queryItm.operator === 'LTE') {
                temp.length > 0 ? temp = temp.filter(itm => itm[queryItm.id] <= parseInt(queryItm?.value))
                    : temp = data.filter(itm => itm.followingCount <= parseInt(queryItm?.value))
            }

        } else { console.log('incomplete or query unsupportd operation!') }
    })

    // return data
    if (temp.length > 0) return temp
    else if (temp.length === 0 && query.length === 0) return data
    else if (temp.length === 0 && query.length > 0 && query[0]?.id !== "" && query[0]?.operator !== "") return temp
    else return data
}

