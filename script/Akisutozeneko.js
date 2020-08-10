function ErrorCheck() {
    var Text1 = document.getElementById("Text1");
    var Text2 = document.getElementById("Text2");

    if (Text1.value.match("^[a-zA-Z]+$") && Text2.value.match("^[a-zA-Z]+$"))
        return false;
    else
        return true;

}


// 特定文字を数字に変換して戻す
function NumChange(change_name) {
    // 対象文字置換
    change_name = change_name.replace(/A/g, '1');
    change_name = change_name.replace(/I/g, '2');
    change_name = change_name.replace(/U/g, '3');
    change_name = change_name.replace(/E/g, '4');
    change_name = change_name.replace(/O/g, '5');
    change_name = change_name.replace(/a/g, '1');
    change_name = change_name.replace(/i/g, '2');
    change_name = change_name.replace(/u/g, '3');
    change_name = change_name.replace(/e/g, '4');
    change_name = change_name.replace(/o/g, '5');

    // 対象文字以外消去
    change_name = change_name.replace(/[^1-5]/g, '');


    return change_name;
}

// 占い計算
function DivinationCalc(NameValue) {
    var NewNameValue = "";
    var Total = 0;

    // 隣の数値を加算
    for (var loop = 0; loop < NameValue.length - 1; loop++) {
        Total = parseInt(NameValue.charAt(loop)) + parseInt(NameValue.charAt(loop + 1));

        // 桁を詰める
        if (Total >= 10) Total %= 10;
        NewNameValue += Total.toString();
    }

    return NewNameValue;
}

function Divination() {
    var Text1 = document.getElementById("Text1");
    var Text2 = document.getElementById("Text2");

    var str = ["恋人", "愛してる", "嫌い", "好き", "友達", "絶交", "熱中", "恋人", "愛してる", "嫌い"];

    // 数字に変換
    var NameValue = NumChange(Text1.value);
    NameValue += NumChange(Text2.value);

    // 占い確率計算
    var CalcValue = NameValue;
    while (CalcValue.length > 3 || parseInt(CalcValue) > 100) {
        CalcValue = DivinationCalc(CalcValue);
    }

    // 占い結果計算
    var CalcIndex = CalcValue;
    while (CalcIndex.length > 1) {
        CalcIndex = DivinationCalc(CalcIndex);
    }
    // 表示
    NameValue = "計算値：" + NameValue;
    hantei = "結果：" + str[CalcIndex];
    kakuritu = "確率：" + CalcValue + "％";
    return [NameValue, hantei, kakuritu];
}


function Akisutozeneko() {

    var Text3 = document.getElementById("Text3");
    var Text4 = document.getElementById("Text4");
    var Text5 = document.getElementById("Text5");

    // 初期値
    Text3.textContent = "";
    Text4.textContent = "";
    Text5.textContent = "";

    // 入力エラーチェック
    if (ErrorCheck() == true) {
        Text3.textContent = "入力値不正";
        return;
    }

    [Text3.textContent, Text4.textContent, Text5.textContent] = Divination();


}