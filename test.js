const functions = require('./functions')

test("Add 2+2 to equals 4", () => {
    expect(functions.add(2,2)).toBe(4)
})

test("2+1 not equals to 4", () => {
    expect(functions.add(2,2)).toBe(4)
})

test ("returns null", () => {
    expect(functions.getNull()).toBeNull()
})

test ("check username to hamidou", () => {
    const username = functions.createUser().surname
    expect(username).toBe("hamidou")
})


/// REVERSE STRING TEST

test ("abcd to return dcba", () => {
    const reversed = functions.reverseString("ABCD")
    expect(reversed).toBe("dcba")
})

/// ANAGRAM TEST

test ("abcd is anagram of dcba", () => {
    const isTrullyAnagram = functions.isAnagram("abcd", "dcba")
    expect(isTrullyAnagram).toBe(true)
})

test ("abcd is not anagram of abce", () => {
    const isNotAnagram = functions.isAnagram("abcd", "abce")
    expect(isNotAnagram).toBe(false)
})

/// CHUNKY TEST

test ("([1,2,3],3) will return [[1, 2, 3]]", () => {
    const isChunked = functions.chunckArray([1,2,3], 3)
    expect(isChunked).toEqual([[1, 2, 3]])
})

test ("([1,2,3],1) will return [[1],[2],[3]]", () => {
    const isChunked = functions.chunckArray([1, 2, 3], 1)
    expect(isChunked).toEqual([[1],[2],[3]])
})