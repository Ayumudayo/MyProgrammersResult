-- 코드를 입력하세요
SELECT P.ID, P.NAME, P.HOST_ID
FROM PLACES P
JOIN (
    SELECT HOST_ID
    FROM PLACES
    GROUP BY HOST_ID
    HAVING COUNT(*) >= 2
) AS SUB
ON P.HOST_ID = SUB.HOST_ID