(()=>{"use strict";function t(l){if(1===l.length)return l;{const s=Math.ceil(l.length/2);let n=t(l.slice(0,s)),e=t(l.slice(s)),h=[];for(;n[0]||e[0];)n[0]<e[0]?(h.push(n[0]),n.shift()):e[0]<n[0]?(h.push(e[0]),e.shift()):n[0]==e[0]?(h.push(n[0]),h.push(e[0]),n.shift(),e.shift()):n[0]?e[0]||(h.push(n[0]),n.shift()):(h.push(e[0]),e.shift());return h}}class l{constructor(t){this.data=t,this.left=null,this.right=null}}function s(t){if(0===t.length)return null;{const n=Math.floor(t.length/2),e=new l(t[n]);return e.left=s(t.slice(0,n)),e.right=s(t.slice(n+1)),e}}const n=(t,l="",s=!0)=>{null!==t&&(null!==t.right&&n(t.right,`${l}${s?"│   ":"    "}`,!1),console.log(`${l}${s?"└── ":"┌── "}${t.data}`),null!==t.left&&n(t.left,`${l}${s?"    ":"│   "}`,!0))},e=new class{constructor(l){this.root=function(l){let n=t(l);return s([...new Set(n)])}(l)}}([1,7,4,23,8,9,4,3,5,7,9,67,6345,324]);console.log(e),n(e.root)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQU8sU0FBU0EsRUFBVUMsR0FDdEIsR0FBcUIsSUFBakJBLEVBQU1DLE9BQWMsT0FBT0QsRUFDMUIsQ0FDRCxNQUFNRSxFQUFPQyxLQUFLQyxLQUFLSixFQUFNQyxPQUFPLEdBSXBDLElBQUlJLEVBQWlCTixFQUZKQyxFQUFNTSxNQUFNLEVBQUdKLElBTTVCSyxFQUFrQlIsRUFGSkMsRUFBTU0sTUFBTUosSUFLMUJNLEVBQWMsR0FDbEIsS0FBT0gsRUFBZSxJQUFNRSxFQUFnQixJQUNwQ0YsRUFBZSxHQUFLRSxFQUFnQixJQUNwQ0MsRUFBWUMsS0FBS0osRUFBZSxJQUNoQ0EsRUFBZUssU0FDUkgsRUFBZ0IsR0FBS0YsRUFBZSxJQUMzQ0csRUFBWUMsS0FBS0YsRUFBZ0IsSUFDakNBLEVBQWdCRyxTQUdUTCxFQUFlLElBQU1FLEVBQWdCLElBQzVDQyxFQUFZQyxLQUFLSixFQUFlLElBQ2hDRyxFQUFZQyxLQUFLRixFQUFnQixJQUNqQ0YsRUFBZUssUUFDZkgsRUFBZ0JHLFNBRVJMLEVBQWUsR0FHZkUsRUFBZ0IsS0FDeEJDLEVBQVlDLEtBQUtKLEVBQWUsSUFDaENBLEVBQWVLLFVBSmZGLEVBQVlDLEtBQUtGLEVBQWdCLElBQ2pDQSxFQUFnQkcsU0FNeEIsT0FBT0YsQ0FDWCxDQUNKLENDcENBLE1BQU1HLEVBQ0YsV0FBQUMsQ0FBWUMsR0FDUkMsS0FBS0MsS0FBTUYsRUFDWEMsS0FBS0UsS0FBTyxLQUNaRixLQUFLRyxNQUFRLElBQ2pCLEVBY0osU0FBU0MsRUFBbUJsQixHQUN4QixHQUFxQixJQUFqQkEsRUFBTUMsT0FDTixPQUFPLEtBQ0osQ0FDSCxNQUFNa0IsRUFBY2hCLEtBQUtpQixNQUFNcEIsRUFBTUMsT0FBTyxHQUN0Q29CLEVBQU8sSUFBSVYsRUFBS1gsRUFBTW1CLElBSzVCLE9BSEFFLEVBQUtMLEtBQU9FLEVBQW1CbEIsRUFBTU0sTUFBTSxFQUFHYSxJQUM5Q0UsRUFBS0osTUFBUUMsRUFBbUJsQixFQUFNTSxNQUFNYSxFQUFjLElBRW5ERSxDQUNYLENBRUosQ0NwQ08sTUFBTUMsRUFBYyxDQUFDQyxFQUFNQyxFQUFTLEdBQUlDLEdBQVMsS0FDekMsT0FBVEYsSUFHZSxPQUFmQSxFQUFLTixPQUNQSyxFQUFZQyxFQUFLTixNQUFPLEdBQUdPLElBQVNDLEVBQVMsT0FBUyxVQUFVLEdBRWxFQyxRQUFRQyxJQUFJLEdBQUdILElBQVNDLEVBQVMsT0FBUyxTQUFTRixFQUFLUixRQUN0QyxPQUFkUSxFQUFLUCxNQUNQTSxFQUFZQyxFQUFLUCxLQUFNLEdBQUdRLElBQVNDLEVBQVMsT0FBUyxVQUFVLEdBQ2pFLEVDRklHLEVBQVUsSUZHVCxNQUNILFdBQUFoQixDQUFZWixHQUNSYyxLQUFLTyxLQUliLFNBQW1CckIsR0FDWCxJQUFJNkIsRUFBYzlCLEVBQVVDLEdBRTVCLE9BQU9rQixFQURpQixJQUFLLElBQUlZLElBQUlELElBRTdDLENBUm9CRSxDQUFVL0IsRUFDMUIsR0VWYyxDQUFDLEVBQUcsRUFBRyxFQUFHLEdBQUksRUFBRyxFQUFHLEVBQUcsRUFBRyxFQUFHLEVBQUcsRUFBRyxHQUFJLEtBQU0sTUFLL0QwQixRQUFRQyxJQUFJQyxHQUNaTixFQUFZTSxFQUFRUCxLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLWJhbGFuY2VkLWJpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhbGFuY2VkLWJpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9iaW5hcnlTZWFyY2hUcmVlLmpzIiwid2VicGFjazovL3RvcC1iYWxhbmNlZC1iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvcHJldHR5UHJpbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhbGFuY2VkLWJpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5KSB7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFycmF5O1xuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBoYWxmID0gTWF0aC5jZWlsKGFycmF5Lmxlbmd0aC8yKVxuICAgICAgICAvLyBzcGxpdCBhcnJheSBpbiBoYWxmXG4gICAgICAgIGNvbnN0IGxlZnRIYWxmID0gYXJyYXkuc2xpY2UoMCwgaGFsZilcbiAgICAgICAgLy8gY2FsbCBtZXJnZVNvcnQgb24gdGhlIGxlZnQgaGFsZlxuICAgICAgICBsZXQgc29ydGVkTGVmdEhhbGYgPSBtZXJnZVNvcnQobGVmdEhhbGYpXG5cbiAgICAgICAgY29uc3QgcmlnaHRIYWxmID0gYXJyYXkuc2xpY2UoaGFsZilcbiAgICAgICAgLy8gY2FsbCBtZXJnZVNvcnQgb24gdGhlIHJpZ2h0IGhhbGZcbiAgICAgICAgbGV0IHNvcnRlZFJpZ2h0SGFsZiA9IG1lcmdlU29ydChyaWdodEhhbGYpO1xuXG4gICAgICAgIC8vZm9yIGVhY2ggZWxlbWVudCBpbiBsZWZ0IGhhbGYgYW5kIHJpZ2h0IGhhbGYsIHNlZSB3aGljaCBpcyBzbWFsbGVyXG4gICAgICAgIGxldCBtZXJnZWRBcnJheSA9IFtdO1xuICAgICAgICB3aGlsZSAoc29ydGVkTGVmdEhhbGZbMF0gfHwgc29ydGVkUmlnaHRIYWxmWzBdKSB7XG4gICAgICAgICAgICBpZiAoc29ydGVkTGVmdEhhbGZbMF0gPCBzb3J0ZWRSaWdodEhhbGZbMF0pIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHNvcnRlZExlZnRIYWxmWzBdKVxuICAgICAgICAgICAgICAgIHNvcnRlZExlZnRIYWxmLnNoaWZ0KClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc29ydGVkUmlnaHRIYWxmWzBdIDwgc29ydGVkTGVmdEhhbGZbMF0pIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHNvcnRlZFJpZ2h0SGFsZlswXSlcbiAgICAgICAgICAgICAgICBzb3J0ZWRSaWdodEhhbGYuc2hpZnQoKVxuXG4gICAgICAgICAgICAgICAgLy8gZWRnZSBjYXNlIHdoZXJlIHRoZSBzYW1lIG51bWJlciBpcyBiZWluZyBjb21wYXJlZFxuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3J0ZWRMZWZ0SGFsZlswXSA9PSBzb3J0ZWRSaWdodEhhbGZbMF0pIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHNvcnRlZExlZnRIYWxmWzBdKVxuICAgICAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goc29ydGVkUmlnaHRIYWxmWzBdKVxuICAgICAgICAgICAgICAgIHNvcnRlZExlZnRIYWxmLnNoaWZ0KClcbiAgICAgICAgICAgICAgICBzb3J0ZWRSaWdodEhhbGYuc2hpZnQoKVxuICAgICAgICAgICAgICAgIC8vIGVkZ2UgY2FzZSB3aGVyZSBvbmUgYXJyYXkgaXMgZW1wdHlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNvcnRlZExlZnRIYWxmWzBdKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChzb3J0ZWRSaWdodEhhbGZbMF0pXG4gICAgICAgICAgICAgICAgc29ydGVkUmlnaHRIYWxmLnNoaWZ0KClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNvcnRlZFJpZ2h0SGFsZlswXSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goc29ydGVkTGVmdEhhbGZbMF0pXG4gICAgICAgICAgICAgICAgc29ydGVkTGVmdEhhbGYuc2hpZnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVyZ2VkQXJyYXk7XG4gICAgfVxufSIsImltcG9ydCB7IG1lcmdlU29ydCB9IGZyb20gXCIuL21lcmdlU29ydFwiO1xuXG5pbXBvcnQgeyBwcmV0dHlQcmludCB9IGZyb20gXCIuL3ByZXR0eVByaW50XCI7XG5cbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGF0YT0gdmFsdWU7XG4gICAgICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUcmVlIHtcbiAgICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgICAgICB0aGlzLnJvb3QgPSBidWlsZFRyZWUoYXJyYXkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRUcmVlKGFycmF5KSB7XG4gICAgICAgIGxldCBzb3J0ZWRBcnJheSA9IG1lcmdlU29ydChhcnJheSlcbiAgICAgICAgbGV0IHJlbW92ZWREdXBsaWNhdGVzID0gWy4uLiBuZXcgU2V0KHNvcnRlZEFycmF5KV1cbiAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUJ1aWxkVHJlZShyZW1vdmVkRHVwbGljYXRlcylcbn1cblxuZnVuY3Rpb24gcmVjdXJzaXZlQnVpbGRUcmVlKGFycmF5KSB7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDsgLy8gd2hhdCBkbyBpIG5lZWQgdG8gcmV0dXJuPyBhcnJheT8gbm9kZT9cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtaWRkbGVJbmRleCA9IE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoLzIpXG4gICAgICAgIGNvbnN0IHJvb3QgPSBuZXcgTm9kZShhcnJheVttaWRkbGVJbmRleF0pXG5cbiAgICAgICAgcm9vdC5sZWZ0ID0gcmVjdXJzaXZlQnVpbGRUcmVlKGFycmF5LnNsaWNlKDAsIG1pZGRsZUluZGV4KSlcbiAgICAgICAgcm9vdC5yaWdodCA9IHJlY3Vyc2l2ZUJ1aWxkVHJlZShhcnJheS5zbGljZShtaWRkbGVJbmRleCArIDEpKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyb290KVxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG5cbn0iLCJleHBvcnQgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XG4gIH1cbiAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICB9XG59OyIsIi8vIGltcG9ydCB7IE5vZGUsIFRyZWUsIGJ1aWxkVHJlZSB9IGZyb20gXCIuL2JpbmFyeVNlYXJjaFRyZWVcIjtcbmltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi9iaW5hcnlTZWFyY2hUcmVlXCI7XG5pbXBvcnQgeyBwcmV0dHlQcmludCB9IGZyb20gXCIuL3ByZXR0eVByaW50XCI7XG5cbmNvbnN0IHRlc3RBcnJheSA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF1cblxuXG4vLyBidWlsZFRyZWUodGVzdEFycmF5KVxuY29uc3QgbmV3VHJlZSA9IG5ldyBUcmVlKHRlc3RBcnJheSlcbmNvbnNvbGUubG9nKG5ld1RyZWUpXG5wcmV0dHlQcmludChuZXdUcmVlLnJvb3QpIl0sIm5hbWVzIjpbIm1lcmdlU29ydCIsImFycmF5IiwibGVuZ3RoIiwiaGFsZiIsIk1hdGgiLCJjZWlsIiwic29ydGVkTGVmdEhhbGYiLCJzbGljZSIsInNvcnRlZFJpZ2h0SGFsZiIsIm1lcmdlZEFycmF5IiwicHVzaCIsInNoaWZ0IiwiTm9kZSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJ0aGlzIiwiZGF0YSIsImxlZnQiLCJyaWdodCIsInJlY3Vyc2l2ZUJ1aWxkVHJlZSIsIm1pZGRsZUluZGV4IiwiZmxvb3IiLCJyb290IiwicHJldHR5UHJpbnQiLCJub2RlIiwicHJlZml4IiwiaXNMZWZ0IiwiY29uc29sZSIsImxvZyIsIm5ld1RyZWUiLCJzb3J0ZWRBcnJheSIsIlNldCIsImJ1aWxkVHJlZSJdLCJzb3VyY2VSb290IjoiIn0=