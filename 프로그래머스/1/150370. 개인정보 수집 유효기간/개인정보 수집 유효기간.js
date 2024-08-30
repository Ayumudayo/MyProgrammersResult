function dateToDays(date) {
    const [year, month, day] = date.split('.').map(Number);
    return year * 12 * 28 + month * 28 + day;
}

function solution(today, terms, privacies) {    
    const todayDay = dateToDays(today);
    
    const termDict = {};
    terms.forEach(term => {
        const [termType, duration] = term.split(' ');
        termDict[termType] = parseInt(duration);
    });
    
    const result = [];
    
    privacies.forEach((privacy, index) => {
        const [date, termType] = privacy.split(' ');
        const colDay = dateToDays(date);
        const exdDay = colDay + termDict[termType] * 28 - 1;
        
        if (exdDay < todayDay) {
            result.push(index + 1);
        }
    });
    
    return result;
}
