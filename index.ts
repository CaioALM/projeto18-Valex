function joinString(str1: string, str2: string): string {
let result: string = '';
result = str1 + str2;
result = result.toUpperCase()
return result;
}

function multiple(value1: number, value2: number): number {
let mult: number = value1*value2;
return mult;
}

function arrayNumber(arr: number[]): number[] {
const result: number[] = arr.filter(par =>  (par %2 ===0 ));
return result

}
console.log(joinString("arroz", "feijão"))
console.log(multiple(3, 3))
console.log(arrayNumber([3, 2, 1, 5, 6, 7, 8, 9, 10, 12, 16]))