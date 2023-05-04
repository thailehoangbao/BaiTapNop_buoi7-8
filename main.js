// Tạo một mảng rỗng
var myArray = [];
document.querySelector('#btnClick').onclick = function () {
    // for (var i = 0; i <= n ; i++) {
    // var numberInput = document.querySelector('#numberInput').value*1;
    // myArray.push(numberInput);
    // };

    //Bước 1 : Lấy input từ người dùng nhập gán vào biến numberInput
    while (true) {
        var numberInput = document.querySelector('#numberInput').value * 1;
        // Bước 2 :Sau đó dùng push() để gán giá trị người dùng nhập vào mảng.
        myArray.push(numberInput);
        break;
    };
    // Bước 3 : Output xuất mảng hiển thị ra giao diện
    document.querySelector('#array').style.display = 'block';
    document.querySelector('#yourArray').innerHTML = 'Mảng của bạn là : ' + myArray;


    // Tính tổng số nguyên dương trong mảng và đếm số dương
    document.querySelector('#btnSum').onclick = function () {
        //Bước 1: Khởi tạo giá trị sumArray = 0, lấy giá trị input là phần tử trong myArray
        var sumArray = 0;
        // Tạo biến dem lưu giá trị đếm số dương
        var dem = 0;
        //Bước 2 : Chạy vòng lặp từng phần tử trong mảng
        for (var i = 0; i < myArray.length; i++) {
            // Xét giá trị số dương mới tính tổng
            if (myArray[i] > 0) {
                // Nếu có số dương tăng giá trị đếm lên 1
                dem = dem + 1;
                sumArray = sum(sumArray, myArray[i]);
            };
        };
        console.log(dem);
        //Bước 3: Output xuất giá trị sumArray ra giao diện
        var displayNone = document.querySelectorAll('.display-none');
        for (var i = 0; i < displayNone.length; i++) {
            displayNone[i].style.display = 'block';
        };
        document.querySelector('#sum').innerHTML = 'Tổng là : ' + sumArray;
        //Xuất giá trị đếm số dương ra giao diện
        document.querySelector('#demSoDuong').innerHTML = 'Số dương có trong mảng là : ' + dem;
    };

    // Tìm số nhỏ nhất trong mảng
    document.querySelector('#btnMinValue').onclick = function () {
        //Bước 1 : khởi tạo giá trị minValue = giá trị đầu tiên của mảng
        var minValue = myArray[0];
        for (var i = 0; i < myArray.length; i++) {
            // Bước 2 : dùng hàm timSoNhoNhat() đã tạo bên dưới so sánh 2 số liên tiếp trong mảng
            // Gán và giá trị minValue sau khi duyệt từng phần tử trong mảng
            var minValue = timSoNhoNhat(minValue, myArray[i]);
        };
        document.querySelector('#minValue').style.display = 'block';
        document.querySelector('#minValue').innerHTML = 'Số Nhỏ Nhất là : ' + minValue;
    };

    // Tìm số Dương Nhỏ Nhất trong mảng
    document.querySelector('#btnMinValueInterger').onclick = function () {
        // Bước 1 : Khởi tạo 1 mảng mới chứa giá trị dương
        var newArray = [];
        // Dùng vòng lặp lặp qua các phần tử trong mảng cũ gán vào mảng mới
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] > 0) {
                newArray.push(myArray[i]);
            };
        };
        // khởi tạo giá trị min cho mảng mới = giá trị ban đầu
        var minInterger = newArray[0];
        for (var i = 0; i < newArray.length; i++) {
            // Bước 2 : dùng hàm tìm giá trị nhỏ nhất cho mảng mới
            minInterger = timSoNhoNhat(minInterger, newArray[i]);
        };
        // Bước 3 : output xuất giá trị min của mảng mới ra giao diện
        document.querySelector('#minValueInterger').style.display = 'block';
        document.querySelector('#minValueInterger').innerHTML = 'Số Dương Nhỏ Nhất là : ' + minInterger;
    };

    // Tìm số chẳn cuối cùng trong mảng
    document.querySelector('#btnSoChan').onclick = function () {
        // Bước 1 : InPut tạo 1 giá trị soChan và j ( bước đếm ) để nhận giá trị số chẳn cuối cùng trong mảng
        var soChan;
        var j = 0;
        for (var i = 0; i < myArray.length; i++) {
            // Bước 2 : duyệt qua từng phần tử sau đó kiểm tra số chẳn
            if (timSoChan(myArray[i])) {
                // số chẳn sẽ được gán vào giá trị số chẳn
                soChan = timSoChan(myArray[i]);
            } else {
                // không phải số chẳn thì j + 1
                j = j + 1;
                // nếu số cuối cùng k là số chẳn thì gán bien soChan là phần tử trước đó
                soChan = myArray[i - 1];
            };

        };
        // nếu j === số lượng phần tử tức là đã duyệt qua mà k có sổ nào số chẳn thì trả về -1
        if (j === myArray.length) {
            soChan = -1;
        };
        document.querySelector('#soChan').style.display = 'block';
        if (soChan !== -1) {
            document.querySelector('#soChan').innerHTML = 'Số chẳn cuối cùng là : ' + soChan;
        } else {
            document.querySelector('#soChan').innerHTML = 'Không có số chẳn trong mảng ' + soChan;
        };
    };


    // Đổi chổ giá trị
    document.querySelector('#btnPosition').onclick = function () {
        // Bước 1: input tạo mảng mới myArray2 , lấy vị trí người dùng nhập vào gán vào Position1,2
        // Tạo biến tạm value , tạo biến độ dài chuỗi myArray
        var position1 = document.querySelector('#position-1').value;
        var position2 = document.querySelector('#position-2').value;
        var myArray2 = [];
        var value = 0;
        var length = myArray.length;
        // Câu lệnh ràn buộc nhập vị trí cần đổi đúng
        if ((position1 > length) || (position2 > length) || (position1 < 0) || (position2 < 0)) {
            alert('Bạn đã nhập sai vị trí');
        };
        // Gán mảng cũ vào mảng mới để k làm thay đổi phần tử mảng cũ
        var myArray2 = myArray;
        // Hoán đổi vị trí dùng biến tạm value
        value = myArray2[position1];
        myArray2[position1] = myArray2[position2];
        myArray2[position2] = value;
        // Bước 3 : output in ra giao diện
        document.querySelector('#changePosition').style.display = 'block';
        document.querySelector('#changePosition').innerHTML = 'Mảng sau khi đổi vị trí : ' + myArray2;
    };

    // Xấp xếp mảng
    document.querySelector('#btnArrange').onclick = function () {
        //Bước 1: Nhận mảng myArray làm input
        //Bước 2: Xử lí bằng hàm xấp xếp mảng đã khai báo bên dưới
        arrangeArray(myArray);
        //Bước 3: Output xuất mảng đã xấp xếp ra giao diện
        document.querySelector('#arrange').style.display = 'block';
        document.querySelector('#arrange').innerHTML = 'Mảng đã xấp xếp tăng dần : ' + myArray;
    };

    //Tìm Số Nguyên Tố
    document.querySelector('#btnSNT').onclick = function () {
        // Bước 1 : Nhận mảng myArray làm input 
        // Bước 2 : Chạy dòng for tìm số nguyên tố đầu tiên trong mảng
        for (var i = 0; i < myArray.length; i++) {
            // sử dụng hàm soNguyenTo xét từng phần tử trong mảng có phải SNT
            if (soNguyenTo(myArray[i]) !== -1) {
                document.querySelector('#soNguyenTo').style.display = 'block';
                // Phần tử nào là SNT xuất ra giá trị đầu tiên
                document.querySelector('#soNguyenTo').innerHTML = 'Số Nguyên Tố Đầu Tiên là : ' + soNguyenTo(myArray[i]);
                break;
            };
        };
        if (i === myArray.length) {
            //Chạy hết vòng for không có số nào là SNT thì i = chiều dài mảng => xuất ra -1s
            document.querySelector('#soNguyenTo').style.display = 'block';
            document.querySelector('#soNguyenTo').innerHTML = -1;
        };
    };

};

// Tìm Số Thực
var myArray2 = [];
document.querySelector('#btnInt').onclick = function () {
    //Bước 1 : Lấy input từ người dùng nhập gán vào biến numberInput
    while (true) {
        var numberInput = document.querySelector('#numberInt').value * 1;
        // Bước 2 :Sau đó dùng push() để gán giá trị người dùng nhập vào mảng.
        myArray2.push(numberInput);
        break;
    };
    // Bước 3 : Output xuất mảng hiển thị ra giao diện
    document.querySelector('#array-2').style.display = 'block';
    document.querySelector('#intArray').innerHTML = 'Mảng của bạn là : ' + myArray2;

    // Tìm mảng số nguyên và mảng số thực và đếm số nguyên
    document.querySelector('#btnSoNguyen').onclick = function () {
        var soNguyenArray = [];
        var soThucArray = [];
        var dem = 0;
        for (var i = 0; i < myArray2.length; i++) {
            if (soNguyen(myArray2[i]) !== undefined) {
                dem = dem + 1;
                soNguyenArray.push(myArray2[i]);
            } else {
                soThucArray.push(myArray2[i]);
            };
        };
        document.querySelector('#demSoNguyen').style.display = 'block';
        document.querySelector('#arraySoNguyen').innerHTML = "<div class='alert alert-warning'>Mảng số nguyên là : " + soNguyenArray + " | Số nguyên có trong mảng là : " + dem + "</div>";
        document.querySelector('#arraySoThuc').innerHTML = "<div class='alert alert-success'> Mảng số thực là : " + soThucArray + "</div>";
    };
    // Tìm số âm và số dương trong mảng
    document.querySelector('#btnTimSoDuong').onclick = function () {
        var demSoDuong = 0;
        var demSoAm = 0;
        for (var i = 0; i < myArray2.length ; i ++) {
            if (soDuong(myArray2[i]) === 1) {
                demSoDuong = demSoDuong + 1;
            } else {
                demSoAm = demSoAm + 1;
            };
        };
        if ((demSoDuong - demSoAm ) > 0) {
            document.querySelector('#resultSoDuong').style.display = 'block';
            document.querySelector('#resultSoDuong').innerHTML = 'Số Dương là : '+ demSoDuong+ ' | Số Âm là : ' +demSoAm + ' | Số Dương > Số Âm';
        } else if ((demSoDuong-demSoAm) < 0) {
            document.querySelector('#resultSoDuong').style.display = 'block';
            document.querySelector('#resultSoDuong').innerHTML = 'Số Dương là : '+ demSoDuong+ ' | Số Âm là : '+demSoAm + ' | Số Dương < Số Âm';
        } else {
            document.querySelector('#resultSoDuong').style.display = 'block';
            document.querySelector('#resultSoDuong').innerHTML = 'Số Dương = Số Âm = ' + demSoDuong;
        };
    };
};
// Tạo 1 hàm tính tổng
const sum = (sum, value) => {
    return sum = sum + value;
};
// Tạo 1 hàm tìm giá trị nhỏ nhất của 2 số 
var timSoNhoNhat = function (a, b) {
    var min = a;
    if (min < b) {
        return min = a;
    } else {
        return min = b;
    };
};

// Tạo hàm tìm số chẳn
var timSoChan = function (soChan) {
    if (soChan % 2 === 0) {
        return soChan;
    } else {
        return false;
    };
};

//Tạo một hàm mảng tăng dần
function arrangeArray(arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        var min = i;
        //Tìm vị trí có value nhỏ nhất
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            };
        };
        // Hoán đổi vị trí có value nhỏ nhất với vị trí i theo chiều tăng dần
        if (min != i) {
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        };
    };
    return arr;
};

//Hàm tìm số nguyên tố

var soNguyenTo = function (snt) {
    if ((snt === 1) || (snt === 2)) {
        return snt;
    };
    var count = 0;
    for (var i = 2; i < snt; i++) {
        if (snt % i === 0) {
            count = count + 1;
        };
    };
    if (count === 0) { return snt }
    else { return -1 };
};

// Hàm tìm số nguyên
var soNguyen = function (soNguyen) {
    if (Number.isInteger(soNguyen)) {
        return soNguyen;
    } else {
        return undefined;
    };
};


// Hàm tìm số dương và số âm

var soDuong = function (number) {
    if (number > 0) {
        return 1;
    } else {
        return -1;
    }
};
