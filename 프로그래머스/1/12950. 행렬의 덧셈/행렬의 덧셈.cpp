#include <string>
#include <vector>

using namespace std;

using Matrix = std::vector<std::vector<int>>;

Matrix addMatrices(const Matrix& mat1, const Matrix& mat2) {
    int rows = mat1.size();
    int cols = mat1[0].size();
    Matrix result(rows, std::vector<int>(cols));

    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            result[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return result;
}

vector<vector<int>> solution(vector<vector<int>> arr1, vector<vector<int>> arr2) {
    return addMatrices(arr1, arr2);
}