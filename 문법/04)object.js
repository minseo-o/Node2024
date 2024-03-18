const cathy = {
    name: "cathy",
    age: 19,
    skills: ["자바스크립트", "파이썬", "코볼"]
}

console.log(cathy)
console.log(cathy.name)
console.log(cathy["name"])

// 속성 추가
cathy["hobby"] = "독서"
console.log(cathy)

// 속성 제거
delete cathy["hobby"]
console.log(cathy)
