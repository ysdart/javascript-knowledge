import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>JS!</h1>
<div>
  JSの基本をまとめるお（＾＾）
  <br>
  consoleメインで見てくれお（＾＾）
</div>
`;

/**
 * ここから↓
 */

/**
 * var-------------------------
 * なんでも可能
 */
var vari1 = 1;
var vari1 = 11;
vari1 = 111;
console.log(vari1);

/**
 * let-------------------------
 * 更新可能・再宣言不可
 */
let vari2 = 2;
//let vari2 = 22;
vari2 = 222;
console.log(vari2);

/**
 * const-------------------------
 * 更新不可・再宣言不可
 * ただし、配列・オブジェクトは可能
 */
const vari3 = 3;
//const vari3 = 33;
//vari3 = 333;
console.log(vari3);
console.log("各変数の紹介はここまで");

/**
 * オブジェクト-------------------------
 */
console.log("オブジェクト-------------------------");
const myProfile1 = {
  name: "安田",
  age: 22
};
console.log(myProfile1);
console.log(myProfile1.name);

/**
 * 分割代入-------------------------
 */
console.log("分割代入-------------------------");
const { name, age } = myProfile1;
console.log(`名前は${name}です。${age}歳です。`);

//修正、準備-------------------------
let index1 = 0;
const vari0 = 0;
vari1 = 1;
vari2 = 2;
const arr1 = [0, 1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
console.log(vari1);
console.log(vari2);
console.log(vari3);
console.log(arr1);

/**
 * if文-------------------------
 * 他にも言えることだが１処理ですむなら{}は省略可能
 */
console.log("if文-------------------------");
if (vari2 > vari1)
  console.log(`vari1(${vari1})よりvari2(${vari2})のが大きいです`);

/**
 * switch文-------------------------
 */
console.log("switch文-------------------------");
switch (vari3) {
  case 1:
    console.log(`この変数(${vari3})は1です。`);
    break;
  case 2:
    console.log(`この変数(${vari3})は2です。`);
    break;
  case 3:
    console.log(`この変数(${vari3})は3です。`);
    break;
  default:
    console.log(`この変数(${vari3})は1～3以外です。`);
}
/**
 * for文-------------------------
 */
console.log("for文-------------------------");
console.log("for文での配列展開");
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

/**
 * map機能-------------------------
 */
console.log("map機能での配列展開");
arr2.map((name) => console.log(name));

/**
 * filter機能-------------------------
 */
console.log("filter機能");
const newarr1 = arr1.filter((num) => {
  return num % 2 === 0;
});
console.log(newarr1);

/**
 * while文-------------------------
 */
console.log("while文-------------------------");
while (index1 < vari3) {
  console.log(index1);
  index1++;
}

/**
 * function,アロー関数-------------------------
 */
console.log("function,アロー関数-------------------------");
const func1 = function (str) {
  console.log(str);
};
func1("こんちゃ");

const func2 = (str) => {
  console.log(str);
};
func2("にんちゃ！！！！！！");

/**
 * スプレッド構文-------------------------
 */
console.log("スプレッド構文-------------------------");
const arr3 = [...arr1];
console.log(arr3);
arr3[4] = 99;
console.log(arr3);
console.log(arr1);

/**
 * 三項演算子-------------------------
 */
console.log("三項演算子-------------------------");
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です。";
};
console.log(checkSum(50, 60));
console.log(checkSum(50, 40));

/**
 * 論理演算子の真の意味を知ろう-------------------------
 */
console.log("論理演算子-------------------------");
// ||は左側がfalseなら右側を返す。
const flag1 = vari0 || "値が未設定です";
console.log(flag1);
// &&は左側がtrueなら右側を返す。
const flag2 = vari1 && "値が設定されています";
console.log(flag2);
