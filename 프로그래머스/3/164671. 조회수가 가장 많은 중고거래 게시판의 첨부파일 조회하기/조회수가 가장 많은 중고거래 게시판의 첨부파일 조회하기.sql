-- 코드를 입력하세요
WITH MAX_BOARD AS (
    SELECT BOARD_ID
    FROM USED_GOODS_BOARD
    ORDER BY VIEWS DESC
    LIMIT 1
)

SELECT CONCAT('/home/grep/src/', F.BOARD_ID, '/', F.FILE_ID, F.FILE_NAME, F.FILE_EXT) AS FILE_PATH
FROM USED_GOODS_FILE F
JOIN MAX_BOARD M ON F.BOARD_ID = M.BOARD_ID
ORDER BY F.FILE_ID DESC