"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=c(function(C,f){
var g=require('@stdlib/assert-is-almost-equal/dist');function m(e,r,a,t,u,n){var s,o,i,v;for(s=t.data,o=t.accessors[0],i=n,v=0;v<e;v++){if(g(r,o(s,i),a))return v;i+=u}return-1}f.exports=m
});var q=c(function(D,d){
var p=require('@stdlib/array-base-arraylike2object/dist'),E=require('@stdlib/assert-is-almost-equal/dist'),O=l();function b(e,r,a,t,u,n){var s,o,i;if(e<=0)return-1;if(o=p(t),o.accessorProtocol)return O(e,r,a,o,u,n);for(s=n,i=0;i<e;i++){if(E(r,t[s],a))return i;s+=u}return-1}d.exports=b
});var y=c(function(F,x){
var j=require('@stdlib/strided-base-stride2offset/dist'),k=q();function R(e,r,a,t,u){return k(e,r,a,t,u,j(e,u))}x.exports=R
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=y(),z=q();w(A,"ndarray",z);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
