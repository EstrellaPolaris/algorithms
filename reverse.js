/*
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

function reverse(head) {
    let current = head;
if (!current) {
    return current;
}
let curPre = head.next;
current.next = null;
while (curPre) {
    let tmp = curPre.next;
    curPre.next = current;
    current = curPre;
    curPre = tmp;
}
return current;
}
