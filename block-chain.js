/* Create a blockChain that create a block in your very own block chain.

the function takes 2 arguments:

    data any valid JSON data
    prev the previous block, if no block are given it should use the
    genesis block: { index: 0, hash: '0' }

A block must have the following properties:

    index
    hash a computed hash using the concatenation of the index, hash
    and stringified data and hashing all of it using the provided hashCode.
    data the data (not encoded in JSON)
    prev the previous block
    chain a function that takes a new data and create the next block with it. */



function blockChain(data,prev = { index: 0, hash: '0' }){
    let obj  = {
        data,
        prev,
    }
    obj.index = obj.prev.index + 1
    obj.hash = hashCode(obj.index+prev.hash+JSON.stringify(data))
    obj.chain = (data) => blockChain(data,obj)
  return obj
}