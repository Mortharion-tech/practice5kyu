/* Given an array arr of strings, complete the function by calculating the total perimeter of all the islands.
Each piece of land will be marked with 'X' while the water fields are represented as 'O'.
Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO'] 
which represents:

should return: "Total land perimeter: 24".

Following input:

['XOOO',
 'XOXO',
 'XOXO',
 'OOXX',
 'OOOO']
which represents:

should return: "Total land perimeter: 18" */

function landPerimeter(arr) {
    let perimeter = 0;

    function isLand(i, j) {
        return arr[i] && arr[i][j] === 'X';
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'X') {
                if (!isLand(i - 1, j)) perimeter++;
                if (!isLand(i + 1, j)) perimeter++;
                if (!isLand(i, j - 1)) perimeter++;
                if (!isLand(i, j + 1)) perimeter++;
            }
        }
    }

    return `Total land perimeter: ${perimeter}`;
}