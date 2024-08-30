function solution(id_list, report, k) {
    let rCnt = new Map();
    let tMap = new Map();

    for (let user of id_list) {
        rCnt.set(user, 0);
        tMap.set(user, new Set());
    }

    for (let rp of report) {
        const [reporter, reported] = rp.split(' ');
        tMap.get(reporter).add(reported);
    }

    for (let [reporter, reportedSet] of tMap) {
        for (let reported of reportedSet) {
            rCnt.set(reported, rCnt.get(reported) + 1);
        }
    }

    let suspendedUsers = new Set();
    for (let [user, count] of rCnt) {
        if (count >= k) {
            suspendedUsers.add(user);
        }
    }

    let answer = [];
    for (let user of id_list) {
        let mailCount = 0;
        for (let reported of tMap.get(user)) {
            if (suspendedUsers.has(reported)) {
                mailCount++;
            }
        }
        answer.push(mailCount);
    }

    return answer;
}
