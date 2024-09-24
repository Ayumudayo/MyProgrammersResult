-- 코드를 입력하세요
-- 2021년에 가입한 사용자들을 선택하는 CTE
WITH JOINED AS (
    SELECT USER_ID
    FROM USER_INFO
    WHERE YEAR(JOINED) = 2021   -- 가입 연도가 2021년인 사용자 필터링
),
-- 2021년에 가입한 사용자들의 판매 데이터를 가져오는 CTE
SALES AS (
    SELECT J.USER_ID, YEAR(O.SALES_DATE) AS YEAR, MONTH(O.SALES_DATE) AS MONTH
    FROM JOINED J
    LEFT JOIN ONLINE_SALE O ON J.USER_ID = O.USER_ID    -- 구매 기록이 없는 사용자도 포함하기 위한 LEFT JOIN
    WHERE O.SALES_DATE IS NOT NULL
)
-- 월별 구매자 수와 그 비율을 계산하는 메인 쿼리
SELECT YEAR, MONTH,
    -- 어떤 유저가 구매했다는 사실은 하나기 때문에 DISTINCT로 중복을 걸러줌
    COUNT(DISTINCT SALES.USER_ID) AS PURCHASED_USERS,
    -- 총 가입자 대비 구매자 비율을 소수점 첫째 자리까지 반올림
    ROUND(COUNT(DISTINCT SALES.USER_ID) * 1.0 / (SELECT COUNT(*) FROM JOINED), 1) AS PURCHASED_RATIO 
FROM SALES
GROUP BY YEAR, MONTH
ORDER BY YEAR ASC, MONTH ASC;