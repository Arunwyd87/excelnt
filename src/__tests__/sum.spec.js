import Sum from "../components/sum"

test("sum of two numbers",()=>{
    const result = Sum(5,6);
    expect(result).toBe(11);
})