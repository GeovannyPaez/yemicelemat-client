// let date = '2023-02-02 17:50:36.736+00'
  
function parseDate (isodate) {
    return (
      new Date(isodate)
        .toLocaleString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
        .replace(/\//g, '/')
    );
  }
//   console.log(parseDate(date))
export default parseDate