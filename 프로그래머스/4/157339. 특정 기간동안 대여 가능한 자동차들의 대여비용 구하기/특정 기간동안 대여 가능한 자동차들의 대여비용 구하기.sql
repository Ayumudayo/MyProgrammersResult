-- 코드를 입력하세요
-- 2022년 11월에 이용 가능한 세단과 SUV를 찾는 CTE
WITH AVAILCARS AS (
    SELECT C.CAR_ID, C.CAR_TYPE, C.DAILY_FEE
    FROM CAR_RENTAL_COMPANY_CAR C
        LEFT JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY H   -- LEFT JOIN을 통해 대여 이력이 없는 차들을 가져올 수 있음
            ON C.CAR_ID = H.CAR_ID
            AND H.START_DATE <= '2022-11-30' AND H.END_DATE >= '2022-11-01' -- 11월만 가져옴
    WHERE H.CAR_ID IS NULL
        AND (C.CAR_TYPE = '세단' OR C.CAR_TYPE = 'SUV')
),
-- 30일 이상 대여 시 적용되는 할인율을 적용한 CTE
DISCOUNTED AS (
    SELECT AC.CAR_ID, AC.CAR_TYPE, AC.DAILY_FEE, D.DISCOUNT_RATE
    FROM AVAILCARS AC
    JOIN CAR_RENTAL_COMPANY_DISCOUNT_PLAN D
        ON AC.CAR_TYPE = D.CAR_TYPE
    WHERE D.DURATION_TYPE = '30일 이상'    -- DURATION < 90
)
-- 30일 대여 시 할인 적용된 총 요금을 계산하는 메인 쿼리
SELECT DC.CAR_ID, DC.CAR_TYPE,
       FLOOR(DC.DAILY_FEE *                 -- 일일 요금
            (1 - DC.DISCOUNT_RATE / 100) *  -- 할인율 적용
             30                             -- 30일
        ) AS FEE
FROM DISCOUNTED DC
HAVING FEE >= 500000 AND FEE < 2000000  -- = BETWEEN 500000 AND 1999999
ORDER BY FEE DESC, DC.CAR_TYPE ASC, DC.CAR_ID DESC;