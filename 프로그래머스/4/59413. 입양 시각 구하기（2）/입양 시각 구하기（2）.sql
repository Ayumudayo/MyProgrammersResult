-- 코드를 입력하세요
-- 0부터 23까지의 시간을 생성하는 재귀적 CTE
WITH RECURSIVE HOURLIST AS (
    SELECT 0 AS HOUR    -- 시작 시간은 0시
    UNION ALL
    SELECT HOUR + 1     -- 시간을 1씩 증가
    FROM HOURLIST
    WHERE HOUR < 23     -- 23시까지 계속
)
-- 각 시간대별 ANIMAL_OUTS의 발생 건수를 계산하는 메인 쿼리
-- 시간대에 매칭되는 데이터가 없을 경우 0으로 처리하기 위해 COALESCE 사용
SELECT H.HOUR, COALESCE(COUNT(A.DATETIME), 0) AS COUNT
FROM HOURLIST H
    LEFT JOIN ANIMAL_OUTS A -- 아예 없는 경우도 가져와야 하므로 LEFT JOIN
        ON H.HOUR = HOUR(A.DATETIME)
GROUP BY H.HOUR
ORDER BY H.HOUR ASC;