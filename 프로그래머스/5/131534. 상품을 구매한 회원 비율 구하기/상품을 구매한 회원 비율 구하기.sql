-- 코드를 입력하세요
WITH JOINED AS (
    SELECT USER_ID
    FROM USER_INFO
    WHERE YEAR(JOINED) = 2021
),
SALES AS (
    SELECT J.USER_ID, YEAR(O.SALES_DATE) AS YEAR, MONTH(O.SALES_DATE) AS MONTH
    FROM JOINED J
    LEFT JOIN ONLINE_SALE O ON J.USER_ID = O.USER_ID
    WHERE O.SALES_DATE IS NOT NULL
)
SELECT YEAR, MONTH,
    COUNT(DISTINCT SALES.USER_ID) AS PURCHASED_USERS,
    ROUND(COUNT(DISTINCT SALES.USER_ID) * 1.0 / (SELECT COUNT(*) FROM JOINED), 1) AS PURCHASED_RATIO
FROM SALES
GROUP BY YEAR, MONTH
ORDER BY YEAR ASC, MONTH ASC;