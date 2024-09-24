-- 코드를 입력하세요
-- 트럭 대여의 총 대여 요금을 계산하는 쿼리
SELECT H.HISTORY_ID,
    FLOOR(C.DAILY_FEE * (DATEDIFF(H.END_DATE, H.START_DATE) + 1) * (1 - COALESCE(D.DISCOUNT_RATE, 0) / 100)) AS FEE
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY H
JOIN CAR_RENTAL_COMPANY_CAR C ON H.CAR_ID = C.CAR_ID
LEFT JOIN CAR_RENTAL_COMPANY_DISCOUNT_PLAN D    -- 할인 계획 테이블
    ON C.CAR_TYPE = D.CAR_TYPE                  -- 차량 유형에 따른 할인율 적용
    AND (
        -- 대여 기간과 할인 기간 유형이 일치하는 조건
        (DATEDIFF(H.END_DATE, H.START_DATE) + 1) >= 90 AND D.DURATION_TYPE = '90일 이상'
        OR (DATEDIFF(H.END_DATE, H.START_DATE) + 1) >= 30 AND (DATEDIFF(H.END_DATE, H.START_DATE) + 1) < 90 AND D.DURATION_TYPE = '30일 이상'
        OR (DATEDIFF(H.END_DATE, H.START_DATE) + 1) >= 7 AND (DATEDIFF(H.END_DATE, H.START_DATE) + 1) < 30 AND D.DURATION_TYPE = '7일 이상'
)
WHERE C.CAR_TYPE = '트럭'
ORDER BY FEE DESC, H.HISTORY_ID DESC;