export const getDateTime = () => {
    const date = new Date()
    const day = date.toLocaleDateString('id-ID', { weekday: 'long' })
    const year = date.toLocaleDateString('id-ID', { year: 'numeric' })
    const month = date.toLocaleDateString('id-ID', { month: 'long' })
    const dayNumber = date.toLocaleDateString('id-ID', { day: 'numeric' })
    const hour = date.toLocaleTimeString('id-ID', { hour: '2-digit', hour12: false })
    let minute = date.toLocaleTimeString('id-ID', { minute: '2-digit' })

    // Prepend a zero if the minutes are less than 10
    minute = parseInt(minute) < 10 ? `0${minute}` : minute

    return `${day}, ${dayNumber} ${month} ${year} ${hour}:${minute}`
}