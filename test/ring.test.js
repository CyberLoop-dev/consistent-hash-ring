import test from"node:test";import assert from"node:assert/strict";import{buildRing,assignKey,hash32}from"../public/ring.js";
test("hashes are deterministic unsigned integers",()=>{assert.equal(hash32("alpha"),hash32("alpha"));assert.ok(hash32("alpha")>=0);});
test("builds virtual points and maps every key",()=>{const ring=buildRing(["a","b","c"],12);assert.equal(ring.length,36);assert.equal(assignKey(ring,"k1").node.length,1);});
test("rejects an empty cluster",()=>{assert.throws(()=>buildRing([],10),/at least one node/);});
